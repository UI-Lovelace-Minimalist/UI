---
title: Waste Collection Card
name: custom_card_paddy_waste_collection
category: custom_card
author: paddy0174
explanation: "The `custom_card_paddy_waste_collection` shows you a button for the next waste collection date. On the day of collection and the day before, the icon and text will be red, to alert you."
image_path: "/assets/images/custom_card_paddy_waste_collection.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variants:
  - name: 
    title: 
    variables:
      - name: entity
        type: entry
        example: sensor.waste_collection_paper
        required: true 
        explanation: "Your entity from waste_collection_framework"
    required_cards:
      - name: Waste Collection Framework
        link: https://github.com/mampfes/hacs_waste_collection_schedule
    information: |-
      This is my `sensor` setup in HA. I do the change from "days" to "friendly days" in my template sensor.
      <ul>
        <li>Don't forget to set `add_days_to` in your `sensor` config</li>
        <li>"HEUTE" is german for today or aujourd'hui | "MORGEN" is german for tomorrow or demain</li>
      </ul>
      
      <pre><code class="language-yaml" style="border: 0">
      sensor:
        - platform: waste_collection_schedule
          name: waste_collection_paper
          details_format: upcoming
          add_days_to: true # this line is important
          value_template:  >-
            {% if value.daysTo == 0 %}
            HEUTE
            {% elif value.daysTo == 1 %}
            MORGEN
            {% else %}
            in {{value.daysTo}} Tagen
            {% endif %}
          types:
            - Papiertonne
      </code></pre>
    yaml: |-
      - type: 'custom:button-card'
        template: custom_card_paddy_waste_collection
        entity: sensor.waste_collection_paper
    ui: |-
      type: 'custom:button-card'
      template: custom_card_paddy_waste_collection
      entity: sensor.waste_collection_paper
    code: |-
      custom_card_paddy_waste_collection:
        template:
          - card_generic_swap
        state:
          - operator: template
            value: "[[[ return states[entity.entity_id].attributes.daysTo == 0; ]]]"
            styles:
              img_cell:
                - background-color: 'rgba(var(--color-red),0.5)'
              icon:
                - color: 'rgba(var(--color-red),1)'
              custom_fields:
                notification:
                  - border-radius: 50%
                  - position: absolute
                  - left: 38px
                  - top: 8px
                  - height: 16px
                  - width: 16px
                  - border: 2px solid var(--card-background-color)
                  - font-size: 12px
                  - line-height: 14px
                  - background-color: >
                      [[[
                        return "rgba(var(--color-red),1)";
                      ]]]
          - operator: template
            value: "[[[ return states[entity.entity_id].attributes.daysTo == 1; ]]]"
            styles:
              img_cell:
                - background-color: 'rgba(var(--color-red),0.05)'
              icon:
                - color: 'rgba(var(--color-red),1)'
              custom_fields:
                notification:
                  - border-radius: 50%
                  - position: absolute
                  - left: 38px
                  - top: 8px
                  - height: 16px
                  - width: 16px
                  - border: 2px solid var(--card-background-color)
                  - font-size: 12px
                  - line-height: 14px
                  - background-color: >
                      [[[
                        return "rgba(var(--color-red),1)";
                      ]]]
          - value: 'unavailable'
            styles:
              custom_fields:
                notification:
                  - border-radius: 50%
                  - position: absolute
                  - left: 38px
                  - top: 8px
                  - height: 16px
                  - width: 16px
                  - border: 2px solid var(--card-background-color)
                  - font-size: 12px
                  - line-height: 14px
                  - background-color: >
                      [[[
                        return "rgba(var(--color-red),1)";
                      ]]]
        custom_fields:
          notification: >
            [[[
              if (entity.state == 'unavailable' || states[entity.entity_id].attributes.daysTo == 0 || states[entity.entity_id].attributes.daysTo == 1){
                return '<ha-icon icon="mdi:exclamation" style="width: 12px; height: 12px; color: var(--primary-background-color);"></ha-icon>'
              }
            ]]]
---