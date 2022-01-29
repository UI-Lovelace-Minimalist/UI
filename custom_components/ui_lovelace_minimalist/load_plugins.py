"""Load Plugins for UI Lovelace Minimalist Integration."""

from __future__ import annotations

import logging
import os
import shutil

from homeassistant.components.frontend import add_extra_js_url
from homeassistant.core import HomeAssistant
from homeassistant.util.yaml import loader

from .base import UlmBase
from .const import DOMAIN

DATA_EXTRA_MODULE_URL = "frontend_extra_module_url"

_LOGGER: logging.Logger = logging.getLogger(__name__)


def load_plugins(hass: HomeAssistant, ulm: UlmBase):
    """Load Plugins."""

    _LOGGER.debug("Checking dependencies")
    if not os.path.exists(hass.config.path("custom_components/browser_mod")):
        _LOGGER.error('HACS Integration repo "browser mod" is not installed!')

    depenceny_resource_paths = [
        "button-card",
        "light-entity-card",
        "lovelace-card-mod",
        "mini-graph-card",
        "mini-media-player",
        "my-cards",
        "simple-weather-card",
    ]
    for p in depenceny_resource_paths:
        if not ulm.configuration.include_other_cards:
            if not os.path.exists(hass.config.path(f"www/community/{p}")):
                _LOGGER.error(
                    f'HACS Frontend repo "{p}" is not installed, See Integration Configuration.'
                )
        else:
            if os.path.exists(hass.config.path(f"www/community/{p}")):
                _LOGGER.error(
                    f'HACS Frontend repo "{p}" is already installed, Remove it or disable include custom cards'
                )

    if ulm.configuration.include_other_cards:
        # # Cards by others
        add_extra_js_url(
            hass, "/ui_lovelace_minimalist/cards/button-card/button-card.js"
        )
        add_extra_js_url(
            hass, "/ui_lovelace_minimalist/cards/lovelace-card-mod/card-mod.js"
        )
        add_extra_js_url(
            hass,
            "/ui_lovelace_minimalist/cards/lovelace-card-mod/rollup.config.js",
        )
        add_extra_js_url(
            hass,
            "/ui_lovelace_minimalist/cards/mini-graph-card/mini-graph-card-bundle.js",
        )
        add_extra_js_url(
            hass,
            "/ui_lovelace_minimalist/cards/mini-media-player/mini-media-player-bundle.js",
        )
        # https://github.com/AnthonMS/my-cards/blob/989034979aa885efb7ee8ae2ff05c46f7748b05c/dist/my-cards.js
        add_extra_js_url(
            hass,
            "/ui_lovelace_minimalist/cards/my-cards-slider-card/my-cards.js",
        )
        add_extra_js_url(
            hass,
            "/ui_lovelace_minimalist/cards/light-entity-card/light-entity-card.js",
        )
        # https://github.com/kalkih/simple-weather-card
        add_extra_js_url(
            hass,
            "/ui_lovelace_minimalist/cards/simple-weather-card/simple-weather-card-bundle.js",
        )

    # Register
    hass.http.register_static_path(
        "/ui_lovelace_minimalist/cards",
        hass.config.path(f"custom_components/{DOMAIN}/cards"),
        True,
    )

    for fname in loader._find_files(
        hass.config.path(f"custom_components/{DOMAIN}/blueprints"), "*.yaml"
    ):
        _LOGGER.debug(f"Copy: {fname}")
        os.makedirs(hass.config.path(f"blueprints/automation/{DOMAIN}"), exist_ok=True)
        shutil.copy2(
            hass.config.path(fname), hass.config.path(f"blueprints/automation/{DOMAIN}")
        )
