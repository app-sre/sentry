SHELL:=/bin/bash
IMAGE_PREFIX := quay.io/app-sre
IMAGE_NAME := quay.io/app-sre/sentry
IMAGE_TAG := $(shell git rev-parse --short=7 HEAD)

SENTRY_INITIAL_EMAIL ?= tester@fake.com
SENTRY_INITIAL_PASSWORD ?= test

ifneq ($(GITHUB_APP_ID),)
	APP_ID := -e "GITHUB_APP_ID=$(GITHUB_APP_ID)"
endif

ifneq ($(GITHUB_API_SECRET),)
	APP_SECRET := -e "GITHUB_API_SECRET=$(GITHUB_API_SECRET)"
endif

ifneq (,$(wildcard $(CURDIR)/.docker))
	DOCKER_CONF := $(CURDIR)/.docker
else
	DOCKER_CONF := $(HOME)/.docker
endif


.PHONY: build
build: sentryimage symbolicatorimage

sentryimage:
	@docker build --pull -t $(IMAGE_NAME):latest sentry
	@docker tag $(IMAGE_NAME):latest $(IMAGE_NAME):$(IMAGE_TAG)

symbolicatorimage:
	@docker build --pull -t $(IMAGE_PREFIX)/symbolicator:latest symbolicator
	@docker tag $(IMAGE_PREFIX)/symbolicator:latest $(IMAGE_PREFIX)/symbolicator:$(IMAGE_TAG)

.PHONY: push
push:
	@docker --config=$(DOCKER_CONF) push $(IMAGE_NAME):latest
	@docker --config=$(DOCKER_CONF) push $(IMAGE_NAME):$(IMAGE_TAG)

.PHONY: localup
localup:
	@$(eval key := $(shell docker run --rm -it $(IMAGE_NAME):$(IMAGE_TAG) sentry config generate-secret-key))
	docker run -d --name sentry-redis redis
	docker run -d --name sentry-postgres --env POSTGRES_PASSWORD=secret --env POSTGRES_USER=sentry postgres:9.6
	docker run --link sentry-redis:redis --link sentry-postgres:postgres -e "SENTRY_SECRET_KEY='$(key)'" --rm -it $(IMAGE_NAME):$(IMAGE_TAG) upgrade --noinput
	docker run --link sentry-redis:redis --link sentry-postgres:postgres -e "SENTRY_SECRET_KEY='$(key)'" --rm -it $(IMAGE_NAME):$(IMAGE_TAG) sentry createuser --email ${SENTRY_INITIAL_EMAIL} --password ${SENTRY_INITIAL_PASSWORD} --superuser --no-input
	docker run --link sentry-redis:redis --link sentry-postgres:postgres -e "SENTRY_SECRET_KEY='$(key)'" -d --name sentry-symbolicator ${IMAGE_PREFIX}/symbolicator:$(IMAGE_TAG) run -c /etc/symbolicator/config.yml
	docker run --link sentry-redis:redis --link sentry-symbolicator:symbolicator --link sentry-postgres:postgres -e "SENTRY_SECRET_KEY='$(key)'" $(APP_ID) $(APP_SECRET) -e "SENTRY_SINGLE_ORGANIZATION=True" -d --name sentry-cron $(IMAGE_NAME):$(IMAGE_TAG) run cron
	docker run --link sentry-redis:redis --link sentry-symbolicator:symbolicator --link sentry-postgres:postgres -e "SENTRY_SECRET_KEY='$(key)'" $(APP_ID) $(APP_SECRET) -e "SENTRY_SINGLE_ORGANIZATION=True" -d --name sentry-web-01 --publish 9000:9000 $(IMAGE_NAME):$(IMAGE_TAG) run web
	docker run --link sentry-redis:redis --link sentry-symbolicator:symbolicator --link sentry-postgres:postgres -e "SENTRY_SECRET_KEY='$(key)'" $(APP_ID) $(APP_SECRET) -e "SENTRY_SINGLE_ORGANIZATION=True" -d --name sentry-worker-01 $(IMAGE_NAME):$(IMAGE_TAG) run worker
	@echo "You can now access sentry on http://localhost:9000 with user $(SENTRY_INITIAL_EMAIL) and password $(SENTRY_INITIAL_PASSWORD)"

.PHONY: localdown
localdown:
	docker stop sentry-cron sentry-web-01 sentry-worker-01 sentry-redis sentry-postgres sentry-symbolicator
	docker rm sentry-cron sentry-web-01 sentry-worker-01 sentry-redis sentry-postgres sentry-symbolicator
