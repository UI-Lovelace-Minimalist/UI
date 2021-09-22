# Custom-card Welcome
This is a `custom-card` to show a welcome message to the user. It comes in four different versions:  

* welcome message (*custom_card_paddy_welcome*)
* welcome message + date (*custom_card_paddy_welcome_with_date*)
* welcome message + weather-forecast (*custom_card_paddy_welcome_with_weather*)
* welcome message + news (*custom_card_paddy_welcome_with_news*) [based on home-feed-card]

The card shows a time based message (good morning/afternoon/evening/hello) to the logged-in user with username. The second part of the card varies depending on what version you choose. *Note, that you have different requirements depending on the version!*

## Credits
Author: Paddy0174 - 2021  
Version: 1.0.0  

## Changelog
<details>
<summary>1.0.0</summary>
Initial release
</details>

## Usage

```yaml
- type: custom:button-card
  template: custom_card_paddy_welcome

- type: custom:button-card
  template: custom_card_paddy_welcome_with_date

- type: custom:button-card
  template: custom_card_paddy_welcome_with_weather

- type: custom:button-card
  template: custom_card_paddy_welcome_with_news
```

## Requirements
This card needs the following to function correctly:
<table>
<tr>
<th>Component / card</th>
<th>required</th>
<th>Note</th>
</tr>
<tr>
<td><a href="https://github.com/thomasloven/lovelace-card-mod">lovelace-card-mod</a></td>
<td>yes</td>
<td></td>
</tr>
<tr>
<td><a href="https://www.home-assistant.io/integrations/#search/weather">a weather integration/provider</a></td>
<td>for <i>welcome-card-with-weather</i></td>
<td>See setup instructions for a HA weather integration</td>
</tr>
<tr>
<td><a href="">home-feed-card</a></td>
<td>for <i>welcome-card-with-news</td>
<td></td>
</tr>
</table>

## Template code

