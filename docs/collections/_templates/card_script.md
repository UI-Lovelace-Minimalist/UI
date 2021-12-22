---
title: Script Card
name: card_script
category: card
explanation: "This card starts/runs a script. You can configure icon and text."
image_path: "/assets/images/card_script.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: ulm_card_script_title
    type: variable
    example: Romantic lights
    required: true
    explanation: "Name to show for the script."
  - name: ulm_card_script_icon
    type: variable
    example: 'mdi:candle'
    required: true
    explanation: "Icon to show for the script."
  - name: "tap_action_action"
    type: entry
    example: call-service
    required: true 
    explanation: "Only call-service is allowed here."
  - name: "tap_action_service"
    type: entry
    example: script.turn_on
    required: true 
    explanation: "Let the script run by turning it on."
  - name: "tap_action_service_data"
    type: entry
    example: "entity_id: script.romantic_livingroom_lights"
    required: true 
    explanation: "This is the service_data needed by your script. That can be an entity_id and/or some variables."
yaml: |-
  - type: 'custom:button-card'
    template: card_script
    variables: 
      ulm_card_script_title: Romantic lights
      ulm_card_script_icon: 'mdi:candle'
    tap_action:
      action: call-service
      service: script.turn_on
      service_data: 
        entity_id: script.romantic_livingroom_lights
ui: |-
  type: 'custom:button-card'
  template: card_script
  variables: 
    ulm_card_script_title: Romantic lights
    ulm_card_script_icon: 'mdi:candle'
  tap_action:
    action: call-service
    service: script.turn_on
    service_data: 
      entity_id: script.romantic_livingroom_lights
code: |-
  card_script:
    template: 
      - icon_only
    label: "[[[ return variables.ulm_card_script_title; ]]]"
    icon: "[[[ return variables.ulm_card_script_icon; ]]]"
    styles:
      icon:
        - color: 'rgba(var(--color-blue),0.7)'
      label:
        - align-self: center
        - justify-self: start
        - font-weight: bold
        - font-size: 14px
        - margin-left: 12px
        - filter: opacity(100%)
      img_cell:
        - background-color: 'rgba(var(--color-blue), 0.2)'
      grid:
        - grid-template-areas: '"i l"'
        - grid-template-columns: min-content min-content
        - grid-template-rows: min-content
---