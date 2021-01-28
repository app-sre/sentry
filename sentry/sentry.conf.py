# flake8: noqa
from __future__ import absolute_import

# This file is just Python, with a touch of Django which means
# you can inherit and tweak settings to your hearts content.

# For Docker, the following environment variables are supported:
#  SENTRY_POSTGRES_HOST
#  SENTRY_POSTGRES_PORT
#  SENTRY_DB_NAME
#  SENTRY_DB_USER
#  SENTRY_DB_PASSWORD
#  SENTRY_RABBITMQ_HOST
#  SENTRY_RABBITMQ_USERNAME
#  SENTRY_RABBITMQ_PASSWORD
#  SENTRY_RABBITMQ_VHOST
#  SENTRY_REDIS_HOST
#  SENTRY_REDIS_PASSWORD
#  SENTRY_REDIS_PORT
#  SENTRY_REDIS_DB
#  SENTRY_MEMCACHED_HOST
#  SENTRY_MEMCACHED_PORT
#  SENTRY_FILESTORE_DIR
#  SENTRY_SERVER_EMAIL
#  SENTRY_EMAIL_HOST
#  SENTRY_EMAIL_PORT
#  SENTRY_EMAIL_USER
#  SENTRY_EMAIL_PASSWORD
#  SENTRY_EMAIL_USE_TLS
#  SENTRY_ENABLE_EMAIL_REPLIES
#  SENTRY_SMTP_HOSTNAME
#  SENTRY_MAILGUN_API_KEY
#  SENTRY_SINGLE_ORGANIZATION
#  SENTRY_SECRET_KEY
from sentry.conf.server import *
from sentry.utils.types import Bool

import os
import os.path
import socket

CONF_ROOT = os.path.dirname(__file__)
env = os.environ.get

postgres = env("SENTRY_POSTGRES_HOST") or (env("POSTGRES_PORT_5432_TCP_ADDR") and "postgres")
if postgres:
    DATABASES = {
        "default": {
            "ENGINE": "sentry.db.postgres",
            "NAME": (env("SENTRY_DB_NAME") or env("POSTGRES_ENV_POSTGRES_USER") or "postgres"),
            "USER": (env("SENTRY_DB_USER") or env("POSTGRES_ENV_POSTGRES_USER") or "postgres"),
            "PASSWORD": (env("SENTRY_DB_PASSWORD") or env("POSTGRES_ENV_POSTGRES_PASSWORD") or ""),
            "HOST": postgres,
            "PORT": (env("SENTRY_POSTGRES_PORT") or ""),
        }
    }

# You should not change this setting after your database has been created
# unless you have altered all schemas first
SENTRY_USE_BIG_INTS = True

# If you're expecting any kind of real traffic on Sentry, we highly recommend
# configuring the CACHES and Redis settings

###########
# General #
###########

# Instruct Sentry that this install intends to be run by a single organization
# and thus various UI optimizations should be enabled.
SENTRY_SINGLE_ORGANIZATION = Bool(env("SENTRY_SINGLE_ORGANIZATION", True))

SENTRY_OPTIONS["system.event-retention-days"] = int(
    env("SENTRY_EVENT_RETENTION_DAYS", "90")
)

#########
# Redis #
#########

# Generic Redis configuration used as defaults for various things including:
# Buffers, Quotas, TSDB

redis = env("SENTRY_REDIS_HOST") or (env("REDIS_PORT_6379_TCP_ADDR") and "redis")
if not redis:
    raise Exception(
        "Error: REDIS_PORT_6379_TCP_ADDR (or SENTRY_REDIS_HOST) is undefined, did you forget to `--link` a redis container?"
    )

redis_password = env("SENTRY_REDIS_PASSWORD") or ""
redis_port = env("SENTRY_REDIS_PORT") or "6379"
redis_db = env("SENTRY_REDIS_DB") or "0"

SENTRY_OPTIONS.update(
    {
        "redis.clusters": {
            "default": {
                "hosts": {
                    0: {
                        "host": redis,
                        "password": redis_password,
                        "port": redis_port,
                        "db": redis_db,
                    }
                }
            }
        }
    }
)

#########
# Cache #
#########

# Sentry currently utilizes two separate mechanisms. While CACHES is not a
# requirement, it will optimize several high throughput patterns.

memcached = env("SENTRY_MEMCACHED_HOST") or (env("MEMCACHED_PORT_11211_TCP_ADDR") and "memcached")
if memcached:
    memcached_port = env("SENTRY_MEMCACHED_PORT") or "11211"
    CACHES = {
        "default": {
            "BACKEND": "django.core.cache.backends.memcached.MemcachedCache",
            "LOCATION": [memcached + ":" + memcached_port],
            "TIMEOUT": 3600,
        }
    }

# A primary cache is required for things such as processing events
SENTRY_CACHE = "sentry.cache.redis.RedisCache"

