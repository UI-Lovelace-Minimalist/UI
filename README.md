# UI-Lovelace-Minimalist

[![Discord](https://badgen.net/discord/online-members/TPXg9b7GfR)](https://discord.gg/TPXg9b7GfR)
![Version](https://img.shields.io/github/v/release/UI-Lovelace-Minimalist/UI)
![hacs installs](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Flauwbier.nl%2Fhacs%2Fui_lovelace_minimalist)
![Downloads](https://img.shields.io/github/downloads/UI-Lovelace-Minimalist/UI/total)

It's kind of hard to explain what this is, so let's call it a "theme" (in quotation marks). But one thing is for sure, it is very nice! Taking the exceptional work of tben as a basis, this repository is aimed to ease installation and maintainance of his wonderful work. You can use this interpretation of a SmartHomeUI more or less like a theme in HomeAssistant.

<img src="https://raw.githubusercontent.com/UI-Lovelace-Minimalist/UI/main/docs/assets/img/example_home.png" width="200"> <img src="https://raw.githubusercontent.com/UI-Lovelace-Minimalist/UI/main/docs/assets/img/example_temperature.png" width="200"> <img src="https://raw.githubusercontent.com/UI-Lovelace-Minimalist/UI/main/docs/assets/img/example_consumption.png" width="200"> <img src="https://raw.githubusercontent.com/UI-Lovelace-Minimalist/UI/main/docs/assets/img/example_localisation.png" width="200">

## Wiki for documentation

We have setup an extensive Wiki for our documentation. It is more comfortable for you to read and for us to handle, than this file and gives our documentation the right framework to grow.
Take a look here: [https://ui-lovelace-minimalist.github.io/UI/](https://ui-lovelace-minimalist.github.io/UI/)

Table of content from the WIKI
<br>
<table>
<tr>
<th style="width: 33%;">Setup</th>
<th style="width: 33%;">Usage</th>
<th style="width: 33%;">Development</th>
</tr>
<tr>
  <td style="vertical-align: top;">
    <p>We have provided different guides to help you install and update this "theme"</p>
  </td>
  <td style="vertical-align: top;">
    <p>These usage guides give you a deeper knowledge about this "theme"</p>
  </td>
  <td style="vertical-align: top;">
    <p>This is our developer corner</p>
  </td>
<tr>
<td style="vertical-align: top;">
  <p>
    <a href="https://ui-lovelace-minimalist.github.io/UI/setup/download/">&raquo;&nbsp;Download</a><br>
    <a href="https://ui-lovelace-minimalist.github.io/UI/setup/installation/">&raquo;&nbsp;Installation</a><br>
    <a href="https://ui-lovelace-minimalist.github.io/UI/setup/configuration/">&raquo;&nbsp;Configuration</a><br>
  </p>
</td>
<td style="vertical-align: top;">
  <p>
    <a href="https://ui-lovelace-minimalist.github.io/UI/usage/cards/card_battery/">&raquo;&nbsp;Cards</a><br>
    <a href="https://ui-lovelace-minimalist.github.io/UI/usage/chips/chip_alarm/">&raquo;&nbsp;Chips</a><br>
    <a href="https://ui-lovelace-minimalist.github.io/UI/usage/popups/popup_aircondition/">&raquo;&nbsp;Popups</a><br>
    <a href="https://ui-lovelace-minimalist.github.io/UI/usage/custom_cards/custom_card_bar_card/">&raquo;&nbsp;Custom-Cards</a><br>
  </p>
</td>
<td style="vertical-align: top;">
  <p>
    <a href="https://ui-lovelace-minimalist.github.io/UI/development/card_style_guide/">&raquo;&nbsp;Card Style Guide</a><br>
    <a href="https://ui-lovelace-minimalist.github.io/UI/development/docs_style_guide/">&raquo;&nbsp;Docs Style Guide</a><br>
    <a href="https://ui-lovelace-minimalist.github.io/UI/development/custom_cards/">&raquo;&nbsp;Custom-Cards</a><br>
  </p>
</td>
</tr>
</table>

## Installation and update

We can offer you in-depth instructions for installation, as well as for future updates or from a previous version. Check our WIKI for more info:

- [Download](https://ui-lovelace-minimalist.github.io/UI/setup/download/)
- [Installation](https://ui-lovelace-minimalist.github.io/UI/setup/installation/)
- [Configuration](https://ui-lovelace-minimalist.github.io/UI/setup/configuration/)

## List of templates

The actual version of this "theme" has 20 different cards, seven chips and other templates bundled into the download. We're sorry, but the list wouldn't fit into this readme. [Please see this page, where you can find an extensive list of templates with code examples, screenshots and explaination](https://ui-lovelace-minimalist.github.io/UI/usage/cards/card_battery/).

## Custom cards

The same goes for our `custom_cards`. As the number grows, the list would be to big for this readme, so we provide you with an overview page with pictures, code examples and additional informations. [Find the list here](https://ui-lovelace-minimalist.github.io/UI/usage/custom_cards/custom_card_bar_card/).

### Credits & Contributors

- This design was made by [tben](https://community.home-assistant.io/u/tben/summary)
- A lot of inspiration is taken from [7ahang’s work](https://www.behance.net/gallery/88433905/Redesign-Smart-Home) found on Behance.
- Contributions from others in the HomeAssistant forum thread, you can find it here.
- The technical part is realised mostly by taking advantage of the great work RomRaider did with his [button-card](https://github.com/custom-cards/button-card).
- Code refactor, cleanup and maintainance by [schumijo](https://github.com/schumijo) and [paddy0174](https://github.com/Paddy0174) & [CM000n](https://github.com/CM000n).
- [dwainscheeren](https://github.com/dwainscheeren) for his inspiration to deliver themes via HACS.
- Wiki by [paddy0174](https://github.com/Paddy0174).
- Special thanks to clemalex and [schumijo](https://github.com/schumijo)for contributing their cards to the main repository.
- [stokkie90](https://github.com/stokkie90) for implementing most of the HACS functionalities.
- And of course [all the others](https://github.com/UI-Lovelace-Minimalist/UI/graphs/contributors) who cannot be named here due to space limitations.

❤️ Thank you so much for helping to keep this UI awesome

### Contributions

>This is a living project and all input is very welcome! If you configured and designed  a card, that you would like to share, please feel free to do so! We are happy to include your contribution so others can use it as well!
Your developments should always start from "dev" as the base branch. Due to the many contributions, it cannot be guaranteed that the "main" branch with the last published version contains all current changes.
This project uses pre-commit for consistent and clean code. If possible, please make sure that you also use pre-commit for local development before creating a pull request.
