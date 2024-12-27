---
title: Graph Card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_graph.png){ width="500" }

The `card_graph` shows an entity with the actual state and a _min-graph-card_ integrated. This can be used for a thermostat to show the actual temperature and the history. It now supports dual graphs as well as bar style graphs.

## Variables

| Variable                  | Default  | Required         | Notes                                                                                                                   |
| ------------------------- | -------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------- |
| entity                    |          | :material-check: | Your entity_id for the temperature sensor                                                                               |
| ulm_card_graph_color      |          | :material-close: | This is to adjust your color value. Use a CSS variable from HA or set a color value (eg. #FFFFFF)                       |
| ulm_card_graph_name       |          | :material-close: | Set graph name                                                                                                          |
| ulm_card_graph_icon       |          | :material-close: | Set custom icon                                                                                                         |
| ulm_card_graph_entity     |          | :material-check: | Your entity_id for the temperature sensor                                                                               |
| ulm_card_graph_entity2    |          | :material-close: | Your entity_id for the second temperature sensor                                                                        |
| ulm_card_graph_color2     |          | :material-close: | This is to adjust your color value of the second graph. Use a CSS variable from HA or set a color value (eg. #FFFFFF)   |
| ulm_card_graph_type       | fill     | :material-close: | This is to change the appearance of the graph. Default is fill, but line, bar are valid options.                        |
| ulm_card_graph_hours      | 24       | :material-close: | How much time should the graph cover, default is 24 hours.                                                              |
| ulm_card_graph_points     | 0.5      | :material-close: | Specify amount of data points the graph should display for each hour. A larger number results in a more detailed graph. |
| ulm_card_graph_group_by   | interval | :material-close: | Specify type of grouping of data, dynamic interval, date or hour.                                                       |
| ulm_card_graph_line_width | 5        | :material-close: | Set the thickness of the line.                                                                                          |

## Usage

```yaml
- type: "custom:button-card"
  template: card_graph
  entity: sensor.livingroom_temperature
  variables:
    ulm_card_graph_color: "var(--google-blue)"
    ulm_card_graph_name: Temperature Livingroom
    ulm_card_graph_entity: sensor.livingroom_temperature
    ulm_card_graph_color2: "var(--google-green)"
    ulm_card_graph_entity2: sensor.bedroom_temperature
    ulm_card_graph_type: fill
    ulm_card_graph_hours: 24
    ulm_card_graph_group_by: interval
    ulm_card_graph_line_width: 5
```

??? note "Template Code"

    ```yaml title="card_graph.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/2-line_cards/card_graph.yaml"
    ```
