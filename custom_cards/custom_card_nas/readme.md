### NAS  
The `nas-card` shows you a specific sensor value from your NAS, eg. the disk space used.  

![NAS]()

#### Example

```yaml
- type: horizontal-stack
  cards:
    - type: 'custom:button-card'
      template: 
        - custom_card_nas
      variables:
        ulm_custom_card_nas_sensor: sensor.pinas_disk_use
        ulm_custom_card_nas_text: "HDD used"
        ulm_custom_cad_nas_unit: %
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
<td>ulm_custom_card_nas_sensor</td>
<td>sensor.nas_disk_use</td>
<td>yes</td>
<td>The sensor that shows your sensor state, eg. the disk use on your NAS</td>
</tr>
<tr>
<td>ulm_custom_card_nas_text</td>
<td>HDD used</td>
<td>yes</td>
<td>The text to show on your card</td>
</tr>
<tr>
<td>ulm_custom_cad_nas_unit</td>
<td>%</td>
<td>yes</td>
<td>The unit to show after your sensors state</td>
</tr>
</table>

#### Template code

```yaml
custom_card_nas:
  tap_action:
    action: more-info
  template: 
    - blue
  show_label: true
  label: |-
    [[[ 
      if (entity.state == 'on'){
        var state = variables.ulm_custom_card_nas_text + states[variables.ulm_custom_card_nas_sensor].state + variables.ulm_custom_card_nas_unit; 
      } else {
        var state = "Off";
      }
      return state; 
    ]]]
```
