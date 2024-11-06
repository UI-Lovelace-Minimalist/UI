---
title: Elapsed Time Custom-card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom-card "Elapsed Time"

This is a `custom-card` that works with a `input_datetime` input.
Template checks the `has_date` and `has_time` attributes and creates a label in `x days x hours x minutes ago` format.

- `x days` only included if `has_date` is true (datetime object)
- `x hours` only included if `has_time` is true (datetime and time objects)
- `x minutes` only included if `has_time` is true and has_date is false (time object)

![Generic](../../docs/assets/img/custom_card_eraycetinay_elapsed_time.png)

## Credits

Author: eraycetinay - 2022
Version: 0.0.1

## Changelog

<details>
  <summary>0.0.1</summary>
  Initial release
</details>

## Usage

```yaml
- type: "custom:button-card"
  template: "custom_card_eraycetinay_elapsed_time"
  entity: input_datetime.cat_litter
  name: "Cat Litter"
```

??? note "Template Code"

    ```yaml title="custom_card_eraycetinay_elapsed_time.yaml"
    --8<-- "custom_cards/custom_card_eraycetinay_elapsed_time/custom_card_eraycetinay_elapsed_time.yaml"
    ```
