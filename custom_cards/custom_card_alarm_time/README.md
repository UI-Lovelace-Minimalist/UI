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
Original Input_Datetime Card:
  Author: sildehoop - 2022
  Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial Release
</details>

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
