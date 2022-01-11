---
title: Installation
has_children: true
nav_order: 1
---
# [](#installation)Installation

The installation of this “theme” is right now only possible via a manual installation. We are working on getting this “theme” listed and installable via [HACS](https://hacs.xyz), but technically it is neither a theme, nor an integration, and that makes it a little harder to get it into HACS. But don’t let that worry you, we have prepared some instructions on how to install and use this theme.

Depending on your Home Assistant setup, there are different ways to setup this theme, either for `yaml` or `UI`-mode.

> **Note:** _the way you choose to install determines the way you have to work later on with the system! But remember, you can configure the mode per dashboard, so it is possible to have one dashboard in `yaml`-mode, and one in `UI`-mode!_

These are the differences between the two methods:

<table>
<thead>
<tr>
<th> </th>
<th>YAML-mode</th>
<th>UI-mode</th>
</tr>
</thead>
<tbody>
<tr>
<td>Easy updating the “theme”</td>
<td>✔️ copy & paste files</td>
<td>❌ copy contents of files and put it together in one file</td>
</tr>
<tr>
<td>Use `custom-cards` and language variables</td>
<td>✔️ copy & paste files</td>
<td>❌ copy contents of files and put it together in one file</td>
</tr>
<tr>
<td>No `yaml` knowledge necessary</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>Use of CodeGenerator</td>
<td>✔️</td>
<td>✔️</td>
</tr>
</tbody>
</table>

**_We recommend installation in `yaml`-mode!_**

## [](#a-little-technical-insight)A little technical insight

Home Assistant unfortunately only allows to include files to your Lovelace configuration in `yaml`-mode. This “theme” on the other hand makes extensive use of this include function. Therefor the use of `yaml`-mode is highly recommended! Did you know, you can set `yaml`-mode for specific dashboards while leaving all others in `UI`-mode!

There is a feature request at the Home Assistant forum, if you’d like to see this function available in `UI`-mode, too, you might want to give your vote in [this thread](https://community.home-assistant.io/t/ability-to-use-include-directives-in-ui-editor/336167?u=paddy0174).

Whatever way you choose, here are the instructions:

*   [For `yaml`-mode here](yaml-mode)
*   [For `UI`-mode here](ui-mode)