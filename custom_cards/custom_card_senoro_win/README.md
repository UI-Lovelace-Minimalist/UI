---
title: Senoro.Win Door/Window Sensor Card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom Card "Senoro.Win Door/Window Sensor"

This is a custom card for the [Senoro.Win door and window sensor](https://senoro.de/) that combines a reed contact with a handle position sensor. The card displays the current state with visual indicators and optional battery monitoring.

![Senoro Win Card](../../docs/assets/img/senoro_win_card.png)

## Credits

Author: T1ppes - 2026

## Features

- **Dual Sensor Display**: Shows both the reed contact status (open/closed) and handle position (closed/tilted/open)
- **Smart State Detection**:
    - Locked: Contact closed AND handle closed
    - Closed: Contact closed, handle tilted or open
    - Tilted: Contact open AND handle tilted
    - Open: Contact open AND handle open
    - Manipulated: Contact open BUT handle closed (security alert)
- **Visual Indicators**:
    - Color-coded icon and background based on state
    - Lock/unlock badge icon on the sensor icon
    - Optional battery level monitoring with warning indicator
- **Customizable**:
    - Custom name and icon
    - Optional background color highlighting
    - Configurable battery warning thresholds

## Requirements

- **Senoro.Win Sensor**: A door or window sensor from Senoro.de with both contact and handle position sensors
- **Home Assistant Entities**:
    - Binary sensor for the reed contact (e.g., `binary_sensor.door_contact`)
    - Sensor for the handle position (e.g., `sensor.door_handle`) - states should be "Closed", "Tilted", or "Open"
    - Optional: Battery level sensor (e.g., `sensor.door_battery`)

## Variables

| Variable | Default | Required | Notes |
| -------- | ------- | -------- | ----- |
| `ulm_custom_card_senoro_win_handle` | | **yes** | Entity ID of the handle position sensor |
| `ulm_custom_card_senoro_win_name` | `entity.friendly_name` | no | Custom name for the sensor |
| `ulm_custom_card_senoro_win_icon` | `entity.icon` or `mdi:window-closed` | no | Custom icon |
| `ulm_custom_card_senoro_win_color` | `blue` | no | Color for open/tilted states (blue, green, yellow, red, etc.) |
| `ulm_custom_card_senoro_win_force_background_color` | `false` | no | Enable background color highlighting |
| `ulm_custom_card_senoro_win_battery_level` | | no | Entity ID of the battery level sensor |
| `ulm_custom_card_senoro_win_battery_warning` | `20` | no | Battery percentage for yellow warning |
| `ulm_custom_card_senoro_win_battery_warning_low` | `5` | no | Battery percentage for red warning |
| `ulm_show_last_changed` | `false` | no | Show last changed time instead of state |

## States and Icons

| Contact | Handle | State | Icon | Color |
| ------- | ------ | ----- | ---- | ----- |
| OFF | Closed | Locked | Lock | Green |
| OFF | Tilted/Open | Closed | Lock | Default |
| ON | Tilted | Tilted | Unlock | Blue/Custom |
| ON | Open | Open | Unlock | Blue/Custom |
| ON | Closed | Manipulated | Alert | Red |

## Usage

### Basic Configuration

```yaml
- type: "custom:button-card"
  template: custom_card_senoro_win
  entity: binary_sensor.front_door_contact
  variables:
    ulm_custom_card_senoro_win_handle: sensor.front_door_handle
```

### Full Configuration with All Options

```yaml
- type: "custom:button-card"
  template: custom_card_senoro_win
  entity: binary_sensor.balcony_door_contact
  variables:
    ulm_custom_card_senoro_win_handle: sensor.balcony_door_handle
    ulm_custom_card_senoro_win_name: "Balcony Door"
    ulm_custom_card_senoro_win_icon: "mdi:door"
    ulm_custom_card_senoro_win_color: "yellow"
    ulm_custom_card_senoro_win_force_background_color: true
    ulm_custom_card_senoro_win_battery_level: sensor.balcony_door_battery
    ulm_custom_card_senoro_win_battery_warning: 25
    ulm_custom_card_senoro_win_battery_warning_low: 10
```

### Multiple Windows in a Grid

```yaml
- type: "grid"
  columns: 2
  cards:
    - type: "custom:button-card"
      template: custom_card_senoro_win
      entity: binary_sensor.bedroom_window_contact
      variables:
        ulm_custom_card_senoro_win_handle: sensor.bedroom_window_handle
        ulm_custom_card_senoro_win_name: "Bedroom"
        ulm_custom_card_senoro_win_battery_level: sensor.bedroom_window_battery

    - type: "custom:button-card"
      template: custom_card_senoro_win
      entity: binary_sensor.living_room_window_contact
      variables:
        ulm_custom_card_senoro_win_handle: sensor.living_room_window_handle
        ulm_custom_card_senoro_win_name: "Living Room"
        ulm_custom_card_senoro_win_battery_level: sensor.living_room_window_battery
```

## Template Code

??? note "Template Code"

    ```yaml
    --8<-- "custom_cards/custom_card_senoro_win/custom_card_senoro_win.yaml"
    ```

## Language Variables

The card supports multiple languages. Available translations:

??? note "English (EN)"

    ```yaml
    --8<-- "custom_cards/custom_card_senoro_win/languages/EN.yaml"
    ```

??? note "German (DE)"

    ```yaml
    --8<-- "custom_cards/custom_card_senoro_win/languages/DE.yaml"
    ```

**Note**: Only include the language file you need. Delete the others to prevent loading order issues.

## Troubleshooting

### Handle States Not Working

Make sure your handle sensor reports states as "Closed", "Tilted", and "Open" (with capital first letters). If your sensor uses different values (like "closed", "tilted", "open" in lowercase), you'll need to adjust the card's label section or create a template sensor to convert the states.

### Battery Icon Not Showing

Verify that:

1. The battery sensor entity ID is correct
2. The battery level is a number (percentage)
3. The battery level is below your warning threshold

### Icon Not Displaying

If you see a generic icon instead of your door/window icon, check that your contact sensor entity has an icon attribute set in Home Assistant.

## Support

For issues, questions, or feature requests, please open an issue on the [UI Lovelace Minimalist GitHub repository](https://github.com/UI-Lovelace-Minimalist/UI/issues).
