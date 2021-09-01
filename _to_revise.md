This file is for cards, that I haven't gotten around to describe and/or make them usable for a broader public. 

The `thermostat-card` for example is kind of specific, it controls a zigbee switch (on/off) to start the heater, and shows the temperature from a different sensor. I haven't had the great idea how to make this usable for others, as I don't see many people with a constellation like this. My idea was to outsource this card and make it available as a community card.

Same goes for the `water-heater-card` and `qubino`. I'm not sure how many people will use these in that kind of manner. So I'd suggest to make them available as community cards as well.


<<< Below this line, full text with examples and template code >>>
### Person  
![Personne](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/person.png)
<details><summary>Information</summary>
    
**Dot** : 
- At home : Blue
- Away : Green 


**Dot icon** :
- At home : Home
- Away : Walking man
- Sleeping : Moon

**Comment** : The sleep state takes over the At home or Away state to display the moon icon
</details>

<details>
<summary>Usage</summary>

#### Example

```yaml
- entity: input_select.localisation_thomas
  variables:
    personne: "thomas"
  template: 
    - icon_info_bg
    - personne-thomas
  name: Thomas
  type: 'custom:button-card'
```

#### Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
person:
  tap_action:
    action: more-info
  show_label: true
  label: >
      [[[return entity.state]]]
  styles:
    icon:
      - color: 'rgba(var(--color-theme),0.9)'
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
 
person-thomas:
  variables:
    person: "thomas"
  template: person
  hold_action:
    action: more-info
    entity: input_boolean.thomas_nuit
  styles:
    custom_fields:
      notification:
        - background-color: >
            [[[
              if (states['input_select.localisation_thomas'].state == 'Present'){
                return "rgba(var(--color-blue),1)";
              }else{
                return "rgba(var(--color-green),1)";
              }
            ]]]
  custom_fields:
    notification: >
      [[[
        if (states['input_boolean.thomas_nuit'].state == 'on'){
          return `<ha-icon icon="mdi:power-sleep" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>`
        }else{
          if (states['input_select.localisation_thomas'].state == 'Present'){
            return `<ha-icon icon="mdi:home-variant" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>`
          }else{
            return `<ha-icon icon="mdi:pine-tree" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>`
          }
        }
      ]]]
```

</details>

### Thermostat  
The `thermostat-card` is used to switch a climate entity on/off and show the temperature.

![Thermostat](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/thermostat.png)

<details>
<summary>Usage</summary>

#### Example

```yaml
- type: 'custom:button-card'
  template:
    - card_thermostat
  variables:
    ulm_card_thermostat_sensor: sensor.livingroom_temperature
  entity: climate.livingroom
```


#### Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
card_thermostat:
  template:  
    - icon_info_bg
  hold_action:
    action: more-info
    entity: input_boolean.radiateur_arret_force
  label: >-
    [[[ 
        if (entity.state =='off'){
          return 'Off' ;
        }else{
          if (states['light.qubino'].state == 'on'){
            var etat = "Chauffe";
          }else{
            var etat = "Inactif";
          }
          return (entity.attributes.temperature ) + '°' + ' • ' + etat ;
        }
    ]]]
  state:
    - operator: template
      value: >
        [[[
          return states['light.qubino'].state == 'on'
        ]]]
      styles:
        icon:
          - color: 'rgba(var(--color-red),1)'
        img_cell:
          - background-color: 'rgba(var(--color-red),0.2)'
        card:
          - background-color: 'rgba(var(--color-background-red),var(--opacity-bg))'
        name:
          - color: 'rgba(var(--color-red-text),1)'
        label:
          - color: 'rgba(var(--color-red-text),1)'
```

</details>

### Water heater  

