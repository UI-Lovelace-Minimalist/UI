---
title: Waste Collection Custom-card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

# Custom-card "Waste collection"

This is a `custom-card` to show the next waste collection date. It uses the data from the `custom_component` "Waste Collection Framework".

## Credits

Author: Paddy0174 - 2021
Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Usage

```yaml
- type: custom:button-card
  template:
    - custom_card_paddy_waste_collection
  entity: sensor.waste_collection_paper
```

## Requirements

This card needs the following to function correctly:
<table>
<tr>
<th>Component / card</th>
<th>required</th>
<th>Link</th>
</tr>
<tr>
<td>Waste Collection Schedule Framework</td>
<td>yes</td>
<td><a href="https://github.com/mampfes/hacs_waste_collection_schedule">more info</a></td>
</tr>
</table>

## Variables

<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>entity</td>
<td>sensor.waste_collection_paper</td>
<td>yes</td>
<td>Your waste collection sensor. See <a href="#homeassistant">HA example</a> on how to configure.</td>
</tr>
</table>

## Template code

```yaml
custom_card_paddy_waste_collection:
  template:
    - card_generic_swap
  state:
    - operator: template
      value: "[[[ return states[entity.entity_id].attributes.daysTo == 0; ]]]"
      styles:
        img_cell:
          - background-color: 'rgba(var(--color-red),0.5)'
        icon:
          - color: 'rgba(var(--color-red),1)'
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
    - operator: template
      value: "[[[ return states[entity.entity_id].attributes.daysTo == 1; ]]]"
      styles:
        img_cell:
          - background-color: 'rgba(var(--color-red),0.05)'
        icon:
          - color: 'rgba(var(--color-red),1)'
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
    - value: 'unavailable'
      styles:
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
  custom_fields:
    notification: >
      [[[
        if (entity.state == 'unavailable' || states[entity.entity_id].attributes.daysTo == 0 || states[entity.entity_id].attributes.daysTo == 1){
          return `<ha-icon icon="mdi:exclamation" style="width: 12px; height: 12px; color: var(--primary-background-color);"></ha-icon>`
        }
      ]]]
```

## HomeAssistant

This is my `sensor` setup in HA. I do the change from "days" to "friendly days" in my template sensor.

> #### Note
>
> - Don't forget to set `add_days_to` in your `sensor` config
> - "HEUTE" is german for today or aujourd'hui
> - "MORGEN" is german for tomorrow or demain

```yaml
sensor:
  - platform: waste_collection_schedule
    name: waste_collection_paper
    details_format: upcoming
    add_days_to: true # this line is important
    value_template:  >-
      {% if value.daysTo == 0 %}
      HEUTE
      {% elif value.daysTo == 1 %}
      MORGEN
      {% else %}
      in {{value.daysTo}} Tagen
      {% endif %}
    types:
      - Papiertonne
```

## Notes

n/a
