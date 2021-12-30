import logging
import os
import shutil

from homeassistant.core import HomeAssistant
from homeassistant.components.frontend import add_extra_js_url
from homeassistant.util.yaml import loader

from .base import LmuBase
from .const import DOMAIN

DATA_EXTRA_MODULE_URL = 'frontend_extra_module_url'

_LOGGER: logging.Logger = logging.getLogger(__name__)

def load_plugins(hass: HomeAssistant, lmu: LmuBase):
    """Load Plugins"""

    add_extra_js_url(hass, "/lovelace_minimalist_ui/js/lovelace-minimalist-ui.js")

    if lmu.configuration.include_other_cards:
        # # Cards by others
        add_extra_js_url(hass, "/lovelace_minimalist_ui/card_resources/button-card/button-card.js")
        add_extra_js_url(hass, "/lovelace_minimalist_ui/card_resources/lovelace-card-mod/card-mod.js")
        add_extra_js_url(hass, "/lovelace_minimalist_ui/card_resources/lovelace-card-mod/rollup.config.js")
        add_extra_js_url(hass, "/lovelace_minimalist_ui/card_resources/mini-graph-card/mini-graph-card-bundle.js")
        add_extra_js_url(hass, "/lovelace_minimalist_ui/card_resources/mini-media-player/mini-media-player-bundle.js")
        # https://github.com/AnthonMS/my-cards/blob/989034979aa885efb7ee8ae2ff05c46f7748b05c/dist/my-cards.js
        add_extra_js_url(hass, "/lovelace_minimalist_ui/card_resources/my-cards-slider-card/my-cards.js")
        add_extra_js_url(hass, "/lovelace_minimalist_ui/card_resources/light-entity-card/light-entity-card.js")

    # Cards by Lovelace Minimalist UI

    # Register
    hass.http.register_static_path("/lovelace_minimalist_ui/js", hass.config.path(f"custom_components/{DOMAIN}/js"), True)
    hass.http.register_static_path("/lovelace_minimalist_ui/card_resources", hass.config.path(f"custom_components/{DOMAIN}/card_resources"), True)

    for fname in loader._find_files(hass.config.path(f"custom_components/{DOMAIN}/blueprints"), "*.yaml"):
        _LOGGER.debug(f"Copy: {fname}")
        os.makedirs(hass.config.path(f"blueprints/automation/{DOMAIN}"), exist_ok=True)
        shutil.copy2(
            hass.config.path(fname),
            hass.config.path(f"blueprints/automation/{DOMAIN}")
        )
