---
title: DWD Pollen Card
name: custom_card_paddy_dwd_pollen
category: custom_card
author: paddy0174
explanation: "This is a `custom-card` to show the pollen count, taken from the DWD pollen service via a rest sensor. This card is only available in german, as the DWD (DeutscherWetterDienst => GermanWeatherService) only publishes data for Germany. If you want a translation added, please feel free to open an issue in the repo."
image_path: "https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet"
internal: false
generator_install: true
generator_example: true
generator_button: true
languages:
  - language: de
    code: |
      custom_card_paddy_dwd_pollen_language_variables:
        variables:
          custom_card_paddy_dwd_pollen_6: "hoch"
          custom_card_paddy_dwd_pollen_5: "mittel bis hoch"
          custom_card_paddy_dwd_pollen_4: "mittel"
          custom_card_paddy_dwd_pollen_3: "gering bis mittel"
          custom_card_paddy_dwd_pollen_2: "gering"
          custom_card_paddy_dwd_pollen_1: "keine bis gering"
          custom_card_paddy_dwd_pollen_none: "keine"
variants:
  - name: 
    title: 
    variables:
      - name: entity
        type: entry
        example: sensor.dwd_pollenbelastung_birke
        required: true 
        explanation: 'Your sensor for "Pollenbelastung"'
    information: |-
      I use the following `rest` and `template` sensors in HA:
      
      <pre><code class="language-yaml" style="border: 0">sensor:
        - platform: rest
          scan_interval: 3600
          name: "DWD Pollenbelastung"
          resource: https://opendata.dwd.de/climate_environment/health/alerts/s31fg.json
          json_attributes_path: "$..content[?(@.partregion_id==XXX)].Pollen"
          json_attributes:
            #- Erle
            #- Beifuss
            #- Ambrosia
            - Birke
            #- Esche
            - Hasel
            - Graeser
            #- Roggen
          value_template: "{{ value_json.last_update }}"
        - platform: template
          sensors:
            dwd_pollenbelastung_birke:
              icon_template: "mdi:tree-outline"
              friendly_name: "Birke"
              value_template: >-
                {% set dwd_state = state_attr('sensor.dwd_pollenbelastung', 'Birke')['today'] %}
                {% if dwd_state == "3" %}6{% elif dwd_state == "2-3"%}5{% elif dwd_state == "2"%}4{% elif dwd_state == "1-2"%}3{% elif dwd_state == "1"%}2{% elif dwd_state == "0-1"%}1{% else %}0{% endif %}
              attribute_templates:
                today: >-
                  {% set dwd_state = state_attr('sensor.dwd_pollenbelastung', 'Birke')['today'] %}
                  {% if dwd_state == "3" %}6{% elif dwd_state == "2-3"%}5{% elif dwd_state == "2"%}4{% elif dwd_state == "1-2"%}3{% elif dwd_state == "1"%}2{% elif dwd_state == "0-1"%}1{% else %}0{% endif %}
                tomorrow: >-
                  {% set dwd_state = state_attr('sensor.dwd_pollenbelastung', 'Birke')['tomorrow'] %}
                  {% if dwd_state == "3" %}6{% elif dwd_state == "2-3"%}5{% elif dwd_state == "2"%}4{% elif dwd_state == "1-2"%}3{% elif dwd_state == "1"%}2{% elif dwd_state == "0-1"%}1{% else %}0{% endif %}
      </code></pre>
    yaml: |-
      - type: custom:button-card
        template: 
          - custom_card_paddy_dwd_pollen
        entity: sensor.dwd_pollenbelastung_birke
    ui: |-
      - type: custom:button-card
        template: 
          - custom_card_paddy_dwd_pollen
        entity: sensor.dwd_pollenbelastung_birke
    code: |-
      custom_card_paddy_dwd_pollen:
        template:
          - card_generic_swap
          - custom_card_paddy_dwd_pollen_language_variables
        label: >
          [[[
            if (entity.state == "6"){
              return variables.custom_card_paddy_dwd_pollen_6;
            } else if (entity.state == "5"){
              return variables.custom_card_paddy_dwd_pollen_5;
            } else if (entity.state == "4"){
              return variables.custom_card_paddy_dwd_pollen_4;
            } else if (entity.state == "3"){
              return variables.custom_card_paddy_dwd_pollen_3;
            } else if (entity.state == "2"){
              return variables.custom_card_paddy_dwd_pollen_2;
            } else if (entity.state == "1"){
              return variables.custom_card_paddy_dwd_pollen_1;
            }
            return variables.custom_card_paddy_dwd_pollen_none;
          ]]]
        state:
          - value: '6'
            styles:
              img_cell:
                - background-color: 'rgba(190,0,33,1)'
          - value: '5'
            styles:
              img_cell:
                - background-color: 'rgba(240,56,26,1)'
          - value: '4'
            styles:
              img_cell:
                - background-color: 'rgba(254,154,36,1)'
          - value: '3'
            styles:
              img_cell:
                - background-color: 'rgba(254,197,77,1)'
          - value: '2'
            styles:
              img_cell:
                - background-color: 'rgba(254,228,156,1)'
          - value: '1'
            styles:
              img_cell:
                - background-color: 'rgba(219,250,200,1)'
          - value: '0'
            styles:
              icon:
                - color: 'rgba(var(--color-theme),0.2)'
---