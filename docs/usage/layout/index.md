---
title: Layout Formatting
hide:
  - toc
---

## Aligning cards

If you want to alight cards to the center, right. Or only 1 card on the right it can be done using a `blank-card`.

<!-- markdownlint-disable -->
??? note "Center"

    ![chip_center](../../assets/img/layout/chip_center.png){ align=right width=40% }

    ```yaml
    # Card in the Center
    - type: horizontal-stack
      cards:
        - type: "custom:button-card"
          color_type: blank-card

        - type: custom:button-card
          template: chip_icon_label
          label: Your Card Here

        - type: "custom:button-card"
          color_type: blank-card
    ```

??? note "Right"

    ![chip_right](../../assets/img/layout/chip_right.png){ align=right width=40% }

    ```yaml
    # Card on the Right
    - type: horizontal-stack
      cards:
        - type: "custom:button-card"
          color_type: blank-card

        - type: custom:button-card
          template: chip_icon_label
          label: Your Card Here
    ```

??? note "Left & Right"

    ![chip_left_right](../../assets/img/layout/chip_left_right.png){ align=right width=40% }

    ```yaml
    # Card on the Right and Left
    - type: horizontal-stack
      cards:
        - type: custom:button-card
          template: chip_icon_label
          label: Your left card here

        - type: "custom:button-card"
          color_type: blank-card

        - type: custom:button-card
          template: chip_icon_label
          label: Your right card here
    ```
<!-- markdownlint-enable -->
