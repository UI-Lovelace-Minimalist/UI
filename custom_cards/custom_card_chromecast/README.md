---
title: Mediaplayer Chromecast Custom-card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Media player: sonos

> NOTE
> This card is under review and is not ready to use!

![Sonos](../../docs/assets/img/chromecast.png)

<details>
<summary>Usage</summary>

## Example

```yaml
- type: "custom:button-card"
  template: card_media_player_chromecast_with_controls
  variables:
    ulm_card_media_player_with_controls_name: "Chromecast"
    ulm_card_media_player_with_controls_entity: media_player.my_chromecast
```

## Variables

<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_card_media_player_with_controls_name</td>
<td>Chromecast</td>
<td>Yes</td>
<td>Name shown in lovelace</td>
<tr>
<td>ulm_card_media_player_with_controls_entity</td>
<td>media_player.my_chromecast</td>
<td>Yes</td>
<td>Entity id</td>
</tr>
</table>
<br />
</details>

??? note "Template Code"

    ```yaml title="custom_card_chromecast.yaml"
    --8<-- "custom_cards/custom_card_chromecast/custom_card_chromecast.yaml"
    ```
