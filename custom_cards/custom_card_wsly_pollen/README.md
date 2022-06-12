---
title: Tomorrow.io Pollen card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

# Custom-card "Tomorrow.io Pollen card"

This is a `custom-card` to display the pollen index of the [Tomorrow.io](https://www.home-assistant.io/integrations/tomorrowio) index

![Screenshot light mode](../../docs/assets/img/custom_card_wsly_pollen_light.png)
![Screenshot dark mode](../../docs/assets/img/custom_card_wsly_pollen_dark.png)

## Credits

Author: wsly - 05/2022
Version: 1.0.1

## Changelog

<details>
<summary>1.0.0</summary>
Initial release.
</details>
<details>
<summary>1.0.1</summary>
Allow customizing the name and icon of each pollen index, with localized defaults. (`*_name`, `*_icon` variables)
</details>

## Requirements

This card uses the following integration:

 [Tomorrow.io](https://www.home-assistant.io/integrations/tomorrowio)

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
<tr>
<td>custom_card_wsly_pollen_tree_name</td>
<td>"Trees"</td>
<td>No</td>
<td>"Trees" (localized)</td>
<td>The name to display for the tree pollen index, or `false` to use the `custom_card_wsly_pollen_tree` entity's friendly name.</td>
</tr>
<tr>
<td>custom_card_wsly_pollen_tree_icon</td>
<td>"mdi:tree"</td>
<td>No</td>
<td>"mdi:tree"</td>
<td>The icon to display for the tree pollen index, or `false` to use the `custom_card_wsly_pollen_tree` entity's icon.</td>
</tr>
<tr>
<td>custom_card_wsly_pollen_grass_name</td>
<td>"Grass"</td>
<td>No</td>
<td>"Grass" (localized)</td>
<td>The name to display for the grass pollen index, or `false` to use the `custom_card_wsly_pollen_grass` entity's friendly name.</td>
</tr>
<tr>
<td>custom_card_wsly_pollen_grass_icon</td>
<td>"mdi:grass"</td>
<td>No</td>
<td>"mdi:grass"</td>
<td>The icon to display for the grass pollen index, or `false` to use the `custom_card_wsly_pollen_grass` entity's icon.</td>
</tr>
<tr>
<td>custom_card_wsly_pollen_weed_name</td>
<td>"Weeds"</td>
<td>No</td>
<td>"Weeds" (localized)</td>
<td>The name to display for the weed pollen index, or `false` to use the `custom_card_wsly_pollen_weed` entity's friendly name.</td>
</tr>
<tr>
<td>custom_card_wsly_pollen_weed_icon</td>
<td>"mdi:flower-pollen"</td>
<td>No</td>
<td>"mdi:flower-pollen"</td>
<td>The icon to display for the weed pollen index, or `false` to use the `custom_card_wsly_pollen_weed` entity's icon.</td>
</tr>
</table>

## Template code

??? note "Template Code"

    ```yaml title="custom_card_wsly_pollen.yaml"
    --8<-- "custom_cards/custom_card_wsly_pollen/custom_card_wsly_pollen.yaml"
    ```
