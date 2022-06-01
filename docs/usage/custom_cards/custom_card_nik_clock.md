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

- To have all the Minimalist Card and Custom Cards installed

## Usage

```yaml
- type: "custom:button-card"
  template: custom_card_nik_clock
  variables:
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
    ulm_custom_card_nik_clock_switch: "[[[ return variables.ulm_custom_card_nik_clock_switch ]]]"
    ulm_custom_card_nik_clock_switch_enable: false
  show_icon: false
  show_name: true
  show_state: false
  show_label: true
  name: >
    [[[
      const time = new Date();
      let hour = time.getHours();
      let minute = (time.getMinutes()<10?'0':'') + time.getMinutes()
      return hour + ":" + minute;
    ]]]
  layout: "vertical"
  label: >
    [[[
      const event = new Date();
      const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      var locale = variables.ulm_language;
      let formatted_date = event.toLocaleDateString(locale, options);
      return formatted_date;
    ]]]
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
    name:
      - font-size: "290%"
      - font-weight: "bold"
      - justify-self: "center"
    label:
      - justify-self: "center"
      - font-size: "110%"
```