kafka_bootstrap = env("KAFKA_BOOTSTRAP")
kafka_msg_max_bytes = env("KAFKA_MSG_MAX_BYTES")
kafka_socket_timeout = env("KAFKA_SOCKET_TIMEOUT")

DEFAULT_KAFKA_OPTIONS = {
    "bootstrap.servers": kafka_bootstrap or "kafka:9092",
    "message.max.bytes": kafka_msg_max_bytes or 50000000,
    "socket.timeout.ms": kafka_socket_timeout or 1000,
}

SENTRY_EVENTSTREAM = "sentry.eventstream.kafka.KafkaEventStream"
SENTRY_EVENTSTREAM_OPTIONS = {"producer_configuration": DEFAULT_KAFKA_OPTIONS}

KAFKA_CLUSTERS["default"] = DEFAULT_KAFKA_OPTIONS

#########
# Queue #
#########

# See https://docs.getsentry.com/on-premise/server/queue/ for more
# information on configuring your queue broker and workers. Sentry relies
# on a Python framework called Celery to manage queues.

rabbitmq = env("SENTRY_RABBITMQ_HOST") or (env("RABBITMQ_PORT_5672_TCP_ADDR") and "rabbitmq")

if rabbitmq:
    BROKER_URL = (
        "amqp://"
        + (env("SENTRY_RABBITMQ_USERNAME") or env("RABBITMQ_ENV_RABBITMQ_DEFAULT_USER") or "guest")
        + ":"
        + (env("SENTRY_RABBITMQ_PASSWORD") or env("RABBITMQ_ENV_RABBITMQ_DEFAULT_PASS") or "guest")
        + "@"
        + rabbitmq
        + "/"
        + (env("SENTRY_RABBITMQ_VHOST") or env("RABBITMQ_ENV_RABBITMQ_DEFAULT_VHOST") or "/")
    )
else:
    BROKER_URL = "redis://:" + redis_password + "@" + redis + ":" + redis_port + "/" + redis_db


###############
# Rate Limits #
###############

# Rate limits apply to notification handlers and are enforced per-project
# automatically.

SENTRY_RATELIMITER = "sentry.ratelimits.redis.RedisRateLimiter"

##################
# Update Buffers #
##################

# Buffers (combined with queueing) act as an intermediate layer between the
# database and the storage API. They will greatly improve efficiency on large
# numbers of the same events being sent to the API in a short amount of time.
# (read: if you send any kind of real data to Sentry, you should enable buffers)

SENTRY_BUFFER = "sentry.buffer.redis.RedisBuffer"

##########
# Quotas #
##########

# Quotas allow you to rate limit individual projects or the Sentry install as
# a whole.

SENTRY_QUOTAS = "sentry.quotas.redis.RedisQuota"

########
# TSDB #
########

# The TSDB is used for building charts as well as making things like per-rate
# alerts possible.

SENTRY_TSDB = "sentry.tsdb.redissnuba.RedisSnubaTSDB"

#########
# SNUBA #
#########

SENTRY_SEARCH = "sentry.search.snuba.EventsDatasetSnubaSearchBackend"
SENTRY_SEARCH_OPTIONS = {}
SENTRY_TAGSTORE_OPTIONS = {}

#########
# RELAY #
#########

# A comma separated list of public keys that belong to relay instances
relay_keys = env("RELAY_PUBLIC_KEYS")
SENTRY_RELAY_WHITELIST_PK = []
if relay_keys:
    keys = relay_keys.split(',')
    SENTRY_RELAY_WHITELIST_PK = keys

###########
# Digests #
###########

# The digest backend powers notification summaries.

SENTRY_DIGESTS = "sentry.digests.backends.redis.RedisBackend"

##############
# Web Server #
##############

# If you're using a reverse SSL proxy, you should enable the X-Forwarded-Proto
# header and set `SENTRY_USE_SSL=1`

if Bool(env("SENTRY_USE_SSL", False)):
    SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True

SENTRY_WEB_HOST = "0.0.0.0"
SENTRY_WEB_PORT = 9000
SENTRY_WEB_OPTIONS = {
    "http": "%s:%s" % (SENTRY_WEB_HOST, SENTRY_WEB_PORT),
    "protocol": "uwsgi",
    # This is needed in order to prevent https://git.io/fj7Lw
    "uwsgi-socket": None,
    "so-keepalive": True,
    # Keep this between 15s-75s as that's what Relay supports
    "http-keepalive": 15,
    "http-chunked-input": True,
    # the number of web workers
    "workers": 3,
    "threads": 4,
    "memory-report": False,
    # Some stuff so uwsgi will cycle workers sensibly
    "max-requests": 100000,
    "max-requests-delta": 500,
    "max-worker-lifetime": 86400,
    # Duplicate options from sentry default just so we don't get
    # bit by sentry changing a default value that we depend on.
    "thunder-lock": True,
    "log-x-forwarded-for": False,
    "buffer-size": 32768,
    "limit-post": 209715200,
    "disable-logging": True,
    "reload-on-rss": 600,
    "ignore-sigpipe": True,
    "ignore-write-errors": True,
    "disable-write-exception": True,
}

