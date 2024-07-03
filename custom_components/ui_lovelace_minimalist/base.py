"""Base UI Lovelace Minimalist class."""

from __future__ import annotations

from dataclasses import asdict, dataclass, field
from functools import partial
import logging
import os
import pathlib
import shutil
from typing import Any, Awaitable, Callable

from aiogithubapi import (
    GitHubAPI,
    GitHubAuthenticationException,
    GitHubException,
    GitHubNotModifiedException,
    GitHubRatelimitException,
)
from homeassistant.components.frontend import add_extra_js_url, async_remove_panel
from homeassistant.components.lovelace import _register_panel
from homeassistant.components.lovelace.dashboard import LovelaceYAML
from homeassistant.config_entries import ConfigEntry, ConfigEntryState
from homeassistant.core import HomeAssistant
from homeassistant.loader import Integration

from .const import (
    COMMUNITY_CARDS_FOLDER,
    DEFAULT_COMMUNITY_CARDS_ENABLED,
    DEFAULT_INCLUDE_OTHER_CARDS,
    DEFAULT_LANGUAGE,
    DEFAULT_SIDEPANEL_ENABLED,
    DEFAULT_SIDEPANEL_ICON,
    DEFAULT_SIDEPANEL_TITLE,
    DEFAULT_THEME,
    DEFAULT_THEME_PATH,
    DOMAIN,
    GITHUB_REPO,
    LANGUAGES,
    TV,
)
from .enums import ConfigurationType, UlmDisabledReason
from .utils.decode import decode_content

_LOGGER: logging.Logger = logging.getLogger(__name__)


@dataclass
class UlmSystem:
    """ULM System info."""

    disabled_reason: UlmDisabledReason | None = None
    running: bool = False

    @property
    def disabled(self) -> bool:
        """Return if ULM is disabled."""
        return self.disabled_reason is not None


@dataclass
class UlmConfiguration:
    """UlmConfiguration class."""

    config: dict[str, Any] = field(default_factory=dict)
    config_entry: ConfigEntry | None = None
    config_type: ConfigurationType | None = None
    sidepanel_enabled: bool = DEFAULT_SIDEPANEL_ENABLED
    sidepanel_icon: str = DEFAULT_SIDEPANEL_ICON
    sidepanel_title: str = DEFAULT_SIDEPANEL_TITLE
    adaptive_ui_enabled: bool = DEFAULT_SIDEPANEL_ENABLED
    adaptive_ui_icon: str = DEFAULT_SIDEPANEL_ICON
    adaptive_ui_title: str = DEFAULT_SIDEPANEL_TITLE
    theme_path: str = DEFAULT_THEME_PATH
    theme: str = DEFAULT_THEME
    plugin_path: str = "www/community/"
    include_other_cards: bool = DEFAULT_INCLUDE_OTHER_CARDS
    language: str = DEFAULT_LANGUAGE
    community_cards_enabled = bool = DEFAULT_COMMUNITY_CARDS_ENABLED
    community_cards: list = field(default_factory=list)
    all_community_cards: list = field(default_factory=list)
    token: str = None

    def to_dict(self) -> dict:
        """Return Dict."""
        return self.__dict__

    def to_json(self) -> str:
        """Return a json string."""
        return str(asdict(self))

    def update_from_dict(self, data: dict) -> None:
        """Set attributes from dicts."""
        if not isinstance(data, dict):
            raise Exception("Configuration is not valid.")

        for key in data:
            self.__setattr__(key, data[key])


