"""Adds Config Flow to UI Lovelace Minimalist Integration."""

from __future__ import annotations

import logging

from homeassistant import config_entries
from homeassistant.core import callback
import voluptuous as vol

from .base import UlmBase
from .const import (
    CONF_INCLUDE_OTHER_CARDS,
    CONF_LANGUAGE,
    CONF_LANGUAGES,
    CONF_SIDEPANEL_ENABLED,
    CONF_SIDEPANEL_ICON,
    CONF_SIDEPANEL_TITLE,
    CONF_THEME,
    CONF_THEME_OPTIONS,
    CONF_THEME_PATH,
    DEFAULT_INCLUDE_OTHER_CARDS,
    DEFAULT_LANGUAGE,
    DEFAULT_SIDEPANEL_ENABLED,
    DEFAULT_SIDEPANEL_ICON,
    DEFAULT_SIDEPANEL_TITLE,
    DEFAULT_THEME,
    DEFAULT_THEME_PATH,
    DOMAIN,
    NAME,
)
from .enums import ConfigurationType

_LOGGER: logging.Logger = logging.getLogger(__name__)


def ulm_config_option_schema(options: dict = {}) -> dict:
    """Return a schema for ULM configuration options."""

    # Also update base.py UlmConfiguration
    return {
        vol.Optional(
            CONF_LANGUAGE, default=options.get(CONF_LANGUAGE, DEFAULT_LANGUAGE)
        ): vol.In(CONF_LANGUAGES),
        vol.Optional(
            CONF_SIDEPANEL_ENABLED,
            default=options.get(CONF_SIDEPANEL_ENABLED, DEFAULT_SIDEPANEL_ENABLED),
        ): bool,
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
            default=options.get(CONF_INCLUDE_OTHER_CARDS, DEFAULT_INCLUDE_OTHER_CARDS),
        ): bool,
    }


class UlmFlowHandler(config_entries.ConfigFlow, domain=DOMAIN):
    """Config flow for UI Lovelace Minimalist."""

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

        # Initial form
        return await self._show_config_form(user_input)

    async def _show_config_form(self, user_input):
        """Show the configuration form to edit options."""

        if not user_input:
            user_input = {}

        schema = ulm_config_option_schema(user_input)

        return self.async_show_form(step_id="user", data_schema=vol.Schema(schema))

    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        """ULM config flow options hanlder."""
        return UlmOptionFlowHandler(config_entry)


class UlmOptionFlowHandler(config_entries.OptionsFlow):
    """ULM config flow option handler."""

    def __init__(self, config_entry):
        """Initialize."""
        self.config_entry = config_entry

    async def async_step_init(self, _user_input=None):
        """Manage the options."""
        return await self.async_step_user()

    async def async_step_user(self, user_input=None):
        """Handle a flow initilized by the user."""
        ulm: UlmBase = self.hass.data.get(DOMAIN)
        if user_input is not None:
            return self.async_create_entry(title=NAME, data=user_input)

        if ulm is None or ulm.configuration is None:
            return self.async_abort(reason="not_setup")

        if ulm.configuration.config_type == ConfigurationType.YAML:
            schema = {vol.Optional("not_in_use", default=""): str}
        else:
            schema = ulm_config_option_schema(ulm.configuration.to_dict())

        return self.async_show_form(step_id="user", data_schema=vol.Schema(schema))
