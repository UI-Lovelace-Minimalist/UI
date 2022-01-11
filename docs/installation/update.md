---
title: Update
parent: Installation
nav_order: 4
---
# [](#update)Update

Depending on the way you installed this “theme” (`yaml` or `UI`-mode), it is a different process to update the “theme”.

> **Note:** _As with all updates, make a backup before you mess with files!_

## [](#table-of-contents)Table of contents

*   [Update in `yaml`-mode](#yaml-mode)
*   [Update `UI`-mode](#ui-mode)
*   [Update from a previous version](#previous-version)

## [](#yaml-mode)Yaml-mode

Updating this theme is a straightforwarded process and we tried to make it as easy as possible. You should already know the steps from installing the “theme”:

1.  Download this repository as a _zip file_ to your computer. You can do so by clicking the green button in the top right with the lable “Code” and choosing “Download ZIP”.
2.  Unpack the zip-file to a location of your choice on your computer.
3.  Copy the content (files **and** folders) of the folder `config` from this repository into your HomeAssistant `config` folder, overwriting the files with the downloaded (new) version.
4.  If you’re using _language specific settings_, remember to also copy the language file! See [here](/installation/yaml-mode#installation-of-non-english-languages) for more details on language specific settings.
5.  If you use `custom-cards` and followed the instructions to install them, everything is fine, they will not be overwritten or otherwise changed.

To check, which version you have installed, you can always find the version number(s) in the seperate file [changelog](https://github.com/UI-Lovelce-Minimalist/UI/CHANGELOG).

## [](#ui-mode)UI-mode

Unfortunately, the update process for `UI`-mode is not as easy as in `yaml`-mode, but don’t worry, you have done this before during your installation, so you will get this, promised!  
Before we start, there are two ways, choose whichever one feels comfortable to you. You will end up with the same, but the way to get there differs quite a lot.

*   Stepwise  
    If a new release of this “theme” is published, you can display the differences between the prior version and the actual version in Github. Take a look, which files have changed, and if the changes were a lot or just a few letters. If you don’t know what I’m talking about here, choose the second method “complete”.

    Open the commit, that made the release. If you click on it, it will display all changes, neatly sorted by file(s). Do the same changes, one by one, as were made in the commit.

*   Complete  
    <u>» The problem «</u>  
    Still, Home Assistant doesn’t let you include complete folders or even files in `UI`-mode. So you have to go one of these two ways to get them. As I said, you already did one way during installation.

    > **Note:** _You can choose whatever method you want now, it doesn’t matter if you used the generator for the first install or did it manually. If we still can’t switch you to `yaml`-mode, just use the generator for the code and you should be good to go. The generator will be updated automatically with a new release. You can always see which version is used by the generator, if you look into the header of the generated code._

    <u>» Solution #1 «</u>  
    You can manually go through the files and copy the content that you need to paste in your raw-config-editor.

    <details><summary>Where do I have to look and what do I need to copy</summary> * Download the files from our repository to your computer and unpack it * Open a new, blank file in your editor. In the first line write "views:" and press enter. We need to be in the next line! * On the new line write "button_card_templates:" and press Enter. Again, we now need to be on a new line! * If you want to use english as your language, go to the folder `config` > `minimalist-templates` and open the file `EN.yaml` in your editor. Copy the content and paste it in the "blank" file underneath the code from before. This code needs to be indented by two spaces. Yes, the complete code, every line needs to be moved by two spaces. * If you want to use a language other than english, go to the folder `languages` in your download and look for the language you want to use, eg. `DE.yaml`. Open the file and copy the content. Paste it in the "blank" file. This code needs to be indented by two spaces. Yes, again the complete code, every line needs to be moved by two spaces. * Go to the folder `config` -> `minimalist-templates` and open `button_card_templates.yaml` in your editor. Copy the whole content and paste it underneath the code from the step before in your "blank" file. This code needs to be indented by two spaces as well. Yes, here as well, the complete code, every line needs to be moved by two spaces. * *Optional* If you want to use `custom-cards`, than you have to do this the same way as above. * Go to the `custom-card` folder and copy the content of the language file (if available) and from the custom-card-file (eg. `custom_card_paddy_welcome.yaml`) to paste it underneath the code from above into the "blank" file. * Copy the complete code and open your raw-config-editor in Lovelace for the "Minimalist" dashboard. Select the whole block of code, that you inserted during installation. It should start with the line `button_card_templates:` and should end with `views:`. * Delete it and add the new code instead. * Save it and close the raw-config-editor and the edit mode. * You're done, have fun with the updated "theme". > **Important:** *You need to take special care about the indentation! Indent the code you paste to the needed level!*</details>

    <u>» Solution #2 «</u>  
    We have designed a small generator that should get you started with the code you need. Be advised, this generator is still in beta stage, so some issues could still arise…

    *   Go to [this page](/codegen/installation) and follow the instructions on that page. Leave the example data out, just get the template code (including your `custom-cards`).
    *   Copy the complete generated code and open your raw-config-editor in Lovelace for the “Minimalist” dashboard.
    *   Select the whole block of code, that you inserted during installation. It should start with the line `button_card_templates:` and should end with `views:`.
    *   Delete it and add the new code instead.
    *   Save it and close the raw-config-editor and the edit mode.
    *   You’re done, have fun with the updated “theme”.

## [](#update-from-a-previous-version)<a name="previous-version"></a>Update from a previous version

This guide is intended for people who already had installed this “theme” prior to releasing it on Github with a version tag. So if your file(s) and/or template code has no version tag, this is for you. If you don’t know, if this fits you, just look at the template definition for “light”. If the template name starts with `card_`, like `card_light`, it is the new version, so this guide is not for you.

> **Note:** _This is the perfect time, to do a backup of your Home Assistant installation. You’re starting to change, delete and add a lot of files, that are dependent to your installation! So please, go and do a full backup, so you can easily restore your installation, if something fails!_

Let’s see if we can get this done, so let’s start!

1.  **Remove the old installation** 

As there were a lot of different ways, that you could have installed this, you need to look for yourself, where the files and maybe inserts into Home Assistant-files are located. If you installed this “theme” according to the instructions, you need to delete these folders and their contents:
    *   `config` > `configuration`
    *   `config` > `lovelace`

A word about ressources. If you followed the original readme, you have gotten a few `lovelace-cards` (eg. button-card) in the folder `config` > `www` > `community`. These were linked through the file `ressources.yaml`. Unfortunately, this is not the best way to handle `lovelace-cards`. Our recommendation is to delete these folders and install the needed `lovelace-cards` via [HACS](https://hacs.xyz). Even if you don’t want to use HACS, we recommend to delete these folders and start with a fresh install of these cards, following their installation instructions.

> **Note:** _If one of our cards needs a specific `lovelace-card` to work correctly, it is specifically noted!_

Move into the folder `config` > `www` > `community` and delete these `lovelace-cards` (folders), you originally installed:

<table>
<thead>
<tr>
<th>Card</th>
<th>Folder</th>
</tr>
</thead>
<tbody>
<tr>
<td>button-card</td>
<td>`button-card`</td>
</tr>
<tr>
<td>slider-card</td>
<td>`ha-slider-card`</td>
</tr>
<tr>
<td>auto-entities</td>
<td>`lovelace-auto-entities`</td>
</tr>
<tr>
<td>card-mod</td>
<td>`lovelace-card-mod`</td>
</tr>
<tr>
<td>state-switch</td>
<td>`lovelace-state-switch`</td>
</tr>
<tr>
<td>mini-graph</td>
<td>`mini-graph-card`</td>
</tr>
<tr>
<td>mini-media-player</td>
<td>`mini-media-player`</td>
</tr>
<tr>
<td>swipe</td>
<td>`swipe-card`</td>
</tr>
<tr>
<td>vertical-stack-in</td>
<td>`vertical-stack-in-card`</td>
</tr>
</tbody>
</table>

2.  **Prepare your HomeAssistant installation**  

For the next steps you need a good file editor. We recommend one of these possibilities, the [File editor AddOn](https://github.com/home-assistant/addons/tree/master/configurator) or a good editor like [Notepad++](https://notepad-plus-plus.org/) or [SublimeText](https://www.sublimetext.com/) for your OS (computer).

To install this “theme” together with other themes in HA, you need to setup your `configuration.yaml` to use a themes folder.

1.  Create a folder `themes` in your `config` folder
2.  Add this under the section `frontend` in your `configuration.yaml`:

```yaml
            frontend:
              themes: !include_dir_merge_named themes
```

3.  Restart Home Assistant
4.  From now on, you can install new themes, like this one, in your themes folder
5.  We apply this theme later on so just leave it like that for now.

> **Note:** _This is the official, recommended way to handle themes. With this structure you can install themes with HACS._

3.  **Download the files**  

Go to our repository on Github and download the code by pressing the green “Code” button in the top right corner and choose “Download ZIP”. Save the file on your computer and unpack it.
4.  **Upload to your HomeAssistant installation**

*   In the downloaded and unpacked file you find a folder `config`
*   Move inside this folder and upload the two folders `minimalist-templates` and `themes` directly into your HA `config` folder  
    This should leave you with the following structure

```yaml
            config
              └── other folders from Home Assistant, eg. data
              └── minimalist-templates
                 └── button_card_templates.yaml
                 └── EN.yaml
              └── themes
                 └── minimalist-desktop
                    └── minimalist-desktop.yaml
                 └── minimalist-mobile
                    └── minimalist-mobile.yaml
              └── configuration.yaml (from HA)
              └── other files from Home Assistant, eg. home-assistant.log
```

*   If you want to use english as your language, go to the next step, if not, read on
    *   Back in the main folder of your downloaded and unpacked file you find a folder `languages`.
    *   Move into it and copy the file of the desired language, eg. `DE.yaml` or `FR.yaml`, into the folder `minimalist-templates` inside your HA `config` folder.
    *   **_IMPORTANT!_** Delete the file `EN.yaml` inside `minimalist-templates` or you will get weird language strings!

    [See this page for more details](/installation/yaml-mode#installation-of-non-english-languages) on how language files work in this “theme”.

5.  **Installing the lovelace-cards**  

Some of our cards need lovelace-cards to work correctly. To install these, we highly recommend to use HACS, as it is the easiest and safest way to install and maintain (update) these cards. Here is a list of the required cards:

<table>
<tbody>
<tr>
<th>Card</th>
<th>Required by</th>
</tr>
<tr>
<td>[button-card](https://github.com/custom-cards/button-card)</td>
<td>all cards</td>
</tr>
<tr>
<td>[lovelace-card-mod](https://github.com/thomasloven/lovelace-card-mod)</td>
<td>card_light_slider</td>
</tr>
<tr>
<td>[mini-graph-card](https://github.com/kalkih/mini-graph-card)</td>
<td>card_graph</td>
</tr>
<tr>
<td>[mini-media-player](https://github.com/kalkih/mini-media-player)</td>
<td>card_media_player</td>
</tr>
<tr>
<td>[my-cards (formerly known as ha-slider-card)](https://github.com/AnthonMS/my-cards)</td>
<td>card_light_slider</td>
</tr>
</tbody>
</table>

If you don’t want to use HACS to install these cards, please refer to the installation instructions of the specific card!

6.  **Changing your view file**  

We’re done with the file deletions, now comes the tricky part. We need to adapt the code in your view(s) to reflect the changes, that have been made to the “theme”. It doesn’t matter, if you choose the example views from the download or configured your own.

Now open your view file (eg. `ui-lovelace.yaml`) in an editor. Depending on the way you installed these, you should know where to find them. I can give one hint, if you worked according to the instructions from HA, it should be a file in your `config` folder (or a sub-folder), that has a hyphen in the filename (eg. `ui-lovelace.yaml`), as this is a requirement from HA.

Now some prerequisites to do before you start editing. Open [this page](/development/legacy_templates) to find a complete list of all previously used template names and their substitutions in the new naming scheme. Leave this open, you’ll need it.

Find this line

```yaml
        button_card_templates: !include lovelace/button_card_templates/button_card_templates.yaml
```

and change it to this

```yaml
        button_card_templates: !include_dir_merge_named minimalist-templates/
```

Remember to save the file from time to time!

Open the search of the editor and search for the string “template:”. You should find quite a few of them. Now work your way through every “template:” entry you have in that file.

Let’s see an example, this (or similar) is, what it should look like in your (unchanged) file:

```yaml
        cards:
          - type: horizontal-stack
            cards:
              - type: custom:button-card
                template: chip_return
```

Now take a look in the list for your “old” name. You’ll find this:

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Old name</th>

<th>New name</th>

<th>Variables / entries</th>

<th>Note</th>

</tr>

<tr>

<td>chip_return</td>

<td>chip_back</td>

<td>ulm_chip_back_path</td>

<td></td>

</tr>

</tbody>

</table>

</div>

This means, that we forward the old name (`chip_return`) to the new name (`chip_back`).

Now change the old name to the new name, like so:

```yaml
        cards:
          - type: horizontal-stack
            cards:
              - type: custom:button-card
                template: chip_back
```

Wait, we’re not done yet! Look at the list entry again, and see, if there are variables or entries to set with the new naming. If so, set them under the template entry. This should give you something like this:

```yaml
        cards:
          - type: horizontal-stack
            cards:
              - type: custom:button-card
                template: chip_back
                variables:
                  ulm_chip_back_path: /ui-lovelace-minimalist/home
```

And now we’re done! Save the file and reload it via the three-dot-menu in Lovelace. You should now see - no differences! Than everything worked fine and you’re from now on good to go with updates, custom-cards, patches and so on.

Congratulations, you have done it, and we know from own experience, this isn’t an easy task!