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

    add_extra_js_url(hass, "/ui_lovelace_minimalist/js/ui-lovelace-minimalist.js")

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

    # Cards by UI Lovelace Minimalist
    add_extra_js_url(
        hass, "/ui_lovelace_minimalist/cards/ulm-flexbox-card/ulm-flexbox-card.js"
    )

    # Register
    hass.http.register_static_path(
        "/ui_lovelace_minimalist/js",
        hass.config.path(f"custom_components/{DOMAIN}/js"),
        True,
    )
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
