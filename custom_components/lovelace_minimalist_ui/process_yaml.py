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
    "German":  "DE",
    "Spanish": "ES",
    "French":  "FR",
    "Italian": "IT",
    "Swedish": "SE",
    "Dutch":   "NL"
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
    os.makedirs(hass.config.path(f"{DOMAIN}/configs"), exist_ok=True)
    os.makedirs(hass.config.path(f"{DOMAIN}/cards"), exist_ok=True)

    if os.path.exists(hass.config.path(f"{DOMAIN}/configs")):
        # Create combined cards dir
        combined_cards_dir = hass.config.path(f"custom_components/{DOMAIN}/__minimalist_ui__")
        os.makedirs(combined_cards_dir, exist_ok=True)

        # Main config
        for fname in loader._find_files(hass.config.path(f"{DOMAIN}/configs"), "*.yaml"):
            loaded_yaml = load_yamll(fname)
            if isinstance(loaded_yaml, dict):
                lovelace_minimalist_ui_config.update(loaded_yaml)

        # Translations
        if "language" in config_entry.options:
            language = LANGUAGES[config_entry.options["language"]]
        else:
            language = "EN"

        # Non needed yet
        # translations = load_yamll(hass.config.path(f"custom_components/{DOMAIN}/lovelace/translations/{language}.yaml"))

        # Copy chosen language file over to config dir
        shutil.copy2(
            hass.config.path(f"custom_components/{DOMAIN}/lovelace/translations/{language}.yaml"),
            hass.config.path(f"{combined_cards_dir}/{language}.yaml")
        )
        # Copy over cards from integration
        shutil.copytree(
            hass.config.path(f"custom_components/{DOMAIN}/lovelace/button-cards-templates"),
            hass.config.path(f"{combined_cards_dir}/button-cards-templates"),
            dirs_exist_ok=True
        )
        # Soft link custom cards directory
        # if not os.path.exists(f"{combined_cards_dir}/custom-cards-templates"):
        #     os.symlink(
        #         hass.config.path(f"{DOMAIN}/cards"),
        #         f"{combined_cards_dir}/custom-cards-templates",
        #     )
        shutil.copytree(
            hass.config.path(f"{DOMAIN}/cards"),
            hass.config.path(f"{combined_cards_dir}/button-cards-templates"),
            dirs_exist_ok=True
        )
        # shutil.copy2(
        #     hass.config.path(f"{DOMAIN}/cards"),
        #     hass.config.path(f"{combined_cards_dir}/button-cards-templates")
        # )

        # Load Themes
        themes = OrderedDict()
        for fname in loader._find_files(hass.config.path(f"custom_components/{DOMAIN}/lovelace/themefiles"), "*.yaml"):
            loaded_yaml = load_yamll(fname)
            if isinstance(loaded_yaml, dict):
                themes.update(loaded_yaml)
                theme_name = next(iter(loaded_yaml))

                os.makedirs(hass.config.path(f"themes/{theme_name}"), exist_ok=True)
                shutil.copy2(
                    fname,
                    hass.config.path(f"themes/{theme_name}/{theme_name}.yaml")
                )

        if "theme" in config_entry.options:
            config_theme = config_entry.options["theme"]
        else:
            config_theme = "minimalist-desktop"

        if os.path.exists(hass.config.path(f"custom_components/{DOMAIN}/.installed")):
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

        path = hass.config.path(f"custom_components/{DOMAIN}/.installed")

        if not os.path.exists(path):
            _LOGGER.debug("Create .installed file")
            open(path, 'w').close()

        reload_configuration(hass)

    hass.services.async_register(DOMAIN, "installed", handle_installed)

def reload_configuration(hass):
    if os.path.exists(hass.config.path(f"{DOMAIN}/configs")):
        # # Main config
        # # No config generated yet at the start of process_yaml()
        # config_new = OrderedDict
        # for fname in loader._find_files(hass.config.path(f"{DOMAIN}/configs/"), "*.yaml"):
        #     loaded_yaml = load_yamll(fname)
        #     if isinstance(loaded_yaml, dict):
        #         config_new.update(loaded_yaml)

        # lovelace_minimalist_ui_config.update(config_new)


        if os.path.exists(hass.config.path(f"custom_components/{DOMAIN}/.installed")):
            installed = "true"
        else:
            installed = "false"

        lovelace_minimalist_ui_global.update(
            [
                ("installed", installed),
            ]
        )

    hass.bus.async_fire("lovelace_minimalist_ui_reload")