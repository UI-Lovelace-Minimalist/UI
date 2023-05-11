---
title: Configuration
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->
## Add Custom-cards to your dashboard

This 'theme' and his community do offer support for multiple great Custom-cards. To use and download these Custom-cards follow the instructions on this page.

!!! tip "  🚀  New Custom Card Selection Feature!  🚀"

    Since the release of `v1.1.0` support has been build in to select custom/community cards that are available in the `main` branch on our Github Repository in the `custom_cards` folder. This Removes the need for copying over files from the Github Repo and put them in the `/config/ui_lovelace_minimlist/custom_cards` folder.
    You can select the custom cards you want to use in your integration options (see [installation](installation.md)). This requires a GitHub account. Alternatively
    you can copy the custom cards you want to use as outlined below.

### Custom Cards

This integration also allows you to add your own Custom Button Cards. These cards are not part of the HACS installation and must be downloaded separately from the repo as needed. You can find an overview of the cards [here](https://ui-lovelace-minimalist.github.io/UI/usage/custom_cards/custom_card_bar_card/) in our wiki. The cards themselves for the download are on our repo [here](https://github.com/UI-Lovelace-Minimalist/UI/tree/main/custom_cards), or select them on the integration Configuration page.

You might have noticed, during the installation process a directory for UI Lovelace Minimalist is/should be created in the Home Assistant configuration directory (in the folder `/config`). The directory is named `ui_lovelace_minimalist`, within this directory you can put custom cards in the folder `custom_cards`.
Basically you just have to create an folder inside `ui_lovelace_minimalist/custom_cards` for each custom_card you want to add and put the custom_card.yaml file and the translation file you need for the respective custom_card inside. These cards will then be merged into a directory together witch the cards of this integration and the selected Language.

!!! note "Translation files for custom cards"

    Most Custom Cards do not work without adding a small translation file. These files can be found in the corresponding folder of a particular Custom Card within a folder `languages`. Make sure to only download the translation file you need. As adding multiple translation files can give unwanted results/errors!

Make sure it's in the format like the following example:

```yaml
config
└── ui_lovelace_minimalist
    ├── custom_cards
    |   ├── custom_card_1
    |   |   ├── custom_card_1.yaml
    |   |   └── EN.yaml
    |   └── custom_card_2
    |       ├── custom_card_2.yaml
    |       └── EN.yaml
    └── dashboard
```

!!! warning

    Do not alter files in `custom_components/ui_lovelace_minimalist` as those changes will be overridden with each new release/update through HACS!!

You don't need to do any extra inclusion in your dashboard yaml via `!include`, the custom_cards will be copied from this folder to the custom_component directory. The custom_cards folder itself remains untouched. A list of all currently available custom_cards can be found on our repo here: https://github.com/UI-Lovelace-Minimalist/UI/tree/main/custom_cards

!!! tip "Reloading"

    Once you have added new custom_cards, you can always reload that folder via Home Assistant and add the new cards to the config.
    Just go to `"Developer Tools"` in Home Assistant and press the `"UI_LOVELACE_MINIMALIST"` button within the "YAML configuration   reloading" section.

### Develop your own Custom-cards

You can always manual add new YAML-files with card-templates to `/config/ui_lovelace_minimalist/custom_cards` for your own use.
If you want to share and contribute your custom-cards to the community please read [this page](https://ui-lovelace-minimalist.github.io/UI/development/custom_cards/).
