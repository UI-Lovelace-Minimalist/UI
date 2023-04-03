---
title: Alarm Time Custom-card
---

<!-- markdownlint-disable MD046 -->

# Custom-card "Alarm Time Card"

The `card_alarm_time` you can control a input_datetime entity and a boolean.
This card is useful for setting alarms (e.g. wakeup alarm), as you can modify the time and toggle the state of the alarm from one card.

## Credits

Author: benbur - 2023
Version: 1.0.0

This is built largely on top of the original Input_Datetime Card:
Author: sildehoop - 2022
Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial Release
</details>

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
<td>ulm_card_alarm_time_name</td>
<td>'Morning Alarm'</td>
<td>no</td>
<td></td>
<td>Set Custom Name</td>
</tr>
<tr>
<td>ulm_card_alarm_time_icon</td>
<td>'mdi:alarm'</td>
<td>no</td>
<td></td>
<td>Set Custom Icon</td>
</tr>
<tr>
<td>ulm_card_alarm_time_color</td>
<td>'green'</td>
<td>no</td>
<td>'blue'</td>
<td>Set Custom Color for Card Elements</td>
</tr>
<tr>
<td>ulm_card_alarm_time_force_background_color</td>
<td>true</td>
<td>no</td>
<td>false</td>
<td>Force Background Color in Light Mode/td>
</tr>
<tr>
<td>ulm_card_alarm_time_collapse</td>
<td>true</td>
<td>no</td>
<td>false</td>
<td>Make card collapsible when off</td>
</tr>
<tr>
<td>ulm_card_alarm_time_horizontal</td>
<td>true</td>
<td>no</td>
<td>false</td>
<td>Horizontal Mode for the Card</td>
</tr>
<tr>
<td>ulm_card_alarm_time_step</td>
<td>'30'</td>
<td>no</td>
<td>15</td>
<td>Set Adjust Time (minutes)</td>
</tr>
</table>

## Usage

```yaml
- type: "custom:button-card"
  template: card_alarm_time
  entity: input_boolean.morning_alarm_toggle
  variables:
    ulm_card_alarm_time_datetime: input_datetime.morning_alarm_time
    ulm_card_alarm_time_horizontal: true
    ulm_card_alarm_time_collapse: true
```

## Requirements

Input DateTime Helper
Input Boolean

## Template code

??? note "Template Code"

    ```yaml title="custom_card_alarm_time.yaml"
    --8<-- "custom_cards/custom_card_alarm_time/card_alarm_time.yaml"
    ```
