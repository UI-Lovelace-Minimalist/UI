# UI-Lovelace-Minimalist  
It's kind of hard to explain what this is, but one thing is for sure, it is very nice! Taking the exceptional work of tben as a basis, this repository is aimed to ease installation and maintainance of his wonderful work. You can use this interpretation of SmartHomeUI just like a theme in HomeAssistant. 

<img src="https://user-images.githubusercontent.com/12232620/127769479-a8d2a117-7c1d-49f1-a8a2-6e3d51a4672c.png" width="200"> <img src="https://user-images.githubusercontent.com/12232620/127769475-01b39e04-065f-4ea4-adb0-39bc5e9aa39c.png" width="200"> <img src="https://user-images.githubusercontent.com/12232620/127769477-4010a487-927f-479a-8596-2bf19a9a4299.png" width="200"> <img src="https://user-images.githubusercontent.com/12232620/127769478-229d04d9-db00-4b78-b14b-dcd91f7ff463.png" width="200">

## Table of Contents  
* [Credits](#credits)
* [Design system](#design-system)
* [Installation](#installation)
* [Chips](#chips)
* [Title](#title)
* [Vertical buttons](#vertical-buttons)
* [Cards](#cards)
* [Color scheme](#color-scheme)
* [Icons](#icons)
* [Notes](#notes)

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

## Installation  

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
   <td><a href="https://github.com/AnthonMS/ha-slider-card">ha-slider-card</a></td>
   <td>no</td>
   <td>light_slider</td>
   <td><a href="#ha-slider-card">find the note here</a></td>
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

## Chips  
This is the general definition for our `chips`. You won't need this in your view(s). Choose a specific `chips` definition from below, like `chips_temperature`.

![Chips](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/chips.png)

<details>
<summary>Template code</summary>

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

### Chip - temperature  
This `chip` is to display a weather icon together with the outside and inside temperature.

![Chip - temperature](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/chips_temperature.png)

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

![Chips - return](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/chips_return.png)

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
<td>tap_action</td>
<td>see example code below</td>
<td>yes</td>
<td>Set the navigation path to your default view, eg. <i>ui-lovelace-minimalist/home</i> or <i>lovelace</i></td>
</tr>
</table>

#### Example

```yaml
- type: 'custom:button-card'
  template: chips_back
  tap_action:
    action: navigate
    navigation_path: /ui-lovelace-minimalist/home
```

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

![Chips - Present](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/chips_localisation_present.png)

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

![Chips - Consommation](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/power_consumption.png)

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

![Title](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/title.png)

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

<span style="color: blue">@dev All entries from here downwards are not changed yet</span><br />
<span style="color: blue">@dev START unchanged part</span>

## Vertical buttons  
+++

![Scene](https://user-images.githubusercontent.com/12232620/127768397-24ab76fc-b037-4fc5-a2ef-45e96285cd46.gif)

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
  label: |
    [[[ return (entity.attributes.value )]]]
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
      value: >
        [[[
          return states['input_select.localisation_thomas'].state == variables.state
        ]]]
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
![Cards](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/cards.png)

### Anatomy  
![Anatomy](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/anatomy.png)
1. **Dot** : Visible when the device is unavailable. Also used on the entity **person**
2. **Icon** : Icon that represents the device
3. **Primary line** : Main information
4. **Secondary line** : Secondary information
5. **Optionnal part** : Possibility to display buttons to launch actions related to the device. Or display a graph to view the history of a sensor


### Light  
![Light](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/light.png) 
<details><summary>Code</summary>
<table>
<tr>
<th> Example </th>
<th> Template </th>
</tr>
<tr>
<td VALIGN=TOP>

```yaml
- entity: light.example
  name: Lumière
  template: 
    - icon_info_bg
    - light
  type: 'custom:button-card'
```

</td>
<td VALIGN=TOP>

```yaml
light:
  tap_action:
    action: toggle
  hold_action:
    action: more-info
  label: >-
    [[[ if (entity.state !='unavailable'){
          if (entity.state =='off'){
            var bri = Math.round(entity.attributes.brightness / 2.55);
            return 'Off';  
          }else{
            var bri = Math.round(entity.attributes.brightness / 2.55);
            return (bri ? bri : '0') + '%'; 
          }
        }else{
          return "Indisponible";
        }
    ]]]
  template: 
    - yellow
```

</td>
</tr>
</table>
</details>

### Light slider  
![Light-slider](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/light_slider.png) 
<details><summary>Code</summary>
<table>
<tr>
<th> Example </th>
<th> Template </th>
</tr>
<tr>
<td VALIGN=TOP>

```yaml
  - entity: light.exemple
    template: 
      - light_slider
    variables:
      entity: "light.exemple"
      name: "Light"
    type: 'custom:button-card'
```

</td>
<td VALIGN=TOP>

```yaml
  light_slider:
    variables:
      name: "Default name"
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
          entity: '[[[ return variables.entity ]]]'
          name: '[[[ return variables.name ]]]'
          template:
            - icon_info
            - light
          type: 'custom:button-card'
      item2:
        card:
          type: 'custom:slider-card'
          entity: '[[[ return variables.entity ]]]'
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

</td>
</tr>
</table>
</details>

### Outlet  
![Prise](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/outlet.png)
<details><summary>Code</summary>
<table>
<tr>
<th> Example </th>
<th> Template </th>
</tr>
<tr>
<td VALIGN=TOP>

```yaml
- entity: switch.exemple
  name: Prise
  template: 
    - icon_info_bg
    - outlet
  label: |-
      [[[ if (entity.state =='on')
          var etat = "On • " + states["sensor.exemple"].state + "W"; 
          else
        var etat = "Off";
      return etat ; ]]]
  type: 'custom:button-card'
```

</td>
<td VALIGN=TOP>

```yaml
  outlet:
    tap_action:
      action: more-info
    label: |-
      [[[ if (entity.state =='on')
         var etat = "On";
         else
        var etat = "Off";
      return etat ; ]]]
    template: 
      - yellow
```

</td>
</tr>
</table>
</details>

### Binary sensor  
![Mouvements](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/binary_sensor-1.png) ![Fenêtres](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/binary_sensor-2.png)
<details><summary>Code</summary>
<table>
<tr>
<th> Example </th>
<th> Template </th>
</tr>
<tr>
<td VALIGN=TOP>

```yaml
- entity: binary_sensor.example
  name: Mouvement
  icon: 'mdi:run'
  template: 
    - icon_info_bg
    - binary_sensor
  type: 'custom:button-card'
```

</td>
<td VALIGN=TOP>

```yaml
binary_sensor:
  show_last_changed: true
  template: 
    - blue
```

</td>
</tr>
</table>
</details>


### Cover  
![Volets](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/cover_buttons.png)
<details><summary>Code</summary>
<table>
<tr>
<th> Example </th>
<th> Template </th>
</tr>
<tr>
<td VALIGN=TOP>

```yaml
- template: cover_buttons
  variables:
    entity: "cover.example"
    name: "Volets"
  type: 'custom:button-card'
```

</td>
<td>

```yaml
cover_buttons:
  variables:
    entity: "cover.fibaro_cover_balcon"
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
        entity: '[[[ return variables.entity ]]]'
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
                  entity_id: '[[[ return variables.entity ]]]'
              type: 'custom:button-card'
              template: widget_icon
          item2:
            card:
              icon: 'mdi:pause'
              tap_action:
                action: call-service
                service: cover.stop_cover
                service_data:
                  entity_id: '[[[ return variables.entity ]]]'
              type: 'custom:button-card'
              template: widget_icon
          item3:
            card:
              icon: 'mdi:arrow-up'
              tap_action:
                action: call-service
                service: cover.open_cover
                service_data:
                  entity_id: '[[[ return variables.entity ]]]'
              type: 'custom:button-card'
              template: widget_icon
```

</td>
</tr>
</table>
</details>

### Thermostat  
![Thermostat](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/thermostat.png)
<details><summary>Code</summary>
<table>
<tr>
<th> Example </th>
<th> Template </th>
</tr>
<tr>
<td VALIGN=TOP>

```yaml
- entity: climate.example
  template: 
    - icon_info_bg
    - thermostat
  type: 'custom:button-card'
```

</td>
<td VALIGN=TOP>

```yaml
thermostat:
  hold_action:
    action: more-info
    entity: input_boolean.radiateur_arret_force
  label: >-
    [[[ 
        if (entity.state =='off'){
          return 'Off' ;
        }else{
          if (states['light.qubino'].state == 'on'){
            var etat = "Chauffe";
          }else{
            var etat = "Inactif";
          }
          return (entity.attributes.temperature ) + '°' + ' • ' + etat ;
        }
    ]]]
  state:
    - operator: template
      value: >
        [[[
          return states['light.qubino'].state == 'on'
        ]]]
      styles:
        icon:
          - color: 'rgba(var(--color-red),1)'
        img_cell:
          - background-color: 'rgba(var(--color-red),0.2)'
        card:
          - background-color: 'rgba(var(--color-background-red),var(--opacity-bg))'
        name:
          - color: 'rgba(var(--color-red-text),1)'
        label:
          - color: 'rgba(var(--color-red-text),1)'
```

</td>
</tr>
</table>
</details>

### Water heater  
![Chauffe-eau](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/water-heater.png)
<details><summary>Code</summary>
<table>
<tr>
<th> Example </th>
<th> Template </th>
</tr>
<tr>
<td VALIGN=TOP>

```yaml
- entity: switch.example
  name: Chauffe eau
  template: 
    - icon_info_bg
    - water_heater
  type: 'custom:button-card'
```

</td>
<td VALIGN=TOP>

```yaml
water_heater:
  icon: 'mdi:waves'
  tap_action:
    action: more-info
  hold_action:
    action: more-info
  label: >-
    [[[ 
        if (entity.state == 'off'){
          return 'Arrêt forcé';
        }else{
          if (states["sensor.shelly_prise_salon_conso"].state > 0){
            var etat = "Chauffe • " + states["sensor.shelly_prise_salon_conso"].state + "W";
          }else{
            var etat = "Inactif";
          }
          return etat ;
        }
    ]]]
  state:
    - operator: template
      value: >
        [[[
          return (states['sensor.shelly_prise_salon_conso'].state > 0)
        ]]]
      styles:
        icon:
          - color: 'rgba(var(--color-red),1)'
        img_cell:
          - background-color: 'rgba(var(--color-red),0.2)'
        card:
          - background-color: 'rgba(var(--color-background-red),var(--opacity-bg))'
        name:
          - color: 'rgba(var(--color-red-text),1)'
        label:
          - color: 'rgba(var(--color-red-text),1)'
```

</td>
</tr>
</table>
</details>

### Media player  
![Enceintes](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/media.png)
<details><summary>Code</summary>
<table>
<tr>
<th> Example </th>
<th> Template </th>
</tr>
<tr>
<td VALIGN=TOP>

```yaml
- entity: media_player.example
  name: Enceintes
  template: 
    - icon_info_bg
    - media
  type: 'custom:button-card'
```

</td>
<td VALIGN=TOP>

```yaml
  media:
    label: >-
      [[[ if (entity.state =='off'){
            return "Off";
          }else{
            return entity.state;
          }
      ]]]
    icon: |
      [[[
          var application = entity.attributes.app_name;
          var icon = 'mdi:speaker';
          if (application == 'Oto music'){
            var icon = 'mdi:music-circle';
          } else if(application == 'Spotify'){
            var icon = 'mdi:spotify';
          } else if(application == 'Google Podcasts'){
            var icon = 'mdi:google-podcast';
          } else if(application == 'Plex'){
            var icon = 'mdi:plex';
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
        - background: >
            [[[
              var image = entity.attributes.entity_picture_local;
              var bg = entity.attributes.entity_picture_local;
              if (image == null){
                var bg = '';
              } else{
                var bg = 'center / cover url(' + image + ') rgba(0, 0, 0, 0.15)';
              }
              return bg;
            ]]]
    state:
      - operator: template
        value: >
          [[[
            return entity.state !='off'
          ]]]
        name: >
            [[[
              return entity.attributes.media_title;
            ]]]
        label: >
            [[[
              return entity.attributes.media_album_name;
            ]]]
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

</td>
</tr>
</table>
</details>

### Playstation  
![Playstation](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/playstation.png)
<details><summary>Code</summary>
<table>
<tr>
<th> Example </th>
<th> Template </th>
</tr>
<tr>
<td VALIGN=TOP>

```yaml
- entity: media_player.example
  template: 
    - icon_info_bg
    - ps4
  type: 'custom:button-card'
```

</td>
<td VALIGN=TOP>

```yaml
ps4:
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

</td>
</tr>
</table>
</details>

### Person  
![Personne](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/person.png)
<details><summary>Information</summary>
    
**Dot** : 
- At home : Blue
- Away : Green 


**Dot icon** :
- At home : Home
- Away : Walking man
- Sleeping : Moon

**Comment** : The sleep state takes over the At home or Away state to display the moon icon
</details>
<details><summary>Code</summary>
<table>
<tr>
<th> Example </th>
<th> Template </th>
</tr>
<tr>
<td VALIGN=TOP>

```yaml
- entity: input_select.localisation_thomas
  variables:
    personne: "thomas"
  template: 
    - icon_info_bg
    - personne-thomas
  name: Thomas
  type: 'custom:button-card'
```

</td>
<td VALIGN=TOP>

```yaml
person:
  tap_action:
    action: more-info
  show_label: true
  label: >
      [[[return entity.state]]]
  styles:
    icon:
      - color: 'rgba(var(--color-theme),0.9)'
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
 
person-thomas:
  variables:
    person: "thomas"
  template: person
  hold_action:
    action: more-info
    entity: input_boolean.thomas_nuit
  styles:
    custom_fields:
      notification:
        - background-color: >
            [[[
              if (states['input_select.localisation_thomas'].state == 'Present'){
                return "rgba(var(--color-blue),1)";
              }else{
                return "rgba(var(--color-green),1)";
              }
            ]]]
  custom_fields:
    notification: >
      [[[
        if (states['input_boolean.thomas_nuit'].state == 'on'){
          return `<ha-icon icon="mdi:power-sleep" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>`
        }else{
          if (states['input_select.localisation_thomas'].state == 'Present'){
            return `<ha-icon icon="mdi:home-variant" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>`
          }else{
            return `<ha-icon icon="mdi:pine-tree" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>`
          }
        }
      ]]]
```

</td>
</tr>
</table>
</details>

### Generic  
![Generic](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/generic.png)
<details><summary>Code</summary>
<table>
<tr>
<th> Example </th>
<th> Template </th>
</tr>
<tr>
<td VALIGN=TOP>

```yaml
- entity: sensor.example
  template: 
    - icon_info_bg
    - generic
  type: 'custom:button-card'
```

</td>
<td VALIGN=TOP>

```yaml
generic:
  label: >
      [[[return entity.state + " " + entity.attributes.unit_of_measurement]]]
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

</td>
</tr>
</table>
</details>

### Generic + graph  
![Entity - graph](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/entity_graph.png)
<details><summary>Code</summary>
<table>
<tr>
<th> Example </th>
<th> Template </th>
</tr>
<tr>
<td VALIGN=TOP>

```yaml
- type: 'custom:button-card'
  template: graph
  variables:
    entity: "sensor.exemple"
    color: "var(--google-blue)"
    name: "Température"
```

</td>
<td VALIGN=TOP>

```yaml
graph:
  variables:
    entity: "sensor.xiaomi_multisensor_salon_humidite"
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
        entity: '[[[ return variables.entity ]]]'
        name: '[[[ return variables.name ]]]'
        template: 
          - icon_info
          - generic
        styles:
          card:
            - padding: 12px
        type: 'custom:button-card'
    item2:
      card:
        type: 'custom:mini-graph-card'
        entities:
          - entity: '[[[ return variables.entity ]]]'
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

</td>
</tr>
</table>
</details>

<span style="color: blue">@dev END unchanged part</span>

## Color scheme  
I tried to set up a consistency between the colors used to represent the entities.
|Color|Type|
|---|---|
|![Orange](https://user-images.githubusercontent.com/12232620/127771417-73385ee2-8c31-47a4-8438-472826184ea1.png)|💡 Light<br />⚡ Electricity|
|![Red](https://user-images.githubusercontent.com/12232620/127771470-38b1eba2-fc8a-41a8-a1fa-5fa249619af6.png)|🔥 Heating|
|![Blue](https://user-images.githubusercontent.com/12232620/127771485-615cf15e-d7fe-4528-8ccb-db3c307c3428.png)|☑️ On/off devices<br />🏠 Home|
|![Green](https://user-images.githubusercontent.com/12232620/127771492-1abcd92b-8261-45e6-bdfb-d7987dcb6c76.png)|🌲 Exterior|

## Icons  
This "theme" uses, in contrast to HomeAssistant, the standard unicode emojis for the `chips`. The main reason is, they are multi-color whereas the `mdi-icons` that HomeAssistant uses are one color only. These emojis are *only used on the `chips`, all other cards or buttons use the standard `mdi-icons`*, which you can find here: [https://materialdesignicons.com/](https://materialdesignicons.com/) 

Using emojis is easy:
* Go to this Github page, where you find a complete list of all unicode emojis: [https://github.com/ikatyang/emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet)
* Select the emoji you want and copy it ("CTRL + C" or right-click "copy")
* Go to your view and paste the icon

> There are a lot of emojis on that page, so we suggest you use the browser integrated search by pressing "CTRL + F" and type in your query like "heart". 

## Notes  
* <a name="legacy-templates"></a>Legacy templates  
  As this is a major re-write of the originally created templates, we tried to leave legacy templates in place, so you can easily adjust your code over time. These legacy templates work by using the *old* naming and forwarding these to the *new* functions, that have a new name. Eg. if you previously used `chips_back` for your **back** button, the new code works with **return** button. You can still use your code, as we forward this to the new style like this:

  ```yaml
  chips_return:
    template: chips_back
  ```

* <a name="ha-slider-card"></a>ha-slider-card  
If you want to use `ha-slider-card`, please take note, that this card **only** functions, if you are connected to the internet! This card loads a few files from `unpkg.com`. If you want to stay local only, you can't use this card. 