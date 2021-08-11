import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";
class SliderCard extends LitElement {

static get properties() {
  return {
    hass: {},
    config: {},
    active: {}
  };
}

constructor() {
  super();
  // console.log("SLIDER-CARD V36 INSTALLED--------------------------------------------------------------");
}

render() {
  // Size Variables
  var minBar = this.config.minBar ? this.config.minBar : 0;
  var maxBar = this.config.maxBar ? this.config.maxBar : 100;
  var minSet = this.config.minSet ? this.config.minSet : 0;
  var maxSet = this.config.maxSet ? this.config.maxSet : 100;
  var width = this.config.width ? this.config.width : "100%";
  var height = this.config.height ? this.config.height : "50px";
  var radius = this.config.radius ? this.config.radius : "4px";
  var top = this.config.top ? this.config.top : "0px";
  var bottom = this.config.bottom ? this.config.bottom : "0px";
  var right = this.config.right ? this.config.right : "0px";
  var left = this.config.left ? this.config.left : "0px";
  var rotate = this.config.rotate ? this.config.rotate : "0";
  var containerHeight = this.config.containerHeight ? this.config.containerHeight : height;
  if (rotate != "0") {
    rotate = rotate + "deg";
  }
  // Slider Background Color Variables
  var mainSliderColor = this.config.mainSliderColor ? this.config.mainSliderColor : "var(--accent-color)";
  var secondarySliderColor = this.config.secondarySliderColor ? this.config.secondarySliderColor : "#4d4d4d";
  var mainSliderColorOff = this.config.mainSliderColorOff ? this.config.mainSliderColorOff : "#636363";
  var secondarySliderColorOff = this.config.secondarySliderColorOff ? this.config.secondarySliderColorOff : "#4d4d4d";
  var border = this.config.border ? this.config.border : "0";
  // Slider Thumb Variables
  var thumbWidth = this.config.thumbWidth ? this.config.thumbWidth : "25px";
  var thumbHeight = this.config.thumbHeight ? this.config.thumbHeight : "80px";
  var thumbColor = this.config.thumbColor ? this.config.thumbColor : "#FFFFFF";
  var thumbColorOff = this.config.thumbColorOff ? this.config.thumbColorOff : "#969696";
  var thumbHorizontalPadding = this.config.thumbHorizontalPadding ? this.config.thumbHorizontalPadding : "10px";
  var thumbVerticalPadding = this.config.thumbVerticalPadding ? this.config.thumbVerticalPadding : "20px";
  var thumbTop = this.config.thumpTop ? this.config.thumpTop : "calc((var(--slider-width) - var(--thumb-height)) / 2)";
  var thumbBorderRight = this.config.thumbBorderRight ? this.config.thumbBorderRight : "var(--thumb-horizontal-padding) solid var(--slider-main-color)";
  var thumbBorderLeft = this.config.thumbBorderLeft ? this.config.thumbBorderLeft : "var(--thumb-horizontal-padding) solid var(--slider-main-color)";
  var thumbBorderTop = this.config.thumbBorderTop ? this.config.thumbBorderTop : "var(--thumb-vertical-padding) solid var(--slider-main-color)";
  var thumbBorderBotton = this.config.thumbBorderBotton ? this.config.thumbBorderBotton : "var(--thumb-vertical-padding) solid var(--slider-main-color)";
  // top: calc((var(--slider-width) - var(--thumb-height)) / 2);
  // border-right: var(--thumb-horizontal-padding) solid var(--slider-main-color);
  // border-left: var(--thumb-horizontal-padding) solid var(--slider-main-color);
  // border-top: var(--thumb-vertical-padding) solid var(--slider-main-color);
  // border-bottom: var(--thumb-vertical-padding) solid var(--slider-main-color);


  var entity = this.config.entity;
  var entityClass = this.hass.states[entity]

  var isLight = false;
  var isInputNumber = false;
  var isMediaPlayer= false;
  var isCover = false;
  var isFan = false;
  var isSwitch = false;
  var isLock = false;

  // Check if entity is light or input_number
  if (this.config.entity.includes("light.")) {
    isLight = true;
    var step = this.config.step ? this.config.step: "1";
  }
  else if (this.config.entity.includes("input_number.")) {
    isInputNumber = true;
    var step = this.config.step ? this.config.step: entityClass.attributes.step;
  }
  else if (this.config.entity.includes("media_player.")) {
    isMediaPlayer = true;
    var step = this.config.step ? this.config.step: "1";
  }
  else if (this.config.entity.includes("cover.")) {
    isCover = true;
    var step = this.config.step ? this.config.step: "1";
  }
  else if (this.config.entity.includes("fan.")) {
    isFan = true;
    var step = this.config.step ? this.config.step: "1";
  }
  else if (this.config.entity.includes("switch.")) {
    isSwitch = true;
    var step = this.config.step ? this.config.step: "1";
  }
  else if (this.config.entity.includes("lock.")) {
    isLock = true;
    var step = this.config.step ? this.config.step: "1";
  }
  
  var styleStr = `
    --slider-width: ${width};
    --slider-width-inverse: -${width};
    --slider-height: ${height};
    --slider-main-color: ${(entityClass.state === "off" || entityClass.state === "locked" || entityClass.state == undefined) ? "var(--slider-main-color-off)" : "var(--slider-main-color-on)"};
    --slider-main-color-on: ${mainSliderColor};
    --slider-main-color-off: ${mainSliderColorOff};
    --slider-secondary-color: ${(entityClass.state === "off" || entityClass.state === "locked" || entityClass.state == undefined) ? "var(--slider-secondary-color-off)" : "var(--slider-secondary-color-on)"};
    --slider-secondary-color-on: ${secondarySliderColor};
    --slider-secondary-color-off: ${secondarySliderColorOff};
    --slider-radius: ${radius};
    --border: ${border};
    
    --thumb-width: ${thumbWidth};
    --thumb-height: ${thumbHeight};
    --thumb-color: ${(entityClass.state === "off" || entityClass.state == undefined) ? "var(--thumb-color-off)" : "var(--thumb-color-on)"};
    --thumb-color-on: ${thumbColor};
    --thumb-color-off: ${thumbColorOff};
    --thumb-horizontal-padding: ${thumbHorizontalPadding};
    --thumb-vertical-padding: ${thumbVerticalPadding};

    --rotate: ${rotate};
    --top: ${top};
    --bottom: ${bottom};
    --right: ${right};
    --left: ${left};
    --container-height: ${containerHeight};
    --thumb-top: ${thumbTop};
    --thumb-border-right: ${thumbBorderRight};
    --thumb-border-left: ${thumbBorderLeft};
    --thumb-border-top: ${thumbBorderTop};
    --thumb-border-bottom: ${thumbBorderBotton};
  `;
    if (isLight) {
    if (this.config.function == "Warmth") {
      return html`
          <ha-card>
            <div class="slider-container" style="${styleStr}">
              <input name="foo" type="range" class="${entityClass.state}" style="${styleStr}" .value="${entityClass.state === "off" ? 0 : entityClass.attributes.color_temp}" min="${entityClass.attributes.min_mireds}" max="${entityClass.attributes.max_mireds}" step="${step}" @change=${e => this._setWarmth(entityClass, e.target, minSet, maxSet)}>
            </div>
          </ha-card>
      `;
    }
    else {
      return html`
          <ha-card>
            <div class="slider-container" style="${styleStr}">
              <input name="foo" type="range" class="${entityClass.state}" style="${styleStr}" .value="${entityClass.state === "off" ? 0 : Math.round(entityClass.attributes.brightness/2.55)}" step="${step}" @change=${e => this._setBrightness(entityClass, e.target, minSet, maxSet)}>
            </div>
          </ha-card>
      `;
    }
  }
  
  if (isInputNumber) {
    return html`
        <ha-card>
          <div class="slider-container" style="${styleStr}">
            <input name="foo" type="range" class="${entityClass.state}" style="${styleStr}" .value="${entityClass.state}" min="${entityClass.attributes.min}" max="${entityClass.attributes.max}" step="${step}" @change=${e => this._setInputNumber(entityClass, e.target, minSet, maxSet)}>
          </div>
        </ha-card>
    `;
  }

  if (isMediaPlayer) {
    var num = 0;
    if (entityClass.attributes.volume_level != undefined) {
      var num = Number(entityClass.attributes.volume_level * 100)
    }

    return html`
        <ha-card>
          <div class="slider-container" style="${styleStr}">
            <input name="foo" type="range" class="${entityClass.state}" style="${styleStr}" .value="${num}" min="${minBar}" max="${maxBar}" step="${step}" @change=${e => this._setMediaVolume(entityClass, e.target, minSet, maxSet)}>
          </div>
        </ha-card>
    `;
  }

  if (isCover) {
    return html`
        <ha-card>
          <div class="slider-container" style="${styleStr}">
            <input name="foo" type="range" class="${entityClass.state}" style="${styleStr}" .value="${entityClass.attributes.current_position}" min="${minBar}" max="${maxBar}" step="${step}" @change=${e => this._setCover(entityClass, e.target, minSet, maxSet)}>
          </div>
        </ha-card>
    `;
  }

  if (isFan) {
    return html`
        <ha-card>
          <div class="slider-container" style="${styleStr}">
            <input name="foo" type="range" class="${entityClass.state}" style="${styleStr}" .value="${entityClass.attributes.percentage}" min="${minBar}" max="${maxBar}" step="${step}" @change=${e => this._setFan(entityClass, e.target, minSet, maxSet)}>
          </div>
        </ha-card>
    `;
  }

  if (isSwitch) {
    return html`
        <ha-card>
          <div class="slider-container" style="${styleStr}">
            <input name="foo" type="range" class="${entityClass.state}" style="${styleStr}" .value="${minBar}" min="${minBar}" max="${maxBar}" step="${step}" @change=${e => this._setSwitch(entityClass, e.target, minSet, maxSet, minBar, maxBar)}>
          </div>
        </ha-card>
    `;
  }

  if (isLock) {
    return html`
        <ha-card>
          <div class="slider-container" style="${styleStr}">
            <input name="foo" type="range" class="${entityClass.state}" style="${styleStr}" .value="${minBar}" min="${minBar}" max="${maxBar}" step="${step}" @change=${e => this._setLock(entityClass, e.target, minSet, maxSet, minBar, maxBar)}>
          </div>
        </ha-card>
    `;
  }
}


updated() {}


_setFan(entityClass, target, minSet, maxSet) {
  var value = target.value;
  if (value > maxSet) {
    var value = maxSet;
  } else if (value < minSet) {
    var value = minSet;
  }

  this.hass.callService("fan", "set_percentage", {
      entity_id: entityClass.entity_id,
      percentage: value
  });

  target.value = value;
}

_setCover(entityClass, target, minSet, maxSet) {
  var value = target.value;
  if (value > maxSet) {
    var value = maxSet;
  } else if (value < minSet) {
    var value = minSet;
  }
  // console.log("Setting Cover to: " + value);
  // console.log("From Position: " + entityClass.attributes.current_position);
  this.hass.callService("cover", "set_cover_position", {
      entity_id: entityClass.entity_id,
      position: value
  });
  
  target.value = value;
}

_setMediaVolume(entityClass, target, minSet, maxSet) {
  var value = target.value;
  if (value > maxSet) {
    var value = maxSet;
  } else if (value < minSet) {
    var value = minSet;
  }

  this.hass.callService("media_player", "volume_set", {
      entity_id: entityClass.entity_id,
      volume_level: value / 100
  });

  target.value = value;
}

_setInputNumber(entityClass, number, minSet, maxSet) {
  var value = target.value;
  if (value > maxSet) {
    var value = maxSet;
  } else if (value < minSet) {
    var value = minSet;
  }

  this.hass.callService("input_number", "set_value", {
      entity_id: entityClass.entity_id,
      value: value
  });

  target.value = value;
}

_setBrightness(entityClass, target, minSet, maxSet) {
  var value = target.value;
  if (value > maxSet) {
    var value = maxSet;
  } else if (value < minSet) {
    var value = minSet;
  }

  this.hass.callService("homeassistant", "turn_on", {
      entity_id: entityClass.entity_id,
      brightness: value * 2.55
  });

  // console.dir(this)
  target.value = value;

}

_setWarmth(entityClass, target, minSet, maxSet) {
  var value = target.value;
  if (value > maxSet) {
    var value = maxSet;
  } else if (value < minSet) {
    var value = minSet;
  }

  this.hass.callService("homeassistant", "turn_on", {
    entity_id: entityClass.entity_id,
    color_temp: value
  });

  target.value = value;
}

_setSwitch(entityClass, target, minSet, maxSet, minBar, maxBar) {
  var value = target.value;
  var threshold = Math.min(maxSet,maxBar) //pick lesser of the two
  if (Number(threshold) <= value) {
    this.hass.callService("homeassistant", "toggle", {
        entity_id: entityClass.entity_id
    });
  }

  target.value = Number(Math.max(minSet, minBar));
}

_setLock(entityClass, target, minSet, maxSet, minBar, maxBar) {
  var value = target.value;
  var threshold = Math.min(maxSet,maxBar) //pick lesser of the two
  if (Number(threshold) <= value) {
    var newLockState = entityClass.state === "locked" ? 'unlock' : 'lock'
    this.hass.callService("lock", newLockState, {
        entity_id: entityClass.entity_id
    });
  }

  target.value = Number(Math.max(minSet, minBar));
}

_switch(entityClass) {
    this.hass.callService("homeassistant", "toggle", {
      entity_id: entityClass.entity_id    
    });
}

_navigate(path) {
    window.location.href = path;
}

setConfig(config) {
  if (!config.entity) {
    throw new Error("You need to define entity");
  }

  if (!config.entity.includes("input_number.") && !config.entity.includes("light.") && !config.entity.includes("media_player.") && !config.entity.includes("cover.") && !config.entity.includes("fan.") && !config.entity.includes("switch.") && !config.entity.includes("lock.") ) {
    throw new Error("Entity has to be a light, input_number, media_player, cover or a fan.");
  }
  
  this.config = config;
}

getCardSize() {
  return 0;
}

