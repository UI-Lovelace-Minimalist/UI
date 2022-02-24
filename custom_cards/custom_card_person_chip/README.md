---
title: custom_card_person_chip
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

# Custom-card "Person Chip"

This is a `custom-card` to display a person entity as a chip.

## Credits

Author: tmatheussen - 2022
Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release.
</details>

## Usage

```yaml
- type: 'custom:button-card'
  template: custom_card_person_chip
  variables:
    ulm_custom_card_person_chip_entity: person.tom
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
<td>ulm_custom_card_person_chip_entity</td>
<td>person.tom</td>
<td>yes</td>
<td></td>
<td>The person to show</td>
</tr>
<tr>
</table>

## Example

```yaml
- type: 'custom:button-card'
  template: custom_card_person_chip
  variables:
    ulm_custom_card_person_chip_entity: person.tom
```
