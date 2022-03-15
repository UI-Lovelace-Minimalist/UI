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
        "lovelace-auto-entities",
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
        for c in depenceny_resource_paths:
            add_extra_js_url(hass, f"/ui_lovelace_minimalist/cards/{c}/{c}.js")

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
