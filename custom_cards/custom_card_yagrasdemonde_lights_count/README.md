---
title: Counter Lights/Covers Card Custom-card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom-card "Counter Lights/Cover Card"

This is a `custom-card` to display number of lights on or covers open.

![Screenshot light mode](../../docs/assets/img/screenshot_light_count_lights.png)
![Screenshot dark mode](../../docs/assets/img/screenshot_dark_count_lights.png)

## Credits

Author: yagrasdemonde - 04/2022

Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release.
</details>

## Requirements

This card needs sensor counting lights/covers you want:

```yaml
template:
  - sensor:
      - name: "lights on"
        unique_id: lights_on
        icon: mdi:lightbulb-on-outline
        state: >
          {% set lights = [
              states.light.living_room,
              states.light.bedroom,
              states.light.bathroom,
              states.switch.kitchen,
              ] %}
          {{ lights | selectattr('state','eq','on') | list | count }}
      - name: "covers open"
        unique_id: covers_open
        icon: mdi:window-shutter-open
        state: >
          {% set covers = [
              states.cover.bedroom,
              states.cover.livingroom1,
              states.cover.livingroom2,
              ] %}
          {{ covers | selectattr('state','eq','open') | list | count }}
```

## Usage

For lights

```yaml
- type: "custom:button-card"
  template: custom_card_yagrasdemonde_lights_count
  entity: sensor.lights_on
```

For covers

```yaml
- type: "custom:button-card"
  template: custom_card_yagrasdemonde_lights_count
  entity: sensor.covers_open
  variables:
    ulm_custom_card_yagrasdemonde_lights_count_type: "cover"
    ulm_custom_card_yagrasdemonde_lights_count_icon_off: "mdi:window-shutter"
    ulm_custom_card_yagrasdemonde_lights_count_color: "blue"
```

## Variables

<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Default</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_custom_card_yagrasdemonde_lights_count_type</td>
<td>"cover"</td>
<td>No</td>
<td>"light"</td>
<td>The entity type used for translations<br>Values available : cover, light</td>
</tr>
<tr>
<td>ulm_custom_card_yagrasdemonde_lights_count_icon_on</td>
<td>"mdi:lightbulb-on-outline"</td>
<td>No</td>
<td>Sensor Icon</td>
<td>Overwrites the sensor icon used for on/open state</td>
</tr>
<tr>
<td>ulm_custom_card_yagrasdemonde_lights_count_icon_off</td>
<td>"mdi:lightbulb-outline"</td>
<td>No</td>
<td>"mdi:lightbulb-outline"</td>
<td>Icon for state off/closed</td>
</tr>
<tr>
<td>ulm_custom_card_yagrasdemonde_lights_count_color</td>
<td>"red"</td>
<td>No</td>
<td>"yellow"</td>
<td>Style the color of icon, name and card (if applicable)<br>Values available : blue, green, grey, pink, purple, red, yellow</td>
</tr>
<tr>
<td>ulm_custom_card_yagrasdemonde_lights_count_force_background_color</td>
<td>true</td>
<td>No</td>
<td>false</td>
<td>Force background card color even in light mode</td>
</tr>
</table>

??? note "Template Code"

    ```yaml title="custom_card_yagrasdemonde_lights_count.yaml"
    --8<-- "custom_cards/custom_card_yagrasdemonde_lights_count/custom_card_yagrasdemonde_lights_count.yaml"
    ```
