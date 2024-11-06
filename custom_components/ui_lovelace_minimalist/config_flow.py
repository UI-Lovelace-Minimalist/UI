"""Adds Config Flow to UI Lovelace Minimalist Integration."""

from __future__ import annotations

import logging
from typing import Any

from aiogithubapi import GitHubDeviceAPI, GitHubException
from aiogithubapi.common.const import OAUTH_USER_LOGIN
from homeassistant import config_entries
from homeassistant.core import callback
from homeassistant.helpers import aiohttp_client
import homeassistant.helpers.config_validation as cv
from homeassistant.helpers.event import async_call_later
from homeassistant.loader import async_get_integration
import voluptuous as vol

from .base import UlmBase
from .const import (  # CONF_COMMUNITY_CARDS_ALL,
    CLIENT_ID,
    CONF_COMMUNITY_CARDS,
    CONF_COMMUNITY_CARDS_ENABLED,
    CONF_INCLUDE_OTHER_CARDS,
    CONF_LANGUAGE,
    CONF_LANGUAGES,
    CONF_SIDEPANEL_ADV_ENABLED,
    CONF_SIDEPANEL_ADV_ICON,
    CONF_SIDEPANEL_ADV_TITLE,
    CONF_SIDEPANEL_ENABLED,
    CONF_SIDEPANEL_ICON,
    CONF_SIDEPANEL_TITLE,
    CONF_THEME,
    CONF_THEME_OPTIONS,
    CONF_THEME_PATH,
    DEFAULT_COMMUNITY_CARDS,
    DEFAULT_COMMUNITY_CARDS_ENABLED,
    DEFAULT_INCLUDE_OTHER_CARDS,
    DEFAULT_LANGUAGE,
    DEFAULT_SIDEPANEL_ADV_ENABLED,
    DEFAULT_SIDEPANEL_ADV_ICON,
    DEFAULT_SIDEPANEL_ADV_TITLE,
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


async def ulm_config_option_schema(options: dict = {}) -> dict:
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
            CONF_SIDEPANEL_ADV_ENABLED,
            default=options.get(
                CONF_SIDEPANEL_ADV_ENABLED, DEFAULT_SIDEPANEL_ADV_ENABLED
            ),
        ): bool,
        vol.Optional(
            CONF_SIDEPANEL_ADV_TITLE,
            default=options.get(CONF_SIDEPANEL_ADV_TITLE, DEFAULT_SIDEPANEL_ADV_TITLE),
        ): str,
        vol.Optional(
            CONF_SIDEPANEL_ADV_ICON,
            default=options.get(CONF_SIDEPANEL_ADV_ICON, DEFAULT_SIDEPANEL_ADV_ICON),
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
        vol.Optional(
            CONF_COMMUNITY_CARDS_ENABLED,
            default=options.get(
                CONF_COMMUNITY_CARDS_ENABLED, DEFAULT_COMMUNITY_CARDS_ENABLED
            ),
        ): bool,
    }