class UlmBase:
    """Base UI Lovelace Minimalist."""

    integration: Integration | None = None
    configuration = UlmConfiguration()
    hass: HomeAssistant | None = None
    log: logging.Logger = _LOGGER
    githubapi: GitHubAPI | None = None
    system = UlmSystem()
    version: str | None = None

    @property
    def integration_dir(self) -> pathlib.Path:
        """Return the ULM integration dir."""
        return self.integration.file_path

    @property
    def templates_dir(self) -> pathlib.Path:
        """Return the Button Cards Template dir."""
        return pathlib.Path(f"{self.integration_dir}/__ui_minimalist__/ulm_templates")

    @property
    def community_cards_dir(self) -> pathlib.Path:
        """Return the Comminty cards dir inside Template dir."""
        return pathlib.Path(f"{self.templates_dir}/community_cards")

    def disable_ulm(self, reason: UlmDisabledReason) -> None:
        """Disable Ulm."""

        if self.system.disabled_reason == reason:
            return

        self.system.disabled_reason = reason
        if reason == UlmDisabledReason.INVALID_TOKEN:
            self.configuration.config_entry.state = ConfigEntryState.SETUP_ERROR
            self.configuration.config_entry.reason = "Authentiation Failed"
            self.hass.add_job(
                self.configuration.config_entry.async_start_reauth, self.hass
            )

    def enable_ulm(self) -> None:
        """Enable Ulm."""
        if self.system.disabled_reason is not None:
            self.system.disabled_reason = None
            self.log.info("ULM is enabled")

    async def async_save_file(self, file_path: str, content: Any) -> bool:
        """Save a file."""

        self.log.debug("Saving file: %s" % file_path)

        def _write_file():
            os.makedirs(os.path.dirname(file_path), exist_ok=True)
            with open(
                file_path,
                mode="w" if isinstance(content, str) else "wb",
                encoding="utf-8" if isinstance(content, str) else None,
                errors="ignore" if isinstance(content, str) else None,
            ) as file_handler:
                file_handler.write(content)

        try:
            await self.hass.async_add_executor_job(_write_file)
        except (
            BaseException
        ) as error:  # lgtm [py/catch-base-exception] pylint: disable=broad-except
            self.log.error(f"Could not write data to {file_path} - {error}")
            return False

        return os.path.exists(file_path)

    async def async_github_get_file(self, filename: str) -> list:
        """Get the content of a file."""
        self.log.debug("Fetching github file: %s" % filename)
        response = await self.async_github_api_method(
            method=self.githubapi.repos.contents.get,
            repository=GITHUB_REPO,
            path=filename,
        )
        if response is None:
            return []
        return decode_content(response.data.content)

    async def async_github_get_tree(self, path: str) -> list:
        """Get teh content of a directory."""
        self.log.debug("Fetching github tree: %s" % path)
        response = await self.async_github_api_method(
            method=self.githubapi.repos.contents.get, repository=GITHUB_REPO, path=path
        )
        if response is None:
            return []
        return response.data

    async def async_github_api_method(
        self,
        method: Callable[[], Awaitable[TV]],
        *args,
        raise_exception: bool = True,
        **kwargs,
    ) -> TV | None:
        """Call a GitHub API method."""
        _exception = None

        try:
            return await method(*args, **kwargs)
        except GitHubAuthenticationException as exception:
            self.disable_ulm(UlmDisabledReason.INVALID_TOKEN)
            _exception = exception
        except GitHubRatelimitException as exception:
            _exception = exception
        except GitHubNotModifiedException as exception:
            raise exception
        except GitHubException as exception:
            _exception = exception
        except (
            BaseException
        ) as exception:  # lgtm [py/catch-base-exception] pylint: disable=broad-except
            _exception = exception

        if raise_exception and _exception is not None:
            raise Exception(_exception)
        return None

    def list_dirs(self) -> list:
        """Create directory list."""

        self.log.debug("Create directory list")

        dir_list = []
        for entry in os.scandir(self.community_cards_dir):
            if entry.is_dir():
                dir_list.append(entry.path)
        return dir_list

    async def fetch_cards(self) -> None:
        """Fetch list of cards."""
        response = await self.async_github_api_method(
            method=self.githubapi.repos.contents.get,
            repository=GITHUB_REPO,
            path=COMMUNITY_CARDS_FOLDER,
        )
        if response is None:
            return []
        self.configuration.all_community_cards = [
            c.name for c in response.data if c.type == "dir"
        ]

    async def configure_community_cards(self) -> None:
        """Configure selected community cards."""
        self.log.info("Configuring selected community cards")

        language = LANGUAGES[self.configuration.language]
        os.makedirs(self.community_cards_dir, exist_ok=True)

        if (
            not self.configuration.community_cards_enabled
            or self.configuration.community_cards == []
        ):
            self.hass.async_add_executor_job(
                partial(
                    shutil.rmtree, f"{self.community_cards_dir}/", ignore_errors=True
                )
            )
        elif self.configuration.community_cards_enabled:
            existing_cards = await self.hass.async_add_executor_job(self.list_dirs)
            for e in existing_cards:
                card_dir = os.path.basename(e)
                # Delete unselected folders
                if card_dir not in self.configuration.community_cards:
                    self.log.debug(
                        f"Deleting community card folder {card_dir}, not selected anymore."
                    )
                    self.hass.async_add_executor_job(
                        partial(shutil.rmtree, e, ignore_errors=True)
                    )
                if card_dir not in self.configuration.all_community_cards:
                    self.log.debug(
                        f"Deleting community card folder {card_dir}, that is not existing anymore on Github."
                    )
                    self.hass.async_add_executor_job(
                        partial(shutil.rmtree, e, ignore_errors=True)
                    )

            for card in self.configuration.community_cards:
                if card not in self.configuration.all_community_cards:
                    self.configuration.community_cards.remove(card)
                else:
                    card_files = await self.async_github_get_tree(
                        path=f"{COMMUNITY_CARDS_FOLDER}/{card}"
                    )
                    for f in card_files:
                        if f.type == "file":
                            card_file_path = (
                                f"{self.community_cards_dir}/{card}/{f.name}"
                            )
                            if (
                                not os.path.exists(card_file_path)
                                or os.path.getsize(card_file_path) != f.size
                            ):
                                await self.async_save_file(
                                    file_path=card_file_path,
                                    content=await self.async_github_get_file(
                                        filename=f.path
                                    ),
                                )
                        elif f.type == "dir" and f.name == "languages":
                            language_files = await self.async_github_get_tree(
                                path=f.path
                            )
                            for lang in language_files:
                                lang_file_path = f"{self.community_cards_dir}/{card}/languages/{lang.name}"
                                if pathlib.Path(lang.name).stem == language:
                                    if (
                                        not os.path.exists(lang_file_path)
                                        or os.path.getsize(lang_file_path) != lang.size
                                    ):
                                        await self.async_save_file(
                                            file_path=lang_file_path,
                                            content=await self.async_github_get_file(
                                                filename=lang.path
                                            ),
                                        )

    async def configure_plugins(self) -> bool:
        """Configure the Plugins ULM depends on."""
        self.log.debug("Checking Dependencies.")
        self.log.info("Setup ULM Plugins")

        try:
            if not os.path.exists(
                self.hass.config.path("custom_components/browser_mod")
            ):
                self.log.error('HACS Integration repo "browser mod" is not installed!')

            depenceny_resource_paths = [
                "button-card",
                "light-entity-card",
                "lovelace-card-mod",
                "lovelace-auto-entities",
                "mini-graph-card",
                "mini-media-player",
                "my-cards",
                "simple-weather-card",
                "lovelace-layout-card",
                "lovelace-state-switch",
                "weather-radar-card",
            ]
            for p in depenceny_resource_paths:
                if not self.configuration.include_other_cards:
                    if not os.path.exists(self.hass.config.path(f"www/community/{p}")):
                        self.log.error(
                            f'HACS Frontend repo "{p}" is not installed, See Integration Configuration.'
                        )
                elif os.path.exists(self.hass.config.path(f"www/community/{p}")):
                    _LOGGER.error(
                        f'HACS Frontend repo "{p}" is already installed, Remove it or disable include custom cards'
                    )

            if self.configuration.include_other_cards:
                for c in depenceny_resource_paths:
                    add_extra_js_url(
                        self.hass, f"/ui_lovelace_minimalist/cards/{c}/{c}.js"
                    )

            # Register
            self.hass.http.register_static_path(
                "/ui_lovelace_minimalist/cards",
                self.hass.config.path(f"{self.integration_dir}/cards"),
                True,
            )

        except Exception as exception:
            self.log.error(exception)
            self.disable_ulm(UlmDisabledReason.LOAD_ULM)
            return False

        return True

    async def configure_dashboard(self) -> bool:
        """Configure the ULM Dashboards."""
        self.log.info("Setup ULM Dashboard")

        dashboard_url = "ui-lovelace-minimalist"
        dashboard_config = {
            "mode": "yaml",
            "icon": self.configuration.sidepanel_icon,
            "title": self.configuration.sidepanel_title,
            "filename": "ui_lovelace_minimalist/dashboard/ui-lovelace.yaml",
            "show_in_sidebar": True,
            "require_admin": False,
        }

        adv_dashboard_url = "adaptive-dash"
        adv_dashboard_config = {
            "mode": "yaml",
            "icon": self.configuration.adaptive_ui_icon,
            "title": self.configuration.adaptive_ui_title,
            "filename": "ui_lovelace_minimalist/dashboard/adaptive-dash/adaptive-ui.yaml",
            "show_in_sidebar": True,
            "require_admin": False,
        }
        # Optoinal override can be done with config_flow?
        # if not dashboard_url in hass.data["lovelace"]["dashboards"]:
        try:
            if self.configuration.sidepanel_enabled:
                self.hass.data["lovelace"]["dashboards"][dashboard_url] = LovelaceYAML(
                    self.hass, dashboard_url, dashboard_config
                )

                _register_panel(
                    self.hass, dashboard_url, "yaml", dashboard_config, True
                )
            elif dashboard_url in self.hass.data["lovelace"]["dashboards"]:
                async_remove_panel(self.hass, "ui-lovelace-minimalist")

            if self.configuration.adaptive_ui_enabled:
                self.hass.data["lovelace"]["dashboards"][
                    adv_dashboard_url
                ] = LovelaceYAML(self.hass, adv_dashboard_url, adv_dashboard_config)

                _register_panel(
                    self.hass, adv_dashboard_url, "yaml", adv_dashboard_config, True
                )
            elif adv_dashboard_url in self.hass.data["lovelace"]["dashboards"]:
                async_remove_panel(self.hass, "adaptive-dash")

        except Exception as exception:
            self.log.error(exception)
            self.disable_ulm(UlmDisabledReason.LOAD_ULM)
            return False

        return True

    async def configure_ulm(self) -> bool:
        """Configure initial dashboard & cards directory."""
        self.log.info("Setup ULM Configuration")

        try:
            # Cleanup
            self.hass.async_add_executor_job(
                partial(
                    shutil.rmtree,
                    self.hass.config.path(f"{DOMAIN}/configs"),
                    ignore_errors=True,
                )
            )
            self.hass.async_add_executor_job(
                partial(
                    shutil.rmtree,
                    self.hass.config.path(f"{DOMAIN}/addons"),
                    ignore_errors=True,
                )
            )
            # Create config dir
            os.makedirs(self.hass.config.path(f"{DOMAIN}/dashboard"), exist_ok=True)
            os.makedirs(self.hass.config.path(f"{DOMAIN}/custom_cards"), exist_ok=True)
            os.makedirs(
                self.hass.config.path(f"{DOMAIN}/custom_actions"), exist_ok=True
            )

            if os.path.exists(self.hass.config.path(f"{DOMAIN}/dashboard")):
                os.makedirs(self.templates_dir, exist_ok=True)

                # Translations
                language = LANGUAGES[self.configuration.language]

                # Copy default language file over to config dir
                self.hass.async_add_executor_job(
                    shutil.copy2,
                    f"{self.integration_dir}/lovelace/translations/default.yaml",
                    f"{self.templates_dir}/default.yaml",
                )
                # Copy example dashboard file over to user config dir if not exists
                if self.configuration.sidepanel_enabled:
                    if not os.path.exists(
                        self.hass.config.path(f"{DOMAIN}/dashboard/ui-lovelace.yaml")
                    ):
                        self.hass.async_add_executor_job(
                            shutil.copy2,
                            f"{self.integration_dir}/lovelace/ui-lovelace.yaml",
                            self.hass.config.path(
                                f"{DOMAIN}/dashboard/ui-lovelace.yaml"
                            ),
                        )
                # Copy adaptive dashboard if not exists and is selected as option
                if self.configuration.adaptive_ui_enabled:
                    if not os.path.exists(
                        self.hass.config.path(f"{DOMAIN}/dashboard/adaptive-dash")
                    ):
                        self.hass.async_add_executor_job(
                            shutil.copytree,
                            f"{self.integration_dir}/lovelace/adaptive-dash",
                            self.hass.config.path(f"{DOMAIN}/dashboard/adaptive-dash"),
                        )
                # Copy example custom actions file over to user config dir if not exists
                if not os.path.exists(
                    self.hass.config.path(
                        f"{DOMAIN}/custom_actions/custom_actions.yaml"
                    ),
                ):
                    self.hass.async_add_executor_job(
                        shutil.copy2,
                        f"{self.integration_dir}/lovelace/custom_actions.yaml",
                        self.hass.config.path(
                            f"{DOMAIN}/custom_actions/custom_actions.yaml"
                        ),
                    )
                # Copy chosen language file over to config dir
                self.hass.async_add_executor_job(
                    shutil.copy2,
                    f"{self.integration_dir}/lovelace/translations/{language}.yaml",
                    f"{self.templates_dir}/language.yaml",
                )
                # Copy over cards from integration
                self.hass.async_add_executor_job(
                    partial(
                        shutil.copytree,
                        f"{self.integration_dir}/lovelace/ulm_templates",
                        f"{self.templates_dir}",
                        dirs_exist_ok=True,
                    ),
                )
                # Copy over manually installed custom_cards from user
                self.hass.async_add_executor_job(
                    partial(
                        shutil.copytree,
                        self.hass.config.path(f"{DOMAIN}/custom_cards"),
                        f"{self.templates_dir}/custom_cards",
                        dirs_exist_ok=True,
                    ),
                )
                # Copy over manually installed custom_actions from user
                self.hass.async_add_executor_job(
                    partial(
                        shutil.copytree,
                        self.hass.config.path(f"{DOMAIN}/custom_actions"),
                        f"{self.templates_dir}/custom_actions",
                        dirs_exist_ok=True,
                    ),
                )
                # Copy over themes to defined themes folder
                self.hass.async_add_executor_job(
                    partial(
                        shutil.copytree,
                        f"{self.integration_dir}/lovelace/themefiles",
                        self.hass.config.path(f"{self.configuration.theme_path}/"),
                        dirs_exist_ok=True,
                    ),
                )

            self.hass.bus.async_fire("ui_lovelace_minimalist_reload")

            async def handle_reload(call):
                _LOGGER.debug("Reload UI Lovelace Minimalist Configuration")

                self.reload_configuration()

            # Register servcie ui_lovelace_minimalist.reload
            self.hass.services.async_register(DOMAIN, "reload", handle_reload)

        except Exception as exception:
            self.log.error(exception)
            self.disable_ulm(UlmDisabledReason.LOAD_ULM)
            return False

        return True

    def reload_configuration(self):
        """Reload Configuration."""
        self.log.info("Reload ULM Configuration")
        if os.path.exists(self.hass.config.path(f"{DOMAIN}/custom_cards")):
            # Copy over manually installed custom_cards from user
            self.hass.async_add_executor_job(
                partial(
                    shutil.copytree,
                    self.hass.config.path(f"{DOMAIN}/custom_cards"),
                    f"{self.templates_dir}/custom_cards",
                    dirs_exist_ok=True,
                ),
            )
        if os.path.exists(self.hass.config.path(f"{DOMAIN}/custom_actions")):
            # Copy over manually installed custom_actions from user
            self.hass.async_add_executor_job(
                partial(
                    shutil.copytree,
                    self.hass.config.path(f"{DOMAIN}/custom_actions"),
                    f"{self.templates_dir}/custom_actions",
                    dirs_exist_ok=True,
                ),
            )
        self.hass.bus.async_fire("ui_lovelace_minimalist_reload")
