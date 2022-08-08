---
title: Title Card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_title.png){ width="500" }

Titles (and optionally subtitles) are used to separate different areas in your design. You can use only a title, only a subtitle or both at once.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| name     |         | :material-check: | This is a main title (either title or subtitle is required) |
|label|   | :material-check: | This is a subtitle (either title or subtitle is required) |

## Usage

```yaml
- type: 'custom:button-card'
  template: card_title
  name: My Title
  label: 'Subtitle'
```

??? note "Template Code"

    ```yaml title="card_title.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/title/card_title.yaml"
    ```
