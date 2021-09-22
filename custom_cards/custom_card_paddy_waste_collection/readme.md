# Custom-card waste collection
This is a `custom-card` to show the next waste collection date. It uses the data from the `custom_component` "Waste Collection Framework".

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
  template: 
  	- custom_card_paddy_waste_collection
  entity: sensor.waste_collection_paper
```

## Requirements
This card needs the following to function correctly:
<table>
<tr>
<th>Component / card</th>
<th>required</th>
<th>Link</th>
</tr>
<tr>
<td>Waste Collection Schedule Framework</td>
<td>yes</td>
<td><a href="https://github.com/mampfes/hacs_waste_collection_schedule">more info</a></td>
</tr>
</table>

## Template code

```yaml
custom_card_paddy_waste_collection:
  template:
    - card_generic_swap
  state:
    - value: 'HEUTE'
      styles:
        img_cell:
          - background-color: 'rgba(var(--color-red),0.5)'
    - value: 'MORGEN'
      styles:
        img_cell:
          - background-color: 'rgba(var(--color-red),0.5)'
```

## HomeAssistant
This is my `sensor` setup in HA. I do the change from "days" to "friendly days" in my template sensor. 

```yaml
- platform: waste_collection_schedule
  name: waste_collection_paper
  details_format: upcoming
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
```

## Notes
n/a