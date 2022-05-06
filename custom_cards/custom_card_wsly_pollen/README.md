---
title: Tomorrow.io Pollen card
hide:
- toc
---
<!-- markdownlint-disable MD046 -->

# Custom-card "Counter Lights/Cover Card"

This is a `custom-card` to display the pollen index of the Tomorrow.io index

![Screenshot light mode](../../docs/assets/img/custom_card_wsly_pollen_light.png)
![Screenshot dark mode](../../docs/assets/img/custom_card_wsly_pollen_dark.png)

## Credits

Author: wsly - 05/2022

Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release.
</details>

## Requirements

This card uses the Tomorrow.io integration for the pollen index:

## Usage

```yaml
- type: 'custom:button-card'
  template: custom_card_wsly_pollen
  variables:
    custom_card_wsly_pollen_tree: sensor.tomorrow_io_home_tree_pollen_index
    custom_card_wsly_pollen_grass: sensor.tomorrow_io_home_grass_pollen_index
    custom_card_wsly_pollen_weed: sensor.tomorrow_io_home_weed_pollen_index
```

## Variables

<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Default</th>
<th>Explanation</th>
</tr>
<tr>
<td>custom_card_wsly_pollen_tree</td>
<td>"sensor.tomorrow_io_home_tree_pollen_index"</td>
<td>Yes</td>
<td></td>
<td>The entity for the tree pollen index</td>
</tr>
<tr>
<td>custom_card_wsly_pollen_grass</td>
<td>"sensor.tomorrow_io_home_grass_pollen_index"</td>
<td>Yes</td>
<td></td>
<td>The entity for the grass pollen index</td>
</tr>
<tr>
<td>custom_card_wsly_pollen_weed</td>
<td>"sensor.tomorrow_io_home_weed_pollen_index"</td>
<td>Yes</td>
<td></td>
<td>The entity for the weed pollen index</td>
</tr>
</table>

<details>
<summary>Template code</summary>

```yaml title="card_light.yaml"
--8<-- "custom_cards/custom_card_wsly_pollen/custom_card_wsly_pollen.yaml"
```

</details>