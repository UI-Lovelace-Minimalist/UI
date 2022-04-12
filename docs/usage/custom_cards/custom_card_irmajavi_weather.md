---
title: Weather Custom-card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Custom-card "Weather"

This is a `custom-card` to display states from weather entities or from a weather entity with multiples attributes (To use it with attributes need to modify the code)

![Screenshot](../../assets/img/screenshot_irmajavi_weather_card.jpg)

## Credits

Author: irmajavi - 2022
Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Requirements

In your `configuration.yaml` you need to create a new sensor in order to use the custom date format the card uses.

```yaml
  - platform: template
    sensors:
      date_long:
        friendly_name: 'Date and Day of week'
        value_template: >
          {% set months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dic"] %}
          {% set days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] %}
          {{ months[now().month-1] }}.{{ now().day }}th. {{ days[now().weekday()] }}
```

## Usage

```yaml
type: custom:button-card
template: custom_card_irmajavi_weather
variables:
  ulm_custom_card_irmajavi_weather: weather.aguada_2
  ulm_custom_card_irmajavi_weather_entity_1: sensor.aguada_wind
  ulm_custom_card_irmajavi_weather_entity_2: sensor.aguada_precipitation
  ulm_custom_card_irmajavi_weather_entity_3: sensor.aguada_uv_index
  ulm_custom_card_irmajavi_weather_entity_4: sensor.weather_humidity
  ulm_custom_card_irmajavi_weather_name_1: Wind
  ulm_custom_card_irmajavi_weather_name_2: Precipitation
  ulm_custom_card_irmajavi_weather_name_3: UV
  ulm_custom_card_irmajavi_weather_name_4: Humidity
  ulm_custom_card_irmajavi_weather_temperature_outside: sensor.aguada_realfeel_temperature
  ulm_custom_card_irmajavi_weather_date: sensor.date_long
```

## Variables

<table>
<thead>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>ulm_custom_card_irmajavi_weather</td>
<td>weather.yourplace</td>
<td>Yes</td>
<td>The main entity</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_weather_entity_1</td>
<td>weather.humidity</td>
<td>Yes</td>
<td>Weather entity</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_weather_entity_2</td>
<td>sensor.test1</td>
<td>Yes</td>
<td>Weather entity</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_weather_entity_3</td>
<td>sensor.test2</td>
<td>Yes</td>
<td>Weather entity</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_weather_entity_4</td>
<td>sensor.test3</td>
<td>Yes</td>
<td>Weather entity</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_weather_name_1</td>
<td>Wind</td>
<td>Yes</td>
<td>Entity name</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_weather_name_2</td>
<td>Humidity</td>
<td>Yes</td>
<td>Entity name</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_weather_name_3</td>
<td>UV Index</td>
<td>Yes</td>
<td>Entity name</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_weather_name_4</td>
<td>Precipitation</td>
<td>Yes</td>
<td>Entity name</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_weather_temperature_outside</td>
<td>sensor.test4</td>
<td>Yes</td>
<td>Weather entity</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_weather_date</td>
<td>sensor.test5</td>
<td>Yes</td>
<td>Custom date format sensor</td>
</tr>
</tbody>
</table>

## Template Code

