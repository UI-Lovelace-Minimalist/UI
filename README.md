# UI-Lovelace-Minimalist  
It's kind of hard to explain what this is, so let's call it a "theme" (in quotation marks). But one thing is for sure, it is very nice! Taking the exceptional work of tben as a basis, this repository is aimed to ease installation and maintainance of his wonderful work. You can use this interpretation of a SmartHomeUI more or less like a theme in HomeAssistant. 

<img src="https://user-images.githubusercontent.com/12232620/127769479-a8d2a117-7c1d-49f1-a8a2-6e3d51a4672c.png" width="200"> <img src="https://user-images.githubusercontent.com/12232620/127769475-01b39e04-065f-4ea4-adb0-39bc5e9aa39c.png" width="200"> <img src="https://user-images.githubusercontent.com/12232620/127769477-4010a487-927f-479a-8596-2bf19a9a4299.png" width="200"> <img src="https://user-images.githubusercontent.com/12232620/127769478-229d04d9-db00-4b78-b14b-dcd91f7ff463.png" width="200">

> ### Contributions
> This is a living project and all input is very welcome! If you configured and designed a card, that you would like to share, please feel free to do so! We are happy to include your contribution so others can use it as well!  

## Table of Contents  

<details>
<summary>Show table of contents</summary>

