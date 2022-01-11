---
title: Custom-cards
parent: Installation
nav_order: 5
---
# [](#installation-of-custom-cards)Installation of custom-cards

If you're looking for a list of all `custom-cards`, take a look at [this page](/usage/custom_card_list)!

> **Note:** _The following instructions are only, if you installed for `yaml`-mode! If you installed for `UI`-mode, you or the generator have already taken care of this!_

This “theme” is designed with an open structure in mind, that’s why it is possible to add `custom-cards` without much hassle. A few `custom-cards` are readily available through the folder `custom-cards` in your download. You can always take a look in the forum thread [here](https://community.home-assistant.io/t/lovelace-ui-minimalist/322687?u=paddy0174), if new cards were contributed. The installation of these is easy and straightforward.

*   Copy the folder of the `custom-card` you want to use and paste it in the folder `minimalist-templates`. This should give you this structure:

```yaml
        └── minimalist-templates/
           └── button_card_templates.yaml
           └── EN.yaml
           └── custom_card_paddy0174_temperature/
              └── custom_card_paddy0174_temperature.yaml
              └── readme.md
              └── languages/
                 └── EN.yaml
```

*   Check, if the `custom-card` has specific requirements, like installed `lovelace-cards` or integrations from Home Assistant activated! The readme of the corresponding card explicitly notes, if there are any requirements.
*   Check, if the folder `languages` is available in the `custom-cards` folder. This is only the case, if the `custom-card` needs specific language variables.  
    If this folder is present, you need to take care, that **only ONE** language file is used by **deleting all but one**. If more than one language file is present, the language strings will possibly get messed up and you may find a mix between all provided languages.

> If you want to develop and share your card with the community, please [see this page](/development/custom_card) to get further information.

If you're looking for a list of all `custom-cards`, take a look at [this page](/usage/custom_card_list)!