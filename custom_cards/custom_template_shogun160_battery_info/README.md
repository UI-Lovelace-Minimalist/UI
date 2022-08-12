---
title: Custom Tempalte Battery Info
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom Template "Battery Info"

![example_batter_info_template](ui_minimalist_battery_info_example.png)

## Credits

- Full credit to user [basbruss](https://github.com/basbruss), who created the design and base of it in his person card

## Description

This is an template to add the battery level to every ui minimalist card

## Variables

| Variable                                     | Default | Required | Notes                                                                    |
| -------------------------------------------- | ------- | -------- | ------------------------------------------------------------------------ |
| ulm_battery_entity                           |         | No       | The entity to represent the battery_level

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
