---
title: Ui-mode
parent: Installation
nav_order: 3
---
# [](#installation-for-ui-mode)Installation for UI-mode

This “theme” needs a little work and configuration before you can first use it, but don’t worry, we have made it as easy as possible. This “tutorial” shows you, how to set this “theme” up in `UI`-mode until the first use.

> **Note:** _This “theme” is developed and configured to use `yaml`-mode. We are trying our best, to support `UI`-mode as well, but it will always be the “second choice”, as there are much more possibilities with yaml. Nevertheless we are trying to support `UI`-mode as best as we can but there may be unforseen results._

Let’s get started!

1.  **What you should have before you start installing this “theme”**

*   You should have a HomeAssistant (HA) instance running, preferrably with [HACS](https://hacs.xyz) installed and you should know the basics in using HA, eg. how to change settings in your `lovelace` configuration.
*   You have access to your `config` folder of HA. Doesn’t matter which way this is, but you need to be able to upload and change files in your config. If you’re running `HA-OS` or a `supervised install` of HA, we highly recommend the [Samba AddOn](https://www.home-assistant.io/common-tasks/supervised/#installing-and-using-the-samba-add-on) (see the AddOn page for instructions) and for editing the [File editor AddOn](https://github.com/home-assistant/addons/tree/master/configurator) or a good editor like [Notepad++](https://notepad-plus-plus.org/) or [SublimeText](https://www.sublimetext.com/) for your OS.

2.  **Prepare your HomeAssistant installation**  

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

3.  **Installing the lovelace-cards**  

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

4.  **Getting the template code** 

Now comes one tricky part, where you have to decide which way to go.

> **Note:** _Let me remind you, `yaml`-mode will be the easier way in the long run. Even if you don’t have any yaml knowledge, it will be better to maintain._

<u>» The problem «</u>  
Home Assistant doesn’t let you include complete folders or even files in `UI`-mode. That means for you, you can’t work with the folder and file structure, we have provided in our download.

<u>» Solution #1 «</u>  
You can manually go through the files and copy the content that you need to paste in your raw-config-editor.

<details><summary>Where do I have to look and what do I need to copy</summary>

*   Download the files from our repository to your computer and unpack it
*   Open a new, blank file in your editor. In the first line write "views:" and press enter. We need to be in the next line!
*   On the new line write "button_card_templates:" and press Enter. Again, we now need to be on a new line!
*   If you want to use english as your language, go to the folder `config` > `minimalist-templates` and open the file `EN.yaml` in your editor. Copy the content and paste it in the "blank" file underneath the code from before. This code needs to be indented by two spaces. Yes, the complete code, every line needs to be moved by two spaces.
*   If you want to use a language other than english, go to the folder `languages` in your download and look for the language you want to use, eg. `DE.yaml`. Open the file and copy the content. Paste it in the "blank" file. This code needs to be indented by two spaces. Yes, again the complete code, every line needs to be moved by two spaces.
*   Go to the folder `config` > `minimalist-templates` and open `button_card_templates.yaml` in your editor. Copy the whole content and paste it underneath the code from the step before in your "blank" file. This code needs to be indented by two spaces as well. Yes, here as well, the complete code, every line needs to be moved by two spaces.
*   _Optional_ If you want to use `custom-cards`, than you have to do this the same way as above.
    *   Go to the `custom-card` folder and copy the content of the language file (if available) and from the custom-card-file (eg. `custom_card_paddy_welcome.yaml`) to paste it underneath the code from above into the "blank" file.
*   Leave the "blank" file open, we need the complete code later on

> **Important:** *You need to take special care about the indentation! Indent the code you paste to the needed level!*</details>

<u>» Solution #2 «</u>  
We have designed a small generator that should get you started with the code you need. Be advised, this generator is still in beta stage, so some issues could still arise…  
Go to [this page](/codegen/installation) and follow the instructions on that page. Leave the page open, we need this code later on

5.  **Setting up a new dashboard and one or more views**

*   To setup a new dashboard go to `Config` > `Lovelace Dashboards` and click the plus sign in the downwards right corner. Fill in a title (eg. “Minimalist”), optionally an icon and the url/path to the dashboard. The url needs to contain a hyphen, so let’s call it “lovelace-minimalist”. Select if the new dashboard should only be shown for Admins and if you want to show it in the sidebar.
*   Go to this newly added dashboard and click the three-dot-menu in the upper right corner. Click “Edit dashboard”.
*   In edit mode click the three-dot-menu again, now choose “RAW configuration editor”.
*   Now is the time, where we need the code from the last step. Whatever way you got the code (manually or with the generator), copy the complete code
*   In your raw-config-editor you should now see some yaml code. Look for the string “views:”. Select this string (take note of the colon at the end!) and delete it.
*   Now paste the code you copied. If you used the generator, the string “views:” is included. In the end you are replacing the string “views:” with the complete code, that already includes the string “views:”.

> **Important:** _Keep the indentation in place. The generator takes care of it, but you need to be careful not to accidentally change it while copying!_

6.  **Save and close**  

Now that you have setup your minimalist “theme”, save the changes, close the raw-config-editor and the edit mode for your Lovelace configuration.

7.  **Apply the theme**

*   Go to your user settings (sidebar, last item)
*   Under “theme” select `minimalist-desktop` or `minimalist-mobile`, depending on the device you’re using

8.  **Take a first look**

*   Go back to “Minimalist” in your sidebar and click on it.
*   If everything went fine, you should now see your first page with the “UI-Lovelace-Minimalist” style applied.

9.  **Start editing** 

Now that you have a first look at your new design, you can start using it by adding other buttons.

This tutorial ends here, if you want to see how to _use_ this “theme”, check out [this page](/usage/first_page).
