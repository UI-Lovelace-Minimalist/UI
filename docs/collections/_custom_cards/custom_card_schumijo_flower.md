---
title: Flower Card
name: custom_card_schumijo_flower
category: custom_card
author: schumijo
explanation: "This is the `card_flower`, used to display a plant entity. Shows state of the plant and attributes."
image_path: "/assets/images/flower.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
languages:
  - language: de
    code: |
      ulm_custom_card_schumijo_flower_language_variables:
        variables:
          ulm_custom_card_schumijo_flower_problem: "Problem"
          ulm_custom_card_schumijo_flower_correct: "In Ordnung"
  - language: fr
    code: |
      ulm_custom_card_schumijo_flower_language_variables:
        variables:
          ulm_custom_card_schumijo_flower_problem: "Problème"
          ulm_custom_card_schumijo_flower_correct: "Correct"
  - language: en
    code: |
      ulm_custom_card_schumijo_flower_language_variables:
        variables:
          ulm_custom_card_schumijo_flower_problem: "Problem"
          ulm_custom_card_schumijo_flower_correct: "Correct"
variants:
  - name: 
    title: 
    variables:
      - name: ulm_card_flower_entity
        type: variable
        example: plant.bonsai_ficus
        required: true 
        explanation: "The entity of your plant"
      - name: ulm_card_flower_name
        type: variable
        example: Bonsai Ficus
        required: false
        explanation: "The name of your plant"
      - name: ulm_card_flower_species
        type: variable
        example: "ficus retusa"
        required: true 
        explanation: "The species of your plant"
    required_cards:
      - name: lovelace-flower-card
        link: https://github.com/thomasloven/lovelace-flower-card
    yaml: |-
      - type: 'custom:button-card'
        template: card_flower
        variables:
          ulm_card_flower_entity: plant.bonsai_ficus
          ulm_card_flower_name: Bonsai Ficus
          ulm_card_flower_species: "ficus retusa"
    ui: |-
      type: 'custom:button-card'
      template: card_flower
      variables:
        ulm_card_flower_entity: plant.bonsai_ficus
        ulm_card_flower_name: Bonsai Ficus
        ulm_card_flower_species: "ficus retusa"
    code: |-
      list_1_item:
        styles:
          card:
            - box-shadow: none
            - padding: 0px
          grid:
            - grid-template-areas: '"item1"'
            - grid-template-columns: 1fr
            - grid-template-rows: min-content
            - column-gap: 7px
      
      flower:
        template:
          - ulm_custom_card_schumijo_flower_language_variables
        tap_action:
          action: more-info
        icon: |
          [[[
              var icon = 'mdi:flower';
              if (entity.state == 'problem'){
                var icon = 'mdi:alert-circle';
              }
              return icon ;
          ]]]
        label: >-
          [[[ 
              if (entity.state == 'problem'){
                return variables.ulm_custom_card_schumijo_flower_problem;
              }else{
                return variables.ulm_custom_card_schumijo_flower_correct;
              }
          ]]]
        state:
          - operator: template
            value: >
              [[[
                return entity.state != 'on';
              ]]]
            styles:
              icon:
                - color: "rgba(var(--color-green),1)"
              img_cell:
                - background-color: "rgba(var(--color-green),0.2)"
      
      card_flower:
        variables:
          ulm_card_flower_name: "No name set"
        styles:
          card:
            - border-radius: 20px
            - box-shadow: var(--box-shadow)
            - padding: 12px
          grid:
            - grid-template-areas: '"item1" "item2"'
            - grid-template-columns: 1fr
            - grid-template-rows: min-content  min-content
            - row-gap: 6px
        custom_fields:
          item1:
            card:
              entity: "[[[ return variables.ulm_card_flower_entity ]]]"
              name: "[[[ return variables.ulm_card_flower_name ]]]"
              tap_action:
                action: more-info
              template:
                - icon_info
                - flower
              type: "custom:button-card"
          item2:
            card:
              template: list_1_item
              type: "custom:button-card"
              custom_fields:
                item1:
                  card:
                    type: custom:flower-card
                    entity: "[[[ return variables.ulm_card_flower_entity ]]]"
                    species: "[[[ return variables.ulm_card_flower_species ]]]"
                    card_mod:
                      style: |
                        ha-card{
                          margin-top: 0px !important;
                          box-shadow: none !important;
                          --mdc-icon-size: 16px !important;
                        }
                        .header{
                          display: none !important;
                        }
                        .divider{
                          display: none !important;
                        }
                        .value{
                          display: none !important;
                        }
                        .attributes{
                          padding: 0px !important;
                        }
                        .attribute ha-icon {
                            margin-right: 0px !important;
                        }
---