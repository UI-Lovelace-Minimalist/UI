!function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);const s=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),r=s.prototype.html,o=s.prototype.css;function a(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}function n(t,e,i=null){if((t=new Event(t,{bubbles:!0,cancelable:!1,composed:!0})).detail=e||{},i)i.dispatchEvent(t);else{var s=function(){var t=document.querySelector("hc-main");return t=t?(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("hc-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-view")||t.querySelector("hui-panel-view"):(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=document.querySelector("home-assistant"))&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root"))&&t.shadowRoot)&&t.querySelector("ha-app-layout #view"))&&t.firstElementChild}();s&&s.dispatchEvent(t)}}let l=window.cardHelpers;const c=new Promise(async(t,e)=>{l&&t();const i=async()=>{l=await window.loadCardHelpers(),window.cardHelpers=l,t()};window.loadCardHelpers?i():window.addEventListener("load",async()=>{!function(){if(customElements.get("hui-view"))return!0;const t=document.createElement("partial-panel-resolver");if(t.hass=a(),!t.hass||!t.hass.panels)return!1;t.route={path:"/lovelace/"},t._updateRoutes();try{document.querySelector("home-assistant").appendChild(t)}catch(t){}finally{document.querySelector("home-assistant").removeChild(t)}customElements.get("hui-view")}(),window.loadCardHelpers&&i()})});function d(t,e){const i={type:"error",error:t,origConfig:e},s=document.createElement("hui-error-card");return customElements.whenDefined("hui-error-card").then(()=>{const t=document.createElement("hui-error-card");t.setConfig(i),s.parentElement&&s.parentElement.replaceChild(t,s)}),c.then(()=>{n("ll-rebuild",{},s)}),s}function u(t,e){if(!e||"object"!=typeof e||!e.type)return d(`No ${t} type configured`,e);let i=e.type;if(i=i.startsWith("custom:")?i.substr("custom:".length):`hui-${i}-${t}`,customElements.get(i))return function(t,e){let i=document.createElement(t);try{i.setConfig(JSON.parse(JSON.stringify(e)))}catch(t){i=d(t,e)}return c.then(()=>{n("ll-rebuild",{},i)}),i}(i,e);const s=d(`Custom element doesn't exist: ${i}.`,e);s.style.display="None";const r=setTimeout(()=>{s.style.display=""},2e3);return customElements.whenDefined(i).then(()=>{clearTimeout(r),n("ll-rebuild",{},s)}),s}function h(t){return l?l.createCardElement(t):u("card",t)}let p=function(){if(window.fully&&"function"==typeof fully.getDeviceId)return fully.getDeviceId();if(!localStorage["lovelace-player-device-id"]){const t=()=>Math.floor(1e5*(1+Math.random())).toString(16).substring(1);localStorage["lovelace-player-device-id"]=`${t()}${t()}-${t()}${t()}`}return localStorage["lovelace-player-device-id"]}();customElements.define("state-switch",class extends s{static get properties(){return{hass:{},state:{}}}setConfig(t){this._config=t,this.state=void 0,this.classList.add("no-match"),this.cards={};for(let e in t.states)this.cards[e]=h(t.states[e]),this.cards[e].hass=a();if("hash"===t.entity&&window.addEventListener("location-changed",()=>this.updated(new Map)),"mediaquery"===t.entity)for(const t in this.cards)window.matchMedia(t).addListener(this.update_state.bind(this));if("template"===t.entity){const e=t.template;String(e).includes("{%")||String(e).includes("{{")?function(t,e,i){t||(t=a().connection);let s={user:a().user.name,browser:p,hash:location.hash.substr(1)||" ",...i.variables},r=i.template,o=i.entity_ids;t.subscribeMessage(t=>{let i=t.result;i=i.replace(/_\([^)]*\)/g,t=>a().localize(t.substring(2,t.length-1))||t),e(i)},{type:"render_template",template:r,variables:s,entity_ids:o})}(null,t=>{this._tmpl=t,this.update_state()},{template:e,variables:{config:t},entity_ids:t.entity_ids}):this._tmpl=e}}update_state(){let t=void 0;switch(this._config.entity){case"template":t=this._tmpl;break;case"user":t=this.hass&&this.hass.user&&this.hass.user.name||void 0;break;case"group":t=this.hass&&this.hass.user&&this.hass.user.is_admin?"admin":"user";break;case"deviceID":case"browser":t=p;break;case"hash":t=location.hash.substr(1);break;case"mediaquery":for(const e in this.cards)if(window.matchMedia(e).matches){t=e;break}break;default:t=this.hass.states[this._config.entity],t=t?t.state:void 0}void 0!==t&&this.cards.hasOwnProperty(t)||(t=this._config.default),this.state=t}updated(t){if(t.has("hass"))for(let t in this.cards)this.cards[t].hass=this.hass;if(t.has("state")){const e=t.get("state");this.cards[e]&&(this.cards[e].classList.remove("visible"),this.cards[e].classList.add("out"),window.setTimeout(()=>{this.cards[e].classList.remove("out")},this._config.transition_time||500)),this.cards[this.state]?(this.cards[this.state].classList.add("visible"),this.classList.remove("no-match")):this.classList.add("no-match")}else this.update_state()}render(){return r`
    <div
      id="root"
      class="${this._config.transition}"
      style="
        transition-duration: ${this._config.transition_time||500}ms;
        transition-delay: ${this._config.transition_time||500}ms;
        "
    >
      ${Object.keys(this.cards).map(t=>r`
          ${this.cards[t]}
        `)}
    </div>
    `}getCardSize(){let t=1;for(let e in this.cards)this.cards[e]&&this.cards[e].getCardSize&&(t=Math.max(t,this.cards[e].getCardSize()));return t}static get styles(){return o`
      :host {
        perspective: 1000px;
      }
      :host(.no-match) {
        display: none;
      }
      #root * {
        display: none;
      }
      #root .visible {
        display: block;
      }


      #root.slide-right,
      #root.slide-left {
        display: grid;
      }
      #root.slide-right *,
      #root.slide-left * {
        grid-column: 1;
        grid-row: 1;
        display: block;
        opacity: 0;
        height: 0;
        transition-property: transform;
        transition-timing-function: linear;
        transition-duration: inherit;
        transform: translate(-110%);
      }
      #root.slide-left * {
        transform: translate(110%);
      }
      #root.slide-right .visible,
      #root.slide-left .visible {
        opacity: 1;
        height: auto;
        transform: translate(0%);
      }
      #root.slide-right .out,
      #root.slide-left .out {
        opacity: 1;
        height: auto;
        transform: translate(110%);
      }
      #root.slide-left .out {
        transform: translate(-110%);
      }


      #root.swap-right,
      #root.swap-left {
        display: grid;
      }
      #root.swap-right *,
      #root.swap-left * {
        grid-column: 1;
        grid-row: 1;
        display: block;
        opacity: 0;
        height: 0;
        transition-property: transform;
        transition-timing-function: linear;
        transition-duration: inherit;
        transform: translate(110%);
      }
      #root.swap-left *{
        transform: translate(-110%);
      }
      #root.swap-right .visible,
      #root.swap-left .visible {
        opacity: 1;
        height: auto;
        transition-delay: inherit;
        transform: translate(0%);
      }
      #root.swap-right .out,
      #root.swap-left .out {
        opacity: 1;
        height: auto;
      }



      #root.flip {
        display: grid;
        width: 100%;
        height: 100%;
        position: relative;
      }
      #root.flip * {
        grid-column: 1;
        grid-row: 1;
        display: block;
        opacity: 0;
        height: 0;
        transform: rotateY(-180deg);
        transition-property: transform;
        transition-timing-function: linear;
        transition-duration: inherit;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        z-index: 100;
      }
      #root.flip .visible {
        opacity: 1;
        height: auto;
        backface-visibility: hidden;
        transform: rotateY(0deg);
      }
      #root.flip .out {
        opacity: 1;
        height: auto;
        transform: rotateY(180deg);
      }
    `}})}]);