```yaml
ccustom_card_paddy_welcome:
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
          {% set time = now() | as_timestamp | timestamp_custom("%H:%M") %}
          {% set welcome = '' %}
          {% if (time > '18:00') %}
          {% set welcome = 'Guten Abend' %}
          {% elif (time > '12:00') %}
          {% set welcome = 'Guten Tag' %}
          {% elif (time > '04:00') %}
          {% set welcome = 'Guten Morgen' %}
          {% else %}
          {% set welcome = 'Hallo' %}
          {% endif %}

          {{ welcome }},<br />
          {{ user }}!
        card_mod:
        style: |
          ha-card {
            border-radius: 14px;
            box-shadow: none;
            font-size: 30px;
            text-align: left;
          }

custom_card_paddy_welcome_with_date:
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
          {% set time = now() | as_timestamp | timestamp_custom("%H:%M") %}
          {% set welcome = '' %}
          {% if (time > '18:00') %}
          {% set welcome = 'Guten Abend' %}
          {% elif (time > '12:00') %}
          {% set welcome = 'Guten Tag' %}
          {% elif (time > '04:00') %}
          {% set welcome = 'Guten Morgen' %}
          {% else %}
          {% set welcome = 'Hallo' %}
          {% endif %}

          {{ welcome }},<br />
          {{ user }}!
        card_mod:
        style: |
          ha-card {
            border-radius: 14px;
            box-shadow: none;
            font-size: 30px;
            text-align: left;
          }
    item2:
      card:
        type: markdown
        content: >
          {% set date = now() | as_timestamp | timestamp_custom("%d.%m.%Y") %}
          {% set friendly_day = '' %}
          {% set dayofweek = now().weekday() %}
          {% if (dayofweek == 1) %}
          {% set friendly_day = 'Montag' %}
          {% elif (dayofweek == 2) %}
          {% set friendly_day = 'Dienstag' %}
          {% elif (dayofweek == 3) %}
          {% set friendly_day = 'Mittwoch' %}
          {% elif (dayofweek == 4) %}
          {% set friendly_day = 'Donnerstag' %}
          {% elif (dayofweek == 5) %}
          {% set friendly_day = 'Freitag' %}
          {% elif (dayofweek == 6) %}
          {% set friendly_day = 'Samstag' %}
          {% elif (dayofweek == 0) %}
          {% set friendly_day = 'Sonntag' %}
          {% endif %}
          
          Heute ist {{ friendly_day }}, der {{ date }}
        card_mod:
        style: |
          ha-card {
            border-radius: 14px;
            box-shadow: none;
            text-align: left;
          }

custom_card_paddy_welcome_with_weather:
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
          {% set time = now() | as_timestamp | timestamp_custom("%H:%M") %}
          {% set welcome = '' %}
          {% if (time > '18:00') %}
            {% set welcome = 'Guten Abend' %}
          {% elif (time > '12:00') %}
            {% set welcome = 'Guten Tag' %}
          {% elif (time > '04:00') %}
            {% set welcome = 'Guten Morgen' %}
          {% else %}
            {% set welcome = 'Hallo' %}
          {% endif %}

          {{ welcome }},<br />
          {{ user }}!
        card_mod:
        style: |
          ha-card {
            border-radius: 14px;
            box-shadow: none;
            font-size: 30px;
            text-align: left;
          }
    item2:
      card:
        type: weather-forecast
        entity: weather.accu_weather
        show_forecast: false
        card_mod:
        style: |
          ha-card {
            border-radius: 14px;
            box-shadow: none;
          }

custom_card_paddy_welcome_with_news:
  show_icon: false
  show_name: false
  show_label: false
  styles:
    grid:
      - grid-template-areas: '"item1" "item2" "item3"'
      - grid-template-columns: 1fr
      - grid-template-rows: min-content min-content min-content
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
          {% set time = now() | as_timestamp | timestamp_custom("%H:%M") %}
          {% set welcome = '' %}
          {% if (time > '18:00') %}
            {% set welcome = 'Guten Abend' %}
          {% elif (time > '12:00') %}
            {% set welcome = 'Guten Tag' %}
          {% elif (time > '04:00') %}
            {% set welcome = 'Guten Morgen' %}
          {% else %}
            {% set welcome = 'Hallo' %}
          {% endif %}

          {{ welcome }},<br />
          {{ user }}!
        card_mod:
        style: |
          ha-card {
            border-radius: 14px;
            box-shadow: none;
            font-size: 30px;
            text-align: left;
          }
    item2:
      card:
        type: markdown
        content: >
          Anderer Text
        card_mod:
        style: |
          ha-card {
            border-radius: 14px;
            box-shadow: none;
            text-align: left;
          }
    item3:
      card:
        type: 'custom:home-feed-card'
        card_id: main_feed
        show_empty: false
        more_info_on_tap: true
        state_color: true
        compact_mode: true
        max_item_count: 6
        show_icons: true 
        entities:
          - entity: input_datetime.alarm_clock_pat
            content_template: "{{display_name}} {{state}}"
          - entity: input_datetime.alarm_clock_steffi
            content_template: "{{display_name}} {{state}}"
          - entity: input_datetime.alarm_clock_ha
            content_template: "{{display_name}} {{state}}"
          - entity: sensor.waste_collection_bio
            content_template: "{{display_name}} {{state}}"
          - entity: sensor.waste_collection_paper
            content_template: "{{display_name}} {{state}}"
          - entity: sensor.waste_collection_plastic
            content_template: "{{display_name}} {{state}}"
          - entity: sensor.waste_collection_waste
            content_template: "{{display_name}} {{state}}"
        card_mod:
        style: |
          ha-card {
            border-radius: 14px;
            box-shadow: none;
          }
```

## Example
Here is one example, on how you can extend this (actually every) card. In the end we have the welcome card extended by four buttons to have something like a header with a navigation. 

```yaml
- type: horizontal-stack
    cards:
      - type: custom:button-card
        template: edge
      - type: custom:button-card
        template: custom_card_paddy_welcome
        # here we override the styles to extend the welcome card with a second item
        styles:
          grid:
            - grid-template-areas: '"item1" "item2"'
            - grid-template-rows: min-content min-content
            - row-gap: 12px
        custom_fields:
        # here we set up the second item and its contents
          item2:
            card:
              type: horizontal-stack
              cards:
                - type: custom:button-card
                  template: edge
                - type: custom:button-card
                  template: vertical_buttons
                  tap_action:
                    action: navigate
                    navigation_path: /ui-lovelace-minimalist/living
                  icon: "mdi:sofa"
                  name: Living
                  label: Livingroom
                - type: custom:button-card
                  template: vertical_buttons
                  tap_action:
                    action: navigate
                    navigation_path: /ui-lovelace-minimalist/working
                  icon: "mdi:factory"
                  name: Working
                  label: Office
                - type: custom:button-card
                  template: vertical_buttons
                  tap_action:
                    action: navigate
                    navigation_path: /ui-lovelace-minimalist/sleeping
                  icon: "mdi:bed-king-outline"
                  name: Sleeping
                  label: Bedroom
                - type: custom:button-card
                  template: vertical_buttons
                  tap_action:
                    action: navigate
                    navigation_path: /ui-lovelace-minimalist/climate
                  icon: "mdi:air-conditioner"
                  name: Air Conditioning
                  label: Livingroom
                - type: custom:button-card
                  template: edge          
      - type: custom:button-card
        template: edge
```

