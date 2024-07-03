# Custom-card "Fan Slider"
The `custom_card_fan_slider` you can control a fan entity and shows the temperature and humidity

![Custom Fan Slider Card](./screenshots/custom_card_fan_slider.png)

## Credits
Author: sildehoop - 2021
Version: 1.0.0

## Changelog
<details>
<summary>1.0.0</summary>
Initial release
</details>

## Usage

```yaml
- type: "custom:button-card"
  template: card_fan_slider
  variables:
    ulm_card_fan_slider_name: "YOUR_NAME"
    ulm_card_fan_slider_temp_attribute: "YOUR_TEMP_ATTRIBUTE"
    ulm_card_fan_slider_hum_attribute: "YOUR_HUM_ATTRIBUTE"
    always_show_attributes: false
  entity: fan.YOUR_ENTITY
```

## Requirements
n/a

## Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_card_fan_slider_temp_attribute</td>
<td>temp</td>
<td>no</td>
<td>The attribute from your entity to get the temperature</td>
</tr>
<tr>
<td>ulm_card_fan_slider_hum_attribute</td>
<td>hum</td>
<td>no</td>
<td>The attribute from your entity to get the humidity</td>
</tr>
<tr>
<td>always_show_attributes</td>
<td>yes</td>
<td>no</td>
<td>If jou wat to show the attributes when the fan is off</td>
</tr>
</table>

## Template code

```yaml
---
card_input_number:
  variables:
    ulm_card_input_number_name: "n/a"
  triggers_update: "all"
  styles:
    grid:
      - grid-template-areas: "'item1' 'item2'"
      - grid-template-columns: "1fr"
      - grid-template-rows: "min-content  min-content"
      - row-gap: "12px"
    card:
      - border-radius: "var(--border-radius)"
      - box-shadow: "var(--box-shadow)"
      - padding: "12px"
  custom_fields:
    item1:
      card:
        type: "custom:button-card"
        template:
          - "icon_info"
          - "ulm_language_variables"
          - "input_number"
        tap_action:
          action: "more-info"
        entity: "[[[ return variables.ulm_card_input_number_entity ]]]"
        name: "[[[ return variables.ulm_card_input_number_name ]]]"
    item2:
      card:
        type: "custom:button-card"
        template: "list_3_items"
        custom_fields:
          item1:
            card:
              type: "custom:button-card"
              template: "widget_icon"
              tap_action:
                action: "call-service"
                service: "input_number.decrement"
                service_data:
                  entity_id: "[[[ return variables.ulm_card_input_number_entity ]]]"
              icon: "mdi:arrow-down"
          item2:
            card:
              type: "custom:button-card"
              template: "widget_text"
              entity: "[[[ return variables.ulm_card_input_number_entity ]]]"
              tap_action:
                action: "call-service"
                service: "cover.stop_cover"
                service_data:
                  entity_id: "[[[ return variables.ulm_card_input_number_entity ]]]"
          item3:
            card:
              type: "custom:button-card"
              template: "widget_icon"
              tap_action:
                action: "call-service"
                service: "input_number.increment"
                service_data:
                  entity_id: "[[[ return variables.ulm_card_input_number_entity ]]]"
              icon: "mdi:arrow-up"

input_number:
  tap_action:
    action: "more-info"
  show_last_changed: true

widget_text:
  tap_action:
    action: "toggle"
  show_icon: false
  show_label: true
  show_name: false
  label: >-
    [[[
      var unit = entity.attributes.unit_of_measurement != null ? ' ' + entity.attributes.unit_of_measurement : ''
      if (entity.state == 'on') {
        return variables.ulm_on;
      } else if (entity.state == 'off') {
        return variables.ulm_off;
      } else if (entity.state == 'unavailable') {
        return variables.ulm_unavailable;
      } else if (entity.state == 'idle') {
        return variables.ulm_idle;
      } else if (entity.state == 'open') {
        return variables.ulm_open;
      } else if (entity.state == 'closed') {
        return variables.ulm_closed;
      } else {
        return entity.state + unit;
      }
    ]]]
  styles:
    grid:
      - grid-template-areas: "'l'"
    card:
      - box-shadow: "none"
      - padding: "0px"
      - background-color: "rgba(var(--color-theme),0.05)"
      - border-radius: "14px"
      - place-self: "center"
      - height: "42px"
    state:
      - color: "rgba(var(--color-theme),0.9)"
  size: "20px"
  color: "var(--google-grey)"
```
