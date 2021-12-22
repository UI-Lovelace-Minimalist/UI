---
title: Navigate Card
name: card_navigate
category: card
explanation: "The `card_navigate` is for navigating inside your HA dashboard(s)."
image_path: "/assets/images/card_navigate.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: ulm_card_navigate_path
    type: variable
    example: /ui-lovelace-minimalist/media
    required: true 
    explanation: "The path to your lovelace dashboard"
  - name: ulm_card_navigate_title
    type: variable
    example: Media
    required: true 
    explanation: "Title to show for the link"
  - name: ulm_card_navigate_icon
    type: variable
    example: mdi:television
    required: true 
    explanation: "Icon to show"
yaml: |-
  - type: custom:button-card
    template: card_navigate
    variables:
      ulm_card_navigate_path: /ui-lovelace-minimalist/media
      ulm_card_navigate_title: Media
      ulm_card_navigate_icon: mdi:television 
ui: |-
  type: custom:button-card
  template: card_navigate
  variables:
    ulm_card_navigate_path: /ui-lovelace-minimalist/media
    ulm_card_navigate_title: Media
    ulm_card_navigate_icon: mdi:television 
code: |-
  card_navigate:
    template: 
      - icon_only
      - blue_no_state
    tap_action:
      action: navigate
      navigation_path: "[[[ return variables.ulm_card_navigate_path; ]]]"
    label: "[[[ return variables.ulm_card_navigate_title; ]]]"
    icon: "[[[ return variables.ulm_card_navigate_icon; ]]]"
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