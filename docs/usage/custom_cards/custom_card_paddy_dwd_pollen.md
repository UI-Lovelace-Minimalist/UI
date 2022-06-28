---
title: DWD Pollen Custom-card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom-card "DWD Pollen"

This is a `custom-card` to show the pollen count, taken from the DWD pollen service via a rest sensor.

## Credits

Author: Paddy0174 - 2021
Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>
<details>
<summary>1.0.1</summary>
Fix for UI Minimalist v1.0.1.
</details>

## Usage

```yaml
- type: custom:button-card
  template:
    - custom_card_paddy_dwd_pollen
  entity: sensor.dwd_pollenbelastung_birke
```

## Requirements

n/a

## Template code

??? note "Template Code"

    ```yaml title="custom_card_paddy_dwd_pollen.yaml"
    --8<-- "custom_cards/custom_card_paddy_dwd_pollen/custom_card_paddy_dwd_pollen.yaml"
    ```

## HomeAssistant

I use the following `rest` and `template` sensors in HA:

```yaml
sensor:
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
```

## Notes

- As this card is mainly for the DWD pollen sensor, that is based in Germany and shows only german data, the only available language is "German". If you want another language added, please leave a message in the support thread.
