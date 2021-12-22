---
title: AirCondition Card
name: custom_card_tpx01_aircondition
category: custom_card
author: tpx01
explanation: "The `custom_card_tpx01_aircondition` shows data from your air condition and gives you the possibility to control it."
image_path: "https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet"
internal: false
generator_install: true
generator_example: true
generator_button: true
languages:
  - language: de
    code: |
      custom_card_tpx01_aircondition_language_variables:
        variables:
          custom_card_tpx01_aircondition_dry: 'entfeuchten'
          custom_card_tpx01_aircondition_heat: 'heizen'
          custom_card_tpx01_aircondition_heat_cool: 'automatisch'
          custom_card_tpx01_aircondition_cool: 'kühlen'
          custom_card_tpx01_aircondition_fan_only: 'ventilator'
  - language: fr
    code: |
      custom_card_tpx01_aircondition_language_variables:
        variables:
          custom_card_tpx01_aircondition_dry: 'déshumidifier'
          custom_card_tpx01_aircondition_heat: 'chaleur'
          custom_card_tpx01_aircondition_heat_cool: 'auto'
          custom_card_tpx01_aircondition_cool: 'frais'
          custom_card_tpx01_aircondition_fan_only: 'fan seulement'
  - language: en
    code: |
      custom_card_tpx01_aircondition_language_variables:
        variables:
          custom_card_tpx01_aircondition_dry: 'dry'
          custom_card_tpx01_aircondition_heat: 'heat'
          custom_card_tpx01_aircondition_heat_cool: 'auto'
          custom_card_tpx01_aircondition_cool: 'cool'
          custom_card_tpx01_aircondition_fan_only: 'fan only'
variants:
  - name: 
    title: 
    variables:
      - name: entity
        type: variable
        example: climate.livingroom_ac
        required: true 
        explanation: 'Your climate entity."'
      - name: name
        type: variable
        example: A/C Livingroom
        required: true 
        explanation: 'Your entity name."'
    yaml: |-
      - type: custom:button-card
        template: custom_card_tpx01_aircondition_with_buttons
        variables:
          entity: climate.livingroom
          name: A/C Livingroom
    ui: |-
      type: custom:button-card
      template: custom_card_tpx01_aircondition_with_buttons
      variables:
        entity: climate.livingroom
        name: A/C Livingroom
    code: |-
      custom_card_tpx01_aircondition:
        template:
          - ulm_language_variables
          - custom_card_tpx01_aircondition_language_variables
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
              if (entity.state =='off') {
                return variables.ulm_off;
              } else if (entity.state =='dry') {
                return variables.custom_card_tpx01_aircondition_dry;
              } else if (entity.state =='heat') {
                return variables.custom_card_tpx01_aircondition_heat;
              } else if (entity.state =='heat_cool') {
                return variables.custom_card_tpx01_aircondition_heat_cool;
              } else if (entity.state =='cool') {
                return variables.custom_card_tpx01_aircondition_cool;
              } else if (entity.state =='fan_only') {
                return variables.custom_card_tpx01_aircondition_fan_only;
              }
              return entity.state;
          ]]]
        state:
          - operator: template
            value: >
              [[[
                return entity.state != 'off';
              ]]]
            styles:
              icon:
                - color: 'rgba(var(--color-blue),1)'
              img_cell:
                - background-color: 'rgba(var(--color-blue),0.2)'
      
      custom_card_tpx01_aircondition_with_buttons:
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
                      - custom_card_tpx01_aircondition
                    tap_action:
                      action: more-info
                    name: >
                      [[[
                          if (variables.name == null) {
                            return variables.entity;
                          }
                          return variables.name;
                      ]]]
                    entity: '[[[ return variables.entity ]]]'
                item2:
                  card:
                    type: horizontal-stack
                    cards:
                      - type: conditional
                        conditions:
                          - entity: '[[[ return variables.entity ]]]'
                            state: 'off'
                        card:
                          type: custom:button-card
                          template: widget_icon
                          tap_action:
                            action: call-service
                            service: climate.set_hvac_mode
                            service_data:
                              entity_id: '[[[ return variables.entity ]]]'
                              hvac_mode: 'cool'
                          icon: mdi:power
                      - type: conditional
                        conditions:
                          - entity: '[[[ return variables.entity ]]]'
                            state_not: 'off'
                        card:
                          type: custom:button-card
                          template: widget_icon
                          tap_action:
                            action: call-service
                            service: climate.set_hvac_mode
                            service_data:
                              entity_id: '[[[ return variables.entity ]]]'
                              hvac_mode: 'off'
                          icon: mdi:power-off
          item2:
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
                      service: script.decrease_climate_temperature
                      service_data:
                        entity_id: '[[[ return variables.entity ]]]'
                    icon: 'mdi:minus'
                item2:
                  card:
                    type: 'custom:button-card'
                    template: widget_temperature
                    tap_action:
                      action: none
                    entity: '[[[ return variables.entity ]]]'
                    icon: 'mdi:temperature-celsius'
                item3:
                  card:
                    type: 'custom:button-card'
                    template: widget_icon
                    tap_action:
                      action: call-service
                      service: script.increment_climate_temperature
                      service_data:
                        entity_id: '[[[ return variables.entity ]]]'
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
              if (temperature == null) {
                var temperature = '-';
              }
              return temperature + '°C'
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
---