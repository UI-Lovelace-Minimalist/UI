---
title: Speedtest Custom-card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom-card "Speedtest"

This is a `custom-card` to display the results from the `Speedtest.net` integration. The integration uses the Speedtest.net web service to measure network bandwidth performance.

![Screenshot](../../docs/assets/img/screenshot_irmajavi_speedtest_card.jpg)

## Credits

Author: irmajavi - 2022
Version: 1.0.0

<h2 style="color: red">Breaking changes</h2>

<details style="color: red">
  <summary>1.1.0</summary>

Changed from speedtestdotnet.speedtest service to update entity service from Home Assistant due to announced deprecation of the speedtest service.

</details>

## Changelog

<details>
<summary>1.1.0</summary>
The variable ulm_custom_card_irmajavi_speedtest_download_speed_entity is now used to trigger an update of all the speedtest sensors.
</details>

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Requirements

Home Assistant Speedtest.net integration

## Usage

```yaml
type: custom:button-card
template: custom_card_irmajavi_speedtest
variables:
  ulm_custom_card_irmajavi_speedtest_download_speed_entity: sensor.speedtest_download
  ulm_custom_card_irmajavi_speedtest_upload_speed_entity: sensor.speedtest_upload
  ulm_custom_card_irmajavi_speedtest_ping_entity: sensor.speedtest_ping
  ulm_custom_card_irmajavi_speedtest_color: blue
  ulm_custom_card_irmajavi_speedtest_router_name: router_name
  ulm_custom_card_irmajavi_speedtest_router_model: router_model
```

## Variables

<table>
<thead>
  <tr>
    <th>Variable</th>
    <th>Example</th>
    <th>Required</th>
    <th>Explanation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>ulm_custom_card_irmajavi_speedtest_router_name</td>
    <td>Linksys</td>
    <td>Yes</td>
    <td>Your router name</td>
  </tr>
  <tr>
    <td>ulm_custom_card_irmajavi_speedtest_router_model</td>
    <td>EA8549</td>
    <td>Yes</td>
    <td>Your router model</td>
  </tr>
  <tr>
    <td>ulm_custom_card_irmajavi_speedtest_color</td>
    <td>blue</td>
    <td>Yes</td>
    <td>The color of the icon</td>
  </tr>
  <tr>
    <td>ulm_custom_card_irmajavi_speedtest_upload_speed_entity</td>
    <td>sensor.test2</td>
    <td>Yes</td>
    <td>The upload sensor created by the integration</td>
  </tr>
  <tr>
    <td>ulm_custom_card_irmajavi_speedtest_download_speed_entity</td>
    <td>sensor.test3</td>
    <td>Yes</td>
    <td>The download sensor created by the integration</td>
  </tr>
  <tr>
    <td>ulm_custom_card_irmajavi_speedtest_ping_entity</td>
    <td>sensor.test4</td>
    <td>Yes</td>
    <td>The ping sensor created by the integration</td>
  </tr>
</tbody>
</table>

## Template Code

??? note "Template Code"

    ```yaml title="custom_card_irmajavi_speedtest.yaml"
    --8<-- "custom_cards/custom_card_irmajavi_speedtest/custom_card_irmajavi_speedtest.yaml"
    ```
