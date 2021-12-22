---
title: Welcome Card
name: custom_card_paddy_welcome
category: custom_card
author: paddy0174
explanation: "The `custom_card_paddy_welcome` shows a welcome message to the logged in user(name) and can show additional infos like news, notifications, weather, buttons or...<br>Three different variants in the download: welcome-card, welcome-card with weather and welcome-card with news (homefeed-card)"
image_path: "https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet"
internal: false
generator_install: true
generator_example: true
generator_button: true
languages:
  - language: de
    code: |
      ulm_custom_card_paddy_welcome_language_variables:
        variables:
          ulm_custom_card_paddy_welcome_morning: 'Guten Morgen'
          ulm_custom_card_paddy_welcome_afternoon: 'Guten Tag'
          ulm_custom_card_paddy_welcome_evening: 'Guten Abend'
          ulm_custom_card_paddy_welcome_hello: 'Hallo'
  - language: fr
    code: |
      ulm_custom_card_paddy_welcome_language_variables:
        variables:
          ulm_custom_card_paddy_welcome_morning: 'Bon matin'
          ulm_custom_card_paddy_welcome_afternoon: 'Bonjour'
          ulm_custom_card_paddy_welcome_evening: 'Bonne soirée'
          ulm_custom_card_paddy_welcome_hello: 'Salut'
  - language: en
    code: |
      ulm_custom_card_paddy_welcome_language_variables:
        variables:
          ulm_custom_card_paddy_welcome_morning: 'Good morning'
          ulm_custom_card_paddy_welcome_afternoon: 'Good afternoon'
          ulm_custom_card_paddy_welcome_evening: 'Good evening'
          ulm_custom_card_paddy_welcome_hello: 'Hello'
