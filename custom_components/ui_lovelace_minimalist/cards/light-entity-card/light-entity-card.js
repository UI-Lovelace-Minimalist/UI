!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/local/",i(i.s=1)}([function(t){t.exports=JSON.parse('{"name":"light-entity-card","version":"6.1.3","description":"A light-entity card for Home Assistant Lovelace UI","keywords":["home-assistant","homeassistant","hass","automation","lovelace","custom-cards","light-entity"],"repository":"git@github.com:ljmerza/light-entity-card.git","author":"Leonardo Merza <ljmerza@gmail.com>","license":"MIT","dependencies":{"@babel/polyfill":"^7.4.4","@jaames/iro":"^5.5.2","@lit-labs/scoped-registry-mixin":"^1.0.0","@material/mwc-icon":"^0.25.3","@material/mwc-list":"^0.25.3","@material/mwc-menu":"^0.25.3","@material/mwc-notched-outline":"^0.25.3","@material/mwc-select":"^0.25.3","core-js":"^2.6.5","lit":"^2.1.2","lit-element":"^2.2.1"},"devDependencies":{"@babel/cli":"^7.5.5","@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","babel-loader":"^8.0.6","eslint":"^6.1.0","webpack":"^4.38.0","webpack-cli":"^3.3.6","webpack-merge":"^4.2.1"},"scripts":{"lint":"eslint  --fix ./src","start":"webpack --watch --config webpack/config.dev.js","build":"webpack --config webpack/config.prod.js"}}')},function(t,e,i){"use strict";i.r(e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n=window,r=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const l=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new a(i,t,o)},c=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var h;const u=window,d=u.trustedTypes,f=d?d.emptyScript:"",p=u.reactiveElementPolyfillSupport,g={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:v};class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{r?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style"),r=n.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,t.appendChild(i)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=_){var n;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:g).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,r=n._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=n.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:g;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}function b(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=k(t);if(e){var r=k(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return $(this,i)}}function $(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=E(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw o}}}}function S(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||E(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var n,r,o=[],s=!0,a=!1;try{for(i=i.call(t);!(s=(n=i.next()).done)&&(o.push(n.value),!e||o.length!==e);s=!0);}catch(t){a=!0,r=t}finally{try{s||null==i.return||i.return()}finally{if(a)throw r}}return o}(t,e)||E(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){if(t){if("string"==typeof t)return C(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?C(t,e):void 0}}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function P(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function T(t,e,i){return e&&P(t.prototype,e),i&&P(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R;y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:y}),(null!==(h=u.reactiveElementVersions)&&void 0!==h?h:u.reactiveElementVersions=[]).push("1.6.1");var I=window,M=I.trustedTypes,H=M?M.createPolicy("lit-html",{createHTML:function(t){return t}}):void 0,N="lit$".concat((Math.random()+"").slice(9),"$"),U="?"+N,L="<".concat(U,">"),D=document,W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return D.createComment(t)},B=function(t){return null===t||"object"!=j(t)&&"function"!=typeof t},F=Array.isArray,z=function(t){return F(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator])},V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,K=/>/g,G=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),J=/'/g,Z=/"/g,X=/^(?:script|style|textarea|title)$/i,Y=function(t){return function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return{_$litType$:t,strings:e,values:n}}},Q=Y(1),tt=(Y(2),Symbol.for("lit-noChange")),et=Symbol.for("lit-nothing"),it=new WeakMap,nt=D.createTreeWalker(D,129,null,!1),rt=function(t,e){for(var i,n=t.length-1,r=[],o=2===e?"<svg>":"",s=V,a=0;a<n;a++){for(var l=t[a],c=void 0,h=void 0,u=-1,d=0;d<l.length&&(s.lastIndex=d,null!==(h=s.exec(l)));)d=s.lastIndex,s===V?"!--"===h[1]?s=q:void 0!==h[1]?s=K:void 0!==h[2]?(X.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=G):void 0!==h[3]&&(s=G):s===G?">"===h[0]?(s=null!=i?i:V,u=-1):void 0===h[1]?u=-2:(u=s.lastIndex-h[2].length,c=h[1],s=void 0===h[3]?G:'"'===h[3]?Z:J):s===Z||s===J?s=G:s===q||s===K?s=V:(s=G,i=void 0);var f=s===G&&t[a+1].startsWith("/>")?" ":"";o+=s===V?l+L:u>=0?(r.push(c),l.slice(0,u)+"$lit$"+l.slice(u)+N+f):l+N+(-2===u?(r.push(void 0),a):f)}var p=o+(t[n]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==H?H.createHTML(p):p,r]},ot=function(){function t(e,i){var n,r=e.strings,o=e._$litType$;O(this,t),this.parts=[];var s=0,a=0,l=r.length-1,c=this.parts,h=A(rt(r,o),2),u=h[0],d=h[1];if(this.el=t.createElement(u,i),nt.currentNode=this.el.content,2===o){var f=this.el.content,p=f.firstChild;p.remove(),f.append.apply(f,S(p.childNodes))}for(;null!==(n=nt.nextNode())&&c.length<l;){if(1===n.nodeType){if(n.hasAttributes()){var g,v=[],_=x(n.getAttributeNames());try{for(_.s();!(g=_.n()).done;){var y=g.value;if(y.endsWith("$lit$")||y.startsWith(N)){var b=d[a++];if(v.push(y),void 0!==b){var m=n.getAttribute(b.toLowerCase()+"$lit$").split(N),w=/([.?@])?(.*)/.exec(b);c.push({type:1,index:s,name:w[2],strings:m,ctor:"."===w[1]?ht:"?"===w[1]?dt:"@"===w[1]?ft:ct})}else c.push({type:6,index:s})}}}catch(t){_.e(t)}finally{_.f()}for(var $=0,k=v;$<k.length;$++){var E=k[$];n.removeAttribute(E)}}if(X.test(n.tagName)){var C=n.textContent.split(N),P=C.length-1;if(P>0){n.textContent=M?M.emptyScript:"";for(var T=0;T<P;T++)n.append(C[T],W()),nt.nextNode(),c.push({type:2,index:++s});n.append(C[P],W())}}}else if(8===n.nodeType)if(n.data===U)c.push({type:2,index:s});else for(var j=-1;-1!==(j=n.data.indexOf(N,j+1));)c.push({type:7,index:s}),j+=N.length-1;s++}}return T(t,null,[{key:"createElement",value:function(t,e){var i=D.createElement("template");return i.innerHTML=t,i}}]),t}();function st(t,e){var i,n,r,o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=arguments.length>3?arguments[3]:void 0;if(e===tt)return e;var l=void 0!==a?null===(i=s._$Co)||void 0===i?void 0:i[a]:s._$Cl,c=B(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t))._$AT(t,s,a),void 0!==a?(null!==(r=(o=s)._$Co)&&void 0!==r?r:o._$Co=[])[a]=l:s._$Cl=l),void 0!==l&&(e=st(t,l._$AS(t,e.values),l,a)),e}var at=function(){function t(e,i){O(this,t),this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=i}return T(t,[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"v",value:function(t){var e,i=this._$AD,n=i.el.content,r=i.parts,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:D).importNode(n,!0);nt.currentNode=o;for(var s=nt.nextNode(),a=0,l=0,c=r[0];void 0!==c;){if(a===c.index){var h=void 0;2===c.type?h=new lt(s,s.nextSibling,this,t):1===c.type?h=new c.ctor(s,c.name,c.strings,this,t):6===c.type&&(h=new pt(s,this,t)),this.u.push(h),c=r[++l]}a!==(null==c?void 0:c.index)&&(s=nt.nextNode(),a++)}return o}},{key:"p",value:function(t){var e,i=0,n=x(this.u);try{for(n.s();!(e=n.n()).done;){var r=e.value;void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}}catch(t){n.e(t)}finally{n.f()}}}]),t}(),lt=function(){function t(e,i,n,r){var o;O(this,t),this.type=2,this._$AH=et,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=n,this.options=r,this._$Cm=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}return T(t,[{key:"_$AU",get:function(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}},{key:"parentNode",get:function(){var t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;t=st(this,t,e),B(t)?t===et||null==t||""===t?(this._$AH!==et&&this._$AR(),this._$AH=et):t!==this._$AH&&t!==tt&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):z(t)?this.k(t):this.g(t)}},{key:"O",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._$AB;return this._$AA.parentNode.insertBefore(t,e)}},{key:"T",value:function(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}},{key:"g",value:function(t){this._$AH!==et&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}},{key:"$",value:function(t){var e,i=t.values,n=t._$litType$,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=ot.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(i);else{var o=new at(r,this),s=o.v(this.options);o.p(i),this.T(s),this._$AH=o}}},{key:"_$AC",value:function(t){var e=it.get(t.strings);return void 0===e&&it.set(t.strings,e=new ot(t)),e}},{key:"k",value:function(e){F(this._$AH)||(this._$AH=[],this._$AR());var i,n,r=this._$AH,o=0,s=x(e);try{for(s.s();!(n=s.n()).done;){var a=n.value;o===r.length?r.push(i=new t(this.O(W()),this.O(W()),this,this.options)):i=r[o],i._$AI(a),o++}}catch(t){s.e(t)}finally{s.f()}o<r.length&&(this._$AR(i&&i._$AB.nextSibling,o),r.length=o)}},{key:"_$AR",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(t=this._$AP)||void 0===t||t.call(this,!1,!0,i);e&&e!==this._$AB;){var n=e.nextSibling;e.remove(),e=n}}},{key:"setConnected",value:function(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}]),t}(),ct=function(){function t(e,i,n,r,o){O(this,t),this.type=1,this._$AH=et,this._$AN=void 0,this.element=e,this.name=i,this._$AM=r,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=et}return T(t,[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,r=this.strings,o=!1;if(void 0===r)t=st(this,t,e,0),(o=!B(t)||t!==this._$AH&&t!==tt)&&(this._$AH=t);else{var s,a,l=t;for(t=r[0],s=0;s<r.length-1;s++)(a=st(this,l[i+s],e,s))===tt&&(a=this._$AH[s]),o||(o=!B(a)||a!==this._$AH[s]),a===et?t=et:t!==et&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}o&&!n&&this.j(t)}},{key:"j",value:function(t){t===et?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}]),t}(),ht=function(t){b(i,t);var e=w(i);function i(){var t;return O(this,i),(t=e.apply(this,arguments)).type=3,t}return T(i,[{key:"j",value:function(t){this.element[this.name]=t===et?void 0:t}}]),i}(ct),ut=M?M.emptyScript:"",dt=function(t){b(i,t);var e=w(i);function i(){var t;return O(this,i),(t=e.apply(this,arguments)).type=4,t}return T(i,[{key:"j",value:function(t){t&&t!==et?this.element.setAttribute(this.name,ut):this.element.removeAttribute(this.name)}}]),i}(ct),ft=function(t){b(i,t);var e=w(i);function i(t,n,r,o,s){var a;return O(this,i),(a=e.call(this,t,n,r,o,s)).type=5,a}return T(i,[{key:"_$AI",value:function(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;if((t=null!==(e=st(this,t,i,0))&&void 0!==e?e:et)!==tt){var n=this._$AH,r=t===et&&n!==et||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==et&&(n===et||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}}},{key:"handleEvent",value:function(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}]),i}(ct),pt=function(){function t(e,i,n){O(this,t),this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}return T(t,[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){st(this,t)}}]),t}(),gt=I.litHtmlPolyfillSupport;null==gt||gt(ot,lt),(null!==(R=I.litHtmlVersions)&&void 0!==R?R:I.litHtmlVersions=[]).push("2.6.1");var vt,_t;function yt(t){return(yt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function bt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mt(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function wt(){return(wt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var n=$t(t,e);if(n){var r=Object.getOwnPropertyDescriptor(n,e);return r.get?r.get.call(arguments.length<3?t:i):r.value}}).apply(this,arguments)}function $t(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Et(t)););return t}function kt(t,e){return(kt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function xt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=Et(t);if(e){var r=Et(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return St(this,i)}}function St(t,e){if(e&&("object"===yt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return At(t)}function At(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Et(t){return(Et=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ct=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&kt(t,e)}(o,t);var e,i,n,r=xt(o);function o(){var t;return bt(this,o),(t=r.apply(this,arguments)).renderOptions={host:At(t)},t._$Do=void 0,t}return e=o,(i=[{key:"createRenderRoot",value:function(){var t,e,i=wt(Et(o.prototype),"createRenderRoot",this).call(this);return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}},{key:"update",value:function(t){var e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),wt(Et(o.prototype),"update",this).call(this,t),this._$Do=function(t,e,i){var n,r,o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e,s=o._$litPart$;if(void 0===s){var a=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new lt(e.insertBefore(W(),a),a,void 0,null!=i?i:{})}return s._$AI(t),s}(e,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var t;wt(Et(o.prototype),"connectedCallback",this).call(this),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var t;wt(Et(o.prototype),"disconnectedCallback",this).call(this),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}},{key:"render",value:function(){return tt}}])&&mt(e.prototype,i),n&&mt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),o}(y);Ct.finalized=!0,Ct._$litElement$=!0,null===(vt=globalThis.litElementHydrateSupport)||void 0===vt||vt.call(globalThis,{LitElement:Ct});var Ot=globalThis.litElementPolyfillSupport;null==Ot||Ot({LitElement:Ct});(null!==(_t=globalThis.litElementVersions)&&void 0!==_t?_t:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Pt,Tt,jt,Rt,It,Mt={},Ht=[],Nt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
/*!
 * iro.js v5.5.2
 * 2016-2021 James Daniel
 * Licensed under MPL 2.0
 * github.com/jaames/iro.js
 */function Ut(t,e){for(var i in e)t[i]=e[i];return t}function Lt(t){var e=t.parentNode;e&&e.removeChild(t)}function Dt(t,e,i){var n,r,o,s,a=arguments;if(e=Ut({},e),arguments.length>3)for(i=[i],n=3;n<arguments.length;n++)i.push(a[n]);if(null!=i&&(e.children=i),null!=t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===e[r]&&(e[r]=t.defaultProps[r]);return s=e.key,null!=(o=e.ref)&&delete e.ref,null!=s&&delete e.key,Wt(t,e,s,o)}function Wt(t,e,i,n){var r={type:t,props:e,key:i,ref:n,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return Pt.vnode&&Pt.vnode(r),r}function Bt(t){return t.children}function Ft(t,e){this.props=t,this.context=e}function zt(t,e){if(null==e)return t.__p?zt(t.__p,t.__p.__k.indexOf(t)+1):null;for(var i;e<t.__k.length;e++)if(null!=(i=t.__k[e])&&null!=i.__e)return i.__e;return"function"==typeof t.type?zt(t):null}function Vt(t){var e,i;if(null!=(t=t.__p)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(i=t.__k[e])&&null!=i.__e){t.__e=t.__c.base=i.__e;break}return Vt(t)}}function qt(t){(!t.__d&&(t.__d=!0)&&1===Tt.push(t)||Rt!==Pt.debounceRendering)&&(Rt=Pt.debounceRendering,(Pt.debounceRendering||jt)(Kt))}function Kt(){var t,e,i,n,r,o,s,a;for(Tt.sort((function(t,e){return e.__v.__b-t.__v.__b}));t=Tt.pop();)t.__d&&(i=void 0,n=void 0,o=(r=(e=t).__v).__e,s=e.__P,a=e.u,e.u=!1,s&&(i=[],n=Qt(s,r,Ut({},r),e.__n,void 0!==s.ownerSVGElement,null,i,a,null==o?zt(r):o),te(i,r),n!=o&&Vt(r)))}function Gt(t,e,i,n,r,o,s,a,l){var c,h,u,d,f,p,g,v=i&&i.__k||Ht,_=v.length;if(a==Mt&&(a=null!=o?o[0]:_?zt(i,0):null),c=0,e.__k=Jt(e.__k,(function(i){if(null!=i){if(i.__p=e,i.__b=e.__b+1,null===(u=v[c])||u&&i.key==u.key&&i.type===u.type)v[c]=void 0;else for(h=0;h<_;h++){if((u=v[h])&&i.key==u.key&&i.type===u.type){v[h]=void 0;break}u=null}if(d=Qt(t,i,u=u||Mt,n,r,o,s,null,a,l),(h=i.ref)&&u.ref!=h&&(g||(g=[])).push(h,i.__c||d,i),null!=d){if(null==p&&(p=d),null!=i.l)d=i.l,i.l=null;else if(o==u||d!=a||null==d.parentNode){t:if(null==a||a.parentNode!==t)t.appendChild(d);else{for(f=a,h=0;(f=f.nextSibling)&&h<_;h+=2)if(f==d)break t;t.insertBefore(d,a)}"option"==e.type&&(t.value="")}a=d.nextSibling,"function"==typeof e.type&&(e.l=d)}}return c++,i})),e.__e=p,null!=o&&"function"!=typeof e.type)for(c=o.length;c--;)null!=o[c]&&Lt(o[c]);for(c=_;c--;)null!=v[c]&&ie(v[c],v[c]);if(g)for(c=0;c<g.length;c++)ee(g[c],g[++c],g[++c])}function Jt(t,e,i){if(null==i&&(i=[]),null==t||"boolean"==typeof t)e&&i.push(e(null));else if(Array.isArray(t))for(var n=0;n<t.length;n++)Jt(t[n],e,i);else i.push(e?e(function(t){if(null==t||"boolean"==typeof t)return null;if("string"==typeof t||"number"==typeof t)return Wt(null,t,null,null);if(null!=t.__e||null!=t.__c){var e=Wt(t.type,t.props,t.key,null);return e.__e=t.__e,e}return t}(t)):t);return i}function Zt(t,e,i){"-"===e[0]?t.setProperty(e,i):t[e]="number"==typeof i&&!1===Nt.test(e)?i+"px":null==i?"":i}function Xt(t,e,i,n,r){var o,s,a,l,c;if("key"===(e=r?"className"===e?"class":e:"class"===e?"className":e)||"children"===e);else if("style"===e)if(o=t.style,"string"==typeof i)o.cssText=i;else{if("string"==typeof n&&(o.cssText="",n=null),n)for(s in n)i&&s in i||Zt(o,s,"");if(i)for(a in i)n&&i[a]===n[a]||Zt(o,a,i[a])}else"o"===e[0]&&"n"===e[1]?(l=e!==(e=e.replace(/Capture$/,"")),c=e.toLowerCase(),e=(c in t?c:e).slice(2),i?(n||t.addEventListener(e,Yt,l),(t.t||(t.t={}))[e]=i):t.removeEventListener(e,Yt,l)):"list"!==e&&"tagName"!==e&&"form"!==e&&!r&&e in t?t[e]=null==i?"":i:"function"!=typeof i&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==i||!1===i?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),i):null==i||!1===i?t.removeAttribute(e):t.setAttribute(e,i))}function Yt(t){return this.t[t.type](Pt.event?Pt.event(t):t)}function Qt(t,e,i,n,r,o,s,a,l,c){var h,u,d,f,p,g,v,_,y,b,m=e.type;if(void 0!==e.constructor)return null;(h=Pt.__b)&&h(e);try{t:if("function"==typeof m){if(_=e.props,y=(h=m.contextType)&&n[h.__c],b=h?y?y.props.value:h.__p:n,i.__c?v=(u=e.__c=i.__c).__p=u.__E:("prototype"in m&&m.prototype.render?e.__c=u=new m(_,b):(e.__c=u=new Ft(_,b),u.constructor=m,u.render=ne),y&&y.sub(u),u.props=_,u.state||(u.state={}),u.context=b,u.__n=n,d=u.__d=!0,u.__h=[]),null==u.__s&&(u.__s=u.state),null!=m.getDerivedStateFromProps&&Ut(u.__s==u.state?u.__s=Ut({},u.__s):u.__s,m.getDerivedStateFromProps(_,u.__s)),d)null==m.getDerivedStateFromProps&&null!=u.componentWillMount&&u.componentWillMount(),null!=u.componentDidMount&&s.push(u);else{if(null==m.getDerivedStateFromProps&&null==a&&null!=u.componentWillReceiveProps&&u.componentWillReceiveProps(_,b),!a&&null!=u.shouldComponentUpdate&&!1===u.shouldComponentUpdate(_,u.__s,b)){for(u.props=_,u.state=u.__s,u.__d=!1,u.__v=e,e.__e=null!=l?l!==i.__e?l:i.__e:null,e.__k=i.__k,h=0;h<e.__k.length;h++)e.__k[h]&&(e.__k[h].__p=e);break t}null!=u.componentWillUpdate&&u.componentWillUpdate(_,u.__s,b)}for(f=u.props,p=u.state,u.context=b,u.props=_,u.state=u.__s,(h=Pt.__r)&&h(e),u.__d=!1,u.__v=e,u.__P=t,h=u.render(u.props,u.state,u.context),e.__k=Jt(null!=h&&h.type==Bt&&null==h.key?h.props.children:h),null!=u.getChildContext&&(n=Ut(Ut({},n),u.getChildContext())),d||null==u.getSnapshotBeforeUpdate||(g=u.getSnapshotBeforeUpdate(f,p)),Gt(t,e,i,n,r,o,s,l,c),u.base=e.__e;h=u.__h.pop();)u.__s&&(u.state=u.__s),h.call(u);d||null==f||null==u.componentDidUpdate||u.componentDidUpdate(f,p,g),v&&(u.__E=u.__p=null)}else e.__e=function(t,e,i,n,r,o,s,a){var l,c,h,u,d=i.props,f=e.props;if(r="svg"===e.type||r,null==t&&null!=o)for(l=0;l<o.length;l++)if(null!=(c=o[l])&&(null===e.type?3===c.nodeType:c.localName===e.type)){t=c,o[l]=null;break}if(null==t){if(null===e.type)return document.createTextNode(f);t=r?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type),o=null}return null===e.type?d!==f&&(null!=o&&(o[o.indexOf(t)]=null),t.data=f):e!==i&&(null!=o&&(o=Ht.slice.call(t.childNodes)),h=(d=i.props||Mt).dangerouslySetInnerHTML,u=f.dangerouslySetInnerHTML,a||(u||h)&&(u&&h&&u.__html==h.__html||(t.innerHTML=u&&u.__html||"")),function(t,e,i,n,r){var o;for(o in i)o in e||Xt(t,o,null,i[o],n);for(o in e)r&&"function"!=typeof e[o]||"value"===o||"checked"===o||i[o]===e[o]||Xt(t,o,e[o],i[o],n)}(t,f,d,r,a),e.__k=e.props.children,u||Gt(t,e,i,n,"foreignObject"!==e.type&&r,o,s,Mt,a),a||("value"in f&&void 0!==f.value&&f.value!==t.value&&(t.value=null==f.value?"":f.value),"checked"in f&&void 0!==f.checked&&f.checked!==t.checked&&(t.checked=f.checked))),t}(i.__e,e,i,n,r,o,s,c);(h=Pt.diffed)&&h(e)}catch(t){Pt.__e(t,e,i)}return e.__e}function te(t,e){for(var i;i=t.pop();)try{i.componentDidMount()}catch(t){Pt.__e(t,i.__v)}Pt.__c&&Pt.__c(e)}function ee(t,e,i){try{"function"==typeof t?t(e):t.current=e}catch(t){Pt.__e(t,i)}}function ie(t,e,i){var n,r,o;if(Pt.unmount&&Pt.unmount(t),(n=t.ref)&&ee(n,null,e),i||"function"==typeof t.type||(i=null!=(r=t.__e)),t.__e=t.l=null,null!=(n=t.__c)){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(t){Pt.__e(t,e)}n.base=n.__P=null}if(n=t.__k)for(o=0;o<n.length;o++)n[o]&&ie(n[o],e,i);null!=r&&Lt(r)}function ne(t,e,i){return this.constructor(t,i)}function re(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function oe(){return(oe=Object.assign||function(t){for(var e=arguments,i=1;i<arguments.length;i++){var n=e[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Pt={},Ft.prototype.setState=function(t,e){var i=this.__s!==this.state&&this.__s||(this.__s=Ut({},this.state));("function"!=typeof t||(t=t(i,this.props)))&&Ut(i,t),null!=t&&this.__v&&(this.u=!1,e&&this.__h.push(e),qt(this))},Ft.prototype.forceUpdate=function(t){this.__v&&(t&&this.__h.push(t),this.u=!0,qt(this))},Ft.prototype.render=Bt,Tt=[],jt="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Rt=Pt.debounceRendering,Pt.__e=function(t,e,i){for(var n;e=e.__p;)if((n=e.__c)&&!n.__p)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(t));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(t)}return qt(n.__E=n)}catch(e){t=e}throw t},It=Mt;var se="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",ae="[\\s|\\(]+("+se+")[,|\\s]+("+se+")[,|\\s]+("+se+")\\s*\\)?",le="[\\s|\\(]+("+se+")[,|\\s]+("+se+")[,|\\s]+("+se+")[,|\\s]+("+se+")\\s*\\)?",ce=new RegExp("rgb"+ae),he=new RegExp("rgba"+le),ue=new RegExp("hsl"+ae),de=new RegExp("hsla"+le),fe=new RegExp("^(?:#?|0x?)([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$"),pe=new RegExp("^(?:#?|0x?)([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$"),ge=new RegExp("^(?:#?|0x?)([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$"),ve=new RegExp("^(?:#?|0x?)([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$"),_e=Math.log,ye=Math.round,be=Math.floor;function me(t,e,i){return Math.min(Math.max(t,e),i)}function we(t,e){var i=t.indexOf("%")>-1,n=parseFloat(t);return i?e/100*n:n}function $e(t){return parseInt(t,16)}function ke(t){return t.toString(16).padStart(2,"0")}var xe=function(){function t(t,e){this.$={h:0,s:0,v:0,a:1},t&&this.set(t),this.onChange=e,this.initialValue=oe({},this.$)}var e,i,n,r=t.prototype;return r.set=function(e){if("string"==typeof e)/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(e)?this.hexString=e:/^rgba?/.test(e)?this.rgbString=e:/^hsla?/.test(e)&&(this.hslString=e);else{if("object"!=typeof e)throw new Error("Invalid color value");e instanceof t?this.hsva=e.hsva:"r"in e&&"g"in e&&"b"in e?this.rgb=e:"h"in e&&"s"in e&&"v"in e?this.hsv=e:"h"in e&&"s"in e&&"l"in e?this.hsl=e:"kelvin"in e&&(this.kelvin=e.kelvin)}},r.setChannel=function(t,e,i){var n;this[t]=oe({},this[t],((n={})[e]=i,n))},r.reset=function(){this.hsva=this.initialValue},r.clone=function(){return new t(this)},r.unbind=function(){this.onChange=void 0},t.hsvToRgb=function(t){var e=t.h/60,i=t.s/100,n=t.v/100,r=be(e),o=e-r,s=n*(1-i),a=n*(1-o*i),l=n*(1-(1-o)*i),c=r%6,h=[l,n,n,a,s,s][c],u=[s,s,l,n,n,a][c];return{r:me(255*[n,a,s,s,l,n][c],0,255),g:me(255*h,0,255),b:me(255*u,0,255)}},t.rgbToHsv=function(t){var e=t.r/255,i=t.g/255,n=t.b/255,r=Math.max(e,i,n),o=Math.min(e,i,n),s=r-o,a=0,l=r,c=0===r?0:s/r;switch(r){case o:a=0;break;case e:a=(i-n)/s+(i<n?6:0);break;case i:a=(n-e)/s+2;break;case n:a=(e-i)/s+4}return{h:60*a%360,s:me(100*c,0,100),v:me(100*l,0,100)}},t.hsvToHsl=function(t){var e=t.s/100,i=t.v/100,n=(2-e)*i,r=n<=1?n:2-n,o=r<1e-9?0:e*i/r;return{h:t.h,s:me(100*o,0,100),l:me(50*n,0,100)}},t.hslToHsv=function(t){var e=2*t.l,i=t.s*(e<=100?e:200-e)/100,n=e+i<1e-9?0:2*i/(e+i);return{h:t.h,s:me(100*n,0,100),v:me((e+i)/2,0,100)}},t.kelvinToRgb=function(t){var e,i,n,r=t/100;return r<66?(e=255,i=-155.25485562709179-.44596950469579133*(i=r-2)+104.49216199393888*_e(i),n=r<20?0:.8274096064007395*(n=r-10)-254.76935184120902+115.67994401066147*_e(n)):(e=351.97690566805693+.114206453784165*(e=r-55)-40.25366309332127*_e(e),i=325.4494125711974+.07943456536662342*(i=r-50)-28.0852963507957*_e(i),n=255),{r:me(be(e),0,255),g:me(be(i),0,255),b:me(be(n),0,255)}},t.rgbToKelvin=function(e){for(var i,n=e.r,r=e.b,o=2e3,s=4e4;s-o>.4;){i=.5*(s+o);var a=t.kelvinToRgb(i);a.b/a.r>=r/n?s=i:o=i}return i},e=t,(i=[{key:"hsv",get:function(){var t=this.$;return{h:t.h,s:t.s,v:t.v}},set:function(t){var e=this.$;if(t=oe({},e,t),this.onChange){var i={h:!1,v:!1,s:!1,a:!1};for(var n in e)i[n]=t[n]!=e[n];this.$=t,(i.h||i.s||i.v||i.a)&&this.onChange(this,i)}else this.$=t}},{key:"hsva",get:function(){return oe({},this.$)},set:function(t){this.hsv=t}},{key:"hue",get:function(){return this.$.h},set:function(t){this.hsv={h:t}}},{key:"saturation",get:function(){return this.$.s},set:function(t){this.hsv={s:t}}},{key:"value",get:function(){return this.$.v},set:function(t){this.hsv={v:t}}},{key:"alpha",get:function(){return this.$.a},set:function(t){this.hsv=oe({},this.hsv,{a:t})}},{key:"kelvin",get:function(){return t.rgbToKelvin(this.rgb)},set:function(e){this.rgb=t.kelvinToRgb(e)}},{key:"red",get:function(){return this.rgb.r},set:function(t){this.rgb=oe({},this.rgb,{r:t})}},{key:"green",get:function(){return this.rgb.g},set:function(t){this.rgb=oe({},this.rgb,{g:t})}},{key:"blue",get:function(){return this.rgb.b},set:function(t){this.rgb=oe({},this.rgb,{b:t})}},{key:"rgb",get:function(){var e=t.hsvToRgb(this.$),i=e.r,n=e.g,r=e.b;return{r:ye(i),g:ye(n),b:ye(r)}},set:function(e){this.hsv=oe({},t.rgbToHsv(e),{a:void 0===e.a?1:e.a})}},{key:"rgba",get:function(){return oe({},this.rgb,{a:this.alpha})},set:function(t){this.rgb=t}},{key:"hsl",get:function(){var e=t.hsvToHsl(this.$),i=e.h,n=e.s,r=e.l;return{h:ye(i),s:ye(n),l:ye(r)}},set:function(e){this.hsv=oe({},t.hslToHsv(e),{a:void 0===e.a?1:e.a})}},{key:"hsla",get:function(){return oe({},this.hsl,{a:this.alpha})},set:function(t){this.hsl=t}},{key:"rgbString",get:function(){var t=this.rgb;return"rgb("+t.r+", "+t.g+", "+t.b+")"},set:function(t){var e,i,n,r,o=1;if((e=ce.exec(t))?(i=we(e[1],255),n=we(e[2],255),r=we(e[3],255)):(e=he.exec(t))&&(i=we(e[1],255),n=we(e[2],255),r=we(e[3],255),o=we(e[4],1)),!e)throw new Error("Invalid rgb string");this.rgb={r:i,g:n,b:r,a:o}}},{key:"rgbaString",get:function(){var t=this.rgba;return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},set:function(t){this.rgbString=t}},{key:"hexString",get:function(){var t=this.rgb;return"#"+ke(t.r)+ke(t.g)+ke(t.b)},set:function(t){var e,i,n,r,o=255;if((e=fe.exec(t))?(i=17*$e(e[1]),n=17*$e(e[2]),r=17*$e(e[3])):(e=pe.exec(t))?(i=17*$e(e[1]),n=17*$e(e[2]),r=17*$e(e[3]),o=17*$e(e[4])):(e=ge.exec(t))?(i=$e(e[1]),n=$e(e[2]),r=$e(e[3])):(e=ve.exec(t))&&(i=$e(e[1]),n=$e(e[2]),r=$e(e[3]),o=$e(e[4])),!e)throw new Error("Invalid hex string");this.rgb={r:i,g:n,b:r,a:o/255}}},{key:"hex8String",get:function(){var t=this.rgba;return"#"+ke(t.r)+ke(t.g)+ke(t.b)+ke(be(255*t.a))},set:function(t){this.hexString=t}},{key:"hslString",get:function(){var t=this.hsl;return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},set:function(t){var e,i,n,r,o=1;if((e=ue.exec(t))?(i=we(e[1],360),n=we(e[2],100),r=we(e[3],100)):(e=de.exec(t))&&(i=we(e[1],360),n=we(e[2],100),r=we(e[3],100),o=we(e[4],1)),!e)throw new Error("Invalid hsl string");this.hsl={h:i,s:n,l:r,a:o}}},{key:"hslaString",get:function(){var t=this.hsla;return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},set:function(t){this.hslString=t}}])&&re(e.prototype,i),n&&re(e,n),t}();function Se(t){var e,i=t.width,n=t.sliderSize,r=t.borderWidth,o=t.handleRadius,s=t.padding,a=t.sliderShape,l="horizontal"===t.layoutDirection;return n=null!=(e=n)?e:2*s+2*o,"circle"===a?{handleStart:t.padding+t.handleRadius,handleRange:i-2*s-2*o,width:i,height:i,cx:i/2,cy:i/2,radius:i/2-r/2}:{handleStart:n/2,handleRange:i-n,radius:n/2,x:0,y:0,width:l?n:i,height:l?i:n}}function Ae(t,e){var i=Se(t),n=i.width,r=i.height,o=i.handleRange,s=i.handleStart,a="horizontal"===t.layoutDirection,l=a?n/2:r/2,c=s+function(t,e){var i=e.hsva,n=e.rgb;switch(t.sliderType){case"red":return n.r/2.55;case"green":return n.g/2.55;case"blue":return n.b/2.55;case"alpha":return 100*i.a;case"kelvin":var r=t.minTemperature,o=t.maxTemperature-r,s=(e.kelvin-r)/o*100;return Math.max(0,Math.min(s,100));case"hue":return i.h/=3.6;case"saturation":return i.s;case"value":default:return i.v}}(t,e)/100*o;return a&&(c=-1*c+o+2*s),{x:a?l:c,y:a?c:l}}var Ee,Ce=2*Math.PI,Oe=function(t,e){return Math.sqrt(t*t+e*e)};function Pe(t){return t.width/2-t.padding-t.handleRadius-t.borderWidth}function Te(t){var e=t.width/2;return{width:t.width,radius:e-t.borderWidth,cx:e,cy:e}}function je(t,e,i){var n=t.wheelAngle,r=t.wheelDirection;return i&&"clockwise"===r?e=n+e:"clockwise"===r?e=360-n+e:i&&"anticlockwise"===r?e=n+180-e:"anticlockwise"===r&&(e=n-e),function(t,e){return(t%e+e)%e}(e,360)}function Re(t,e,i){var n=Te(t),r=n.cx,o=n.cy,s=Pe(t);e=r-e,i=o-i;var a=je(t,Math.atan2(-i,-e)*(360/Ce)),l=Math.min(Oe(e,i),s);return{h:Math.round(a),s:Math.round(100/s*l)}}function Ie(t){var e=t.width,i=t.boxHeight;return{width:e,height:null!=i?i:e,radius:t.padding+t.handleRadius}}function Me(t,e,i){var n=Ie(t),r=n.width,o=n.height,s=n.radius,a=(e-s)/(r-2*s)*100,l=(i-s)/(o-2*s)*100;return{s:Math.max(0,Math.min(a,100)),v:Math.max(0,Math.min(100-l,100))}}function He(t){Ee||(Ee=document.getElementsByTagName("base"));var e=window.navigator.userAgent,i=/^((?!chrome|android).)*safari/i.test(e),n=/iPhone|iPod|iPad/i.test(e),r=window.location;return(i||n)&&Ee.length>0?r.protocol+"//"+r.host+r.pathname+r.search+t:t}function Ne(t,e,i,n){for(var r=0;r<n.length;r++){var o=n[r].x-e,s=n[r].y-i;if(Math.sqrt(o*o+s*s)<t.handleRadius)return r}return null}function Ue(t){return{boxSizing:"border-box",border:t.borderWidth+"px solid "+t.borderColor}}function Le(t,e,i){return t+"-gradient("+e+", "+i.map((function(t){var e=t[0];return t[1]+" "+e+"%"})).join(",")+")"}function De(t){return"string"==typeof t?t:t+"px"}var We=["mousemove","touchmove","mouseup","touchend"],Be=function(t){function e(e){t.call(this,e),this.uid=(Math.random()+1).toString(36).substring(5)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.render=function(t){var e=this.handleEvent.bind(this),i={onMouseDown:e,ontouchstart:e},n="horizontal"===t.layoutDirection,r=null===t.margin?t.sliderMargin:t.margin,o={overflow:"visible",display:n?"inline-block":"block"};return t.index>0&&(o[n?"marginLeft":"marginTop"]=r),Dt(Bt,null,t.children(this.uid,i,o))},e.prototype.handleEvent=function(t){var e=this,i=this.props.onInput,n=this.base.getBoundingClientRect();t.preventDefault();var r=t.touches?t.changedTouches[0]:t,o=r.clientX-n.left,s=r.clientY-n.top;switch(t.type){case"mousedown":case"touchstart":!1!==i(o,s,0)&&We.forEach((function(t){document.addEventListener(t,e,{passive:!1})}));break;case"mousemove":case"touchmove":i(o,s,1);break;case"mouseup":case"touchend":i(o,s,2),We.forEach((function(t){document.removeEventListener(t,e,{passive:!1})}))}},e}(Ft);function Fe(t){var e=t.r,i=t.url,n=e,r=e;return Dt("svg",{className:"IroHandle IroHandle--"+t.index+" "+(t.isActive?"IroHandle--isActive":""),style:{"-webkit-tap-highlight-color":"rgba(0, 0, 0, 0);",transform:"translate("+De(t.x)+", "+De(t.y)+")",willChange:"transform",top:De(-e),left:De(-e),width:De(2*e),height:De(2*e),position:"absolute",overflow:"visible"}},i&&Dt("use",Object.assign({xlinkHref:He(i)},t.props)),!i&&Dt("circle",{cx:n,cy:r,r:e,fill:"none","stroke-width":2,stroke:"#000"}),!i&&Dt("circle",{cx:n,cy:r,r:e-2,fill:t.fill,"stroke-width":2,stroke:"#fff"}))}function ze(t){var e=t.activeIndex,i=void 0!==e&&e<t.colors.length?t.colors[e]:t.color,n=Se(t),r=n.width,o=n.height,s=n.radius,a=Ae(t,i),l=function(t,e){var i=e.hsv,n=e.rgb;switch(t.sliderType){case"red":return[[0,"rgb(0,"+n.g+","+n.b+")"],[100,"rgb(255,"+n.g+","+n.b+")"]];case"green":return[[0,"rgb("+n.r+",0,"+n.b+")"],[100,"rgb("+n.r+",255,"+n.b+")"]];case"blue":return[[0,"rgb("+n.r+","+n.g+",0)"],[100,"rgb("+n.r+","+n.g+",255)"]];case"alpha":return[[0,"rgba("+n.r+","+n.g+","+n.b+",0)"],[100,"rgb("+n.r+","+n.g+","+n.b+")"]];case"kelvin":for(var r=[],o=t.minTemperature,s=t.maxTemperature,a=s-o,l=o,c=0;l<s;l+=a/8,c+=1){var h=xe.kelvinToRgb(l),u=h.r,d=h.g,f=h.b;r.push([12.5*c,"rgb("+u+","+d+","+f+")"])}return r;case"hue":return[[0,"#f00"],[16.666,"#ff0"],[33.333,"#0f0"],[50,"#0ff"],[66.666,"#00f"],[83.333,"#f0f"],[100,"#f00"]];case"saturation":var p=xe.hsvToHsl({h:i.h,s:0,v:i.v}),g=xe.hsvToHsl({h:i.h,s:100,v:i.v});return[[0,"hsl("+p.h+","+p.s+"%,"+p.l+"%)"],[100,"hsl("+g.h+","+g.s+"%,"+g.l+"%)"]];case"value":default:var v=xe.hsvToHsl({h:i.h,s:i.s,v:100});return[[0,"#000"],[100,"hsl("+v.h+","+v.s+"%,"+v.l+"%)"]]}}(t,i);return Dt(Be,Object.assign({},t,{onInput:function(e,n,r){var o=function(t,e,i){var n,r=Se(t),o=r.handleRange,s=r.handleStart;n="horizontal"===t.layoutDirection?-1*i+o+s:e-s,n=Math.max(Math.min(n,o),0);var a=Math.round(100/o*n);switch(t.sliderType){case"kelvin":var l=t.minTemperature;return l+(t.maxTemperature-l)*(a/100);case"alpha":return a/100;case"hue":return 3.6*a;case"red":case"blue":case"green":return 2.55*a;default:return a}}(t,e,n);t.parent.inputActive=!0,i[t.sliderType]=o,t.onInput(r,t.id)}}),(function(e,n,c){return Dt("div",Object.assign({},n,{className:"IroSlider",style:Object.assign({},{position:"relative",width:De(r),height:De(o),borderRadius:De(s),background:"conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",backgroundSize:"8px 8px"},c)}),Dt("div",{className:"IroSliderGradient",style:Object.assign({},{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:De(s),background:Le("linear","horizontal"===t.layoutDirection?"to top":"to right",l)},Ue(t))}),Dt(Fe,{isActive:!0,index:i.index,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:a.x,y:a.y}))}))}function Ve(t){var e=Ie(t),i=e.width,n=e.height,r=e.radius,o=t.colors,s=t.parent,a=t.activeIndex,l=void 0!==a&&a<t.colors.length?t.colors[a]:t.color,c=[[[0,"#fff"],[100,"hsl("+l.hue+",100%,50%)"]],[[0,"rgba(0,0,0,0)"],[100,"#000"]]],h=o.map((function(e){return function(t,e){var i=Ie(t),n=i.width,r=i.height,o=i.radius,s=e.hsv,a=o,l=n-2*o,c=r-2*o;return{x:a+s.s/100*l,y:a+(c-s.v/100*c)}}(t,e)}));return Dt(Be,Object.assign({},t,{onInput:function(e,i,n){if(0===n){var r=Ne(t,e,i,h);null!==r?s.setActiveColor(r):(s.inputActive=!0,l.hsv=Me(t,e,i),t.onInput(n,t.id))}else 1===n&&(s.inputActive=!0,l.hsv=Me(t,e,i));t.onInput(n,t.id)}}),(function(e,s,a){return Dt("div",Object.assign({},s,{className:"IroBox",style:Object.assign({},{width:De(i),height:De(n),position:"relative"},a)}),Dt("div",{className:"IroBox",style:Object.assign({},{width:"100%",height:"100%",borderRadius:De(r)},Ue(t),{background:Le("linear","to bottom",c[1])+","+Le("linear","to right",c[0])})}),o.filter((function(t){return t!==l})).map((function(e){return Dt(Fe,{isActive:!1,index:e.index,fill:e.hslString,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:h[e.index].x,y:h[e.index].y})})),Dt(Fe,{isActive:!0,index:l.index,fill:l.hslString,r:t.activeHandleRadius||t.handleRadius,url:t.handleSvg,props:t.handleProps,x:h[l.index].x,y:h[l.index].y}))}))}Fe.defaultProps={fill:"none",x:0,y:0,r:8,url:null,props:{x:0,y:0}},ze.defaultProps=Object.assign({},{sliderShape:"bar",sliderType:"value",minTemperature:2200,maxTemperature:11e3});function qe(t){var e=Te(t).width,i=t.colors,n=(t.borderWidth,t.parent),r=t.color,o=r.hsv,s=i.map((function(e){return function(t,e){var i=e.hsv,n=Te(t),r=n.cx,o=n.cy,s=Pe(t),a=(180+je(t,i.h,!0))*(Ce/360),l=i.s/100*s,c="clockwise"===t.wheelDirection?-1:1;return{x:r+l*Math.cos(a)*c,y:o+l*Math.sin(a)*c}}(t,e)})),a={position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",boxSizing:"border-box"};return Dt(Be,Object.assign({},t,{onInput:function(e,i,o){if(0===o){if(!function(t,e,i){var n=Te(t),r=n.cx,o=n.cy,s=t.width/2;return Oe(r-e,o-i)<s}(t,e,i))return!1;var a=Ne(t,e,i,s);null!==a?n.setActiveColor(a):(n.inputActive=!0,r.hsv=Re(t,e,i),t.onInput(o,t.id))}else 1===o&&(n.inputActive=!0,r.hsv=Re(t,e,i));t.onInput(o,t.id)}}),(function(n,l,c){return Dt("div",Object.assign({},l,{className:"IroWheel",style:Object.assign({},{width:De(e),height:De(e),position:"relative"},c)}),Dt("div",{className:"IroWheelHue",style:Object.assign({},a,{transform:"rotateZ("+(t.wheelAngle+90)+"deg)",background:"clockwise"===t.wheelDirection?"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)":"conic-gradient(red, magenta, blue, aqua, lime, yellow, red)"})}),Dt("div",{className:"IroWheelSaturation",style:Object.assign({},a,{background:"radial-gradient(circle closest-side, #fff, transparent)"})}),t.wheelLightness&&Dt("div",{className:"IroWheelLightness",style:Object.assign({},a,{background:"#000",opacity:1-o.v/100})}),Dt("div",{className:"IroWheelBorder",style:Object.assign({},a,Ue(t))}),i.filter((function(t){return t!==r})).map((function(e){return Dt(Fe,{isActive:!1,index:e.index,fill:e.hslString,r:t.handleRadius,url:t.handleSvg,props:t.handleProps,x:s[e.index].x,y:s[e.index].y})})),Dt(Fe,{isActive:!0,index:r.index,fill:r.hslString,r:t.activeHandleRadius||t.handleRadius,url:t.handleSvg,props:t.handleProps,x:s[r.index].x,y:s[r.index].y}))}))}var Ke=function(t){function e(e){var i=this;t.call(this,e),this.colors=[],this.inputActive=!1,this.events={},this.activeEvents={},this.deferredEvents={},this.id=e.id,(e.colors.length>0?e.colors:[e.color]).forEach((function(t){return i.addColor(t)})),this.setActiveColor(0),this.state=Object.assign({},e,{color:this.color,colors:this.colors,layout:e.layout})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.addColor=function(t,e){void 0===e&&(e=this.colors.length);var i=new xe(t,this.onColorChange.bind(this));this.colors.splice(e,0,i),this.colors.forEach((function(t,e){return t.index=e})),this.state&&this.setState({colors:this.colors}),this.deferredEmit("color:init",i)},e.prototype.removeColor=function(t){var e=this.colors.splice(t,1)[0];e.unbind(),this.colors.forEach((function(t,e){return t.index=e})),this.state&&this.setState({colors:this.colors}),e.index===this.color.index&&this.setActiveColor(0),this.emit("color:remove",e)},e.prototype.setActiveColor=function(t){this.color=this.colors[t],this.state&&this.setState({color:this.color}),this.emit("color:setActive",this.color)},e.prototype.setColors=function(t,e){var i=this;void 0===e&&(e=0),this.colors.forEach((function(t){return t.unbind()})),this.colors=[],t.forEach((function(t){return i.addColor(t)})),this.setActiveColor(e),this.emit("color:setAll",this.colors)},e.prototype.on=function(t,e){var i=this,n=this.events;(Array.isArray(t)?t:[t]).forEach((function(t){(n[t]||(n[t]=[])).push(e),i.deferredEvents[t]&&(i.deferredEvents[t].forEach((function(t){e.apply(null,t)})),i.deferredEvents[t]=[])}))},e.prototype.off=function(t,e){var i=this;(Array.isArray(t)?t:[t]).forEach((function(t){var n=i.events[t];n&&n.splice(n.indexOf(e),1)}))},e.prototype.emit=function(t){for(var e=this,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];var r=this.activeEvents,o=!!r.hasOwnProperty(t)&&r[t];if(!o){r[t]=!0;var s=this.events[t]||[];s.forEach((function(t){return t.apply(e,i)})),r[t]=!1}},e.prototype.deferredEmit=function(t){for(var e,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];var r=this.deferredEvents;(e=this).emit.apply(e,[t].concat(i)),(r[t]||(r[t]=[])).push(i)},e.prototype.setOptions=function(t){this.setState(t)},e.prototype.resize=function(t){this.setOptions({width:t})},e.prototype.reset=function(){this.colors.forEach((function(t){return t.reset()})),this.setState({colors:this.colors})},e.prototype.onMount=function(t){this.el=t,this.deferredEmit("mount",this)},e.prototype.onColorChange=function(t,e){this.setState({color:this.color}),this.inputActive&&(this.inputActive=!1,this.emit("input:change",t,e)),this.emit("color:change",t,e)},e.prototype.emitInputEvent=function(t,e){0===t?this.emit("input:start",this.color,e):1===t?this.emit("input:move",this.color,e):2===t&&this.emit("input:end",this.color,e)},e.prototype.render=function(t,e){var i=this,n=e.layout;return Array.isArray(n)||(n=[{component:qe},{component:ze}],e.transparency&&n.push({component:ze,options:{sliderType:"alpha"}})),Dt("div",{class:"IroColorPicker",id:e.id,style:{display:e.display}},n.map((function(t,n){var r=t.component,o=t.options;return Dt(r,Object.assign({},e,o,{ref:void 0,onInput:i.emitInputEvent.bind(i),parent:i,index:n}))})))},e}(Ft);Ke.defaultProps=Object.assign({},{width:300,height:300,color:"#fff",colors:[],padding:6,layoutDirection:"vertical",borderColor:"#fff",borderWidth:0,handleRadius:8,activeHandleRadius:null,handleSvg:null,handleProps:{x:0,y:0},wheelLightness:!0,wheelAngle:0,wheelDirection:"anticlockwise",sliderSize:null,sliderMargin:12,boxHeight:null},{colors:[],display:"block",id:null,layout:"default",margin:null});var Ge,Je,Ze,Xe=((Je=function(t,e){var i,n=document.createElement("div");function r(){var e=t instanceof Element?t:document.querySelector(t);e.appendChild(i.base),i.onMount(e)}return function(t,e,i){var n,r,o;Pt.__p&&Pt.__p(t,e),r=(n=i===It)?null:i&&i.__k||e.__k,t=Dt(Bt,null,[t]),o=[],Qt(e,n?e.__k=t:(i||e).__k=t,r||Mt,Mt,void 0!==e.ownerSVGElement,i&&!n?[i]:r?null:Ht.slice.call(e.childNodes),o,!1,i||Mt,n),te(o,t)}(Dt(Ge,Object.assign({},{ref:function(t){return i=t}},e)),n),"loading"!==document.readyState?r():document.addEventListener("DOMContentLoaded",r),i}).prototype=(Ge=Ke).prototype,Object.assign(Je,Ge),Je.__component=Ge,Je);!function(t){t.version="5.5.2",t.Color=xe,t.ColorPicker=Xe,function(t){t.h=Dt,t.ComponentBase=Be,t.Handle=Fe,t.Slider=ze,t.Wheel=qe,t.Box=Ve}(t.ui||(t.ui={}))}(Ze||(Ze={}));var Ye=Ze;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qe=window,ti=Qe.ShadowRoot&&(void 0===Qe.ShadyCSS||Qe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol(),new WeakMap;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ei(t){return class extends t{createRenderRoot(){const t=this.constructor,{registry:e,elementDefinitions:i,shadowRootOptions:n}=t;i&&!e&&(t.registry=new CustomElementRegistry,Object.entries(i).forEach(([e,i])=>t.registry.define(e,i)));const r=this.renderOptions.creationScope=this.attachShadow({...n,customElements:t.registry});return((t,e)=>{ti?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style"),n=Qe.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)})})(r,this.constructor.elementStyles),r}}}var ii=l`
  .IroSlider {
    display: none !important;
  }

  .light-entity-card {
    padding: 16px;
  }

  .light-entity-child-card {
    box-shadow: none !important;
    padding: 0 !important;
  }

  .light-entity-card.group {
    padding-bottom: 5;
    padding-top: 0;
  }

  .ha-slider-full-width ha-slider {
    width: 100%;
  }

  .percent-slider {
    color: var(--primary-text-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .light-entity-card__header {
    display: flex;
    justify-content: space-between;
    @apply --paper-font-headline;
    line-height: 40px;
    color: var(--primary-text-color);
  }

  .group .light-entity-card__header {
  }

  .light-entity-card-sliders > div {
    margin-top: 10px;
  }

  .group .light-entity-card-sliders > div {
    margin-top: 0px;
  }

  .light-entity-card__toggle {
    display: flex;
    cursor: pointer;
  }

  .light-entity-card__color-picker {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }

  .light-entity-card-color_temp {
    background-image: var(--ha-slider-background);
  }

  .light-entity-card-effectlist {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .group .light-entity-card-effectlist {
    padding-bottom: 20px;
  }

  .light-entity-card-center {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .hidden {
    display: none;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,ni={shorten_cards:!1,consolidate_entities:!1,child_card:!1,hide_header:!1,show_header_icon:!1,header:"",color_wheel:!0,persist_features:!1,brightness:!0,color_temp:!0,white_value:!0,color_picker:!0,speed:!0,intensity:!0,force_features:!1,show_slider_percent:!1,full_width_sliders:!1,brightness_icon:"weather-sunny",white_icon:"file-word-box",temperature_icon:"thermometer",speed_icon:"speedometer",intensity_icon:"transit-connection-horizontal"};var ri=l`
  .entities {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
  }

  .entities ha-formfield {
    display: block;
    margin-bottom: 10px;
    margin-left: 10px;
  }

  .checkbox-options {
    display: flex;
  }

  mwc-select {
    width: 100%;
  }

  .checkbox-options ha-formfield,
  .entities mwc-switch,
  .entities ha-form-string {
    padding-right: 2%;
    width: 48%;
  }

  .checkbox-options ha-formfield {
    margin-top: 10px;
  }

  .overall-config {
    margin-bottom: 20px;
  }
`;var oi=(t,e)=>t.reduce((t,i)=>(i.defineId?t[i.defineId]=i:i.promise.then(t=>{void 0===e.registry.get(i.name)&&e.registry.define(i.name,t)}),t),{});var si=t=>({name:t,promise:customElements.whenDefined(t).then(()=>customElements.get(t))});const ai=(t,e,i={},n={})=>{const r=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return r.detail=i,t.dispatchEvent(r),r};class li extends(ei(Ct)){static get elementDefinitions(){return oi([si("ha-checkbox"),si("ha-formfield"),si("ha-form-string"),si("ha-select"),si("mwc-list-item")],li)}static get styles(){return ri}static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config={...ni,...t}}get entityOptions(){const t=Object.keys(this.hass.states).filter(t=>["switch","light","group"].includes(t.substr(0,t.indexOf("."))));return t.sort(),t}firstUpdated(){this._firstRendered=!0}render(){if(!this.hass)return Q``;let{header:t}=this._config;if(!t&&this._config.entity){let e=this._config.entity.split(".")[1]||"";e&&(e=e.charAt(0).toUpperCase()+e.slice(1),t=e)}const e=this.entityOptions.map(t=>Q`<mwc-list-item value="${t}" ?selected=${t===this._config.entity}>${t}</mwc-list-item>`);return Q`
      <div class="card-config">

        <div class=overall-config'>
          <ha-form-string
            .schema=${{name:"header",type:"string"}}
            label="Header"
            .data="${t}"
            .configValue="${"header"}"
            @changed="${this.configChanged}"
          ></ha-form-string>
        </div>

        <div class='entities'>
          <ha-select
            label="Entity"
            @selected="${this.configChanged}"
            @closed="${t=>t.stopPropagation()}"
            .configValue="${"entity"}"
          >
            ${e}
          </ha-select>
          <ha-form-string
            .schema=${{name:"brightness_icon",type:"string"}}
            label="Brightness Icon"
            .data="${this._config.brightness_icon}"
            .configValue="${"brightness_icon"}"
            @changed="${this.configChanged}"
          ></ha-form-string>
        </div>

        <div class='entities'>
         <ha-form-string
           .schema=${{name:"white_icon",type:"string"}}
           label="White Icon"
            .data="${this._config.white_icon}"
            .configValue="${"white_icon"}"
            @changed="${this.configChanged}"
          ></ha-form-string>
          <ha-form-string
            .schema=${{name:"temperature_icon",type:"string"}}
            label="Temperature Icon"
            .data="${this._config.temperature_icon}"
            .configValue="${"temperature_icon"}"
            @changed="${this.configChanged}"
          ></ha-form-string>
        </div>

        <div class='overall-config'>
          <div class='checkbox-options'>
            <ha-formfield label="Show Color Wheel">
              <ha-checkbox
                @change="${this.checkboxConfigChanged}"
                .checked=${this._config.color_wheel}
                .value="${"color_wheel"}"
              ></ha-checkbox>
            </ha-formfield>
            <ha-formfield label="Shorten Cards">
              <ha-checkbox
                @change="${this.checkboxConfigChanged}"
                .checked=${this._config.shorten_cards}
                .value="${"shorten_cards"}"
              ></ha-checkbox>
            </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Persist Features">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.persist_features}
                  .value="${"persist_features"}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show Brightness">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.brightness}
                  .value="${"brightness"}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Show Color Temp">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.color_temp}
                  .value="${"color_temp"}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show White Value">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.white_value}
                  .value="${"white_value"}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Show Speed">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.speed}
                  .value="${"speed"}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show Intensity">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.intensity}
                  .value="${"intensity"}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Show Color Picker">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.color_picker}
                  .value="${"color_picker"}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show Effects List">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.effects_list}
                  .value="${"effects_list"}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Full Width Sliders">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.full_width_sliders}
                  .value="${"full_width_sliders"}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show Slider Percent">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.show_slider_percent}
                  .value="${"show_slider_percent"}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Hide Header">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.hide_header}
                  .value="${"hide_header"}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Show Header Icon">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.show_header_icon}
                  .value="${"show_header_icon"}"
                ></ha-checkbox>
              </ha-formfield>
              <ha-formfield label="Child Card">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.child_card}
                  .value="${"child_card"}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
              <ha-formfield label="Force Features">
                <ha-checkbox
                  @change="${this.checkboxConfigChanged}"
                  .checked=${this._config.force_features}
                  .value="${"force_features"}"
                ></ha-checkbox>
              </ha-formfield>
            </div>

            <div class='checkbox-options'>
            <ha-formfield label="Consolidate Entities">
              <ha-checkbox
                @change="${this.checkboxConfigChanged}"
                .checked=${this._config.consolidate_entities}
                .value="${"consolidate_entities"}"
              ></ha-checkbox>
            </ha-formfield>
          </div>
          </div>
      </div>
    `}configChanged(t){if(!this._config||!this.hass||!this._firstRendered)return;const{target:{configValue:e,value:i},detail:{value:n}}=t;this._config=null!=n?{...this._config,[e]:n}:{...this._config,[e]:i},ai(this,"config-changed",{config:this._config})}checkboxConfigChanged(t){if(!this._config||!this.hass||!this._firstRendered)return;const{target:{value:e,checked:i}}=t;this._config={...this._config,[e]:i},ai(this,"config-changed",{config:this._config})}}var ci=i(0);customElements.define("light-entity-card-editor",li),console.info("light-entity-card v"+ci.version);class hi extends(ei(Ct)){static get elementDefinitions(){return oi([si("ha-card"),si("more-info-light"),si("ha-switch"),si("ha-icon"),si("state-badge"),si("ha-slider"),si("ha-color-picker"),si("ha-select"),si("mwc-list-item")],hi)}static get properties(){return{hass:{},config:{}}}async firstUpdated(){this.setColorWheels(),this._firstUpdate=!0}async updated(){this.setColorWheels()}setColorWheels(){if(!this._shownStateObjects)return;const t=this.getColorPickerWidth();for(const e of this._shownStateObjects){const i=this.renderRoot.getElementById("picker-"+e.entity_id);if(!i)continue;i.innerHTML="";let n={h:0,s:0,l:50};if(e.attributes.hs_color){n={h:parseInt(e.attributes.hs_color[0]),s:parseInt(e.attributes.hs_color[1]),l:50}}new Ye.ColorPicker(i,{sliderSize:0,color:n,width:t,wheelLightness:!1}).on("input:end",t=>this.setColorPicker(t.hsl,e))}}getColorPickerWidth(){const t=this.shadowRoot.querySelector(".light-entity-card").offsetWidth,e=this.config.shorten_cards,i=t-(e?100:50),n=e?200:300;return n>i?i:n}setConfig(t){if(!t.entity)throw Error("entity required.");this.config={...ni,...t}}static async getConfigElement(){return document.createElement("light-entity-card-editor")}static get featureNames(){return{brightness:1,colorTemp:2,effectList:4,color:16,whiteValue:128}}static get cmdToggle(){return{on:"turn_on",off:"turn_off"}}static get entityLength(){return{light:10,switch:1}}getCardSize(){if(!this.config||!this.__hass||!this.__hass.states[this.config.entity])return 1;let t=0;const e=this.__hass.states[this.config.entity];return Array.isArray(e.attributes.entity_id)?e.attributes.entity_id.forEach(e=>t+=this.getEntityLength(e)):t+=this.getEntityLength(e.attributes.entity_id),this.config.group&&(t*=.8),parseInt(t,1)}getEntityLength(t){return/^light\./.test(t)?hi.entityLength.light:/^switch\./.test(t)?hi.entityLength.switch:0}get styles(){return ii}get language(){return this.__hass.resources[this.__hass.language]}isEntityOn(t){return"on"===t.state}render(){const t=this.hass.states[this.config.entity];if(!t)return Q`
        <style>
          ${this.styles}
        </style>
        <ha-card> ${"Invalid entity: "+this.config.entity} </ha-card>
      `;this._stateObjects=this.getEntitiesToShow(t),this.config.consolidate_entities?this._shownStateObjects=[t]:this._shownStateObjects=[...this._stateObjects];const e=this._shownStateObjects.reduce((t,e)=>Q`${t}${this.createEntityTemplate(e)}`,""),i=`light-entity-card ${this.config.shorten_cards?" group":""} ${this.config.child_card?" light-entity-child-card":""}`;return setTimeout(()=>{this.setColorWheels()},100),Q`
      <style>
        ${this.styles}
      </style>
      <ha-card class="${i}">
        ${e}
      </ha-card>
    `}getEntitiesToShow(t){return t.attributes.entity_id&&Array.isArray(t.attributes.entity_id)?t.attributes.entity_id.map(t=>this.hass.states[t]).filter(Boolean):[t]}createEntityTemplate(t){const e=this.config.full_width_sliders?"ha-slider-full-width":"";return Q`
      ${this.createHeader(t)}
      <div class="light-entity-card-sliders ${e}">
        ${this.createBrightnessSlider(t)} ${this.createSpeedSlider(t)}
        ${this.createIntensitySlider(t)} ${this.createColorTemperature(t)}
        ${this.createWhiteValue(t)}
      </div>
      ${this.createColorPicker(t)} ${this.createEffectList(t)}
    `}createHeader(t){if(this.config.hide_header)return Q``;const e=this.config.header||t.attributes.friendly_name||t.entity_id;return Q`
      <div class="light-entity-card__header">
        ${this.showHeaderIcon(t)}
        <div class="light-entity-card__title">${e}</div>
        <div class="light-entity-card-toggle">
          <ha-switch .checked=${this.isEntityOn(t)} @change=${e=>this.setToggle(e,t)}></ha-switch>
        </div>
      </div>
    `}showHeaderIcon(t){return this.config.show_header_icon?Q`
      <div class="icon-container">
        <state-badge .stateObj=${t}></state-badge>
      </div>
    `:Q``}createBrightnessSlider(t){return!1===this.config.brightness||this.dontShowFeature("brightness",t)?Q``:Q`
      <div class="control light-entity-card-center">
        <div class="icon-container">
          <ha-icon icon="hass:${this.config.brightness_icon}"></ha-icon>
        </div>
        <ha-slider
          .value="${t.attributes.brightness||0}"
          @change="${e=>this._setValue(e,t,"brightness")}"
          min="1"
          max="255"
        ></ha-slider>
        ${this.showPercent(t.attributes.brightness,0,254)}
      </div>
    `}createSpeedSlider(t){return!1===this.config.speed||this.dontShowFeature("speed",t)?Q``:Q`
      <div class="control light-entity-card-center">
        <div class="icon-container">
          <ha-icon icon="hass:${this.config.speed_icon}"></ha-icon>
        </div>
        <ha-slider
          .value="${t.attributes.speed||0}"
          @change="${e=>this._setValue(e,t,"speed")}"
          min="1"
          max="255"
        ></ha-slider>
        ${this.showPercent(t.attributes.speed,0,254)}
      </div>
    `}createIntensitySlider(t){return!1===this.config.speed||this.dontShowFeature("intensity",t)?Q``:Q`
      <div class="control light-entity-card-center">
        <div class="icon-container">
          <ha-icon icon="hass:${this.config.intensity_icon}"></ha-icon>
        </div>
        <ha-slider
          .value="${t.attributes.intensity||0}"
          @change="${e=>this._setValue(e,t,"intensity")}"
          min="1"
          max="255"
        ></ha-slider>
        ${this.showPercent(t.attributes.intensity,0,254)}
      </div>
    `}showPercent(t,e,i){if(!this.config.show_slider_percent)return Q``;let n=parseInt(100*(t-e)/(i-e),0);return isNaN(n)&&(n=0),Q` <div class="percent-slider">${n}%</div> `}createColorTemperature(t){if(!1===this.config.color_temp)return Q``;if(this.dontShowFeature("colorTemp",t))return Q``;const e=this.showPercent(t.attributes.color_temp,t.attributes.min_mireds-1,t.attributes.max_mireds-1);return Q`
      <div class="control light-entity-card-center">
        <div class="icon-container">
          <ha-icon icon="hass:${this.config.temperature_icon}"></ha-icon>
        </div>
        <ha-slider
          class="light-entity-card-color_temp"
          min="${t.attributes.min_mireds}"
          max="${t.attributes.max_mireds}"
          .value=${t.attributes.color_temp||0}
          @change="${e=>this._setValue(e,t,"color_temp")}"
        >
        </ha-slider>
        ${e}
      </div>
    `}createWhiteValue(t){return!1===this.config.white_value||this.dontShowFeature("whiteValue",t)?Q``:Q`
      <div class="control light-entity-card-center">
        <div class="icon-container">
          <ha-icon icon="hass:${this.config.white_icon}"></ha-icon>
        </div>
        <ha-slider
          max="255"
          .value="${t.attributes.white_value||0}"
          @change="${e=>this._setValue(e,t,"white_value")}"
        >
        </ha-slider>
        ${this.showPercent(t.attributes.white_value,0,254)}
      </div>
    `}createEffectList(t){if(!1===this.config.effects_list)return Q``;if(!this.config.persist_features&&!this.isEntityOn(t))return Q``;let e=t.attributes.effect_list||[];if(this.config.effects_list&&Array.isArray(this.config.effects_list))e=this.config.effects_list;else if(this.config.effects_list&&this.hass.states[this.config.effects_list]){const t=this.hass.states[this.config.effects_list];e=t.attributes&&t.attributes.options||[]}else if(this.dontShowFeature("effectList",t))return Q``;const i=e.map(e=>this.createListItem(t,e)),n=this.language["ui.card.light.effect"];return Q`
      <div class="control light-entity-card-center light-entity-card-effectlist">
        <ha-select
          @closed="${t=>t.stopPropagation()}"
          @selected=${e=>this.setEffect(e,t)}
          label="${n}"
        >
          ${i}
        </ha-select>
      </div>
    `}createListItem(t,e){return Q`<mwc-list-item value="${e}" ?selected=${e===t.attributes.effect}
      >${e}</mwc-list-item
    >`}createColorPicker(t){return!1===this.config.color_picker||this.dontShowFeature("color",t)?Q``:Q`
      <div class="light-entity-card__color-picker">
        <div id="picker-${t.entity_id}"></div>
      </div>
    `}dontShowFeature(t,e){if(this.config.force_features)return!1;if("speed"===t&&"speed"in e.attributes)return!0;if("intensity"===t&&"intensity"in e.attributes)return!0;let i=hi.featureNames[t]&e.attributes.supported_features;const n=e.attributes.supported_color_modes||[];if(!i)switch(t){case"brightness":if(i=Object.prototype.hasOwnProperty.call(e.attributes,"brightness"),!i){const t=["hs","rgb","rgbw","rgbww","white","brightness","color_temp","xy"];i=[...new Set(n.filter(e=>t.includes(e)))].length>0}break;case"colorTemp":if(n){const t=["color_temp"];i=[...new Set(n.filter(e=>t.includes(e)))].length>0}break;case"effectList":i=e.attributes.effect_list&&e.attributes.effect_list.length;break;case"color":if(!i){const t=["hs","rgb","rgbw","rgbww","xy"];i=[...new Set(n.filter(e=>t.includes(e)))].length>0}break;case"whiteValue":i=Object.prototype.hasOwnProperty.call(e.attributes,"white_value");break;default:i=!1}return!i||(!this.config.persist_features&&!this.isEntityOn(e)||void 0)}setColorPicker(t,e){this.callEntityService({hs_color:[t.h,t.s]},e)}_setValue(t,e,i){const n=parseInt(t.target.value,0);isNaN(n)||parseInt(e.attributes[i],0)===n||this.callEntityService({[i]:n},e)}setToggle(t,e){const i=this.isEntityOn(e)?hi.cmdToggle.off:hi.cmdToggle.on;this.callEntityService({},e,i)}setEffect(t,e){t.target.value&&this.callEntityService({effect:t.target.value},e)}callEntityService(t,e,i){if(!this._firstUpdate)return;let n=e.entity_id.split(".")[0];"group"===n&&(n="homeassistant"),this.hass.callService(n,i||hi.cmdToggle.on,{entity_id:e.entity_id,...t})}}customElements.define("light-entity-card",hi),window.customCards=window.customCards||[],window.customCards.push({type:"light-entity-card",name:"Light Entity Card",description:"Control lights and switches"})}]);
//# sourceMappingURL=light-entity-card.js.map
