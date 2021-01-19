# Sentry Basic Functional Testing

## Setup python

```shell
python3 -m venv venv
source venv/bin/activate
pip3 install sentry_sdk
```

## Run the error generator

First, find the DSN for the project that is to receive the error event.  This can be easily done by logging into the sentry instance, goto Settings->Projects->internal.  Look for the `Client Keys(DSN)` option from the list of settings and copy the value for DSN.  Pass this value as is to the error_generator.py as an argument.

```shell
python test/error_generator/error_generator.py $DSN
```

To see the error, navigate to Projects->interal in the sentry UI.
