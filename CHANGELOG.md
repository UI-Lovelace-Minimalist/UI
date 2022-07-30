# UI-Lovelace-Minimalist CHANGELOG

## Version 1.0.0-beta.11

### 🚀 Features

- #154 New custom cards and update of existing ones @mp-se

### ⚙️ Code enhancements

- #149 Update button_card_templates.yaml @13robin37
- #170 armed_away state for alarm chip @denes44

### 🐞 Bug Fixes

- #155 Update card_light_icon_info.yaml @basbruss
- #156 Fix custom_card_saxel blue style card @saxel
- #153 Fix battery_card icon color when state is unavailable @saxel
- #146 fix Card "card_media_player_with_controls"
  (missing  variable "ulm_card_media_player_with_controls_entity") @vncnt-dev
- #183 Light Slider unavailable color @schumijo
- #182 Update chips_icon_label to use base chips template @schumijo

### ㊗️ Translations

- #163 Add Polish translations for cards @desty2k
- #176 Portuguese Translation @kaphwor
- #181 Missing variables in new language files @denes44
- #184 Update ES.yaml @revin34

### 📄 Documentation

- #169 Update README_POPUPS.md @KaherdinTristan
- #173 Update README_POPUPS.md @schumijo

### ❤️ Thank you so much for helping out to keep this UI awesome

@13robin37, @CM000n, @KaherdinTristan, @basbruss, @denes44, @desty2k, @kaphwor,
@mp-se, @revin34, @saxel, @schumijo and @vncnt-dev

## Version 1.0.0-beta.10-hotfix

### What's Changed

- Add discord channel badge by @CM000n in <https://github.com/UI-Lovelace-Minimalist/UI/pull/159>
- Add discord channel badge by @CM000n in <https://github.com/UI-Lovelace-Minimalist/UI/pull/160>
- Use new slider from AnthonMS for popup card by @bavo in <https://github.com/UI-Lovelace-Minimalist/UI/pull/162>
- Hotfix popup card by @schumijo in <https://github.com/UI-Lovelace-Minimalist/UI/pull/164>

**Full Changelog**: <https://github.com/UI-Lovelace-Minimalist/UI/compare/v1.0.0-beta.10...v1.0.0-beta.10-hotfix>

## Version 1.0.0-beta.10

### What's Changed

- Fix lowercase readme files by @CM000n in <https://github.com/UI-Lovelace-Minimalist/UI/pull/142>
- Automatically detect lowercase README.md files by @CM000n in <https://github.com/UI-Lovelace-Minimalist/UI/pull/145>
- Hotfix: Fix folder structure for basbruss light cards by @basbruss in <https://github.com/UI-Lovelace-Minimalist/UI/pull/144>
- Hotfix for folder structure on basbruss light cards by @CM000n in <https://github.com/UI-Lovelace-Minimalist/UI/pull/150>
- Implementation of popup cards by @schumijo in <https://github.com/UI-Lovelace-Minimalist/UI/pull/132>
- First release of popup cards by @schumijo in <https://github.com/UI-Lovelace-Minimalist/UI/pull/157>

### 📄 Documentation

