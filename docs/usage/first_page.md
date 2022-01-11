---
title: First page
parent: Usage
nav_order: 4
---
# [](#the-first-page)The first page

So now that you got the “theme” installed, let’s start by setting up your first page. These instructions will guide you through the process of setting this page up and configure it. It should also give you some starting points, to develop your own pages.

> **Note:** _The way you installed this “theme”, `yaml`- or `UI`-mode, determines which way you have to work with it. You can’t change it while working on it, but you can always have another dashboard configured in the other mode!_

## [](#which-installation-method-did-you-use)Which installation method did you use?

*   for `yaml`-mode [click here](#yaml-mode)
*   for `UI`-mode [click here](#ui-mode)

## [](#yaml-mode)Yaml-mode

1.  **What you need to have before you start**  
    As for the install and all things YAML, you should have a good editor to do the following steps. If you used [our guide](/installation/yaml-mode) for installation, we already named our favorites.

    > **Note:** _As you know, indentation matters in yaml. In our code examples underneath we take care of the indentation. If you do changes like setting another `horizontal-stack`, please take care of that yourself. Otherwise some weird things can happen to this layout._

2.  **Open your view file**  
    If you followed our guide for installing this “theme”, you should have a file called `lovelace-minimalist.yaml` (or whatever name you choose) in your config folder. This is your “view” file. Open it in your editor and search for the string “views:”. You should find something similar to this:

    <div class="code-toolbar">

        button_card_templates: !include_dir_merge_named minimalist-templates/
        views:
          - title: Minimalist
            cards:

    <div class="toolbar">

    <div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

    </div>

    </div>

    This is our starting point.

3.  **Start editing**  
    Add the following code underneath the tag “cards:”:

    <div class="code-toolbar">

              - type: horizontal-stack
                cards:
                  - type: custom:button-card
                    template: edge
                  - type: custom:button-card
                    template: chip_temperature
                    variables:
                      ulm_chip_temperature_inside: sensor.my_temperature_sensor_inside
                      ulm_chip_temperature_outside: sensor.my_temperature_sensor_outside
                      ulm_chip_temperature_weather: weather.my_weather_provider 
                  - type: custom:button-card
                    template: edge
              - type: horizontal-stack
                cards:
                  - type: custom:button-card
                    template: edge
                  - type: custom:button-card
                    template: title
                    name: Welcome to UI-Lovelace-Minimalist
                  - type: custom:button-card
                    template: edge

    <div class="toolbar">

    <div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

    </div>

    </div>

    Change the three variables with entities from your setup, eg. “weather.accu_weather” as your weather provider.

4.  **What is that code we inserted**  
    Let’s take a deeper look at what we have done with the last insert, as this is the blueprint for the whole design.
    *   First we used a `horizontal-stack`-card to define a new row in our layout. These rows are one of the most important parts!
    *   The next is a template `edge`. We use this to get just a little bit of margin around the cards. This is optional, but I’d count it as “part of the row”, so I always set it.
    *   In the end, my scaffold for a new row is always this:

        <div class="code-toolbar">

                  - type: horizontal-stack
                    cards:
                      - type: custom:button-card
                        template: edge
                    ### Here is where the magic takes place ###
                      - type: custom:button-card
                        template: edge

        <div class="toolbar">

        <div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

        </div>

        </div>

        » a `horizontal-stack`-card  
        » a template “edge”  
        » here’s where my buttons go (aka the magic)  
        » a template “edge”

5.  **Your template**  
    Now we finally move to the fun part, we choose some templates to use in our layout.
    1.  Go to our [list of templates](/usage/template_list) and choose which chip/card you want.
    2.  Open the ‘“View” code’ pulldown and copy the code for `yaml`-mode.

        > **Note:** _the code in this column is correctly indented in itself, but we don’t know how your setup looks like, so you have to take care of the indentation this code needs.  
        > Just take the surrounding cards as a guide, eg. the template “edge” is correctly positioned (indented)._

    3.  Now paste the copied template code right where “the magic” is happening, this should leave you with this:

        <div class="code-toolbar">

                    - type: horizontal-stack
                      cards:
                        - type: custom:button-card
                          template: edge               
                        - type: custom:button-card
                          template: card_light_slider
                          entity: light.my_livingroom_light
                          variables:
                            ulm_card_light_slider_name: Livingroom Light
                        - type: custom:button-card
                          template: edge

        <div class="toolbar">

        <div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

        </div>

        </div>

        <div class="table-wrapper">

        <table>

        <thead>

        <tr>

        <th> </th>

        <th>name</th>

        <th>explanation</th>

        </tr>

        </thead>

        <tbody>

        <tr>

        <td>_type_</td>

        <td>custom:button-card</td>

        <td> </td>

        </tr>

        <tr>

        <td>_template_</td>

        <td>card_light_slider</td>

        <td>template name</td>

        </tr>

        <tr>

        <td>_entity_</td>

        <td>light.my_livingroom_light</td>

        <td>entity ID</td>

        </tr>

        <tr>

        <td>_variables_</td>

        <td> </td>

        <td>if variables are needed, set them here</td>

        </tr>

        <tr>

        <td>_ulm_card_light_slider_name_</td>

        <td> </td>

        <td>variable name</td>

        </tr>

        </tbody>

        </table>

        </div>

    4.  In the template list you copied the code from, is explained which entries and variables need to be set. In this example that would be `entity` and the variable `ulm_card_light_slider_name`. Change these to the specific values of your installation, eg. set the correct entity_id for _your_ light.

        > **Note:** _Depending on the card you use, there are different things to set. Sometimes the `entity` is needed, sometimes the entity needs to be set as a variable, eg. `ulm_card_xy_entity`. In the template list is explained what you have to set._

    5.  Just for this example, add two more cards to your `horizontal-stack`-card by pasting in the same code (you still have that in your clipboard).
    6.  Save the card and take a first look at it.
    7.  We are done now with configuring the first card, but please take a look at the next paragraph, there are some things to take note of, while using this example.

What we are doing here, is configuring a row (horizontal-stack) where you put three button-cards with our design next to each other. If you want more buttons, use a new `horizontal-stack`-card and set them. Our cards should fit in a lot of widths, so experiment with the number of buttons you want to show in one line. Eg. the `light_slider` looks best in a one column layout, if you put two next to each other, where the `generic` card looks best with three next to each other in the same layout.

While configuring your views, we suggest you take note of these few things:

*   Every row in your layout should be a `horizontal-stack`-card, even if you only put one `button-card` in it!
*   For the row(s) where you set chips, the `horizontal-stack` is mandatory!
*   Use the template “[card_title](/usage/template_list#card_title)” to get kind of a divider between different blocks of buttons.
*   We suggest to use our template `edge` to surround your buttons inside the horizontal-stack. That means, the first and the last card in your horizontal-stack should be:

    <div class="code-toolbar">

        - type: 'custom:button-card'
          template: edge

    <div class="toolbar">

    <div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

    </div>

    </div>

    This template does not do much, but sometimes it is necessary to get just that little more padding for a card, to shift the position just a little bit. I use this template in every horizontal-stack, you never know, when you need it.

    Now that you have your first design configured, you can built up on that. Take a look at our [example page](/usage/examples), maybe you find something interesting that you can modify to your needs.

### [](#ui-mode)UI-mode

1.  **Go into editing mode**  
    If you followed our guide for installing this “theme”, you should have a dashboard called “Minimalist” (or whatever you choose to name it). Look for it in the sidebar and click on it to open it. Open the three-dot-menu in the upper right corner and choose “Edit dashboard”. You’re now in editing mode.
2.  **The first card**
    1.  In the downwards right corner you find the button “+ ADD CARD”. Click on it to open the “card configuration screen”.
    2.  Search for “Horizontal stack” and click on it.
    3.  On the new screen search for “Custom: Button-Card” and click on it.
    4.  You should now see the “card configuration screen” with the following code:

        <div class="code-toolbar">

            type: custom:button-card

        <div class="toolbar">

        <div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

        </div>

        </div>

3.  **Choose a template**  
    This is the part, where you decide what you want to show.
    1.  Go to our [list of templates](/usage/template_list) and choose which chip/card you want.
    2.  Open the ‘“View” code’ pulldown and copy the code for `UI`-mode.
4.  **Back to the card configuration**
    1.  Go back to the “card configuration screen” and select the code (`type: custom:button-card`)
    2.  Delete the selection and paste in the code you copied from the list of templates
    3.  You should now have something like this in the “card configuration screen”:

        <div class="code-toolbar">

            type: custom:button-card
            template: card_light_slider
            entity: light.my_livingroom_light
            variables:
              ulm_card_light_slider_name: Livingroom Light

        <div class="toolbar">

        <div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

        </div>

        </div>

        <div class="table-wrapper">

        <table>

        <thead>

        <tr>

        <th> </th>

        <th>name</th>

        <th>explanation</th>

        </tr>

        </thead>

        <tbody>

        <tr>

        <td>_type_</td>

        <td>custom:button-card</td>

        <td> </td>

        </tr>

        <tr>

        <td>_template_</td>

        <td>card_light_slider</td>

        <td>template name</td>

        </tr>

        <tr>

        <td>_entity_</td>

        <td>light.my_livingroom_light</td>

        <td>entity ID</td>

        </tr>

        <tr>

        <td>_variables_</td>

        <td> </td>

        <td>if variables are needed, set them here</td>

        </tr>

        <tr>

        <td>_ulm_card_light_slider_name_</td>

        <td> </td>

        <td>variable name</td>

        </tr>

        </tbody>

        </table>

        </div>

    4.  In the template list you copied the code from, is explained which entries and variables need to be set. In this example that would be `entity` and the variable `ulm_card_light_slider_name`. Change these to the specific values of your installation, eg. set the correct entity_id for _your_ light.

        > **Note:** _Depending on the card you use, there are different things to set. Sometimes the `entity` is needed, sometimes the entity needs to be set as a variable, eg. `ulm_card_xy_entity`. In the template list is explained what you have to set._

    5.  Just for this example, add two more cards to your `horizontal-stack`-card by pasting in the same code (you still have that in your clipboard).
    6.  Save the card and take a first look at it.
    7.  We are done now with configuring the first card, but please take a look at the next paragraph, there are some things to take note of, while using this example.

What we are doing here, is configuring a row (horizontal-stack) where you put three button-cards with our design next to each other. If you want more buttons, use a new `horizontal-stack`-card and set them. Our cards should fit in a lot of widths, so experiment with the number of buttons you want to show in one line. Eg. the `light_slider` looks best in a one column layout, if you put two next to each other, where the `generic` card looks best with three next to each other in the same layout.

While configuring your views, we suggest you take note of these few things:

*   Every line in your layout should be a `horizontal-stack`-card, even if you only put one `button-card` in it!
*   For the line(s) where you set chips, the `horizontal-stack` is mandatory!
*   Use the template “[card_title](/usage/template_list#card_title)” to get kind of a divider between different blocks of buttons.
*   We suggest to use our template `edge` to surround your buttons inside the horizontal-stack. That means, the first and the last card in your horizontal-stack should be:

    <div class="code-toolbar">

        type: 'custom:button-card'
        template: edge

    <div class="toolbar">

    <div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

    </div>

    </div>

    This template does not do much, but sometimes it is necessary to get just that little more padding for a card, to shift the position just a little bit. I use this template in every horizontal-stack, you never know, when you need it.

    Now that you have your first design configured, you can built up on that. Take a look at our [example page](/usage/examples), maybe you find something interesting that you can modify to your needs.