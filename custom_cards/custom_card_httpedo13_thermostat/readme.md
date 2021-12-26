# Custom-card "Thermostat"
The `custom_card_httpedo13_thermostat` shows data from your thermostat and gives you the possibility to control it. Thanks to [tpx01's](https://github.com/httpedo13/UI/tree/main/custom_cards/custom_card_tpx01_aircondition) air-condition custom card!

## Credits
Author: httpedo13 - 2021
Version: 1.0.0

This design was made by [tpx01's](https://github.com/httpedo13/UI/tree/main/custom_cards/custom_card_tpx01_aircondition)

## Changelog
<details>
<summary>1.0.0</summary>
Initial release
</details>

## Images
<img width="563" alt="white_collapse" src="https://user-images.githubusercontent.com/40502451/146683325-b23e829d-e058-4079-8809-d7d30cd783b7.png">

<img width="563" alt="white" src="https://user-images.githubusercontent.com/40502451/146683349-f68a25d9-1d3b-4953-98d3-eea95bfee8e7.png">

<img width="563" alt="white_with_heating_ui" src="https://user-images.githubusercontent.com/40502451/146683359-0625fe65-9bac-4725-b931-2c82a432e6fc.png">

<img width="563" alt="dark" src="https://user-images.githubusercontent.com/40502451/146683366-fee88c38-3475-4df1-861c-3495a369b5c1.png">

<img width="563" alt="dark_with_heating_ui" src="https://user-images.githubusercontent.com/40502451/146683373-9654de81-ce3c-44ca-959d-fab1ac2df141.png">


## Usage

With buttons:
```yaml
- type: custom:button-card
  template: custom_card_httpedo13_thermostat_with_buttons
  variables:
  	entity: climate.ground_floor
  	name: Heater Ground Floor
```

With collapse button:
```yaml
- type: custom:button-card
  template: custom_card_httpedo13_thermostat_with_buttons_collapse
  variables:
  	entity: climate.ground_floor
  	name: Heater Ground Floor
```

## Requirements
Entity climate with only heat mode

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
<td>climate.ground_floor/td>
<td>yes</td>
<td>Your climate with only heat mode entity</td>
</tr>
<tr>
<td>name</td>
<td>Heater Ground Floor</td>
<td>yes</td>
<td>The name to show</td>
</tr>
</table>