variants:
  - name: custom_card_paddy_welcome
    title: Welcome Card
    variables:
      - name: ulm_custom_card_paddy_welcome_time
        type: variable
        example: sensor.time
        required: true 
        explanation: "This is your `time` sensor in Home Assistant."
    yaml: |-
      - type: 'custom:button-card'
        template: custom_card_paddy_welcome
        variables:
          ulm_custom_card_paddy_welcome_time: sensor.time
    ui: |-
      type: 'custom:button-card'
      template: custom_card_paddy_welcome
      variables:
        ulm_custom_card_paddy_welcome_time: sensor.time
    code: |-
      custom_card_paddy_welcome:
        template:
          - ulm_custom_card_paddy_welcome_language_variables
        show_icon: false
        show_name: false
        show_label: false
        styles:
          grid:
            - grid-template-areas: '"item1"'
            - grid-template-columns: 1fr
            - grid-template-rows: min-content
            - row-gap: 12px
          card:
            - border-radius: var(--border-radius)
            - box-shadow: var(--box-shadow)
            - padding: 12px
        custom_fields:
          item1:
            card:
              type: markdown
              content: >
                [[[
                  let time = states[variables.ulm_custom_card_paddy_welcome_time].state;
                  let welcome = '';
      
                  if (time > '18:00'){
                    welcome = variables.ulm_custom_card_paddy_welcome_evening; 
                  } else if (time > '12:00'){
                    welcome = variables.ulm_custom_card_paddy_welcome_afternoon;
                  } else if (time > '05:00'){
                    welcome = variables.ulm_custom_card_paddy_welcome_morning;
                  } else {
                    welcome = variables.ulm_custom_card_paddy_welcome_hello;
                  }
      
                  return welcome + ',<br>' + user.name + '!';
                ]]]
              card_mod:
              style: |
                ha-card {
                  border-radius: 14px;
                  box-shadow: none;
                  font-size: 30px;
                  text-align: left;
                  cursor: default;
                }
  - name: custom_card_paddy_welcome_with_weather
    title: Welcome Card with Weather
    variables:
      - name: ulm_custom_card_paddy_welcome_time
        type: variable
        example: sensor.time
        required: true 
        explanation: "This is your `time` sensor in Home Assistant."
      - name: ulm_custom_card_paddy_welcome_weather_provider
        type: variable
        example: weather.accu_weather
        required: true 
        explanation: "Your Home Assistant weather provider"
    yaml: |-
      - type: 'custom:button-card'
        template: custom_card_paddy_welcome_with_weather
        variables:
          ulm_custom_card_paddy_welcome_time: sensor.time
          ulm_custom_card_paddy_welcome_weather_provider: weather.accu_weather
    ui: |-
      type: 'custom:button-card'
      template: custom_card_paddy_welcome_with_weather
      variables:
        ulm_custom_card_paddy_welcome_time: sensor.time
        ulm_custom_card_paddy_welcome_weather_provider: weather.accu_weather
    code: |-
      custom_card_paddy_welcome_with_weather:
        template:
          - ulm_custom_card_paddy_welcome_language_variables
        show_icon: false
        show_name: false
        show_label: false
        styles:
          grid:
            - grid-template-areas: '"item1" "item2"'
            - grid-template-columns: 1fr
            - grid-template-rows: min-content min-content
            - row-gap: 12px
          card:
            - border-radius: var(--border-radius)
            - box-shadow: var(--box-shadow)
            - padding: 12px
        custom_fields:
          item1:
            card:
              type: markdown
              content: >
                [[[
                  let time = states[variables.ulm_custom_card_paddy_welcome_time].state;
                  let welcome = '';
      
                  if (time > '18:00'){
                    welcome = variables.ulm_custom_card_paddy_welcome_evening; 
                  } else if (time > '12:00'){
                    welcome = variables.ulm_custom_card_paddy_welcome_afternoon;
                  } else if (time > '05:00'){
                    welcome = variables.ulm_custom_card_paddy_welcome_morning;
                  } else {
                    welcome = variables.ulm_custom_card_paddy_welcome_hello;
                  }
      
                  return welcome + ',<br>' + user.name + '!';
                ]]]
              card_mod:
              style: |
                ha-card {
                  border-radius: 14px;
                  box-shadow: none;
                  font-size: 30px;
                  text-align: left;
                  cursor: default;
                }
          item2:
            card:
              type: weather-forecast
              entity: "[[[ return variables.ulm_custom_card_paddy_welcome_weather_provider; ]]]"
              show_forecast: false
              card_mod:
              style: |
                ha-card.type-weather-forecast {
                  border-radius: 14px;
                  box-shadow: none;
                }
                ha-card.type-weather-forecast .state {
                  text-align: left;
                  font-size: 14px;
                  font-weight: bolder;
                }
                ha-card.type-weather-forecast .name {
                  text-align: left;
                  font-size: 14px;
                }
                ha-card.type-weather-forecast .temp-attribute {
                  text-align: right;
                }
                ha-card.type-weather-forecast .temp {
                  text-align: right;
                  font-size: medium;
                  font-weight: bolder;
                  margin-right: 16px;
                }
                ha-card.type-weather-forecast .temp span {
                  text-align: right;
                  font-size: medium;
                  font-weight: bolder;
                }
                ha-card.type-weather-forecast .attribute {
                  text-align: right;
                  font-size: smaller;
                }
  - name: custom_card_paddy_welcome_with_news
    title: Welcome Card With News
    variables:
      - name: ulm_custom_card_paddy_welcome_time
        type: variable
        example: sensor.time
        required: true 
        explanation: "This is your `time` sensor in Home Assistant."
      - name: ulm_custom_card_paddy_welcome_news_entities
        type: variable
        example: |-
          <pre><code class="language-yaml" style="border: 0;">ulm_custom_card_paddy_welcome_news_entities:
            - entity: sensor.waste_collection_paper
              content_template: "<b>{{display_name}}</b><br>{{state}}"
            - entity: sensor.waste_collection_waste
              content_template: "<b>{{display_name}}</b><br>{{state}}"</code></pre> 
        required: true 
        explanation: |-
          These are the entities, that get listed in your news-feed.<br>Please see the documentation of <a href="https://github.com/gadgetchnnel/lovelace-home-feed-card">home-feed-card</a> to see all the available options.<br>We also provide an example for the configuration in our <a href="">G.E.T.S.</a> category.
    required_cards:
      - name: lovelace-home-feed-card
        link: https://github.com/gadgetchnnel/lovelace-home-feed-card
    yaml: |-
      - type: 'custom:button-card'
        template: custom_card_paddy_welcome_with_news
        variables:
          ulm_custom_card_paddy_welcome_time: sensor.time
          ulm_custom_card_paddy_welcome_news_entities:
            - entity: sensor.waste_collection_paper
              content_template: "<b>{{display_name}}</b><br>{{state}}"
            - entity: sensor.waste_collection_waste
              content_template: "<b>{{display_name}}</b><br>{{state}}" 
    ui: |-
      type: 'custom:button-card'
      template: custom_card_paddy_welcome_with_news
      variables:
        ulm_custom_card_paddy_welcome_time: sensor.time
        ulm_custom_card_paddy_welcome_news_entities: 
          - entity: sensor.waste_collection_paper
            content_template: "<b>{{display_name}}</b><br>{{state}}"
          - entity: sensor.waste_collection_waste
            content_template: "<b>{{display_name}}</b><br>{{state}}"
    code: |-
      custom_card_paddy_welcome_with_news:
        template:
          - ulm_custom_card_paddy_welcome_language_variables
        show_icon: false
        show_name: false
        show_label: false
        styles:
          grid:
            - grid-template-areas: '"item1" "item2"'
            - grid-template-columns: 1fr
            - grid-template-rows: min-content min-content
            - row-gap: 12px
          card:
            - border-radius: var(--border-radius)
            - box-shadow: var(--box-shadow)
            - padding: 12px
        custom_fields:
          item1:
            card:
              type: markdown
              content: >
                [[[
                  let time = states[variables.ulm_custom_card_paddy_welcome_time].state;
                  let welcome = '';
      
                  if (time > '18:00'){
                    welcome = variables.ulm_custom_card_paddy_welcome_evening; 
                  } else if (time > '12:00'){
                    welcome = variables.ulm_custom_card_paddy_welcome_afternoon;
                  } else if (time > '05:00'){
                    welcome = variables.ulm_custom_card_paddy_welcome_morning;
                  } else {
                    welcome = variables.ulm_custom_card_paddy_welcome_hello;
                  }
      
                  return welcome + ',<br>' + user.name + '!';
                ]]]
              card_mod:
              style: |
                ha-card {
                  border-radius: 14px;
                  box-shadow: none;
                  font-size: 30px;
                  text-align: left;
                  cursor: default;
                }
          item2:
            card:
              type: 'custom:home-feed-card'
              card_id: main_feed
              show_empty: false
              more_info_on_tap: true
              state_color: false
              compact_mode: true
              max_item_count: 3
              show_icons: true 
              entities: >
                [[[
                  return variables.ulm_custom_card_paddy_welcome_news_entities;
                ]]]
              card_mod:
              style: |
                ha-card {
                  border-radius: 14px;
                  box-shadow: none;
                  font-size: 14px;
                  text-align: left;
                }
---