![Chauffe-eau](https://raw.githubusercontent.com/TBens/lovelace-ui-minimalist/main/screenshots/water-heater.png)

<details>
<summary>Usage</summary>

#### Example

```yaml
- entity: switch.example
  name: Chauffe eau
  template: 
    - icon_info_bg
    - water_heater
  type: 'custom:button-card'
```

#### Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
water_heater:
  icon: 'mdi:waves'
  tap_action:
    action: more-info
  hold_action:
    action: more-info
  label: >-
    [[[ 
        if (entity.state == 'off'){
          return 'Arrêt forcé';
        }else{
          if (states["sensor.shelly_prise_salon_conso"].state > 0){
            var etat = "Chauffe • " + states["sensor.shelly_prise_salon_conso"].state + "W";
          }else{
            var etat = "Inactif";
          }
          return etat ;
        }
    ]]]
  state:
    - operator: template
      value: >
        [[[
          return (states['sensor.shelly_prise_salon_conso'].state > 0)
        ]]]
      styles:
        icon:
          - color: 'rgba(var(--color-red),1)'
        img_cell:
          - background-color: 'rgba(var(--color-red),0.2)'
        card:
          - background-color: 'rgba(var(--color-background-red),var(--opacity-bg))'
        name:
          - color: 'rgba(var(--color-red-text),1)'
        label:
          - color: 'rgba(var(--color-red-text),1)'
```

</details>

### Qubino

<details>
<summary>Usage</summary>

#### Example
...

#### Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
qubino:
  icon: 'mdi:memory'
  tap_action:
    action: more-info
    entity: input_select.ordres_fil_pilote
  label: >-
    [[[ if (entity.state !='unavailable'){
          var bri = Math.round(entity.attributes.brightness / 2.55);
          var bri = (bri ? bri : '0')
          var consigne = 'Inconnue';
        if (bri >= 51){
          var consigne = 'Confort';
        } else if(bri < 51 && bri >= 41){
          var consigne = 'Confort -1°C';
        } else if(bri < 41 && bri >= 31){
          var consigne = 'Confort -2°C️';
        } else if(bri < 31 && bri >= 21){
          var consigne = 'Eco️';
        } else if(bri < 21 && bri >= 11){
          var consigne = 'Hors Gel️';
        } else if(bri < 11 && bri >= 0){
          var consigne = 'Arrêt️';
        }
        return consigne + ' • ' + bri;  
      }else{
        return "Indisponible";
      }
    ]]]
  template: 
    - blue
```

</details>

<<< FROM button_card_templates.yaml >>>

```yaml
### CHIPS ###
  chips_localisation_absent:
    tap_action:
      action: navigate
      navigation_path: /lovelace/localisation
    label: |
      [[[
        var personnes_presentes = states['sensor.people_count_absent'].state;
        return '🚶 ' +  personnes_presentes;
      ]]]
    template: chips

  chips_localisation_nuit:
    template: chips
    tap_action:
      action: navigate
      navigation_path: /lovelace/localisation
    label: |
      [[[
        var personnes_presentes = states['sensor.people_count_nuit'].state;
        return '🌙 ' +  personnes_presentes;
      ]]]
  
### PERSON ###
  person:
    tap_action:
      action: more-info
    show_label: true
    label: >
        [[[return entity.state]]]
    styles:
      icon:
        - color: 'rgba(var(--color-theme),0.9)'
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

  person-thomas:
    variables:
      person: "thomas"
    template: person
    hold_action:
      action: more-info
      entity: input_boolean.thomas_nuit
    styles:
      custom_fields:
        notification:
          - background-color: >
              [[[
                if (states['input_select.localisation_thomas'].state == 'Present'){
                  return "rgba(var(--color-blue),1)";
                }else{
                  return "rgba(var(--color-green),1)";
                }
              ]]]
    custom_fields:
      notification: >
        [[[
          if (states['input_boolean.thomas_nuit'].state == 'on'){
            return `<ha-icon icon="mdi:power-sleep" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>`
          }else{
            if (states['input_select.localisation_thomas'].state == 'Present'){
              return `<ha-icon icon="mdi:home-variant" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>`
            }else{
              return `<ha-icon icon="mdi:pine-tree" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>`
            }
          }
        ]]]

  person-milena:
    template: person
    hold_action:
      action: more-info
      entity: input_boolean.milena_nuit
    styles:
      custom_fields:
        notification:
          - background-color: >
              [[[
                if (states['input_select.localisation_milena'].state == 'Present'){
                  return "rgba(var(--color-blue),1)";
                }else{
                  return "rgba(var(--color-green),1)";
                }
              ]]]
    custom_fields:
      notification: >
        [[[
          if (states['input_boolean.milena_nuit'].state == 'on'){
            return `<ha-icon icon="mdi:power-sleep" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>`
          }else{
            if (states['input_select.localisation_milena'].state == 'Present'){
              return `<ha-icon icon="mdi:home-variant" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>`
            }else{
              return `<ha-icon icon="mdi:pine-tree" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>`
            }
          }
        ]]]

  person-invite:
    tap_action:
      action: more-info
    show_label: true
    label: |-
      [[[ if (entity.state =='on')
         var etat = "Present"; 
         else
        var etat = "Désactivé";
      return etat ; ]]]
    styles:
      grid:
        - grid-template-areas: '"i n" "i l"'
      icon:
        - color: 'rgba(var(--color-theme),0.2)'
      img_cell:
        - background-color: 'rgba(var(--color-theme),0.05)'
    custom_fields:
      notification: >
        [[[
          if (entity.state =='on'){
            return `<ha-icon icon="mdi:home-variant" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>`
          }
        ]]]
    state:
      - styles:
          icon:
            - color: 'rgba(var(--color-theme),0.9)'
          custom_fields:
            notification:
              - border-radius: 50%
              - position: absolute
              - left: 38px
              - top: 6px
              - height: 16px
              - width: 16px
              - border: 2px solid var(--card-background-color)
              - font-size: 12px
              - line-height: 14px
              - background-color: >
                  [[[
                    return "rgba(var(--color-blue),1)";
                  ]]]
        value: 'on'
```

<<< TEMPLATE FOR USE IN README.MD >>>

<details>
<summary>Usage</summary>

#### Example
...

#### Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
...
```

</details>