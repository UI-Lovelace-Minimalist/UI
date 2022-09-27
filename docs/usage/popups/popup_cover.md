---
title: Cover Popup
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

### Cover popup

![Phone](../../assets/img/popup_cover.png){ width="500" }

##### Card compatibility

This popup is displayed using ``popup`` and it is compatible with the following cards/chips :

- card_cover

##### How to use

To enable this popup, add the variable ``ulm_card_cover_enable_popup`` and set to ``true``.

!!! warning
    This is a different approach as the other `popup_cards` use.

For example :

```yaml
- type: "custom:button-card"
  template: card_cover
  entity: cover.garage
  variables:
    ulm_card_cover_enable_popup: true
```

## Credits

- Designed by AndyVRD
