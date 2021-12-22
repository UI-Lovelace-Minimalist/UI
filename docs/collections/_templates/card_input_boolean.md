---
title: Input Boolean Card
name: card_input_boolean
category: card
explanation: "The `input-boolean-card` is to switch an `input_boolean` on or off."
image_path: "/assets/images/card_input_boolean.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: entity
    type: entry
    example: input_boolean.guest_mode
    required: true 
    explanation: "The <i>input_boolean</i> to switch"
yaml: |-
  - type: 'custom:button-card'
    template: card_input_boolean
    entity: input_boolean.guest_mode
ui: |-
  type: 'custom:button-card'
  template: card_input_boolean
  entity: input_boolean.guest_mode
code: |-
  card_input_boolean:
    template: 
      - icon_info_bg
      - ulm_language_variables
      - blue
    name: "[[[ return entity.attributes.friendly_name != '' ? entity.attributes.friendly_name : entity.entity_id ]]]"
    label: >
      [[[
        if (entity.state != 'unavailable'){
          if (entity.state == 'on'){
            return variables.ulm_on;
          } else {
            return variables.ulm_off;
          }
        } else {
          return variables.ulm_unavailable;
        }
      ]]]
---