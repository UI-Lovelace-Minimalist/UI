---
title: Chip Temperature
name: chip_temperature
category: chip
explanation: "This `chip` is to display a weather icon together with the outside and inside temperature."
image_path: "/assets/images/chip_temperature.png"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: ulm_chip_temperature_outside
    type: variable
    example: sensor.my_temperature_sensor_outside
    required: true 
    explanation: "This is the sensor that provides your outside temperature. If you want to use eg. a temperature value from your weather provider, you'd need to setup a template sensor first. The state of this sensor should represent a numeric value (°C or °F doesn't matter)."
  - name: ulm_chip_temperature_inside
    type: variable
    example: sensor.my_temperature_sensor_inside
    required: true
    explanation: "This is the sensor that provides your inside temperature. The state of this sensor should represent a numeric value (°C or °F doesn't matter)."
yaml: |-
  - type: 'custom:button-card'
    template: chip_temperature
    variables:
      ulm_chip_temperature_inside: sensor.my_temperature_sensor_inside
      ulm_chip_temperature_outside: sensor.my_temperature_sensor_outside
      ulm_chip_temperature_weather: weather.my_weather_provider"
ui: |-
  type: 'custom:button-card'
  template: chip_temperature
  variables:
    ulm_chip_temperature_inside: sensor.my_temperature_sensor_inside
    ulm_chip_temperature_outside: sensor.my_temperature_sensor_outside
    ulm_chip_temperature_weather: weather.my_weather_provider"
code: |-
  chip_temperature:
    template: chips
    triggers_update: 
      - "[[[ variables.ulm_chip_temperature_weather ]]]"
      - "[[[ variables.ulm_chip_temperature_outside ]]]"
      - "[[[ variables.ulm_chip_temperature_inside ]]]"
    label: |
      [[[
        var icon = '🌡️';
        if (states[variables.ulm_chip_temperature_weather].state == 'clear-night'){
          var icon = '🌙';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'cloudy'){
          var icon = '☁️';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'exceptional'){
          var icon = '🌞';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'fog'){
          var icon = '🌫️';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'hail'){
          var icon = '⛈️';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'lightning'){
          var icon = '⚡';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'lightning-rainy'){
          var icon = '⛈️';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'partlycloudy'){
          var icon = '⛅';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'pouring'){
          var icon = '🌧️';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'rainy'){
          var icon = '💧';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'snowy'){
          var icon = '❄️';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'snowy-rainy'){
          var icon = '🌨️';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'sunny'){
          var icon = '☀️';
        } else if(states[variables.ulm_chip_temperature_weather].state == 'windy'){
          var icon = '🌪️';
        }
        return icon + ' ' + states[variables.ulm_chip_temperature_outside].state + '° / ' + states[variables.ulm_chip_temperature_inside].state + '°' ;
      ]]]
---