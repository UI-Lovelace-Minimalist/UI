---
title: Usage
has_children: true
nav_order: 2
---
# [](#usage)Usage

Using this “theme” is not difficult, but you need to know a few basics, so your design can make its best impression. It is depending on two things, namely using a theme and make extensive use of the `template` function from the `custom_component` [button-card](https://github.com/custom-cards/button-card) made by RomRaider. The design system consists of graphical buttons, that are changed depending on their use.

## [](#table-of-content)Table of content

*   [Changing templates](#changing-templates)
*   [List of templates](#list-of-templates)
*   [Tap actions](#tap-actions)
*   [Color scheme](#color-scheme)
*   [Icons](#icons)

### [](#chips)Chips

At the top of each page we find the chips, which allow to quickly visualize important information.

![Chips](/assets/images/chips.png)

### [](#title)Title

Titles are used to separate the different sections. Kind of a divider…

![Title](/assets/images/title.png)

### [](#vertical-buttons)Vertical buttons

For using the cards as a button.

![Title](/assets/images/scene.gif)

### [](#cards)Cards

`Cards` are the main part of this design and are widely used in very different designs and functions. With these `cards` you can set up nearly every entity in HA, showing from “state-only” over a “full blown” information graphic with various values to “controlling” your covers and climate entities.

![Cards](/assets/images/cards.png)

#### [](#anatomy-of-cards)Anatomy of cards

![Anatomy](/assets/images/anatomy.png)

1.  **Dot**: Visible when the device is unavailable. Also used on the entity **person**
2.  **Icon**: Icon that represents the device
3.  **Primary line**: Main information
4.  **Secondary line**: Secondary information
5.  **Optional part**: Possibility to display buttons to launch actions related to the device. Or display a graph to view the history of a sensor or you let your fantasy take the ride…

In the list above #5 enhances the normal `cards` with a “second line”, that is used to display other information like a graph or the controls for your covers. For this readme the `cards` are divided into three groups:

*   1-line cards: These are cards for `sensor` or `binary_sensors` like _light_ or _power outlets_.
*   2-line cards: These are cards with a second line for informations or controls, eg. your `cover controls`.
*   Custom cards: These are special cards, that you can install, only if needed. These cards are mostly developed and contributed to the repository. Eg. an `aircondition-card` that shows the state of your aircondition and buttons to control it.

## [](#changing-templates)Changing templates

There are cases, actually a lot of them, where you want to change or extend existing template code. Doing this inside the code from the repository isn’t a good idea, as the next update would overwrite your changes.  
But don’t worry, we have taken care of that and you can very easily extend our code with your own.

Take a look at this page: [Changing a template](/usage/changing_template)

## [](#list-of-templates-to-use-in-view-files)<a name="list-of-templates"></a>List of templates to use in “view”-files

The following list is just an overview, you can find the extended list with example code, picture and description [here](/usage/template_list).

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Battery Card

</td>

</tr>

<tr>

<td>[card_battery](/usage/template_list#card_battery)</td>

<td>The `battery-card` is a slightly enhanced `generic-card`, just to ease the use. You could always configure it from the `generic-card` yourself.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Binary Sensor Card

</td>

</tr>

<tr>

<td>[card_binary_sensor](/usage/template_list#card_binary_sensor)</td>

<td>The `binary-sensor-card` is to show the state (on/off, open/close, etc.) of a binary sensor, eg. your garage door or a window contact sensor.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Binary Sensor Card (alert)

</td>

</tr>

<tr>

<td>[card_binary_sensor_alert](/usage/template_list#card_binary_sensor_alert)</td>

<td>The `binary-sensor-card` is to show the state (on/off, open/close, etc.) of a binary sensor, eg. your garage door or a window contact sensor. This card shows an alert if the state is on/open or unavailable.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Cover Card with buttons

</td>

</tr>

<tr>

<td>[card_cover_with_buttons](/usage/template_list#card_cover_with_buttons)</td>

<td>With the `cover-card` you have the state of your cover and on the second line UP / PAUSE / DOWN to control it.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Generic Card

</td>

</tr>

<tr>

<td>[card_generic](/usage/template_list#card_generic)</td>

<td>This is the `generic-card` to display values from a sensor, eg. to show humidity, your next waste collection date or whatever sensor value is provided.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Generic Card Swapped

</td>

</tr>

<tr>

<td>[card_generic_swap](/usage/template_list#card_generic_swap)</td>

<td>This is a `generic-card` with swapped label and name.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Graph Card

</td>

</tr>

<tr>

<td>[card_graph](/usage/template_list#card_graph)</td>

<td>The `card_graph` shows an entity with the actual state and a *min-graph-card* integrated. This can be used for a thermostat to show the actual temperature and the history."</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Input Boolean Card

</td>

</tr>

<tr>

<td>[card_input_boolean](/usage/template_list#card_input_boolean)</td>

<td>The `input-boolean-card` is to switch an `input_boolean` on or off.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Light Card

</td>

</tr>

<tr>

<td>[card_light](/usage/template_list#card_light)</td>

<td>This is the `light-card`, used to toggle a light or a light group. Shows state of the light and, if available, brightness in %. In the picture on the right in row Nr1</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Light Slider Card

</td>

</tr>

<tr>

<td>[card_light_slider](/usage/template_list#card_light_slider)</td>

<td>The `light-slider-card` controls a light with the added possibilty to control the brightness of your light with a slider. See row Nr2 in the picture on the right.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Light Slider Card (collapse)

</td>

</tr>

<tr>

<td>[card_light_slider_collapse](/usage/template_list#card_light_slider_collapse)</td>

<td>The `light-slider-card (collapse)` is an enhanced version of the `light-slider-card`, that only shows the slider, if the light is on. In the picture on the right, the 'off'-state is like row Nr1, the 'on'-state like row Nr2</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Light Slider Card (horizontal)

</td>

</tr>

<tr>

<td>[card_light_slider_horizontal](/usage/template_list#card_light_slider_horizontal)</td>

<td>The `light-slider-card (horizontal)` is an enhanced version of the `light-slider-card`, that shows the slider on the right of the button, making it a 1-line-card. See the picture on the right row Nr3</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Media Player Card

</td>

</tr>

<tr>

<td>[card_media_player](/usage/template_list#card_media_player)</td>

<td>The `card_media_player` shows you the *app*, the *title* and the *album name* playing, if the data is available through HA. The *app* is shown via a different icon.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Media Player Card (with control)

</td>

</tr>

<tr>

<td>[card_media_player_with_control](/usage/template_list#card_media_player_with_control)</td>

<td>This is the second `media-player-card`, in contrast to the first one above, it shows the cover art from your media player.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Media Player Card (with controls)

</td>

</tr>

<tr>

<td>[card_media_player_with_controls](/usage/template_list#card_media_player_with_controls)</td>

<td>With the `card_media_player_with_controls` you have the state of your media_player and on the second line PREVIOUS / PLAY-PAUSE / NEXT to control it</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Navigate Card

</td>

</tr>

<tr>

<td>[card_navigate](/usage/template_list#card_navigate)</td>

<td>The `card_navigate` is for navigating inside your HA dashboard(s).</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Person Card

</td>

</tr>

<tr>

<td>[card_person](/usage/template_list#card_person)</td>

<td>The `card_person` shows if a person is `home` or `not_home`. If you have setup other [zones](https://www.home-assistant.io/integrations/zone/), it will show these as well.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Power Outlet Card

</td>

</tr>

<tr>

<td>[card_power_outlet](/usage/template_list#card_power_outlet)</td>

<td>This is the `power-outlet-card`. It shows you the state of a power outlet, and if configured, the actual power consumption of the power outlet.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

#### Script Card

</td>

</tr>

<tr>

<td>[card_script](/usage/template_list#card_script)</td>

<td>This card starts/runs a script. You can configure icon and text.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #2C84FA;">

#### Title

</td>

</tr>

<tr>

<td>[card_title](/usage/template_list#card_title)</td>

<td>Titles (and optionally subtitles) are used to seperate different areas in your design. You can use only a title, only a subtitle or both at once.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #FFEB82;">

#### Chip Back Button

</td>

</tr>

<tr>

<td>[chip_back](/usage/template_list#chip_back)</td>

<td>This is a `back-button`, primarly used if you switch between views and want a convenient way back.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #FFEB82;">

#### Chip Icon With Double State

</td>

</tr>

<tr>

<td>[chip_icon_double_state](/usage/template_list#chip_icon_double_state)</td>

<td></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #FFEB82;">

#### Chip Icon Only

</td>

</tr>

<tr>

<td>[chip_icon_only](/usage/template_list#chip_icon_only)</td>

<td>This `chip` displays just an icon.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #FFEB82;">

#### Chip Icon With State

</td>

</tr>

<tr>

<td>[chip_icon_state](/usage/template_list#chip_icon_state)</td>

<td>This `chip` displays an icon and a label, where the label can be any state of a sensor you configure.</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #FFEB82;">

#### Chip Power Consumption

</td>

</tr>

<tr>

<td>[chip_power_consumption](/usage/template_list#chip_power_consumption)</td>

<td>This `chip` shows you the electric consumption from a sensor. Configurable to show power (kWh) or price (currency).</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #FFEB82;">

#### Chip Presence Detection (counter)

</td>

</tr>

<tr>

<td>[chip_presence_detection](/usage/template_list#chip_presence_detection)</td>

<td>This `chip` shows you the actual presence in your home. Shows residents and guests (guests only if one or more).</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #FFEB82;">

#### Chip Temperature

</td>

</tr>

<tr>

<td>[chip_temperature](/usage/template_list#chip_temperature)</td>

<td>This `chip` is to display a weather icon together with the outside and inside temperature.</td>

</tr>

</tbody>

</table>

</div>

## [](#tap-actions)Tap actions

One of the great features of button-card is, that you can set an `action`. These `actions` can be set on every card you configure, despite the cards that already have buttons. You have three possibilities to choose from:

*   `tap_action`
*   `hold_action`
*   `double_tap_action`

Each of these “events” can be configured to use a specific `action`. These `actions` are:

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>more-info</td>

<td>

<div class="code-toolbar">

    xxx_action:
      action: more-info # to show the more-info popup  
      entity: your_entity # show more-info popup for this entity

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

<tr>

<td>toggle</td>

<td>

<div class="code-toolbar">

    xxx_action:
      action: toggle # toggles the entity of the card

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

<tr>

<td>call-service</td>

<td>

<div class="code-toolbar">

    xxx_action:
      action: call-service # to call a service from HA  
      service: service.service_arg  # the service
      service_data: # additional data, eg. an entity_id

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

<tr>

<td>none</td>

<td>

<div class="code-toolbar">

    xxx_action:
      action: none # explicitly set to do nothing

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

<tr>

<td>navigate (HA internal)</td>

<td>

<div class="code-toolbar">

    xxx_action:
      action: navigate  
      navigation_path: /ui-lovelace/home # the path to navigate to

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

<tr>

<td>url (only external)</td>

<td>

<div class="code-toolbar">

    xxx_action:
      action: url  
      url_path: https://homeassistant.io

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

## [](#color-scheme)Color scheme

<div class="table-wrapper">

<table>

<thead>

<tr>

<th>Type</th>

<th>Color</th>

<th>Hex</th>

<th>RGB</th>

</tr>

</thead>

<tbody>

<tr>

<td>💡 Light  
⚡ Electricity</td>

<td><span style="height: 25px; width: 25px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span></td>

<td>#FF9101</td>

<td>rgb(255,145,1)</td>

</tr>

<tr>

<td>🔥 Heating</td>

<td><span style="height: 25px; width: 25px; background-color: #F54436; border-radius: 50%; display: inline-block;"></span></td>

<td>#F54436</td>

<td>rgb(245,6,54)</td>

</tr>

<tr>

<td>☑️ On/off devices  
🏠 Home</td>

<td><span style="height: 25px; width: 25px; background-color: #3D5AFE; border-radius: 50%; display: inline-block;"></span></td>

<td>#3D5AFE</td>

<td>rgb(61,90,254)</td>

</tr>

<tr>

<td>🌲 Exterior</td>

<td><span style="height: 25px; width: 25px; background-color: #01C852; border-radius: 50%; display: inline-block;"></span></td>

<td>#01C852</td>

<td>rgb(1,200,82)</td>

</tr>

</tbody>

</table>

</div>

## [](#icons)Icons

For the `chips`, this “theme” uses the standard _unicode emojis_. The main reason is, they are multi-color whereas the `mdi-icons` that HomeAssistant uses are one color only.

> These emojis are _only used_ on the `chips`, all _other cards or buttons_ use the standard `mdi-icons`!

Overview over standard _unicode emojis_:

*   [https://emojipedia.org](https://emojipedia.org) or
*   [https://github.com/ikatyang/emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet)

Overview Home Assistant _mdi-icons_:

*   [https://materialdesignicons.com/](https://materialdesignicons.com/)

Using emojis is easy:

*   Go to one of the Github pages above
*   Select the emoji you want and copy it (“CTRL + C” or right-click “copy” / at _emojipedia.org_ you already find a “copy” button)
*   Go to your view and paste the icon

> There are a lot of emojis on these pages, so we suggest you use the built-in search at _emojipedia_ or the browser integrated search by pressing “CTRL + F” and type in your query like “heart”.

* * *

## Table of contents

*   [Template list (use)](/usage/template_list)
*   [Custom-cards list](/usage/custom_card_list)
*   [First page](/usage/first_page)
*   [Changing template](/usage/changing_template)
*   [Examples](/usage/examples)