* [Credits](#credits)
* [Design system](#design-system)
* [Installation and update](#installation-and-update)
* [Chips](#chips)
* [Title](#title)
* [Vertical buttons](#vertical-buttons)
* [Cards](#cards)
  * [1-line cards](#1-line-cards)
  * [2-line-cards](#2-line-cards)
  * [Special cards](#special-cards)
* [Custom cards](#custom-cards)
* [Color scheme](#color-scheme)
* [Icons](#icons)
* [Notes](#notes)
  * [Share your cards](#share-your-cards)
  * [Legacy templates](#legacy-templates)
  * [My-slider](#my-cards)
* [Changing templates](#changing-templates)
* [Internal templates](#internal-templates)
</details>

## Credits  
* This design was made by [tben]()
* A lot of inspiration is taken from [7ahang’s work](https://www.behance.net/gallery/88433905/Redesign-Smart-Home) found on Behance.
* Contributions from others in the HomeAssistant forum thread, you can find it [here](https://community.home-assistant.io/t/lovelace-ui-minimalist/322687).
* The technical part is realised mostly by taking advantage of the great work RomRaider did with his button-card.
* Code refactor, cleanup and maintainance by clemalex, schumijo and paddy0174.

## Design system  
This system is depending on two things, namely using a theme and make extensive use of the `custom_component` [button-card](https://github.com/custom-cards/button-card) from RomRaider.

The design system consists of a few graphical buttons, that are changed depending on their use.

* [Chips](#chips) At the top of each page we find the chips, which allow to quickly visualize important information.
* [Title](#title) to separate the different sections.
* [Cards](#cards) to represent and interact with devices, sensors, etc.
* [Vertical buttons](#vertical-buttons) for using the cards as a button.

## Installation and update  

<details>
<summary>Installation with HACS</summary>

We highly recommend you use HACS to install this "theme". As you will also need at least `button-card`, this is much easier and allows for easy maintainance and updates.

<span style="color: blue">@dev No need to finish yet, first we need to check, if HACS will be available</span>
</details>

<details>
<summary>Manual installation</summary>

1. Download this repository as a *zip file* to your computer. You can do so by clicking the green button in the top right with the lable "CODE" and choosing "Download ZIP".
1. Unpack the zip-file to a location of your choice on your computer.
1. Copy the content (files **and** folders) of the folder `config` from this repository into your HomeAssistant `config` folder.  
1. Install these `custom_cards`, preferably via HACS. If you don't use HACS, please refer to the installation instructions from the specific card.
   <table>
   <tr>
   <th>Card</th>
   <th>Required</th>
   <th>Used by</th>
   <th>Note</th>
   </tr>
   <tr>
   <td><a href="https://github.com/custom-cards/button-card">button-card</a></td>
   <td>yes</td>
   <td>all cards</td>
   <td></td>
   </tr>
   <tr>
   <td><a href="https://github.com/AnthonMS/my-cards">my-cards (formerly known as ha-slider-card)</a></td>
   <td>no</td>
   <td>light_slider</td>
   <td><a href="#my-cards">find the note here</a></td>
   </tr>
   <tr>
   <td><a href="https://github.com/thomasloven/lovelace-auto-entities">lovelace-auto-entities</a></td>
   <td>no</td>
   <td></td>
   <td></td>
   </tr>
   <tr>
   <td><a href="https://github.com/thomasloven/lovelace-card-mod">lovelace-card-mod</a></td>
   <td>no</td>
   <td></td>
   <td></td>
   </tr>
   <tr>
   <td><a href="https://github.com/thomasloven/lovelace-state-switch">lovelace-state-switch</a></td>
   <td>no</td>
   <td></td>
   <td></td>
   </tr>
   <tr>
   <td><a href="https://github.com/kalkih/mini-graph-card">mini-graph-card</a></td>
   <td>no</td>
   <td></td>
   <td></td>
   </tr>
   <tr>
   <td><a href="https://github.com/kalkih/mini-media-player">mini-media-player</a></td>
   <td>no</td>
   <td></td>
   <td></td>
   </tr>
   <tr>
   <td><a href="https://github.com/bramkragten/swipe-card">swipe-card</a></td>
   <td>no</td>
   <td></td>
   <td></td>
   </tr>
   <tr>
   <td><a href="https://github.com/ofekashery/vertical-stack-in-card">vertical-stack-in-card</a></td>
   <td>no</td>
   <td></td>
   <td></td>
   </tr>
   </table>
1. <span style="color: blue">@dev Needs to be finished</span>
1. ...
</details>

<details>
<summary>Update</summary>

If you have installed this "theme" via HACS you will be notified about an update automatically. If you had installed manually, you will need to update this "theme" for yourself. But no worries, it's an easy and straightforward process.  
Just follow the steps you already did for installing this "theme":
1. Download this repository as a *zip file* to your computer. You can do so by clicking the green button in the top right with the lable "CODE" and choosing "Download ZIP".
1. Unpack the zip-file to a location of your choice on your computer.
1. Copy the content (files **and** folders) of the folder `config` from this repository into your HomeAssistant `config` folder, overwriting the files with the downloaded (new) version.
</details>

To check, which version you have installed, you can always find the version number(s) in the seperate file [VERSION.md](./VERSION.md).  

## Chips  

![Chips](./screenshots/chips.png)

### Chip - temperature  
This `chip` is to display a weather icon together with the outside and inside temperature.

![Chip - temperature](./screenshots/chips_temperature.png)

<details>
<summary>Usage</summary>

#### Example

```yaml
- type: 'custom:button-card'
  template: chips_temperature
  variables:
    ulm_chip_temperature_inside: sensor.my_temperature_sensor_inside
    ulm_chip_temperature_outside: sensor.my_temperature_sensor_outside
    ulm_chip_temperature_weather: weather.my_weather_provider 
  tap_action:
    action: navigate
    navigation_path: /lovelace/climate
```

#### Variables  
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_chip_temperature_inside</td>
<td>sensor.livingroom_temperature</td>
<td>yes</td>
<td>This is the sensor that provides your inside temperature. The state of this sensor should represent a numeric value (°C or °F doesn't matter).</td>
</tr>
<tr>
<td>ulm_chip_temperature_outside</td>
<td>sensor.outside_temperature</td>
<td>yes</td>
<td>This is the sensor that provides your outside temperature. If you want to use eg. a temperature value from your weather provider, you'd need to setup a template sensor first. The state of this sensor should represent a numeric value (°C or °F doesn't matter).</td>
</tr>
<tr>
<td>ulm_chip_temperature_weather</td>
<td>weather.accu_weather</td>
<td>yes</td>
<td>This is the sensor from your weather provider, like AccuWeather or DarkSky. The state of this sensor should provide a value like "rainy" or "cloudy" or something like that. If you're using one of the standard weather providers in HA, the state already is this value.</td>
</tr>
<tr>
<td>tap_action</td>
<td></td>
<td>optional</td>
<td>If you want to use a <i>tap_action</i> for your button, like eg. <i>more-info</i>, you can set this here with the options from <i>button-card</i> itself. If you just want to display the temperatures, you can safely leave these options out.</td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
chips_temperature:
  template: chips
  label: |
    [[[
      var icon = '🌡️';
      if (states[variables.ulm_chip_temperature_weather].state == 'clear-night'){
        var icon = '🌙';
      } else if(states[variables.ulm_chip_temperature_weather].state == 'cloudy'){
        var icon = '☁️';
      } else if(states[variables.ulm_chip_temperature_weather].state == 'exceptional'){
        var icon = '🌞';
      } else if(states[variables.ulm_chip_temperature_weather].state == 'fog'){
        var icon = '🌫️';
      } else if(states[variables.ulm_chip_temperature_weather].state == 'hail'){
        var icon = '⛈️';
      } else if(states[variables.ulm_chip_temperature_weather].state == 'lightning'){
        var icon = '⚡';
      } else if(states[variables.ulm_chip_temperature_weather].state == 'lightning-rainy'){
        var icon = '⛈️';
      } else if(states[variables.ulm_chip_temperature_weather].state == 'partlycloudy'){
        var icon = '⛅';
      } else if(states[variables.ulm_chip_temperature_weather].state == 'pouring'){
        var icon = '🌧️';
      } else if(states[variables.ulm_chip_temperature_weather].state == 'rainy'){
        var icon = '💧';
      } else if(states[variables.ulm_chip_temperature_weather].state == 'snowy'){
        var icon = '❄️';
      } else if(states[variables.ulm_chip_temperature_weather].state == 'snowy-rainy'){
        var icon = '🌨️';
      } else if(states[variables.ulm_chip_temperature_weather].state == 'sunny'){
        var icon = '☀️';
      } else if(states[variables.ulm_chip_temperature_weather].state == 'windy'){
        var icon = '🌪️';
      }
      return icon + ' ' + states[variables.ulm_chip_temperature_outside].state + '° / ' + states[variables.ulm_chip_temperature_inside].state + '°' ;
    ]]]
```
  
</details>

### Chip - icon only  
This `chip` displays just an icon. 

<span style="color: blue">@dev Picture missing</span>

<details>
<summary>Usage</summary>


#### Example

```yaml
- type: 'custom:button-card'
  template: chips_icon_only
  variables:
    ulm_chip_icon_only: '❤️'
  tap_action:
    action: navigate
    navigation_path: /lovelace/bedroom
```

#### Variables  
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_chip_icon_only</td>
<td>❤️</td>
<td>no</td>
<td>This is the icon to show. See [icons](#icons) at the end of this page to read more about the used unicode `emojis`.</td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
chips_icon_only:
  template: chips
  show_icon: true
  variables:
    icon: '❔'
  icon: "[[[ return variables.ulm_chip_icon_state_icon ? variables.ulm_chip_icon_state_icon : variables.icon ]]]"
  styles:
    grid:
      - grid-template-areas: '"i"'
```

</details>

### Chip - icon with state  
This `chip` displays an icon and a label, where the label can be any state of a sensor you configure. 

<span style="color: blue">@dev Picture missing</span>

<details>
<summary>Usage</summary>


#### Example

```yaml
- type: 'custom:button-card'
  template: chips_icon_state
  variables:
    ulm_chip_icon_state_icon: '🛏️'
    ulm_chip_icon_state_label: sensor.bed_occupancy
  tap_action:
    action: navigate
    navigation_path: /lovelace/bedroom
```

#### Variables  
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_chip_icon_state_icon</td>
<td>🛏️</td>
<td>yes</td>
<td>This is the icon to show. See [icons](#icons) at the end of this page to read more about the used unicode `emojis`.</td>
</tr>
<tr>
<td>ulm_chip_icon_state_label</td>
<td>sensor.bed_occupancy</td>
<td>yes</td>
<td></td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
chips_icon_state:
  template: chips
  show_icon: true
  show_label: true
  variables:
    icon: "❔"
  icon: "[[[ return variables.ulm_chip_icon_state_icon ? variables.ulm_chip_icon_state_icon : variables.icon ]]]"
  label: "[[[ return variables.ulm_chip_icon_state_label ? states[variables.ulm_chip_icon_state_label].state : '' ]]]"
  styles:
    grid:
      - grid-template-areas: '"i l"'
    label:
      - justify-self: center
      - padding: 0px 6px
      - font-weight: bold
      - font-size: 14px
```

</details>

### Chip - icon with double state  
This `chip` displays an icon and a two labels, where each label can be any state of a sensor you configure. 

<span style="color: blue">@dev Picture missing</span>

<details>
<summary>Usage</summary>


#### Example

```yaml
- type: 'custom:button-card'
  template: chips_icon_double_state
  variables:
    ulm_chip_icon_double_state_icon: '💻'
    ulm_chip_icon_double_state_label_1: sensor.nas_disk_used
    ulm_chip_icon_double_state_label_2: sensor.nas_cpu_load
  tap_action:
    action: navigate
    navigation_path: /lovelace/systems
```

#### Variables  
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_chip_icon_double_state_icon</td>
<td>💻</td>
<td>yes</td>
<td>This is the icon to show. See [icons](#icons) at the end of this page to read more about the used unicode `emojis`.</td>
</tr>
<tr>
<td>ulm_chip_icon_double_state_label_1</td>
<td>sensor.nas_disk_used</td>
<td>yes</td>
<td></td>
</tr>
<tr>
<td>ulm_chip_icon_double_state_label_2</td>
<td>sensor.nas_cpu_load</td>
<td>yes</td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
chips_icon_double_state:
  template: chips
  show_icon: true
  show_label: true
  variables:
    icon: "❔"
  icon: "[[[ return variables.ulm_chip_icon_double_state_icon ? variables.ulm_chip_icon_double_state_icon : variables.icon ]]]"
  label: "[[[ return variables.ulm_chip_icon_double_state_label_1 ? states[variables.ulm_chip_icon_double_state_label_1].state + states[variables.ulm_chip_icon_double_state_label_2].state : '' ]]]"
  styles:
    grid:
      - grid-template-areas: '"i l"'
    label:
      - justify-self: center
      - padding: 0px 6px
      - font-weight: bold
      - font-size: 14px
```

</details>

### Chip - back button  
This is a `back-button`, primarly used if you switch between views and want a convenient way back. Set the `tap-action` to navigate back to the default view, eg. home.

![Chips - return](./screenshots/chips_return.png)

<details>
<summary>Usage</summary>


#### Example

```yaml
- type: 'custom:button-card'
  template: chips_back
  tap_action:
    action: navigate
    navigation_path: /ui-lovelace-minimalist/home
```

#### Variables  
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>tap_action</td>
<td>see example code below</td>
<td>yes</td>
<td>Set the navigation path to your default view, eg. <i>ui-lovelace-minimalist/home</i> or <i>lovelace</i></td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
chips_back:
  template: chips
  show_icon: true
  icon: 'mdi:arrow-left'
  styles:
    grid:
      - grid-template-areas: '"i"'
  tap_action:
    action: navigate
    navigation_path: /lovelace
```

</details>

### Chip - presence counter  
This `chip` shows you the actual presence in your home. Shows residents and guests (guests only if one or more).

![Chips - Present](./screenshots/chips_localisation_present.png)

<details>
<summary>Usage</summary>


#### Example

```yaml
- type: 'custom:button-card'
  template: chips_presence_detection
  variables:
    ulm_chip_presence_counter_residents: sensor.my_residents_counter
    ulm_chip_presence_counter_guests: sensor.my_guests_counter
  tap_action:
    action: navigate
    navigation_path: /lovelace/location
```

#### Variables  
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_chip_presence_counter_residents</td>
<td>sensor.my_residents_counter</td>
<td>yes</td>
<td>This is the sensor that shows your residents counter.</td>
</tr>
<tr>
<td>ulm_chip_presence_counter_guests</td>
<td>sensor.my_guests_counter</td>
<td>yes</td>
<td>This is the sensor that shows your guests counter.</td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
chips_presence_detection:
  template: chips
  label: |
    [[[
      var guests = states[variables.ulm_chip_presence_counter_guests].state ? ' / ' + states[variables.ulm_chip_presence_counter_guests].state : '';
      return '🏠 ' +  states[variables.ulm_chip_presence_counter_residents].state + guests;
    ]]]
```

</details>

### Chip - electric consumption  
This `chip` shows you the electric consumption from a sensor. Configurable to show power (kWh) or price (currency).

![Chips - Consommation](./screenshots/power_consumption.png)

<details>
<summary>Usage</summary>


#### Example

```yaml
- type: 'custom:button-card'
  template: chips_power_consumption
  variables:
    ulm_chip_electric_consumption: sensor.my_electric_power_consumption
    ulm_chip_electric_price: sensor.my_electric_power_price
    ulm_chip_electric_currency: EUR
  tap_action:
    action: navigate
    navigation_path: /lovelace/consumption
```

#### Variables  
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_chip_electric_consumption</td>
<td>sensor.my_electric_power_consumption</td>
<td>yes</td>
<td>This is your consumed energy. This is the sensor, that shows how many *kWh*s are consumed.</td>
</tr>
<tr>
<td>ulm_chip_electric_price</td>
<td>sensor.my_electric_power_price</td>
<td>no</td>
<td>This is the price for your consumed energy, if you have such a sensor. This should be a sensor that shows a price in your defined currency. If this variable is not set, the chip shows only the *kWh*s! If this variable is set the chip shows the price for the consumed energy!</td>
</tr>
<tr>
<td>ulm_chip_electric_currency</td>
<td>EUR</td>
<td>no</td>
<td>This is the currency you're using for your electric consumption. Should be EUR for Euro or USD for US dollars or whatever currency you choose. This text will be added after your price sensor.</td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
chips_power_consumption:
  template: chips
  label: |
    [[[
      var amount = variables.ulm_chip_electric_price != '' ? true : false

      if (amount){
        return '⚡ ' +  states[variables.ulm_chip_electric_price].state + variables.ulm_chip_electric_currency;
      } else {
        return '⚡ ' +  states[variables.ulm_chip_electric_consumption].state;
      }
    ]]]
```

</details>

## Title  
Titles (and optionally subtitles) are used to seperate different areas in your design.

![Title](./screenshots/title.png)

<details>
<summary>Usage</summary>

#### Example

```yaml
- type: 'custom:button-card'
  template: title
  name: My Title
  label: 'Subtitle'  
```

</details>

<details>
<summary>Template code</summary>

```yaml
title:
  tap_action:
    action: none
  show_icon: false
  show_label: true
  show_name: true
  styles:
    card:
      - background-color: rgba(0,0,0,0)
      - box-shadow: none
      - height: auto
      - width: auto
      - margin-top: 12px
      - margin-left: 24px
      - margin-bottom: 0px
    grid:
      - grid-template-areas: '"n" "l"'
      - grid-template-columns: 1fr
      - grid-template-rows: min-content min-content
    name:
      - justify-self: start
      - font-weight: bold
      - font-size: '1.5rem'
    label:
      - justify-self: start
      - font-weight: bold
      - font-size: '1rem'
      - opacity: '0.4'
```

</details>

## Vertical buttons  
+++

![Scene](./screenshots/scene.gif)

<details>
<summary>Usage</summary>

#### Variables  
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

#### Example

```yaml
- entity: sensor.present
  template: scene_blue
  variables:
    state: "Present"
  type: 'custom:button-card'
```

</details>

<details>
<summary>Template code</summary>

```yaml
scene:
  size: 20px
  show_label: true
  label: "[[[ return (entity.attributes.value )]]]"
  styles:
    card:
      - border-radius: var(--border-radius)
      - box-shadow: var(--box-shadow)
      - padding: 10px 0px 8px 0px 
    grid:
      - grid-template-areas: '"i" "n" "l"'
    name:
      - margin-top: 10px
      - justify-self: center
      - font-weight: bold
      - font-size: 14px
    label:
      - justify-self: center
      - align-self: start
      - font-weight: bolder
      - font-size: 12px
      - filter: opacity(40%)
    icon:
      - color: 'rgba(var(--color-theme),0.2)'
    img_cell:
      - background-color: 'rgba(var(--color-theme),0.05)'
      - border-radius: 50%
      - place-self: center
      - width: 42px
      - height: 42px
```

</details>

```yaml
scene_blue:
  variables:
    state: "default"
  template: 
    - scene
  state:
    - operator: template
      value: "[[[ return states['input_select.localisation_thomas'].state == variables.state ]]]"
      styles:
        icon:
          - color: 'rgba(var(--color-blue),1)'
        img_cell:
          - background-color: 'rgba(var(--color-blue), 0.2)'
        card:
          - background-color: 'rgba(var(--color-background-blue), var(--opacity-bg))'
        name:
          - color: 'rgba(var(--color-blue-text),1)'
        label:
          - color: 'rgba(var(--color-blue-text),1)'
```

## Cards  
`Cards` are the main part of this design and are widely used in very different designs and functions. With these `cards` you can set up nearly every entity in HA, showing from "state-only" over a "full blown" information graphic with various values to "controlling" your covers and climate entities.

![Cards](./screenshots/cards.png)

### Anatomy  
![Anatomy](./screenshots/anatomy.png)
1. **Dot**: Visible when the device is unavailable. Also used on the entity **person**
2. **Icon**: Icon that represents the device
3. **Primary line**: Main information
4. **Secondary line**: Secondary information
5. **Optional part**: Possibility to display buttons to launch actions related to the device. Or display a graph to view the history of a sensor or you let your fantasy take the ride...

In the list above #5 enhances the normal `cards` with a "second line", that is used to display other information like a graph or the controls for your covers. For this readme the `cards` are divided into three groups:
* 1-line cards
  These are cards for `sensor` or `binary_sensors` like *light* or *power outlets*.
* 2-line cards
  These are cards with a second line for informations or controls, eg. your cover controls.
* Special cards
  These are special cards, based on the other cards but enhanced by specific functions. Eg. a `thermostat-card` that shows the state of your thermostat and display different sensor values.

## 1-line cards

### Generic (aka sensor)
This is the generic card to display values from a sensor, eg. to show humidity, your next waste collection date or whatever sensor value is provided.

![Generic](./screenshots/generic.png)

<details>
<summary>Usage</summary>

#### Example

```yaml
- type: 'custom:button-card'
  template: 
    - card_generic
  entity: sensor.next_waste_collection
```

#### Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>entity</td>
<td>sensor.next_waste_collection</td>
<td>yes</td>
<td></td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
card_generic:
  template: 
    - icon_info_bg
  label: "[[[ return entity.state + ' ' + entity.attributes.unit_of_measurement; ]]]"
  styles:
    icon:
      - color: 'rgba(var(--color-theme),0.9)'
    grid:
      - grid-template-areas: '"i l" "i n"'
      - grid-template-columns: min-content auto
      - grid-template-rows: min-content min-content
    label:
      - align-self: end
      - justify-self: start
      - font-weight: bold
      - font-size: 14px
      - margin-left: 12px
      - filter: opacity(100%)
    name:
      - justify-self: start
      - align-self: start
      - font-weight: bolder
      - font-size: 12px
      - filter: opacity(40%)
      - margin-left: 12px
```

</details>

### Light  
This is the `light-card`, used to toggle a light or a light group. Shows state of the light and, if available, brightness in %.

![Light](./screenshots/light.png) 

<details>
<summary>Usage</summary>

#### Example

```yaml
- type: 'custom:button-card'
  template: 
    - icon_info_bg
    - light
  entity: light.my_livingroom_light
  name: Livingroom Light
  variables:
    ulm_light_unavailable: 'Unavailable'
```

#### Variables
<table>
<tr>
<th>Variables</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_light_unavailable</td>
<td>Unavailable</td>
<td>no</td>
<td>This is the actual text to show on your card, if the state of your light is "unavailable".</td>
</tr>
<tr>
<td>tap_action</td>
<td>action: toggle</td>
<td>no</td>
<td>The default <i>tap_action</i> is set to toggle your light. As always, you can overwrite this with your personal settings in your view template.</td>
</tr>
<tr>
<td>hold_action</td>
<td>action: more-info</td>
<td>no</td>
<td>The default <i>hold_action</i> is set to show the "more-info" pop-up (lovelace default), where you can eg. change the brightness or color. As always, you can overwrite this with your personal settings in your view template.</td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
card_light:
  template: 
    - yellow
  tap_action:
    action: toggle
  hold_action:
    action: more-info
  label: >-
    [[[ 
      if (entity.state !='unavailable'){
        if (entity.state =='off'){
          var bri = Math.round(entity.attributes.brightness / 2.55);
          return 'Off';  
        }else{
          var bri = Math.round(entity.attributes.brightness / 2.55);
          return (bri ? bri : '0') + '%'; 
        }
      }else{
        return variables.ulm_light_unavailable ? variables.ulm_light_unavailable : 'Unavailable';
      }
    ]]]
```

</details>

### Light slider  
The `light-slider-card` controls a light or light-group with the added possibilty to control the brightness of your light with a slider.

![Light-slider](./screenshots/light_slider.png) 

<details>
<summary>Usage</summary>

#### Example

```yaml
- type: 'custom:button-card'
  template: 
    - card_light_slider
  entity: light.my_livingroom_light
  name: Livingroom Light
```

</details>

<details>
<summary>Template code</summary>

```yaml
card_light_slider:
  show_icon: false
  show_name: false
  show_label: false
  styles:
    card:
      - border-radius: var(--border-radius)
      - box-shadow: var(--box-shadow)
      - padding: 12px
    grid:
      - grid-template-areas: '"item1" "item2"'
      - grid-template-columns: 1fr
      - grid-template-rows: min-content  min-content
      - row-gap: 12px
  state:
    - operator: template
      value: >
        [[[
          return entity.state == 'on'
        ]]]
      styles:
        card:
          - background-color: 'rgba(var(--color-background-yellow),var(--opacity-bg))'
  custom_fields:
    item1:
      card:
        type: 'custom:button-card'
        template:
          - icon_info
          - light
        entity: "[[[ return entity.entity_id ]]]"
        name: "[[[ return entity.name ]]]"
    item2:
      card:
        type: 'custom:my-slider'
        entity: '[[[ return entity.entity_id ]]]'
        radius: 14px
        height: 42px
        mainSliderColor: rgba(var(--color-yellow),1)
        secondarySliderColor: rgba(var(--color-yellow),0.2)
        mainSliderColorOff: rgba(var(--color-theme),0.05)
        secondarySliderColorOff: rgba(var(--color-theme),0.05)
        thumbHorizontalPadding: '0px'
        thumbVerticalPadding: '0px'   
        thumbWidth: 0px
        card_mod:
        style: |
          ha-card {
            border-radius: 14px;
            box-shadow: none;
          }
```

</details>

### Power Outlet  
This is the `power-outlet-card`. It shows you the state of a power outlet, and if configured, the actual power consumption of the power outlet.

![Prise](./screenshots/outlet.png)

<details>
<summary>Usage</summary>

#### Example

```yaml
- type: 'custom:button-card'
  template: 
    - card_power_outlet
  entity: switch.power_outlet_livingroom
  name: Power Outlet Livingroom
  variables:
    ulm_power_outlet_consumption_sensor: sensor.power_outlet_livingroom_consumption 
```

#### Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_power_outlet_consumption_sensor</td>
<td>sensor.power_outlet_livingroom_consumption</td>
<td>no</td>
<td>If you set this sensor, the `power-outlet-card` shows the energy consumption next to the state.</td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
card_power_outlet:
  tap_action:
    action: more-info
  label: |-
    [[[ 
      if (entity.state =='on') && (variables.ulm_power_outlet_consumption_sensor != '' {
        return entity.state + ' ' + variables.ulm_power_outlet_consumption_sensor + 'W';
      } else {
        return entity.state;
      }
    ]]]
  template: 
    - yellow
    - icon_info_bg
```

</details>

### Binary sensor  
The `binary-sensor-card` is to show the state (on/off, open/close, etc.) of a binary sensor, eg. your garage door or a window contact sensor.

![Mouvements](./screenshots/binary_sensor-1.png) <br /> ![Fenêtres](./screenshots/binary_sensor-2.png)

<details>
<summary>Usage</summary>

#### Example

```yaml
- type: 'custom:button-card'
  template: 
    - card_binary_sensor
  entity: binary_sensor.garage_door
  name: Garage Door
  icon: 'mdi:garage'
  show_last_changed: true
```

#### Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>entity</td>
<td>binary_sensor.garage_door</td>
<td>yes</td>
<td>The <i>binary_sensor</i> to show</td>
</tr>
<tr>
<td>name</td>
<td>Garage Door</td>
<td>no</td>
<td>The name, if not set, the friendly name is used.</td>
</tr>
<tr>
<td>icon</td>
<td>mdi:garage</td>
<td>no</td>
<td>If not set, the standard icon from HA will be used.</td>
</tr>
<tr>
<td>show_last_changed</td>
<td>13 minutes ago</td>
<td>no</td>
<td>Set this to <i>true</i> or <i>false</i>. This is set to <i>true</i> be default and shows the `last_changed` attribute of your <i>binary_sensor</i>.</td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
card_binary_sensor:
  template: 
    - icon_info_bg
    - blue
  name: "[[[ return entity.name != '' ? entity.name : entity.attribute.friendly_name ]]]"
  show_last_changed: true
```

</details>

### Media player  
The `media-player-card` shows you the *app*, the *title* and the *album name* playing, if the data is available through HA. The *app* is shown via a different icon.  
Currently there are icons for 
* *Spotify*
* *GooglePodcast*
* *Plex*
* *Soundcloud*
* *YoutubeMusic*

Unfortunately *AmazonMusic*, *AppleMusic* and *Deezer* don't have an `mdi:icon`, so the default icon (a speaker) will be presented.

If you're looking for a `media-player-card-with-controls`, see a little downwards under *2-line cards*.

![Enceintes](./screenshots/media.png)

<details>
<summary>Usage</summary>

#### Example

```yaml
- type: 'custom:button-card'
  template: 
    - card_media_player
  entity: media_player.livingroom_shield
  name: Livingroom Nvidia Shield
```

#### Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>entity</td>
<td>media_player.livingroom_shield</td>
<td>yes</td>
<td>The entity of the media player</td>
</tr>
<tr>
<td>name</td>
<td>Livingroom Nvidia Shield</td>
<td>no</td>
<td>The displayed name of your media player</td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
card_media_player:
  template:
    - icon_info_bg
  label: "[[[ return entity.state; ]]]"
  icon: |
    [[[
        var app = entity.attributes.app_name;
        var icon = 'mdi:speaker';
        if(app == 'Spotify'){
          var icon = 'mdi:spotify';
        } else if(app == 'Google Podcasts'){
          var icon = 'mdi:google-podcast';
        } else if(app == 'Plex'){
          var icon = 'mdi:plex';
        } else if(app == 'Soundcloud'){
          var icon = 'mdi:soundcloud';
        } else if(app == 'Youtube Music'){
          var icon = 'mdi:youtube';
        } else if (app == 'Oto music'){
          var icon = 'mdi:music-circle';
        }
        return icon ;
    ]]]
  styles:
    label:
      - opacity: '0.6'
    icon:
      - color: 'rgba(var(--color-theme),0.2)'
    img_cell:
      - background-color: 'rgba(var(--color-theme),0.05)'
    card:
      - background-blend-mode: multiply
      - background: "[[[ return entity.attributes.entity_picture_local != null ? 'center / cover url(' + entity.attributes.entity_picture_local + ') rgba(0, 0, 0, 0.15)' : '' ]]]"
  state:
    - operator: template
      value: "[[[ return entity.state !='off' ]]]"
      name: "[[[ return entity.attributes.media_title; ]]]"
      label: "[[[ return entity.attributes.media_album_name; ]]]"
      styles:
        label: 
          - color: white
          - filter: opacity(100%)
        img_cell:
          - background-color: 'rgba(var(--color-theme),0.0)'
        icon:
          - color: white
        name:
          - color: white
```

</details>

### Media player with cover art (album picture)
This is the second `media-player-card`, in contrast to the first one above, it shows the cover art from your media player. 

+++

<details>
<summary>Usage</summary>

#### Example
```yaml
- type: 'custom:button-card'
  template: 
    - card_media_player_mini_album
  entity: media_player.livingroom_shield
```

#### Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>entity</td>
<td>media_player.livingroom_shield</td>
<td>yes</td>
<td>The entity of the media player</td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
card_media_player_mini_album:
  label: "[[[ return entity.state; ]]]"
  styles:
    icon:
      - color: 'rgba(var(--color-theme),0.2)'
    img_cell:
      - background-color: 'rgba(var(--color-theme),0.05)'
  state:
    - operator: template
      value: "[[[ return entity.state != 'off' ]]]"
      name: "[[[ return entity.attributes.media_title; ]]]"
      label: "[[[ return entity.attributes.media_album_name; ]]]"
      styles:
        img_cell:
          - background: "[[[ return 'center / cover url(' + entity.attributes.entity_picture + ')'; ]]]"
        icon:
          - color: 'rgba(var(--color-theme),0.0)'
```

</details>

### Battery
The `battery-card` is a slightly enhanced `generic-card`, just to ease the use. You could always configure it from the `generic-card` yourself. 

<span style="color: blue">@dev Picture missing</span>

<details>
<summary>Usage</summary>

#### Example

```yaml
- type: 'custom:button-card'
  template: 
    - card_battery
  variables:
    ulm_card_battery_attribute: battery_attribute
  entity: sensor.livingoom_thermometer_battery
```

#### Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_card_battery_attribute</td>
<td>battery_attribute</td>
<td>no</td>
<td>If your entity provides the battery percent in an attribute (=not as an own sensor), fill in the <u>attributes name</u> here.<br />Eg. if you have `sensor.livingroom_thermometer` and the attribute for your battery power is `sensor.livingroom_thermometer.attributes.battery_percent`, you fill in <i>battery_percent</i> here.</td>
</tr>
<tr>
<td>entity</td>
<td>sensor.livingroom_thermometer_battery</td>
<td>yes</td>
<td>This is your battery entity</td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
card_battery:
  template: card_generic
  icon: |
    [[[
        var battery = variables.ulm_card_battery_attribute != null ? entity.attributes. + variables.ulm_card_battery_attribute : entity.state;
        var icon = 'mdi:help-circle-outline';
        if (battery >= 90){
          var icon = 'mdi:battery';
        } else if(battery >= 80){
          var icon = 'mdi:battery-90';
        } else if(battery >= 70){
          var icon = 'mdi:battery-80️';
        } else if(battery >= 60){
          var icon = 'mdi:battery-70️';
        } else if(battery >= 50){
          var icon = 'mdi:battery-60️';
        } else if(battery >= 40){
          var icon = 'mdi:battery-50️';
        } else if(battery >= 30){
          var icon = 'mdi:battery-40️';
        } else if(battery >= 20){
          var icon = 'mdi:battery-30️';
        } else if(battery >= 10){
          var icon = 'mdi:battery-20️';
        } else if(battery >= 0){
          var icon = 'mdi:battery-10️';
        } else if(battery == 0){
          var icon = 'mdi:battery-outline️';
        }
         return icon ;
    ]]]
```

</details>

## 2-line cards

### Cover  
With the `cover-card` you have the state of your cover and on the second line UP / PAUSE / DOWN to control it. 

![Volets](./screenshots/cover_buttons.png)

<details>
<summary>Usage</summary>

#### Example

```yaml
- type: 'custom:button-card'
  template: 
    - card_cover_with_buttons
  variables:
    name: "Cover Livingroom Window"
  entity: "cover.livingroom_window"
```

#### Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>name</td>
<td>Cover Livingroom Window</td>
<td>no</td>
<td>The name of your cover entity</td>
</tr>
<tr>
<td>entity</td>
<td>cover.livingroom_window</td>
<td>yes</td>
<td>The <i>entity_id</i> of your cover</td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
card_cover_with_buttons:
  variables:
    name: "Default name"
    entity: "[[[ return entity.entity_id ]]]"
  styles:
    card:
      - border-radius: var(--border-radius)
      - box-shadow: var(--box-shadow)
      - padding: 12px
    grid:
      - grid-template-areas: '"item1" "item2"'
      - grid-template-columns: 1fr
      - grid-template-rows: min-content  min-content
      - row-gap: 12px
  custom_fields:
    item1:
      card:
        entity: '[[[ return entity.entity_id ]]]'
        name: '[[[ return variables.name ]]]'
        tap_action:
          action: more-info
        template:
          - icon_info
          - cover
        type: 'custom:button-card'
    item2:
      card:
        template: list_items
        type: 'custom:button-card'
        custom_fields:
          item1:
            card:
              icon: 'mdi:arrow-down'
              tap_action:
                action: call-service
                service: cover.close_cover
                service_data:
                  entity_id: '[[[ return entity.entity_id ]]]'
              type: 'custom:button-card'
              template: widget_icon
          item2:
            card:
              icon: 'mdi:pause'
              tap_action:
                action: call-service
                service: cover.stop_cover
                service_data:
                  entity_id: '[[[ return entity.entity_id ]]]'
              type: 'custom:button-card'
              template: widget_icon
          item3:
            card:
              icon: 'mdi:arrow-up'
              tap_action:
                action: call-service
                service: cover.open_cover
                service_data:
                  entity_id: '[[[ return entity.entity_id ]]]'
              type: 'custom:button-card'
              template: widget_icon
```

</details>

### Graph  
The `graph-card` shows an entity with the actual state and a *min-graph-card* integrated. This can be used for a thermostat to show the actual temperature and the history.

![Entity - graph](./screenshots/entity_graph.png)

<details>
<summary>Usage</summary>

#### Example

```yaml
- type: 'custom:button-card'
  template: 
    - card_graph
  variables:
    color: "var(--google-blue)"
    name: Temperature Livingroom
  entity: sensor.livingroom_temperature
```

#### Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>color</td>
<td>var(--google-blue)</td>
<td>no</td>
<td>This is to adjust your color value. Use a CSS varible from HA or set a color value (eg. #FFFFFF)</td>
</tr>
<tr>
<td>name</td>
<td>Temperature Livingroom</td>
<td>no</td>
<td>The name of your sensor</td>
</tr>
<tr>
<td>entity</td>
<td>sensor.livingroom_temperature</td>
<td>yes</td>
<td>Your <i>entity_id</i> for the temperature sensor</td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
card_graph:
  variables:
    color: "var(--info-color)"
    name: "Default name"
  styles:
    card:
      - border-radius: var(--border-radius)
      - box-shadow: var(--box-shadow)
      - padding: 0px
    grid:
      - grid-template-areas: '"item1" "item2"'
      - grid-template-columns: 1fr
      - grid-template-rows: min-content  min-content
  custom_fields:
    item1:
      card:
        entity: '[[[ return entity.entity_id ]]]'
        name: '[[[ return variables.name ]]]'
        template: 
          - icon_info
          - card_generic
        styles:
          card:
            - padding: 12px
        type: 'custom:button-card'
    item2:
      card:
        type: 'custom:mini-graph-card'
        entities:
          - entity: '[[[ return entity.entity_id ]]]'
        line_color: '[[[ return variables.color ]]]'
        show:
          name: false
          icon: false
          legend: false
          state: false
        style: |
          ha-card {
            box-shadow: none;
            border-radius: var(--border-radius);
          }
```

</details>

### Media player with controls
+++

+++

<details>
<summary>Usage</summary>

#### Example
```yaml
- type: 'custom:button-card'
  template: 
    - card_media_player_with_controls
  entity: media_player.livingroom_shield
```

#### Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>entity</td>
<td>media_player.livingroom_shield</td>
<td>yes</td>
<td>The entity of the media player</td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
card_media_player_with_controls:
  variables:
    name: "Default name"
  styles:
    card:
      - border-radius: var(--border-radius)
      - box-shadow: var(--box-shadow)
      - padding: 12px
    grid:
      - grid-template-areas: '"item1" "item2"'
      - grid-template-columns: 1fr
      - grid-template-rows: min-content  min-content
      - row-gap: 12px
  custom_fields:
    item1:
      card:
        entity: '[[[ return entity.entity_id ]]]'
        name: '[[[ return variables.name ]]]'
        tap_action:
          action: more-info
        template:
          - icon_info
          - card_media_player_mini_album
        type: 'custom:button-card'
    item2:
      card:
        template: list_items
        type: 'custom:button-card'
        custom_fields:
          item1:
            card:
              icon: 'mdi:skip-previous'
              tap_action:
                action: call-service
                service: media_player.media_previous_track
                service_data:
                  entity_id: '[[[ return variables.entity ]]]'
              type: 'custom:button-card'
              template: widget_icon
          item2:
            card:
              icon: 'mdi:pause'
              tap_action:
                action: call-service
                service: media_player.media_play_pause
                service_data:
                  entity_id: '[[[ return variables.entity ]]]'
              type: 'custom:button-card'
              template: widget_icon
          item3:
            card:
              icon: 'mdi:skip-next'
              tap_action:
                action: call-service
                service: media_player.media_next_track
                service_data:
                  entity_id: '[[[ return variables.entity ]]]'
              type: 'custom:button-card'
              template: widget_icon
```

</details>

## Special cards
`Special cards` are cards, that are designed mostly for one specific need in an installation specific way. If you want to use these cards, you need to adapt them to your installation, eg. with these cards you may need to setup other things in HA to get them working correctly. If you have problems using them, feel free to ask for support in the corresponding forum thread [here](#). 

### Playstation  

![Playstation](./screenshots/playstation.png)

<details>
<summary>Usage</summary>

#### Example

```yaml
- entity: media_player.example
  template: 
    - card_ps4
  type: 'custom:button-card'
```

#### Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
card_ps4:
  template:
    - icon_info_bg
  label: >-
    [[[ if (entity.state =='unknown'){
          return "Off";
        }else if (entity.state =='standby'){
          return "En veille";
        }else{
          return "On";
        }
    ]]]
  styles:
    icon:
      - color: 'rgba(var(--color-theme),0.2)'
    img_cell:
      - background-color: 'rgba(var(--color-theme),0.05)'
  state:
    - value: 'idle'
      styles:
        icon:
          - color: 'rgba(var(--color-blue),1)'
        img_cell:
          - background-color: 'rgba(var(--color-blue), 0.2)'
    - value: 'standby'
      styles:
        icon:
          - color: 'rgba(var(--color-theme),0.2)'
        img_cell:
          - background-color: 'rgba(var(--color-theme),0.05)'
    - operator: template
      value: >
        [[[
          return entity.state !='unknown' 
        ]]]
      name: >
          [[[
            return entity.attributes.media_title;
          ]]]
      label: >
          [[[
            return entity.attributes.friendly_name;
          ]]]
      styles:
        label: 
          - color: white
          - filter: opacity(100%)
        img_cell:
          - background-color: 'none'
        icon:
          - color: white
        name:
          - color: white
        card:
          - background-blend-mode: multiply
          - background: >
              [[[
                var image = entity.attributes.entity_picture;
                return 'center / cover url(' + image + ') rgba(0, 0, 0, 0.15)';
              ]]]
```

</details>

### NAS
+++

@dev Picture missing

<details>
<summary>Usage</summary>

#### Example

```yaml
...
```

#### Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
nas:
  tap_action:
    action: more-info
  show_label: true
  label: |-
    [[[ if (entity.state =='on')
       var etat = states["sensor.nas_volume_1_used_space"].state + "/3.5To"; 
       else
      var etat = "Off";
    return etat ; ]]]
  template: 
    - blue
```

</details>

## Custom cards  
This "theme" is designed with an open structure in mind, that's why it is possible to add custom cards without much hassle. If you have a card you would like to share, please follow these steps:

<details>
<summary>How to develop custom cards and share them</summary>

* Develop your custom card by adding some specific style descriptions with your own naming. For example call your template definition <i>your_name_card_my_super_card</i>. 
* You can use all `templates`, that are available through the repository. 
* Please don't use other custom code, eg. from other <i>custom</i> cards.
* Refer to [changing templates](#changing-templates) to see how and where to store your definitons.
* To share the card with the community, leave us a note in an issue or in the forum support thread.

> We are currently planning to support the automatic upload of custom cards through a repository (as a merge request). If you're interested, please send us a short note. Until this function is implemented, please share it via the above mentioned ways. Thank you!

</details>

## Color scheme  
I tried to set up a consistency between the colors used to represent the entities.
|Color|Type|
|---|---|
|<span style="height: 30px; width: 30px; border-radius: 50%; display: inline-block; background-color: #FF9101;"></span>|💡 Light<br />⚡ Electricity|
|<span style="height: 30px; width: 30px; border-radius: 50%; display: inline-block; background-color: #F54436;"></span>|🔥 Heating|
|<span style="height: 30px; width: 30px; border-radius: 50%; display: inline-block; background-color: #3D5AFE;"></span>|☑️ On/off devices<br />🏠 Home|
|<span style="height: 30px; width: 30px; border-radius: 50%; display: inline-block; background-color: #01C852;"></span>|🌲 Exterior|

## Icons  
For the `chips`, this "theme" uses the standard *unicode emojis*. The main reason is, they are multi-color whereas the `mdi-icons` that HomeAssistant uses are one color only. 
> These emojis are *only used* on the `chips`, all *other cards or buttons* use the standard `mdi-icons`!

Overview over standard *unicode emojis*:  
* [https://emojipedia.org](https://emojipedia.org) or  
* [https://github.com/ikatyang/emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet)  

Overview Home Assistant *mdi-icons*: 
* [https://materialdesignicons.com/](https://materialdesignicons.com/) 

Using emojis is easy:
* Go to one of the Github pages above
* Select the emoji you want and copy it ("CTRL + C" or right-click "copy" / at <i>emojipedia.org</i> you already find a "copy" button)
* Go to your view and paste the icon

> There are a lot of emojis on these pages, so we suggest you use the built-in search at <i>emojipedia</i> or the browser integrated search by pressing "CTRL + F" and type in your query like "heart". 

## Notes  
* <a name="share-your-cards"></a><u>Share your cards</u>  
  You configured a great card for your setup? Share it with the community! We are always happy to show off your card here in this readme, to allow others to use it as well. Please open an issue or make a post in the support thread [here](). Of course your name will be added with your contribution (if you want)!    
* <a name="legacy-templates"></a><u>Legacy templates</u>  
  As this is a major re-write of the originally created templates, we tried to leave legacy templates in place, so you can easily adjust your code over time. These legacy templates work by using the *old* naming and forwarding these to the *new* functions, that have a new name. Eg. if you previously used `chips_return` for your **back** button, the new code works with **back** button. You can still use your code, as we forward this to the new style like this:

  ```yaml
  chips_return:
    template: chips_back
  ```

* <a name="my-cards"></a><u>my-cards (formerly known as ha-slider-card)</u>  
  The `custom_component` *ha-slider-card* was recently renamed to *my-cards* from the author. With this update the card is now usable without an internet connection, as the files from *unpkg.com* are now compiled into the `custom_component` and don't need to be loaded from an external server. This is a great update and you should use the new version. This "theme" is already changed to use the new version. 

## Changing templates
This "theme" is build with the idea to make its use easy. But there are cases (actually a lot of them), where you want to change settings in the template to fit it to your needs.  

To make your life easy and to asure the next update will not brake anything, we recommend the following way to change settings.

<details>
  <summary>See how this works</summary>

* Look for a chip or card, that looks like the one you want to newly create.
* Open the pull-down named <i>Template code</i> under that chip/card.  
* Go to your `config` folder of HA, go to the folder `minimalist_templates` and add a new file. 
* <b>IMPORTANT!</b>  
  Name the file to your liking (preferably describing your chip/card), <b>but you must add the prefix <i>custom_</i></b> to the file name. Otherwise the file will not be correctly included!  
  Example: <i>custom_chip_temperature.yaml</i>
* Now copy the <i>Template code</i> and add it to your newly created file.

  ```yaml
  chips_temperature:
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
  ```

* Change the name of your chip/card, but leave at least the used <i>template</i> in place. 
  ```yaml
  paddy_chips_temperature: # <- change name
    template: chips # <- leave this in place
    # from here down you can change/delete everything
    label: |
      [[[
        var icon = '🌡️';
        if (states[variables.ulm_chip_temperature_weather].state == 'clear-night'){
          var icon = '🌙';

          [...]

        }
        return icon + ' ' + states[variables.ulm_chip_temperature_outside].state + '° / ' + states[variables.ulm_chip_temperature_inside].state + '°' ;
      ]]]
  ```
* You can now overwrite basically every setting that is pre-configured. See the documentation of [button-card](https://github.com/custom-cards/button-card) to look up all the settings, you can configure.  
  > <u>Note</u>  
    The configuration that you set in your own file, overwrites the configuration set by this theme. Eg. if you set `label` in your file, the settings from `label` in this "themes" file will be overwritten. But as long as you follow this readme, these settings are reversible. Just delete the content of your file and start new. 
* Safe the file and reload your lovelace configuration via the three-dot menu in the upper right corner of your lovelace view pressing `Reload resources`.
* You can now use your newly created template for your chip/card.
</details>

## Internal Templates
This "theme" is working with a lot of templates (in *button_card_templates.yaml*) that inherit settings from other templates. This is to shorten the code, avoid duplication and make the use easier.

> <b>This section is only for documenting purposes. You won't need these templates directly in your view(s)!</b>

### Chips

<details>
<summary>Template name: <i>chips</i></summary>

```yaml
chips:
  tap_action:
    action: more-info
  show_icon: false
  show_name: false
  show_state: false
  show_label: true
  size: 80%
  styles:
    img_cell:
      - width: 24px
    card:
      - border-radius: 18px
      - box-shadow: var(--box-shadow)
      - height: 36px
      - width: auto
      - padding-left: 6px
      - padding-right: 6px
    grid:
      - grid-template-areas: '"l"'
    label:
      - justify-self: center
      - padding: 0px 6px
      - font-weight: bold
      - font-size: 14px
```

</details>

<details>
<summary>Template name: <i>cover</i></summary>

```yaml
cover:
  tap_action:
    action: more-info
  icon: |
    [[[
        var icon = 'mdi:window-shutter';
        if (entity.attributes.current_position == 0){
          var icon = 'mdi:window-shutter';
        } else
          var icon = 'mdi:window-shutter-open';
        return icon ;
    ]]]
  label: >-
    [[[ 
        if (entity.attributes.power_consumption != '0'){
          return 'Mouvement';
        }else{
          if (entity.attributes.current_position == 0){
            var etat = "Fermé";
          }else{
            var etat = "Ouvert" + ' • ' + (entity.attributes.current_position) + '%' ;
          }
          return etat ;
        }
    ]]]
  state:
    - operator: template
      value: >
        [[[
          return entity.attributes.current_position != 0;
        ]]]
      styles:
        icon:
          - color: 'rgba(var(--color-blue),1)'
        img_cell:
          - background-color: 'rgba(var(--color-blue),0.2)'
```

</details>

<details>
<summary>Template name: <i>edge</i></summary>

```yaml
edge:
  styles:
    card:
      - width: 0px
```

</details>

<details>
<summary>Template name: <i>icon</i></summary>

```yaml
icon:
  color: var(--google-grey)
  show_icon: true
  show_name: false
  show_label: false
  size: 20px
  custom_fields:
    notification: >
      [[[
        if (entity.state =='unavailable'){
          return `<ha-icon icon="mdi:exclamation" style="width: 12px; height: 12px; color: var(--primary-background-color);"></ha-icon>`
        }
      ]]]
  state:
    - styles:
        custom_fields:
          notification:
            - border-radius: 50%
            - position: absolute
            - left: 24px
            - top: -2px
            - height: 16px
            - width: 16px
            - border: 2px solid var(--card-background-color)
            - font-size: 12px
            - line-height: 14px
            - background-color: >
                [[[
                  return "rgba(var(--color-red),1)";
                ]]]
      value: unavailable
  styles:
    card:
      - border-radius: 21px
      - box-shadow: none
      - padding: 0px
    grid:
      - grid-template-areas: '"i"'
      - grid-template-columns: min-content
      - grid-template-rows: min-content
    icon:
      - color: 'rgba(var(--color-theme),0.2)'
    img_cell:
      - background-color: 'rgba(var(--color-theme),0.05)'
      - border-radius: 50%
      - place-self: center
      - width: 42px
      - height: 42px
```

</details>

<details>
<summary>Template name: <i>icon_info</i></summary>

```yaml
icon_info:
  color: var(--google-grey)
  show_icon: true
  show_name: true
  show_label: true
  size: 20px
  custom_fields:
    notification: >
      [[[
        if (entity.state =='unavailable'){
          return `<ha-icon icon="mdi:exclamation" style="width: 12px; height: 12px; color: var(--primary-background-color);"></ha-icon>`
        }
      ]]]
  state:
    - styles:
        custom_fields:
          notification:
            - border-radius: 50%
            - position: absolute
            - left: 24px
            - top: -2px
            - height: 16px
            - width: 16px
            - border: 2px solid var(--card-background-color)
            - font-size: 12px
            - line-height: 14px
            - background-color: >
                [[[
                  return "rgba(var(--color-red),1)";
                ]]]
      value: unavailable
  styles:
    card:
      - border-radius: 21px 8px 8px 21px 
      - box-shadow: none
      - padding: 0px
      # - background-color: 'rgba(var(--color-theme),0)'
    grid:
      - grid-template-areas: '"i n" "i l"'
      - grid-template-columns: min-content auto
      - grid-template-rows: min-content min-content
    icon:
      - color: 'rgba(var(--color-theme),0.2)'
    img_cell:
      - background-color: 'rgba(var(--color-theme),0.05)'
      - border-radius: 50%
      - place-self: center
      - width: 42px
      - height: 42px
    name:
      - align-self: end
      - justify-self: start
      - font-weight: bold
      - font-size: 14px
      - margin-left: 12px
    label:
      - justify-self: start
      - align-self: start
      - font-weight: bolder
      - font-size: 12px
      - filter: opacity(40%)
      - margin-left: 12px
    state:
      - justify-self: start
      - align-self: start
      - font-weight: bolder
      - font-size: 12px
      - filter: opacity(40%)
      - margin-left: 12px
```

</details>

<details>
<summary>Template name: <i>icon_info_bg</i></summary>

```yaml
icon_info_bg:
  color: var(--google-grey)
  show_icon: true
  show_name: true
  show_label: true
  size: 20px
  custom_fields:
    notification: >
      [[[
        if (entity.state =='unavailable'){
          return `<ha-icon icon="mdi:exclamation" style="width: 12px; height: 12px; color: var(--primary-background-color);"></ha-icon>`
        }
      ]]]
  state:
    - styles:
        custom_fields:
          notification:
            - border-radius: 50%
            - position: absolute
            - left: 38px
            - top: 8px
            - height: 16px
            - width: 16px
            - border: 2px solid var(--card-background-color)
            - font-size: 12px
            - line-height: 14px
            - background-color: >
                [[[
                  return "rgba(var(--color-red),1)";
                ]]]
      value: unavailable
  styles:
    card:
      - border-radius: var(--border-radius)
      - box-shadow: var(--box-shadow)
      - padding: 12px
    grid:
      - grid-template-areas: '"i n" "i l"'
      - grid-template-columns: min-content auto
      - grid-template-rows: min-content min-content
    icon:
      - color: 'rgba(var(--color-theme),0.2)'
    img_cell:
      - background-color: 'rgba(var(--color-theme),0.05)'
      - border-radius: 50%
      - place-self: center
      - width: 42px
      - height: 42px
    name:
      - align-self: end
      - justify-self: start
      - font-weight: bold
      - font-size: 14px
      - margin-left: 12px
    label:
      - justify-self: start
      - align-self: start
      - font-weight: bold
      - font-size: 12px
      - filter: opacity(40%)
      - margin-left: 12px
    state:
      - justify-self: start
      - align-self: start
      - font-weight: bold
      - font-size: 12px
      - filter: opacity(40%)
      - margin-left: 12px
```

</details>

<details>
<summary>Template name: <i>icon_info_line</i></summary>

```yaml
icon_info_line:
  show_icon: true
  show_name: false
  show_label: true
  size: 100%
  styles:
    card:
      - box-shadow: none
      - padding: 0px
    grid:
      - grid-template-areas: '"i l"'
      - grid-template-columns: max_content auto
      - grid-template-rows: min-content
    icon:
      - filter: opacity(40%)
    img_cell:
      - place-self: center
      - width: 14px
      - height: 24px
    label:
      - padding: 2px
      - justify-self: start
      - align-self: center
      - font-weight: bolder
      - font-size: 12px
      - margin-left: 0px
      - filter: opacity(40%)
```

</details>

<details>
<summary>Template name: <i>list_items</i></summary>

```yaml
list_items:
  styles:
    card:
      - box-shadow: none
      - padding: 0px
    grid:
      - grid-template-areas: '"item1 item2 item3"'
      - grid-template-columns: 1fr 1fr 1fr
      - grid-template-rows: min-content
      - column-gap: 7px
```

</details>

<details>
<summary>Template name: <i>list_items_line</i></summary>

```yaml
list_items_line:
  styles:
    card:
      - box-shadow: none
      - padding: 0px
    grid:
      - grid-template-areas: '"item1 item2 item3"'
      - grid-template-columns: max-content max-content max-content
      - grid-template-rows: min-content
      - column-gap: 8px
```

</details>

<details>
<summary>Template name: <i>widget_icon</i></summary>

```yaml
widget_icon:
  tap_action:
    action: toggle
  color: var(--google-grey)
  show_icon: true
  show_name: false
  size: 20px
  styles:
    card:
      - box-shadow: none
      - padding: 0px
      - background-color: 'rgba(var(--color-theme),0.05)'
      - border-radius: 14px
      - place-self: center
      - height: 42px
    grid:
      - grid-template-areas: '"i"'
    icon:
      - color: 'rgba(var(--color-theme),0.9)'
```

</details>
