---
title: Custom Template Battery Info
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom Template "Battery Info"

<img width="249" alt="ui_minimalist_battery_info_example" src="https://user-images.githubusercontent.com/63370033/184395981-7fce5840-aa76-453d-8756-39b15e36d26c.png">

## Credits

- Full credit to user [basbruss](https://github.com/basbruss), who created the design and base of it in his person card

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Description

This is an template to add the battery level to every ui minimalist card

## Variables

| Variable           | Default | Required | Notes                                     |
| ------------------ | ------- | -------- | ----------------------------------------- |
| ulm_battery_entity |         | No       | The entity to represent the battery_level |

## Usage with battery or battery_level attribute from entity

```yaml

- type: 'custom:button-card'
    template:
      - card_binary_sensor
      - battery_info
    entity: binary_sensor.badezimmer_tuer_contact
    variables:
      ulm_show_last_changed: false

```

## Usage with variable ulm_battery_entity

```yaml

- type: 'custom:button-card'
    template:
      - card_binary_sensor
      - battery_info
    entity: binary_sensor.badezimmer_tuer_contact
    variables:
      ulm_show_last_changed: false
      ulm_battery_entity: sensor.badezimmer_tuer_battery_level

```
