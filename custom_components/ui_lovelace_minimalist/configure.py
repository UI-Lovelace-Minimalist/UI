"""Process Yaml and Config for UI Lovelace Minimalist Integration."""


from __future__ import annotations

import logging
import os
import shutil

from homeassistant.core import HomeAssistant

from .base import UlmBase
from .const import DOMAIN

_LOGGER: logging.Logger = logging.getLogger(__name__)

LANGUAGES = {
    "Czech": "cs",
    "Danish": "da",
    "German": "de",
    "English (GB)": "en",
    "Spanish": "es",
    "French": "fr",
    "Italian": "it",
    "Dutch": "nl",
    "Norwegian": "no",
    "Polish": "pl",
    "Portuguese": "pt",
    "Portuguese (Brazil)": "pt-BR",
    "Slovak": "sk",
    "Swedish": "sv",
    "Turkish": "tr",
    "Russian": "ru",
}


def configure_cards(hass: HomeAssistant, ulm: UlmBase):
    """Configure initial dashboard & cards directory."""
    _LOGGER.info("Confguring Cards")

    # Cleanup
    shutil.rmtree(hass.config.path(f"{DOMAIN}/configs"), ignore_errors=True)
    shutil.rmtree(hass.config.path(f"{DOMAIN}/addons"), ignore_errors=True)
    # Create config dir
    os.makedirs(hass.config.path(f"{DOMAIN}/dashboard"), exist_ok=True)
    os.makedirs(hass.config.path(f"{DOMAIN}/custom_cards"), exist_ok=True)

    if os.path.exists(hass.config.path(f"{DOMAIN}/dashboard")):
        # Create combined cards dir
        combined_cards_dir = hass.config.path(
            f"custom_components/{DOMAIN}/__ui_minimalist__/ulm_templates"
        )
        os.makedirs(combined_cards_dir, exist_ok=True)

        # Translations
        language = LANGUAGES[ulm.configuration.language]

        # Copy example dashboard file over to user config dir if not exists
        if not os.path.exists(hass.config.path(f"{DOMAIN}/dashboard/ui-lovelace.yaml")):
            shutil.copy2(
                hass.config.path(
                    f"custom_components/{DOMAIN}/lovelace/ui-lovelace.yaml"
                ),
                hass.config.path(f"{DOMAIN}/dashboard/ui-lovelace.yaml"),
            )
        # Copy chosen language file over to config dir
        shutil.copy2(
            hass.config.path(
                f"custom_components/{DOMAIN}/lovelace/translations/{language}.yaml"
            ),
            hass.config.path(f"{combined_cards_dir}/language.yaml"),
        )
        # Copy over cards from integration
        shutil.copytree(
            hass.config.path(f"custom_components/{DOMAIN}/lovelace/ulm_templates"),
            hass.config.path(f"{combined_cards_dir}"),
            dirs_exist_ok=True,
        )
        # Copy over manually installed custom_cards from user
        shutil.copytree(
            hass.config.path(f"{DOMAIN}/custom_cards"),
            hass.config.path(f"{combined_cards_dir}/custom_cards"),
            dirs_exist_ok=True,
        )

        # Copy over themes to defined themes folder
        shutil.copytree(
            hass.config.path(f"custom_components/{DOMAIN}/lovelace/themefiles"),
            hass.config.path(f"{ulm.configuration.theme_path}/"),
            dirs_exist_ok=True,
        )

        hass.bus.async_fire("ui_lovelace_minimalist_reload")

    async def handle_reload(call):
        _LOGGER.debug("Reload UI Lovelace Minimalist Configuration")

        reload_configuration(hass)

    # Register servcie ui_lovelace_minimalist.reload
    hass.services.async_register(DOMAIN, "reload", handle_reload)


def reload_configuration(hass):
    """Reload Configuration."""
    combined_cards_dir = hass.config.path(
        f"custom_components/{DOMAIN}/__ui_minimalist__/ulm_templates"
    )

    if os.path.exists(hass.config.path(f"{DOMAIN}/custom_cards")):
        # Copy over manually installed custom_cards from user
        shutil.copytree(
            hass.config.path(f"{DOMAIN}/custom_cards"),
            hass.config.path(f"{combined_cards_dir}/custom_cards"),
            dirs_exist_ok=True,
        )

    hass.bus.async_fire("ui_lovelace_minimalist_reload")
