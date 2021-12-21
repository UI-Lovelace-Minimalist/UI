# Custom-card "thermostat"
The `custom_card_mlittle408_thermostat` shows the status of your air conditioning unit and allows you to control it. Supports, heat, cool and heat_cool HVAC modes.

## Credits
Author: mlittle408 - 2021  
Version: 1.0.0  

This is based on `@tpx01` awesome aircondition card

## Changelog

1.0.0 - Initial release 12/20/2021

## Usage

```yaml
- type: custom:button-card
  template: custom_card_mlittle408_thermostat_with_buttons
  entity: climate.upstairs_thermostat
  variables:
    name: Upstairs Thermostat
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
<td>entity</td>
<td>climate.downstairs_thermostat</td>
<td>yes</td>
<td>Your climate entity</td>
</tr>
<tr>
<td>name</td>
<td>Downstairs Thermostat</td>
<td>yes</td>
<td>The name your want displayed</td>
</tr>
</table>

## Template code

```yaml
custom_card_mlittle408_thermostat:
  template:
    - ulm_language_variables
    - custom_card_mlittle408_thermostat_language_variables
  tap_action:
    action: more-info
  icon: |
    [[[
        if (entity.state =='dry') {
          return 'mdi:water';
        } else if (entity.state =='heat') {
          return 'mdi:radiator';
        } else if (entity.state =='cool') {
          return 'mdi:snowflake';
        } else if (entity.state =='fan_only') {
          return 'mdi:fan';
        }
        return 'mdi:air-conditioner';
    ]]]
  label: >-
    [[[
        var hvac_action = states[entity.entity_id].attributes.hvac_action;
        var current_temp = states[entity.entity_id].attributes.current_temperature;
        return 'Currently: ' + 
          current_temp + hass.config.unit_system.temperature + 
          ' - ' + hvac_action + '(' + entity.state + ')';
    ]]]
  state:
    - operator: template
      value: >
        [[[
          return entity.state != 'off';
        ]]]
      styles:
        icon:
          - color: |
              [[[ 
                if (entity.state == 'heat') 
                return 'rgba(var(--color-red),1)' 
                if (entity.state == 'cool') 
                return 'rgba(var(--color-blue),1)' 
              ]]]
        img_cell:
          - background-color: |
              [[[ 
                if (entity.state == 'heat') 
                return 'rgba(var(--color-red),.2)' 
                if (entity.state == 'cool') 
                return 'rgba(var(--color-blue),.2)' 
              ]]]

custom_card_mlittle408_thermostat_with_buttons:
  show_name: false
  show_icon: false
  variables:
    name: null
  styles:
    grid:
      - grid-template-areas: '"item1" "item2"'
      - grid-template-columns: 1fr
      - grid-template-rows: min-content  min-content
      - row-gap: 12px
    card:
      - border-radius: var(--border-radius)
      - box-shadow: var(--box-shadow)
      - padding: 12px
  custom_fields:
    item1:
      card:
        type: custom:button-card
        template: list_items_favorite
        custom_fields:
          item1:
            card:
              type: 'custom:button-card'
              template:
                - icon_info
                - custom_card_mlittle408_thermostat
              tap_action:
                action: more-info
              name: >
                [[[
                    if (variables.name == null) {
                      return entity.entity_id;
                    }
                    return variables.name;
                ]]]
              entity: '[[[ return entity.entity_id ]]]'
          item2:
            card:
              type: horizontal-stack
              cards:
                - type: conditional
                  conditions:
                    - entity: '[[[ return entity.entity_id ]]]'
                      state: 'off'
                  card:
                    type: custom:button-card
                    template: widget_icon
                    tap_action:
                      action: call-service
                      service: climate.set_hvac_mode
                      service_data:
                        entity_id: '[[[ return entity.entity_id]]]'
                        hvac_mode: 'cool'
                    icon: mdi:power
                - type: conditional
                  conditions:
                    - entity: '[[[ return entity.entity_id ]]]'
                      state_not: 'off'
                  card:
                    type: custom:button-card
                    template: widget_icon
                    tap_action:
                      action: call-service
                      service: climate.set_hvac_mode
                      service_data:
                        entity_id: '[[[ return entity.entity_id ]]]'
                        hvac_mode: |
                          [[[ if (entity.state == 'heat') return 'off' 
                            if (entity.state == 'cool') return 'heat_cool'
                            if (entity.state == 'heat_cool') return 'heat'
                            if (entity.state == 'off') return 'cool']]]
                    icon: mdi:power-off

