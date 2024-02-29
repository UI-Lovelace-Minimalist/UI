---
title: Custom Card External Weblink
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom Card "External Weblink"

- Author: Radcliff - 2024
- Version: 1.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Description

This is a card for opening external webpage links.
It will display a UI minimalist style card with an icon and a name for the link.
The link will be opened in a new window.

I use it for linking to other web based services in my home network, like my NAS web UI.

Remember kids: Bitcoin, not crypto.

## Variables
ulm_custom_card_radcliff_externalweblink_linkurl: 'https://stalleberget.duckdns.org/lager'
ulm_custom_card_radcliff_externalweblink_linkname: 'Slukhålet'
ulm_custom_card_radcliff_externalweblink_linkicon: 'mdi:land-rows-horizontal'
ulm_custom_card_radcliff_externalweblink_iconcolor: 'var(--color-theme-purplepink)'


| Variable                                            | Default                 | Required | Notes                                                                                                                  |
| --------------------------------------------------- | ----------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| ulm_custom_card_radcliff_externalweblink_linkurl    |                         | Yes      | Link to the external web page. Including the protocol (For example http://).                                           |
| ulm_custom_card_radcliff_externalweblink_linkname   |                         | Yes      | This is the link title to be shown                                                                                     |
| ulm_custom_card_radcliff_externalweblink_linkicon   | mdi:link-circle-outline | No       | Icon to show                                                                                                           |
| ulm_custom_card_radcliff_externalweblink_iconcolor  | var(--color-blue)       | No       | The icon color. Opacity is always 1                                                                                    |
| ulm_custom_card_radcliff_externalweblink_iconbg     | var(--color-blue)       | No       | The icon background color. Opacity is always 0.2. If iconcolor is set but not iconbg, iconbg will be set to iconcolor. |

## Usage

```yaml
- type: "custom:button-card"
  template: custom_card_radcliff_externalweblink
  variables:
    ulm_custom_card_radcliff_externalweblink_linkurl: 'https://google.com/'
    ulm_custom_card_radcliff_externalweblink_linkname: 'Google Search'
    ulm_custom_card_radcliff_externalweblink_linkicon: 'mdi:search-web'
    ulm_custom_card_radcliff_externalweblink_iconcolor: 'var(--color-theme-purplepink)'
    ulm_custom_card_radcliff_externalweblink_iconbg: '#000000)'
        
```

## Template code

??? note "Template Code"

    ```yaml title="custom_card_radcliff_externalweblink.yaml"
    --8<-- "custom_cards/custom_card_radcliff_externalweblink/custom_card_radcliff_externalweblink.yaml"
    ```
