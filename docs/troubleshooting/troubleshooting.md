---
title: FAQ
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->
> On this page you can find answers and ways to troubleshoot the most common errors with installing and using this 'theme'.

Most times reloading the integration and emptying the cache can resolve most problems. <br>
This is done by:

1. Hit `C` and click reload `Ui_lovelace_minimalist`
2. Clear your cache by clicking `CTRL + F5` on Windows or `SHIFT + reload` on Mac

### Most common errors

??? info "Not everything is loaded after installation"

    1. Check if you have installed all dependencies of this [list](https://ui-lovelace-minimalist.github.io/UI/setup/download/#prerequisites_1).
    2. Clear your cache by clicking `CTRL + F5` on Windows or `SHIFT + reload` on Mac

??? info "The theme looks off/weird"

    Check if you have applied the Minimalist theme. Go to User_profile --> theme

??? info "Custom element doesn't exist"

    1. Check if you did install all [depencies](https://ui-lovelace-minimalist.github.io/UI/setup/download/#prerequisites_1) or checked the box to let UI-Minimalist them.
    2. Clear your cache by clicking `CTRL + F5` on Windows or `SHIFT + reload` on Mac

??? info "Popups do not show up"

    1.  Check if you have installed Browser_mod correctly by adding to your `configuration.yaml` file:

        ```yaml
        browser_mod:
        ```
    2.  Check if you followed the card specific way to enable popups <br>
        *This is either with adding a template or setting a variable to `true`*

??? info "Custom card template does not exist/showing up"

    1. Check if you placed the custom_card in the right directory
    ```yaml
    config
        └── ui_lovelace_minimalist
            ├── custom_cards
            |   ├── custom_card_1
            |   |   ├── custom_card_1.yaml
            |   |   └── EN.yaml
            |   └── custom_card_2
            |       ├── custom_card_2.yaml
            |       └── EN.yaml
            └── dashboard
    ```
    2. Hit `C` and click reload `Ui_lovelace_minimalist`
    3. Reload dashboard by clicking the three dots in the upper-right corner and click refresh
