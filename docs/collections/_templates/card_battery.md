---
title: Battery Card
name: card_battery
category: card
explanation: "The `battery-card` is a slightly enhanced `generic-card`, just to ease the use. You could always configure it from the `generic-card` yourself."
image_path: "/assets/images/card_battery.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: entity
    type: entry
    example: sensor.livingroom_thermometer_battery
    required: true 
    explanation: "This is your battery entity"
  - name: ulm_card_battery_attribute
    type: variable
    example: battery_attribute
    required: false 
    explanation: "If your entity provides the battery percent in an attribute (= not as an own sensor), fill in the <u>attributes name</u> here. Eg. if you have `sensor.livingroom_thermometer` and the attribute for your battery power is `sensor.livingroom_thermometer.attributes.battery_percent`, you fill in <i>battery_percent</i> here."
yaml: |-
  - type: 'custom:button-card'
    template: card_battery
    variables:
      ulm_card_battery_attribute: battery_attribute
    entity: sensor.livingoom_thermometer_battery
ui: |-
  type: 'custom:button-card'
  template: card_battery
  variables:
    ulm_card_battery_attribute: battery_attribute
  entity: sensor.livingoom_thermometer_battery
code: |-
  card_battery:
    template:
      - icon_info_bg
    tap_action:
      action: more-info
    variables:
      ulm_card_battery_attribute:
    icon: |
      [[[
        var icon = "mdi:help-circle-outline";
        var battery = variables.ulm_card_battery_attribute !== null
          ? states[entity.entity_id].attributes[variables.ulm_card_battery_attribute]
          : states[entity.entity_id].state;
  
        if (battery == 100) {
          icon = "mdi:battery";
        } else if (battery >= 90) {
          icon = "mdi:battery-90";
        } else if (battery >= 80) {
          icon = "mdi:battery-80";
        } else if (battery >= 70) {
          icon = "mdi:battery-70";
        } else if (battery >= 60) {
          icon = "mdi:battery-60";
        } else if (battery >= 50) {
          icon = "mdi:battery-50";
        } else if (battery >= 40) {
          icon = "mdi:battery-40";
        } else if (battery >= 30) {
          icon = "mdi:battery-30";
        } else if (battery >= 20) {
          icon = "mdi:battery-20";
        } else if (battery >= 10) {
          icon = "mdi:battery-10";
        } else {
          icon = "mdi:battery-outline";
        }
  
        return icon;
      ]]]
    label: |
      [[[
        var battery = variables.ulm_card_battery_attribute !== null
          ? states[entity.entity_id].attributes[variables.ulm_card_battery_attribute]
          : states[entity.entity_id].state;
        return battery + "%";
      ]]]
    name: |
      [[[
        return states[entity.entity_id].attributes.friendly_name;
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