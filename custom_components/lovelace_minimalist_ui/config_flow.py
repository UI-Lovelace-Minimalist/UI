import logging
from homeassistant.components.frontend import DEFAULT_THEME_COLOR

import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import callback
from homeassistant.helpers import config_validation as cv

from custom_components.lovelace_minimalist_ui.enums import ConfigurationType

from .base import LmuBase
from .const import (
    DEFAULT_INCLUDE_OTHER_CARDS,
    NAME,
    DOMAIN,
    CONF_LANGUAGE,
    CONF_LANGUAGES,
    CONF_SIDEPANEL_ICON,
    CONF_SIDEPANEL_TITLE,
    CONF_INCLUDE_OTHER_CARDS,
    CONF_THEME_OPTIONS,
    CONF_THEME,
    CONF_THEME_PATH,
    DEFAULT_LANGUAGE,
    DEFAULT_NAME,
    DEFAULT_SIDEPANEL_ICON,
    DEFAULT_SIDEPANEL_TITLE,
    DEFAULT_INCLUDE_OTHER_CARDS,
    DEFAULT_THEME,
    DEFAULT_THEME_PATH
)

_LOGGER: logging.Logger = logging.getLogger(__name__)

def lmu_config_option_schema(options: dict = {}) -> dict:
    """Return a schema for LMU configuration options."""

    # Also update base.py LmuConfiguration
    return {
        vol.Optional(
            CONF_LANGUAGE, default=options.get(CONF_LANGUAGE, DEFAULT_LANGUAGE)
        ): vol.In(CONF_LANGUAGES),
        vol.Optional(
            CONF_SIDEPANEL_TITLE,
            default=options.get(CONF_SIDEPANEL_TITLE, DEFAULT_SIDEPANEL_TITLE),
        ): str,
        vol.Optional(
            CONF_SIDEPANEL_ICON,
            default=options.get(CONF_SIDEPANEL_ICON, DEFAULT_SIDEPANEL_ICON),
        ): str,
        vol.Optional(
            CONF_THEME, default=options.get(CONF_THEME, DEFAULT_THEME)
        ): vol.In(CONF_THEME_OPTIONS),
        vol.Optional(
            CONF_THEME_PATH,
            default=options.get(CONF_THEME_PATH, DEFAULT_THEME_PATH),
        ): str,
        vol.Optional(
            CONF_INCLUDE_OTHER_CARDS,
            default=options.get(
                CONF_INCLUDE_OTHER_CARDS, DEFAULT_INCLUDE_OTHER_CARDS
            ),
        ): bool,
    }

class LmuFlowHandler(config_entries.ConfigFlow, domain=DOMAIN):
    """Config flow for Lovelace Minimalist UI."""

    VERSION = 1

    def __init__(self):
        """Initialize."""
        self._errors = {}

    async def async_step_user(self, user_input):
        """Handle a flow initialized by the user."""

        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")
        if self.hass.data.get(DOMAIN):
            return self.async_abort(reason="single_instance_allowed")

        if user_input:
            return self.async_create_entry(title=NAME, data=user_input)

        ## Initial form
        return await self._show_config_form(user_input)


    async def _show_config_form(self, user_input):
        """Show the configuration form to edit options."""

        if not user_input:
            user_input = {}


        schema = lmu_config_option_schema(user_input)

        return self.async_show_form(step_id="user", data_schema=vol.Schema(schema))


    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        """LMU config flow options hanlder."""
        return LmuOptionFlowHandler(config_entry)


class LmuOptionFlowHandler(config_entries.OptionsFlow):
    """LMU config flow option handler."""

    def __init__(self, config_entry):
        self.config_entry = config_entry

    async def async_step_init(self, _user_input=None):
        """Manage the options."""
        return await self.async_step_user()

    async def async_step_user(self, user_input=None):
        """Handle a flow initilized by the user."""
        lmu : LmuBase = self.hass.data.get(DOMAIN)
        if user_input is not None:
            return self.async_create_entry(title=NAME, data=user_input)

        if lmu is None or lmu.configuration is None:
            return self.async_abort(reason="not_setup")

        if lmu.configuration.config_type == ConfigurationType.YAML:
            schema = {vol.Optional("not_in_use", default=""): str}
        else:
            schema = lmu_config_option_schema(self.config_entry.options)

        return self.async_show_form(step_id="user", data_schema=vol.Schema(schema))





# @config_entries.HANDLERS.register(DOMAIN)
# class LovelaceMinimalistUiConfigFlow(config_entries.ConfigFlow):
#     async def async_step_user(self, user_input=None):
#         if self._async_current_entries():
#             return self.async_abort(reason="single_instance_allowed")
#         return self.async_create_entry(title=NAME, data={})

#     @staticmethod
#     @callback
#     def async_get_options_flow(config_entry):
#         return LovelaceMinimalistUiEditFlow(config_entry)


# class LovelaceMinimalistUiEditFlow(config_entries.OptionsFlow):
#     def __init__(self, config_entry):
#         self.config_entry = config_entry

#     # TODO: Needs form also on initial installation!
#     async def async_step_init(self, user_input=None):
#         if user_input is not None:
#             return self.async_create_entry(title="", data=user_input)

#         schema = {
#             vol.Optional(
#                 LANGUAGE, default=self.config_entry.options.get("language", "English")
#             ): vol.In(LANGUAGES),
#             vol.Optional(
#                 SIDEPANEL_TITLE,
#                 default=self.config_entry.options.get("sidepanel_title", NAME),
#             ): str,
#             vol.Optional(
#                 SIDEPANEL_ICON,
#                 default=self.config_entry.options.get("sidepanel_icon", "mdi:flower"),
#             ): str,
#             vol.Optional(
#                 CONF_INCLUDE_OTHER_CARDS,
#                 default=self.config_entry.options.get(
#                     CONF_INCLUDE_OTHER_CARDS, DEFAULT_INCLUDE_OTHER_CARDS
#                 ),
#             ): cv.boolean,
#             # Not working yet
#             # vol.Optional(THEME, default=self.config_entry.options.get("theme", "minimalist-desktop-dark")): vol.In(THEME_OPTIONS),
#         }

#         return self.async_show_form(step_id="init", data_schema=vol.Schema(schema))
