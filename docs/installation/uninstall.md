---
title: Uninstall
parent: Installation
nav_order: 6
---
# [](#uninstall)Uninstall

We are sorry to hear, that you want to uninstall this “theme”. Nonetheless here are our instructions to remove the “theme”. Depending on the way you installed this “theme” (`yaml` or `UI`-mode), it is a different process to uninstall this “theme”. Please follow the corresponding instructions underneath.

> **Note:** _As with all removals, make a backup before you mess with files!_

## [](#table-of-contents)Table of contents

[Uninstall in `yaml`-mode](#yaml-mode)  
[Uninstall in `UI`-mode](#ui-mode)

In these instructions, we assume you installed this “theme” with our guides for installation.

## [](#yaml-mode)Yaml-mode

To uninstall this “theme” you need to do a few simple steps:

*   Go to your Home Assistant `config` folder and delete the folder `minimalist-templates` and it’s content.
*   Open your `themes` folder (inside your `config` folder) and delete the two folders `minimalist-desktop` and `minimalist-mobile`.
*   Open your `configuration.yaml` and search for the line that starts with `button_card_templates:` . After you found it, delete the whole line.
*   You’re done, the “theme” is uninstalled. But please take note, the “view” files are still there and will produce errors. So if you want to get rid of these as well, please refer to the Home Assistant documentation to read up on how to do this!

## [](#ui-mode)UI-mode

In `UI`-mode the removal of this “theme” is done by a few simple steps.

*   Open your dashboard where you used this “theme”.
*   In the three-dot-menu in the top right corner, choose “Edit dashboard”.
*   Go back to three-dot-menu again and click “Raw configuration editor”.
*   Look for two lines, the first starts with `button_card_templates:` and the second one with “view:”.
*   Select the code between these two lines and delete it.
*   Delete afterwards the line `button_card_templates:` as well.
*   Save and close the raw-config-editor.
*   Back in the edit view delete all cards, that were based on this “theme”.
*   Close the edit mode and you’re done!