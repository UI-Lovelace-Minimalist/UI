# Custom-card "Fan"
The `custom_card_fan` you can control a fan entity and shows the temperature and humidity

![Custom Fan Card](./screenshots/custom_card_fan.png)

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
  template: card_fan
  variables:
    ulm_card_fan_slider_temp_attribute: "temp"
    ulm_card_fan_slider_hum_attribute: "hum"
    always_show_attributes: false
  entity: fan.bathroom_ceiling_fan
  name: YOUR_NAME
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
card_fan:
  template:
    - "icon_info_bg"
    - "yellow"
    - "ulm_language_variables"
  tap_action:
    action: "toggle"
  hold_action:
    action: "more-info"
  variables:
    ulm_card_fan_slider_temp_attribute: "temp"
    ulm_card_fan_slider_hum_attribute: "hum"
    always_show_attributes: true
  label: >-
    [[[
      if (entity.state !='unavailable'){
        if (entity.state == 'off'){
          if (variables.always_show_attributes == true){
            var temp = Math.round(entity.attributes[variables.ulm_card_fan_slider_temp_attribute]);
            var hum = Math.round(entity.attributes[variables.ulm_card_fan_slider_hum_attribute]);
            return variables.ulm_off + ' • ' + (temp ? temp : '0') + '°C' + ' • ' + (hum ? hum : '0') + '%';
          } else {
            return variables.ulm_off
          }

        } else if (entity.state == 'on'){
          if (entity.attributes.percentage != null){
            var per = entity.attributes.percentage;
            var temp = Math.round(entity.attributes[variables.ulm_card_fan_slider_temp_attribute]);
            var hum = Math.round(entity.attributes[variables.ulm_card_fan_slider_hum_attribute]);
            return (per ? per : '0') + '%' + ' • ' + (temp ? temp : '0') + '°C' + ' • ' + (hum ? hum : '0') + '%';
          } else {
            return variables.ulm_on
          }
        }
      } else {
        return variables.ulm_unavailable;
      }
    ]]]

```
