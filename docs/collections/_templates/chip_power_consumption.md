---
title: Chip Power Consumption
name: chip_power_consumption
category: chip
explanation: "This `chip` shows you the electric consumption from a sensor. Configurable to show power (kWh) or price (currency)."
image_path: "/assets/images/power_consumption.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: ulm_chip_electric_consumption
    type: variable
    example: sensor.my_electric_power_consumption
    required: true 
    explanation: "This is your consumed energy. This is the sensor, that shows how many *kWh*s are consumed."
  - name: ulm_chip_electric_price
    type: variable
    example: sensor.my_electric_power_price
    required: true 
    explanation: |-
      This is the price for your consumed energy, if you have such a sensor. This should be a sensor that shows a price in your defined currency. If this variable is not set, the chip shows only the *kWh*s! If this variable is set the chip shows the price for the consumed energy!
yaml: |-
  - type: 'custom:button-card'
    template: chip_power_consumption
    variables:
      ulm_chip_electric_consumption: sensor.my_electric_power_consumption
      ulm_chip_electric_price: sensor.my_electric_power_price
ui: |-
  type: 'custom:button-card'
  template: chip_power_consumption
  variables:
    ulm_chip_electric_consumption: sensor.my_electric_power_consumption
    ulm_chip_electric_price: sensor.my_electric_power_price
code: |-
  chip_power_consumption:
    template:
      - chips
      - ulm_language_variables
    triggers_update:
      - "[[[ variables.ulm_chip_electric_consumption ]]]"
    label: |
      [[[
        var amount = variables.ulm_chip_electric_price != '' ? true : false
  
        if (amount){
          return '⚡ ' +  states[variables.ulm_chip_electric_price].state + variables.ulm_currency;
        } else {
          return '⚡ ' +  states[variables.ulm_chip_electric_consumption].state;
        }
      ]]]
---