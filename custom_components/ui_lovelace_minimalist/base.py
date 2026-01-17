"""Base UI Lovelace Minimalist class."""

from __future__ import annotations

import asyncio
from dataclasses import asdict, dataclass, field
import logging
from pathlib import Path
import shutil
from typing import TYPE_CHECKING, Any

from aiogithubapi import (
    GitHubAPI,
    GitHubAuthenticationException,
    GitHubContentsModel,
    GitHubException,
    GitHubNotModifiedException,
    GitHubRatelimitException,
)
from homeassistant.components.frontend import add_extra_js_url, async_remove_panel
from homeassistant.components.http import StaticPathConfig
from homeassistant.components.lovelace import _register_panel
from homeassistant.components.lovelace.dashboard import LovelaceYAML
from homeassistant.config_entries import ConfigEntry, ConfigEntryState

if TYPE_CHECKING:
    from collections.abc import Awaitable, Callable

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


class MinimalistException(Exception):
    """Base exception for UI Lovelace Minimalist."""


class InvalidConfigurationError(MinimalistException):
    """Raised when the configuration is not a dictionary."""


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
    token: str = ""

    def to_dict(self) -> dict:
        """Return Dict."""
        return self.__dict__

    def to_json(self) -> str:
        """Return a json string."""
        return str(asdict(self))

    def update_from_dict(self, data: dict) -> None:
        """Set attributes from dicts."""
        if not isinstance(data, dict):
            raise InvalidConfigurationError("Configuration is not valid.")

        for key, value in data.items():
            self.__setattr__(key, value)


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
    def integration_dir(self) -> Path:
        """Return the ULM integration dir."""
        return self.integration.file_path

    @property
    def templates_dir(self) -> Path:
        """Return the Button Cards Template dir."""
        return Path(f"{self.integration_dir}/__ui_minimalist__/ulm_templates")

    @property
    def community_cards_dir(self) -> Path:
        """Return the Comminty cards dir inside Template dir."""
        return Path(f"{self.templates_dir}/community_cards")

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
        self.log.debug("Saving file: %s", file_path)

        def _write_file() -> bool:
            path = Path(file_path)
            try:
                path.parent.mkdir(parents=True, exist_ok=True)
                if isinstance(content, str):
                    path.write_text(content, encoding="utf-8", errors="ignore")
                else:
                    path.write_bytes(content)
                return path.exists()

            except OSError:
                self.log.exception("Could not write data to %s", file_path)
                return False

        return await self.hass.async_add_executor_job(_write_file)

    async def async_github_get_file(self, filename: str) -> str:
        """Get the content of a file."""
        self.log.debug("Fetching github file: %s", filename)
        response = await self.async_github_api_method(
            method=self.githubapi.repos.contents.get,
            repository=GITHUB_REPO,
            path=filename,
        )
        if response and hasattr(response, "data"):
            if isinstance(response.data, GitHubContentsModel) and response.data.content:
                return decode_content(response.data.content)
        return ""

    async def async_github_get_tree(self, path: str) -> list[GitHubContentsModel]:
        """Get the content of a directory."""
        self.log.debug("Fetching github tree: %s", path)
        response = await self.async_github_api_method(
            method=self.githubapi.repos.contents.get, repository=GITHUB_REPO, path=path
        )
        if response and hasattr(response, "data"):
            if isinstance(response.data, list) and response.data:
                return response.data
        return []

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
        except GitHubNotModifiedException:
            raise
        except GitHubException as exception:
            _exception = exception
        except MinimalistException as exception:
            _exception = exception

        if raise_exception and _exception is not None:
            raise MinimalistException(_exception)
        return None

    def list_dirs(self) -> list[Path]:
        """Return a list of directory Path objects."""
        self.log.debug("Listing directories in %s", self.community_cards_dir)

        if not self.community_cards_dir.is_dir():
            return []

        return [path for path in self.community_cards_dir.iterdir() if path.is_dir()]

    async def fetch_cards(self) -> None:
        """Fetch list of cards."""
        response = await self.async_github_api_method(
            method=self.githubapi.repos.contents.get,
            repository=GITHUB_REPO,
            path=COMMUNITY_CARDS_FOLDER,
        )
        if response and hasattr(response, "data"):
            if isinstance(response.data, list) and response.data:
                self.configuration.all_community_cards = [
                    c.name for c in response.data if c.type == "dir"
                ]

    async def download_and_save(self, github_path, local_path):
        """Download and save selected community cards."""
        content = await self.async_github_get_file(filename=github_path)
        await self.async_save_file(file_path=str(local_path), content=content)

    async def configure_community_cards(self) -> None:
        """Configure selected community cards."""
        self.log.info("Configuring selected community cards")

        # Handle full cleanup if disabled or no cards selected
        if (
            not self.configuration.community_cards_enabled
            or self.configuration.community_cards == []
        ):
            if self.community_cards_dir.exists():
                await self.hass.async_add_executor_job(
                    shutil.rmtree, str(self.community_cards_dir), True
                )
            return

        # Ensure base directory exists for next steps
        self.community_cards_dir.mkdir(parents=True, exist_ok=True)
        language = LANGUAGES[self.configuration.language]

        # Identify folders to delete (Unselected or missing from GitHub)
        existing_dirs = await self.hass.async_add_executor_job(self.list_dirs)
        all_github_cards = self.configuration.all_community_cards

        delete_tasks = []
        for path_str in existing_dirs:
            path = Path(path_str)
            card_name = path.name

            if card_name not in self.configuration.community_cards:
                self.log.debug(
                    "Deleting community card folder %s, not selected anymore.",
                    card_name,
                )
                delete_tasks.append(path)
            elif card_name not in all_github_cards:
                self.log.debug(
                    "Deleting community card folder %s, that is not existing anymore on Github.",
                    card_name,
                )
                delete_tasks.append(path)

        # Batch delete unneeded folders to minimize executor overhead
        if delete_tasks:

            def _batch_delete(paths):
                for p in paths:
                    shutil.rmtree(str(p), ignore_errors=True)

            await self.hass.async_add_executor_job(_batch_delete, delete_tasks)

        # Download selected cards
        if self.configuration.community_cards_enabled:
            for card in self.configuration.community_cards:
                if card not in self.configuration.all_community_cards:
                    self.configuration.community_cards.remove(card)
                else:
                    card_files = await self.async_github_get_tree(
                        path=f"{COMMUNITY_CARDS_FOLDER}/{card}"
                    )
                    download_tasks = []
                    for f in card_files:
                        if f.type == "file":
                            target_path: Path = self.community_cards_dir / card / f.name

                            # Pathlib check for existence and size
                            if (
                                not target_path.exists()
                                or target_path.stat().st_size != f.size
                            ):
                                download_tasks.append(
                                    self.download_and_save(f.path, target_path)
                                )

                        elif f.type == "dir" and f.name == "languages":
                            language_files = await self.async_github_get_tree(
                                path=f.path
                            )

                            for lang in language_files:
                                # Only download if the stem matches the target language
                                if Path(lang.name).stem == language:
                                    target_path: Path = (
                                        self.community_cards_dir
                                        / card
                                        / "languages"
                                        / lang.name
                                    )
                                    if (
                                        not target_path.exists()
                                        or target_path.stat().st_size != lang.size
                                    ):
                                        download_tasks.append(
                                            self.download_and_save(
                                                lang.path, target_path
                                            )
                                        )

                    # Execute all downloads concurrently
                    if download_tasks:
                        await asyncio.gather(*download_tasks)

    async def configure_plugins(self) -> bool:
        """Configure the Plugins ULM depends on."""
        self.log.debug("Checking Dependencies.")
        self.log.info("Setup ULM Plugins")

        try:
            browser_mod_path = Path(
                self.hass.config.path("custom_components/browser_mod")
            )
            if not browser_mod_path.exists():
                self.log.error('HACS Integration repo "Browser Mod" is not installed.')

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
                frontend_repo_path = Path(self.hass.config.path(f"www/community/{p}"))
                if not self.configuration.include_other_cards:
                    if not frontend_repo_path.exists():
                        self.log.error(
                            'HACS Frontend repo "%s" is not installed, '
                            "See Integration Configuration.",
                            p,
                        )
                elif frontend_repo_path.exists():
                    self.log.error(
                        'HACS Frontend repo "%s" is already installed, '
                        "Remove it or disable include custom cards.",
                        p,
                    )

            if self.configuration.include_other_cards:
                for c in depenceny_resource_paths:
                    add_extra_js_url(
                        self.hass, f"/ui_lovelace_minimalist/cards/{c}/{c}.js"
                    )

            # Register
            await self.hass.http.async_register_static_paths(
                [
                    StaticPathConfig(
                        "/ui_lovelace_minimalist/cards",
                        self.hass.config.path(f"{self.integration_dir}/cards"),
                        True,
                    )
                ]
            )

        except MinimalistException as exception:
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
        # if not dashboard_url in hass.data["lovelace"].dashboards:
        try:
            if self.configuration.sidepanel_enabled:
                self.hass.data["lovelace"].dashboards[dashboard_url] = LovelaceYAML(
                    self.hass, dashboard_url, dashboard_config
                )

                _register_panel(
                    self.hass, dashboard_url, "yaml", dashboard_config, True
                )
            elif dashboard_url in self.hass.data["lovelace"].dashboards:
                async_remove_panel(self.hass, "ui-lovelace-minimalist")

            if self.configuration.adaptive_ui_enabled:
                self.hass.data["lovelace"].dashboards[adv_dashboard_url] = LovelaceYAML(
                    self.hass, adv_dashboard_url, adv_dashboard_config
                )

                _register_panel(
                    self.hass, adv_dashboard_url, "yaml", adv_dashboard_config, True
                )
            elif adv_dashboard_url in self.hass.data["lovelace"].dashboards:
                async_remove_panel(self.hass, "adaptive-dash")

        except MinimalistException as exception:
            self.log.error(exception)
            self.disable_ulm(UlmDisabledReason.LOAD_ULM)
            return False

        return True

    async def configure_ulm(self) -> bool:
        """Configure initial dashboard & cards directory."""
        self.log.info("Setup ULM Configuration")

        # Define Path objects
        base_dir = Path(self.hass.config.path(DOMAIN))
        integration_lovelace = Path(self.integration_dir) / "lovelace"
        dashboard_file = base_dir / "dashboard" / "ui-lovelace.yaml"
        adaptive_dir = base_dir / "dashboard" / "adaptive-dash"
        actions_file = base_dir / "custom_actions" / "custom_actions.yaml"

        def _sync_file_operations():
            """Grouped synchronous I/O to run in one executor job."""
            # Cleanup legacy folders
            for folder in ["configs", "addons"]:
                shutil.rmtree(base_dir / folder, ignore_errors=True)

            # Create necessary directories
            for folder in ["dashboard", "custom_cards", "custom_actions"]:
                (base_dir / folder).mkdir(parents=True, exist_ok=True)

            # Proceed if dashboard dir exists (it should, we just created it)
            if (base_dir / "dashboard").exists():
                self.templates_dir.mkdir(parents=True, exist_ok=True)

                # Translations
                language = LANGUAGES[self.configuration.language]

                # Copy default language file over to config dir
                shutil.copy2(
                    integration_lovelace / "translations" / "default.yaml",
                    self.templates_dir / "default.yaml",
                )

                # Copy chosen language file over to config dir
                shutil.copy2(
                    integration_lovelace / "translations" / f"{language}.yaml",
                    self.templates_dir / "language.yaml",
                )

                # Copy example dashboard file over to user config dir if not exists
                if self.configuration.sidepanel_enabled and not dashboard_file.exists():
                    shutil.copy2(
                        integration_lovelace / "ui-lovelace.yaml", dashboard_file
                    )

                if self.configuration.adaptive_ui_enabled and not adaptive_dir.exists():
                    shutil.copytree(
                        integration_lovelace / "adaptive-dash", adaptive_dir
                    )

                # Copy example custom actions file over to user config dir if not exists
                if not actions_file.exists():
                    shutil.copy2(
                        integration_lovelace / "custom_actions.yaml", actions_file
                    )

                # Copy over cards from integration
                shutil.copytree(
                    integration_lovelace / "ulm_templates",
                    self.templates_dir,
                    dirs_exist_ok=True,
                )

                # Copy over manually installed custom_cards from user
                shutil.copytree(
                    base_dir / "custom_cards",
                    self.templates_dir / "custom_cards",
                    dirs_exist_ok=True,
                )

                # Copy over manually installed custom_actions from user
                shutil.copytree(
                    base_dir / "custom_actions",
                    self.templates_dir / "custom_actions",
                    dirs_exist_ok=True,
                )

                # Copy over themes to defined themes folder
                theme_target = Path(
                    self.hass.config.path(self.configuration.theme_path)
                )
                shutil.copytree(
                    integration_lovelace / "themefiles",
                    theme_target,
                    dirs_exist_ok=True,
                )

        try:
            # Run all disk I/O in a single block
            await self.hass.async_add_executor_job(_sync_file_operations)

            # UI Reload and Service Registration
            self.hass.bus.async_fire("ui_lovelace_minimalist_reload")

            async def handle_reload(call):
                self.log.debug("Reload UI Lovelace Minimalist Configuration")
                await self.reload_configuration()

            # Register servcie ui_lovelace_minimalist.reload
            self.hass.services.async_register(DOMAIN, "reload", handle_reload)

        except MinimalistException as exception:
            self.log.error(exception)
            self.disable_ulm(UlmDisabledReason.LOAD_ULM)
            return False

        return True

    async def reload_configuration(self):
        """Reload Configuration."""
        self.log.info("Reloading ULM Configuration")

        # Define Path objects
        base_path = Path(self.hass.config.path(DOMAIN))

        def _sync_custom_folders():
            """Internal helper to group I/O operations."""

            # Copy over manually installed custom_cards from user
            folders = ["custom_cards", "custom_actions"]
            for folder in folders:
                source = base_path / folder
                if source.exists():
                    shutil.copytree(
                        source, self.templates_dir / folder, dirs_exist_ok=True
                    )

        # Run all I/O in one executor thread
        await self.hass.async_add_executor_job(_sync_custom_folders)

        # Notify the system
        self.hass.bus.async_fire("ui_lovelace_minimalist_reload")
