#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd $SCRIPT_DIR/..

container install

pip install -r $SCRIPT_DIR/../requirements_dev.txt

# Required to get automations to work
touch /config/automations.yaml

# pre-commit
sudo apt update; apt install -y ruby

pre-commit install