###############################################################
##               Conditional display of buttons               #
##                  depending on hvac_mode                    #
##           If anything but heat_cool do the following       #
###############################################################

    item2:
      card:
        type: horizontal-stack
        cards:
          - type: conditional
            conditions:
              - entity: '[[[ return entity.entity_id ]]]'
                state_not: 'heat_cool'
            card:
              type: 'custom:button-card'
              template: list_items
              custom_fields:
                item1:
                  card:
                    type: 'custom:button-card'
                    template: widget_icon
                    tap_action:
                      action: call-service
                      service: climate.set_temperature
                      service_data:
                        temperature: '[[[ return states[entity.entity_id].attributes.temperature -1 ]]]'
                        entity_id: '[[[ return entity.entity_id ]]]'
                    icon: 'mdi:minus'
                item2:
                  card:
                    type: 'custom:button-card'
                    template: widget_temperature
                    tap_action:
                      action: none
                    entity: '[[[ return entity.entity_id ]]]'
                    icon: 'mdi:temperature-celsius'
                item3:
                  card:
                    type: 'custom:button-card'
                    template: widget_icon
                    tap_action:
                      action: call-service
                      service: climate.set_temperature
                      service_data:
                        temperature: '[[[ return states[entity.entity_id].attributes.temperature +1 ]]]'
                        entity_id: '[[[ return entity.entity_id; ]]]'
                    icon: 'mdi:plus'

###############################################################
##               Conditional display of buttons               #
##                  depending on hvac_mode                    #
##               If heat_cool show the following              #
###############################################################

          - type: conditional
            conditions:
              - entity: '[[[ return entity.entity_id ]]]'
                state: 'heat_cool'
            card:
              type: 'custom:button-card'
              template: list_items
              custom_fields:
                item1:
                  card:
                    type: horizontal-stack
                    cards:
                      - type: 'custom:button-card'
                        template: widget_icon
                        tap_action:
                          action: call-service
                          service: climate.set_temperature
                          service_data:
                            target_temp_low: '[[[ return states[entity.entity_id].attributes.target_temp_low -1 ]]]'
                            target_temp_high: '[[[ return states[entity.entity_id].attributes.target_temp_high ]]]'
                            entity_id: '[[[ return entity.entity_id ]]]'
                        icon: 'mdi:minus'
                      - type: 'custom:button-card'
                        template: widget_icon
                        tap_action:
                          action: call-service
                          service: climate.set_temperature
                          service_data:
                            target_temp_low: '[[[ return states[entity.entity_id].attributes.target_temp_low +1 ]]]'
                            target_temp_high: '[[[ return states[entity.entity_id].attributes.target_temp_high ]]]'
                            entity_id: '[[[ return entity.entity_id ]]]'
                        icon: 'mdi:plus'
                item2:
                  card:
                    type: 'custom:button-card'
                    template: widget_temperature
                    tap_action:
                      action: none
                    entity: '[[[ return entity.entity_id ]]]'
                    icon: 'mdi:temperature-celsius'
                item3:
                  card:
                    type: horizontal-stack
                    cards:
                      - type: 'custom:button-card'
                        template: widget_icon
                        tap_action:
                          action: call-service
                          service: climate.set_temperature
                          service_data:
                            target_temp_low: '[[[ return states[entity.entity_id].attributes.target_temp_low ]]]'
                            target_temp_high: '[[[ return states[entity.entity_id].attributes.target_temp_high -1 ]]]'
                            entity_id: '[[[ return entity.entity_id; ]]]'
                        icon: 'mdi:minus'
                      - type: 'custom:button-card'
                        template: widget_icon
                        tap_action:
                          action: call-service
                          service: climate.set_temperature
                          service_data:
                            target_temp_low: '[[[ return states[entity.entity_id].attributes.target_temp_low ]]]'
                            target_temp_high: '[[[ return states[entity.entity_id].attributes.target_temp_high +1 ]]]'
                            entity_id: '[[[ return entity.entity_id; ]]]'
                        icon: 'mdi:plus'

list_items_favorite:
  styles:
    grid:
      - grid-template-areas: '"item1 item1 item2"'
      - grid-template-columns: 1fr 1fr 1fr
      - grid-template-rows: min-content
      - column-gap: 7px
    card:
      - box-shadow: none
      - padding: 0px

widget_temperature:
  tap_action:
    action: toggle
  color: var(--google-grey-500)
  show_icon: false
  show_name: false
  show_label: true
  size: 20px
  label: |-
    [[[
        var temperature = entity.attributes.temperature;
        var target_high = entity.attributes.target_temp_high;
        var target_low = entity.attributes.target_temp_low;
        
        if (entity.state == 'heat_cool') {
          return target_low + hass.config.unit_system.temperature + 
            ' / ' + target_high + hass.config.unit_system.temperature
        } else {
          if (temperature == null) {
            var temperature = 'off';
            return temperature
          } else {
            return temperature + hass.config.unit_system.temperature
          }
        }
        
    ]]]
  styles:
    label:
      - color: 'rgb(var(--color-theme),0.9)'
    grid:
      - grid-template-areas: '"l"'
    card:
      - box-shadow: none
      - padding: 0px
      - background-color: 'rgba(var(--couleur-theme),0)'
      - border-radius: 14px
      - place-self: center
      - height: 42px
```