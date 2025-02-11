---
title: Subtitle Custom-card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom-card "Subtitle"

This is a `custom-card` to display a subtitle header.

![Screenshot](../../docs/assets/img/custom_card_wilbiev_subtitle.png)

## Credits

Author: wilbiev - 2023
Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release.
</details>

## Requirements

This card needs the following to function correctly:

['Text Divider Row'](https://github.com/iantrich/text-divider-row)

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
<td>ulm_custom_card_wilbiev_subtitle_name</td>
<td>"Subtitle"</td>
<td>yes</td>
<td></td>
<td>The name to display</td>
</tr>
</table>

## Usage

```yaml
- type: "custom:button-card"
  template: "custom_card_wilbiev_subtitle"
  variables:
    ulm_custom_card_wilbiev_subtitle_name: "Lights"
```

??? note "Template Code"

    ```yaml title="custom_card_wilbiev_subtitle.yaml"
    --8<-- "custom_cards/custom_card_wilbiev_subtitle/custom_card_wilbiev_subtitle.yaml"
    ```
