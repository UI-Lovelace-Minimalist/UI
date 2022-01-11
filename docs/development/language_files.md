---
title: Language files
parent: Development
nav_order: 5
---
# [](#language-files)Language files

We provide small files in different languages for our main template files. These are used, if translated strings from Home Assistant aren’t available.

We try our best to offer translations, but here we rely on you as a user or developer. That’s why you can find a small template underneath, that fits our actual language settings. Just fill it out with your own translations and if you don’t mind, share it with us so we can integrate it in the main repository.

## [](#yaml-mode)Yaml-mode

*   Copy the content of the code window underneath and paste it in a new file in your editor on your computer or in the file editor in Home Assistant

```yaml
        ulm_language_variables:
          variables:
            ulm_on: "" # language string for 'on'
            ulm_off: "" # language string for 'off'
            ulm_open: "" # language string for 'open'
            ulm_closed: "" # language string for 'closed'
            ulm_unavailable: "" # language string for 'unavailable'
            ulm_standby: "" # language string for 'standby'
            ulm_idle: "" # language string for 'idle'
            ulm_currency: "" # language string for 'currency' (symbol like € or $)
```

*   Change the translation strings to your own language. Write the string between the “” (quotation marks)
*   Save the file in the folder `config` > `minimalist-templates` with the short code for your language and _.yaml_ as file extension, eg. `DE.yaml` for german or `FR.yaml` for french
*   **Important!** Delete all but the new language file in that directory! You can only have one language file at a time! See [here](/installation/yaml-mode#installation-of-non-english-languages) for more information.
*   Reload your ressources via the three-dot-menu in lovelace (top right corner) and refresh the page as well
*   Now is the perfect time to share your new language file with the community, and here is the link to the HA forum thread: [click me](https://community.home-assistant.io/t/lovelace-ui-minimalist/322687?u=paddy0174)

## [](#ui-mode)UI-mode

*   Copy the content of the code window underneath and paste it in a new file in your editor on your computer or in the file editor in Home Assistant

```yaml
          ulm_language_variables:
            variables:
              ulm_on: "" # language string for 'on'
              ulm_off: "" # language string for 'off'
              ulm_open: "" # language string for 'open'
              ulm_closed: "" # language string for 'closed'
              ulm_unavailable: "" # language string for 'unavailable'
              ulm_standby: "" # language string for 'standby'
              ulm_idle: "" # language string for 'idle'
              ulm_currency: "" # language string for 'currency' (symbol like € or $)
```

*   Change the translation strings to your own language. Write the string between the “” (quotation marks)
*   Copy the changed code from the editor
*   Open your lovelace view and click the three-dot-menu to “Edit Dashboard”
*   Click the three-dot-menu again and open the raw-config-editor
*   Search for the code you pasted in there while installing this “theme”
*   Paste the code you copied before at the end of the “installation code”. This should be the line **above** “views:”
*   **Important!** Take care of the indentation! We already indented this code by two spaces, which should fit into a default lovelace configuration
*   Save and close the raw-config-editor and the edit mode
*   Now is the perfect time to share your new language with the community (**Hint** _you still have the copied code in your clipboard_), and here is the link to the HA forum thread: [click me](https://community.home-assistant.io/t/lovelace-ui-minimalist/322687?u=paddy0174)