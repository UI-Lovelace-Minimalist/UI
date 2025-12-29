# Integration Blueprint

This is a blueprint for creating a Home Assistant custom integration. It includes the patterns and features you'll want when building an integration, so you can focus on your specific device or service instead of boilerplate.

HAVE FUN! 😎

## Why?

By having custom integrations follow a common structure and include common features, it's easier for developers to help each other and for users to use them. This blueprint includes modern Home Assistant patterns so you don't have to figure them out yourself.

If you think something is missing that would help other developers, please open a PR to add it.

## What's included?

This blueprint demonstrates:

- Config flow for user setup with validation
- Reconfiguration support to update credentials
- Translation keys for proper internationalization
- Diagnostics support for troubleshooting
- DataUpdateCoordinator pattern for efficient API polling
- Multiple entity types (sensor, binary sensor, switch)
- Async API client with proper error handling
- Modern development tooling (Ruff, pre-commit, dev container)

## Quick start

1. Create a new repository using this template (click "Use this template" in GitHub)
2. Open your new repository in Visual Studio Code devcontainer (preferably with the "`Dev Containers: Clone Repository in Named Container Volume...`" option)
3. Rename all instances of `integration_blueprint` to `custom_components/<your_integration_domain>`
4. Rename all instances of `Integration Blueprint` to `<Your Integration Name>`
5. Run `scripts/develop` to start Home Assistant and test your integration

## Development scripts

This repository uses the [Scripts to Rule Them All](https://github.com/github/scripts-to-rule-them-all) pattern:

- `scripts/bootstrap` - One-time setup after cloning (installs dependencies and pre-commit hooks)
- `scripts/setup` - Set up the project for the first time after cloning
- `scripts/update` - Re-initialize dependencies after pulling new changes
- `scripts/lint` - Run linting and auto-format code
- `scripts/lint-check` - Check linting without making changes (for CI)
- `scripts/develop` - Start Home Assistant in development mode
- `scripts/help` - Display available scripts and their descriptions

All scripts use the modern [uv](https://github.com/astral-sh/uv) package manager for faster dependency management.

## What's in the blueprint?

This repository contains multiple files to help you get started:

File | Purpose | Documentation
-- | -- | --
`.devcontainer.json` | Development container configuration for VS Code | [Documentation](https://code.visualstudio.com/docs/remote/containers)
`.pre-commit-config.yaml` | Pre-commit hooks for automatic code quality checks | [Documentation](https://pre-commit.com/)
`pyproject.toml` | Python project configuration with Ruff settings | [Documentation](https://packaging.python.org/en/latest/guides/writing-pyproject-toml/)
`requirements.txt` | Python packages for development | [Documentation](https://pip.pypa.io/en/stable/user_guide/#requirements-files)
`scripts/*` | Development scripts following Scripts to Rule Them All pattern | [Documentation](https://github.com/github/scripts-to-rule-them-all)
`.github/ISSUE_TEMPLATE/*.yml` | Templates for issue tracking | [Documentation](https://help.github.com/en/github/building-a-strong-community/configuring-issue-templates-for-your-repository)
`CONTRIBUTING.md` | Contribution guidelines | [Documentation](https://help.github.com/en/github/building-a-strong-community/setting-guidelines-for-repository-contributors)
`LICENSE` | Project license | [Documentation](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository)
`README.md` | This file | [Documentation](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)

## Features explained

### Config flow

The [config_flow.py](custom_components/integration_blueprint/config_flow.py) file handles user setup. Users can add the integration through the UI, enter credentials, and the config flow validates them before creating a config entry.

The config flow also supports reconfiguration, so users can update their credentials without removing and re-adding the integration.

### Translation keys

All user-facing strings use translation keys instead of hardcoded text. This makes it easy to support multiple languages. See [translations/en.json](custom_components/integration_blueprint/translations/en.json) for the structure.

### DataUpdateCoordinator

The [coordinator.py](custom_components/integration_blueprint/coordinator.py) file uses DataUpdateCoordinator to fetch data efficiently. Instead of each entity polling the API separately, the coordinator fetches data once and shares it with all entities. This reduces API calls and handles errors consistently.

### Diagnostics

The [diagnostics.py](custom_components/integration_blueprint/diagnostics.py) file provides debug information that users can download from the UI. This helps with troubleshooting without exposing sensitive data.

### Entity platforms

The blueprint includes three entity types to demonstrate different patterns:

- [sensor.py](custom_components/integration_blueprint/sensor.py) - Shows how to create a sensor with string values
- [binary_sensor.py](custom_components/integration_blueprint/binary_sensor.py) - Shows a binary sensor with device class
- [switch.py](custom_components/integration_blueprint/switch.py) - Shows a controllable entity that interacts with the API

### API client

The [api.py](custom_components/integration_blueprint/api.py) file provides an async API client with:

- Modern asyncio timeout handling (using `asyncio.timeout` instead of deprecated `async_timeout`)
- Proper error handling with custom exceptions
- Authentication support

### Pre-commit hooks

The repository uses [pre-commit](https://pre-commit.com/) to automatically check and format code before commits. The hooks run Ruff for fast linting and formatting. They're installed automatically when you run `scripts/bootstrap`.

### Development container

The [.devcontainer.json](.devcontainer.json) file configures a VS Code development container with Python 3.13, all required extensions, and proper settings. This gives you a working development environment without manual setup.

## Next steps

These are some next steps you may want to look into:

- Add tests to your integration, [`pytest-homeassistant-custom-component`](https://github.com/MatthewFlamm/pytest-homeassistant-custom-component) can help you get started
- Add brand images (logo/icon) to https://github.com/home-assistant/brands
- Create your first release
- Share your integration on the [Home Assistant Forum](https://community.home-assistant.io/)
- Submit your integration to [HACS](https://hacs.xyz/docs/publish/start)

## Resources

- [Home Assistant developer documentation](https://developers.home-assistant.io/)
- [Creating a custom integration](https://developers.home-assistant.io/docs/creating_component_index)
- [Config flow documentation](https://developers.home-assistant.io/docs/config_entries_config_flow_handler)
- [DataUpdateCoordinator documentation](https://developers.home-assistant.io/docs/integration_fetching_data)
