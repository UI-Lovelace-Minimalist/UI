---
title: Generic Card
name: card_generic
category: card
explanation: "This is the `generic-card` to display values from a sensor, eg. to show humidity, your next waste collection date or whatever sensor value is provided."
image_path: "/assets/images/card_generic.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: entity
    type: entry
    example: sensor.next_waste_collection
    required: true 
    explanation: ""
yaml: |-
  - type: 'custom:button-card'
    template: card_generic
    entity: sensor.next_waste_collection
ui: |-
  type: 'custom:button-card'
  template: card_generic
  entity: sensor.next_waste_collection
code: |-
  card_generic:
    template: 
      - icon_info_bg
      - ulm_language_variables
    label: >
      [[[
        var unit = entity.attributes.unit_of_measurement != null ? ' ' + entity.attributes.unit_of_measurement : ''
        if (entity.state == 'on') {
          return variables.ulm_on;
        } else if (entity.state == 'off') {
          return variables.ulm_off;
        } else if (entity.state == 'unavailable') {
          return variables.ulm_unavailable;
        } else if (entity.state == 'idle') {
          return variables.ulm_idle;
        } else if (entity.state == 'open') {
          return variables.ulm_open;
        } else if (entity.state == 'closed') {
          return variables.ulm_closed;
        } else {
          return entity.state + unit;
        }
      ]]]
    styles:
      icon:
        - color: 'rgba(var(--color-theme),0.9)'
      label:
        - align-self: end
        - justify-self: start
        - font-weight: bold
        - font-size: 14px
        - margin-left: 12px
        - filter: opacity(100%)
      name:
        - justify-self: start
        - align-self: start
        - font-weight: bolder
        - font-size: 12px
        - filter: opacity(40%)
        - margin-left: 12px
      grid:
        - grid-template-areas: '"i l" "i n"'
        - grid-template-columns: min-content auto
        - grid-template-rows: min-content min-content
---