---
title: Custom-cards
parent: Development
nav_order: 2
---
# [](#develop-a-custom-card)Develop a custom-card

If you have configured something great for this theme, like a new card, you might want to share it with the community. To ease this process, here are some instructions on how to do that.

## [](#building-your-custom-card)Building your custom-card

*   Create a new folder following the [naming convention](#naming-conventions) of this theme, preferably by using the username and describing your card, eg. _custom_card_paddy_temperature_.
*   Create a new file `README.md` where you describe your card, note of specific requirements (like `custom_components` from HA or other `custom-cards`) and your name as the author. Find a template for that on our [boilerplate page](/development/boilerplate#readme).
*   Create a new file in this folder, naming it the same like your folder, eg. _custom_card_paddy_temperature.yaml_.
*   **IMPORTANT!**  
    Name the folder and file to your liking (preferably describing your chip/card), **but you must add the prefix _custom__** to both, the folder and the file name. Otherwise the file will not be correctly included!  
    Example: _custom_card_paddy_temperature/custom_card_paddy_temperature.yaml_
*   Now open the newly created file and start working on your definitions. Please see [order](#order) for the prefered structure of your definition.
*   You can use and inherit all `template definitions`, that are available through the main _button_card_templates.yaml_ of this theme. See the [here](/development/list_templates) for all definitions, including internal templates.
*   If you need to use language specific strings, please see [here](#language-specific-strings).
*   Please don’t inherit from other `custom-cards`, as the user might not have installed that card! If you really need to inherit from other `custom-cards`, you should clearly state this in your readme file!
*   To test your new code, copy the folder and its contents to the folder `minimalist-templates` in your `config` folder in HA.
*   Go to your lovelace view and click the three-dots button in the top right corner. _Reload resources_ and afterwards _refresh_ the page and you should now see your code working (hopefully).
*   You can now post your code in the support thread at the HA forum or you open an issue in the repository to upload a MergeRequest with your code. In both cases we will integrate your definition with one of the next updates.

## [](#naming-conventions)Naming conventions

To make it easier for the user, we would prefer, if you would use the following naming conventions to name your folders and files.

*   Prefix (**custom_**)
*   Type (like _chip_ or _card_)
*   Developer name (like _paddy0174_)
*   Name describing your chip/card (temperature)

This should look like this:  
`custom_card_paddy0174_temperature/custom_card_paddy0174_temperature.yaml`

In the end, your `custom-card` folder should have at least these structure:

```yaml
    config/minimalist-templates
    └── custom_card_paddy_temperature
       └── custom_card_paddy_temperature.yaml
       └── readme.md
       └── languages
          └── DE.yaml (optional)
          └── EN.yaml (if language variables are used, at least EN needs to be provided)
```

> **Note:** _This is **optional** and you can use whatever naming you want, but keep in mind, the use of **custom_** as a prefix **is required**!_

## [](#order)Order

To make reading the definitions easier, we use the following structure in our defintions in _button_card_templates.yaml_:

```yaml
    name:
      template:
      variables:
      tap_action/hold action/...:
      triggers_update:
      show_icon:
      show_label:
      show_name:
      show_state:
      icon:
      label:
      name:
      state:
      entity:
      styles:
        icon:
        label:
        name:
        state:
        img_cell:
        grid:
        card:
      custom_fields:
        item1:
          card:
            type:
            template:
```

Feel free to delete defintions, that you don’t use or need.

> **Note:** _Here as well, this is **optional**! It is just easier to use a structure, that can be easily compared to other definitions. But please do to your own liking and needs!_

## [](#language-specific-strings)Language specific strings

This “theme” supports language specific strings, as the translated strings (states) from HA are sometimes not available.

These `variables` are already provided by the “theme”:

*   ulm_on
*   ulm_off
*   ulm_open
*   ulm_closed
*   ulm_unavailable
*   ulm_standby
*   ulm_idle
*   ulm_currency

The usage is easy:  
Include the language variables by including the `template` _ulm_language_variables_ in your card and then use them just like every other variable.

```yaml
    template:
      - ulm_language_variables
      # optional, only if language variables are used
      - custom_card_paddy0174_temperature_language_variables 
    state:
      [[[
        if (state == 'off') {
          return variables.ulm_off;
        # if you use your own language variables, use them like this
        } else if (state == 'cool') {
          return variables.custom_card_paddy0174_temperature_cool;
        } else {
          return variables.ulm_on;
        }
      ]]]
```

Your language file should use this format:

```yaml
    # EN.yaml for custom_card_paddy0174_temperature
     custom_card_paddy0174_temperature_language_variables:
       variables:
         custom_card_paddy0174_temperature_cool: 'Cool'
```

Provide at least a file `EN.yaml` in your `custom-card`s language folder. If you want to support more languages, name them accordingly and use the same structure as in the `EN.yaml` file. In the end you will have different files in your languages folder, like `EN.yaml`, `FR.yaml` and `DE.yaml`. Please advise the user in your readme to delete all but one of these language files, otherwise the loading order gets messed up and the wrong strings get loaded.

## [](#notes)Notes

We are currently planning to support the automatic upload of custom cards through a repository (as a merge request). If you’re interested, please send us a short note. Until this function is implemented, please share it via the above mentioned ways. Thank you!