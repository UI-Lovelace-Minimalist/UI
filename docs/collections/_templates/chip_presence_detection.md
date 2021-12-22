---
title: Chip Presence Detection (counter)
name: chip_presence_detection
category: chip
explanation: "This `chip` shows you the actual presence in your home. Shows residents and guests (guests only if one or more)."
image_path: "/assets/images/chip_localisation_present.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: ulm_chip_presence_counter_residents
    type: variable
    example: sensor.my_residents_counter
    required: true 
    explanation: "This is the sensor that shows your residents counter."
  - name: ulm_chip_presence_counter_guests
    type: variable
    example: sensor.my_guests_counter
    required: true 
    explanation: "This is the sensor that shows your guests counter."
yaml: |-
  - type: 'custom:button-card'
    template: chip_presence_detection
    variables:
      ulm_chip_presence_counter_residents: sensor.my_residents_counter
      ulm_chip_presence_counter_guests: sensor.my_guests_counter
ui: |-
  type: 'custom:button-card'
  template: chip_presence_detection
  variables:
    ulm_chip_presence_counter_residents: sensor.my_residents_counter
    ulm_chip_presence_counter_guests: sensor.my_guests_counter
code: |-
  chip_presence_detection:
    template: chips
    triggers_update:
      - "[[[ variables.ulm_chip_presence_counter_residents ]]]"
      - "[[[ variables.ulm_chip_presence_counter_guests ]]]"
    label: |
      [[[
        var guests = states[variables.ulm_chip_presence_counter_guests].state ? ' / ' + states[variables.ulm_chip_presence_counter_guests].state : '';
        return '🏠 ' +  states[variables.ulm_chip_presence_counter_residents].state + guests;
      ]]]
---