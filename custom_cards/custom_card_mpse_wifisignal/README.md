---
title: Wifi Signal Custom-card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom-card "WiFi Signal"

The `custom_card_mpse_wifisignal` is used to display the status of a wifi signal (dBm). Icon changes based on signal strength.

![WiFi Signal](../../docs/assets/img/custom_wifisignal.png)

## Credits

Author: mpse
Version: 0.2.0

## Changelog

<details>
<summary>0.2.0</summary>
Cleanup and updated documentation.
</details>
<details>
<summary>0.1.0</summary>
Initial release.
</details>

## Usage

```yaml
- type: "custom:button-card"
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
<td>None</td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

## Template code

??? note "Template Code"

    ```yaml title="custom_card_mpse_wifisignal.yaml"
    --8<-- "custom_cards/custom_card_mpse_wifisignal/custom_card_mpse_wifisignal.yaml"
    ```
