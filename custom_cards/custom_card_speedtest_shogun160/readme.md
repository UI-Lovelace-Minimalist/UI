---
title: Custom Card Speedtest
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom Card "Speedtest"

<img width="498" alt="screenshot_speedtest_card_dark" src="https://user-images.githubusercontent.com/63370033/223386087-be98bd84-a692-4364-9ef6-c6e56a51c7ec.png"> <img width="501" alt="screenshot_speedtest_card_light" src="https://user-images.githubusercontent.com/63370033/223386117-ea10ceee-c0a4-48b0-b3da-12768565c8f0.png">

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Description

This is a custom card to display download, upload and ping speed by using apexchart.

## Variables

| Variable                                        | Default                | Required | Notes                                               |
| ----------------------------------------------- | ---------------------- | -------- | --------------------------------------------------- |
| ulm_custom_card_speedtest_download_speed_entity |                        | Yes      | The entity to represent the download speed          |
| ulm_custom_card_speedtest_download_speed_color  | `var(--google-yellow)` | No       | Color for download graph                            |
| ulm_custom_card_speedtest_download_speed_max    | `100`                  | No       | Maximal value for download speed to build the graph |
| ulm_custom_card_speedtest_upload_speed_entity   |                        | Yes      | The entity to represent the upload speed            |
| ulm_custom_card_speedtest_upload_speed_color    | `var(--google-blue)`   | No       | Color for upload graph                              |
| ulm_custom_card_speedtest_upload_speed_max      | `40`                   | No       | Maximal value for upload speed to build the graph   |
| ulm_custom_card_speedtest_ping_entity           |                        | Yes      | The entity to represent the ping speed              |
| ulm_custom_card_speedtest_ping_color            | `var(--google-green)`  | No       | Color for ping graph                                |
| ulm_custom_card_speedtest_ping_max              | `85`                   | No       | Maximal value for ping speed to build the graph     |
| ulm_custom_card_speedtest_round                 | `false`                | No       | Weather to use rounded values or not                |

## Usage

```yaml

- type: custom:button-card
  template: custom_card_speedtest_shogun160
  variables:
    ulm_custom_card_speedtest_download_speed_entity: sensor.speedtest_download
    ulm_custom_card_speedtest_upload_speed_entity: sensor.speedtest_upload
    ulm_custom_card_speedtest_ping_entity: sensor.speedtest_ping
    ulm_custom_card_speedtest_round: true

```
