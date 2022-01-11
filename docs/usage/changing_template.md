---
title: 	Changing template
parent: Usage
nav_order: 5
---
# [](#changing-templates)Changing templates

This “theme” is build with the idea to make its use easy. But there are cases (actually a lot of them), where you want to change settings in the template to fit it to your needs. Changing or adding things to the code from the repository isn’t a good idea, as the next update would overwrite it.

To avoid this, we wrote up some instructions, how you can add your code without changing ours.

## [](#which-installation-method-did-you-use)Which installation method did you use?

*   for `yaml`-mode [click here](#yaml-mode)
*   for `UI`-mode [click here](#ui-mode)

## [](#yaml-mode)Yaml-mode

To make your life easy and to asure the next update will not brake anything, we recommend the following way to change settings.

*   Search for a chip or card on [this page](/development/list_templates), that looks like the one you want to newly create.
*   Click on the “template name” to open the code view and copy the complete code.
*   Go to your `config` folder of HA, go to the folder `minimalist_templates` and add a new folder.
*   Go into the newly created folder and add a new file.
*   **IMPORTANT!**  
    Name the folder and file to your liking (preferably describing your chip/card), **but you must add the prefix _custom__** to both, the folder and the file name. Otherwise the file will not be correctly included!  
    Example: _custom_chip_temperature/custom_chip_temperature.yaml_
*   Now paste the code into your newly created file.

    <div class="code-toolbar">

        chip_temperature:
          template: chips
          label: |
            [[[
              var icon = '🌡️';
              if (states[variables.ulm_chip_temperature_weather].state == 'clear-night'){
                var icon = '🌙';

                [...]

              }
              return icon + ' ' + states[variables.ulm_chip_temperature_outside].state + '° / ' + states[variables.ulm_chip_temperature_inside].state + '°' ;
            ]]]

    <div class="toolbar">

    <div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

    </div>

    </div>

*   Now change the name of your chip/card and afterwards the template name to the one you copied from

    <div class="code-toolbar">

        paddy_chip_temperature: # <- change name
          template: chip_temperature # <- change from chips to chip_temperature
          # from here down you can add/change/delete
          label: |
            [[[
              var icon = '🌡️';
              if (states[variables.ulm_chip_temperature_weather].state == 'clear-night'){
                var icon = '🌙';

                [...]

              }
              return icon + ' ' + states[variables.ulm_chip_temperature_outside].state + '° / ' + states[variables.ulm_chip_temperature_inside].state + '°' ;
            ]]]

    <div class="toolbar">

    <div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

    </div>

    </div>

*   You can now overwrite basically every setting that is pre-configured. See the documentation of [button-card](https://github.com/custom-cards/button-card) to look up all the settings, you can configure.

    > **Note:** _The configuration that you set in your own file, overwrites the configuration set by this theme. Eg. if you set `label` in your file, the settings from `label` in this “themes” file will be overwritten. But as long as you follow this readme, these settings are reversible. Just delete the content of your file and start new, if you’re not satisfied or get errors._

*   Save the file and reload your lovelace configuration via the three-dot menu in the upper right corner of your lovelace view pressing `Reload resources`.
*   You can now use your newly created template for your chip/card by calling the new template in your “view” code like all other chips/cards.

    <div class="code-toolbar">

        - type: custom:button-card
          template: paddy_chip_temperature

    <div class="toolbar">

    <div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

    </div>

    </div>

> **Note:** _What we did here, is setting up a new template (`paddy_chip_temperature`) that inherits all of its settings from the original template (`chip_temperature`). That means, without adding anything more to the code than name and template, you will get exactly the same chip/card, but you will have to call it with your name.  
> That leaves you with a scaffold, where you just need to add changes to the original styling._

If you are satisfied with your card, why not share it with the community? You can either post it in the [support thread](https://community.home-assistant.io/t/lovelace-ui-minimalist/322687?u=paddy0174) or take a look [at this page](/development/custom_card), where we have some informations gathered for developing a custom card.

## [](#ui-mode)UI-mode

Adding your custom code in `UI`-mode is taking place in your raw-config-editor.

*   Search for a chip or card on [this page](/development/list_templates), that looks like the one you want to newly create.
*   Click on the “template name” to open the code view and copy the complete code.
*   Go to your Minimalist page in Home Assistant and open the three-dot-menu in the top right corner.
*   Choose “Edit dashboard” to go into edit mode, open the raw-config-editor via the three-dot-menu.
*   Now search for the string “views:”.
*   In the line above “views:” (or above the empty line), you should see the end of your installed `button_card_template`s.
*   Add a new line underneath the code block from `button_card_templates` and paste the code you copied before.
*   Take note of the indentation, normally it should be two (2) spaces for the first line, more according to the code you configure. Every line you added (or will add later on) needs to be correctly indented!  
    Something like this:

    <div class="code-toolbar">

          chip_temperature:
            template: chips
            label: |
              [[[
                var icon = '🌡️';
                if (states[variables.ulm_chip_temperature_weather].state == 'clear-night'){
                  var icon = '🌙';

                    [...]

                  }
                  return icon + ' ' + states[variables.ulm_chip_temperature_outside].state + '° / ' + states[variables.ulm_chip_temperature_inside].state + '°' ;
              ]]]

    <div class="toolbar">

    <div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

    </div>

    </div>

*   Now change the name of your chip/card and afterwards the template name to the one you copied from

    <div class="code-toolbar">

        paddy_chip_temperature: # <- change name
          template: chip_temperature # <- change from chips to chip_temperature
          # from here down you can add/change/delete
          label: |
            [[[
              var icon = '🌡️';
              if (states[variables.ulm_chip_temperature_weather].state == 'clear-night'){
                var icon = '🌙';

                [...]

              }
              return icon + ' ' + states[variables.ulm_chip_temperature_outside].state + '° / ' + states[variables.ulm_chip_temperature_inside].state + '°' ;
            ]]]

    <div class="toolbar">

    <div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

    </div>

    </div>

*   You can now overwrite basically every setting that is pre-configured. See the documentation of [button-card](https://github.com/custom-cards/button-card) to look up all the settings, you can configure.

    > **Note:** _The configuration that you set with this code, overwrites the configuration set by this theme. Eg. if you set `label` in your file, the settings from `label` in this “themes” code will be overwritten. But as long as you follow this readme, these settings are reversible. Just delete the code you added and start new, if you’re not satisfied or get errors._

*   Save the file and close the edit mode.
*   You can now use your newly created template for your chip/card by calling the new template in your “view” code like all other chips/cards.

    <div class="code-toolbar">

        - type: custom:button-card
          template: paddy_chip_temperature

    <div class="toolbar">

    <div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

    </div>

    </div>

> **Note:** _What we did here, is setting up a new template (`paddy_chip_temperature`) that inherits all of its settings from the original template (`chip_temperature`). That means, without adding anything more to the code than name and template, you will get exactly the same chip/card, but you will have to call it with your name.  
> That leaves you with a scaffold, where you just need to add changes to the original styling._