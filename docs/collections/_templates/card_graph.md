---
title: Graph Card
name: card_graph
category: card
explanation: |-
  The `card_graph` shows an entity with the actual state and a *min-graph-card* integrated. This can be used for a thermostat to show the actual temperature and the history."
image_path: "/assets/images/card_graph.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: ulm_card_graph_color
    type: variable
    example: var(--google-blue)
    required: false
    explanation: |-
      This is to adjust your color value. Use a CSS varible from HA or set a color value (eg. #FFFFFF)
  - name: ulm_card_graph_name
    type: variable
    example: Temperature Livingroom
    required: false 
    explanation: "The name of your sensor"
  - name: ulm_card_graph_entity
    type: variable
    example: sensor.livingroom_temperature
    required: true 
    explanation: "Your <i>entity_id</i> for the temperature sensor"
yaml: |-
  - type: 'custom:button-card'
    template: card_graph
    variables:
      ulm_card_graph_color: "var(--google-blue)"
      ulm_card_graph_name: Temperature Livingroom
      ulm_card_graph_entity: sensor.livingroom_temperature
ui: |-
  type: 'custom:button-card'
  template: card_graph
  variables:
    ulm_card_graph_color: "var(--google-blue)"
    ulm_card_graph_name: Temperature Livingroom
    ulm_card_graph_entity: sensor.livingroom_temperature
code: |-
  card_graph:
    variables:
      ulm_card_graph_color: "var(--info-color)"
      ulm_card_graph_name: "n/a"
    triggers_update:
      - "[[[ variables.ulm_card_graph_entity ]]]"
    styles:
      grid:
        - grid-template-areas: '"item1" "item2"'
        - grid-template-columns: 1fr
        - grid-template-rows: min-content  min-content
      card:
        - border-radius: var(--border-radius)
        - box-shadow: var(--box-shadow)
        - padding: 0px
    custom_fields:
      item1:
        card:
          type: 'custom:button-card'
          template: 
            - icon_info
            - card_generic
          styles:
            card:
              - box-shadow: none
              - border-radius: var(--border-radius) var(--border-radius) 0px 0px
              - padding: 12px
          entity: '[[[ return variables.ulm_card_graph_entity ]]]'
          name: '[[[ return variables.ulm_card_graph_name ]]]'
      item2:
        card:
          type: 'custom:mini-graph-card'
          entities:
            - entity: '[[[ return variables.ulm_card_graph_entity ]]]'
          line_color: '[[[ return variables.ulm_card_graph_color ]]]'
          show:
            name: false
            icon: false
            legend: false
            state: false
          style: |
            ha-card {
              box-shadow: none;
              border-radius: var(--border-radius);
            }
---