---
title: custom_card_httpedo13_sun
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

# Custom-card "Printer"

The `custom_card_mpse_gauge` is used present a value in form of a gauge. The card can handle two gauges so it would be easy to adapt the card to that if required. I prefered the minimal look.

![Printer](../../assets/img/custom_gauge.png)

## Credits

Author: mpse
Version: 0.1.0

## Changelog

<details>
Initial release.
</details>

## Usage

```yaml
- type: 'custom:button-card'
  template: custom_card_mpse_gauge
  entity: sensor.temp_office_temperature
  variables:
    ulm_card_mpse_gauge_min: 10
    ulm_card_mpse_gauge_max: 30
```

## Requirements

Uses this card: <https://github.com/custom-cards/dual-gauge-card> which can be installed via HACS.

## Variables

<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_card_mpse_gauge_min</td>
<td>0</td>
<td>no</td>
<td>Minium value, defaults to 0.</td>
</tr>
<tr>
<td>ulm_card_mpse_gauge_max</td>
<td>100</td>
<td>no</td>
<td>Maximum value, defaults to 100.</td>
</tr>
</table>

## Template code

```yaml
---
custom_card_mpse_gauge:
  variables:
    ulm_card_mpse_gauge_min: 0
    ulm_card_mpse_gauge_max: 100
  styles:
    grid:
      - grid-template-areas: "'item1' 'item2'"
      - grid-template-columns: "1fr"
      - grid-template-rows: "min-content  min-content"
    card:
      - border-radius: "var(--border-radius)"
      - box-shadow: "var(--box-shadow)"
      - padding: "0px"
  show_name: false
  show_icon: false
  custom_fields:
    item1:
      card:
        entity: "[[[ return entity.entity_id ]]]"
        label: >-
          [[[
            return entity.state;
          ]]]
        template:
          - "icon_info"
        styles:
          card:
            - padding: "12px"
        type: "custom:button-card"
    item2:
      card:
        type: "custom:dual-gauge-card"
        min: "[[[ return variables.ulm_card_mpse_gauge_min ]]]"
        max: "[[[ return variables.ulm_card_mpse_gauge_max ]]]"
        title: >
          [[[
            var min = variables.ulm_card_mpse_gauge_min;
            var max = variables.ulm_card_mpse_gauge_max;

            if( min == 0 && max == 100 )
              return "";

            return min + ' - ' + max;
          ]]]
        shadeInner: false
        cardwidth: 200
        outer:
          entity: "[[[ return entity.entity_id ]]]"
        inner:
          entity: "[[[ return entity.entity_id ]]]"
        colors:
          - color: "var(--google-blue)"
            value: 0
        card_mod:
          style: |
            div.gauge-value.gauge-value-inner {
              color: rgba(0,0,0,0);
            }
            div.gauge-value.gauge-value-outer {
              color: rgba(0,0,0,0);
            }
            div.gauge-dual-card {
              margin: 0px 0px;
              --title-font-size: calc(var(--gauge-card-width) / 16);
              color: var(--google-grey);
            }
```
