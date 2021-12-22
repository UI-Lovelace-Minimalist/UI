---
title: Light Card
name: card_light
category: card
explanation: "This is the `light-card`, used to toggle a light or a light group. Shows state of the light and, if available, brightness in %. In the picture on the right in row Nr1"
image_path: "/assets/images/card_light_combi.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: entity
    type: entry
    example: light.my_livingroom_light
    required: true 
    explanation: ""
yaml: |-
  - type: 'custom:button-card'
    template: card_light
    entity: light.my_livingroom_light
ui: |-
  type: 'custom:button-card'
  template: card_light
  entity: light.my_livingroom_light
code: |-
  card_light:
    template: 
      - icon_info_bg
      - yellow
      - ulm_language_variables
    tap_action:
      action: toggle
    hold_action:
      action: more-info
    label: >-
      [[[ 
        if (entity.state != 'unavailable'){
          if (entity.state =='off'){
            return variables.ulm_off;  
          } else if (entity.state == 'on'){
            if (entity.attributes.brightness != null){
              var bri = Math.round(entity.attributes.brightness / 2.55);
              return (bri ? bri : '0') + '%';
            } else {
              return variables.ulm_on
            } 
          }
        } else {
          return variables.ulm_unavailable;
        }
      ]]]
---