```yaml
---
custom_card_irmajavi_weather:
  show_icon: false
  show_name: false
  show_label: false
  styles:
    grid:
      - grid-template-areas: "'item1' 'item2' 'item3' 'item4'"
      - grid-template-columns: "1fr"
      - grid-template-rows: "min-content min-content"
      - row-gap: "12px"
    card:
      - border-radius: "30px"
      - box-shadow: "var(--box-shadow)"
      - padding: "12px"
      - height: "160px"
  custom_fields:
    item1:
      card:
        type: "custom:button-card"
        color: "var(--google-grey)"
        show_icon: false
        show_label: true
        show_name: true
        styles:
          name:
            - justify-self: "end"
            - align-self: "end"
            - font-weight: "bold"
            - font-size: "20px"
            - border: "10px solid var(--google-grey)"
            - background-color: "var(--google-grey)"
            - color: "#000000"
            - border-radius: "12px"
            - margin-right: "10px"
            - margin-top: "'-4px'"
          label:
            - align-self: "start"
            - justify-self: "center"
            - font-weight: "bold"
            - font-size: "14px"
            - margin-left: "12px"
          grid:
            - grid-template-areas: "'l n item1'"
            - grid-template-columns: "min-content auto min-content"
            - grid-template-rows: "min-content min-content"
          card:
            - box-shadow: "none"
            - border-radius: "20px"
            - border: "2px solid var(--google-grey)"
            - height: "70px"
        label: |
          [[[
            var icon = '❔';
            if (states[variables.ulm_custom_card_irmajavi_weather].state == 'clear-night'){
              var icon = '🌙';
            } else if(states[variables.ulm_custom_card_irmajavi_weather].state == 'cloudy'){
              var icon = '☁️';
            } else if(states[variables.ulm_custom_card_irmajavi_weather].state == 'exceptional'){
              var icon = '🌞';
            } else if(states[variables.ulm_custom_card_irmajavi_weather].state == 'fog'){
              var icon = '🌫️';
            } else if(states[variables.ulm_custom_card_irmajavi_weather].state == 'hail'){
              var icon = '⛈️';
            } else if(states[variables.ulm_custom_card_irmajavi_weather].state == 'lightning'){
              var icon = '⚡';
            } else if(states[variables.ulm_custom_card_irmajavi_weather].state == 'lightning-rainy'){
              var icon = '⛈️';
            } else if(states[variables.ulm_custom_card_irmajavi_weather].state == 'partlycloudy'){
              var icon = '⛅';
            } else if(states[variables.ulm_custom_card_irmajavi_weather].state == 'pouring'){
              var icon = '🌧️';
            } else if(states[variables.ulm_custom_card_irmajavi_weather].state == 'rainy'){
              var icon = '💧';
            } else if(states[variables.ulm_custom_card_irmajavi_weather].state == 'snowy'){
              var icon = '❄️';
            } else if(states[variables.ulm_custom_card_irmajavi_weather].state == 'snowy-rainy'){
              var icon = '🌨️';
            } else if(states[variables.ulm_custom_card_irmajavi_weather].state == 'sunny'){
              var icon = '☀️';
            } else if(states[variables.ulm_custom_card_irmajavi_weather].state == 'windy'){
              var icon = '🌪️';
            }
            return icon + ' ' + states[variables.ulm_custom_card_irmajavi_weather_date].state;
          ]]]
        name: |
          [[[
            var unit = states[variables.ulm_custom_card_irmajavi_weather_temperature_outside].attributes.unit_of_measurement != null ? ' ' + states[variables.ulm_custom_card_irmajavi_weather_temperature_outside].attributes.unit_of_measurement : ''
            return states[variables.ulm_custom_card_irmajavi_weather_temperature_outside].state + unit;
          ]]]
    item2:
      card:
        type: "custom:button-card"
        template: "list_4_items"
        custom_fields:
          item1:
            card:
              type: "custom:button-card"
              template: "generic_text"
              entity: "[[[ return variables.ulm_custom_card_irmajavi_weather_entity_1; ]]]"
              name: "[[[ return variables.ulm_custom_card_irmajavi_weather_name_1; ]"
          item2:
            card:
              type: "custom:button-card"
              template: "generic_text"
              entity: "[[[ return variables.ulm_custom_card_irmajavi_weather_entity_2; ]]]"
              name: "[[[ return variables.ulm_custom_card_irmajavi_weather_name_2; ]]]"
          item3:
            card:
              type: "custom:button-card"
              template: "generic_text"
              entity: "[[[ return variables.ulm_custom_card_irmajavi_weather_entity_3; ]]]"
              name: "[[[ return variables.ulm_custom_card_irmajavi_weather_name_3; ]]]"
          item4:
            card:
              type: "custom:button-card"
              template: "generic_text"
              entity: "[[[ return variables.ulm_custom_card_irmajavi_weather_entity_4; ]]]"
              name: "[[[ return variables.ulm_custom_card_irmajavi_weather_name_4; ]]]"
generic_text:
  show_label: true
  show_icon: false
  label: |
    [[[
      var unit = entity.attributes.unit_of_measurement != null ? ' ' + entity.attributes.unit_of_measurement : ''
      return entity.state + unit;
    ]]]
  styles:
    name:
      - justify-self: "center"
      - align-self: "start"
      - font-weight: "bolder"
      - font-size: "12px"
      - filter: "opacity(40%)"
    label:
      - margin-top: "10px"
      - justify-self: "center"
      - font-weight: "bold"
      - font-size: "14px"
    grid:
      - grid-template-areas: "'l' 'n'"
      - grid-template-columns: "1fr"
      - grid-template-rows: "min-content min-content"
    card:
      - box-shadow: "none"
```