class UlmFlowHandler(config_entries.ConfigFlow, domain=DOMAIN):
    """Config flow for UI Lovelace Minimalist."""

    VERSION = 1

    def __init__(self) -> None:
        """Initialize."""
        self._errors = {}
        self.device = None
        self.activation = None
        self.log = _LOGGER
        self._progress_task = None
        self._login_device = None
        self._reauth = False

    async def async_step_user(self, user_input: dict[str, Any] | None = None):
        """Handle a flow initialized by the user."""

        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")
        if self.hass.data.get(DOMAIN):
            return self.async_abort(reason="single_instance_allowed")

        if user_input is not None:
            if user_input["community_cards_enabled"]:
                return await self.async_step_device(user_input)
            else:
                return self.async_create_entry(title="", data=user_input)

        # Initial form
        return await self._show_config_form(user_input)

    async def async_step_device(self, _user_input):
        """Handle device steps."""

        async def _wait_for_activation(_=None):
            if self._login_device is None or self._login_device.expires_in is None:
                async_call_later(self.hass, 1, _wait_for_activation)
                return

            response = await self.device.activation(
                device_code=self._login_device.device_code
            )
            self.activation = response.data
            self.hass.async_create_task(
                self.hass.config_entries.flow.async_configure(flow_id=self.flow_id)
            )

        if not self.activation:
            integration = await async_get_integration(self.hass, DOMAIN)
            if not self.device:
                self.device = GitHubDeviceAPI(
                    client_id=CLIENT_ID,
                    session=aiohttp_client.async_get_clientsession(self.hass),
                    **{"client_name": f"ULM/{integration.version}"},
                )
            async_call_later(self.hass, 1, _wait_for_activation)
            try:
                response = await self.device.register()
                self._login_device = response.data
                return self.async_show_progress(
                    step_id="device",
                    progress_action="wait_for_device",
                    description_placeholders={
                        "url": OAUTH_USER_LOGIN,
                        "code": self._login_device.user_code,
                    },
                )
            except GitHubException as exception:
                self.log.error(exception)
                return self.async_abort(reason="github")

        return self.async_show_progress_done(next_step_id="device_done")

    async def _show_config_form(self, user_input):
        """Show the configuration form to edit options."""

        if not user_input:
            user_input = {}

        # Emtpy schema on startup.
        schema = {
            vol.Optional(
                CONF_COMMUNITY_CARDS_ENABLED,
                default=user_input.get(
                    CONF_COMMUNITY_CARDS_ENABLED, DEFAULT_COMMUNITY_CARDS_ENABLED
                ),
            ): bool,
        }

        return self.async_show_form(
            step_id="user", data_schema=vol.Schema(schema), errors=self._errors
        )

    async def async_step_device_done(self, _user_input):
        """Handle device steps."""
        if self._reauth:
            existing_entry = self.hass.config_entries.async_get_entry(
                self.context["entry_id"]
            )
            self.hass.config_entries.async_update_entry(
                existing_entry, data={"token": self.activation.access_token}
            )
            await self.hass.config_entries.async_reload(existing_entry.entry_id)
            return self.async_abort(reason="reauth_successful")

        return self.async_create_entry(
            title=NAME, data={"token": self.activation.access_token}
        )

    async def async_step_reauth(self, user_input=None):
        """Perform reauth upon an API authentication error."""
        return await self.async_step_reauth_confirm()

    async def async_step_reauth_confirm(self, user_input=None):
        """Dialog that informs the user that reauth is required."""
        if user_input is None:
            return self.async_show_form(
                step_id="reauth_confirm",
                data_schema=vol.Schema({}),
            )
        self._reauth = True
        return await self.async_step_device(None)

    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        """ULM config flow options hanlder."""
        return UlmOptionFlowHandler(config_entry)


class UlmOptionFlowHandler(config_entries.OptionsFlow):
    """ULM config flow option handler (Edit Flow)."""

    def __init__(self, config_entry: config_entries.ConfigEntry) -> None:
        """Initialize."""
        self.config_entry = config_entry

    async def async_step_init(self, _user_input=None):
        """Manage the options."""
        return await self.async_step_user()

    async def async_step_user(self, user_input=None):
        """Handle a flow initilized by the user."""
        ulm: UlmBase = self.hass.data.get(DOMAIN)
        errors: dict[str, str] = {}

        if user_input is not None:
            if CONF_COMMUNITY_CARDS in user_input and user_input[CONF_COMMUNITY_CARDS]:
                for card in user_input[CONF_COMMUNITY_CARDS]:
                    if card not in ulm.configuration.all_community_cards:
                        user_input[CONF_COMMUNITY_CARDS].remove(card)
            return self.async_create_entry(title=NAME, data=user_input)

        if ulm is None or ulm.configuration is None:
            return self.async_abort(reason="not_setup")

        if ulm.configuration.config_type == ConfigurationType.YAML:
            schema = {vol.Optional("not_in_use", default=""): str}
        else:
            schema = await ulm_config_option_schema(ulm.configuration.to_dict())

        if ulm.configuration.community_cards_enabled:
            await ulm.fetch_cards()
            schema.update(
                {
                    vol.Optional(
                        CONF_COMMUNITY_CARDS,
                        default=list(
                            ulm.configuration.to_dict().get(
                                CONF_COMMUNITY_CARDS, DEFAULT_COMMUNITY_CARDS
                            )
                        ),
                    ): cv.multi_select(ulm.configuration.all_community_cards)
                }
            )

        return self.async_show_form(
            step_id="user", data_schema=vol.Schema(schema), errors=errors
        )
