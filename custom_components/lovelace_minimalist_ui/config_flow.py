import logging
import voluptuous as vol

from homeassistant import config_entries
from homeassistant.core import callback

from .const import DOMAIN, NAME

_LOGGER: logging.Logger = logging.getLogger(__package__)

# # Configuration:
# LANGUAGE = "language"
# LANGUAGES = [
#     "English"
# ]

# SIDEPANEL_TITLE = "sidepanel_title"
# SIDEPANEL_ICON = "sidepanel_icon"
# THEME = "theme"
# THEME_OPTIONS = [
#     "minimalist-mobile",
#     "minimalist-desktop",
#     "HA selected theme"
# ]

# CUSTOMIZE_PATH = "customize_path"

@config_entries.HANDLERS.register(DOMAIN)
class LovelaceMinimalistUiConfigFlow(config_entries.ConfigFlow):
    async def async_step_user(self, user_input=None):
        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")
        return self.async_create_entry(title=NAME, data={})

#     @staticmethod
#     @callback
#     def async_get_options_flow(config_entry):
#         return LovelaceMinimalistUiEditFlow(config_entry)

# class LovelaceMinimalistUiEditFlow(config_entries.OptionsFlow):
#     def __init__(self, config_entry):
#         self.config_entry = config_entry

#     async def async_step_init(self, user_input=None):
#         if user_input is not None:
#             return self.async_create_entry(title="", data=user_input)

#         schema = {
#             vol.Optional(LANGUAGE, default=self.config_entry.options.get("language", "English")): vol.In(LANGUAGES),
#             vol.Optional(SIDEPANEL_TITLE, default=self.config_entry.options.get("sidepanel_title", NAME)): str,
#             vol.Optional(SIDEPANEL_ICON, default=self.config_entry.options.get("sidepanel_icon", "mdi:flower")): str,
#             vol.Optional(THEME, default=self.config_entry.options.get("theme", "minimalist-desktop")): vol.In(THEME_OPTIONS),
#             vol.Optional(CUSTOMIZE_PATH, default=self.config_entry.options.get("customize_path", "customize.yaml")): str,
#         }

#         return self.async_show_form(
#             step_id="init",
#             data_schema=vol.Schema(schema)
#         )