- Specific readme for popups is available [here](https://github.com/UI-Lovelace-Minimalist/UI/blob/main/ups.md)

**Full Changelog**: <https://github.com/UI-Lovelace-Minimalist/UI/compare/v1.0.0-beta.9...v1.0.0-beta.10>

#### ❤️ Special thanks to @bavo for his help on creating these popups

#### ❤️ And @CM000n for his hard work on this project

## Version 1.0.0-beta.9

### 🚀 Features

- #121 Custom-card "Device Tracker (Online or Offline ?) @vncnt-dev
- #111 Thermostat card  @httpedo13
- #117 Custom printer card with toner status @mp-se
- #127 Custom Input Number Card @sildehoop
- #133 Added wifi signal card @mp-se
- #116 Additional custom light card @13robin37

### ⚙️ Code enhancements

- #114 Make card_person zones optional and more robust @checkerschaf
- #140 New release light cards @basbruss

### 🐞 Bug Fixes

- #112 Revert Set opacity-bg to 0.1 @CM000n
- #113 Fix non colored chips on edge and chrome @CM000n
- #140 New release light cards @basbruss

### ㊗️ Translations

- #124 IT Language for Welcome card.yaml @httpedo13

### 📄 Documentation

- #135 Restructure images in custom cards folder + fix broken links @bavo

### ❤️ Thank you so much for helping out to keep this UI awesome

@13robin37, @CM000n, @basbruss, @bavo, @checkerschaf, @httpedo13, @mp-se, @sildehoop, @vncnt-dev

## Version 1.0.0-beta.8

### 🚀 Features

- More-info function light card and Custom auto-color light cards @basbruss (#80)
- improved "card\_battery" card  @vncnt-dev (#89)

### 🔧 Code enhancements

- Add yaml linter and pre-commit hook to GitHub actions @CM000n (#74)
- Add unit on chip @schumijo (#78)
- Add rounding and german translation to schumijo car card @CM000n (#85)
- Rework thermostat card to new templates @schumijo (#84)
- Introduce padding with card-mod-view-yaml @CM000n (#92)
- Make guest counter optional on chip\_presence\_detection @CM000n (#99)
- Fix guest presence counter @checkerschaf (#103)

### 🐛 Bug Fixes

- Flower card language error @schumijo (#76)
- Fix custom zones on person card @CM000n (#87)
- Set opacity-bg to 0.1 in light themes @CM000n (#102)

### 🈵 Translations

- Create SE.yaml @KaherdinTristan (#90)
- Fix german translation an clean some code @CM000n (#91)
- Add Spanish translations @jmoransalama (#93)

## Version 1.0.0-beta.7

### ⚠️ Breaking Changes

@saxel has done an excellent job of reworking the Vertical buttons custom state.
However, a few old habits had to be cut off, concerning the specification of the variables for the colors of the `vertical_buttons`.
If any of you have used this before, you should take a look at @saxel's pull request to get a better understanding of the new configuration:
<https://github.com/UI-Lovelace-Minimalist/UI/pull/66>

### 🔧 Code enhancements

- Add some list\_items templates @schumijo (#31)
- Add custom card custom\_card\_saxel\_fan @saxel (#34)
- NL support and Typofix @basbruss (#37)
- Add custom single icon chip card @CM000n (#38)
- Add custom card custom\_card\_schumijo\_car @schumijo (#39)
- Round temperature when the temperature has decimal points @bavo (#46)
- Add Alarm Chip to available templates @tombo12354 (#50)
- Create SE.yaml @EmilZackrisson (#53)
- Vertical buttons custom state @saxel (#66)
- Add release drafter @CM000n (#72)
- Transfer of the work status so far fromPaddy0174 dev @CM000n (#69)

### 🐛 Bug Fixes

- Fix card\_media\_player\_with\_controls variables access. @matrixx567 (#62)

## Version 1.0.0-beta.6

### Fixed

- Fixed `card_light_slider_*`: wrong background in dark theme with state=="on" (fix #18)
- Fixed `chip_icon_only`, `chip_icon_state` and `chip_icon_double_state` (fix #23) (thanks CM000n)
- Fixed missing default icon on `card_media_player` (fix #21) (thank you again {and again} schumijo)
- Fix wrong variable name in `card_light_slider_collapse` and `card_light_slider_horizontal` by schumijo (fix #13) (thank you schumijo)
- Fix `card_power_outlet` by saxel with PR #20 (fix #14) (thank you again saxel)
- Fix `card_battery` by saxel with PR #17 (thank you saxel)
- Fix `chip_power_consumption` by schumijo (fix #16) (thanks schumijo)

### Changed

- Changed `cover` template to support covers without "current_position" attribute (fix #22) (and again, thanks schumijo!)
- Update `custom_card_schumijo_flower` by schumijo with PR #15

### Added

- Added `chip_navigate` (close #24)

### Wiki

- Added CodeGenerator Button

## Version 1.0.0-beta.5

### Fixed

- Fixed some links and typos in README.md
- Fixed `chip_icon_only`

### Changed

- Changed name for language variables for schumijos flower card
- Changed link(s) in README.md for wiki
- Changed readme route people to the wiki
- Changed `card_battery`

### Added

- Added `card_light_slider_collapse` and `card_light_slider_horizontal` (code, readme and wiki)
- Undocumented `card_script` - fully integrated in the next release

### Removed

- Removed images that are no longer used (now in the wiki)

## Version 1.0.0-beta.4

### Fixed

- Fixed `custom_card_paddy_welcome` (fix #8)
- Fixed `examples.md` with wrong path to `button_card_templates.yaml`

### Changed

- Changed all template names that start with `chips_` to `chip_` **breaking change**
- Changed `README.md` to reflect the new wiki (fix #5)
- Changed `card_light_slider` to remove slider while state=off
- Changed icon on `card_person` from mdi:account to mdi:face-man

### Added

- Added `README.md` template to `custom-cards.md`
- Added author to `light_slider_card`

## Version 1.0.0-beta.3

### Changed

- Moved flower-card from minimalist-templates to custom-cards
- First examples written in `examples.md`
- Moved card_thermostat, card_water_heater, card_qubino and card_playstation to custom-cards and set them to review

### Added

- Re-added three commits from schumijo
- Added german (DE.yaml) to `custom_card_schumijo_flower`
- Added `card_navigate`
- Added `card_person`

## Version 1.0.0-beta.2

### Fixed

- Fix some typos in `README.md`
- Fix some typos in `custom-cards.md`
- Fix `box-shadow` in `card_graph`
- Fix `chip_icon_state`
- Fix `chips_icon_double_state`

### Added

- Added a few custom-cards (custom_card_paddy_welcome, custom_card_paddy_waste_collection, custom_card_tpx01_air_condition)

## Version 1.0.0-beta.1

### Changed

Actually this version is a major re-write of the previous versions. As the new naming conventions are set, you may need to update your previous code to reflect these changes.
This is necessary to ease future updates and get some structure in place, eg. for `custom_cards`. For most of the old definitions there are *legacy templates* in place.

## Notes

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
