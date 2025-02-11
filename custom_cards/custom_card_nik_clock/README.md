---
title: Tablet Clock Card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom-card "Tablet clock Card"

This is a `custom-card` that shows the current time and Date. This is designed for a tablet or big monitor.

![Screenshot](../../docs/assets/img/custom_card_nik_clock.png)

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

??? note "Template Code"

    ```yaml title="custom_card_irmajavi_weather.yaml"
    --8<-- "custom_cards/custom_card_nik_clock/custom_card_nik_clock.yaml"
    ```
