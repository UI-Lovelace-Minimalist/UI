---
title: 	Installation
parent: CodeGenerator
nav_order: 2
---

# CodeGenerator for installation (UI-mode)

Here you can generate the code you need to **install** this "theme" via `UI`-mode.

It bundles all necessary template data, language variables and custom-cards into one single block, so you can copy & paste it into your raw-config-editor.

<details><summary>Show instructions</summary>

1.  Select the language you want to use
2.  Select the custom-cards you want to install
3.  Select example data, if you want to have some example code added
4.  Click "Generate template code"
5.  The code will be generated and shows up in the textarea underneath the generate button
6.  Copy this code and paste it in your raw-config-editor
7.  See [these instructions](/installation/ui-mode), if you don't know where to paste this.

</details>

Note: This generator is in beta state, so there may be issues! Thanks for understanding!

<form name="minimalist-generator-install-test" method="post" action="">

<fieldset><legend style="text-transform: uppercase;">Main template file</legend>

This is the main template file from UI-Lovelace-Minimalist. _This must be selected._

<input type="checkbox" name="main_template" id="main_template" value="main_template" checked="checked" disabled=""> <label for="main_template">UI-Lovelace-Minimalist main template file</label>  
</fieldset>

<fieldset><legend style="text-transform: uppercase;">Language</legend>

Select the language you want to use in your templates

<input type="radio" name="language" id="language_en" value="en" checked="checked"> <label for="language_en">English</label>  
<input type="radio" name="language" id="language_de" value="de"> <label for="language_de">German</label>  
<input type="radio" name="language" id="language_fr" value="fr"> <label for="language_fr">French</label>  

Note: If your selected custom-cards offer language variables, they will be used automatically.

</fieldset>

<fieldset><legend style="text-transform: uppercase;">Custom-cards</legend>

Select the custom-cards you want to include

<input type="checkbox" name="custom_card_paddy_dwd_pollen" id="custom_card_paddy_dwd_pollen" value="custom_card_paddy_dwd_pollen"> <label for="custom_card_paddy_dwd_pollen">DWD Pollen Card</label>  
<input type="checkbox" name="custom_card_paddy_waste_collection" id="custom_card_paddy_waste_collection" value="custom_card_paddy_waste_collection"> <label for="custom_card_paddy_waste_collection">Waste Collection Card</label>  
<input type="checkbox" name="custom_card_paddy_welcome" id="custom_card_paddy_welcome" value="custom_card_paddy_welcome"> <label for="custom_card_paddy_welcome">Welcome Card</label>  
<input type="checkbox" name="custom_card_paddy_welcome_with_weather" id="custom_card_paddy_welcome_with_weather" value="custom_card_paddy_welcome_with_weather"> <label for="custom_card_paddy_welcome_with_weather">Welcome Card with Weather</label>  
<input type="checkbox" name="custom_card_paddy_welcome_with_news" id="custom_card_paddy_welcome_with_news" value="custom_card_paddy_welcome_with_news"> <label for="custom_card_paddy_welcome_with_news">Welcome Card With News</label>  
<input type="checkbox" name="custom_card_schumijo_flower" id="custom_card_schumijo_flower" value="custom_card_schumijo_flower"> <label for="custom_card_schumijo_flower">Flower Card</label>  
<input type="checkbox" name="custom_card_tpx01_aircondition" id="custom_card_tpx01_aircondition" value="custom_card_tpx01_aircondition"> <label for="custom_card_tpx01_aircondition">AirCondition Card</label>  
</fieldset>

<fieldset><legend style="text-transform: uppercase;">Example data</legend> <input type="checkbox" name="example" id="example" value="example"> <label for="example">Add some example data to the code</label></fieldset>

<fieldset><legend style="text-transform: uppercase;">Generate</legend> <input type="button" name="submit" value="Generate template code" onclick="generateInstallCode()"> <input type="reset" name="reset" value="Reset"></fieldset>

<fieldset><legend style="text-transform: uppercase;">Your template code</legend>

This is your generated code to paste into your config. See [these instructions](/installation/ui-mode) for more details.

<textarea id="generated_code" name="generated_code" rows="18" cols="60" style="width: 100%;"></textarea></fieldset>

</form>