          // -webkit-transform: rotate(270deg);
          // -moz-transform: rotate(270deg);
          // -o-transform: rotate(270deg);
          // -ms-transform: rotate(270deg);
          // transform: rotate(270deg);
static get styles() {
  return css`
      .slider-container {
          height: var(--container-height);
          position: relative;
          overflow: hidden;
          border-radius: var(--slider-radius);
      }

      .slider-container input[type="range"] {
          outline: 0;
          border: var(--border);
          width: var(--slider-width);
          height: var(--slider-height);
          border-radius: var(--slider-radius);
          background-color: var(--slider-secondary-color); /*Remaining Slider color*/
          margin: 0;
          transition: box-shadow 0.2s ease-in-out;
          overflow: hidden;
          -webkit-appearance: none;
          position: absolute;
          top: var(--top);
          bottom: var(--bottom);
          right: var(--right);
          left: var(--left);
          -webkit-transform: rotate(var(--rotate));
          -moz-transform: rotate(var(--rotate));
          -o-transform: rotate(var(--rotate));
          -ms-transform: rotate(var(--rotate));
          transform: rotate(var(--rotate));
      }

      .slider-container input[type="range"]::-webkit-slider-runnable-track {
          height: var(--slider-height);
          -webkit-appearance: none;
          color: var(--slider-main-color);
          transition: box-shadow 0.2s ease-in-out;
      }

      .slider-container input[type="range"]::-webkit-slider-thumb {
          width: var(--thumb-width);
          height: var(--thumb-height);
          -webkit-appearance: none;
          cursor: ew-resize;
          border-radius: 0;
          transition: box-shadow 0.2s ease-in-out;
          position: relative;

          box-shadow: -3500px 0 0 3500px var(--slider-main-color), inset 0 0 0 25px var(--thumb-color);

          top: var(--thumb-top);
          border-right: var(--thumb-border-right);
          border-left: var(--thumb-border-left);
          border-top: var(--thumb-border-top);
          border-bottom: var(--thumb-border-bottom);
      }

      .slider-container input[type=range]::-moz-range-thumb {
        width: calc(var(--thumb-width) / 4);
        height: calc(var(--thumb-height) / 2); 
        box-shadow: -3500px 10px 0 3500px var(--slider-main-color), inset 0 0 0 25px var(--thumb-color);
        top: var(--thumb-top);
        cursor: ew-resize;
        border-radius: 0;
        transition: box-shadow 0.2s ease-in-out;
        position: relative;
        border-radius: 0;
        border-right: var(--thumb-border-right);
        border-left: var(--thumb-border-left);
        border-top: var(--thumb-border-top);
        border-bottom: var(--thumb-border-bottom);
      }

      .slider-container input[type="range"]::-webkit-slider-thumb:hover {
          cursor: default;
      }

      .slider-container input[type="range"]:hover {
        cursor: default;
      }
  `;
}  

}

customElements.define('slider-card', SliderCard);
