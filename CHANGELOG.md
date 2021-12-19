# UI-Lovelace-Minimalist CHANGELOG

## Version 1.0.0-beta.8
# 🚀 Features

- More-info function light card and Custom auto-color light cards @basbruss (#80)
- improved "card\_battery" card  @vncnt-dev (#89)

# 🔧 Code enhancements

- Add yaml linter and pre-commit hook to GitHub actions @CM000n (#74)
- Add unit on chip @schumijo (#78)
- Add rounding and german translation to schumijo car card @CM000n (#85)
- Rework thermostat card to new templates @schumijo (#84)
- Introduce padding with card-mod-view-yaml @CM000n (#92)
- Make guest counter optional on chip\_presence\_detection @CM000n (#99)
- Fix guest presence counter @checkerschaf (#103)

# 🐛 Bug Fixes

- Flower card language error @schumijo (#76)
- Fix custom zones on person card @CM000n (#87)
- Set opacity-bg to 0.1 in light themes @CM000n (#102)

# 🈵 Translations

- Create SE.yaml @KaherdinTristan (#90)
- Fix german translation an clean some code @CM000n (#91)
- Add Spanish translations @jmoransalama (#93)

## Version 1.0.0-beta.7

Hi guys, it took a while, but here once again a new release. Yippie!!
Unfortunately, @Paddy0174  hasn't been active on Github or the forum for over a month now. We have been trying to reach him via private messages. However, without success. At this point, no matter where you are, love to @Paddy0174 🧡. We all hope you are doing well!

Since all the bug reports and pull requests have piled up, @TBens  has kindly granted some contributors the rights to manage the github repos. Please bear with us if things don't run smoothly at the beginning. We still have to learn how to manage a github repo ourselves.

Unfortunately, @TBens has not been able to give us permissions to the wiki page, or its repository, which is why it is not yet as up-to-date as this release. So you should have a close look at this release message and the corresponding commits to avoid misunderstandings.
We are also trying to get permissions for the wiki page to bring it up to date as soon as possible.

But now, without further ado, to the new release. We hope you enjoy it and thanks to all contributors!

### ⚠️ Breaking Changes

@saxel has done an excellent job of reworking the Vertical buttons custom state.
However, a few old habits had to be cut off, concerning the specification of the variables for the colors of the `vertical_buttons`.
If any of you have used this before, you should take a look at @saxel's pull request to get a better understanding of the new configuration:
https://github.com/UI-Lovelace-Minimalist/UI/pull/66

### 🔧 Code enhancements

- Add some list\_items templates @schumijo (#31)
- Add custom card custom\_card\_saxel\_fan @saxel (#34)
- NL support and Typofix @basbruss (#37)
- Add custom single icon chip card @CM000n (#38)
- Add custom card custom\_card\_schumijo\_car @schumijo (#39)
- Round temperature when the temperature has decimal points @bavo (#46)
- Add Alarm Chip to availabe templates @tombo12354 (#50)
- Create SE.yaml @EmilZackrisson (#53)
- Vertical buttons custom state @saxel (#66)
- Add release drafter @CM000n (#72)
- Transfer of the work status so far fromPaddy0174 dev @CM000n (#69)

### 🐛 Bug Fixes

- Fix card\_media\_player\_with\_controls variables access. @matrixx567 (#62)

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
