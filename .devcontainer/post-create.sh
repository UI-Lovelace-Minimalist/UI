#!/usr/bin/env bash

source /opt/container/helpers/common/paths.sh
mkdir -p /config

# Required to get automations to work
echo "Creatin automations.yaml"
touch /config/automations.yaml

# source: /opt/container/helpers/commons/homeassistant/start.sh
if test -d "custom_components"; then
  echo "Symlink the custom component directory"

  if test -d "custom_components"; then
    rm -R /config/custom_components
  fi

  ln -sf "$(workspacePath)custom_components/" /config/custom_components || echo "Could not copy the custom_component" exit 1
elif  test -f "__init__.py"; then
  echo "Having the component in the root is currently not supported"
fi

# Install
echo "Install home assistant"
container install

echo "Installing Requirements_dev.txt"
pip install -r $(workspacePath)requirements_dev.txt


# pre-commit
echo "Install pre-commit dependencies"
sudo apt update; apt install -y ruby vim

echo "Install Pre-Commit in this repo"
pre-commit install

# Custom Cards & Modules
echo "Installing NodeJS"
curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
apt-get install -y nodejs


cd /tmp
# Install dependency modules
## Browser mod
echo "Installing Custom Component: Browser Mod"
wget https://github.com/thomasloven/hass-browser_mod/archive/refs/tags/1.5.1.tar.gz -O browser_mod.tar.gz
tar -xvf browser_mod.tar.gz
rm -rf /config/custom_components/browser_mod
mv hass-browser_mod*/custom_components/browser_mod /config/custom_components/browser_mod

## virtual
echo "Installing Custom Component: Virtual"
wget https://github.com/twrecked/hass-virtual/archive/refs/tags/v0.7.5.tar.gz -O virtual.tar.gz
tar -xvf virtual.tar.gz
rm -rf /config/custom_components/virtual
mv hass-virtual*/custom_components/virtual /config/custom_components/virtual
