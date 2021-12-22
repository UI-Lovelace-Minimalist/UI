---
title: Title
name: card_title
category: title
explanation: "Titles (and optionally subtitles) are used to seperate different areas in your design. You can use only a title, only a subtitle or both at once."
image_path: "/assets/images/card_title.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: name
    type: entry
    example: My_Title
    required: true 
    explanation: "This is a main title (either title or subtitle is required)"
  - name: label
    type: entry
    example: My_Subtitle
    required: true 
    explanation: "This is a subtitle (either title or subtitle is required)"
yaml: |-
  - type: 'custom:button-card'
    template: card_title
    name: My Title
    label: 'Subtitle'  
ui: |-
  type: 'custom:button-card'
  template: card_title
  name: My Title
  label: 'Subtitle'
code: |-
  card_title:
    tap_action:
      action: none
    show_icon: false
    show_label: true
    show_name: true
    styles:
      card:
        - background-color: rgba(0,0,0,0)
        - box-shadow: none
        - height: auto
        - width: auto
        - margin-top: 12px
        - margin-left: 24px
        - margin-bottom: 0px
      grid:
        - grid-template-areas: '"n" "l"'
        - grid-template-columns: 1fr
        - grid-template-rows: min-content min-content
      name:
        - justify-self: start
        - font-weight: bold
        - font-size: '1.5rem'
      label:
        - justify-self: start
        - font-weight: bold
        - font-size: '1rem'
        - opacity: '0.4'
---