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

| Variable   | Default | Required | Notes                                                                                              |
| ---------- | ------- | -------- | -------------------------------------------------------------------------------------------------- |
| entity     |         | Yes      | The light entity to control                                                                        |
| Name       |         | Yes      | Name of the room to display                                                                        |
| icon       |         | Yes      | The icon to show                                                                                   |
| tap_action |         | Yes      | The action to perform when tapping                                                                 |
| label      |         | Yes      | The label to display information, this can be a template that returns a temperature or static text |

## Usage

```yaml
- type: "custom:button-card"
  template:
    - card_esh_room
    - yellow_on
  name: Bathroom
  entity: light.bathroom_lights
  icon: mdi:bathtub
  tap_action:
    action: navigate
    navigation_path: "bathroom"
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

??? note "Template Code"

    ```yaml title="custom_card_esh_room.yaml"
    --8<-- "custom_cards/custom_card_esh_room/custom_card_esh_room.yaml"
    ```