###############
# Mail Server #
###############

email = env("SENTRY_EMAIL_HOST") or (env("SMTP_PORT_25_TCP_ADDR") and "smtp")
if email:
    SENTRY_OPTIONS["mail.backend"] = "smtp"
    SENTRY_OPTIONS["mail.host"] = email
    SENTRY_OPTIONS["mail.password"] = env("SENTRY_EMAIL_PASSWORD") or ""
    SENTRY_OPTIONS["mail.username"] = env("SENTRY_EMAIL_USER") or ""
    SENTRY_OPTIONS["mail.port"] = int(env("SENTRY_EMAIL_PORT") or 25)
    SENTRY_OPTIONS["mail.use-tls"] = Bool(env("SENTRY_EMAIL_USE_TLS", False))
else:
    SENTRY_OPTIONS["mail.backend"] = "dummy"

# The email address to send on behalf of
SENTRY_OPTIONS["mail.from"] = env("SENTRY_SERVER_EMAIL") or "root@localhost"

# If you're using mailgun for inbound mail, set your API key and configure a
# route to forward to /api/hooks/mailgun/inbound/
SENTRY_OPTIONS["mail.mailgun-api-key"] = env("SENTRY_MAILGUN_API_KEY") or ""

# If you specify a MAILGUN_API_KEY, you definitely want EMAIL_REPLIES
if SENTRY_OPTIONS["mail.mailgun-api-key"]:
    SENTRY_OPTIONS["mail.enable-replies"] = True
else:
    SENTRY_OPTIONS["mail.enable-replies"] = Bool(env("SENTRY_ENABLE_EMAIL_REPLIES", False))

if SENTRY_OPTIONS["mail.enable-replies"]:
    SENTRY_OPTIONS["mail.reply-hostname"] = env("SENTRY_SMTP_HOSTNAME") or ""

#########################
# Symbolicator Settings #
#########################

# Allow Symbolicator's request IP to fetch debug files from Sentry.
# Generously adapted from pynetlinux: https://git.io/JJmga
def get_internal_network():
    import ctypes
    import fcntl
    import math
    import socket
    import struct

    iface = b"eth0"
    sockfd = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    ifreq = struct.pack(b"16sH14s", iface, socket.AF_INET, b"\x00" * 14)

    try:
        ip = struct.unpack(
            b"!I", struct.unpack(b"16sH2x4s8x", fcntl.ioctl(sockfd, 0x8915, ifreq))[2]
        )[0]
        netmask = socket.ntohl(
            struct.unpack(b"16sH2xI8x", fcntl.ioctl(sockfd, 0x891B, ifreq))[2]
        )
    except IOError:
        return ()
    base = socket.inet_ntoa(struct.pack(b"!I", ip & netmask))
    netmask_bits = 32 - int(round(math.log(ctypes.c_uint32(~netmask).value + 1, 2), 1))
    return "{0:s}/{1:d}".format(base, netmask_bits)


INTERNAL_SYSTEM_IPS = (get_internal_network(),)

############
# Features #
############

SENTRY_FEATURES["projects:sample-events"] = False
SENTRY_FEATURES.update(
    {
        feature: True
        for feature in (
            "organizations:discover",
            "organizations:events",
            "organizations:global-views",
            "organizations:incidents",
            "organizations:integrations-issue-basic",
            "organizations:integrations-issue-sync",
            "organizations:invite-members",
            "organizations:metric-alert-builder-aggregate",
            "organizations:sso-basic",
            "organizations:sso-rippling",
            "organizations:sso-saml2",
            "organizations:performance-view",
            "organizations:advanced-search",
            "projects:custom-inbound-filters",
            "projects:data-forwarding",
            "projects:discard-groups",
            "projects:plugins",
            "projects:rate-limits",
            "projects:servicehooks",
        )
    }
)

# If this value ever becomes compromised, it's important to regenerate your
# SENTRY_SECRET_KEY. Changing this value will result in all current sessions
# being invalidated.
secret_key = env("SENTRY_SECRET_KEY")
if not secret_key:
    raise Exception(
        "Error: SENTRY_SECRET_KEY is undefined, run `generate-secret-key` and set to -e SENTRY_SECRET_KEY"
    )

if "GITHUB_APP_ID" in os.environ:
    GITHUB_EXTENDED_PERMISSIONS = ["repo"]
    GITHUB_APP_ID = env("GITHUB_APP_ID")
    GITHUB_API_SECRET = env("GITHUB_API_SECRET")

if "SENTRY_RUNNING_UWSGI" not in os.environ and len(secret_key) < 32:
    print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    print("!!                    CAUTION                       !!")
    print("!! Your SENTRY_SECRET_KEY is potentially insecure.  !!")
    print("!!    We recommend at least 32 characters long.     !!")
    print("!!     Regenerate with `generate-secret-key`.       !!")
    print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

SENTRY_OPTIONS["system.secret-key"] = secret_key
