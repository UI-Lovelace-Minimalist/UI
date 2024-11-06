function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class o{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=s.get(this.cssText);return e&&void 0===t&&(s.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",i))(e)})(t):t;var a;const l=window.trustedTypes,h=l?l.emptyScript:"",d=window.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:u};class v extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var s,o;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:c.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,e){var i,s,o;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),a=t.converter,l=null!==(o=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==o?o:c.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var f;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:v}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.3.2");const _=globalThis.trustedTypes,m=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,$="?"+g,y=`<${$}>`,b=document,w=(t="")=>b.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,x=/>/g,P=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,U=/"/g,T=/^(?:script|style|textarea|title)$/i,M=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),H=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),O=new WeakMap,N=b.createTreeWalker(b,129,null,!1),L=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=E;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===E?"!--"===l[1]?r=C:void 0!==l[1]?r=x:void 0!==l[2]?(T.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=P):void 0!==l[3]&&(r=P):r===P?">"===l[0]?(r=null!=o?o:E,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?P:'"'===l[3]?U:k):r===U||r===k?r=P:r===C||r===x?r=E:(r=P,o=void 0);const c=r===P&&t[e+1].startsWith("/>")?" ":"";n+=r===E?i+y:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+g+c):i+g+(-2===h?(s.push(void 0),e):c)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(a):a,s]};class I{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,h]=L(t,e);if(this.el=I.createElement(l,i),N.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=N.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(g)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(g),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?W:"@"===e[1]?J:B})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(T.test(s.tagName)){const t=s.textContent.split(g),e=t.length-1;if(e>0){s.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],w()),N.nextNode(),a.push({type:2,index:++o});s.append(t[e],w())}}}else if(8===s.nodeType)if(s.data===$)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(g,t+1));)a.push({type:7,index:o}),t+=g.length-1}o++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,s){var o,n,r,a;if(e===H)return e;let l=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const h=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,s)),e}class D{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(i,!0);N.currentNode=o;let n=N.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new j(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new K(n,this,t)),this.v.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=N.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class j{constructor(t,e,i,s){var o;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),A(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==H&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==R&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k(b.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=I.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new D(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=O.get(t.strings);return void 0===e&&O.set(t.strings,e=new I(t)),e}S(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new j(this.M(w()),this.M(w()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,i,s,o){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=z(this,t,e,0),n=!A(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=z(this,s[i+r],e,r),a===H&&(a=this._$AH[r]),n||(n=!A(a)||a!==this._$AH[r]),a===R?t=R:t!==R&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.C(t)}C(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends B{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===R?void 0:t}}const V=_?_.emptyScript:"";class W extends B{constructor(){super(...arguments),this.type=4}C(t){t&&t!==R?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class J extends B{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=z(this,t,e,0))&&void 0!==i?i:R)===H)return;const s=this._$AH,o=t===R&&s!==R||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==R&&(s===R||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const Z=window.litHtmlPolyfillSupport;var F,G;null==Z||Z(I,j),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.2.5");class Q extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new j(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return H}}Q.finalized=!0,Q._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:Q});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:Q}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.2.0");const Y=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function tt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Y(t,e)}var et;null===(et=window.HTMLSlotElement)||void 0===et||et.prototype.assignedElements;const it="lovelace-player-device-id";function st(){if(!localStorage[it]){const t=()=>Math.floor(1e5*(1+Math.random())).toString(16).substring(1);window.fully&&"function"==typeof fully.getDeviceId?localStorage[it]=fully.getDeviceId():localStorage[it]=`${t()}${t()}-${t()}${t()}`}return localStorage[it]}let ot=st();const nt=new URLSearchParams(window.location.search);var rt;function at(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}function lt(t){return!!String(t).includes("{%")||(!!String(t).includes("{{")||void 0)}nt.get("deviceID")&&null!==(rt=nt.get("deviceID"))&&("clear"===rt?localStorage.removeItem(it):localStorage[it]=rt,ot=st()),window.cardMod_template_cache=window.cardMod_template_cache||{};const ht=window.cardMod_template_cache;async function dt(t,e,i){const s=at().connection,o=JSON.stringify([e,i]);let n=ht[o];n?(n.callbacks.has(t)||ct(t),t(n.value),n.callbacks.add(t)):(ct(t),t(""),i=Object.assign({user:at().user.name,browser:ot,hash:location.hash.substr(1)||""},i),ht[o]=n={template:e,variables:i,value:"",callbacks:new Set([t]),unsubscribe:s.subscribeMessage((t=>function(t,e){const i=ht[t];i&&(i.value=e.result,i.callbacks.forEach((t=>t(e.result))))}(o,t)),{type:"render_template",template:e,variables:i})})}async function ct(t){let e;for(const[i,s]of Object.entries(ht))if(s.callbacks.has(t)){s.callbacks.delete(t),0==s.callbacks.size&&(e=s.unsubscribe,delete ht[i]);break}e&&await(await e)()}var ut="1.9.5";class pt extends Q{constructor(){super(...arguments),this.cardsInitialized=!1,this.templateRenderer=t=>{this._tmpl=t}}async setConfig(t){if(window.deviceID=ot,this._config=t,this.state=void 0,this.classList.add("no-match"),this.cards={},this.buildCards(),"hash"===t.entity&&(window.addEventListener("location-changed",(()=>this.updated(new Map))),window.addEventListener("hashchange",(()=>this.updated(new Map)))),"mediaquery"===t.entity)for(const e in t.states){window.matchMedia(e).addEventListener("change",(()=>this.update_state()))}if("template"===t.entity||lt(t.entity)){const e=lt(t.entity)?t.entity:t.template;dt(this.templateRenderer,e,{config:t})}this.style.setProperty("display","none")}connectedCallback(){if(super.connectedCallback(),this._config){for(const t in this.cards)this.cards[t].hass=this._hass;("template"===this._config.entity||lt(this._config.entity))&&dt(this.templateRenderer,lt(this._config.entity)?this._config.entity:this._config.template,{config:this._config})}}disconnectedCallback(){super.disconnectedCallback(),ct(this.templateRenderer)}async buildCards(){const t=await window.loadCardHelpers();for(let e in this._config.states)this.cards[e]=await t.createCardElement(this._config.states[e]),this.cards[e].hass=this._hass;this.cardsInitialized=!0,this.update_state(),this._updateVisibility()}update_state(){var t,e,i,s,o,n;if(!this.cardsInitialized)return;let r;switch(this._config.entity){case"template":r=this._tmpl;break;case"user":r=null===(e=null===(t=this._hass)||void 0===t?void 0:t.user)||void 0===e?void 0:e.name;break;case"group":r=(null===(s=null===(i=this._hass)||void 0===i?void 0:i.user)||void 0===s?void 0:s.is_admin)?"admin":"user";break;case"deviceID":case"browser":r=ot;break;case"hash":r=location.hash.substring(1);break;case"mediaquery":for(const t in this.cards)if(window.matchMedia(t).matches){r=t;break}break;default:r=lt(this._config.entity)?this._tmpl:null===(n=null===(o=this._hass)||void 0===o?void 0:o.states[this._config.entity])||void 0===n?void 0:n.state}void 0!==r&&this.cards.hasOwnProperty(r)||(r=this._config.default),this.state=r}set hass(t){this._hass=t;for(const e in this.cards)this.cards[e].hass=t}_updateVisibility(){this.cards[this.state]?(this.classList.remove("no-match"),this.style.setProperty("display",""),this.removeAttribute("hidden")):(this.classList.add("no-match"),this.style.setProperty("display","none"),this.setAttribute("hidden",""))}updated(t){if(t.has("state")){const e=t.get("state");this.cards[e]&&(this.cards[e].parentElement.classList.remove("visible"),this._config.transition&&(this.shadowRoot.querySelector("#root").classList.add("transition"),this.cards[e].parentElement.classList.add("out"),window.setTimeout((()=>{this.cards[e].parentElement.classList.remove("out"),window.setTimeout((()=>{this.shadowRoot.querySelector("#root").classList.remove("transition")}),this._config.transition_time||500)}),this._config.transition_time||500))),this.cards[this.state]&&this.cards[this.state].parentElement.classList.add("visible"),this._updateVisibility()}else this.update_state()}render(){return M`
      <div
        id="root"
        class="${this._config.transition}"
        style="
        transition-duration: ${this._config.transition_time||500}ms;
        transition-delay: ${this._config.transition_time||500}ms;
        "
      >
        ${Object.keys(this.cards).map((t=>M` <div>${this.cards[t]}</div> `))}
      </div>
    `}async getCardSize(){var t;let e=1;for(const i in this.cards)(null===(t=this.cards[i])||void 0===t?void 0:t.getCardSize)&&(e=Math.max(e,await this.cards[i].getCardSize()));return e}static get styles(){return n`
      :host {
        perspective: 1000px;
      }
      :host(.no-match) {
        display: none;
      }
      #root {
        margin: -4px;
        padding: 4px;
        display: grid;
        grid-template-rows: auto 0px;
        overflow: clip visible;
      }
      #root.transition {
        overflow: hidden;
      }
      #root * {
        grid-column: 1;
        grid-row: 2;
        overflow: hidden;
        min-width: 0;
      }
      #root *.visible,
      #root *.out {
        grid-row: 1;
        overflow: visible;
      }

      #root.slide-down *,
      #root.slide-up *,
      #root.slide-left *,
      #root.slide-right * {
        transition-property: transform;
        transition-timing-function: linear;
        transition-duration: inherit;
        transform: translate(0, -110%);
      }
      #root.slide-up * {
        transform: translate(0, 110%);
      }
      #root.slide-left * {
        transform: translate(110%, 0);
      }
      #root.slide-right * {
        transform: translate(-110%, 0);
      }
      #root.slide-down .visible,
      #root.slide-up .visible,
      #root.slide-left .visible,
      #root.slide-right .visible {
        transform: translate(0%);
      }
      #root.slide-down .out {
        transform: translate(0, 110%);
      }
      #root.slide-up .out {
        transform: translate(0, -110%);
      }
      #root.slide-left .out {
        transform: translate(-110%);
      }
      #root.slide-right .out {
        transform: translate(110%);
      }

      #root.swap-down *,
      #root.swap-up *,
      #root.swap-left *,
      #root.swap-right * {
        transition-property: transform;
        transition-timing-function: linear;
        transition-duration: inherit;
        transform: translate(0, 110%);
      }
      #root.swap-up * {
        transform: translate(0, -110%);
      }
      #root.swap-left * {
        transform: translate(-110%, 0);
      }
      #root.swap-right * {
        transform: translate(110%, 0);
      }
      #root.swap-down .visible,
      #root.swap-up .visible,
      #root.swap-left .visible,
      #root.swap-right .visible {
        transition-delay: inherit;
        transform: translate(0%);
      }

      #root.flip,
      #root.flip-x,
      #root.flip-y {
        position: relative;
        perspective: 1000px;
      }
      #root.flip *,
      #root.flip-x *,
      #root.flip-y * {
        transform: rotate3d(0, 1, 0, -180deg);
        transition-property: transform;
        transition-timing-function: linear;
        transition-duration: inherit;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        z-index: 100;
      }
      #root.flip-y * {
        transform: rotate3d(1, 0, 0, -180deg);
      }
      #root.flip .visible,
      #root.flip-x .visible,
      #root.flip-y .visible {
        backface-visibility: hidden;
        transform: rotate3d(0, 0, 0, 0deg);
      }
      #root.flip .out,
      #root.flip-x .out,
      #root.flip-y .out {
        pointer-events: none;
        transform: rotate3d(0, 1, 0, 180deg);
      }
      #root.flip-y .out {
        transform: rotate3d(1, 0, 0, 180deg);
      }
    `}}t([tt()],pt.prototype,"_config",void 0),t([tt()],pt.prototype,"_hass",void 0),t([tt()],pt.prototype,"state",void 0),t([tt()],pt.prototype,"_tmpl",void 0),customElements.get("state-switch")||(customElements.define("state-switch",pt),console.info(`%cSTATE-SWITCH ${ut} IS INSTALLED`,"color: green; font-weight: bold",""));
