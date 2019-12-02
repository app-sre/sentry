#!/bin/bash

set -ex

QUAY="quay.io/app-sre"
VERSION=`grep 'ENV SENTRY_VERSION' Dockerfile | cut -d' ' -f 3 | tr -d '\r\n'`
TARGET="${QUAY}/sentry:${VERSION}"

docker build --pull -t ${TARGET} .
docker push ${TARGET}

exit 0
