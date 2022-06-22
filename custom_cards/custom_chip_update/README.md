# Custom-chip "Update"

![chip_update6](https://user-images.githubusercontent.com/78684384/171427015-a1e7fb62-782a-4ca9-bd9b-f8ae2c61c7bc.PNG)
![chip_update3](https://user-images.githubusercontent.com/78684384/171427065-20963541-013b-4328-8c20-8d2fe19ad4eb.PNG)

## Information

Chip that shows you if an update for Home Assistant is available.

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Usage

```yaml
- type: custom:button-card
  template: chip_update
  entity: group.updates
  variables:
    ulm_chip_update_path: '/ui-lovelace-minimalist/system'
```

## Variables

<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>entity</td>
<td>group.updates</td>
<td>yes</td>
<td>update entity</td>
</tr>
<tr>
<td>ulm_chip_update_path</td>
<td>/ui-lovelace-minimalist/system</td>
<td>yes</td>
<td>path to navigate</td>
</tr>
</table>

## Template code

```yaml
---
### Chip Update ###
chip_update:
  template:
    - "ulm_language_variables"
    - "chips"
  tap_action:
    action: navigate
    navigation_path: "[[[ return variables.ulm_chip_update_path; ]]]"
    haptic: light
  show_icon: true
  state:
  - operator: default
    color: red
    icon: mdi:shield-alert
    label: "[[[ return variables.ulm_updates_available  ]]]"
  - value: 'off'
    color: green
    icon: mdi:shield-check
    label: "[[[ return variables.ulm_no_updates_available  ]]]"
  styles:
    grid:
      - grid-template-areas: "'i l'"

```

## Requirements

If you don't have an update sensor follow that [instruction](https://github.com/basbruss/UI/blob/main/custom_cards/custom_card_homeassistant_updates/README.md) to create one.

## Credits

- Author: JeffConrad18 - 2022
- Version: 1.0
