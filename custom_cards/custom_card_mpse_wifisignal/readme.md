# Custom-card "WiFi Signal"

The `custom_card_mpse_wifisignal` is used to display the status of a wifi signal (dBm).

![WiFi Signal](./custom_wifisignal.png)

## Credits
Author: mpse
Version: 0.1.0

## Changelog
<details>
<summary>0.1.0</summary>
Initial release.
</details>

## Usage

```yaml
- type: 'custom:button-card'
  template: custom_card_mpse_wifisignal
  entity: sensor.wifi_julgran
```

## Requirements
No special cards needed.
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
<td>sensor.wifi_julgran</td>
<td>yes</td>
<td>Name of wifi signal sesnsor</td>
</tr>
</table>

## Template code

```yaml
... see custom card.
```
