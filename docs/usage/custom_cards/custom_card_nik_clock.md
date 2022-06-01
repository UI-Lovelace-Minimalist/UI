---
title: Tablet Clock Card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

# Custom-card "Tablet clock Card"

This is a `custom-card` that shows the currenct time and Date. This is designed for a tablet or big monitor.

![Screenshot](../../assets/img/custom_card_nik_clock.png)

## Credits

Author: Nik - 2022 Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Requirements

- To have setup the "sensor.time" in Home Assistant
- To have setup the custom sensor "sensor.pretty_date"

## Usage

```yaml
- type: "custom:button-card"
  template: custom_card_nik_clock
  variables:
    ulm_custom_card_nik_clock_label: sensor.pretty_date
    ulm_custom_card_nik_clock_switch: input_boolean.menu_tablet
    ulm_custom_card_nik_clock_switch_enable: false
```

## Variables

<table>
<thead>
  <tr>
    <th>Variable</th>
    <th>Example</th>
    <th>Required</th>
    <th>Explanation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>ulm_custom_card_nik_clock_label</td>
    <td>sensor.pretty_date</td>
    <td>Yes</td>
    <td>See template sensor details</td>
  </tr>
  <tr>
    <td>ulm_custom_card_nik_clock_switch</td>
    <td>lock.input_boolean.menu_tablet</td>
    <td>no</td>
    <td>This is an optional hidden switch to combine with a state-switch card to use some additional logics.</td>
  </tr>
  <tr>
    <td>ulm_custom_card_nik_clock_switch_enable</td>
    <td>true / false</td>
    <td>no</td>
    <td>Default is false. It enables the options above.</td>
  </tr>
</tbody>
</table>

## Template Sensor Code

```yaml
---
custom_card_nik_clock:
  template:
    - "ulm_language_variables"
  variables:
    ulm_custom_card_nik_clock_label: "[[[ return variables.ulm_custom_card_nik_clock_label ]]]"
    ulm_custom_card_nik_clock_switch: "[[[ return variables.ulm_custom_card_nik_clock_switch ]]]"
    ulm_custom_card_nik_clock_switch_enable: false
  show_icon: false
  show_name: false
  show_state: true
  show_label: true
  entity: "sensor.time"
  layout: "vertical"
  label: "[[[ return states[variables.ulm_custom_card_nik_clock_label].state; ]]]"
  tap_action:
    action: >
      [[[
          if (variables.ulm_custom_card_nik_clock_switch_enable){
            return 'call-service'
          }
          else{
            return 'none'
          }
      ]]]
    service: "input_boolean.toggle"
    service_data:
      entity_id: "[[[ return variables.ulm_custom_card_nik_clock_switch ]]]"
  styles:
    card:
      - background-color: "transparent"
      - height: "100px"
      - box-shadow: "none"
    state:
      - font-size: "290%"
      - font-weight: "bold"
      - justify-self: "center"
    label:
      - justify-self: "center"
      - font-size: "110%"
```

## Template Code

```yaml
---
- platform: template
  sensors:
    pretty_date:
      friendly_name: Data di oggi
      value_template: >-
        {% set today = states("sensor.date") %}
        {% set arr_week_days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"] %}
        {% set arr_months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"] %}
        {% set week_day = as_timestamp(today) | timestamp_custom('%w') | int %}
        {% set day = as_timestamp(today) | timestamp_custom('%d') %}
        {% set month = as_timestamp(today) | timestamp_custom('%m') | int %}
        {% set year = as_timestamp(today) | timestamp_custom('%Y') | int %}
        {{ arr_week_days[week_day] }}, {{ day }} {{ arr_months[month-1] }} {{ year }}
```
