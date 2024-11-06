---
title: Afvalophaling Custom-card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom-card "Afvalophaling"

![Afvalophaling](../../docs/assets/img/ulm_cards/custom_card_afvalophaling_2.png)
![Afvalophaling](../../docs/assets/img/ulm_cards/custom_card_afvalophaling_1.png)

!! Attention !!

This card can only be used if the integration "Home-Assistant-Sensor-Afvalbeheer" from pippyn is installed.

## Credits

- Author: AndyVRD - 2021
- Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Usage

```yaml
- type: "custom:button-card"
  template:
    - card_afvalophaling
  variables:
    ulm_card_ophaling_vandaag: "sensor.limburg_net_afvalophaling_vandaag"
    ulm_card_ophaling_morgen: "sensor.limburg_net_afvalophaling_morgen"
    ulm_card_datum_gft: "sensor.limburg_net_afvalophaling_gft"
    ulm_card_datum_pmd: "sensor.limburg_net_afvalophaling_pmd"
    ulm_card_datum_rest: "sensor.limburg_net_afvalophaling_restafval"
    ulm_card_datum_papier: "sensor.limburg_net_afvalophaling_papier"
```

## Requirements

Integration from HACS: "Home-Assistant-Sensor-Afvalbeheer" from pippyn

## Variables

<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_card_ophaling_vandaag</td>
<td>sensor.limburg_net_afvalophaling_vandaag</td>
<td>yes</td>
<td>Collection(s) for today</td>
</tr>
<tr>
<td>ulm_card_ophaling_morgen</td>
<td>sensor.limburg_net_afvalophaling_morgen</td>
<td>yes</td>
<td>Collection(s) for tomorrow</td>
</tr>
<tr>
<td>ulm_card_datum_gft</td>
<td>sensor.limburg_net_afvalophaling_gft</td>
<td>yes</td>
<td>GFT collection date</td>
</tr>
<tr>
<td>ulm_card_datum_pmd</td>
<td>sensor.limburg_net_afvalophaling_pmd</td>
<td>yes</td>
<td>PMD collection date</td>
</tr>
<tr>
<td>ulm_card_datum_rest</td>
<td>sensor.limburg_net_afvalophaling_rest</td>
<td>yes</td>
<td>Restafval collection date</td>
</tr>
<tr>
<td>ulm_card_datum_papier</td>
<td>sensor.limburg_net_afvalophaling_papier</td>
<td>yes</td>
<td>Papier collection date</td>
</tr>
</table>

??? note "Template Code"

    ```yaml title="card_afvalophaling.yaml"
    --8<-- "custom_cards/custom_card_afvalophaling/card_afvalophaling.yaml"
    ```
