---
title: Person Card
name: card_person
category: card
explanation: |-
  The `card_person` shows if a person is `home` or `not_home`. If you have setup other <a href="https://www.home-assistant.io/integrations/zone/">zones</a>, it will show these as well.
image_path: "/assets/images/person.png"
information: |-
  <strong>Dot color:</strong> at home - blue | away - green<br>
  <strong>Dot icon:</strong> at home - <i>Home icon</i> | not home - <i>Home minus icon</i> | if you configured an icon for a <a href="https://www.home-assistant.io/integrations/zone/">zone</a>, it will be used
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: ulm_card_person_entity
    type: variable
    example: person.username
    required: true
    explanation: "The person entity"
  - name: ulm_card_person_use_entity_picture
    type: variable
    example: true or false
    required: false 
    explanation: "If you set this to true, the card shows the entity picture from your user, otherwise (set to false) shows the icon. Default is false."
  - name: ulm_card_person_zone1
    type: variable
    example: work
    required: false 
    explanation: 'Set another zone (beside "home") to use for the card. You can set up two zones besides "home".'
  - name: ulm_card_person_zone2
    type: variable
    example: school
    required: false 
    explanation: 'Set another zone (beside "home") to use for the card. You can set up two zones besides "home".'
yaml: |-
  - type: 'custom:button-card'
    template: card_person
    variables:
      ulm_card_person_entity: person.username
      ulm_card_person_use_entity_picture: true
      ulm_card_person_zone1: work
      ulm_card_person_zone2: school
ui: |-
  type: 'custom:button-card'
  template: card_person
  variables:
    ulm_card_person_entity: person.username
    ulm_card_person_use_entity_picture: true
    ulm_card_person_zone1: work
    ulm_card_person_zone2: school
code: |-
  card_person:
    template: icon_info_bg
    variables:
      ulm_card_person_use_entity_picture: false
      ulm_card_person_zone1: ''
      ulm_card_person_zone2: ''
    tap_action:
      action: more-info
      entity: "[[[ return variables.ulm_card_person_entity; ]]]"
    show_label: true
    show_name: true
    label: "[[[ return states[variables.ulm_card_person_entity].state ]]]"
    name: "[[[ return states[variables.ulm_card_person_entity].attributes.friendly_name ]]]"
    entity: "[[[ return variables.ulm_card_person_entity; ]]]"
    icon: 'mdi:face-man'
    show_entity_picture: "[[[ return variables.ulm_card_person_use_entity_picture ]]]"
    entity_picture: "[[[ return variables.ulm_card_person_use_entity_picture != false ? states[variables.ulm_card_person_entity].attributes.entity_picture : null ]]]"
    styles:
      icon:
        - color: 'rgba(var(--color-theme),0.9)'
        - width: >
            [[[ 
              if (variables.ulm_card_person_use_entity_picture != true){
                return '20px';
              } else {
                return '42px';
              }
            ]]]
        - place-self: >
            [[[ 
              if (variables.ulm_card_person_use_entity_picture != true){
                return 'center';
              } else {
                return 'stretch stretch';
              }
            ]]]
      custom_fields:
        notification:
          - border-radius: 50%
          - position: absolute
          - left: 38px
          - top: 8px
          - height: 16px
          - width: 16px
          - border: 2px solid var(--card-background-color)
          - font-size: 12px
          - line-height: 14px
          - background-color: >
              [[[
                if (states[variables.ulm_card_person_entity].state != 'home'){
                  return "rgba(var(--color-green),1)";
                } else {
                  return "rgba(var(--color-blue),1)";
                }
              ]]]
    custom_fields:
      notification: >
        [[[
          if (states[variables.ulm_card_person_entity].state != 'home'){
            if (states[variables.ulm_card_person_entity].state == variables.ulm_card_person_zone1){
              var icon = states[variables.ulm_card_person_zone1].attributes.icon != null ? states[variables.ulm_card_person_zone1].attributes.icon : 'mdi:help-circle'
              return '<ha-icon icon="' + icon + '" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>';
            } else if (states[variables.ulm_card_person_entity].state == variables.ulm_card_person_zone2){
              var icon = states[variables.ulm_card_person_zone2].attributes.icon != null ? states[variables.ulm_card_person_zone2].attributes.icon : 'mdi:help-circle'
              return '<ha-icon icon="' + icon + '" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>';
            } else {
              return '<ha-icon icon="mdi:home-minus" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>';
            }
          } else {
            return '<ha-icon icon="mdi:home-variant" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>';
          }
        ]]]
---