---
title: Prepare & Download
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

Before get started on anything, make sure you have created a backup of your home assistant configuration.

> In case you experience problems during installation please reach join the [Discord Server](https://discord.gg/TPXg9b7GfR).

You can install this UI Lovelace Minimalist Theme manual or through HACS.

You should have a HomeAssistant (HA) instance running, preferably with [HACS](https://hacs.xyz/) installed and you should know the basics in using HA, eg. how to change settings in your `lovelace` configuration.

You have access to your `config` folder of HA. Doesn’t matter which way this is, but you need to be able to upload and change files in your config. If you’re running `HA-OS` or a `supervised install` of HA, we highly recommend the [Samba AddOn](https://www.home-assistant.io/common-tasks/supervised/#installing-and-using-the-samba-add-on) (see the AddOn page for instructions) and for editing the File editor AddOn or a good editor like [Notepad++](https://notepad-plus-plus.org/) or [SublimeText](https://www.sublimetext.com/) for your OS.

!!! danger "Breaking Changes"
This integration is still under heavy development and might cause breaking changes

## HACS Download

### Prerequisites

For the pop-up cards to work it's required to install the Custom Integration called [`browser-mod`](https://github.com/thomasloven/hass-browser_mod). This can be done in HACS and search under Integration on [`browser-mod`](https://github.com/thomasloven/hass-browser_mod). Optionally you can install Frontend modules, but the integration also has a checkmark to include and configure them for you.

### Install Repository

To find this Integration on HACS we first need to add the UI Lovelace Minimalist (ULM) repository to Custom Reposistories.

1. Go to HACS
2. Click on Integrations
3. Search for "UI Lovelace Minimalist" and click "Download this Repository with HACS"
4. Select the version (will auto select latest)
5. Now we need to restart home-assistant under [![Open your Home Assistant instance and show your server controls.](https://my.home-assistant.io/badges/server_controls.svg)](https://my.home-assistant.io/redirect/server_controls/)
6. Wait until Home assistant is restarted and Continue to ["Install Integration"](https://ui-lovelace-minimalist.github.io/UI/setup/installation/#install-integration).

---

## Manual Download

If you can't or don't like to use HACS, you still have the possibility to use this fantastic "theme"

### Prerequisites

In order to function correctly, the UI Lovelace Mininmalist "Theme" requires some additional integrations and lovelace resources. While we can install most of these for you during the installation via HACS, you will also have to install and configuring them manually in advance for a manual installation.

#### Required Integration

- [browser_mod](https://github.com/thomasloven/hass-browser_mod) by Thomas Lovén

#### Required Lovelace Resources

- [button-card](https://github.com/custom-cards/button-card) by RomRider
- [card-mod](https://github.com/thomasloven/lovelace-card-mod) by Thomas Lovén
- [mini-graph-card](https://github.com/kalkih/mini-graph-card) by Karl Kihlström
- [Mini Media Player](https://github.com/kalkih/mini-media-player) by Karl Kihlström
- [My Cards Bundle](https://github.com/AnthonMS/my-cards) by AnthonMS\*\*
- [Light Entity Card](https://github.com/ljmerza/light-entity-card) by Leonardo Merza
- [auto-entities](https://github.com/thomasloven/lovelace-auto-entities) by Thomas Lovén
- [simple-weather-card](https://github.com/kalkih/simple-weather-card) by Karl Kihlström
- [weather-radar-card](https://github.com/Makin-Things/weather-radar-card) by Makin-Things
- [lovelace-layout-card](https://github.com/thomasloven/lovelace-layout-card) by Thomas Lovén
- [lovelace-state-swtch](https://github.com/thomasloven/lovelace-state-switch) by Thomas Lovén

You can install these via HACS or manually.

Some resources (as marked above with \*\*) might not be available in HACS by default.
To find and install these using HACS, first add them as [custom repositories](https://hacs.xyz/docs/faq/custom_repositories/).

### Download Release File

Go to the [release page](https://github.com/UI-Lovelace-Minimalist/UI/releases) and download the `ui_lovelace_minimalist.zip` attached to the latest release.

Unpack the file and move the folder it contains called `ui_lovelace_minimalist` to the following directory of your Home Assistant configuration:

`/config/custom_components/`

If this folder does not exist in your configuration directory, create it.
Then you have to restart your Home Assistant and can follow the step ["Install Integration"](https://ui-lovelace-minimalist.github.io/UI/setup/installation/#install-integration).
