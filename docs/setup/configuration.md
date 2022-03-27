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
    ├── custom_cards
    └── dashboard
        └── ui-lovelace.yaml
```

This example dashboard file already contains the necessary directory bindings with our templates from the custom_component and you can directly start customizing the dashboard according to your own wishes.

However, if you want to use your own, possibly already existing, dashboard file, you must make the necessary bindings of the templates in it yourself. This can be done for example by specifying the following:

```yaml
# Button cards location
button_card_templates: !include_dir_merge_named "custom_components/ui_lovelace_minimalist/__ui_minimalist__/ulm_templates/"
```

!!! note ""

    **Please note!** This step is only necessary if you are not using the sample dashboard file created for you. The path specifications are relative. Depending on where you have stored your own Dashboard .yaml file, your path specification can differ from the example and must be adapted by you. In the example it was assumed that the .yaml file is located in the top level of the Home Assistant configuration.

### UI Mode

!!! warning "Currently not supported"

    **The Problem:** Home Assistant doesn’t let you include complete folders or even files in UI-mode. That means for you, you can’t work with the folder and file structure, we have provided in our download.
    You can manually go through the template files and copy the content that you need to paste in your raw-config-editor. However, this is very time-consuming and error-prone, which is why we have decided not to support this method at present.

## Custom Cards

This integration also allows you to add your own Custom Button Cards. These cards are not part of the HACS installation and must be downloaded separately from the repo as needed. You can find an overview of the cards [here](https://ui-lovelace-minimalist.github.io/UI/usage/custom_cards/custom_card_bar_card/) in our wiki. The cards themselves for the download are on our repo [here](https://github.com/UI-Lovelace-Minimalist/UI/tree/main/custom_cards).

To find some more detailed instructions to include the custom-cards to your dashboard take a look on [this page](https://ui-lovelace-minimalist.github.io/UI/setup/custom_cards/).
