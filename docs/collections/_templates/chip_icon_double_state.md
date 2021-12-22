---
title: Chip Icon With Double State
name: chip_icon_double_state
category: chip
explanation: ""
image_path: "https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: ulm_chip_icon_double_state_icon
    type: variable
    example: '💻'
    required: true 
    explanation: "This is the icon to show. See <a href='/usage#icons'>icons</a> to read more about the used unicode `emojis`."
  - name: ulm_chip_icon_double_state_entity_1
    type: variable
    example: 'sensor.nas_disk_used'
    required: true 
    explanation: ""
  - name: ulm_chip_icon_double_state_entity_2
    type: variable
    example: 'sensor.nas_cpu_load'
    required: true 
    explanation: ""
yaml: |-
  - type: 'custom:button-card'
    template: chip_icon_double_state
    variables:
      ulm_chip_icon_double_state_icon: '💻'
      ulm_chip_icon_double_state_entity_1: sensor.nas_disk_used
      ulm_chip_icon_double_state_entity_2: sensor.nas_cpu_load
ui: |-
  type: 'custom:button-card'
  template: chip_icon_double_state
  variables:
    ulm_chip_icon_double_state_icon: '💻'
    ulm_chip_icon_double_state_entity_1: sensor.nas_disk_used
    ulm_chip_icon_double_state_entity_2: sensor.nas_cpu_load
code: |-
  chip_icon_double_state:
    template: chips
    triggers_update:
      - "[[[ variables.ulm_chip_icon_double_state_entity_1 ]]]"
      - "[[[ variables.ulm_chip_icon_double_state_entity_2 ]]]"
    label: |
      [[[
        var icon = '❔';
        if (variables.ulm_chip_icon_double_state_icon){
          var icon = variables.ulm_chip_icon_double_state_icon;
        } 
        var state1 = '';
        if (states[variables.ulm_chip_icon_double_state_entity_1].state){
          var state1 = states[variables.ulm_chip_icon_double_state_entity_1].state;
        } 
        var state2 = '';
        if (states[variables.ulm_chip_icon_double_state_entity_2].state){
          var state2 = states[variables.ulm_chip_icon_double_state_entity_2].state;
        } 
        return icon + ' ' + state1 + ' • ' + state2;
      ]]]
---