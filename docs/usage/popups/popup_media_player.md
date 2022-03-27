---
title: Media_player Popup
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

### Media Player popup

![Phone](../../assets/img/popup_media_phone.png){ width="500" }
![Tablet](../../assets/img/popup_media_tablet.png){ width="500" }

#### Card compatibility

This popup is displayed using ``hold_action`` and it is compatible with the following cards/chips :

- card_media_player

#### How to use

To enable this popup, add the variable `ulm_card_media_player_enable_popup` and set to `true`.

!!! warning This is a different approach as the other popup_cards use.

For example :

```yaml
- type: "custom:button-card"
  template:
    - card_media_player
  entity: media_player.lounge_room
  variables:
    ulm_card_media_player_enable_popup: true
```

## Credits

- Designed by schumijo and bavo (special thanks to him for his help on this development)).
