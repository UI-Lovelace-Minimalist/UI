# UI-Lovelace-Minimalist examples and tutorials
An example is worth more than a thousand words. Or something like that. 😊 So let's dive into it and start with some examples.  

## Table of contents
* [#1 Installation and first use](#example-1)  
* [#2 Update the theme](#example-2)  
* [#3 A home page example](#example-3)  
* [#4 Update from a previous version](#example-4)   

## <a name="example-1"></a>#1 - Installation and first use  
This "theme" needs a little work and configuration before you can first use it, but don't worry, we have made it as easy as possible. This "tutorial" shows you, how to set this "theme" up until the first use. So let's get started!  

1. **What you need to know before you start**  
   The most part of this "theme" is a lot of templates for `button-card` and a few styling rules. That's why the use of this "theme" is theoretically possible via `UI mode`, but strongly not recommended!  
   The problem is, that HA does not allow to include files in `UI mode`. As unfortunate as this is, HA offers the possibilty to have individual dashboards configured in `YAML mode`, others can stay in `UI mode`. We therefor suggest to follow the instructions below to setup an individual dashboard in `YAML mode` for the use of this theme.  
   If you still want to use this "theme" in `UI mode`, we have added a paragraph on how to do that at the ende of this example.   
1. **What you should have before you start installing this "theme"**  
   * You should have a HomeAssistant (HA) instance running, preferrably with [HACS](https://hacs.xyz) installed and you should know the basics in using HA, eg. how to change settings in your `lovelace` configuration.  
   * You have access to your `config` folder of HA. Doesn't matter which way this is, but you need to be able to upload and change files in your config. If you're running `HA-OS` or a `supervised install` of HA, we highly recommend the [Samba AddOn](https://www.home-assistant.io/common-tasks/supervised/#installing-and-using-the-samba-add-on) (see the AddOn page for instructions).  
1. **Prepare your HomeAssistant installation**  
   To install this "theme" together with other themes in HA, you need to setup your `configuration.yaml` to use a themes folder.  
   1. Create a folder `themes` in your `config` folder  
   1. Add this under the section `frontend` in your `config.yaml`:    
      ```
      frontend:
        themes: !include_dir_merge_named themes
      ```
   1. Restart Home Assistant  
   1. Enable the theme in your user profile (bottom left in HomeAssistant)  
   1. From now on, you can install new themes, like this one, in your themes folder  

   > #### Note  
   > This is the official, recommended way to handle themes. With this structure you can install themes with HACS.  
1. **Download the files**  
   Go to our repository on Github and download the code by pressing the green "Code" button in the top right corner and choose "Download ZIP". Save the file on your computer and unpack it.  
1. **Upload to your HomeAssistant installation**  
   * In the downloaded and unpacked file you find a folder `config`
   * Move inside this folder and upload the two folders `minimalist-templates` and `themes` directly into your HA `config` folder  
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
   * If you want to use english as your language, go to the next step, if not, read on  
     * Back in the main folder of your downloaded and unpacked file you find a folder `languages`.  
     * Move into it and copy the file of the desired language, eg. `DE.yaml` or `FR.yaml`, into the folder `minimalist-templates` inside your HA `config` folder.  
     * ***IMPORTANT!*** Delete the file `EN.yaml` inside `minimalist-templates` or you will get weird language strings!  
1. **Installing the lovelace-custom-cards**  
   Some of our cards need lovelace-custom-cards to work correctly. To install these, we highly recommend to use HACS, as it is the easiest and safest way to install and maintain (update) these cards. Here is a list of the required cards:  

   <table>
   <tr>
   <th>Card</th>
   <th>Required</th>
   <th>Required by</th>
   </tr>
   <tr>
   <td><a href="https://github.com/custom-cards/button-card">button-card</a></td>
   <td>yes</td>
   <td>all cards</td>
   </tr>
   <tr>
   <td><a href="https://github.com/thomasloven/lovelace-card-mod">lovelace-card-mod</a></td>
   <td>no</td>
   <td>card_light_slider</td>
   </tr>
   <tr>
   <td><a href="https://github.com/kalkih/mini-graph-card">mini-graph-card</a></td>
   <td>no</td>
   <td>card_graph</td>
   </tr>
   <tr>
   <td><a href="https://github.com/kalkih/mini-media-player">mini-media-player</a></td>
   <td>no</td>
   <td>card_media_player</td>
   </tr>
   <tr>
   <td><a href="https://github.com/AnthonMS/my-cards">my-cards (formerly known as ha-slider-card)</a></td>
   <td>no</td>
   <td>card_light_slider</td>
   </tr>
   </table>  

   If you don't want to use HACS to install these cards, please refer to the installation instructions of the specific card!

1. **Setting up a new dashboard and one or more views**  
   We have now installed the "theme", so let's get ready to use it!  
   > If you know how to setup your own views in `yaml_mode` or you have your own system for this, just skip this step and move on to the next.  
   
   > What we are doing here, is setting up a new [dashboard](https://www.home-assistant.io/lovelace/dashboards/) with one or more [views](https://www.home-assistant.io/lovelace/views/). If you don't know what this is, please refer to the HomeAssistant documentation to read a little more about it. Basically it is a new entry in your sidebar and one or more tabs under this entry.  

   * Open your `configuration.yaml` and search for the string "lovelace:".  
     If you can find it, compare your entries under it (all the entries that are indented) with the code underneath. If you can't find it, add the code underneath to your `configuration.yaml` and change it to your needs.
     ```yaml
     lovelace:
       mode: storage
       # Add yaml dashboards
       dashboards:
         lovelace-minimalist:
           mode: yaml
           title: Minimalist
           icon: mdi:script
           show_in_sidebar: true
           filename: lovelace-minimalist.yaml
     ```  
     *mode* : `storage` or `yaml` : Set the mode to `storage`, than all your UI-configured dashboards will stay configurable that way, only the dashboards you list underneath will use `YAML mode`.  
     *dashboards* : This is the starting point for all your new dashboards, that will be using `YAML mode`.  
     --*lovelace-minimalist* : This is the name and part of the url (path) for your new dashboard. You can choose any name you want, but it **must** contain a hyphen!  
     ----*mode* : Same as the mode above, but here you **must** use `yaml`.  
     ----*title* : This is the title of your dashboard (the title shown in the sidebar)  
     ----*icon* : Choose an icon for the sidebar  
     ----*show_in_sidebar* : If this dashboard should show up in your sidebar. It will still be available through the path you set above.  
     ----*filename* : This is the filename for your `view`(s). I normally use the same name for the file and the dashboard name.  
   * Now that we have setup our new dashboard, we fill it with views.  
     * Create a file called `lovelace-minimalist.yaml` (or if you have choosen another name under "filename", use that one) in your HA `config` folder, the one that `configuration.yaml`resides in.
     * Open the file and add the following to it:  

       ```yaml 
       views:
         - title: Minimalist
           button_card_templates: !include_dir_merge_named minimalist-templates/
           cards:
             - type: horizontal-stack
               cards:
                 - type: custom:button-card
                   template: edge
                 - type: custom:button-card
                   template: title
                   name: Welcome to UI-Lovelace-Minimalist
                 - type: custom:button-card
                   template: edge
         - title: Minimalist page 2
           button_card_templates: !include_dir_merge_named minimalist-templates/
           cards:
             - type: horizontal-stack
               cards:
                 - type: custom:button-card
                   template: edge
                 - type: custom:button-card
                   template: title
                   name: UI-Lovelace-Minimalist second page
                 - type: custom:button-card
                   template: edge
       ```
     * Safe the file  
1. **Apply the theme**  
   * Open HA in your browser (just like usual) and go to your user settings (sidebar, last item)  
   * Under "theme" select `minimalist-desktop`   
1. **Take a first look**
   * Go to your HA homepage and click on the three-dot-menu in the upper right corner.
   * Choose "Reload ressources" and afterwards "Refresh" to reload the page. 
   * Look for the entry "Minimalist" and click on it.
   * If everything went fine, you should now see your first page with the "UI-Lovelace-Minimalist" style applied.
1. **Start editing**  
   Now that you have a first look at your new design, you can start using it by adding other buttons.  
   This tutorial ends here, if you need more inforation about how to use this "theme", check out the following examples.
1. **Additional information**: *Use this "theme" in `UI mode` (really not recommended!)*  
   If you still want to use this theme in `UI mode`, here are some things to know. Keep in mind, that you loose the ability to simply update this "theme" with a newer versions download and the use of `custom-card`s is more complicated.  

## <a name="example-2"></a>#2 - Update the "theme"  
Updating this theme is a straightforwarded process and we tried to make it as easy as possible. You already know the steps from installing the "theme":  

1. Download this repository as a *zip file* to your computer. You can do so by clicking the green button in the top right with the lable "CODE" and choosing "Download ZIP".
1. Unpack the zip-file to a location of your choice on your computer.
1. Copy the content (files **and** folders) of the folder `config` from this repository into your HomeAssistant `config` folder, overwriting the files with the downloaded (new) version.
1. If you're using *language specific settings*, remember to also copy the language file!
1. If you use `custom-cards` and followed the instructions to install them, everything is fine, they will not be overwritten or otherwise changed.  

To check, which version you have installed, you can always find the version number(s) in the seperate file [changelog](CHANGELOG.md).  

## <a name="example-3"></a>#3 - A typical home page
Sorry, this part is not finished yet! We are working on it, please stay tuned.  

## <a name="example-4"></a>#4 - Update from a previous version (prior 1.0.0-x)  
Sorry, this part is not finished yet! We are working on it, please stay tuned.  