---
title: Chip Back Button
name: chip_back
category: chip
explanation: "This is a `back-button`, primarly used if you switch between views and want a convenient way back."
image_path: "/assets/images/chip_return.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: ulm_chip_back_path
    type: variable
    example: /ui-lovelace-minimalist/home
    required: true 
    explanation: "Set the navigation path to your default view, eg. <i>ui-lovelace-minimalist/home</i> or <i>lovelace</i>"
yaml: |-
  - type: 'custom:button-card'
    template: chip_back
    variables:
      ulm_chip_back_path: /ui-lovelace-minimalist/home
ui: |-
  type: 'custom:button-card'
  template: chip_back
  variables:
    ulm_chip_back_path: /ui-lovelace-minimalist/home
code: |-
  chip_back:
    template: chips
    tap_action:
      action: navigate
      navigation_path: "[[[ return variables.ulm_chip_back_path; ]]]"
    show_icon: true
    icon: 'mdi:arrow-left'
    styles:
      grid:
        - grid-template-areas: '"i"'
---