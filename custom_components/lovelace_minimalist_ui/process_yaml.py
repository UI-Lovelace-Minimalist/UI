import logging
import yaml
import os
import json
from collections import OrderedDict
import shutil

from homeassistant.util.yaml import Secrets, loader
from homeassistant.exceptions import HomeAssistantError

from .const import DOMAIN, VERSION

_LOGGER: logging.Logger = logging.getLogger(__package__)

lovelace_minimalist_ui_config = {}
lovelace_minimalist_ui_global = {}

LANGUAGES = {
    "English": "EN",
    "German": "DE",
    "Spanish": "ES",
    "French": "FR",
    "Italian": "IT",
    "Swedish": "SE",
    "Dutch": "NL"
}

def load_yamll(fname, secrets = None, args={}):
    try:
        with open(fname, encoding="utf-8") as config_file:
            return loader.yaml.load(config_file, Loader=lambda stream: loader.SafeLineLoader(stream, secrets)) or OrderedDict()
    except loader.yaml.YAMLError as exc:
        _LOGGER.error(str(exc))
        raise HomeAssistantError(exc)
    except UnicodeDecodeError as exc:
        _LOGGER.error("Unable to read file %s: %s", fname, exc)
        raise HomeAssistantError(exc)

def process_yaml(hass, config_entry):

    _LOGGER.warning('Start of function to process all yaml files!')

    # Create config dir
    os.makedirs(hass.config.path("{}/configs".format(DOMAIN)), exist_ok=True)

    if os.path.exists(hass.config.path("{}/configs".format(DOMAIN))):

        # Main config
        for fname in loader._find_files(hass.config.path("{}/configs".format(DOMAIN)), "*.yaml"):
            loaded_yaml = load_yamll(fname)
            if isinstance(loaded_yaml, dict):
                lovelace_minimalist_ui_config.update(loaded_yaml)

        # Translations
        if "language" in config_entry.options:
            language = LANGUAGES[config_entry.options["language"]]
        else:
            language = "EN"

        #TODO: Copy translation to config dir or something and use that.
        translations = load_yamll(hass.config.path("custom_components/{}/lovelace/translations/{}.yaml".format(DOMAIN, language)))

        # Load Themes
        themes = OrderedDict()
        for fname in loader._find_files(hass.config.path("custom_components/{}/lovelace/themes".format(DOMAIN)), "*.yaml"):
            loaded_yaml = load_yamll(fname)
            if isinstance(loaded_yaml, dict):
                themes.update(loaded_yaml)

        if "theme" in config_entry.options:
            config_theme = config_entry.options["theme"]
        else:
            config_theme = "minimalist-desktop"

        if os.path.exists(hass.config.path("custom_components/{}/.installed".format(DOMAIN))):
            installed = "true"
        else:
            installed = "false"

        lovelace_minimalist_ui_global.update(
            [
                ("version", VERSION),
                ("theme", config_theme),
                ("themes", json.dumps(themes)),
                ("installed", installed),
            ]
        )

        hass.bus.async_fire("lovelace_minimalist_ui_reload")

    async def handle_reload(call):
        _LOGGER.debug("Reload Lovelace Minimalist UI Configuration")

        reload_configuration(hass)

    # Register servcie lovelace_minimalist_ui.reload
    hass.services.async_register(DOMAIN, "reload", handle_reload)

    async def handle_installed(call):
        _LOGGER.debug("Handle installed for Lovelace Minimalist UI")

        path = hass.config.path("custom_components/{}/.installed".format(DOMAIN))

        if not os.path.exists(path):
            _LOGGER.debug("Create .installed file")
            open(path, 'w').close()

        reload_configuration(hass)

    hass.services.async_register(DOMAIN, "installed", handle_installed)

def reload_configuration(hass):
    if os.path.exists(hass.config.path("{}/configs".format(DOMAIN))):
        # Main config
        config_new = OrderedDict
        for fname in loader._find_files(hass.config.path("{}/configs/".format(DOMAIN)), "*.yaml"):
            loaded_yaml = load_yamll(fname)
            if isinstance(loaded_yaml, dict):
                config_new.update(loaded_yaml)

        lovelace_minimalist_ui_config.update(config_new)


        if os.path.exists(hass.config.path("custom_components/{}/.installed".format(DOMAIN))):
            installed = "true"
        else:
            installed = "false"

        lovelace_minimalist_ui_global.update(
            [
                ("installed", installed),
            ]
        )

    hass.bus.async_fire("lovelace_minimalist_ui_reload")