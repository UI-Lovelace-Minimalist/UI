---
title: Chip Icon With State
name: chip_icon_state
category: chip
explanation: "This `chip` displays an icon and a label, where the label can be any state of a sensor you configure."
image_path: "https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: ulm_chip_icon_state_icon
    type: variable
    example: '🛏️'
    required: true 
    explanation: "This is the icon to show. See  See <a href='/usage#icons'>icons</a> to read more about the used unicode `emojis`."
  - name: ulm_chip_icon_state_entity
    type: variable
    example: 'sensor.bed_occupancy'
    required: true 
    explanation: ""
yaml: |-
  - type: 'custom:button-card'
    template: chip_icon_state
    variables:
      ulm_chip_icon_state_icon: '🛏️'
      ulm_chip_icon_state_entity: sensor.bed_occupancy
ui: |-
  type: 'custom:button-card'
  template: chip_icon_state
  variables:
    ulm_chip_icon_state_icon: '🛏️'
    ulm_chip_icon_state_entity: sensor.bed_occupancy
code: |-
  chip_icon_state:
    template: chips
    triggers_update:
      - "[[[ variables.ulm_chip_icon_state_entity ]]]"
    label: |
      [[[
        var icon = '❔';
        if (variables.ulm_chip_icon_state_icon){
          var icon = variables.ulm_chip_icon_state_icon;
        } 
        var state = '';
        if (states[variables.ulm_chip_icon_state_entity].state){
          var state = states[variables.ulm_chip_icon_state_entity].state;
        } 
        return icon + ' ' + state;
      ]]]
---