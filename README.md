# UI-Lovelace-Minimalist  
It's kind of hard to explain what this is, so let's call it a "theme" (in quotation marks). But one thing is for sure, it is very nice! Taking the exceptional work of tben as a basis, this repository is aimed to ease installation and maintainance of his wonderful work. You can use this interpretation of a SmartHomeUI more or less like a theme in HomeAssistant. 

<img src="./screenshots/example_home.png" width="200"> <img src="./screenshots/example_temperature.png" width="200"> <img src="./screenshots/example_consumption.png" width="200"> <img src="./screenshots/example_localisation.png" width="200"> 

> ### Contributions
> This is a living project and all input is very welcome! If you configured and designed a card, that you would like to share, please feel free to do so! We are happy to include your contribution so others can use it as well!  

## Wiki for documentation  
We have setup a Wiki for our documentation. It is more comfortable for you to read than this file and gives our documentation the right framework to grow.  
Take a look here: [https://github.com/UI-Lovelace-Minimalist/UI/wiki](https://github.com/UI-Lovelace-Minimalist/UI/wiki) 

<details>
<summary>Show table of content from the WIKI</summary>
<br>

<table style="border-collapse: collapse;">
<tr>
<th style="width: 33%;">Installation and update</th>
<th style="width: 33%;">Usage</th>
<th style="width: 33%;">Development</th>
</tr>
<tr>
  <td style="vertical-align: top;">
    <p>We have provided different guides to help you install and update this "theme"</p>
  </td>
  <td style="vertical-align: top;">
    <p>These usage guides provide you with a deeper knowledge about this "theme"</p>
  </td>
  <td style="vertical-align: top;">
    <p>This is our developer corner</p>
  </td>
<tr>
<td style="vertical-align: top;">
  <p>
    <a href="./wiki/installation.md">Installation</a><br>
    <a href="./wiki/installation-yaml.md">&raquo;&nbsp;in yaml-mode</a><br>
    &nbsp;&nbsp;<a href="./wiki/installation-yaml.md#installation-of-non-english-languages">&raquo;&nbsp;of non english language</a><br>
    <a href="./wiki/installation-ui.md">&raquo;&nbsp;in UI-mode</a><br>
    <a href="./wiki/installation-custom_cards.md">&raquo;&nbsp;of custom-cards</a>
  </p>
  <p>
    <a href="./wiki/installation-update.md">Update</a><br>
    <a href="./wiki/installation-update.md#yaml-mode">&raquo;&nbsp;in yaml-mode</a><br>
    <a href="./wiki/installation-update.md#ui-mode">&raquo;&nbsp;in UI-mode</a><br>
    <a href="./wiki/installation-update.md#previous-version">&raquo;&nbsp;from a previous versions</a>
  </p>
</td>
<td style="vertical-align: top;">
  <p>
    <a href="./wiki/usage.md">Usage</a><br>
    <a href="./wiki/usage-first_page.md">&raquo;&nbsp;your first page</a><br>
    <a href="./wiki/usage-template_list.md">&raquo;&nbsp;list of templates (usage)</a><br>
    <a href="./wiki/usage-changing_template.md">&raquo;&nbsp;changing a template</a><br>
    <a href="./wiki/usage-examples.md">&raquo;&nbsp;examples</a>
  </p>
</td>
<td style="vertical-align: top;">
  <p>
    <a href="./wiki/development.md">Development</a><br>
    <a href="./wiki/development-custom_card.md">&raquo;&nbsp;a custom-card</a><br>
    <a href="./wiki/development-list_templates.md">&raquo;&nbsp;list of templates</a><br>
    <a href="./wiki/development-legacy_templates.md">&raquo;&nbsp;legacy templates</a>
  </p>
</td>
</tr>
</table>
</details> 

## Table of Content  

<details>
<summary>Show table of content</summary>

* [Credits](#credits)  
* [This "theme" introduced](#this-theme-introduced)  
  * [Chips](#chips)  
  * [Title](#title)  
  * [Vertical buttons](#vertical-buttons)  
  * [Cards](#cards)   
  * [Language specific buttons](#language-specific-buttons)  
  * [Custom cards](#custom-cards)  
  * [Extend the "theme"](#extend-with-your-own-code)
* [Installation and update](#installation-and-update)  
* [List of templates](#list-of-templates)  
* [List of custom-cards](#custom-cards-list) 
* [Legacy templates](#legacy-templates)  
* External link:  
  * [CodeGenerators](https://ui-lovelace-minimalist.github.io/CodeGenerator/)  
</details>

## Credits  
* This design was made by [tben](https://community.home-assistant.io/u/tben/summary)
* A lot of inspiration is taken from [7ahang’s work](https://www.behance.net/gallery/88433905/Redesign-Smart-Home) found on Behance.
* Contributions from others in the HomeAssistant forum thread, you can find it [here](https://community.home-assistant.io/t/lovelace-ui-minimalist/322687).
* The technical part is realised mostly by taking advantage of the great work RomRaider did with his [button-card](https://github.com/custom-cards/button-card).
* Code refactor, cleanup and maintainance schumijo and paddy0174.
* Wiki by paddy0174.
* Special thanks to clemalex and schumijo for contributing their cards to the main repository.  

## This "theme" introduced  
This "theme" provides you with four different elements, that combined give you a nice and functional layout. The basis for all these elements is `button-card` that allows for a great and individual styling. These elements, "cards", "chips", "title" and "vertical buttons", are fully customizable and can be enhanced to fit your needs.  
All this is only possible, because we are able to use the templating function from `button-card`.

### Chips  
At the top of each page you can find the `chips`, which allow to quickly visualize important information.  

![Chips](./screenshots/chips.png)  

### Title  
`Titles` are used to separate the different sections. Kind of a divider.

![Title](./screenshots/title.png)    

### Vertical buttons
`Vertical buttons` show the information vertically aligned. These find their use eg. as navigation or scene buttons.  

![Title](./screenshots/scene.gif)    

### Cards   
`Cards` are the main part of this design and are widely used in very different designs and functions. With these `cards` you can set up nearly every entity in HA, showing from "state-only" over a "full blown" information graphic with various values to "controlling" your covers and climate entities.

![Cards](./screenshots/cards.png)

#### Anatomy of cards  
![Anatomy](./screenshots/anatomy.png)  
1. **Dot**: Visible when the device is unavailable. Also used on the entity **person**
2. **Icon**: Icon that represents the device
3. **Primary line**: Main information
4. **Secondary line**: Secondary information
5. **Optional part**: Possibility to display buttons to launch actions related to the device. Or display a graph to view the history of a sensor or you let your fantasy take the ride...

In the list above #5 enhances the normal `cards` with a "second line", that is used to display other information like a graph or the controls for your covers. For this readme the `cards` are divided into three groups:
* 1-line cards: These are cards for `sensor` or `binary_sensors` like *light* or *power outlets*.
* 2-line cards: These are cards with a second line for informations or controls, eg. your `cover controls`.
* Custom cards: These are special cards, that you can install, only if needed. These cards are mostly developed and contributed to the repository. Eg. an `aircondition-card` that shows the state of your aircondition and buttons to control it.  

### Language specific buttons  
Sometimes the language specific strings from Home Assistant aren't available for your button, so we added the possibility to use language specific strings over the template system.   

### Custom cards  
This "theme" is designed with an open structure in mind, that's why it is possible to add `custom-cards` without much hassle. A few `custom-cards` are readily available through the folder `custom-cards` in the repository.  
`Custom-cards` are `cards`, that don't fit everywhere and therefor are not part of the standard installation, but can be easily added, if needed. Take an air-condition card. Not everybody has an air-condition. So why include this `card` as a default? And that's why we did a structure and system for `custom-cards`. Easily added, but only when needed!  
And the best thing is: everybody can develop a cool `card` and can (not have to) share it afterwards with the community (hint, hint, the support thread is [here](https://community.home-assistant.io/t/lovelace-ui-minimalist/322687)).  

See a complete list of already included `custom-cards` a [little downwards](#custom-cards). 

Find informations on how to develop a `custom-card` [here](./wiki/development-custom_card.md).  

### Extend with your own code  
As we tried to be as modular as possible (and useful), it is easy to enhance or extend the code, we provide with your own definitions. That means for you, you can inherit every template to enhance it only with functions, you really want. No need to copy full blocks of code - just inherit and enhance only where changes are needed.  

We provided some instructions in our wiki, see [this page](./wiki/usage-changing_template.md).  

### Code Generator(s)  
We offer two (soon three) code generators, that support you in installing, getting example code and soon in configuring a button. Take a look at [this page](https://ui-lovelace-minimalist.github.io/CodeGenerator/).

## Installation and update  
At the moment there are two methods of installing this "theme", one for `yaml`-mode and one for `UI`-mode. We are working on getting this "theme" installable via HACS, but for now, we can only provide these two methods, sorry. 

We can offer you in-depth instructions for installation, as well as for future updates or from a previous version. Check our WIKI for more info:  
* [Instructions for installation in `yaml`-mode](./wiki/installation-yaml.md)
* [Instructions for installation in `UI`-mode](./wiki/installation-ui.md)
* [Update in `yaml`mode](./wiki/installation-update.md#yaml-mode)
* [Update in `UI`-mode](./wiki/installation-update.md#ui-mode)
* [Update from previous version](./wiki/installation-update.md#previous-version)

TL;DR  
Download and copy content of `config` folder to HA `config` folder. Set link to include `button_card_templates`, install `lovelace-cards`, use example code to get started.

## List of templates  
The following list is just an overview, you can find the extended list with example code, picture and description [here](./wiki/usage-template_list.md).  

<table>
<tr>
<td><h4>Chips</h4></td>
<td></td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#chip_temperature">chip_temperature</a></td>
<td>This `chip` is to display a weather icon together with the outside and inside temperature.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#chip_icon_only">chip_icon_only</a></td>
<td>This `chip` displays just an icon.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#chip_icon_state">chip_icon_state</a></td>
<td>This `chip` displays an icon and a label, where the label can be any state of a sensor you configure.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#chip_icon_double_state">chip_icon_double_state</a></td>
<td>This `chip` displays an icon and a two labels, where each label can be any state of a sensor you configure.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#chip_back">chip_back</a></td>
<td>This is a `back-button`, primarly used if you switch between views and want a convenient way back. Set the `tap-action` to navigate back to the default view, eg. home.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#chip_presence_detection">chip_presence_detection</a></td>
<td>This `chip` shows you the actual presence in your home. Shows residents and guests (guests only if one or more).</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#chip_power_consumption">chip_power_consumption</a></td>
<td>This `chip` shows you the electric consumption from a sensor. Configurable to show power (kWh) or price (currency).</td>
</tr>
<tr>
<td><h4>Title</h4></td>
<td></td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#card_title">card_title</a></td>
<td>Titles (and optionally subtitles) are used to seperate different areas in your design.</td>
</tr>
<tr>
<td><h4>Vertical buttons</h4></td>
<td></td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#vertical_buttons">vertical_buttons</a></td>
<td></td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#vertical_buttons_blue">vertical_buttons_blue</a></td>
<td></td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#vertical_buttons_green">vertical_buttons_green</a></td>
<td></td>
</tr>
<tr>
<td><h4>Cards</h4></td>
<td></td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#card_generic">card_generic</a></td>
<td>This is the `generic-card` to display values from a sensor, eg. to show humidity, your next waste collection date or whatever sensor value is provided.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#card_generic_swap">card_generic_swap</a></td>
<td>This is the same as the `generic-card`, but with *name* and *state* swapped.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#card_light">card_light</a></td>
<td>This is the `light-card`, used to toggle a light or a light group. Shows state of the light and, if available, brightness in %.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#card_light_slider">card_light_slider</a></td>
<td>The `light-slider-card` controls a light with the added possibilty to control the brightness of your light with a slider.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#card_power_outlet">card_power_outlet</a></td>
<td>This is the `power-outlet-card`. It shows you the state of a power outlet, and if configured, the actual power consumption of the power outlet.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#card_binary_sensor">card_binary_sensor</a></td>
<td>The `binary-sensor-card` is to show the state (on/off, open/close, etc.) of a binary sensor, eg. your garage door or a window contact sensor.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#card_input_boolean">card_input_boolean</a></td>
<td>The `input-boolean-card` is to switch an `input_boolean` on or off.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#card_navigate">card_navigate</a></td>
<td>The `card_navigate` is for navigating inside your HA dashboard(s).</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#card_media_player">card_media_player</a></td>
<td>The `card_media_player` shows you the *app*, the *title* and the *album name* playing, if the data is available through HA. The *app* is shown via a different icon.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#card_media_player_with_control">card_media_player_with_control</a></td>
<td>This is the second `media-player-card`, in contrast to the first one above, it shows the cover art from your media player.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#card_battery">card_battery</a></td>
<td>The `battery-card` is a slightly enhanced `generic-card`, just to ease the use. You could always configure it from the `generic-card` yourself.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#card_person">card_person</a></td>
<td>The `card_person` shows if a person is `home` or `not_home`. If you have setup other [zones](https://www.home-assistant.io/integrations/zone/), it will show these as well.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#card_cover_with_buttons">card_cover_with_buttons *</a></td>
<td>With the `cover-card` you have the state of your cover and on the second line UP / PAUSE / DOWN to control it.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#card_graph">card_graph *</a></td>
<td>The `card_graph` shows an entity with the actual state and a *min-graph-card* integrated. This can be used for a thermostat to show the actual temperature and the history.</td>
</tr>
<tr>
<td><a href="./wiki/usage-template_list.md#card_media_player_with_controls">card_media_player_with_controls *</a></td>
<td>With the `card_media_player_with_controls` you have the state of your media_player and on the second line PREVIOUS / PLAY-PAUSE / NEXT to control it.</td>
</tr>
<tr>
<td colspan="2">*= 2-line-card</td>
</tr>
</table>

## <a name="custom-cards-list"></a>Custom cards included in the download  (in alphabetical order) 

<table>
<tr>
<th>Name</th>
<th>Page</th>
<th>Description</th>
<th>Author</th>
</tr>
<tr>
<td>AirCondition card</td>
<td><a href="https://github.com/UI-Lovelace-Minimalist/UI/tree/main/custom_cards/custom_card_tpx01_aircondition/readme.md">more information</a></td>
<td>2-line card to control your air condition.</td>
<td>tpx01</td>
</tr>
<tr>
<td>DWD pollen card</td>
<td><a href="https://github.com/UI-Lovelace-Minimalist/UI/tree/main/custom_cards/custom_card_paddy_dwd_pollen/readme.md">more information</a></td>
<td>Card to show the DWD pollen warning</td>
<td>paddy0174</td>
</tr>
<tr>
<td>Flower card</td>
<td><a href="https://github.com/UI-Lovelace-Minimalist/UI/tree/main/custom_cards/custom_card_schumijo_flower/readme.md">more information</a></td>
<td>Card to show a plant status</td>
<td>schumijo</td>
</tr>
<tr>
<td>NAS card</td>
<td><a href="https://github.com/UI-Lovelace-Minimalist/UI/tree/main/custom_cards/custom_card_nas/readme.md">more information</a></td>
<td>A card to show values from your NAS.</td>
<td></td>
</tr>
<tr>
<td>Playstation card</td>
<td><a href="https://github.com/UI-Lovelace-Minimalist/UI/tree/main/custom_cards/custom_card_playstation/readme.md">more information</a></td>
<td>Card to show...</td>
<td></td>
</tr>
<tr>
<td>Waste collection card</td>
<td><a href="https://github.com/UI-Lovelace-Minimalist/UI/tree/main/custom_cards/custom_card_paddy_waste_collection/readme.md">more information</a></td>
<td>Card to show the next waste collection date</td>
<td>paddy0174</td>
</tr>
<tr>
<td>Welcome card</td>
<td><a href="https://github.com/UI-Lovelace-Minimalist/UI/tree/main/custom_cards/custom_card_paddy_welcome/readme.md">more information</a></td>
<td>Card to show a welcome message and optionally weather data, the current date or a news block.</td>
<td>paddy0174</td>
</tr>
</table>

## Legacy templates  
As this "theme" evolved, there were some major changes and re-writes in the code, compared to the previous versions. That's why we tried to keep some legacy templates in place, to still be able to use your old template format.  

We provide a list of all legacy templates we support [here](./wiki/development-legacy_templates.md).

And if you had installed one of the previous versions, we made a short write-up, on how you can move to the new format and be able to use this theme in the future with all it's features and without worrying about updates. Take a look [here](./wiki/installation-update.md#previous-version).
<br>
<br>