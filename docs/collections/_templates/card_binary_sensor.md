---
title: Binary Sensor Card
name: card_binary_sensor
category: card
explanation: "The `binary-sensor-card` is to show the state (on/off, open/close, etc.) of a binary sensor, eg. your garage door or a window contact sensor."
image_path: "/assets/images/card_binary_sensor.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: entity
    type: entry
    example: binary_sensor.garage_door
    required: true 
    explanation: "The <i>binary_sensor</i> to show"
  - name: show_last_changed
    type: entry
    example: true or false
    required: false 
    explanation: ""
yaml: |-
  - type: 'custom:button-card'
    template: card_binary_sensor
    variables:
      - ulm_card_binary_sensor_alert: true
    entity: binary_sensor.garage_door
    show_last_changed: true
ui: |-
  type: 'custom:button-card'
  template: card_binary_sensor
    variables:
      - ulm_card_binary_sensor_alert: true
  entity: binary_sensor.garage_door
  show_last_changed: true
code: |-
  card_binary_sensor:
    template: 
      - icon_info_bg
      - blue
    name: "[[[ return entity.attributes.friendly_name != '' ? entity.attributes.friendly_name : entity.entity_id ]]]"
    show_last_changed: true
---