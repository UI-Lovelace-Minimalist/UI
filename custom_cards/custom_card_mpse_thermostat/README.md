---
title: Thermostat mpse Custom-card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

# Custom-card "Thermostat"

The `custom_card_mpse_thermostat` is used to display temperature and control a simple thermostat. I have tested this with a cooling function that I use to control my beer fridge.

The buttons are used to lower/raise the set temperature which is displayed between the arrows. It uses the defined steps configured on the thermostat (In my case I use esphome to control the frigde). The current temperature is shown in the grey label. The card uses the standard language parameters.

![Thermostat](../../docs/assets/img/custom_thermostat.png)

## Credits

Author: mpse
Version: 0.1.0

## Changelog

<details>
<summary>0.1.0</summary>
Initial release inspired from various posts on home assistant forum.
</details>

## Usage

```yaml
- type: 'custom:button-card'
  template: custom_card_mpse_thermostat
  entity: climate.fermentation_climate_controller
```

## Requirements

## Variables

<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>None</td>
<td></td>
<td></td>
<td></td>
</tr>
</tr>
</table>

## Template code

```yaml
---
custom_card_mpse_thermostat:
  show_name: false
  show_icon: false
  template:
    - "icon_info_bg"
    - "ulm_language_variables"
  hold_action:
    action: "more-info"
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
        tap_action:
          action: more-info
        entity: "[[[ return entity.entity_id ]]]"
        name: "[[[ return entity.name ]]]"
        label: >-
          [[[
              var label = variables.ulm_off ;
              if (entity.state =='off'){
                label = variables.ulm_off ;
              }else if (entity.state == 'heat'){
                label = variables.ulm_heat ;
              }else if (entity.state == 'cool'){
                label = variables.ulm_cool ;
              }else{
                label = variables.ulm_idle;
              }
              if(entity.attributes.temperature){
                return (entity.attributes.current_temperature ) + '°' + ' • ' + label + ' (' + entity.attributes.hvac_action + ')';
              }
              return label;
          ]]]
        icon: >
          [[[
            var icon = "mdi:thermostat";
            var state = entity.state;

            if( state == "cool" )
              icon = "mdi:snowflake"
            else if( state == "heat" )
              icon = "mdi:fire"

            return icon;
          ]]]
        state:
          - operator: "template"
            value: [[[ return entity.state == 'heat' ]]]
            styles:
              icon:
                - color: "rgba(var(--color-red),1)"
              img_cell:
                - background-color: "rgba(var(--color-red),0.2)"
              card:
                - background-color: "rgba(var(--color-background-red),var(--opacity-bg))"
              name:
                - color: "rgba(var(--color-red-text),1)"
              label:
                - color: "rgba(var(--color-red-text),1)"
          - operator: "template"
            value: [[[ return entity.state == 'cool' ]]]
            styles:
              icon:
                - color: "rgba(var(--color-blue),1)"
              img_cell:
                - background-color: "rgba(var(--color-blue),0.2)"
              card:
                - background-color: "rgba(var(--color-background-blue),var(--opacity-bg))"
              name:
                - color: "rgba(var(--color-blue-text),1)"
              label:
                - color: "rgba(var(--color-blue-text),1)"
    item2:
      card:
        type: "custom:button-card"
        template: list_items
        custom_fields:
          item1:
            card:
              type: "custom:button-card"
              template: "widget_icon"
              icon: "mdi:arrow-down"
              tap_action:
                action: "call-service"
                service: "climate.set_temperature"
                service_data:
                  entity_id: "[[[ return entity.entity_id ]]]"
                  temperature: "[[[ return entity.attributes.temperature - entity.attributes.target_temp_step ]]]"
          item2:
            card:
              type: "custom:button-card"
              entity: "[[[ return entity.entity_id ]]]"
              name: "[[[ return entity.attributes.temperature + '°C' ]]]"
              styles:
                card:
                  - box-shadow: "none"
              show_icon: false
              tap_action: "none"
          item3:
            card:
              type: "custom:button-card"
              template: "widget_icon"
              icon: "mdi:arrow-up"
              tap_action:
                action: "call-service"
                service: "climate.set_temperature"
                service_data:
                  entity_id: "[[[ return entity.entity_id ]]]"
                  temperature: "[[[ return entity.attributes.temperature + entity.attributes.target_temp_step ]]]"
```
