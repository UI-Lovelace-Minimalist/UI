---
title: PS4 Custom-card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

### Playstation

> NOTE
> This card is under review and is not ready to use!

<details>
<summary>Usage</summary>

#### Example

```yaml
- type: 'custom:button-card'
  template: card_ps4
  entity: media_player.example
```

#### Variables

<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>
<br />
</details>

<details>
<summary>Template code</summary>

```yaml
card_ps4:
  template:
    - icon_info_bg
  label: >-
    [[[ if (entity.state =='unknown'){
          return "Off";
        }else if (entity.state =='standby'){
          return "En veille";
        }else{
          return "On";
        }
    ]]]
  styles:
    icon:
      - color: 'rgba(var(--color-theme),0.2)'
    img_cell:
      - background-color: 'rgba(var(--color-theme),0.05)'
  state:
    - value: 'idle'
      styles:
        icon:
          - color: 'rgba(var(--color-blue),1)'
        img_cell:
          - background-color: 'rgba(var(--color-blue), 0.2)'
    - value: 'standby'
      styles:
        icon:
          - color: 'rgba(var(--color-theme),0.2)'
        img_cell:
          - background-color: 'rgba(var(--color-theme),0.05)'
    - operator: template
      value: >
        [[[
          return entity.state !='unknown'
        ]]]
      name: >
          [[[
            return entity.attributes.media_title;
          ]]]
      label: >
          [[[
            return entity.attributes.friendly_name;
          ]]]
      styles:
        label:
          - color: white
          - filter: opacity(100%)
        img_cell:
          - background-color: 'none'
        icon:
          - color: white
        name:
          - color: white
        card:
          - background-blend-mode: multiply
          - background: >
              [[[
                var image = entity.attributes.entity_picture;
                return 'center / cover url(' + image + ') rgba(0, 0, 0, 0.15)';
              ]]]
```

</details>
