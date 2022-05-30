---
title: Custom Card Room
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

# Custom Card "Room"

![example-image-light](../../docs/assets/img/custom_card_esh_room_light.png)
![example-image-dark](../../docs/assets/img/custom_card_esh_room_dark.png)

## Credits

- Author: Everything Smart Home - 2022
- Full credit to user [bms on the forum](https://community.home-assistant.io/t/lovelace-ui-minimalist/322687/192), they created it in full, I just put it into a PR as the basis
- beasthouse and basbruss on the EverythingSmartHome discord channel for emoji/humidity customization
- Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Description

This is an alternative room card to the standard one that is more rectangular than square.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity   |         | Yes | The light entity to control |
| Name   |         | Yes | Name of the room to display |
| icon  |    | Yes | The icon to show |
| tap_action  |      | Yes | The action to perform when tapping |
| label  |      | Yes | The label to display information, this can be a template that returns a temperature or static text |

## Usage

```yaml
  - type: 'custom:button-card'
    template:
      - card_esh_room
      - yellow_on
    name: Bathroom
    entity: light.bathroom_lights
    icon: mdi:bathtub
    tap_action:
      action: navigate
      navigation_path: 'bathroom'
    label: '[[[ return states["sensor.room_temperature"].state + "°C" ]]]'
```

## Customizations

To add both temperature and humidity (as shown below) to the card, replace the label section with this code:
![image](https://user-images.githubusercontent.com/51805396/170957237-4025b2c0-2532-49e6-a908-d45c1f7a0728.png)

```yaml
label: >
  [[[
    return "🌡️ " + states['sensor.temperature'].state + " °C" + " 💧 " + states['sensor.humidity'].state + " %"
  ]]]
```

You can also replace 🌡️ and 💧 with any desired Emoji, and sensor.room_temperature/sensor.room_humidity to match any of your HA entities you would like to be displayed. Ensure that the correct units of measurement are also updated (or removed) to match your custom entities. In this example they are °C and %.

## Template code

```yaml
---
card_esh_room:
  tap_action:
    action: "more-info"
  color: "var(--google-grey-500)"
  show_icon: true
  show_name: true
  show_label: true
  size: "20px"
  label: >-
    [[[
        if (entity.state !="unavailable"){
          if (entity.state =="off"){
            var bri = Math.round(entity.attributes.brightness / 2.55);
            return "Off";
          }else{
            var bri = Math.round(entity.attributes.brightness / 2.55);
            return (bri ? bri : "0") + "%";
          }
        }else{
          return "Unavailable";
        }
    ]]]
  styles:
    card:
      - border-radius: "20px"
      - box-shadow: "var(--box-shadow)"
      - padding: "12px"
    grid:
      - grid-template-areas: "'i toggle' 'n n' 'l l'"
      - grid-template-columns: "1fr 1fr"
      - grid-template-rows: "min-content"
    icon:
      - color: "rgba(var(--color-theme),0.2)"
    img_cell:
      - background-color: "rgba(var(--color-theme),0.05)"
      - border-radius: "50%"
      - place-self: "center"
      - width: "42px"
      - height: "42px"
    name:
      - align-self: "end"
      - justify-self: "start"
      - font-weight: "bold"
      - font-size: "14px"
      - margin-left: "12px"
      - margin-top: "12px"
    label:
      - justify-self: "start"
      - align-self: "start"
      - font-weight: "bolder"
      - font-size: "12px"
      - filter: "opacity(40%)"
      - margin-left: "12px"
    state:
      - justify-self: "start"
      - align-self: "start"
      - font-weight: "bolder"
      - font-size: "12px"
      - filter: "opacity(40%)"
      - margin-left: "12px"
  custom_fields:
    toggle:
      card:
        entity: "[[[ return entity.entity_id ]]]"
        name: "[[[ return name ]]]"
        state:
          - value: "on"
            icon: "mdi:lightbulb"
            styles:
              icon:
                - color: "rgba(var(--color-yellow),1)"
              img_cell:
                - background-color: "rgba(var(--color-yellow), 0.2)"
          - value: "off"
            icon: "mdi:lightbulb-off"
        tap_action:
          action: "toggle"
        type: "custom:button-card"
        template: "widget_icon"
```
