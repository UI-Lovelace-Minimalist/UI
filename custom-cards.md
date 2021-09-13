## Developing `custom-cards`
If you have configured something great for this theme, like a new card, you might want to share it with the community. To ease this process, here are some instructions on how to do that.

* Create a new folder following the [naming convention](#naming-conventions) of this theme, preferably by using the username and describing your card, eg. *custom_card_paddy_temperature*.
* Create a new file `README.md` where you describe your card, note of specific requirements (like `custom_components` from HA or other `custom-cards`) and your name as the author. Find a template for that a little downwards.    
* Create a new file in this folder, naming it the same like your folder, eg. *custom_card_paddy_temperature.yaml*.
* <b>IMPORTANT!</b>  
  Name the folder and file to your liking (preferably describing your chip/card), <b>but you must add the prefix <i>custom_</i></b> to both, the folder and the file name. Otherwise the file will not be correctly included!  
  Example: *custom_card_paddy_temperature/custom_card_paddy_temperature.yaml*
* Now open the newly created file and start working on your definitions. Please see [order](#order) for the prefered structure of your definition.
* You can use and inherit all `template definitions`, that are available through the main *button_card_templates.yaml* of this theme. See the [readme](README.md#1-line-cards) for all definitions, including [internal templates](README.md#internal-templates).  
* If you need to use language specific strings, please see [here](#language-specific-strings).
* Please don't inherit from other `custom-cards`, as the user might not have installed that card! If you really need to inherit from other `custom-cards`, you should clearly state this in your readme file!
* To test your new code, copy the folder and his contents to the folder `minimalist-templates` in your `config` folder in HA.
* Go to your lovelace view and click the three-dots button in the top right corner. *Reload resources* and afterwards *refresh* the page and you should now see your code working (hopefully).
* You can now post your code in the support thread at the HA forum or you open an issue in the repository to upload a MergeRequest with your code. In both cases we will integrate your definition with one of the next updates.  

### Naming conventions
To make it easier for the user, we would prefer, if you would use the following naming conventions to name your folders and files.  
* Prefix (**custom_**)
* Type (like *chip* or *card*)  
* Developer name (like *paddy0174*)
* Name describing your chip/card (temperature)

This should look like this:  
`custom_card_paddy0174_temperature/custom_card_paddy0174_temperature.yaml`  

In the end, your `custom-card` should have at least these structure:

```
config/minimalist-templates
└── custom_card_paddy_temperature
   └── custom_card_paddy_temperature.yaml
   └── readme.md
   └── DE.yaml (optional)
   └── EN.yaml (if used, at least EN needs to be provided)
```

> This is **optional** and you can use whatever naming you want, but keep in mind, the use of **custom_** as a prefix **is required**!  

### Order
To make reading the definitions easier, we use the following structure in our defintions in *button_card_templates.yaml*:   

```yaml
name:
  template:
  variables:
  tap_action/hold action/...:
  triggers_update:
  show_icon:
  show_label:
  show_name:
  show_state:
  icon:
  label:
  name:
  state:
  styles:
    icon:
    label:
    name:
    state:
    img_cell:
    grid:
    card:
  custom_fields:
    item1:
      card:
        type:
        template:
```

Feel free to delete defintions, that you don't use or need.

> Here as well, this is **optional**! It is just easier to use a structure, that can be easily compared to other definitions. *But please do to your own liking and needs!*  

### Language specific strings  
This "theme" supports language specific strings, as the translated strings (states) from HA are sometimes not available. 

These `variables` are already provided by the "theme":  

* ulm_on
* ulm_off
* ulm_open
* ulm_closed
* ulm_unavailable
* ulm_standby
* ulm_idle
* ulm_currency

The usage is easy:  
Include the language variables by including the `template` *ulm_language_variables* in your card and then use them just like every other variable.  

```
template:
  - ulm_language_variables
state:
  [[[
    if (state == 'off') {
      return variables.ulm_off;
    } else {
      return variables.ulm_on;
    }
  ]]]
```

If you need your own language strings, please use the established structure by adding at least an `EN.yaml` file to your `custom-card` folder.  

### Notes
We are currently planning to support the automatic upload of custom cards through a repository (as a merge request). If you're interested, please send us a short note. Until this function is implemented, please share it via the above mentioned ways. Thank you!
