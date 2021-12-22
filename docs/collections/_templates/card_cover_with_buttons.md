---
title: Cover Card with buttons
name: card_cover_with_buttons
category: card
explanation: |-
  With the `cover-card` you have the state of your cover and on the second line UP / PAUSE / DOWN to control it.
image_path: "/assets/images/card_cover_with_buttons.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: ulm_card_cover_with_buttons_entity
    type: variable
    example: cover.livingroom_window
    required: true
    explanation: "The <i>entity_id</i> of your cover"
  - name: ulm_card_cover_with_buttons_name
    type: variable
    example: Cover Livingroom Window
    required: false 
    explanation: "The name of your cover entity"
yaml: |-
  - type: 'custom:button-card'
    template: 
      - card_cover_with_buttons
    variables:
      ulm_card_cover_with_buttons_name: "Cover Livingroom Window"
      ulm_card_cover_with_buttons_entity: "cover.livingroom_window"
ui: |-
  type: 'custom:button-card'
  template: 
    - card_cover_with_buttons
  variables:
    ulm_card_cover_with_buttons_name: "Cover Livingroom Window"
    ulm_card_cover_with_buttons_entity: "cover.livingroom_window"
code: |-
  card_cover_with_buttons:
    variables:
      ulm_card_cover_with_buttons_name: "n/a"
    triggers_update:
      - "[[[ variables.ulm_card_cover_with_buttons_entity ]]]"
    styles:
      grid:
        - grid-template-areas: '"item1" "item2"'
        - grid-template-columns: 1fr
        - grid-template-rows: min-content  min-content
        - row-gap: 12px
      card:
        - border-radius: var(--border-radius)
        - box-shadow: var(--box-shadow)
        - padding: 12px
    custom_fields:
      item1:
        card:
          type: 'custom:button-card'
          template:
            - icon_info
            - ulm_language_variables
            - cover
          tap_action:
            action: more-info
          entity: '[[[ return variables.ulm_card_cover_with_buttons_entity ]]]'
          name: '[[[ return variables.ulm_card_cover_with_buttons_name ]]]'
      item2:
        card:
          type: 'custom:button-card'
          template: list_items
          custom_fields:
            item1:
              card:
                type: 'custom:button-card'
                template: widget_icon
                tap_action:
                  action: call-service
                  service: cover.close_cover
                  service_data:
                    entity_id: '[[[ return variables.ulm_card_cover_with_buttons_entity ]]]'
                icon: 'mdi:arrow-down'
            item2:
              card:
                type: 'custom:button-card'
                template: widget_icon
                tap_action:
                  action: call-service
                  service: cover.stop_cover
                  service_data:
                    entity_id: '[[[ return variables.ulm_card_cover_with_buttons_entity ]]]'
                icon: 'mdi:pause'
            item3:
              card:
                type: 'custom:button-card'
                template: widget_icon
                tap_action:
                  action: call-service
                  service: cover.open_cover
                  service_data:
                    entity_id: '[[[ return variables.ulm_card_cover_with_buttons_entity ]]]'
                icon: 'mdi:arrow-up'
---