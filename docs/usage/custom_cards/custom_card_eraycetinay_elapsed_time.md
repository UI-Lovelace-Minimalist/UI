---
title: Elapsed Time Custom-card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

# Custom-card "Elapsed Time"

This is a `custom-card` that works with a `input_datetime` input.
Template checks the `has_date` and `has_time` attributes and creates a label in `x days x hours x minutes ago` format.

- `x days` only included if `has_date` is true (datetime object)
- `x hours` only included if `has_time` is true (datetime and time objects)
- `x minutes` only included if `has_time` is true and has_date is false (time object)

![Generic](../../assets/img/custom_card_eraycetinay_elapsed_time.png)

## Credits

Author: eraycetinay - 2022
Version: 0.0.1

## Changelog

<details>
  <summary>0.0.1</summary>
  Initial release
</details>

## Usage

```yaml
- type: "custom:button-card"
  template: "custom_card_eraycetinay_elapsed_time"
  entity: input_datetime.cat_litter
  name: "Cat Litter"
```

## Template code

```yaml
---
custom_card_eraycetinay_elapsed_time:
  template:
    - "ulm_custom_card_eraycetinay_elapsed_time_language_variables"
    - "icon_info_bg"
  show_label: true
  show_name: true
  triggers_update:
    - "[[[ return entity.entity_id ]]]"
  label: |
    [[[
      let endDate = new Date();
      let today = new Date();
      if(entity.attributes.has_date) {
        today = new Date(entity.state.replace(" ", "T"));
      } else { 
        today = new Date().setHours(entity.attributes.hour,entity.attributes.minute,entity.attributes.second);
      }

      const days = parseInt((endDate - today) / (1000 * 60 * 60 * 24));
      const hours = parseInt(Math.abs(endDate - today) / (1000 * 60 * 60) % 24);
      const minutes = parseInt(Math.abs(endDate - today) / (1000 * 60) % 60);

      let text = '';
      if(entity.attributes.has_date) {
        text += days > 0 ? days + ' ' + (days > 1 ? variables.custom_card_eraycetinay_elapsed_time_days : variables.custom_card_eraycetinay_elapsed_time_day) +' ' : '';
      }
      if(entity.attributes.has_time) {
        text += hours > 0 ? hours + ' ' + (hours > 1 ? variables.custom_card_eraycetinay_elapsed_time_hours : variables.custom_card_eraycetinay_elapsed_time_hour) +' ' : '';
      }
      if(entity.attributes.has_time && !entity.attributes.has_date) {
        text += minutes > 0 ? minutes + ' ' + (minutes > 1 ? variables.custom_card_eraycetinay_elapsed_time_minutes : variables.custom_card_eraycetinay_elapsed_time_minute) +' ' : '';
      }

      text = text.length ? text += variables.custom_card_eraycetinay_elapsed_time_ago : variables.custom_card_eraycetinay_elapsed_time_justnow;
      return text;
    ]]]
```
