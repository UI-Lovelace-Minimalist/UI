# UI-Lovelace-Minimalist CHANGELOG

## Version 1.0.0-beta.6
### Fixed
* Fixed `card_light_slider_*`: wrong background in dark theme with state=="on" (fix #18)
* Fixed `chip_icon_only`, `chip_icon_state` and `chip_icon_double_state` (fix #23) (thanks CM000n)
* Fixed missing default icon on `card_media_player` (fix #21) (thank you again {and again} schumijo)
* Fix wrong variable name in `card_light_slider_collapse` and `card_light_slider_horizontal` by schumijo (fix #13) (thank you schumijo)
* Fix `card_power_outlet` by saxel with PR #20 (fix #14) (thank you again saxel)
* Fix `card_battery` by saxel with PR #17 (thank you saxel)
* Fix `chip_power_consumption` by schumijo (fix #16) (thanks schumijo)

### Changed
* Changed `cover` template to support covers without "current_position" attribute (fix #22) (and again, thanks schumijo!)
* Update `custom_card_schumijo_flower` by schumijo with PR #15

### Added
* Added `chip_navigate` (close #24)

### Wiki
* Added CodeGenerator Button


## Version 1.0.0-beta.5
### Fixed
* Fixed some links and typos in readme.md
* Fixed `chip_icon_only`

### Changed
* Changed name for language variables for schumijos flower card
* Changed link(s) in readme.md for wiki
* Changed readme route people to the wiki
* Changed `card_battery`

### Added
* Added `card_light_slider_collapse` and `card_light_slider_horizontal` (code, readme and wiki)
* Undocumented `card_script` - fully integrated in the next release

### Removed
* Removed images that are no longer used (now in the wiki)


## Version 1.0.0-beta.4
### Fixed
* Fixed `custom_card_paddy_welcome` (fix #8)
* Fixed `examples.md` with wrong path to `button_card_templates.yaml`

### Changed
* Changed all template names that start with `chips_` to `chip_` **breaking change**
* Changed `readme.md` to reflect the new wiki (fix #5)
* Changed `card_light_slider` to remove slider while state=off
* Changed icon on `card_person` from mdi:account to mdi:face-man

### Added
* Added `readme.md` template to `custom-cards.md`
* Added author to `light_slider_card`


## Version 1.0.0-beta.3
### Changed
* Moved flower-card from minimalist-templates to custom-cards
* First examples written in `examples.md`
* Moved card_thermostat, card_water_heater, card_qubino and card_playstation to custom-cards and set them to review

### Added
* Re-added three commits from schumijo
* Added german (DE.yaml) to `custom_card_schumijo_flower`
* Added `card_navigate`
* Added `card_person`


## Version 1.0.0-beta.2
### Fixed
* Fix some typos in `readme.md`
* Fix some typos in `custom-cards.md`
* Fix `box-shadow` in `card_graph`
* Fix `chip_icon_state`
* Fix `chips_icon_double_state`

### Added
* Added a few custom-cards (custom_card_paddy_welcome, custom_card_paddy_waste_collection, custom_card_tpx01_air_condition)


## Version 1.0.0-beta.1
### Changed
Actually this version is a major re-write of the previous versions. As the new naming conventions are set, you may need to update your previous code to reflect these changes.
This is necessary to ease future updates and get some structure in place, eg. for `custom_cards`. For most of the old definitions there are *legacy templates* in place.

## Notes
All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
