---
title: Configuration
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->
## Add theme to your Lovelace

To get this theme with all the button templates working make sure at least the generated Lovelace Dashboard is working.

### YAML Mode

As described in the [installation step](https://ui-lovelace-minimalist.github.io/UI/setup/installation/#install-integration), we have already created a small sample dashboard for you, whose file is called `ui-lovelace.yaml` in the following directory when setting up the integration:

```yaml
config
└── ui_lovelace_minimalist
    ├── config
    ├── custom_cards
    └── dashboard
        └── ui-lovelace.yaml
```

This example dashbaord file already contains the necessary directory bindings with our templates from the custom_component and you can directly start customizing the dashboard according to your own wishes.

However, if you want to use your own, possibly already existing, dashbaord file, you must make the necessary bindings of the templates in it yourself. This can be done for example by specifying the following:

```yaml
# For future use!
ui_lovelace_minimalist: !include "custom_components/ui_lovelace_minimalist/lovelace/plugins/ui_lovelace_minimalist.yaml"
# Button cards location
button_card_templates: !include_dir_merge_named "custom_components/ui_lovelace_minimalist/__ui_minimalist__/ulm_templates/"
```

!!! note ""

    **Please note!** Depending on where you have stored your own Dashboard .yaml file, your path specification can of course differ from the example and must be adapted by you. In the example it was assumed that the .yaml file is located in the top level of the Home Assistant configuration.

### UI Mode

!!! warning "Currently not supported"

    **The Problem:** Home Assistant doesn’t let you include complete folders or even files in UI-mode. That means for you, you can’t work with the folder and file structure, we have provided in our download.
    You can manually go through the template files and copy the content that you need to paste in your raw-config-editor. However, this is very time-consuming and error-prone, which is why we have decided not to support this method at present.

## Custom Cards

This integration also allows you to add your own Custom Button Cards. These cards will be merged into a directory together witch the cards of this integration and the selected Language.

You might have noticed, during the installation process a directory for UI Lovelace Minimalist is/should be created in the Home Assistant configuration directory. The directory is named `ui_lovelace_minimalist`, within this directory you can put custom cards in the folder `custom_cards`. Basically you just have to create an folder inside `ui_lovelace_minimalist/custom_cards` for each cusom_card you want to add and put the custom_card.yaml file and the language file you need for the respective custom_card inside.

Make sure it's in the format like the following example:

```yaml
config
└── ui_lovelace_minimalist
    ├── config
    ├── custom_cards
    |   ├── custom_card_1
    |   |   ├── custom_card_1.yaml
    |   |   └── EN.yaml
    |   └── custom_card_2
    |       ├── custom_card_2.yaml
    |       └── EN.yaml
    └── dashboard
```

You don't need to do any extra inclusion in your dashboard yaml via `!include`, the custom_cards will be copied from this folder to the custom_component directory. The custom_cards folder itself remains untouched. A list of all currently available custom_cards can be found on our repo here: https://github.com/UI-Lovelace-Minimalist/UI/tree/main/custom_cards

!!! note ""

    Once you have added new custom_cards, you can always reload that folder via Home Assistant and add the new cards to the config.
    Just go to `"Configuration" --> "Settings"` in Home Assistant and press the `"UI_LOVELACE_MINIMALIST"` button within the "YAML configuration reloading" section.
