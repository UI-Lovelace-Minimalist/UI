(function () {
  "use strict";
  function j(a, b) {
    return (
      b || (b = a.slice(0)),
      Object.freeze(
        Object.defineProperties(a, { raw: { value: Object.freeze(b) } })
      )
    );
  }
  function k(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      b &&
        (d = d.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        })),
        c.push.apply(c, d);
    }
    return c;
  }
  function l(a) {
    for (var b, c = 1; c < arguments.length; c++)
      (b = null == arguments[c] ? {} : arguments[c]),
        c % 2
          ? k(Object(b), !0).forEach(function (c) {
              m(a, c, b[c]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b))
          : k(Object(b)).forEach(function (c) {
              Object.defineProperty(
                a,
                c,
                Object.getOwnPropertyDescriptor(b, c)
              );
            });
    return a;
  }
  function m(a, b, c) {
    return (
      b in a
        ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (a[b] = c),
      a
    );
  }
  function n(a, b, c, d, e, f, g) {
    try {
      var h = a[f](g),
        i = h.value;
    } catch (a) {
      return void c(a);
    }
    h.done ? b(i) : Promise.resolve(i).then(d, e);
  }
  function o(a) {
    return function () {
      var b = this,
        c = arguments;
      return new Promise(function (d, e) {
        function f(a) {
          n(h, d, e, f, g, "next", a);
        }
        function g(a) {
          n(h, d, e, f, g, "throw", a);
        }
        var h = a.apply(b, c);
        f(void 0);
      });
    };
  }
  var p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    O,
    P,
    Q,
    R,
    U,
    V,
    W,
    X,
    Y,
    Z,
    aa,
    ba,
    ca,
    da,
    ea,
    fa,
    ga,
    ha,
    ia,
    ja,
    ka,
    la,
    ma,
    na,
    oa,
    pa,
    qa,
    ra,
    sa,
    ta,
    ua,
    va,
    wa,
    xa,
    ya,
    za,
    Aa,
    Ba,
    Ca,
    Da,
    Ea,
    Fa,
    Ga,
    Ha,
    Ia,
    Ja;
  (function (a, b) {
    "object" == typeof exports && "undefined" != typeof module
      ? b()
      : "function" == typeof define && define.amd
      ? define(b)
      : b();
  })(this, function () {
    function Ka(a, b) {
      var c,
        f,
        g,
        j,
        k = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : a,
        m = 3 < arguments.length ? arguments[3] : void 0;
      if (b === $) return b;
      var e =
          void 0 === m
            ? k._$Cu
            : null === (c = k._$Cl) || void 0 === c
            ? void 0
            : c[m],
        p = Ab(b) ? void 0 : b._$litDirective$;
      return (
        (null == e ? void 0 : e.constructor) !== p &&
          (null === (f = null == e ? void 0 : e._$AO) ||
            void 0 === f ||
            f.call(e, !1),
          void 0 === p ? (e = void 0) : ((e = new p(a)), e._$AT(a, k, m)),
          void 0 === m
            ? (k._$Cu = e)
            : ((null !== (g = (j = k)._$Cl) && void 0 !== g
                ? g
                : (j._$Cl = []))[m] = e)),
        void 0 !== e && (b = Ka(a, e._$AS(a, b.values), e, m)),
        b
      );
    }
    function La(a) {
      return class extends a {
        createRenderRoot() {
          var a = this.constructor,
            { registry: b, elementDefinitions: c, shadowRootOptions: d } = a;
          c &&
            !b &&
            ((a.registry = new CustomElementRegistry()),
            Object.entries(c).forEach((b) => {
              var [c, d] = b;
              return a.registry.define(c, d);
            }));
          var e = (this.renderOptions.creationScope = this.attachShadow(
            l(l({}, d), {}, { customElements: a.registry })
          ));
          return nb(e, this.constructor.elementStyles), e;
        }
      };
    }
    function Ma(a, c) {
      function b() {
        this.constructor = a;
      }
      if ("function" != typeof c && null !== c)
        throw new TypeError(
          "Class extends value " + (c + "") + " is not a constructor or null"
        );
      Xb(a, c),
        (a.prototype =
          null === c
            ? Object.create(c)
            : ((b.prototype = c.prototype), new b()));
    }
    function Na(a, b, e, f) {
      var g,
        h = arguments.length,
        c =
          3 > h
            ? b
            : null === f
            ? (f = Object.getOwnPropertyDescriptor(b, e))
            : f;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        c = Reflect.decorate(a, b, e, f);
      else
        for (var j = a.length - 1; 0 <= j; j--)
          (g = a[j]) &&
            (c = (3 > h ? g(c) : 3 < h ? g(b, e, c) : g(b, e)) || c);
      return 3 < h && c && Object.defineProperty(b, e, c), c;
    }
    function Oa(a) {
      var b = "function" == typeof Symbol && Symbol.iterator,
        c = b && a[b],
        d = 0;
      if (c) return c.call(a);
      if (a && "number" == typeof a.length)
        return {
          next: function () {
            return (
              a && d >= a.length && (a = void 0),
              { value: a && a[d++], done: !a }
            );
          },
        };
      throw new TypeError(
        b ? "Object is not iterable." : "Symbol.iterator is not defined."
      );
    }
    function Pa(a) {
      return (b, c) =>
        void 0 === c
          ? bc(a, b)
          : ((a, b, c) => {
              b.constructor.createProperty(c, a);
            })(a, b, c);
    }
    function Qa(a) {
      return Pa(l(l({}, a), {}, { state: !0 }));
    }
    function Ra(a, b) {
      return cc({
        descriptor: (c) => {
          var d = {
            get() {
              var b, c;
              return null !==
                (c =
                  null === (b = this.renderRoot) || void 0 === b
                    ? void 0
                    : b.querySelector(a)) && void 0 !== c
                ? c
                : null;
            },
            enumerable: !0,
            configurable: !0,
          };
          if (b) {
            var e = "symbol" == typeof c ? Symbol() : "__" + c;
            d.get = function () {
              var b, c;
              return (
                void 0 === this[e] &&
                  (this[e] =
                    null !==
                      (c =
                        null === (b = this.renderRoot) || void 0 === b
                          ? void 0
                          : b.querySelector(a)) && void 0 !== c
                      ? c
                      : null),
                this[e]
              );
            };
          }
          return d;
        },
      });
    }
    function Sa(a) {
      var { slot: b, selector: c } = null == a ? {} : a;
      return cc({
        descriptor: () => ({
          get() {
            var d,
              e = "slot" + (b ? "[name=".concat(b, "]") : ":not([name])"),
              f =
                null === (d = this.renderRoot) || void 0 === d
                  ? void 0
                  : d.querySelector(e),
              g = null == f ? [] : dc(f, a);
            return c ? g.filter((a) => a.matches(c)) : g;
          },
          enumerable: !0,
          configurable: !0,
        }),
      });
    }
    function Ta(a, b, c) {
      var d,
        f = a;
      return (
        "object" == typeof a ? ((f = a.slot), (d = a)) : (d = { flatten: b }),
        c
          ? Sa({ slot: f, flatten: b, selector: c })
          : cc({
              descriptor: () => ({
                get() {
                  var a,
                    b,
                    c = "slot" + (f ? "[name=".concat(f, "]") : ":not([name])"),
                    g =
                      null === (a = this.renderRoot) || void 0 === a
                        ? void 0
                        : a.querySelector(c);
                  return null !==
                    (b = null == g ? void 0 : g.assignedNodes(d)) &&
                    void 0 !== b
                    ? b
                    : [];
                },
                enumerable: !0,
                configurable: !0,
              }),
            })
      );
    }
    function Ua(a, b) {
      var c = a.matches || a.webkitMatchesSelector || a.msMatchesSelector;
      return c.call(a, b);
    }
    function Va(a) {
      return {
        addClass: (b) => {
          a.classList.add(b);
        },
        removeClass: (b) => {
          a.classList.remove(b);
        },
        hasClass: (b) => a.classList.contains(b),
      };
    }
    function Wa(a, b, c) {
      if (!a) return { x: 0, y: 0 };
      var d,
        e,
        f = b.x,
        g = b.y,
        h = f + c.left,
        i = g + c.top;
      if ("touchstart" === a.type) {
        var j = a;
        (d = j.changedTouches[0].pageX - h),
          (e = j.changedTouches[0].pageY - i);
      } else {
        var k = a;
        (d = k.pageX - h), (e = k.pageY - i);
      }
      return { x: d, y: e };
    }
    function Xa(a) {
      var b = a.key;
      if (Ec.has(b)) return b;
      var c = Gc.get(a.keyCode);
      return c ? c : Dc.UNKNOWN;
    }
    function Ya() {
      return {
        bufferClearTimeout: 0,
        currentFirstChar: "",
        sortedIndexCursor: 0,
        typeaheadBuffer: "",
      };
    }
    function Za(a, b) {
      for (var c, d = new Map(), e = 0; e < a; e++)
        if (((c = b(e).trim()), !!c)) {
          var f = c[0].toLowerCase();
          d.has(f) || d.set(f, []),
            d.get(f).push({ text: c.toLowerCase(), index: e });
        }
      return (
        d.forEach(function (a) {
          a.sort(function (a, b) {
            return a.index - b.index;
          });
        }),
        d
      );
    }
    function $a(a, b) {
      var c = a.nextChar,
        d = a.focusItemAtIndex,
        e = a.sortedIndexByFirstChar,
        f = a.focusedItemIndex,
        g = a.skipFocus,
        h = a.isItemAtIndexDisabled;
      clearTimeout(b.bufferClearTimeout),
        (b.bufferClearTimeout = setTimeout(function () {
          db(b);
        }, Qc.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS)),
        (b.typeaheadBuffer += c);
      var i;
      return (
        (i = 1 === b.typeaheadBuffer.length ? ab(e, f, h, b) : bb(e, h, b)),
        -1 === i || g || d(i),
        i
      );
    }
    function ab(a, b, c, d) {
      var e = d.typeaheadBuffer[0],
        f = a.get(e);
      if (!f) return -1;
      if (e === d.currentFirstChar && f[d.sortedIndexCursor].index === b) {
        d.sortedIndexCursor = (d.sortedIndexCursor + 1) % f.length;
        var g = f[d.sortedIndexCursor].index;
        if (!c(g)) return g;
      }
      d.currentFirstChar = e;
      var h,
        i = -1;
      for (h = 0; h < f.length; h++)
        if (!c(f[h].index)) {
          i = h;
          break;
        }
      for (; h < f.length; h++)
        if (f[h].index > b && !c(f[h].index)) {
          i = h;
          break;
        }
      return -1 === i
        ? -1
        : ((d.sortedIndexCursor = i), f[d.sortedIndexCursor].index);
    }
    function bb(a, b, c) {
      var d = c.typeaheadBuffer[0],
        e = a.get(d);
      if (!e) return -1;
      var f = e[c.sortedIndexCursor];
      if (0 === f.text.lastIndexOf(c.typeaheadBuffer, 0) && !b(f.index))
        return f.index;
      for (
        var g = (c.sortedIndexCursor + 1) % e.length, h = -1;
        g !== c.sortedIndexCursor;

      ) {
        var i = e[g],
          j = 0 === i.text.lastIndexOf(c.typeaheadBuffer, 0),
          k = !b(i.index);
        if (j && k) {
          h = g;
          break;
        }
        g = (g + 1) % e.length;
      }
      return -1 === h
        ? -1
        : ((c.sortedIndexCursor = h), e[c.sortedIndexCursor].index);
    }
    function cb(a) {
      return 0 < a.typeaheadBuffer.length;
    }
    function db(a) {
      a.typeaheadBuffer = "";
    }
    function eb(a, b) {
      var c = a.event,
        d = a.isTargetListItem,
        e = a.focusedItemIndex,
        f = a.focusItemAtIndex,
        g = a.sortedIndexByFirstChar,
        h = a.isItemAtIndexDisabled,
        i = "ArrowLeft" === Xa(c),
        j = "ArrowUp" === Xa(c),
        k = "ArrowRight" === Xa(c),
        l = "ArrowDown" === Xa(c),
        m = "Home" === Xa(c),
        n = "End" === Xa(c),
        o = "Enter" === Xa(c),
        p = "Spacebar" === Xa(c);
      if (c.ctrlKey || c.metaKey || i || j || k || l || m || n || o) return -1;
      var q = !p && 1 === c.key.length;
      if (q) {
        Sc(c);
        var r = {
          focusItemAtIndex: f,
          focusedItemIndex: e,
          nextChar: c.key.toLowerCase(),
          sortedIndexByFirstChar: g,
          skipFocus: !1,
          isItemAtIndexDisabled: h,
        };
        return $a(r, b);
      }
      if (!p) return -1;
      d && Sc(c);
      var s = d && cb(b);
      if (s) {
        var r = {
          focusItemAtIndex: f,
          focusedItemIndex: e,
          nextChar: " ",
          sortedIndexByFirstChar: g,
          skipFocus: !1,
          isItemAtIndexDisabled: h,
        };
        return $a(r, b);
      }
      return -1;
    }
    function fb(a) {
      return a instanceof Set;
    }
    function gb(a) {
      var b,
        c = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 50;
      return function () {
        var d =
          !(0 < arguments.length && arguments[0] !== void 0) || arguments[0];
        clearTimeout(b),
          (b = setTimeout(() => {
            a(d);
          }, c));
      };
    }
    function hb() {
      var a = this.itemsReadyResolver;
      (this.itemsReady = new Promise((a) => (this.itemsReadyResolver = a))),
        a();
    }
    var ib =
        window.ShadowRoot &&
        (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
        "adoptedStyleSheets" in Document.prototype &&
        "replace" in CSSStyleSheet.prototype,
      jb = Symbol(),
      kb = new Map();
    class e {
      constructor(a, b) {
        if (((this._$cssResult$ = !0), b !== jb))
          throw Error(
            "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
          );
        this.cssText = a;
      }
      get styleSheet() {
        var a = kb.get(this.cssText);
        return (
          ib &&
            void 0 === a &&
            (kb.set(this.cssText, (a = new CSSStyleSheet())),
            a.replaceSync(this.cssText)),
          a
        );
      }
      toString() {
        return this.cssText;
      }
    }
    var n,
      lb = (a) => new e("string" == typeof a ? a : a + "", jb),
      mb = function (a) {
        for (
          var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        var f =
          1 === a.length
            ? a[0]
            : c.reduce(
                (b, c, d) =>
                  b +
                  ((a) => {
                    if (!0 === a._$cssResult$) return a.cssText;
                    if ("number" == typeof a) return a;
                    throw Error(
                      "Value passed to 'css' function must be a 'css' function result: " +
                        a +
                        ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                    );
                  })(c) +
                  a[d + 1],
                a[0]
              );
        return new e(f, jb);
      },
      nb = (a, b) => {
        ib
          ? (a.adoptedStyleSheets = b.map((a) =>
              a instanceof CSSStyleSheet ? a : a.styleSheet
            ))
          : b.forEach((b) => {
              var c = document.createElement("style"),
                d = window.litNonce;
              void 0 !== d && c.setAttribute("nonce", d),
                (c.textContent = b.cssText),
                a.appendChild(c);
            });
      },
      i = ib
        ? (a) => a
        : (a) =>
            a instanceof CSSStyleSheet
              ? ((a) => {
                  var b = "";
                  for (var c of a.cssRules) b += c.cssText;
                  return lb(b);
                })(a)
              : a,
      S = window.trustedTypes,
      ob = S ? S.emptyScript : "",
      pb = window.reactiveElementPolyfillSupport,
      qb = {
        toAttribute(a, b) {
          return (
            b === Boolean
              ? (a = a ? ob : null)
              : b === Object || b === Array
              ? (a = null == a ? a : JSON.stringify(a))
              : void 0,
            a
          );
        },
        fromAttribute(a, b) {
          var c = a;
          switch (b) {
            case Boolean:
              c = null !== a;
              break;
            case Number:
              c = null === a ? null : +a;
              break;
            case Object:
            case Array:
              try {
                c = JSON.parse(a);
              } catch (a) {
                c = null;
              }
          }
          return c;
        },
      },
      rb = (a, b) => b !== a && (b == b || a == a),
      sb = {
        attribute: !0,
        type: String,
        converter: qb,
        reflect: !1,
        hasChanged: rb,
      };
    class h extends HTMLElement {
      constructor() {
        super(),
          (this._$Et = new Map()),
          (this.isUpdatePending = !1),
          (this.hasUpdated = !1),
          (this._$Ei = null),
          this.o();
      }
      static addInitializer(a) {
        var b;
        (null !== (b = this.l) && void 0 !== b) || (this.l = []),
          this.l.push(a);
      }
      static get observedAttributes() {
        this.finalize();
        var a = [];
        return (
          this.elementProperties.forEach((b, c) => {
            var d = this._$Eh(c, b);
            void 0 !== d && (this._$Eu.set(d, c), a.push(d));
          }),
          a
        );
      }
      static createProperty(a) {
        var b =
          1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : sb;
        if (
          (b.state && (b.attribute = !1),
          this.finalize(),
          this.elementProperties.set(a, b),
          !b.noAccessor && !this.prototype.hasOwnProperty(a))
        ) {
          var c = "symbol" == typeof a ? Symbol() : "__" + a,
            d = this.getPropertyDescriptor(a, c, b);
          void 0 !== d && Object.defineProperty(this.prototype, a, d);
        }
      }
      static getPropertyDescriptor(a, b, c) {
        return {
          get() {
            return this[b];
          },
          set(d) {
            var e = this[a];
            (this[b] = d), this.requestUpdate(a, e, c);
          },
          configurable: !0,
          enumerable: !0,
        };
      }
      static getPropertyOptions(a) {
        return this.elementProperties.get(a) || sb;
      }
      static finalize() {
        if (this.hasOwnProperty("finalized")) return !1;
        this.finalized = !0;
        var a = Object.getPrototypeOf(this);
        if (
          (a.finalize(),
          (this.elementProperties = new Map(a.elementProperties)),
          (this._$Eu = new Map()),
          this.hasOwnProperty("properties"))
        ) {
          var b = this.properties,
            c = [
              ...Object.getOwnPropertyNames(b),
              ...Object.getOwnPropertySymbols(b),
            ];
          for (var d of c) this.createProperty(d, b[d]);
        }
        return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
      }
      static finalizeStyles(a) {
        var b = [];
        if (Array.isArray(a)) {
          var c = new Set(a.flat(1 / 0).reverse());
          for (var d of c) b.unshift(i(d));
        } else void 0 !== a && b.push(i(a));
        return b;
      }
      static _$Eh(a, b) {
        var c = b.attribute;
        return !1 === c
          ? void 0
          : "string" == typeof c
          ? c
          : "string" == typeof a
          ? a.toLowerCase()
          : void 0;
      }
      o() {
        var a;
        (this._$Ep = new Promise((a) => (this.enableUpdating = a))),
          (this._$AL = new Map()),
          this._$Em(),
          this.requestUpdate(),
          null === (a = this.constructor.l) ||
            void 0 === a ||
            a.forEach((a) => a(this));
      }
      addController(a) {
        var b, c;
        (null !== (b = this._$Eg) && void 0 !== b ? b : (this._$Eg = [])).push(
          a
        ),
          void 0 !== this.renderRoot &&
            this.isConnected &&
            (null === (c = a.hostConnected) || void 0 === c || c.call(a));
      }
      removeController(a) {
        var b;
        null === (b = this._$Eg) ||
          void 0 === b ||
          b.splice(this._$Eg.indexOf(a) >>> 0, 1);
      }
      _$Em() {
        this.constructor.elementProperties.forEach((a, b) => {
          this.hasOwnProperty(b) && (this._$Et.set(b, this[b]), delete this[b]);
        });
      }
      createRenderRoot() {
        var a,
          b =
            null !== (a = this.shadowRoot) && void 0 !== a
              ? a
              : this.attachShadow(this.constructor.shadowRootOptions);
        return nb(b, this.constructor.elementStyles), b;
      }
      connectedCallback() {
        var a;
        void 0 === this.renderRoot &&
          (this.renderRoot = this.createRenderRoot()),
          this.enableUpdating(!0),
          null === (a = this._$Eg) ||
            void 0 === a ||
            a.forEach((a) => {
              var b;
              return null === (b = a.hostConnected) || void 0 === b
                ? void 0
                : b.call(a);
            });
      }
      enableUpdating() {}
      disconnectedCallback() {
        var a;
        null === (a = this._$Eg) ||
          void 0 === a ||
          a.forEach((a) => {
            var b;
            return null === (b = a.hostDisconnected) || void 0 === b
              ? void 0
              : b.call(a);
          });
      }
      attributeChangedCallback(a, b, c) {
        this._$AK(a, c);
      }
      _$ES(a, b) {
        var c,
          d,
          f =
            2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : sb,
          g = this.constructor._$Eh(a, f);
        if (void 0 !== g && !0 === f.reflect) {
          var h = (
            null !==
              (d =
                null === (c = f.converter) || void 0 === c
                  ? void 0
                  : c.toAttribute) && void 0 !== d
              ? d
              : qb.toAttribute
          )(b, f.type);
          (this._$Ei = a),
            null == h ? this.removeAttribute(g) : this.setAttribute(g, h),
            (this._$Ei = null);
        }
      }
      _$AK(a, b) {
        var c,
          d,
          f,
          g = this.constructor,
          h = g._$Eu.get(a);
        if (void 0 !== h && this._$Ei !== h) {
          var i = g.getPropertyOptions(h),
            j = i.converter,
            k =
              null !==
                (f =
                  null !==
                    (d =
                      null === (c = j) || void 0 === c
                        ? void 0
                        : c.fromAttribute) && void 0 !== d
                    ? d
                    : "function" == typeof j
                    ? j
                    : null) && void 0 !== f
                ? f
                : qb.fromAttribute;
          (this._$Ei = h), (this[h] = k(b, i.type)), (this._$Ei = null);
        }
      }
      requestUpdate(a, b, c) {
        var d = !0;
        void 0 !== a &&
          (((c = c || this.constructor.getPropertyOptions(a)).hasChanged || rb)(
            this[a],
            b
          )
            ? (this._$AL.has(a) || this._$AL.set(a, b),
              !0 === c.reflect &&
                this._$Ei !== a &&
                (void 0 === this._$EC && (this._$EC = new Map()),
                this._$EC.set(a, c)))
            : (d = !1)),
          !this.isUpdatePending && d && (this._$Ep = this._$E_());
      }
      _$E_() {
        var a = this;
        return o(function* () {
          a.isUpdatePending = !0;
          try {
            yield a._$Ep;
          } catch (a) {
            Promise.reject(a);
          }
          var b = a.scheduleUpdate();
          return null != b && (yield b), !a.isUpdatePending;
        })();
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        var a;
        if (this.isUpdatePending) {
          this.hasUpdated,
            this._$Et &&
              (this._$Et.forEach((a, b) => (this[b] = a)),
              (this._$Et = void 0));
          var b = !1,
            c = this._$AL;
          try {
            (b = this.shouldUpdate(c)),
              b
                ? (this.willUpdate(c),
                  null === (a = this._$Eg) ||
                    void 0 === a ||
                    a.forEach((a) => {
                      var b;
                      return null === (b = a.hostUpdate) || void 0 === b
                        ? void 0
                        : b.call(a);
                    }),
                  this.update(c))
                : this._$EU();
          } catch (a) {
            throw ((b = !1), this._$EU(), a);
          }
          b && this._$AE(c);
        }
      }
      willUpdate() {}
      _$AE(a) {
        var b;
        null === (b = this._$Eg) ||
          void 0 === b ||
          b.forEach((a) => {
            var b;
            return null === (b = a.hostUpdated) || void 0 === b
              ? void 0
              : b.call(a);
          }),
          this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(a)),
          this.updated(a);
      }
      _$EU() {
        (this._$AL = new Map()), (this.isUpdatePending = !1);
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$Ep;
      }
      shouldUpdate() {
        return !0;
      }
      update() {
        void 0 !== this._$EC &&
          (this._$EC.forEach((a, b) => this._$ES(b, this[b], a)),
          (this._$EC = void 0)),
          this._$EU();
      }
      updated() {}
      firstUpdated() {}
    }
    (h.finalized = !0),
      (h.elementProperties = new Map()),
      (h.elementStyles = []),
      (h.shadowRootOptions = { mode: "open" }),
      null == pb || pb({ ReactiveElement: h }),
      (null !== (n = globalThis.reactiveElementVersions) && void 0 !== n
        ? n
        : (globalThis.reactiveElementVersions = [])
      ).push("1.3.0");
    var a,
      tb = globalThis.trustedTypes,
      ub = tb ? tb.createPolicy("lit-html", { createHTML: (a) => a }) : void 0,
      vb = "lit$".concat((Math.random() + "").slice(9), "$"),
      wb = "?" + vb,
      xb = "<".concat(wb, ">"),
      yb = document,
      zb = function () {
        var a =
          0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : "";
        return yb.createComment(a);
      },
      Ab = (a) =>
        null === a || ("object" != typeof a && "function" != typeof a),
      Bb = Array.isArray,
      d = (a) => {
        var b;
        return (
          Bb(a) ||
          "function" ==
            typeof (null === (b = a) || void 0 === b
              ? void 0
              : b[Symbol.iterator])
        );
      },
      Cb = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
      c = /-->/g,
      Db = />/g,
      Eb =
        />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
      f = /'/g,
      _ = /"/g,
      m = /^(?:script|style|textarea|title)$/i,
      g = ((a) =>
        function (b) {
          for (
            var c = arguments.length, d = Array(1 < c ? c - 1 : 0), e = 1;
            e < c;
            e++
          )
            d[e - 1] = arguments[e];
          return { _$litType$: a, strings: b, values: d };
        })(1),
      $ = Symbol.for("lit-noChange"),
      b = Symbol.for("lit-nothing"),
      Fb = new WeakMap(),
      T = (a, b, c) => {
        var d,
          f,
          g =
            null !== (d = null == c ? void 0 : c.renderBefore) && void 0 !== d
              ? d
              : b,
          h = g._$litPart$;
        if (void 0 === h) {
          var i =
            null !== (f = null == c ? void 0 : c.renderBefore) && void 0 !== f
              ? f
              : null;
          g._$litPart$ = h = new Kb(
            b.insertBefore(zb(), i),
            i,
            void 0,
            null == c ? {} : c
          );
        }
        return h._$AI(a), h;
      },
      Gb = yb.createTreeWalker(yb, 129, null, !1),
      Hb = (a, b) => {
        for (
          var e,
            g = a.length - 1,
            i = [],
            j = 2 === b ? "<svg>" : "",
            k = Cb,
            l = 0;
          l < g;
          l++
        ) {
          for (
            var n = a[l], o = void 0, p = void 0, q = -1, s = 0;
            s < n.length && ((k.lastIndex = s), (p = k.exec(n)), null !== p);

          )
            (s = k.lastIndex),
              k === Cb
                ? "!--" === p[1]
                  ? (k = c)
                  : void 0 === p[1]
                  ? void 0 === p[2]
                    ? void 0 !== p[3] && (k = Eb)
                    : (m.test(p[2]) && (e = RegExp("</" + p[2], "g")), (k = Eb))
                  : (k = Db)
                : k === Eb
                ? ">" === p[0]
                  ? ((k = null == e ? Cb : e), (q = -1))
                  : void 0 === p[1]
                  ? (q = -2)
                  : ((q = k.lastIndex - p[2].length),
                    (o = p[1]),
                    (k = void 0 === p[3] ? Eb : '"' === p[3] ? _ : f))
                : k === _ || k === f
                ? (k = Eb)
                : k === c || k === Db
                ? (k = Cb)
                : ((k = Eb), (e = void 0));
          var u = k === Eb && a[l + 1].startsWith("/>") ? " " : "";
          j +=
            k === Cb
              ? n + xb
              : 0 <= q
              ? (i.push(o), n.slice(0, q) + "$lit$" + n.slice(q) + vb + u)
              : n + vb + (-2 === q ? (i.push(void 0), l) : u);
        }
        var t = j + (a[g] || "<?>") + (2 === b ? "</svg>" : "");
        if (!Array.isArray(a) || !a.hasOwnProperty("raw"))
          throw Error("invalid template strings array");
        return [void 0 === ub ? t : ub.createHTML(t), i];
      };
    class Ib {
      constructor(b, e) {
        var f,
          { strings: g, _$litType$: h } = b;
        this.parts = [];
        var i = 0,
          j = 0,
          n = g.length - 1,
          o = this.parts,
          [c, p] = Hb(g, h);
        if (
          ((this.el = Ib.createElement(c, e)),
          (Gb.currentNode = this.el.content),
          2 === h)
        ) {
          var a = this.el.content,
            q = a.firstChild;
          q.remove(), a.append(...q.childNodes);
        }
        for (; null !== (f = Gb.nextNode()) && o.length < n; ) {
          if (1 === f.nodeType) {
            if (f.hasAttributes()) {
              var s = [];
              for (var t of f.getAttributeNames())
                if (t.endsWith("$lit$") || t.startsWith(vb)) {
                  var u = p[j++];
                  if ((s.push(t), void 0 !== u)) {
                    var v = f.getAttribute(u.toLowerCase() + "$lit$").split(vb),
                      w = /([.?@])?(.*)/.exec(u);
                    o.push({
                      type: 1,
                      index: i,
                      name: w[2],
                      strings: v,
                      ctor:
                        "." === w[1]
                          ? Lb
                          : "?" === w[1]
                          ? k
                          : "@" === w[1]
                          ? Mb
                          : N,
                    });
                  } else o.push({ type: 6, index: i });
                }
              for (var x of s) f.removeAttribute(x);
            }
            if (m.test(f.tagName)) {
              var y = f.textContent.split(vb),
                z = y.length - 1;
              if (0 < z) {
                f.textContent = tb ? tb.emptyScript : "";
                for (var A = 0; A < z; A++)
                  f.append(y[A], zb()),
                    Gb.nextNode(),
                    o.push({ type: 2, index: ++i });
                f.append(y[z], zb());
              }
            }
          } else if (8 === f.nodeType)
            if (f.data === wb) o.push({ type: 2, index: i });
            else
              for (var B = -1; -1 !== (B = f.data.indexOf(vb, B + 1)); )
                o.push({ type: 7, index: i }), (B += vb.length - 1);
          i++;
        }
      }
      static createElement(a) {
        var b = yb.createElement("template");
        return (b.innerHTML = a), b;
      }
    }
    class Jb {
      constructor(a, b) {
        (this.v = []), (this._$AN = void 0), (this._$AD = a), (this._$AM = b);
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      p(a) {
        var b,
          {
            el: { content: e },
            parts: c,
          } = this._$AD,
          f = (
            null !== (b = null == a ? void 0 : a.creationScope) && void 0 !== b
              ? b
              : yb
          ).importNode(e, !0);
        Gb.currentNode = f;
        for (var g = Gb.nextNode(), j = 0, h = 0, k = c[0]; void 0 !== k; ) {
          if (j === k.index) {
            var d = void 0;
            2 === k.type
              ? (d = new Kb(g, g.nextSibling, this, a))
              : 1 === k.type
              ? (d = new k.ctor(g, k.name, k.strings, this, a))
              : 6 === k.type && (d = new Nb(g, this, a)),
              this.v.push(d),
              (k = c[++h]);
          }
          j !== (null == k ? void 0 : k.index) && ((g = Gb.nextNode()), j++);
        }
        return f;
      }
      m(a) {
        var b = 0;
        for (var c of this.v)
          void 0 !== c &&
            (void 0 === c.strings
              ? c._$AI(a[b])
              : (c._$AI(a, c, b), (b += c.strings.length - 2))),
            b++;
      }
    }
    class Kb {
      constructor(a, c, d, f) {
        var e;
        (this.type = 2),
          (this._$AH = b),
          (this._$AN = void 0),
          (this._$AA = a),
          (this._$AB = c),
          (this._$AM = d),
          (this.options = f),
          (this._$Cg =
            null === (e = null == f ? void 0 : f.isConnected) ||
            void 0 === e ||
            e);
      }
      get _$AU() {
        var a, b;
        return null !==
          (b = null === (a = this._$AM) || void 0 === a ? void 0 : a._$AU) &&
          void 0 !== b
          ? b
          : this._$Cg;
      }
      get parentNode() {
        var a = this._$AA.parentNode,
          b = this._$AM;
        return void 0 !== b && 11 === a.nodeType && (a = b.parentNode), a;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(a) {
        var c =
          1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : this;
        (a = Ka(this, a, c)),
          Ab(a)
            ? a === b || null == a || "" === a
              ? (this._$AH !== b && this._$AR(), (this._$AH = b))
              : a !== this._$AH && a !== $ && this.$(a)
            : void 0 === a._$litType$
            ? void 0 === a.nodeType
              ? d(a)
                ? this.S(a)
                : this.$(a)
              : this.k(a)
            : this.T(a);
      }
      A(a) {
        var b =
          1 < arguments.length && arguments[1] !== void 0
            ? arguments[1]
            : this._$AB;
        return this._$AA.parentNode.insertBefore(a, b);
      }
      k(a) {
        this._$AH !== a && (this._$AR(), (this._$AH = this.A(a)));
      }
      $(a) {
        this._$AH !== b && Ab(this._$AH)
          ? (this._$AA.nextSibling.data = a)
          : this.k(yb.createTextNode(a)),
          (this._$AH = a);
      }
      T(a) {
        var b,
          { values: c, _$litType$: d } = a,
          e =
            "number" == typeof d
              ? this._$AC(a)
              : (void 0 === d.el &&
                  (d.el = Ib.createElement(d.h, this.options)),
                d);
        if ((null === (b = this._$AH) || void 0 === b ? void 0 : b._$AD) === e)
          this._$AH.m(c);
        else {
          var f = new Jb(e, this),
            g = f.p(this.options);
          f.m(c), this.k(g), (this._$AH = f);
        }
      }
      _$AC(a) {
        var b = Fb.get(a.strings);
        return void 0 === b && Fb.set(a.strings, (b = new Ib(a))), b;
      }
      S(a) {
        Bb(this._$AH) || ((this._$AH = []), this._$AR());
        var b,
          c = this._$AH,
          d = 0;
        for (var f of a)
          d === c.length
            ? c.push(
                (b = new Kb(this.A(zb()), this.A(zb()), this, this.options))
              )
            : (b = c[d]),
            b._$AI(f),
            d++;
        d < c.length && (this._$AR(b && b._$AB.nextSibling, d), (c.length = d));
      }
      _$AR() {
        var a,
          b =
            0 < arguments.length && arguments[0] !== void 0
              ? arguments[0]
              : this._$AA.nextSibling,
          c = 1 < arguments.length ? arguments[1] : void 0;
        for (
          null === (a = this._$AP) || void 0 === a || a.call(this, !1, !0, c);
          b && b !== this._$AB;

        ) {
          var d = b.nextSibling;
          b.remove(), (b = d);
        }
      }
      setConnected(a) {
        var b;
        void 0 === this._$AM &&
          ((this._$Cg = a),
          null === (b = this._$AP) || void 0 === b || b.call(this, a));
      }
    }
    class N {
      constructor(a, c, d, f, e) {
        (this.type = 1),
          (this._$AH = b),
          (this._$AN = void 0),
          (this.element = a),
          (this.name = c),
          (this._$AM = f),
          (this.options = e),
          2 < d.length || "" !== d[0] || "" !== d[1]
            ? ((this._$AH = Array(d.length - 1).fill(new String())),
              (this.strings = d))
            : (this._$AH = b);
      }
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(a) {
        var c =
            1 < arguments.length && arguments[1] !== void 0
              ? arguments[1]
              : this,
          d = 2 < arguments.length ? arguments[2] : void 0,
          f = 3 < arguments.length ? arguments[3] : void 0,
          e = this.strings,
          g = !1;
        if (void 0 === e)
          (a = Ka(this, a, c, 0)),
            (g = !Ab(a) || (a !== this._$AH && a !== $)),
            g && (this._$AH = a);
        else {
          var h,
            i,
            j = a;
          for (a = e[0], h = 0; h < e.length - 1; h++)
            (i = Ka(this, j[d + h], c, h)),
              i === $ && (i = this._$AH[h]),
              g || (g = !Ab(i) || i !== this._$AH[h]),
              i === b
                ? (a = b)
                : a !== b && (a += (null == i ? "" : i) + e[h + 1]),
              (this._$AH[h] = i);
        }
        g && !f && this.C(a);
      }
      C(a) {
        a === b
          ? this.element.removeAttribute(this.name)
          : this.element.setAttribute(this.name, null == a ? "" : a);
      }
    }
    class Lb extends N {
      constructor() {
        super(...arguments), (this.type = 3);
      }
      C(a) {
        this.element[this.name] = a === b ? void 0 : a;
      }
    }
    var M = tb ? tb.emptyScript : "";
    class k extends N {
      constructor() {
        super(...arguments), (this.type = 4);
      }
      C(a) {
        a && a !== b
          ? this.element.setAttribute(this.name, M)
          : this.element.removeAttribute(this.name);
      }
    }
    class Mb extends N {
      constructor(a, b, c, d, e) {
        super(a, b, c, d, e), (this.type = 5);
      }
      _$AI(a) {
        var c,
          d =
            1 < arguments.length && arguments[1] !== void 0
              ? arguments[1]
              : this;
        if (
          (a = null !== (c = Ka(this, a, d, 0)) && void 0 !== c ? c : b) !== $
        ) {
          var f = this._$AH,
            e =
              (a === b && f !== b) ||
              a.capture !== f.capture ||
              a.once !== f.once ||
              a.passive !== f.passive,
            g = a !== b && (f === b || e);
          e && this.element.removeEventListener(this.name, this, f),
            g && this.element.addEventListener(this.name, this, a),
            (this._$AH = a);
        }
      }
      handleEvent(a) {
        var b, c;
        "function" == typeof this._$AH
          ? this._$AH.call(
              null !==
                (c =
                  null === (b = this.options) || void 0 === b
                    ? void 0
                    : b.host) && void 0 !== c
                ? c
                : this.element,
              a
            )
          : this._$AH.handleEvent(a);
      }
    }
    class Nb {
      constructor(a, b, c) {
        (this.element = a),
          (this.type = 6),
          (this._$AN = void 0),
          (this._$AM = b),
          (this.options = c);
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(a) {
        Ka(this, a);
      }
    }
    var L = window.litHtmlPolyfillSupport;
    null == L || L(Ib, Kb),
      (null !== (a = globalThis.litHtmlVersions) && void 0 !== a
        ? a
        : (globalThis.litHtmlVersions = [])
      ).push("2.2.0");
    var Ob, Pb;
    class Qb extends h {
      constructor() {
        super(...arguments),
          (this.renderOptions = { host: this }),
          (this._$Dt = void 0);
      }
      createRenderRoot() {
        var a,
          b,
          c = super.createRenderRoot();
        return (
          (null !== (a = (b = this.renderOptions).renderBefore) &&
            void 0 !== a) ||
            (b.renderBefore = c.firstChild),
          c
        );
      }
      update(a) {
        var b = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
          super.update(a),
          (this._$Dt = T(b, this.renderRoot, this.renderOptions));
      }
      connectedCallback() {
        var a;
        super.connectedCallback(),
          null === (a = this._$Dt) || void 0 === a || a.setConnected(!0);
      }
      disconnectedCallback() {
        var a;
        super.disconnectedCallback(),
          null === (a = this._$Dt) || void 0 === a || a.setConnected(!1);
      }
      render() {
        return $;
      }
    }
    (Qb.finalized = !0),
      (Qb._$litElement$ = !0),
      null === (Ob = globalThis.litElementHydrateSupport) ||
        void 0 === Ob ||
        Ob.call(globalThis, { LitElement: Qb });
    var Rb = globalThis.litElementPolyfillSupport;
    null == Rb || Rb({ LitElement: Qb }),
      (null !== (Pb = globalThis.litElementVersions) && void 0 !== Pb
        ? Pb
        : (globalThis.litElementVersions = [])
      ).push("3.2.0");
    var Sb = mb(
        p ||
          (p = j([
            "\n  .light-entity-card {\n    padding: 16px;\n  }\n\n  .light-entity-child-card {\n    box-shadow: none !important;\n    padding: 0 !important;\n  }\n\n  .light-entity-card.group {\n    padding-bottom: 0;\n    padding-top: 0;\n  }\n\n  .ha-slider-full-width ha-slider {\n    width: 100%;\n  }\n\n  .percent-slider {\n    color: var(--primary-text-color);\n    margin-top: 5px;\n  }\n\n  .light-entity-card__header {\n    display: flex;\n    justify-content: space-between;\n    @apply --paper-font-headline;\n    line-height: 40px;\n    color: var(--primary-text-color);\n    font-size: 24px;\n  }\n\n  .group .light-entity-card__header {\n    font-size: 16px;\n  }\n\n  .light-entity-card-sliders > div {\n    margin-top: 10px;\n  }\n\n  .group .light-entity-card-sliders > div {\n    margin-top: 0px;\n  }\n\n  .light-entity-card__toggle {\n    display: flex;\n    cursor: pointer;\n  }\n\n  .light-entity-card__color-picker {\n    display: flex;\n    justify-content: space-around;\n    --ha-color-picker-wheel-borderwidth: 5;\n    --ha-color-picker-wheel-bordercolor: white;\n    --ha-color-picker-wheel-shadow: none;\n    --ha-color-picker-marker-borderwidth: 2;\n    --ha-color-picker-marker-bordercolor: white;\n  }\n\n  .group .light-entity-card__color-picker {\n    width: 50%;\n    margin: 0 auto;\n  }\n  \n  .light-entity-card-color_temp {\n    background-image: var(--ha-slider-background);\n  }\n\n  .group .light-entity-card-effectlist {\n    margin-top: -25px;\n  }\n\n  .light-entity-card-center {\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n  }\n\n  .light-entity-card-toggle {\n    margin-right: 5px;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  .icon-container {\n    margin-top: 4px;\n  }\n",
          ]))
      ),
      Tb = {
        shorten_cards: !1,
        consolidate_entities: !1,
        child_card: !1,
        hide_header: !1,
        header: "",
        color_wheel: !0,
        persist_features: !1,
        brightness: !0,
        color_temp: !0,
        white_value: !0,
        color_picker: !0,
        smooth_color_wheel: !1,
        speed: !0,
        intensity: !0,
        force_features: !1,
        show_slider_percent: !1,
        full_width_sliders: !1,
        brightness_icon: "weather-sunny",
        white_icon: "file-word-box",
        temperature_icon: "thermometer",
        speed_icon: "speedometer",
        intensity_icon: "transit-connection-horizontal",
      },
      Ub = mb(
        q ||
          (q = j([
            "\n  .entities {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    display: flex;\n  }\n\n  .entities ha-formfield {\n    display: block;\n    margin-bottom: 10px;\n    margin-left: 10px;\n  }\n\n  .checkbox-options {\n    display: flex;\n  }\n  \n  mwc-select {\n    width: 100%;\n  }\n\n  .checkbox-options ha-formfield,\n  .entities mwc-switch,\n  .entities ha-form-string {\n    padding-right: 2%;\n    width: 48%;\n  }\n\n  .checkbox-options ha-formfield {\n    margin-top: 10px;\n  }\n\n  .overall-config {\n    margin-bottom: 20px;\n  }\n",
          ]))
      ),
      Vb = (a, b) =>
        a.reduce(
          (a, c) => (
            c.defineId
              ? (a[c.defineId] = c)
              : c.promise.then((a) => {
                  void 0 === b.registry.get(c.name) &&
                    b.registry.define(c.name, a);
                }),
            a
          ),
          {}
        ),
      Wb = (a) => ({
        name: a,
        promise: customElements
          .whenDefined(a)
          .then(() => customElements.get(a)),
      }),
      Xb = function (a, c) {
        return (
          (Xb =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (a, c) {
                a.__proto__ = c;
              }) ||
            function (a, c) {
              for (var b in c)
                Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b]);
            }),
          Xb(a, c)
        );
      },
      Yb = function () {
        return (
          (Yb =
            Object.assign ||
            function (a) {
              for (var b, c = 1, d = arguments.length; c < d; c++)
                for (var e in ((b = arguments[c]), b))
                  Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
              return a;
            }),
          Yb.apply(this, arguments)
        );
      },
      Zb = (a) => (b, c) => {
        if (!b.constructor._observers) {
          b.constructor._observers = new Map();
          var d = b.updated;
          b.updated = function (a) {
            d.call(this, a),
              a.forEach((a, b) => {
                var c = this.constructor._observers,
                  d = c.get(b);
                d !== void 0 && d.call(this, this[b], a);
              });
          };
        } else if (!b.constructor.hasOwnProperty("_observers")) {
          var e = b.constructor._observers;
          (b.constructor._observers = new Map()),
            e.forEach((a, c) => b.constructor._observers.set(c, a));
        }
        b.constructor._observers.set(c, a);
      };
    class $b {
      constructor(a) {
        (this.startPress = (b) => {
          a().then((a) => {
            a && a.startPress(b);
          });
        }),
          (this.endPress = () => {
            a().then((a) => {
              a && a.endPress();
            });
          }),
          (this.startFocus = () => {
            a().then((a) => {
              a && a.startFocus();
            });
          }),
          (this.endFocus = () => {
            a().then((a) => {
              a && a.endFocus();
            });
          }),
          (this.startHover = () => {
            a().then((a) => {
              a && a.startHover();
            });
          }),
          (this.endHover = () => {
            a().then((a) => {
              a && a.endHover();
            });
          });
      }
    }
    var ac,
      bc = (a, b) =>
        "method" === b.kind && b.descriptor && !("value" in b.descriptor)
          ? l(
              l({}, b),
              {},
              {
                finisher(c) {
                  c.createProperty(b.key, a);
                },
              }
            )
          : {
              kind: "field",
              key: Symbol(),
              placement: "own",
              descriptor: {},
              originalKey: b.key,
              initializer() {
                "function" == typeof b.initializer &&
                  (this[b.key] = b.initializer.call(this));
              },
              finisher(c) {
                c.createProperty(b.key, a);
              },
            },
      cc = (a) => {
        var { finisher: b, descriptor: c } = a;
        return (a, d) => {
          var e;
          if (void 0 === d) {
            var f = null !== (e = a.originalKey) && void 0 !== e ? e : a.key,
              g =
                null == c
                  ? l(l({}, a), {}, { key: f })
                  : {
                      kind: "method",
                      placement: "prototype",
                      key: f,
                      descriptor: c(a.key),
                    };
            return (
              null != b &&
                (g.finisher = function (a) {
                  b(a, f);
                }),
              g
            );
          }
          {
            var h = a.constructor;
            void 0 !== c && Object.defineProperty(a, d, c(d)),
              null == b || b(h, d);
          }
        };
      },
      dc =
        null ==
        (null === (ac = window.HTMLSlotElement) || void 0 === ac
          ? void 0
          : ac.prototype.assignedElements)
          ? (a, b) =>
              a.assignedNodes(b).filter((a) => a.nodeType === Node.ELEMENT_NODE)
          : (a, b) => a.assignedElements(b),
      ec = {
        ATTRIBUTE: 1,
        CHILD: 2,
        PROPERTY: 3,
        BOOLEAN_ATTRIBUTE: 4,
        EVENT: 5,
        ELEMENT: 6,
      },
      fc = (a) =>
        function () {
          for (var b = arguments.length, c = Array(b), d = 0; d < b; d++)
            c[d] = arguments[d];
          return { _$litDirective$: a, values: c };
        };
    class gc {
      constructor() {}
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AT(a, b, c) {
        (this._$Ct = a), (this._$AM = b), (this._$Ci = c);
      }
      _$AS(a, b) {
        return this.update(a, b);
      }
      update(a, b) {
        return this.render(...b);
      }
    }
    var hc = fc(
      class extends gc {
        constructor(a) {
          var b;
          if (
            (super(a),
            a.type !== ec.ATTRIBUTE ||
              "class" !== a.name ||
              2 <
                (null === (b = a.strings) || void 0 === b ? void 0 : b.length))
          )
            throw Error(
              "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
            );
        }
        render(a) {
          return (
            " " +
            Object.keys(a)
              .filter((b) => a[b])
              .join(" ") +
            " "
          );
        }
        update(a, b) {
          var c,
            d,
            [f] = b;
          if (void 0 === this.et) {
            for (var e in ((this.et = new Set()),
            void 0 !== a.strings &&
              (this.st = new Set(
                a.strings
                  .join(" ")
                  .split(/\s/)
                  .filter((a) => "" !== a)
              )),
            f))
              !f[e] ||
                (null !== (c = this.st) && void 0 !== c && c.has(e)) ||
                this.et.add(e);
            return this.render(f);
          }
          var g = a.element.classList;
          for (var h in (this.et.forEach((a) => {
            a in f || (g.remove(a), this.et.delete(a));
          }),
          f)) {
            var i = !!f[h];
            i === this.et.has(h) ||
              (null === (d = this.st) || void 0 === d ? void 0 : d.has(h)) ||
              (i
                ? (g.add(h), this.et.add(h))
                : (g.remove(h), this.et.delete(h)));
          }
          return $;
        }
      }
    );
    class ic extends Qb {
      constructor() {
        super(...arguments),
          (this.value = ""),
          (this.group = null),
          (this.tabindex = -1),
          (this.disabled = !1),
          (this.twoline = !1),
          (this.activated = !1),
          (this.graphic = null),
          (this.multipleGraphics = !1),
          (this.hasMeta = !1),
          (this.noninteractive = !1),
          (this.selected = !1),
          (this.shouldRenderRipple = !1),
          (this._managingList = null),
          (this.boundOnClick = this.onClick.bind(this)),
          (this._firstChanged = !0),
          (this._skipPropRequest = !1),
          (this.rippleHandlers = new $b(
            () => ((this.shouldRenderRipple = !0), this.ripple)
          )),
          (this.listeners = [
            {
              target: this,
              eventNames: ["click"],
              cb: () => {
                this.onClick();
              },
            },
            {
              target: this,
              eventNames: ["mouseenter"],
              cb: this.rippleHandlers.startHover,
            },
            {
              target: this,
              eventNames: ["mouseleave"],
              cb: this.rippleHandlers.endHover,
            },
            {
              target: this,
              eventNames: ["focus"],
              cb: this.rippleHandlers.startFocus,
            },
            {
              target: this,
              eventNames: ["blur"],
              cb: this.rippleHandlers.endFocus,
            },
            {
              target: this,
              eventNames: ["mousedown", "touchstart"],
              cb: (a) => {
                var b = a.type;
                this.onDown("mousedown" === b ? "mouseup" : "touchend", a);
              },
            },
          ]);
      }
      get text() {
        var a = this.textContent;
        return a ? a.trim() : "";
      }
      render() {
        var a = this.renderText(),
          b = this.graphic ? this.renderGraphic() : g(r || (r = j([""]))),
          c = this.hasMeta ? this.renderMeta() : g(s || (s = j([""])));
        return g(
          t || (t = j(["\n      ", "\n      ", "\n      ", "\n      ", ""])),
          this.renderRipple(),
          b,
          a,
          c
        );
      }
      renderRipple() {
        return this.shouldRenderRipple
          ? g(
              u ||
                (u = j([
                  "\n      <mwc-ripple\n        .activated=",
                  ">\n      </mwc-ripple>",
                ])),
              this.activated
            )
          : this.activated
          ? g(v || (v = j(['<div class="fake-activated-ripple"></div>'])))
          : "";
      }
      renderGraphic() {
        var a = { multi: this.multipleGraphics };
        return g(
          w ||
            (w = j([
              '\n      <span class="mdc-deprecated-list-item__graphic material-icons ',
              '">\n        <slot name="graphic"></slot>\n      </span>',
            ])),
          hc(a)
        );
      }
      renderMeta() {
        return g(
          x ||
            (x = j([
              '\n      <span class="mdc-deprecated-list-item__meta material-icons">\n        <slot name="meta"></slot>\n      </span>',
            ]))
        );
      }
      renderText() {
        var a = this.twoline ? this.renderTwoline() : this.renderSingleLine();
        return g(
          y ||
            (y = j([
              '\n      <span class="mdc-deprecated-list-item__text">\n        ',
              "\n      </span>",
            ])),
          a
        );
      }
      renderSingleLine() {
        return g(z || (z = j(["<slot></slot>"])));
      }
      renderTwoline() {
        return g(
          A ||
            (A = j([
              '\n      <span class="mdc-deprecated-list-item__primary-text">\n        <slot></slot>\n      </span>\n      <span class="mdc-deprecated-list-item__secondary-text">\n        <slot name="secondary"></slot>\n      </span>\n    ',
            ]))
        );
      }
      onClick() {
        this.fireRequestSelected(!this.selected, "interaction");
      }
      onDown(a, b) {
        var c = () => {
          window.removeEventListener(a, c), this.rippleHandlers.endPress();
        };
        window.addEventListener(a, c), this.rippleHandlers.startPress(b);
      }
      fireRequestSelected(a, b) {
        if (!this.noninteractive) {
          var c = new CustomEvent("request-selected", {
            bubbles: !0,
            composed: !0,
            detail: { source: b, selected: a },
          });
          this.dispatchEvent(c);
        }
      }
      connectedCallback() {
        super.connectedCallback(),
          this.noninteractive || this.setAttribute("mwc-list-item", "");
        for (var a of this.listeners)
          for (var b of a.eventNames)
            a.target.addEventListener(b, a.cb, { passive: !0 });
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        for (var a of this.listeners)
          for (var b of a.eventNames) a.target.removeEventListener(b, a.cb);
        this._managingList &&
          (this._managingList.debouncedLayout
            ? this._managingList.debouncedLayout(!0)
            : this._managingList.layout(!0));
      }
      firstUpdated() {
        var a = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
        this.dispatchEvent(a);
      }
    }
    Na([Ra("slot")], ic.prototype, "slotElement", void 0),
      Na(
        [
          (function (a) {
            return cc({
              descriptor: () => ({
                get() {
                  var b = this;
                  return o(function* () {
                    var c;
                    return (
                      yield b.updateComplete,
                      null === (c = b.renderRoot) || void 0 === c
                        ? void 0
                        : c.querySelector(a)
                    );
                  })();
                },
                enumerable: !0,
                configurable: !0,
              }),
            });
          })("mwc-ripple"),
        ],
        ic.prototype,
        "ripple",
        void 0
      ),
      Na([Pa({ type: String })], ic.prototype, "value", void 0),
      Na([Pa({ type: String, reflect: !0 })], ic.prototype, "group", void 0),
      Na([Pa({ type: Number, reflect: !0 })], ic.prototype, "tabindex", void 0),
      Na(
        [
          Pa({ type: Boolean, reflect: !0 }),
          Zb(function (a) {
            a
              ? this.setAttribute("aria-disabled", "true")
              : this.setAttribute("aria-disabled", "false");
          }),
        ],
        ic.prototype,
        "disabled",
        void 0
      ),
      Na([Pa({ type: Boolean, reflect: !0 })], ic.prototype, "twoline", void 0),
      Na(
        [Pa({ type: Boolean, reflect: !0 })],
        ic.prototype,
        "activated",
        void 0
      ),
      Na([Pa({ type: String, reflect: !0 })], ic.prototype, "graphic", void 0),
      Na([Pa({ type: Boolean })], ic.prototype, "multipleGraphics", void 0),
      Na([Pa({ type: Boolean })], ic.prototype, "hasMeta", void 0),
      Na(
        [
          Pa({ type: Boolean, reflect: !0 }),
          Zb(function (a) {
            a
              ? (this.removeAttribute("aria-checked"),
                this.removeAttribute("mwc-list-item"),
                (this.selected = !1),
                (this.activated = !1),
                (this.tabIndex = -1))
              : this.setAttribute("mwc-list-item", "");
          }),
        ],
        ic.prototype,
        "noninteractive",
        void 0
      ),
      Na(
        [
          Pa({ type: Boolean, reflect: !0 }),
          Zb(function (a) {
            var b = this.getAttribute("role"),
              c =
                "gridcell" === b ||
                "option" === b ||
                "row" === b ||
                "tab" === b;
            return (
              c && a
                ? this.setAttribute("aria-selected", "true")
                : c && this.setAttribute("aria-selected", "false"),
              this._firstChanged
                ? void (this._firstChanged = !1)
                : void (
                    this._skipPropRequest ||
                    this.fireRequestSelected(a, "property")
                  )
            );
          }),
        ],
        ic.prototype,
        "selected",
        void 0
      ),
      Na([Qa()], ic.prototype, "shouldRenderRipple", void 0),
      Na([Qa()], ic.prototype, "_managingList", void 0);
    var jc = mb(
        B ||
          (B = j([
            ':host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}',
          ]))
      ),
      kc = (a) => a.nodeType === Node.ELEMENT_NODE,
      lc = () => {},
      mc = {
        get passive() {
          return !1;
        },
      };
    document.addEventListener("x", lc, mc),
      document.removeEventListener("x", lc);
    var nc = function () {
        var a =
            0 < arguments.length && arguments[0] !== void 0
              ? arguments[0]
              : window.document,
          b = a.activeElement,
          c = [];
        if (!b) return c;
        for (; b && (c.push(b), b.shadowRoot); ) b = b.shadowRoot.activeElement;
        return c;
      },
      oc = (a) => {
        var b = nc();
        if (!b.length) return !1;
        var c = b[b.length - 1],
          d = new Event("check-if-focused", { bubbles: !0, composed: !0 }),
          e = [],
          f = (a) => {
            e = a.composedPath();
          };
        return (
          document.body.addEventListener("check-if-focused", f),
          c.dispatchEvent(d),
          document.body.removeEventListener("check-if-focused", f),
          -1 !== e.indexOf(a)
        );
      };
    class pc extends Qb {
      click() {
        return this.mdcRoot
          ? (this.mdcRoot.focus(), void this.mdcRoot.click())
          : void super.click();
      }
      createFoundation() {
        this.mdcFoundation !== void 0 && this.mdcFoundation.destroy(),
          this.mdcFoundationClass &&
            ((this.mdcFoundation = new this.mdcFoundationClass(
              this.createAdapter()
            )),
            this.mdcFoundation.init());
      }
      firstUpdated() {
        this.createFoundation();
      }
    }
    var qc = (function () {
        function a(a) {
          void 0 === a && (a = {}), (this.adapter = a);
        }
        return (
          Object.defineProperty(a, "cssClasses", {
            get: function () {
              return {};
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(a, "strings", {
            get: function () {
              return {};
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(a, "numbers", {
            get: function () {
              return {};
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(a, "defaultAdapter", {
            get: function () {
              return {};
            },
            enumerable: !1,
            configurable: !0,
          }),
          (a.prototype.init = function () {}),
          (a.prototype.destroy = function () {}),
          a
        );
      })(),
      rc = {
        BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
        FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
        FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
        ROOT: "mdc-ripple-upgraded",
        UNBOUNDED: "mdc-ripple-upgraded--unbounded",
      },
      sc = {
        VAR_FG_SCALE: "--mdc-ripple-fg-scale",
        VAR_FG_SIZE: "--mdc-ripple-fg-size",
        VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
        VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
        VAR_LEFT: "--mdc-ripple-left",
        VAR_TOP: "--mdc-ripple-top",
      },
      tc = {
        DEACTIVATION_TIMEOUT_MS: 225,
        FG_DEACTIVATION_MS: 150,
        INITIAL_ORIGIN_SCALE: 0.6,
        PADDING: 10,
        TAP_DELAY_MS: 300,
      },
      uc = ["touchstart", "pointerdown", "mousedown", "keydown"],
      vc = ["touchend", "pointerup", "mouseup", "contextmenu"],
      wc = [],
      xc = (function (a) {
        function b(c) {
          var d = a.call(this, Yb(Yb({}, b.defaultAdapter), c)) || this;
          return (
            (d.activationAnimationHasEnded = !1),
            (d.activationTimer = 0),
            (d.fgDeactivationRemovalTimer = 0),
            (d.fgScale = "0"),
            (d.frame = { width: 0, height: 0 }),
            (d.initialSize = 0),
            (d.layoutFrame = 0),
            (d.maxRadius = 0),
            (d.unboundedCoords = { left: 0, top: 0 }),
            (d.activationState = d.defaultActivationState()),
            (d.activationTimerCallback = function () {
              (d.activationAnimationHasEnded = !0),
                d.runDeactivationUXLogicIfReady();
            }),
            (d.activateHandler = function (a) {
              d.activateImpl(a);
            }),
            (d.deactivateHandler = function () {
              d.deactivateImpl();
            }),
            (d.focusHandler = function () {
              d.handleFocus();
            }),
            (d.blurHandler = function () {
              d.handleBlur();
            }),
            (d.resizeHandler = function () {
              d.layout();
            }),
            d
          );
        }
        return (
          Ma(b, a),
          Object.defineProperty(b, "cssClasses", {
            get: function () {
              return rc;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "strings", {
            get: function () {
              return sc;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "numbers", {
            get: function () {
              return tc;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "defaultAdapter", {
            get: function () {
              return {
                addClass: function () {},
                browserSupportsCssVars: function () {
                  return !0;
                },
                computeBoundingRect: function () {
                  return {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: 0,
                  };
                },
                containsEventTarget: function () {
                  return !0;
                },
                deregisterDocumentInteractionHandler: function () {},
                deregisterInteractionHandler: function () {},
                deregisterResizeHandler: function () {},
                getWindowPageOffset: function () {
                  return { x: 0, y: 0 };
                },
                isSurfaceActive: function () {
                  return !0;
                },
                isSurfaceDisabled: function () {
                  return !0;
                },
                isUnbounded: function () {
                  return !0;
                },
                registerDocumentInteractionHandler: function () {},
                registerInteractionHandler: function () {},
                registerResizeHandler: function () {},
                removeClass: function () {},
                updateCssVariable: function () {},
              };
            },
            enumerable: !1,
            configurable: !0,
          }),
          (b.prototype.init = function () {
            var a = this,
              c = this.supportsPressRipple();
            if ((this.registerRootHandlers(c), c)) {
              var d = b.cssClasses,
                e = d.ROOT,
                f = d.UNBOUNDED;
              requestAnimationFrame(function () {
                a.adapter.addClass(e),
                  a.adapter.isUnbounded() &&
                    (a.adapter.addClass(f), a.layoutInternal());
              });
            }
          }),
          (b.prototype.destroy = function () {
            var a = this;
            if (this.supportsPressRipple()) {
              this.activationTimer &&
                (clearTimeout(this.activationTimer),
                (this.activationTimer = 0),
                this.adapter.removeClass(b.cssClasses.FG_ACTIVATION)),
                this.fgDeactivationRemovalTimer &&
                  (clearTimeout(this.fgDeactivationRemovalTimer),
                  (this.fgDeactivationRemovalTimer = 0),
                  this.adapter.removeClass(b.cssClasses.FG_DEACTIVATION));
              var c = b.cssClasses,
                d = c.ROOT,
                e = c.UNBOUNDED;
              requestAnimationFrame(function () {
                a.adapter.removeClass(d),
                  a.adapter.removeClass(e),
                  a.removeCssVars();
              });
            }
            this.deregisterRootHandlers(),
              this.deregisterDeactivationHandlers();
          }),
          (b.prototype.activate = function (a) {
            this.activateImpl(a);
          }),
          (b.prototype.deactivate = function () {
            this.deactivateImpl();
          }),
          (b.prototype.layout = function () {
            var a = this;
            this.layoutFrame && cancelAnimationFrame(this.layoutFrame),
              (this.layoutFrame = requestAnimationFrame(function () {
                a.layoutInternal(), (a.layoutFrame = 0);
              }));
          }),
          (b.prototype.setUnbounded = function (a) {
            var c = b.cssClasses.UNBOUNDED;
            a ? this.adapter.addClass(c) : this.adapter.removeClass(c);
          }),
          (b.prototype.handleFocus = function () {
            var a = this;
            requestAnimationFrame(function () {
              return a.adapter.addClass(b.cssClasses.BG_FOCUSED);
            });
          }),
          (b.prototype.handleBlur = function () {
            var a = this;
            requestAnimationFrame(function () {
              return a.adapter.removeClass(b.cssClasses.BG_FOCUSED);
            });
          }),
          (b.prototype.supportsPressRipple = function () {
            return this.adapter.browserSupportsCssVars();
          }),
          (b.prototype.defaultActivationState = function () {
            return {
              activationEvent: void 0,
              hasDeactivationUXRun: !1,
              isActivated: !1,
              isProgrammatic: !1,
              wasActivatedByPointer: !1,
              wasElementMadeActive: !1,
            };
          }),
          (b.prototype.registerRootHandlers = function (a) {
            var b, c;
            if (a) {
              try {
                for (var d, e = Oa(uc), f = e.next(); !f.done; f = e.next())
                  (d = f.value),
                    this.adapter.registerInteractionHandler(
                      d,
                      this.activateHandler
                    );
              } catch (a) {
                b = { error: a };
              } finally {
                try {
                  f && !f.done && (c = e.return) && c.call(e);
                } finally {
                  if (b) throw b.error;
                }
              }
              this.adapter.isUnbounded() &&
                this.adapter.registerResizeHandler(this.resizeHandler);
            }
            this.adapter.registerInteractionHandler("focus", this.focusHandler),
              this.adapter.registerInteractionHandler("blur", this.blurHandler);
          }),
          (b.prototype.registerDeactivationHandlers = function (a) {
            var b, c;
            if ("keydown" === a.type)
              this.adapter.registerInteractionHandler(
                "keyup",
                this.deactivateHandler
              );
            else
              try {
                for (var d, e = Oa(vc), f = e.next(); !f.done; f = e.next())
                  (d = f.value),
                    this.adapter.registerDocumentInteractionHandler(
                      d,
                      this.deactivateHandler
                    );
              } catch (a) {
                b = { error: a };
              } finally {
                try {
                  f && !f.done && (c = e.return) && c.call(e);
                } finally {
                  if (b) throw b.error;
                }
              }
          }),
          (b.prototype.deregisterRootHandlers = function () {
            var a, b;
            try {
              for (var c, d = Oa(uc), e = d.next(); !e.done; e = d.next())
                (c = e.value),
                  this.adapter.deregisterInteractionHandler(
                    c,
                    this.activateHandler
                  );
            } catch (b) {
              a = { error: b };
            } finally {
              try {
                e && !e.done && (b = d.return) && b.call(d);
              } finally {
                if (a) throw a.error;
              }
            }
            this.adapter.deregisterInteractionHandler(
              "focus",
              this.focusHandler
            ),
              this.adapter.deregisterInteractionHandler(
                "blur",
                this.blurHandler
              ),
              this.adapter.isUnbounded() &&
                this.adapter.deregisterResizeHandler(this.resizeHandler);
          }),
          (b.prototype.deregisterDeactivationHandlers = function () {
            var a, b;
            this.adapter.deregisterInteractionHandler(
              "keyup",
              this.deactivateHandler
            );
            try {
              for (var c, d = Oa(vc), e = d.next(); !e.done; e = d.next())
                (c = e.value),
                  this.adapter.deregisterDocumentInteractionHandler(
                    c,
                    this.deactivateHandler
                  );
            } catch (b) {
              a = { error: b };
            } finally {
              try {
                e && !e.done && (b = d.return) && b.call(d);
              } finally {
                if (a) throw a.error;
              }
            }
          }),
          (b.prototype.removeCssVars = function () {
            var a = this,
              c = b.strings,
              d = Object.keys(c);
            d.forEach(function (b) {
              0 === b.indexOf("VAR_") &&
                a.adapter.updateCssVariable(c[b], null);
            });
          }),
          (b.prototype.activateImpl = function (a) {
            var b = this;
            if (!this.adapter.isSurfaceDisabled()) {
              var c = this.activationState;
              if (!c.isActivated) {
                var d = this.previousActivationEvent,
                  e = d && void 0 !== a && d.type !== a.type;
                if (!e) {
                  (c.isActivated = !0),
                    (c.isProgrammatic = void 0 === a),
                    (c.activationEvent = a),
                    (c.wasActivatedByPointer =
                      !c.isProgrammatic &&
                      void 0 !== a &&
                      ("mousedown" === a.type ||
                        "touchstart" === a.type ||
                        "pointerdown" === a.type));
                  var f =
                    void 0 !== a &&
                    0 < wc.length &&
                    wc.some(function (a) {
                      return b.adapter.containsEventTarget(a);
                    });
                  return f
                    ? void this.resetActivationState()
                    : void (void 0 !== a &&
                        (wc.push(a.target),
                        this.registerDeactivationHandlers(a)),
                      (c.wasElementMadeActive = this.checkElementMadeActive(a)),
                      c.wasElementMadeActive && this.animateActivation(),
                      requestAnimationFrame(function () {
                        (wc = []),
                          c.wasElementMadeActive ||
                            void 0 === a ||
                            (" " !== a.key && 32 !== a.keyCode) ||
                            ((c.wasElementMadeActive =
                              b.checkElementMadeActive(a)),
                            c.wasElementMadeActive && b.animateActivation()),
                          c.wasElementMadeActive ||
                            (b.activationState = b.defaultActivationState());
                      }));
                }
              }
            }
          }),
          (b.prototype.checkElementMadeActive = function (a) {
            return (
              void 0 === a ||
              "keydown" !== a.type ||
              this.adapter.isSurfaceActive()
            );
          }),
          (b.prototype.animateActivation = function () {
            var a = this,
              c = b.strings,
              d = c.VAR_FG_TRANSLATE_START,
              e = c.VAR_FG_TRANSLATE_END,
              f = b.cssClasses,
              g = f.FG_DEACTIVATION,
              h = f.FG_ACTIVATION,
              i = b.numbers.DEACTIVATION_TIMEOUT_MS;
            this.layoutInternal();
            var j = "",
              k = "";
            if (!this.adapter.isUnbounded()) {
              var l = this.getFgTranslationCoordinates(),
                m = l.startPoint,
                n = l.endPoint;
              (j = m.x + "px, " + m.y + "px"), (k = n.x + "px, " + n.y + "px");
            }
            this.adapter.updateCssVariable(d, j),
              this.adapter.updateCssVariable(e, k),
              clearTimeout(this.activationTimer),
              clearTimeout(this.fgDeactivationRemovalTimer),
              this.rmBoundedActivationClasses(),
              this.adapter.removeClass(g),
              this.adapter.computeBoundingRect(),
              this.adapter.addClass(h),
              (this.activationTimer = setTimeout(function () {
                a.activationTimerCallback();
              }, i));
          }),
          (b.prototype.getFgTranslationCoordinates = function () {
            var a,
              b = this.activationState,
              c = b.activationEvent,
              d = b.wasActivatedByPointer;
            (a = d
              ? Wa(
                  c,
                  this.adapter.getWindowPageOffset(),
                  this.adapter.computeBoundingRect()
                )
              : { x: this.frame.width / 2, y: this.frame.height / 2 }),
              (a = {
                x: a.x - this.initialSize / 2,
                y: a.y - this.initialSize / 2,
              });
            var e = {
              x: this.frame.width / 2 - this.initialSize / 2,
              y: this.frame.height / 2 - this.initialSize / 2,
            };
            return { startPoint: a, endPoint: e };
          }),
          (b.prototype.runDeactivationUXLogicIfReady = function () {
            var a = this,
              c = b.cssClasses.FG_DEACTIVATION,
              d = this.activationState,
              e = d.hasDeactivationUXRun,
              f = d.isActivated;
            (e || !f) &&
              this.activationAnimationHasEnded &&
              (this.rmBoundedActivationClasses(),
              this.adapter.addClass(c),
              (this.fgDeactivationRemovalTimer = setTimeout(function () {
                a.adapter.removeClass(c);
              }, tc.FG_DEACTIVATION_MS)));
          }),
          (b.prototype.rmBoundedActivationClasses = function () {
            var a = b.cssClasses.FG_ACTIVATION;
            this.adapter.removeClass(a),
              (this.activationAnimationHasEnded = !1),
              this.adapter.computeBoundingRect();
          }),
          (b.prototype.resetActivationState = function () {
            var a = this;
            (this.previousActivationEvent =
              this.activationState.activationEvent),
              (this.activationState = this.defaultActivationState()),
              setTimeout(function () {
                return (a.previousActivationEvent = void 0);
              }, b.numbers.TAP_DELAY_MS);
          }),
          (b.prototype.deactivateImpl = function () {
            var a = this,
              b = this.activationState;
            if (b.isActivated) {
              var c = Yb({}, b);
              b.isProgrammatic
                ? (requestAnimationFrame(function () {
                    a.animateDeactivation(c);
                  }),
                  this.resetActivationState())
                : (this.deregisterDeactivationHandlers(),
                  requestAnimationFrame(function () {
                    (a.activationState.hasDeactivationUXRun = !0),
                      a.animateDeactivation(c),
                      a.resetActivationState();
                  }));
            }
          }),
          (b.prototype.animateDeactivation = function (a) {
            var b = a.wasActivatedByPointer,
              c = a.wasElementMadeActive;
            (b || c) && this.runDeactivationUXLogicIfReady();
          }),
          (b.prototype.layoutInternal = function () {
            var a = Math.floor,
              c = Math.max,
              d = this;
            this.frame = this.adapter.computeBoundingRect();
            var e = c(this.frame.height, this.frame.width);
            this.maxRadius = this.adapter.isUnbounded()
              ? e
              : (function getBoundedRadius() {
                  var a = Math.sqrt,
                    c = Math.pow,
                    e = a(c(d.frame.width, 2) + c(d.frame.height, 2));
                  return e + b.numbers.PADDING;
                })();
            var f = a(e * b.numbers.INITIAL_ORIGIN_SCALE);
            (this.initialSize =
              this.adapter.isUnbounded() && 0 != f % 2 ? f - 1 : f),
              (this.fgScale = "" + this.maxRadius / this.initialSize),
              this.updateLayoutCssVars();
          }),
          (b.prototype.updateLayoutCssVars = function () {
            var a = Math.round,
              c = b.strings,
              d = c.VAR_FG_SIZE,
              e = c.VAR_LEFT,
              f = c.VAR_TOP,
              g = c.VAR_FG_SCALE;
            this.adapter.updateCssVariable(d, this.initialSize + "px"),
              this.adapter.updateCssVariable(g, this.fgScale),
              this.adapter.isUnbounded() &&
                ((this.unboundedCoords = {
                  left: a(this.frame.width / 2 - this.initialSize / 2),
                  top: a(this.frame.height / 2 - this.initialSize / 2),
                }),
                this.adapter.updateCssVariable(
                  e,
                  this.unboundedCoords.left + "px"
                ),
                this.adapter.updateCssVariable(
                  f,
                  this.unboundedCoords.top + "px"
                ));
          }),
          b
        );
      })(qc),
      yc = fc(
        class extends gc {
          constructor(a) {
            var b;
            if (
              (super(a),
              a.type !== ec.ATTRIBUTE ||
                "style" !== a.name ||
                2 <
                  (null === (b = a.strings) || void 0 === b
                    ? void 0
                    : b.length))
            )
              throw Error(
                "The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute."
              );
          }
          render(a) {
            return Object.keys(a).reduce((b, c) => {
              var d = a[c];
              return null == d
                ? b
                : b +
                    ""
                      .concat(
                        (c = c
                          .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&")
                          .toLowerCase()),
                        ":"
                      )
                      .concat(d, ";");
            }, "");
          }
          update(a, b) {
            var [c] = b,
              { style: d } = a.element;
            if (void 0 === this.ct) {
              for (var e in ((this.ct = new Set()), c)) this.ct.add(e);
              return this.render(c);
            }
            for (var f in (this.ct.forEach((a) => {
              null == c[a] &&
                (this.ct.delete(a),
                a.includes("-") ? d.removeProperty(a) : (d[a] = ""));
            }),
            c)) {
              var g = c[f];
              null != g &&
                (this.ct.add(f),
                f.includes("-") ? d.setProperty(f, g) : (d[f] = g));
            }
            return $;
          }
        }
      );
    class zc extends pc {
      constructor() {
        super(...arguments),
          (this.primary = !1),
          (this.accent = !1),
          (this.unbounded = !1),
          (this.disabled = !1),
          (this.activated = !1),
          (this.selected = !1),
          (this.internalUseStateLayerCustomProperties = !1),
          (this.hovering = !1),
          (this.bgFocused = !1),
          (this.fgActivation = !1),
          (this.fgDeactivation = !1),
          (this.fgScale = ""),
          (this.fgSize = ""),
          (this.translateStart = ""),
          (this.translateEnd = ""),
          (this.leftPos = ""),
          (this.topPos = ""),
          (this.mdcFoundationClass = xc);
      }
      get isActive() {
        return Ua(this.parentElement || this, ":active");
      }
      createAdapter() {
        return {
          browserSupportsCssVars: () => !0,
          isUnbounded: () => this.unbounded,
          isSurfaceActive: () => this.isActive,
          isSurfaceDisabled: () => this.disabled,
          addClass: (a) => {
            switch (a) {
              case "mdc-ripple-upgraded--background-focused":
                this.bgFocused = !0;
                break;
              case "mdc-ripple-upgraded--foreground-activation":
                this.fgActivation = !0;
                break;
              case "mdc-ripple-upgraded--foreground-deactivation":
                this.fgDeactivation = !0;
                break;
              default:
            }
          },
          removeClass: (a) => {
            switch (a) {
              case "mdc-ripple-upgraded--background-focused":
                this.bgFocused = !1;
                break;
              case "mdc-ripple-upgraded--foreground-activation":
                this.fgActivation = !1;
                break;
              case "mdc-ripple-upgraded--foreground-deactivation":
                this.fgDeactivation = !1;
                break;
              default:
            }
          },
          containsEventTarget: () => !0,
          registerInteractionHandler: () => void 0,
          deregisterInteractionHandler: () => void 0,
          registerDocumentInteractionHandler: () => void 0,
          deregisterDocumentInteractionHandler: () => void 0,
          registerResizeHandler: () => void 0,
          deregisterResizeHandler: () => void 0,
          updateCssVariable: (a, b) => {
            switch (a) {
              case "--mdc-ripple-fg-scale":
                this.fgScale = b;
                break;
              case "--mdc-ripple-fg-size":
                this.fgSize = b;
                break;
              case "--mdc-ripple-fg-translate-end":
                this.translateEnd = b;
                break;
              case "--mdc-ripple-fg-translate-start":
                this.translateStart = b;
                break;
              case "--mdc-ripple-left":
                this.leftPos = b;
                break;
              case "--mdc-ripple-top":
                this.topPos = b;
                break;
              default:
            }
          },
          computeBoundingRect: () =>
            (this.parentElement || this).getBoundingClientRect(),
          getWindowPageOffset: () => ({
            x: window.pageXOffset,
            y: window.pageYOffset,
          }),
        };
      }
      startPress(a) {
        this.waitForFoundation(() => {
          this.mdcFoundation.activate(a);
        });
      }
      endPress() {
        this.waitForFoundation(() => {
          this.mdcFoundation.deactivate();
        });
      }
      startFocus() {
        this.waitForFoundation(() => {
          this.mdcFoundation.handleFocus();
        });
      }
      endFocus() {
        this.waitForFoundation(() => {
          this.mdcFoundation.handleBlur();
        });
      }
      startHover() {
        this.hovering = !0;
      }
      endHover() {
        this.hovering = !1;
      }
      waitForFoundation(a) {
        this.mdcFoundation ? a() : this.updateComplete.then(a);
      }
      update(a) {
        a.has("disabled") && this.disabled && this.endHover(), super.update(a);
      }
      render() {
        var a = this.activated && (this.primary || !this.accent),
          b = this.selected && (this.primary || !this.accent),
          c = {
            "mdc-ripple-surface--accent": this.accent,
            "mdc-ripple-surface--primary--activated": a,
            "mdc-ripple-surface--accent--activated":
              this.accent && this.activated,
            "mdc-ripple-surface--primary--selected": b,
            "mdc-ripple-surface--accent--selected":
              this.accent && this.selected,
            "mdc-ripple-surface--disabled": this.disabled,
            "mdc-ripple-surface--hover": this.hovering,
            "mdc-ripple-surface--primary": this.primary,
            "mdc-ripple-surface--selected": this.selected,
            "mdc-ripple-upgraded--background-focused": this.bgFocused,
            "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
            "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
            "mdc-ripple-upgraded--unbounded": this.unbounded,
            "mdc-ripple-surface--internal-use-state-layer-custom-properties":
              this.internalUseStateLayerCustomProperties,
          };
        return g(
          C ||
            (C = j([
              '\n        <div class="mdc-ripple-surface mdc-ripple-upgraded ',
              '"\n          style="',
              '"></div>',
            ])),
          hc(c),
          yc({
            "--mdc-ripple-fg-scale": this.fgScale,
            "--mdc-ripple-fg-size": this.fgSize,
            "--mdc-ripple-fg-translate-end": this.translateEnd,
            "--mdc-ripple-fg-translate-start": this.translateStart,
            "--mdc-ripple-left": this.leftPos,
            "--mdc-ripple-top": this.topPos,
          })
        );
      }
    }
    Na([Ra(".mdc-ripple-surface")], zc.prototype, "mdcRoot", void 0),
      Na([Pa({ type: Boolean })], zc.prototype, "primary", void 0),
      Na([Pa({ type: Boolean })], zc.prototype, "accent", void 0),
      Na([Pa({ type: Boolean })], zc.prototype, "unbounded", void 0),
      Na([Pa({ type: Boolean })], zc.prototype, "disabled", void 0),
      Na([Pa({ type: Boolean })], zc.prototype, "activated", void 0),
      Na([Pa({ type: Boolean })], zc.prototype, "selected", void 0),
      Na(
        [Pa({ type: Boolean })],
        zc.prototype,
        "internalUseStateLayerCustomProperties",
        void 0
      ),
      Na([Qa()], zc.prototype, "hovering", void 0),
      Na([Qa()], zc.prototype, "bgFocused", void 0),
      Na([Qa()], zc.prototype, "fgActivation", void 0),
      Na([Qa()], zc.prototype, "fgDeactivation", void 0),
      Na([Qa()], zc.prototype, "fgScale", void 0),
      Na([Qa()], zc.prototype, "fgSize", void 0),
      Na([Qa()], zc.prototype, "translateStart", void 0),
      Na([Qa()], zc.prototype, "translateEnd", void 0),
      Na([Qa()], zc.prototype, "leftPos", void 0),
      Na([Qa()], zc.prototype, "topPos", void 0);
    var Ac = mb(
      D ||
        (D = j([
          '.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}',
        ]))
    );
    class Bc extends La(zc) {
      static get defineId() {
        return "mwc-ripple";
      }
      static get elementDefinitions() {
        return Vb([], Bc);
      }
      static get styles() {
        return Ac;
      }
    }
    class Cc extends La(ic) {
      static get defineId() {
        return "mwc-list-item";
      }
      static get elementDefinitions() {
        return Vb([Bc], Cc);
      }
      static get styles() {
        return jc;
      }
    }
    var Dc = {
        UNKNOWN: "Unknown",
        BACKSPACE: "Backspace",
        ENTER: "Enter",
        SPACEBAR: "Spacebar",
        PAGE_UP: "PageUp",
        PAGE_DOWN: "PageDown",
        END: "End",
        HOME: "Home",
        ARROW_LEFT: "ArrowLeft",
        ARROW_UP: "ArrowUp",
        ARROW_RIGHT: "ArrowRight",
        ARROW_DOWN: "ArrowDown",
        DELETE: "Delete",
        ESCAPE: "Escape",
        TAB: "Tab",
      },
      Ec = new Set();
    Ec.add(Dc.BACKSPACE),
      Ec.add(Dc.ENTER),
      Ec.add(Dc.SPACEBAR),
      Ec.add(Dc.PAGE_UP),
      Ec.add(Dc.PAGE_DOWN),
      Ec.add(Dc.END),
      Ec.add(Dc.HOME),
      Ec.add(Dc.ARROW_LEFT),
      Ec.add(Dc.ARROW_UP),
      Ec.add(Dc.ARROW_RIGHT),
      Ec.add(Dc.ARROW_DOWN),
      Ec.add(Dc.DELETE),
      Ec.add(Dc.ESCAPE),
      Ec.add(Dc.TAB);
    var Fc = {
        BACKSPACE: 8,
        ENTER: 13,
        SPACEBAR: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        DELETE: 46,
        ESCAPE: 27,
        TAB: 9,
      },
      Gc = new Map();
    Gc.set(Fc.BACKSPACE, Dc.BACKSPACE),
      Gc.set(Fc.ENTER, Dc.ENTER),
      Gc.set(Fc.SPACEBAR, Dc.SPACEBAR),
      Gc.set(Fc.PAGE_UP, Dc.PAGE_UP),
      Gc.set(Fc.PAGE_DOWN, Dc.PAGE_DOWN),
      Gc.set(Fc.END, Dc.END),
      Gc.set(Fc.HOME, Dc.HOME),
      Gc.set(Fc.ARROW_LEFT, Dc.ARROW_LEFT),
      Gc.set(Fc.ARROW_UP, Dc.ARROW_UP),
      Gc.set(Fc.ARROW_RIGHT, Dc.ARROW_RIGHT),
      Gc.set(Fc.ARROW_DOWN, Dc.ARROW_DOWN),
      Gc.set(Fc.DELETE, Dc.DELETE),
      Gc.set(Fc.ESCAPE, Dc.ESCAPE),
      Gc.set(Fc.TAB, Dc.TAB);
    var Hc,
      Ic,
      Jc,
      Kc,
      Lc = new Set([
        Dc.PAGE_UP,
        Dc.PAGE_DOWN,
        Dc.END,
        Dc.HOME,
        Dc.ARROW_LEFT,
        Dc.ARROW_UP,
        Dc.ARROW_RIGHT,
        Dc.ARROW_DOWN,
      ]),
      Mc = {
        LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
        LIST_ITEM_CLASS: "mdc-list-item",
        LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
        LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
        LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
        LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
        ROOT: "mdc-list",
      },
      Nc =
        ((Hc = {}),
        (Hc["" + Mc.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated"),
        (Hc["" + Mc.LIST_ITEM_CLASS] = "mdc-list-item"),
        (Hc["" + Mc.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled"),
        (Hc["" + Mc.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected"),
        (Hc["" + Mc.LIST_ITEM_PRIMARY_TEXT_CLASS] =
          "mdc-list-item__primary-text"),
        (Hc["" + Mc.ROOT] = "mdc-list"),
        Hc),
      Oc =
        ((Ic = {}),
        (Ic["" + Mc.LIST_ITEM_ACTIVATED_CLASS] =
          "mdc-deprecated-list-item--activated"),
        (Ic["" + Mc.LIST_ITEM_CLASS] = "mdc-deprecated-list-item"),
        (Ic["" + Mc.LIST_ITEM_DISABLED_CLASS] =
          "mdc-deprecated-list-item--disabled"),
        (Ic["" + Mc.LIST_ITEM_SELECTED_CLASS] =
          "mdc-deprecated-list-item--selected"),
        (Ic["" + Mc.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text"),
        (Ic["" + Mc.LIST_ITEM_PRIMARY_TEXT_CLASS] =
          "mdc-deprecated-list-item__primary-text"),
        (Ic["" + Mc.ROOT] = "mdc-deprecated-list"),
        Ic),
      Pc = {
        ACTION_EVENT: "MDCList:action",
        ARIA_CHECKED: "aria-checked",
        ARIA_CHECKED_CHECKBOX_SELECTOR:
          '[role="checkbox"][aria-checked="true"]',
        ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
        ARIA_CURRENT: "aria-current",
        ARIA_DISABLED: "aria-disabled",
        ARIA_ORIENTATION: "aria-orientation",
        ARIA_ORIENTATION_HORIZONTAL: "horizontal",
        ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
        ARIA_SELECTED: "aria-selected",
        ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
        ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
        CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
        CHECKBOX_SELECTOR: 'input[type="checkbox"]',
        CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:
          "\n    ." +
          Mc.LIST_ITEM_CLASS +
          " button:not(:disabled),\n    ." +
          Mc.LIST_ITEM_CLASS +
          " a,\n    ." +
          Oc[Mc.LIST_ITEM_CLASS] +
          " button:not(:disabled),\n    ." +
          Oc[Mc.LIST_ITEM_CLASS] +
          " a\n  ",
        DEPRECATED_SELECTOR: ".mdc-deprecated-list",
        FOCUSABLE_CHILD_ELEMENTS:
          "\n    ." +
          Mc.LIST_ITEM_CLASS +
          " button:not(:disabled),\n    ." +
          Mc.LIST_ITEM_CLASS +
          " a,\n    ." +
          Mc.LIST_ITEM_CLASS +
          ' input[type="radio"]:not(:disabled),\n    .' +
          Mc.LIST_ITEM_CLASS +
          ' input[type="checkbox"]:not(:disabled),\n    .' +
          Oc[Mc.LIST_ITEM_CLASS] +
          " button:not(:disabled),\n    ." +
          Oc[Mc.LIST_ITEM_CLASS] +
          " a,\n    ." +
          Oc[Mc.LIST_ITEM_CLASS] +
          ' input[type="radio"]:not(:disabled),\n    .' +
          Oc[Mc.LIST_ITEM_CLASS] +
          ' input[type="checkbox"]:not(:disabled)\n  ',
        RADIO_SELECTOR: 'input[type="radio"]',
        SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]',
      },
      Qc = { UNSET_INDEX: -1, TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300 },
      Rc = ["input", "button", "textarea", "select"],
      Sc = function (a) {
        var b = a.target;
        if (b) {
          var c = ("" + b.tagName).toLowerCase();
          -1 === Rc.indexOf(c) && a.preventDefault();
        }
      },
      Tc =
        !(
          null ===
            (Kc =
              null === (Jc = window.ShadyDOM) || void 0 === Jc
                ? void 0
                : Jc.inUse) || void 0 === Kc
        ) && Kc;
    class Uc extends pc {
      constructor() {
        super(...arguments),
          (this.disabled = !1),
          (this.containingForm = null),
          (this.formDataListener = (a) => {
            this.disabled || this.setFormData(a.formData);
          });
      }
      findFormElement() {
        if (!this.shadowRoot || Tc) return null;
        var a = this.getRootNode(),
          b = a.querySelectorAll("form");
        for (var c of Array.from(b)) if (c.contains(this)) return c;
        return null;
      }
      connectedCallback() {
        var a;
        super.connectedCallback(),
          (this.containingForm = this.findFormElement()),
          null === (a = this.containingForm) || void 0 === a
            ? void 0
            : a.addEventListener("formdata", this.formDataListener);
      }
      disconnectedCallback() {
        var a;
        super.disconnectedCallback(),
          null === (a = this.containingForm) || void 0 === a
            ? void 0
            : a.removeEventListener("formdata", this.formDataListener),
          (this.containingForm = null);
      }
      click() {
        this.formElement &&
          !this.disabled &&
          (this.formElement.focus(), this.formElement.click());
      }
      firstUpdated() {
        super.firstUpdated(),
          this.shadowRoot &&
            this.mdcRoot.addEventListener("change", (a) => {
              this.dispatchEvent(new Event("change", a));
            });
      }
    }
    (Uc.shadowRootOptions = { mode: "open", delegatesFocus: !0 }),
      Na([Pa({ type: Boolean })], Uc.prototype, "disabled", void 0);
    var Vc = {
        LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
        LABEL_REQUIRED: "mdc-floating-label--required",
        LABEL_SHAKE: "mdc-floating-label--shake",
        ROOT: "mdc-floating-label",
      },
      Wc = (function (a) {
        function b(c) {
          var d = a.call(this, Yb(Yb({}, b.defaultAdapter), c)) || this;
          return (
            (d.shakeAnimationEndHandler = function () {
              d.handleShakeAnimationEnd();
            }),
            d
          );
        }
        return (
          Ma(b, a),
          Object.defineProperty(b, "cssClasses", {
            get: function () {
              return Vc;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "defaultAdapter", {
            get: function () {
              return {
                addClass: function () {},
                removeClass: function () {},
                getWidth: function () {
                  return 0;
                },
                registerInteractionHandler: function () {},
                deregisterInteractionHandler: function () {},
              };
            },
            enumerable: !1,
            configurable: !0,
          }),
          (b.prototype.init = function () {
            this.adapter.registerInteractionHandler(
              "animationend",
              this.shakeAnimationEndHandler
            );
          }),
          (b.prototype.destroy = function () {
            this.adapter.deregisterInteractionHandler(
              "animationend",
              this.shakeAnimationEndHandler
            );
          }),
          (b.prototype.getWidth = function () {
            return this.adapter.getWidth();
          }),
          (b.prototype.shake = function (a) {
            var c = b.cssClasses.LABEL_SHAKE;
            a ? this.adapter.addClass(c) : this.adapter.removeClass(c);
          }),
          (b.prototype.float = function (a) {
            var c = b.cssClasses,
              d = c.LABEL_FLOAT_ABOVE,
              e = c.LABEL_SHAKE;
            a
              ? this.adapter.addClass(d)
              : (this.adapter.removeClass(d), this.adapter.removeClass(e));
          }),
          (b.prototype.setRequired = function (a) {
            var c = b.cssClasses.LABEL_REQUIRED;
            a ? this.adapter.addClass(c) : this.adapter.removeClass(c);
          }),
          (b.prototype.handleShakeAnimationEnd = function () {
            var a = b.cssClasses.LABEL_SHAKE;
            this.adapter.removeClass(a);
          }),
          b
        );
      })(qc),
      Xc = (a) => ({
        addClass: (b) => a.classList.add(b),
        removeClass: (b) => a.classList.remove(b),
        getWidth: () => a.scrollWidth,
        registerInteractionHandler: (b, c) => {
          a.addEventListener(b, c);
        },
        deregisterInteractionHandler: (b, c) => {
          a.removeEventListener(b, c);
        },
      });
    var Yc = fc(
        class extends gc {
          constructor(a) {
            switch (
              (super(a),
              (this.foundation = null),
              (this.previousPart = null),
              a.type)
            ) {
              case ec.ATTRIBUTE:
              case ec.PROPERTY:
                break;
              default:
                throw new Error(
                  "FloatingLabel directive only support attribute and property parts"
                );
            }
          }
          update(a, b) {
            var [c] = b;
            if (a !== this.previousPart) {
              this.foundation && this.foundation.destroy(),
                (this.previousPart = a);
              var d = a.element;
              d.classList.add("mdc-floating-label");
              var e = Xc(d);
              (this.foundation = new Wc(e)), this.foundation.init();
            }
            return this.render(c);
          }
          render() {
            return this.foundation;
          }
        }
      ),
      Zc = {
        LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
        LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating",
      },
      $c = (function (a) {
        function b(c) {
          var d = a.call(this, Yb(Yb({}, b.defaultAdapter), c)) || this;
          return (
            (d.transitionEndHandler = function (a) {
              d.handleTransitionEnd(a);
            }),
            d
          );
        }
        return (
          Ma(b, a),
          Object.defineProperty(b, "cssClasses", {
            get: function () {
              return Zc;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "defaultAdapter", {
            get: function () {
              return {
                addClass: function () {},
                removeClass: function () {},
                hasClass: function () {
                  return !1;
                },
                setStyle: function () {},
                registerEventHandler: function () {},
                deregisterEventHandler: function () {},
              };
            },
            enumerable: !1,
            configurable: !0,
          }),
          (b.prototype.init = function () {
            this.adapter.registerEventHandler(
              "transitionend",
              this.transitionEndHandler
            );
          }),
          (b.prototype.destroy = function () {
            this.adapter.deregisterEventHandler(
              "transitionend",
              this.transitionEndHandler
            );
          }),
          (b.prototype.activate = function () {
            this.adapter.removeClass(Zc.LINE_RIPPLE_DEACTIVATING),
              this.adapter.addClass(Zc.LINE_RIPPLE_ACTIVE);
          }),
          (b.prototype.setRippleCenter = function (a) {
            this.adapter.setStyle("transform-origin", a + "px center");
          }),
          (b.prototype.deactivate = function () {
            this.adapter.addClass(Zc.LINE_RIPPLE_DEACTIVATING);
          }),
          (b.prototype.handleTransitionEnd = function (a) {
            var b = this.adapter.hasClass(Zc.LINE_RIPPLE_DEACTIVATING);
            "opacity" === a.propertyName &&
              b &&
              (this.adapter.removeClass(Zc.LINE_RIPPLE_ACTIVE),
              this.adapter.removeClass(Zc.LINE_RIPPLE_DEACTIVATING));
          }),
          b
        );
      })(qc),
      _c = (a) => ({
        addClass: (b) => a.classList.add(b),
        removeClass: (b) => a.classList.remove(b),
        hasClass: (b) => a.classList.contains(b),
        setStyle: (b, c) => a.style.setProperty(b, c),
        registerEventHandler: (b, c) => {
          a.addEventListener(b, c);
        },
        deregisterEventHandler: (b, c) => {
          a.removeEventListener(b, c);
        },
      });
    var ad,
      bd = fc(
        class extends gc {
          constructor(a) {
            switch (
              (super(a),
              (this.previousPart = null),
              (this.foundation = null),
              a.type)
            ) {
              case ec.ATTRIBUTE:
              case ec.PROPERTY:
                return;
              default:
                throw new Error(
                  "LineRipple only support attribute and property parts."
                );
            }
          }
          update(a) {
            if (this.previousPart !== a) {
              this.foundation && this.foundation.destroy(),
                (this.previousPart = a);
              var b = a.element;
              b.classList.add("mdc-line-ripple");
              var c = _c(b);
              (this.foundation = new $c(c)), this.foundation.init();
            }
            return this.render();
          }
          render() {
            return this.foundation;
          }
        }
      ),
      cd = {
        ANCHOR: "mdc-menu-surface--anchor",
        ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
        ANIMATING_OPEN: "mdc-menu-surface--animating-open",
        FIXED: "mdc-menu-surface--fixed",
        IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
        OPEN: "mdc-menu-surface--open",
        ROOT: "mdc-menu-surface",
      },
      dd = {
        CLOSED_EVENT: "MDCMenuSurface:closed",
        CLOSING_EVENT: "MDCMenuSurface:closing",
        OPENED_EVENT: "MDCMenuSurface:opened",
        FOCUSABLE_ELEMENTS:
          'button:not(:disabled), [href]:not([aria-disabled="true"]), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
      },
      ed = {
        TRANSITION_OPEN_DURATION: 120,
        TRANSITION_CLOSE_DURATION: 75,
        MARGIN_TO_EDGE: 32,
        ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
        TOUCH_EVENT_WAIT_MS: 30,
      };
    (function (a) {
      (a[(a.BOTTOM = 1)] = "BOTTOM"),
        (a[(a.CENTER = 2)] = "CENTER"),
        (a[(a.RIGHT = 4)] = "RIGHT"),
        (a[(a.FLIP_RTL = 8)] = "FLIP_RTL");
    })(ad || (ad = {}));
    var fd;
    (function (a) {
      (a[(a.TOP_LEFT = 0)] = "TOP_LEFT"),
        (a[(a.TOP_RIGHT = 4)] = "TOP_RIGHT"),
        (a[(a.BOTTOM_LEFT = 1)] = "BOTTOM_LEFT"),
        (a[(a.BOTTOM_RIGHT = 5)] = "BOTTOM_RIGHT"),
        (a[(a.TOP_START = 8)] = "TOP_START"),
        (a[(a.TOP_END = 12)] = "TOP_END"),
        (a[(a.BOTTOM_START = 9)] = "BOTTOM_START"),
        (a[(a.BOTTOM_END = 13)] = "BOTTOM_END");
    })(fd || (fd = {}));
    var gd = {
        ACTIVATED: "mdc-select--activated",
        DISABLED: "mdc-select--disabled",
        FOCUSED: "mdc-select--focused",
        INVALID: "mdc-select--invalid",
        MENU_INVALID: "mdc-select__menu--invalid",
        OUTLINED: "mdc-select--outlined",
        REQUIRED: "mdc-select--required",
        ROOT: "mdc-select",
        WITH_LEADING_ICON: "mdc-select--with-leading-icon",
      },
      hd = {
        ARIA_CONTROLS: "aria-controls",
        ARIA_DESCRIBEDBY: "aria-describedby",
        ARIA_SELECTED_ATTR: "aria-selected",
        CHANGE_EVENT: "MDCSelect:change",
        HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
        LABEL_SELECTOR: ".mdc-floating-label",
        LEADING_ICON_SELECTOR: ".mdc-select__icon",
        LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
        MENU_SELECTOR: ".mdc-select__menu",
        OUTLINE_SELECTOR: ".mdc-notched-outline",
        SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
        SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
        VALUE_ATTR: "data-value",
      },
      id = {
        LABEL_SCALE: 0.75,
        UNSET_INDEX: -1,
        CLICK_DEBOUNCE_TIMEOUT_MS: 330,
      },
      jd = (function (a) {
        function b(c, d) {
          void 0 === d && (d = {});
          var e = a.call(this, Yb(Yb({}, b.defaultAdapter), c)) || this;
          return (
            (e.disabled = !1),
            (e.isMenuOpen = !1),
            (e.useDefaultValidation = !0),
            (e.customValidity = !0),
            (e.lastSelectedIndex = id.UNSET_INDEX),
            (e.clickDebounceTimeout = 0),
            (e.recentlyClicked = !1),
            (e.leadingIcon = d.leadingIcon),
            (e.helperText = d.helperText),
            e
          );
        }
        return (
          Ma(b, a),
          Object.defineProperty(b, "cssClasses", {
            get: function () {
              return gd;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "numbers", {
            get: function () {
              return id;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "strings", {
            get: function () {
              return hd;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "defaultAdapter", {
            get: function () {
              return {
                addClass: function () {},
                removeClass: function () {},
                hasClass: function () {
                  return !1;
                },
                activateBottomLine: function () {},
                deactivateBottomLine: function () {},
                getSelectedIndex: function () {
                  return -1;
                },
                setSelectedIndex: function () {},
                hasLabel: function () {
                  return !1;
                },
                floatLabel: function () {},
                getLabelWidth: function () {
                  return 0;
                },
                setLabelRequired: function () {},
                hasOutline: function () {
                  return !1;
                },
                notchOutline: function () {},
                closeOutline: function () {},
                setRippleCenter: function () {},
                notifyChange: function () {},
                setSelectedText: function () {},
                isSelectAnchorFocused: function () {
                  return !1;
                },
                getSelectAnchorAttr: function () {
                  return "";
                },
                setSelectAnchorAttr: function () {},
                removeSelectAnchorAttr: function () {},
                addMenuClass: function () {},
                removeMenuClass: function () {},
                openMenu: function () {},
                closeMenu: function () {},
                getAnchorElement: function () {
                  return null;
                },
                setMenuAnchorElement: function () {},
                setMenuAnchorCorner: function () {},
                setMenuWrapFocus: function () {},
                focusMenuItemAtIndex: function () {},
                getMenuItemCount: function () {
                  return 0;
                },
                getMenuItemValues: function () {
                  return [];
                },
                getMenuItemTextAtIndex: function () {
                  return "";
                },
                isTypeaheadInProgress: function () {
                  return !1;
                },
                typeaheadMatchItem: function () {
                  return -1;
                },
              };
            },
            enumerable: !1,
            configurable: !0,
          }),
          (b.prototype.getSelectedIndex = function () {
            return this.adapter.getSelectedIndex();
          }),
          (b.prototype.setSelectedIndex = function (a, b, c) {
            void 0 === b && (b = !1),
              void 0 === c && (c = !1),
              a >= this.adapter.getMenuItemCount() ||
                (a === id.UNSET_INDEX
                  ? this.adapter.setSelectedText("")
                  : this.adapter.setSelectedText(
                      this.adapter.getMenuItemTextAtIndex(a).trim()
                    ),
                this.adapter.setSelectedIndex(a),
                b && this.adapter.closeMenu(),
                !c && this.lastSelectedIndex !== a && this.handleChange(),
                (this.lastSelectedIndex = a));
          }),
          (b.prototype.setValue = function (a, b) {
            void 0 === b && (b = !1);
            var c = this.adapter.getMenuItemValues().indexOf(a);
            this.setSelectedIndex(c, !1, b);
          }),
          (b.prototype.getValue = function () {
            var a = this.adapter.getSelectedIndex(),
              b = this.adapter.getMenuItemValues();
            return a === id.UNSET_INDEX ? "" : b[a];
          }),
          (b.prototype.getDisabled = function () {
            return this.disabled;
          }),
          (b.prototype.setDisabled = function (a) {
            (this.disabled = a),
              this.disabled
                ? (this.adapter.addClass(gd.DISABLED), this.adapter.closeMenu())
                : this.adapter.removeClass(gd.DISABLED),
              this.leadingIcon && this.leadingIcon.setDisabled(this.disabled),
              this.disabled
                ? this.adapter.removeSelectAnchorAttr("tabindex")
                : this.adapter.setSelectAnchorAttr("tabindex", "0"),
              this.adapter.setSelectAnchorAttr(
                "aria-disabled",
                this.disabled.toString()
              );
          }),
          (b.prototype.openMenu = function () {
            this.adapter.addClass(gd.ACTIVATED),
              this.adapter.openMenu(),
              (this.isMenuOpen = !0),
              this.adapter.setSelectAnchorAttr("aria-expanded", "true");
          }),
          (b.prototype.setHelperTextContent = function (a) {
            this.helperText && this.helperText.setContent(a);
          }),
          (b.prototype.layout = function () {
            if (this.adapter.hasLabel()) {
              var a = 0 < this.getValue().length,
                b = this.adapter.hasClass(gd.FOCUSED),
                c = a || b,
                d = this.adapter.hasClass(gd.REQUIRED);
              this.notchOutline(c),
                this.adapter.floatLabel(c),
                this.adapter.setLabelRequired(d);
            }
          }),
          (b.prototype.layoutOptions = function () {
            var a = this.adapter.getMenuItemValues(),
              b = a.indexOf(this.getValue());
            this.setSelectedIndex(b, !1, !0);
          }),
          (b.prototype.handleMenuOpened = function () {
            if (0 !== this.adapter.getMenuItemValues().length) {
              var a = this.getSelectedIndex(),
                b = 0 <= a ? a : 0;
              this.adapter.focusMenuItemAtIndex(b);
            }
          }),
          (b.prototype.handleMenuClosing = function () {
            this.adapter.setSelectAnchorAttr("aria-expanded", "false");
          }),
          (b.prototype.handleMenuClosed = function () {
            this.adapter.removeClass(gd.ACTIVATED),
              (this.isMenuOpen = !1),
              this.adapter.isSelectAnchorFocused() || this.blur();
          }),
          (b.prototype.handleChange = function () {
            this.layout(), this.adapter.notifyChange(this.getValue());
            var a = this.adapter.hasClass(gd.REQUIRED);
            a && this.useDefaultValidation && this.setValid(this.isValid());
          }),
          (b.prototype.handleMenuItemAction = function (a) {
            this.setSelectedIndex(a, !0);
          }),
          (b.prototype.handleFocus = function () {
            this.adapter.addClass(gd.FOCUSED),
              this.layout(),
              this.adapter.activateBottomLine();
          }),
          (b.prototype.handleBlur = function () {
            this.isMenuOpen || this.blur();
          }),
          (b.prototype.handleClick = function (a) {
            if (!(this.disabled || this.recentlyClicked))
              return (
                this.setClickDebounceTimeout(),
                this.isMenuOpen
                  ? void this.adapter.closeMenu()
                  : void (this.adapter.setRippleCenter(a), this.openMenu())
              );
          }),
          (b.prototype.handleKeydown = function (a) {
            if (!this.isMenuOpen && this.adapter.hasClass(gd.FOCUSED)) {
              var b = Xa(a) === Dc.ENTER,
                c = Xa(a) === Dc.SPACEBAR,
                d = Xa(a) === Dc.ARROW_UP,
                e = Xa(a) === Dc.ARROW_DOWN,
                f = a.ctrlKey || a.metaKey;
              if (
                !f &&
                ((!c && a.key && 1 === a.key.length) ||
                  (c && this.adapter.isTypeaheadInProgress()))
              ) {
                var g = c ? " " : a.key,
                  h = this.adapter.typeaheadMatchItem(
                    g,
                    this.getSelectedIndex()
                  );
                return (
                  0 <= h && this.setSelectedIndex(h), void a.preventDefault()
                );
              }
              (b || c || d || e) &&
                (d && 0 < this.getSelectedIndex()
                  ? this.setSelectedIndex(this.getSelectedIndex() - 1)
                  : e &&
                    this.getSelectedIndex() <
                      this.adapter.getMenuItemCount() - 1 &&
                    this.setSelectedIndex(this.getSelectedIndex() + 1),
                this.openMenu(),
                a.preventDefault());
            }
          }),
          (b.prototype.notchOutline = function (a) {
            if (this.adapter.hasOutline()) {
              var b = this.adapter.hasClass(gd.FOCUSED);
              if (a) {
                var c = id.LABEL_SCALE,
                  d = this.adapter.getLabelWidth() * c;
                this.adapter.notchOutline(d);
              } else b || this.adapter.closeOutline();
            }
          }),
          (b.prototype.setLeadingIconAriaLabel = function (a) {
            this.leadingIcon && this.leadingIcon.setAriaLabel(a);
          }),
          (b.prototype.setLeadingIconContent = function (a) {
            this.leadingIcon && this.leadingIcon.setContent(a);
          }),
          (b.prototype.getUseDefaultValidation = function () {
            return this.useDefaultValidation;
          }),
          (b.prototype.setUseDefaultValidation = function (a) {
            this.useDefaultValidation = a;
          }),
          (b.prototype.setValid = function (a) {
            this.useDefaultValidation || (this.customValidity = a),
              this.adapter.setSelectAnchorAttr("aria-invalid", (!a).toString()),
              a
                ? (this.adapter.removeClass(gd.INVALID),
                  this.adapter.removeMenuClass(gd.MENU_INVALID))
                : (this.adapter.addClass(gd.INVALID),
                  this.adapter.addMenuClass(gd.MENU_INVALID)),
              this.syncHelperTextValidity(a);
          }),
          (b.prototype.isValid = function () {
            return this.useDefaultValidation &&
              this.adapter.hasClass(gd.REQUIRED) &&
              !this.adapter.hasClass(gd.DISABLED)
              ? this.getSelectedIndex() !== id.UNSET_INDEX &&
                  (0 !== this.getSelectedIndex() || !!this.getValue())
              : this.customValidity;
          }),
          (b.prototype.setRequired = function (a) {
            a
              ? this.adapter.addClass(gd.REQUIRED)
              : this.adapter.removeClass(gd.REQUIRED),
              this.adapter.setSelectAnchorAttr("aria-required", a.toString()),
              this.adapter.setLabelRequired(a);
          }),
          (b.prototype.getRequired = function () {
            return "true" === this.adapter.getSelectAnchorAttr("aria-required");
          }),
          (b.prototype.init = function () {
            var a = this.adapter.getAnchorElement();
            a &&
              (this.adapter.setMenuAnchorElement(a),
              this.adapter.setMenuAnchorCorner(fd.BOTTOM_START)),
              this.adapter.setMenuWrapFocus(!1),
              this.setDisabled(this.adapter.hasClass(gd.DISABLED)),
              this.syncHelperTextValidity(!this.adapter.hasClass(gd.INVALID)),
              this.layout(),
              this.layoutOptions();
          }),
          (b.prototype.blur = function () {
            this.adapter.removeClass(gd.FOCUSED),
              this.layout(),
              this.adapter.deactivateBottomLine();
            var a = this.adapter.hasClass(gd.REQUIRED);
            a && this.useDefaultValidation && this.setValid(this.isValid());
          }),
          (b.prototype.syncHelperTextValidity = function (a) {
            if (this.helperText) {
              this.helperText.setValidity(a);
              var b = this.helperText.isVisible(),
                c = this.helperText.getId();
              b && c
                ? this.adapter.setSelectAnchorAttr(hd.ARIA_DESCRIBEDBY, c)
                : this.adapter.removeSelectAnchorAttr(hd.ARIA_DESCRIBEDBY);
            }
          }),
          (b.prototype.setClickDebounceTimeout = function () {
            var a = this;
            clearTimeout(this.clickDebounceTimeout),
              (this.clickDebounceTimeout = setTimeout(function () {
                a.recentlyClicked = !1;
              }, id.CLICK_DEBOUNCE_TIMEOUT_MS)),
              (this.recentlyClicked = !0);
          }),
          b
        );
      })(qc),
      kd = (a) => (null == a ? b : a),
      ld = function () {
        var a =
            0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {},
          b = {};
        for (var c in a) b[c] = a[c];
        return Object.assign(
          {
            badInput: !1,
            customError: !1,
            patternMismatch: !1,
            rangeOverflow: !1,
            rangeUnderflow: !1,
            stepMismatch: !1,
            tooLong: !1,
            tooShort: !1,
            typeMismatch: !1,
            valid: !0,
            valueMissing: !1,
          },
          b
        );
      };
    class md extends Uc {
      constructor() {
        super(...arguments),
          (this.mdcFoundationClass = jd),
          (this.disabled = !1),
          (this.outlined = !1),
          (this.label = ""),
          (this.outlineOpen = !1),
          (this.outlineWidth = 0),
          (this.value = ""),
          (this.name = ""),
          (this.selectedText = ""),
          (this.icon = ""),
          (this.menuOpen = !1),
          (this.helper = ""),
          (this.validateOnInitialRender = !1),
          (this.validationMessage = ""),
          (this.required = !1),
          (this.naturalMenuWidth = !1),
          (this.isUiValid = !0),
          (this.fixedMenuPosition = !1),
          (this.typeaheadState = Ya()),
          (this.sortedIndexByFirstChar = new Map()),
          (this.menuElement_ = null),
          (this.listeners = []),
          (this.onBodyClickBound = () => void 0),
          (this._menuUpdateComplete = null),
          (this.valueSetDirectly = !1),
          (this.validityTransform = null),
          (this._validity = ld());
      }
      get items() {
        return (
          this.menuElement_ || (this.menuElement_ = this.menuElement),
          this.menuElement_ ? this.menuElement_.items : []
        );
      }
      get selected() {
        var a = this.menuElement;
        return a ? a.selected : null;
      }
      get index() {
        var a = this.menuElement;
        return a ? a.index : -1;
      }
      get shouldRenderHelperText() {
        return !!this.helper || !!this.validationMessage;
      }
      get validity() {
        return this._checkValidity(this.value), this._validity;
      }
      render() {
        var a = {
            "mdc-select--disabled": this.disabled,
            "mdc-select--no-label": !this.label,
            "mdc-select--filled": !this.outlined,
            "mdc-select--outlined": this.outlined,
            "mdc-select--with-leading-icon": !!this.icon,
            "mdc-select--required": this.required,
            "mdc-select--invalid": !this.isUiValid,
          },
          b = { "mdc-select__menu--invalid": !this.isUiValid },
          c = !this.label ? void 0 : "label",
          d = this.shouldRenderHelperText ? "helper-text" : void 0;
        return g(
          E ||
            (E = j([
              '\n      <div\n          class="mdc-select ',
              '">\n        <input\n            class="formElement"\n            name="',
              '"\n            .value="',
              '"\n            hidden\n            ?disabled="',
              '"\n            ?required=',
              '>\n        <!-- @ts-ignore -->\n        <div class="mdc-select__anchor"\n            aria-autocomplete="none"\n            role="combobox"\n            aria-expanded=',
              "\n            aria-invalid=",
              '\n            aria-haspopup="listbox"\n            aria-labelledby=',
              "\n            aria-required=",
              "\n            aria-describedby=",
              "\n            @click=",
              "\n            @focus=",
              "\n            @blur=",
              "\n            @keydown=",
              ">\n          ",
              "\n          ",
              "\n          ",
              '\n          <span class="mdc-select__selected-text-container">\n            <span class="mdc-select__selected-text">',
              '</span>\n          </span>\n          <span class="mdc-select__dropdown-icon">\n            <svg\n                class="mdc-select__dropdown-icon-graphic"\n                viewBox="7 10 10 5"\n                focusable="false">\n              <polygon\n                  class="mdc-select__dropdown-icon-inactive"\n                  stroke="none"\n                  fill-rule="evenodd"\n                  points="7 10 12 15 17 10">\n              </polygon>\n              <polygon\n                  class="mdc-select__dropdown-icon-active"\n                  stroke="none"\n                  fill-rule="evenodd"\n                  points="7 15 12 10 17 15">\n              </polygon>\n            </svg>\n          </span>\n          ',
              '\n        </div>\n        <mwc-menu\n            innerRole="listbox"\n            wrapFocus\n            class="mdc-select__menu mdc-menu mdc-menu-surface ',
              '"\n            activatable\n            .fullwidth=',
              "\n            .open=",
              "\n            .anchor=",
              "\n            .fixed=",
              "\n            @selected=",
              "\n            @opened=",
              "\n            @closed=",
              "\n            @items-updated=",
              "\n            @keydown=",
              ">\n          <slot></slot>\n        </mwc-menu>\n      </div>\n      ",
              "",
            ])),
          hc(a),
          this.name,
          this.value,
          this.disabled,
          this.required,
          this.menuOpen,
          !this.isUiValid,
          kd(c),
          this.required,
          kd(d),
          this.onClick,
          this.onFocus,
          this.onBlur,
          this.onKeydown,
          this.renderRipple(),
          this.outlined ? this.renderOutline() : this.renderLabel(),
          this.renderLeadingIcon(),
          this.selectedText,
          this.renderLineRipple(),
          hc(b),
          !this.fixedMenuPosition && !this.naturalMenuWidth,
          this.menuOpen,
          this.anchorElement,
          this.fixedMenuPosition,
          this.onSelected,
          this.onOpened,
          this.onClosed,
          this.onItemsUpdated,
          this.handleTypeahead,
          this.renderHelperText()
        );
      }
      renderRipple() {
        return this.outlined
          ? b
          : g(
              F ||
                (F = j([
                  '\n      <span class="mdc-select__ripple"></span>\n    ',
                ]))
            );
      }
      renderOutline() {
        return this.outlined
          ? g(
              G ||
                (G = j([
                  "\n      <mwc-notched-outline\n          .width=",
                  "\n          .open=",
                  '\n          class="mdc-notched-outline">\n        ',
                  "\n      </mwc-notched-outline>",
                ])),
              this.outlineWidth,
              this.outlineOpen,
              this.renderLabel()
            )
          : b;
      }
      renderLabel() {
        return this.label
          ? g(
              H ||
                (H = j([
                  "\n      <span\n          .floatingLabelFoundation=",
                  '\n          id="label">',
                  "</span>\n    ",
                ])),
              Yc(this.label),
              this.label
            )
          : b;
      }
      renderLeadingIcon() {
        return this.icon
          ? g(
              I ||
                (I = j([
                  '<mwc-icon class="mdc-select__icon"><div>',
                  "</div></mwc-icon>",
                ])),
              this.icon
            )
          : b;
      }
      renderLineRipple() {
        return this.outlined
          ? b
          : g(
              J ||
                (J = j([
                  "\n      <span .lineRippleFoundation=",
                  "></span>\n    ",
                ])),
              bd()
            );
      }
      renderHelperText() {
        if (!this.shouldRenderHelperText) return b;
        var a = this.validationMessage && !this.isUiValid;
        return g(
          K ||
            (K = j([
              '\n        <p\n          class="mdc-select-helper-text ',
              '"\n          id="helper-text">',
              "</p>",
            ])),
          hc({ "mdc-select-helper-text--validation-msg": a }),
          a ? this.validationMessage : this.helper
        );
      }
      createAdapter() {
        var a = this;
        return Object.assign(Object.assign({}, Va(this.mdcRoot)), {
          activateBottomLine: () => {
            this.lineRippleElement &&
              this.lineRippleElement.lineRippleFoundation.activate();
          },
          deactivateBottomLine: () => {
            this.lineRippleElement &&
              this.lineRippleElement.lineRippleFoundation.deactivate();
          },
          hasLabel: () => !!this.label,
          floatLabel: (a) => {
            this.labelElement &&
              this.labelElement.floatingLabelFoundation.float(a);
          },
          getLabelWidth: () =>
            this.labelElement
              ? this.labelElement.floatingLabelFoundation.getWidth()
              : 0,
          setLabelRequired: (a) => {
            this.labelElement &&
              this.labelElement.floatingLabelFoundation.setRequired(a);
          },
          hasOutline: () => this.outlined,
          notchOutline: (a) => {
            var b = this.outlineElement;
            b &&
              !this.outlineOpen &&
              ((this.outlineWidth = a), (this.outlineOpen = !0));
          },
          closeOutline: () => {
            this.outlineElement && (this.outlineOpen = !1);
          },
          setRippleCenter: (a) => {
            if (this.lineRippleElement) {
              var b = this.lineRippleElement.lineRippleFoundation;
              b.setRippleCenter(a);
            }
          },
          notifyChange: (function () {
            var b = o(function* (b) {
              if (a.valueSetDirectly || b !== a.value) {
                (a.valueSetDirectly = !1),
                  (a.value = b),
                  yield a.updateComplete;
                var c = new Event("change", { bubbles: !0 });
                a.dispatchEvent(c);
              }
            });
            return function () {
              return b.apply(this, arguments);
            };
          })(),
          setSelectedText: (a) => (this.selectedText = a),
          isSelectAnchorFocused: () => {
            var a = this.anchorElement;
            if (!a) return !1;
            var b = a.getRootNode();
            return b.activeElement === a;
          },
          getSelectAnchorAttr: (a) => {
            var b = this.anchorElement;
            return b ? b.getAttribute(a) : null;
          },
          setSelectAnchorAttr: (a, b) => {
            var c = this.anchorElement;
            c && c.setAttribute(a, b);
          },
          removeSelectAnchorAttr: (a) => {
            var b = this.anchorElement;
            b && b.removeAttribute(a);
          },
          openMenu: () => {
            this.menuOpen = !0;
          },
          closeMenu: () => {
            this.menuOpen = !1;
          },
          addMenuClass: () => void 0,
          removeMenuClass: () => void 0,
          getAnchorElement: () => this.anchorElement,
          setMenuAnchorElement: () => {},
          setMenuAnchorCorner: () => {
            var a = this.menuElement;
            a && (a.corner = "BOTTOM_START");
          },
          setMenuWrapFocus: (a) => {
            var b = this.menuElement;
            b && (b.wrapFocus = a);
          },
          focusMenuItemAtIndex: (a) => {
            var b = this.menuElement;
            if (b) {
              var c = b.items[a];
              c && c.focus();
            }
          },
          getMenuItemCount: () => {
            var a = this.menuElement;
            return a ? a.items.length : 0;
          },
          getMenuItemValues: () => {
            var a = this.menuElement;
            if (!a) return [];
            var b = a.items;
            return b.map((a) => a.value);
          },
          getMenuItemTextAtIndex: (a) => {
            var b = this.menuElement;
            if (!b) return "";
            var c = b.items[a];
            return c ? c.text : "";
          },
          getSelectedIndex: () => this.index,
          setSelectedIndex: () => void 0,
          isTypeaheadInProgress: () => cb(this.typeaheadState),
          typeaheadMatchItem: (a, b) => {
            if (!this.menuElement) return -1;
            var c = {
                focusItemAtIndex: (a) => {
                  this.menuElement.focusItemAtIndex(a);
                },
                focusedItemIndex: b
                  ? b
                  : this.menuElement.getFocusedItemIndex(),
                nextChar: a,
                sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                skipFocus: !1,
                isItemAtIndexDisabled: (a) => this.items[a].disabled,
              },
              d = $a(c, this.typeaheadState);
            return -1 !== d && this.select(d), d;
          },
        });
      }
      checkValidity() {
        var a = this._checkValidity(this.value);
        if (!a) {
          var b = new Event("invalid", { bubbles: !1, cancelable: !0 });
          this.dispatchEvent(b);
        }
        return a;
      }
      reportValidity() {
        var a = this.checkValidity();
        return (this.isUiValid = a), a;
      }
      _checkValidity(a) {
        var b = this.formElement.validity,
          c = ld(b);
        if (this.validityTransform) {
          var d = this.validityTransform(a, c);
          c = Object.assign(Object.assign({}, c), d);
        }
        return (this._validity = c), this._validity.valid;
      }
      setCustomValidity(a) {
        (this.validationMessage = a), this.formElement.setCustomValidity(a);
      }
      getUpdateComplete() {
        var a = () => super.getUpdateComplete,
          b = this;
        return o(function* () {
          yield b._menuUpdateComplete;
          var c = yield a().call(b);
          return c;
        })();
      }
      firstUpdated() {
        var a = () => super.firstUpdated,
          b = this;
        return o(function* () {
          var c = b.menuElement;
          if (
            (c &&
              ((b._menuUpdateComplete = c.updateComplete),
              yield b._menuUpdateComplete),
            a().call(b),
            (b.mdcFoundation.isValid = () => !0),
            (b.mdcFoundation.setValid = () => void 0),
            b.mdcFoundation.setDisabled(b.disabled),
            b.validateOnInitialRender && b.reportValidity(),
            !b.selected)
          ) {
            !b.items.length &&
              b.slotElement &&
              b.slotElement.assignedNodes({ flatten: !0 }).length &&
              (yield new Promise((a) => requestAnimationFrame(a)),
              yield b.layout());
            var d = b.items.length && "" === b.items[0].value;
            if (!b.value && d) return void b.select(0);
            b.selectByValue(b.value);
          }
          b.sortedIndexByFirstChar = Za(b.items.length, (a) => b.items[a].text);
        })();
      }
      onItemsUpdated() {
        this.sortedIndexByFirstChar = Za(
          this.items.length,
          (a) => this.items[a].text
        );
      }
      select(a) {
        var b = this.menuElement;
        b && b.select(a);
      }
      selectByValue(a) {
        for (var b, c = -1, d = 0; d < this.items.length; d++)
          if (((b = this.items[d]), b.value === a)) {
            c = d;
            break;
          }
        (this.valueSetDirectly = !0),
          this.select(c),
          this.mdcFoundation.handleChange();
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        for (var a of this.listeners)
          a.target.removeEventListener(a.name, a.cb);
      }
      focus() {
        var a = new CustomEvent("focus"),
          b = this.anchorElement;
        b && (b.dispatchEvent(a), b.focus());
      }
      blur() {
        var a = new CustomEvent("blur"),
          b = this.anchorElement;
        b && (b.dispatchEvent(a), b.blur());
      }
      onFocus() {
        this.mdcFoundation && this.mdcFoundation.handleFocus();
      }
      onBlur() {
        this.mdcFoundation && this.mdcFoundation.handleBlur();
        var a = this.menuElement;
        a && !a.open && this.reportValidity();
      }
      onClick(a) {
        if (this.mdcFoundation) {
          this.focus();
          var b = a.target.getBoundingClientRect(),
            c = 0;
          c = "touches" in a ? a.touches[0].clientX : a.clientX;
          var d = c - b.left;
          this.mdcFoundation.handleClick(d);
        }
      }
      onKeydown(a) {
        var b = Xa(a) === Dc.ARROW_UP,
          c = Xa(a) === Dc.ARROW_DOWN;
        if (c || b) {
          var d = b && 0 < this.index,
            e = c && this.index < this.items.length - 1;
          return (
            d ? this.select(this.index - 1) : e && this.select(this.index + 1),
            a.preventDefault(),
            void this.mdcFoundation.openMenu()
          );
        }
        this.mdcFoundation.handleKeydown(a);
      }
      handleTypeahead(a) {
        if (this.menuElement) {
          var b = this.menuElement.getFocusedItemIndex(),
            c = kc(a.target) ? a.target : null,
            d = !!c && c.hasAttribute("mwc-list-item"),
            e = {
              event: a,
              focusItemAtIndex: (a) => {
                this.menuElement.focusItemAtIndex(a);
              },
              focusedItemIndex: b,
              isTargetListItem: d,
              sortedIndexByFirstChar: this.sortedIndexByFirstChar,
              isItemAtIndexDisabled: (a) => this.items[a].disabled,
            };
          eb(e, this.typeaheadState);
        }
      }
      onSelected(a) {
        var b = this;
        return o(function* () {
          b.mdcFoundation || (yield b.updateComplete),
            b.mdcFoundation.handleMenuItemAction(a.detail.index);
          var c = b.items[a.detail.index];
          c && (b.value = c.value);
        })();
      }
      onOpened() {
        this.mdcFoundation &&
          ((this.menuOpen = !0), this.mdcFoundation.handleMenuOpened());
      }
      onClosed() {
        this.mdcFoundation &&
          ((this.menuOpen = !1), this.mdcFoundation.handleMenuClosed());
      }
      setFormData(a) {
        this.name && null !== this.selected && a.append(this.name, this.value);
      }
      layout() {
        var a = arguments,
          b = this;
        return o(function* () {
          var c = !(0 < a.length && void 0 !== a[0]) || a[0];
          b.mdcFoundation && b.mdcFoundation.layout(), yield b.updateComplete;
          var d = b.menuElement;
          d && d.layout(c);
          var e = b.labelElement;
          if (!e) return void (b.outlineOpen = !1);
          var f = !!b.label && !!b.value;
          if ((e.floatingLabelFoundation.float(f), !!b.outlined)) {
            (b.outlineOpen = f), yield b.updateComplete;
            var g = e.floatingLabelFoundation.getWidth();
            b.outlineOpen && (b.outlineWidth = g);
          }
        })();
      }
      layoutOptions() {
        var a = this;
        return o(function* () {
          a.mdcFoundation && a.mdcFoundation.layoutOptions();
        })();
      }
    }
    Na([Ra(".mdc-select")], md.prototype, "mdcRoot", void 0),
      Na([Ra(".formElement")], md.prototype, "formElement", void 0),
      Na([Ra("slot")], md.prototype, "slotElement", void 0),
      Na([Ra("select")], md.prototype, "nativeSelectElement", void 0),
      Na([Ra("input")], md.prototype, "nativeInputElement", void 0),
      Na([Ra(".mdc-line-ripple")], md.prototype, "lineRippleElement", void 0),
      Na([Ra(".mdc-floating-label")], md.prototype, "labelElement", void 0),
      Na([Ra("mwc-notched-outline")], md.prototype, "outlineElement", void 0),
      Na([Ra(".mdc-menu")], md.prototype, "menuElement", void 0),
      Na([Ra(".mdc-select__anchor")], md.prototype, "anchorElement", void 0),
      Na(
        [
          Pa({ type: Boolean, attribute: "disabled", reflect: !0 }),
          Zb(function (a) {
            this.mdcFoundation && this.mdcFoundation.setDisabled(a);
          }),
        ],
        md.prototype,
        "disabled",
        void 0
      ),
      Na(
        [
          Pa({ type: Boolean }),
          Zb(function (a, b) {
            b !== void 0 && this.outlined !== b && this.layout(!1);
          }),
        ],
        md.prototype,
        "outlined",
        void 0
      ),
      Na(
        [
          Pa({ type: String }),
          Zb(function (a, b) {
            b !== void 0 && this.label !== b && this.layout(!1);
          }),
        ],
        md.prototype,
        "label",
        void 0
      ),
      Na([Qa()], md.prototype, "outlineOpen", void 0),
      Na([Qa()], md.prototype, "outlineWidth", void 0),
      Na(
        [
          Pa({ type: String }),
          Zb(function (a) {
            if (this.mdcFoundation) {
              var b = null === this.selected && !!a,
                c = this.selected && this.selected.value !== a;
              (b || c) && this.selectByValue(a), this.reportValidity();
            }
          }),
        ],
        md.prototype,
        "value",
        void 0
      ),
      Na([Pa()], md.prototype, "name", void 0),
      Na([Qa()], md.prototype, "selectedText", void 0),
      Na([Pa({ type: String })], md.prototype, "icon", void 0),
      Na([Qa()], md.prototype, "menuOpen", void 0),
      Na([Pa({ type: String })], md.prototype, "helper", void 0),
      Na(
        [Pa({ type: Boolean })],
        md.prototype,
        "validateOnInitialRender",
        void 0
      ),
      Na([Pa({ type: String })], md.prototype, "validationMessage", void 0),
      Na([Pa({ type: Boolean })], md.prototype, "required", void 0),
      Na([Pa({ type: Boolean })], md.prototype, "naturalMenuWidth", void 0),
      Na([Qa()], md.prototype, "isUiValid", void 0),
      Na([Pa({ type: Boolean })], md.prototype, "fixedMenuPosition", void 0),
      Na(
        [
          (function (a) {
            return cc({
              finisher: (b, c) => {
                Object.assign(b.prototype[c], a);
              },
            });
          })({ capture: !0 }),
        ],
        md.prototype,
        "handleTypeahead",
        null
      );
    var nd,
      od = mb(
        O ||
          (O = j([
            '.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl],.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list-item__start{display:inline-flex;align-items:center}.mdc-select__option{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select__option,.mdc-select__option[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select__one-line-option.mdc-list-item--with-one-line{height:48px}.mdc-select__two-line-option.mdc-list-item--with-two-lines{height:64px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__start{margin-top:20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-select__option-with-leading-content{padding-left:0;padding-right:12px}.mdc-select__option-with-leading-content.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-select__option-with-leading-content.mdc-list-item,.mdc-select__option-with-leading-content.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-select__option-with-leading-content .mdc-list-item__start{margin-left:12px;margin-right:0}[dir=rtl] .mdc-select__option-with-leading-content .mdc-list-item__start,.mdc-select__option-with-leading-content .mdc-list-item__start[dir=rtl]{margin-left:0;margin-right:12px}.mdc-select__option-with-leading-content .mdc-list-item__start{width:36px;height:24px}[dir=rtl] .mdc-select__option-with-leading-content,.mdc-select__option-with-leading-content[dir=rtl]{padding-left:12px;padding-right:0}.mdc-select__option-with-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-select__option-with-meta.mdc-list-item,.mdc-select__option-with-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-select__option-with-meta .mdc-list-item__end{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select__option-with-meta .mdc-list-item__end,.mdc-select__option-with-meta .mdc-list-item__end[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"\u200B"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"\u200B"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}',
          ]))
      ),
      pd = {
        MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
        MENU_SELECTION_GROUP: "mdc-menu__selection-group",
        ROOT: "mdc-menu",
      },
      qd = {
        ARIA_CHECKED_ATTR: "aria-checked",
        ARIA_DISABLED_ATTR: "aria-disabled",
        CHECKBOX_SELECTOR: 'input[type="checkbox"]',
        LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
        SELECTED_EVENT: "MDCMenu:selected",
        SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus",
      },
      rd = { FOCUS_ROOT_INDEX: -1 };
    (function (a) {
      (a[(a.NONE = 0)] = "NONE"),
        (a[(a.LIST_ROOT = 1)] = "LIST_ROOT"),
        (a[(a.FIRST_ITEM = 2)] = "FIRST_ITEM"),
        (a[(a.LAST_ITEM = 3)] = "LAST_ITEM");
    })(nd || (nd = {}));
    var sd = (function (a) {
        function b(c) {
          var d = a.call(this, Yb(Yb({}, b.defaultAdapter), c)) || this;
          return (
            (d.isSurfaceOpen = !1),
            (d.isQuickOpen = !1),
            (d.isHoistedElement = !1),
            (d.isFixedPosition = !1),
            (d.isHorizontallyCenteredOnViewport = !1),
            (d.maxHeight = 0),
            (d.openBottomBias = 0),
            (d.openAnimationEndTimerId = 0),
            (d.closeAnimationEndTimerId = 0),
            (d.animationRequestId = 0),
            (d.anchorCorner = fd.TOP_START),
            (d.originCorner = fd.TOP_START),
            (d.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }),
            (d.position = { x: 0, y: 0 }),
            d
          );
        }
        return (
          Ma(b, a),
          Object.defineProperty(b, "cssClasses", {
            get: function () {
              return cd;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "strings", {
            get: function () {
              return dd;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "numbers", {
            get: function () {
              return ed;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "Corner", {
            get: function () {
              return fd;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "defaultAdapter", {
            get: function () {
              return {
                addClass: function () {},
                removeClass: function () {},
                hasClass: function () {
                  return !1;
                },
                hasAnchor: function () {
                  return !1;
                },
                isElementInContainer: function () {
                  return !1;
                },
                isFocused: function () {
                  return !1;
                },
                isRtl: function () {
                  return !1;
                },
                getInnerDimensions: function () {
                  return { height: 0, width: 0 };
                },
                getAnchorDimensions: function () {
                  return null;
                },
                getWindowDimensions: function () {
                  return { height: 0, width: 0 };
                },
                getBodyDimensions: function () {
                  return { height: 0, width: 0 };
                },
                getWindowScroll: function () {
                  return { x: 0, y: 0 };
                },
                setPosition: function () {},
                setMaxHeight: function () {},
                setTransformOrigin: function () {},
                saveFocus: function () {},
                restoreFocus: function () {},
                notifyClose: function () {},
                notifyOpen: function () {},
                notifyClosing: function () {},
              };
            },
            enumerable: !1,
            configurable: !0,
          }),
          (b.prototype.init = function () {
            var a = b.cssClasses,
              c = a.ROOT,
              d = a.OPEN;
            if (!this.adapter.hasClass(c))
              throw new Error(c + " class required in root element.");
            this.adapter.hasClass(d) && (this.isSurfaceOpen = !0);
          }),
          (b.prototype.destroy = function () {
            clearTimeout(this.openAnimationEndTimerId),
              clearTimeout(this.closeAnimationEndTimerId),
              cancelAnimationFrame(this.animationRequestId);
          }),
          (b.prototype.setAnchorCorner = function (a) {
            this.anchorCorner = a;
          }),
          (b.prototype.flipCornerHorizontally = function () {
            this.originCorner ^= ad.RIGHT;
          }),
          (b.prototype.setAnchorMargin = function (a) {
            (this.anchorMargin.top = a.top || 0),
              (this.anchorMargin.right = a.right || 0),
              (this.anchorMargin.bottom = a.bottom || 0),
              (this.anchorMargin.left = a.left || 0);
          }),
          (b.prototype.setIsHoisted = function (a) {
            this.isHoistedElement = a;
          }),
          (b.prototype.setFixedPosition = function (a) {
            this.isFixedPosition = a;
          }),
          (b.prototype.isFixed = function () {
            return this.isFixedPosition;
          }),
          (b.prototype.setAbsolutePosition = function (a, b) {
            (this.position.x = this.isFinite(a) ? a : 0),
              (this.position.y = this.isFinite(b) ? b : 0);
          }),
          (b.prototype.setIsHorizontallyCenteredOnViewport = function (a) {
            this.isHorizontallyCenteredOnViewport = a;
          }),
          (b.prototype.setQuickOpen = function (a) {
            this.isQuickOpen = a;
          }),
          (b.prototype.setMaxHeight = function (a) {
            this.maxHeight = a;
          }),
          (b.prototype.setOpenBottomBias = function (a) {
            this.openBottomBias = a;
          }),
          (b.prototype.isOpen = function () {
            return this.isSurfaceOpen;
          }),
          (b.prototype.open = function () {
            var a = this;
            this.isSurfaceOpen ||
              (this.adapter.saveFocus(),
              this.isQuickOpen
                ? ((this.isSurfaceOpen = !0),
                  this.adapter.addClass(b.cssClasses.OPEN),
                  (this.dimensions = this.adapter.getInnerDimensions()),
                  this.autoposition(),
                  this.adapter.notifyOpen())
                : (this.adapter.addClass(b.cssClasses.ANIMATING_OPEN),
                  (this.animationRequestId = requestAnimationFrame(function () {
                    (a.dimensions = a.adapter.getInnerDimensions()),
                      a.autoposition(),
                      a.adapter.addClass(b.cssClasses.OPEN),
                      (a.openAnimationEndTimerId = setTimeout(function () {
                        (a.openAnimationEndTimerId = 0),
                          a.adapter.removeClass(b.cssClasses.ANIMATING_OPEN),
                          a.adapter.notifyOpen();
                      }, ed.TRANSITION_OPEN_DURATION));
                  })),
                  (this.isSurfaceOpen = !0)));
          }),
          (b.prototype.close = function (a) {
            var c = this;
            if ((void 0 === a && (a = !1), !!this.isSurfaceOpen))
              return (
                this.adapter.notifyClosing(),
                this.isQuickOpen
                  ? ((this.isSurfaceOpen = !1),
                    a || this.maybeRestoreFocus(),
                    this.adapter.removeClass(b.cssClasses.OPEN),
                    this.adapter.removeClass(b.cssClasses.IS_OPEN_BELOW),
                    void this.adapter.notifyClose())
                  : void (this.adapter.addClass(b.cssClasses.ANIMATING_CLOSED),
                    requestAnimationFrame(function () {
                      c.adapter.removeClass(b.cssClasses.OPEN),
                        c.adapter.removeClass(b.cssClasses.IS_OPEN_BELOW),
                        (c.closeAnimationEndTimerId = setTimeout(function () {
                          (c.closeAnimationEndTimerId = 0),
                            c.adapter.removeClass(
                              b.cssClasses.ANIMATING_CLOSED
                            ),
                            c.adapter.notifyClose();
                        }, ed.TRANSITION_CLOSE_DURATION));
                    }),
                    (this.isSurfaceOpen = !1),
                    !a && this.maybeRestoreFocus())
              );
          }),
          (b.prototype.handleBodyClick = function (a) {
            var b = a.target;
            this.adapter.isElementInContainer(b) || this.close();
          }),
          (b.prototype.handleKeydown = function (a) {
            var b = a.keyCode,
              c = a.key;
            ("Escape" === c || 27 === b) && this.close();
          }),
          (b.prototype.autoposition = function () {
            var a;
            this.measurements = this.getAutoLayoutmeasurements();
            var c = this.getoriginCorner(),
              d = this.getMenuSurfaceMaxHeight(c),
              e = this.hasBit(c, ad.BOTTOM) ? "bottom" : "top",
              f = this.hasBit(c, ad.RIGHT) ? "right" : "left",
              g = this.getHorizontalOriginOffset(c),
              h = this.getVerticalOriginOffset(c),
              i = this.measurements,
              j = i.anchorSize,
              k = i.surfaceSize,
              l = ((a = {}), (a[f] = g), (a[e] = h), a);
            j.width / k.width > ed.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO &&
              (f = "center"),
              (this.isHoistedElement || this.isFixedPosition) &&
                this.adjustPositionForHoistedElement(l),
              this.adapter.setTransformOrigin(f + " " + e),
              this.adapter.setPosition(l),
              this.adapter.setMaxHeight(d ? d + "px" : ""),
              this.hasBit(c, ad.BOTTOM) ||
                this.adapter.addClass(b.cssClasses.IS_OPEN_BELOW);
          }),
          (b.prototype.getAutoLayoutmeasurements = function () {
            var a = this.adapter.getAnchorDimensions(),
              b = this.adapter.getBodyDimensions(),
              c = this.adapter.getWindowDimensions(),
              d = this.adapter.getWindowScroll();
            return (
              a ||
                (a = {
                  top: this.position.y,
                  right: this.position.x,
                  bottom: this.position.y,
                  left: this.position.x,
                  width: 0,
                  height: 0,
                }),
              {
                anchorSize: a,
                bodySize: b,
                surfaceSize: this.dimensions,
                viewportDistance: {
                  top: a.top,
                  right: c.width - a.right,
                  bottom: c.height - a.bottom,
                  left: a.left,
                },
                viewportSize: c,
                windowScroll: d,
              }
            );
          }),
          (b.prototype.getoriginCorner = function () {
            var a,
              c,
              d = this.originCorner,
              e = this.measurements,
              f = e.viewportDistance,
              g = e.anchorSize,
              h = e.surfaceSize,
              i = b.numbers.MARGIN_TO_EDGE,
              j = this.hasBit(this.anchorCorner, ad.BOTTOM);
            j
              ? ((a = f.top - i + this.anchorMargin.bottom),
                (c = f.bottom - i - this.anchorMargin.bottom))
              : ((a = f.top - i + this.anchorMargin.top),
                (c = f.bottom - i + g.height - this.anchorMargin.top));
            var k = 0 < c - h.height;
            !k &&
              a > c + this.openBottomBias &&
              (d = this.setBit(d, ad.BOTTOM));
            var l = this.adapter.isRtl(),
              m = this.hasBit(this.anchorCorner, ad.FLIP_RTL),
              n =
                this.hasBit(this.anchorCorner, ad.RIGHT) ||
                this.hasBit(d, ad.RIGHT),
              o = !1;
            o = l && m ? !n : n;
            var p, q;
            o
              ? ((p = f.left + g.width + this.anchorMargin.right),
                (q = f.right - this.anchorMargin.right))
              : ((p = f.left + this.anchorMargin.left),
                (q = f.right + g.width - this.anchorMargin.left));
            var r = 0 < p - h.width,
              s = 0 < q - h.width,
              t = this.hasBit(d, ad.FLIP_RTL) && this.hasBit(d, ad.RIGHT);
            return (
              (s && t && l) || (!r && t)
                ? (d = this.unsetBit(d, ad.RIGHT))
                : ((r && o && l) || (r && !o && n) || (!s && p >= q)) &&
                  (d = this.setBit(d, ad.RIGHT)),
              d
            );
          }),
          (b.prototype.getMenuSurfaceMaxHeight = function (a) {
            if (0 < this.maxHeight) return this.maxHeight;
            var c = this.measurements.viewportDistance,
              d = 0,
              e = this.hasBit(a, ad.BOTTOM),
              f = this.hasBit(this.anchorCorner, ad.BOTTOM),
              g = b.numbers.MARGIN_TO_EDGE;
            return (
              e
                ? ((d = c.top + this.anchorMargin.top - g),
                  !f && (d += this.measurements.anchorSize.height))
                : ((d =
                    c.bottom -
                    this.anchorMargin.bottom +
                    this.measurements.anchorSize.height -
                    g),
                  f && (d -= this.measurements.anchorSize.height)),
              d
            );
          }),
          (b.prototype.getHorizontalOriginOffset = function (a) {
            var b = this.measurements.anchorSize,
              c = this.hasBit(a, ad.RIGHT),
              d = this.hasBit(this.anchorCorner, ad.RIGHT);
            if (c) {
              var e = d
                ? b.width - this.anchorMargin.left
                : this.anchorMargin.right;
              return this.isHoistedElement || this.isFixedPosition
                ? e -
                    (this.measurements.viewportSize.width -
                      this.measurements.bodySize.width)
                : e;
            }
            return d
              ? b.width - this.anchorMargin.right
              : this.anchorMargin.left;
          }),
          (b.prototype.getVerticalOriginOffset = function (a) {
            var b = this.measurements.anchorSize,
              c = this.hasBit(a, ad.BOTTOM),
              d = this.hasBit(this.anchorCorner, ad.BOTTOM),
              e = 0;
            return (
              (e = c
                ? d
                  ? b.height - this.anchorMargin.top
                  : -this.anchorMargin.bottom
                : d
                ? b.height + this.anchorMargin.bottom
                : this.anchorMargin.top),
              e
            );
          }),
          (b.prototype.adjustPositionForHoistedElement = function (a) {
            var b,
              c,
              d = this.measurements,
              e = d.windowScroll,
              f = d.viewportDistance,
              g = d.surfaceSize,
              h = d.viewportSize,
              i = Object.keys(a);
            try {
              for (var j = Oa(i), k = j.next(); !k.done; k = j.next()) {
                var l = k.value,
                  m = a[l] || 0;
                if (
                  this.isHorizontallyCenteredOnViewport &&
                  ("left" === l || "right" === l)
                ) {
                  a[l] = (h.width - g.width) / 2;
                  continue;
                }
                (m += f[l]),
                  this.isFixedPosition ||
                    ("top" === l
                      ? (m += e.y)
                      : "bottom" === l
                      ? (m -= e.y)
                      : "left" === l
                      ? (m += e.x)
                      : (m -= e.x)),
                  (a[l] = m);
              }
            } catch (a) {
              b = { error: a };
            } finally {
              try {
                k && !k.done && (c = j.return) && c.call(j);
              } finally {
                if (b) throw b.error;
              }
            }
          }),
          (b.prototype.maybeRestoreFocus = function () {
            var a = this,
              b = this.adapter.isFocused(),
              c =
                document.activeElement &&
                this.adapter.isElementInContainer(document.activeElement);
            (b || c) &&
              setTimeout(function () {
                a.adapter.restoreFocus();
              }, ed.TOUCH_EVENT_WAIT_MS);
          }),
          (b.prototype.hasBit = function (a, b) {
            return !!(a & b);
          }),
          (b.prototype.setBit = function (a, b) {
            return a | b;
          }),
          (b.prototype.unsetBit = function (a, b) {
            return a ^ b;
          }),
          (b.prototype.isFinite = function (a) {
            return "number" == typeof a && isFinite(a);
          }),
          b
        );
      })(qc),
      td = (function (a) {
        function b(c) {
          var d = a.call(this, Yb(Yb({}, b.defaultAdapter), c)) || this;
          return (
            (d.closeAnimationEndTimerId = 0),
            (d.defaultFocusState = nd.LIST_ROOT),
            (d.selectedIndex = -1),
            d
          );
        }
        return (
          Ma(b, a),
          Object.defineProperty(b, "cssClasses", {
            get: function () {
              return pd;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "strings", {
            get: function () {
              return qd;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "numbers", {
            get: function () {
              return rd;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "defaultAdapter", {
            get: function () {
              return {
                addClassToElementAtIndex: function () {},
                removeClassFromElementAtIndex: function () {},
                addAttributeToElementAtIndex: function () {},
                removeAttributeFromElementAtIndex: function () {},
                getAttributeFromElementAtIndex: function () {
                  return null;
                },
                elementContainsClass: function () {
                  return !1;
                },
                closeSurface: function () {},
                getElementIndex: function () {
                  return -1;
                },
                notifySelected: function () {},
                getMenuItemCount: function () {
                  return 0;
                },
                focusItemAtIndex: function () {},
                focusListRoot: function () {},
                getSelectedSiblingOfItemAtIndex: function () {
                  return -1;
                },
                isSelectableItemAtIndex: function () {
                  return !1;
                },
              };
            },
            enumerable: !1,
            configurable: !0,
          }),
          (b.prototype.destroy = function () {
            this.closeAnimationEndTimerId &&
              clearTimeout(this.closeAnimationEndTimerId),
              this.adapter.closeSurface();
          }),
          (b.prototype.handleKeydown = function (a) {
            var b = a.key,
              c = a.keyCode;
            ("Tab" === b || 9 === c) && this.adapter.closeSurface(!0);
          }),
          (b.prototype.handleItemAction = function (a) {
            var b = this,
              c = this.adapter.getElementIndex(a);
            if (!(0 > c)) {
              this.adapter.notifySelected({ index: c });
              var d =
                "true" ===
                this.adapter.getAttributeFromElementAtIndex(
                  c,
                  qd.SKIP_RESTORE_FOCUS
                );
              this.adapter.closeSurface(d),
                (this.closeAnimationEndTimerId = setTimeout(function () {
                  var c = b.adapter.getElementIndex(a);
                  0 <= c &&
                    b.adapter.isSelectableItemAtIndex(c) &&
                    b.setSelectedIndex(c);
                }, sd.numbers.TRANSITION_CLOSE_DURATION));
            }
          }),
          (b.prototype.handleMenuSurfaceOpened = function () {
            switch (this.defaultFocusState) {
              case nd.FIRST_ITEM:
                this.adapter.focusItemAtIndex(0);
                break;
              case nd.LAST_ITEM:
                this.adapter.focusItemAtIndex(
                  this.adapter.getMenuItemCount() - 1
                );
                break;
              case nd.NONE:
                break;
              default:
                this.adapter.focusListRoot();
            }
          }),
          (b.prototype.setDefaultFocusState = function (a) {
            this.defaultFocusState = a;
          }),
          (b.prototype.getSelectedIndex = function () {
            return this.selectedIndex;
          }),
          (b.prototype.setSelectedIndex = function (a) {
            if (
              (this.validatedIndex(a), !this.adapter.isSelectableItemAtIndex(a))
            )
              throw new Error(
                "MDCMenuFoundation: No selection group at specified index."
              );
            var b = this.adapter.getSelectedSiblingOfItemAtIndex(a);
            0 <= b &&
              (this.adapter.removeAttributeFromElementAtIndex(
                b,
                qd.ARIA_CHECKED_ATTR
              ),
              this.adapter.removeClassFromElementAtIndex(
                b,
                pd.MENU_SELECTED_LIST_ITEM
              )),
              this.adapter.addClassToElementAtIndex(
                a,
                pd.MENU_SELECTED_LIST_ITEM
              ),
              this.adapter.addAttributeToElementAtIndex(
                a,
                qd.ARIA_CHECKED_ATTR,
                "true"
              ),
              (this.selectedIndex = a);
          }),
          (b.prototype.setEnabled = function (a, b) {
            this.validatedIndex(a),
              b
                ? (this.adapter.removeClassFromElementAtIndex(
                    a,
                    Mc.LIST_ITEM_DISABLED_CLASS
                  ),
                  this.adapter.addAttributeToElementAtIndex(
                    a,
                    qd.ARIA_DISABLED_ATTR,
                    "false"
                  ))
                : (this.adapter.addClassToElementAtIndex(
                    a,
                    Mc.LIST_ITEM_DISABLED_CLASS
                  ),
                  this.adapter.addAttributeToElementAtIndex(
                    a,
                    qd.ARIA_DISABLED_ATTR,
                    "true"
                  ));
          }),
          (b.prototype.validatedIndex = function (a) {
            var b = this.adapter.getMenuItemCount();
            if (!(0 <= a && a < b))
              throw new Error(
                "MDCMenuFoundation: No list item at specified index."
              );
          }),
          b
        );
      })(qc),
      ud = (c, a) => c - a,
      vd = (a, b) => {
        for (
          var c = Array.from(a),
            d = Array.from(b),
            e = { added: [], removed: [] },
            f = c.sort(ud),
            g = d.sort(ud),
            h = 0,
            k = 0;
          h < f.length || k < g.length;

        ) {
          var l = f[h],
            m = g[k];
          if (l === m) {
            h++, k++;
            continue;
          }
          if (void 0 !== l && (void 0 === m || l < m)) {
            e.removed.push(l), h++;
            continue;
          }
          if (void 0 !== m && (void 0 === l || m < l)) {
            e.added.push(m), k++;
            continue;
          }
        }
        return e;
      },
      wd = ["input", "button", "textarea", "select"],
      xd = (a) => {
        var b = a === Qc.UNSET_INDEX ? new Set() : a;
        return fb(b) ? new Set(b) : new Set([b]);
      };
    class yd extends qc {
      constructor(a) {
        super(Object.assign(Object.assign({}, yd.defaultAdapter), a)),
          (this.isMulti_ = !1),
          (this.wrapFocus_ = !1),
          (this.isVertical_ = !0),
          (this.selectedIndex_ = Qc.UNSET_INDEX),
          (this.focusedItemIndex_ = Qc.UNSET_INDEX),
          (this.useActivatedClass_ = !1),
          (this.ariaCurrentAttrValue_ = null);
      }
      static get strings() {
        return Pc;
      }
      static get numbers() {
        return Qc;
      }
      static get defaultAdapter() {
        return {
          focusItemAtIndex: () => void 0,
          getFocusedElementIndex: () => 0,
          getListItemCount: () => 0,
          isFocusInsideList: () => !1,
          isRootFocused: () => !1,
          notifyAction: () => void 0,
          notifySelected: () => void 0,
          getSelectedStateForElementIndex: () => !1,
          setDisabledStateForElementIndex: () => void 0,
          getDisabledStateForElementIndex: () => !1,
          setSelectedStateForElementIndex: () => void 0,
          setActivatedStateForElementIndex: () => void 0,
          setTabIndexForElementIndex: () => void 0,
          setAttributeForElementIndex: () => void 0,
          getAttributeForElementIndex: () => null,
        };
      }
      setWrapFocus(a) {
        this.wrapFocus_ = a;
      }
      setMulti(a) {
        this.isMulti_ = a;
        var b = this.selectedIndex_;
        if (a) {
          if (!fb(b)) {
            var c = b === Qc.UNSET_INDEX;
            this.selectedIndex_ = c ? new Set() : new Set([b]);
          }
        } else if (fb(b))
          if (b.size) {
            var d = Array.from(b).sort(ud);
            this.selectedIndex_ = d[0];
          } else this.selectedIndex_ = Qc.UNSET_INDEX;
      }
      setVerticalOrientation(a) {
        this.isVertical_ = a;
      }
      setUseActivatedClass(a) {
        this.useActivatedClass_ = a;
      }
      getSelectedIndex() {
        return this.selectedIndex_;
      }
      setSelectedIndex(a) {
        this.isIndexValid_(a) &&
          (this.isMulti_
            ? this.setMultiSelectionAtIndex_(xd(a))
            : this.setSingleSelectionAtIndex_(a));
      }
      handleFocusIn(a, b) {
        0 <= b && this.adapter.setTabIndexForElementIndex(b, 0);
      }
      handleFocusOut(a, b) {
        0 <= b && this.adapter.setTabIndexForElementIndex(b, -1),
          setTimeout(() => {
            this.adapter.isFocusInsideList() ||
              this.setTabindexToFirstSelectedItem_();
          }, 0);
      }
      handleKeydown(a, b, c) {
        var d = "ArrowLeft" === Xa(a),
          e = "ArrowUp" === Xa(a),
          f = "ArrowRight" === Xa(a),
          g = "ArrowDown" === Xa(a),
          h = "Home" === Xa(a),
          i = "End" === Xa(a),
          j = "Enter" === Xa(a),
          k = "Spacebar" === Xa(a);
        if (this.adapter.isRootFocused())
          return void (e || i
            ? (a.preventDefault(), this.focusLastElement())
            : (g || h) && (a.preventDefault(), this.focusFirstElement()));
        var l = this.adapter.getFocusedElementIndex();
        if (!(-1 === l && ((l = c), 0 > l))) {
          var m;
          if ((this.isVertical_ && g) || (!this.isVertical_ && f))
            this.preventDefaultEvent(a), (m = this.focusNextElement(l));
          else if ((this.isVertical_ && e) || (!this.isVertical_ && d))
            this.preventDefaultEvent(a), (m = this.focusPrevElement(l));
          else if (h)
            this.preventDefaultEvent(a), (m = this.focusFirstElement());
          else if (i)
            this.preventDefaultEvent(a), (m = this.focusLastElement());
          else if ((j || k) && b) {
            var n = a.target;
            if (n && "A" === n.tagName && j) return;
            this.preventDefaultEvent(a), this.setSelectedIndexOnAction_(l, !0);
          }
          (this.focusedItemIndex_ = l),
            void 0 !== m &&
              (this.setTabindexAtIndex_(m), (this.focusedItemIndex_ = m));
        }
      }
      handleSingleSelection(a, b, c) {
        a === Qc.UNSET_INDEX ||
          (this.setSelectedIndexOnAction_(a, b, c),
          this.setTabindexAtIndex_(a),
          (this.focusedItemIndex_ = a));
      }
      focusNextElement(a) {
        var b = this.adapter.getListItemCount(),
          c = a + 1;
        if (c >= b)
          if (this.wrapFocus_) c = 0;
          else return a;
        return this.adapter.focusItemAtIndex(c), c;
      }
      focusPrevElement(a) {
        var b = a - 1;
        if (0 > b)
          if (this.wrapFocus_) b = this.adapter.getListItemCount() - 1;
          else return a;
        return this.adapter.focusItemAtIndex(b), b;
      }
      focusFirstElement() {
        return this.adapter.focusItemAtIndex(0), 0;
      }
      focusLastElement() {
        var a = this.adapter.getListItemCount() - 1;
        return this.adapter.focusItemAtIndex(a), a;
      }
      setEnabled(a, b) {
        this.isIndexValid_(a) &&
          this.adapter.setDisabledStateForElementIndex(a, !b);
      }
      preventDefaultEvent(a) {
        var b = a.target,
          c = "".concat(b.tagName).toLowerCase();
        -1 === wd.indexOf(c) && a.preventDefault();
      }
      setSingleSelectionAtIndex_(a) {
        var b =
          !(1 < arguments.length && arguments[1] !== void 0) || arguments[1];
        this.selectedIndex_ === a ||
          (this.selectedIndex_ !== Qc.UNSET_INDEX &&
            (this.adapter.setSelectedStateForElementIndex(
              this.selectedIndex_,
              !1
            ),
            this.useActivatedClass_ &&
              this.adapter.setActivatedStateForElementIndex(
                this.selectedIndex_,
                !1
              )),
          b && this.adapter.setSelectedStateForElementIndex(a, !0),
          this.useActivatedClass_ &&
            this.adapter.setActivatedStateForElementIndex(a, !0),
          this.setAriaForSingleSelectionAtIndex_(a),
          (this.selectedIndex_ = a),
          this.adapter.notifySelected(a));
      }
      setMultiSelectionAtIndex_(a) {
        var b =
            !(1 < arguments.length && arguments[1] !== void 0) || arguments[1],
          c = xd(this.selectedIndex_),
          d = vd(c, a);
        if (d.removed.length || d.added.length) {
          for (var e of d.removed)
            b && this.adapter.setSelectedStateForElementIndex(e, !1),
              this.useActivatedClass_ &&
                this.adapter.setActivatedStateForElementIndex(e, !1);
          for (var f of d.added)
            b && this.adapter.setSelectedStateForElementIndex(f, !0),
              this.useActivatedClass_ &&
                this.adapter.setActivatedStateForElementIndex(f, !0);
          (this.selectedIndex_ = a), this.adapter.notifySelected(a, d);
        }
      }
      setAriaForSingleSelectionAtIndex_(a) {
        this.selectedIndex_ === Qc.UNSET_INDEX &&
          (this.ariaCurrentAttrValue_ =
            this.adapter.getAttributeForElementIndex(a, Pc.ARIA_CURRENT));
        var b = null !== this.ariaCurrentAttrValue_,
          c = b ? Pc.ARIA_CURRENT : Pc.ARIA_SELECTED;
        this.selectedIndex_ !== Qc.UNSET_INDEX &&
          this.adapter.setAttributeForElementIndex(
            this.selectedIndex_,
            c,
            "false"
          );
        var d = b ? this.ariaCurrentAttrValue_ : "true";
        this.adapter.setAttributeForElementIndex(a, c, d);
      }
      setTabindexAtIndex_(a) {
        this.focusedItemIndex_ === Qc.UNSET_INDEX && 0 !== a
          ? this.adapter.setTabIndexForElementIndex(0, -1)
          : 0 <= this.focusedItemIndex_ &&
            this.focusedItemIndex_ !== a &&
            this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1),
          this.adapter.setTabIndexForElementIndex(a, 0);
      }
      setTabindexToFirstSelectedItem_() {
        var a = 0;
        "number" == typeof this.selectedIndex_ &&
        this.selectedIndex_ !== Qc.UNSET_INDEX
          ? (a = this.selectedIndex_)
          : fb(this.selectedIndex_) &&
            0 < this.selectedIndex_.size &&
            (a = Math.min(...this.selectedIndex_)),
          this.setTabindexAtIndex_(a);
      }
      isIndexValid_(a) {
        if (a instanceof Set) {
          if (!this.isMulti_)
            throw new Error(
              "MDCListFoundation: Array of index is only supported for checkbox based list"
            );
          if (0 === a.size) return !0;
          var b = !1;
          for (var c of a) if (((b = this.isIndexInRange_(c)), b)) break;
          return b;
        }
        if ("number" == typeof a) {
          if (this.isMulti_)
            throw new Error(
              "MDCListFoundation: Expected array of index for checkbox based list but got number: " +
                a
            );
          return a === Qc.UNSET_INDEX || this.isIndexInRange_(a);
        }
        return !1;
      }
      isIndexInRange_(a) {
        var b = this.adapter.getListItemCount();
        return 0 <= a && a < b;
      }
      setSelectedIndexOnAction_(a, b, c) {
        if (!this.adapter.getDisabledStateForElementIndex(a)) {
          var d = a;
          if ((this.isMulti_ && (d = new Set([a])), !!this.isIndexValid_(d))) {
            if (this.isMulti_) this.toggleMultiAtIndex(a, c, b);
            else if (b || c) this.setSingleSelectionAtIndex_(a, b);
            else {
              var e = this.selectedIndex_ === a;
              e && this.setSingleSelectionAtIndex_(Qc.UNSET_INDEX);
            }
            b && this.adapter.notifyAction(a);
          }
        }
      }
      toggleMultiAtIndex(a, b) {
        var c =
            !(2 < arguments.length && arguments[2] !== void 0) || arguments[2],
          d = !1;
        d = void 0 === b ? !this.adapter.getSelectedStateForElementIndex(a) : b;
        var e = xd(this.selectedIndex_);
        d ? e.add(a) : e.delete(a), this.setMultiSelectionAtIndex_(e, c);
      }
    }
    class zd extends pc {
      constructor() {
        super(...arguments),
          (this.mdcFoundationClass = td),
          (this.listElement_ = null),
          (this.anchor = null),
          (this.open = !1),
          (this.quick = !1),
          (this.wrapFocus = !1),
          (this.innerRole = "menu"),
          (this.innerAriaLabel = null),
          (this.corner = "TOP_START"),
          (this.x = null),
          (this.y = null),
          (this.absolute = !1),
          (this.multi = !1),
          (this.activatable = !1),
          (this.fixed = !1),
          (this.forceGroupSelection = !1),
          (this.fullwidth = !1),
          (this.menuCorner = "START"),
          (this.stayOpenOnBodyClick = !1),
          (this.defaultFocus = "LIST_ROOT"),
          (this._listUpdateComplete = null);
      }
      get listElement() {
        return this.listElement_
          ? this.listElement_
          : ((this.listElement_ = this.renderRoot.querySelector("mwc-list")),
            this.listElement_);
      }
      get items() {
        var a = this.listElement;
        return a ? a.items : [];
      }
      get index() {
        var a = this.listElement;
        return a ? a.index : -1;
      }
      get selected() {
        var a = this.listElement;
        return a ? a.selected : null;
      }
      render() {
        var a = "menu" === this.innerRole ? "menuitem" : "option";
        return g(
          P ||
            (P = j([
              "\n      <mwc-menu-surface\n          ?hidden=",
              "\n          .anchor=",
              "\n          .open=",
              "\n          .quick=",
              "\n          .corner=",
              "\n          .x=",
              "\n          .y=",
              "\n          .absolute=",
              "\n          .fixed=",
              "\n          .fullwidth=",
              "\n          .menuCorner=",
              "\n          ?stayOpenOnBodyClick=",
              '\n          class="mdc-menu mdc-menu-surface"\n          @closed=',
              "\n          @opened=",
              "\n          @keydown=",
              ">\n        <mwc-list\n          rootTabbable\n          .innerAriaLabel=",
              "\n          .innerRole=",
              "\n          .multi=",
              '\n          class="mdc-deprecated-list"\n          .itemRoles=',
              "\n          .wrapFocus=",
              "\n          .activatable=",
              "\n          @action=",
              ">\n        <slot></slot>\n      </mwc-list>\n    </mwc-menu-surface>",
            ])),
          !this.open,
          this.anchor,
          this.open,
          this.quick,
          this.corner,
          this.x,
          this.y,
          this.absolute,
          this.fixed,
          this.fullwidth,
          this.menuCorner,
          this.stayOpenOnBodyClick,
          this.onClosed,
          this.onOpened,
          this.onKeydown,
          this.innerAriaLabel,
          this.innerRole,
          this.multi,
          a,
          this.wrapFocus,
          this.activatable,
          this.onAction
        );
      }
      createAdapter() {
        return {
          addClassToElementAtIndex: (a, b) => {
            var c = this.listElement;
            if (c) {
              var d = c.items[a];
              d &&
                ("mdc-menu-item--selected" === b
                  ? this.forceGroupSelection && !d.selected && c.toggle(a, !0)
                  : d.classList.add(b));
            }
          },
          removeClassFromElementAtIndex: (a, b) => {
            var c = this.listElement;
            if (c) {
              var d = c.items[a];
              d &&
                ("mdc-menu-item--selected" === b
                  ? d.selected && c.toggle(a, !1)
                  : d.classList.remove(b));
            }
          },
          addAttributeToElementAtIndex: (a, b, c) => {
            var d = this.listElement;
            if (d) {
              var e = d.items[a];
              e && e.setAttribute(b, c);
            }
          },
          removeAttributeFromElementAtIndex: (a, b) => {
            var c = this.listElement;
            if (c) {
              var d = c.items[a];
              d && d.removeAttribute(b);
            }
          },
          getAttributeFromElementAtIndex: (a, b) => {
            var c = this.listElement;
            if (!c) return null;
            var d = c.items[a];
            return d ? d.getAttribute(b) : null;
          },
          elementContainsClass: (a, b) => a.classList.contains(b),
          closeSurface: () => {
            this.open = !1;
          },
          getElementIndex: (a) => {
            var b = this.listElement;
            return b ? b.items.indexOf(a) : -1;
          },
          notifySelected: () => {},
          getMenuItemCount: () => {
            var a = this.listElement;
            return a ? a.items.length : 0;
          },
          focusItemAtIndex: (a) => {
            var b = this.listElement;
            if (b) {
              var c = b.items[a];
              c && c.focus();
            }
          },
          focusListRoot: () => {
            this.listElement && this.listElement.focus();
          },
          getSelectedSiblingOfItemAtIndex: (a) => {
            var b = this.listElement;
            if (!b) return -1;
            var c = b.items[a];
            if (!c || !c.group) return -1;
            for (var e = 0; e < b.items.length; e++)
              if (e !== a) {
                var d = b.items[e];
                if (d.selected && d.group === c.group) return e;
              }
            return -1;
          },
          isSelectableItemAtIndex: (a) => {
            var b = this.listElement;
            if (!b) return !1;
            var c = b.items[a];
            return !!c && c.hasAttribute("group");
          },
        };
      }
      onKeydown(a) {
        this.mdcFoundation && this.mdcFoundation.handleKeydown(a);
      }
      onAction(a) {
        var b = this.listElement;
        if (this.mdcFoundation && b) {
          var c = a.detail.index,
            d = b.items[c];
          d && this.mdcFoundation.handleItemAction(d);
        }
      }
      onOpened() {
        (this.open = !0),
          this.mdcFoundation && this.mdcFoundation.handleMenuSurfaceOpened();
      }
      onClosed() {
        this.open = !1;
      }
      getUpdateComplete() {
        var a = () => super.getUpdateComplete,
          b = this;
        return o(function* () {
          yield b._listUpdateComplete;
          var c = yield a().call(b);
          return c;
        })();
      }
      firstUpdated() {
        var a = () => super.firstUpdated,
          b = this;
        return o(function* () {
          a().call(b);
          var c = b.listElement;
          c &&
            ((b._listUpdateComplete = c.updateComplete),
            yield b._listUpdateComplete);
        })();
      }
      select(a) {
        var b = this.listElement;
        b && b.select(a);
      }
      close() {
        this.open = !1;
      }
      show() {
        this.open = !0;
      }
      getFocusedItemIndex() {
        var a = this.listElement;
        return a ? a.getFocusedItemIndex() : -1;
      }
      focusItemAtIndex(a) {
        var b = this.listElement;
        b && b.focusItemAtIndex(a);
      }
      layout() {
        var a =
            !(0 < arguments.length && arguments[0] !== void 0) || arguments[0],
          b = this.listElement;
        b && b.layout(a);
      }
    }
    Na([Ra(".mdc-menu")], zd.prototype, "mdcRoot", void 0),
      Na([Ra("slot")], zd.prototype, "slotElement", void 0),
      Na([Pa({ type: Object })], zd.prototype, "anchor", void 0),
      Na([Pa({ type: Boolean, reflect: !0 })], zd.prototype, "open", void 0),
      Na([Pa({ type: Boolean })], zd.prototype, "quick", void 0),
      Na([Pa({ type: Boolean })], zd.prototype, "wrapFocus", void 0),
      Na([Pa({ type: String })], zd.prototype, "innerRole", void 0),
      Na([Pa({ type: String })], zd.prototype, "innerAriaLabel", void 0),
      Na([Pa({ type: String })], zd.prototype, "corner", void 0),
      Na([Pa({ type: Number })], zd.prototype, "x", void 0),
      Na([Pa({ type: Number })], zd.prototype, "y", void 0),
      Na([Pa({ type: Boolean })], zd.prototype, "absolute", void 0),
      Na([Pa({ type: Boolean })], zd.prototype, "multi", void 0),
      Na([Pa({ type: Boolean })], zd.prototype, "activatable", void 0),
      Na([Pa({ type: Boolean })], zd.prototype, "fixed", void 0),
      Na([Pa({ type: Boolean })], zd.prototype, "forceGroupSelection", void 0),
      Na([Pa({ type: Boolean })], zd.prototype, "fullwidth", void 0),
      Na([Pa({ type: String })], zd.prototype, "menuCorner", void 0),
      Na([Pa({ type: Boolean })], zd.prototype, "stayOpenOnBodyClick", void 0),
      Na(
        [
          Pa({ type: String }),
          Zb(function (a) {
            this.mdcFoundation &&
              this.mdcFoundation.setDefaultFocusState(nd[a]);
          }),
        ],
        zd.prototype,
        "defaultFocus",
        void 0
      );
    var Ad = mb(
        Q ||
          (Q = j([
            "mwc-list ::slotted([mwc-list-item]:not([twoline])),mwc-list ::slotted([noninteractive]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}",
          ]))
      ),
      Bd = {
        TOP_LEFT: fd.TOP_LEFT,
        TOP_RIGHT: fd.TOP_RIGHT,
        BOTTOM_LEFT: fd.BOTTOM_LEFT,
        BOTTOM_RIGHT: fd.BOTTOM_RIGHT,
        TOP_START: fd.TOP_START,
        TOP_END: fd.TOP_END,
        BOTTOM_START: fd.BOTTOM_START,
        BOTTOM_END: fd.BOTTOM_END,
      };
    class Cd extends pc {
      constructor() {
        super(...arguments),
          (this.mdcFoundationClass = sd),
          (this.absolute = !1),
          (this.fullwidth = !1),
          (this.fixed = !1),
          (this.x = null),
          (this.y = null),
          (this.quick = !1),
          (this.open = !1),
          (this.stayOpenOnBodyClick = !1),
          (this.bitwiseCorner = fd.TOP_START),
          (this.previousMenuCorner = null),
          (this.menuCorner = "START"),
          (this.corner = "TOP_START"),
          (this.styleTop = ""),
          (this.styleLeft = ""),
          (this.styleRight = ""),
          (this.styleBottom = ""),
          (this.styleMaxHeight = ""),
          (this.styleTransformOrigin = ""),
          (this.anchor = null),
          (this.previouslyFocused = null),
          (this.previousAnchor = null),
          (this.onBodyClickBound = () => void 0);
      }
      render() {
        var a = {
            "mdc-menu-surface--fixed": this.fixed,
            "mdc-menu-surface--fullwidth": this.fullwidth,
          },
          b = {
            top: this.styleTop,
            left: this.styleLeft,
            right: this.styleRight,
            bottom: this.styleBottom,
            "max-height": this.styleMaxHeight,
            "transform-origin": this.styleTransformOrigin,
          };
        return g(
          R ||
            (R = j([
              '\n      <div\n          class="mdc-menu-surface ',
              '"\n          style="',
              '"\n          @keydown=',
              "\n          @opened=",
              "\n          @closed=",
              ">\n        <slot></slot>\n      </div>",
            ])),
          hc(a),
          yc(b),
          this.onKeydown,
          this.registerBodyClick,
          this.deregisterBodyClick
        );
      }
      createAdapter() {
        var a = this;
        return Object.assign(Object.assign({}, Va(this.mdcRoot)), {
          hasAnchor: () => !!this.anchor,
          notifyClose: () => {
            var a = new CustomEvent("closed", { bubbles: !0, composed: !0 });
            (this.open = !1), this.mdcRoot.dispatchEvent(a);
          },
          notifyClosing: () => {
            var a = new CustomEvent("closing", { bubbles: !0, composed: !0 });
            this.mdcRoot.dispatchEvent(a);
          },
          notifyOpen: () => {
            var a = new CustomEvent("opened", { bubbles: !0, composed: !0 });
            (this.open = !0), this.mdcRoot.dispatchEvent(a);
          },
          isElementInContainer: () => !1,
          isRtl: () =>
            !!this.mdcRoot &&
            "rtl" === getComputedStyle(this.mdcRoot).direction,
          setTransformOrigin: (a) => {
            var b = this.mdcRoot;
            b && (this.styleTransformOrigin = a);
          },
          isFocused: () => oc(this),
          saveFocus: () => {
            var a = nc(),
              b = a.length;
            b || (this.previouslyFocused = null),
              (this.previouslyFocused = a[b - 1]);
          },
          restoreFocus: () => {
            !this.previouslyFocused ||
              ("focus" in this.previouslyFocused &&
                this.previouslyFocused.focus());
          },
          getInnerDimensions: () => {
            var a = this.mdcRoot;
            return a
              ? { width: a.offsetWidth, height: a.offsetHeight }
              : { width: 0, height: 0 };
          },
          getAnchorDimensions: () => {
            var a = this.anchor;
            return a ? a.getBoundingClientRect() : null;
          },
          getBodyDimensions: () => ({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
          }),
          getWindowDimensions: () => ({
            width: window.innerWidth,
            height: window.innerHeight,
          }),
          getWindowScroll: () => ({
            x: window.pageXOffset,
            y: window.pageYOffset,
          }),
          setPosition: (a) => {
            var b = this.mdcRoot;
            b &&
              ((this.styleLeft = "left" in a ? "".concat(a.left, "px") : ""),
              (this.styleRight = "right" in a ? "".concat(a.right, "px") : ""),
              (this.styleTop = "top" in a ? "".concat(a.top, "px") : ""),
              (this.styleBottom =
                "bottom" in a ? "".concat(a.bottom, "px") : ""));
          },
          setMaxHeight: (function () {
            var b = o(function* (b) {
              var c = a.mdcRoot;
              c &&
                ((a.styleMaxHeight = b),
                yield a.updateComplete,
                (a.styleMaxHeight = "var(--mdc-menu-max-height, ".concat(
                  b,
                  ")"
                )));
            });
            return function () {
              return b.apply(this, arguments);
            };
          })(),
        });
      }
      onKeydown(a) {
        this.mdcFoundation && this.mdcFoundation.handleKeydown(a);
      }
      onBodyClick(a) {
        if (!this.stayOpenOnBodyClick) {
          var b = a.composedPath();
          -1 === b.indexOf(this) && this.close();
        }
      }
      registerBodyClick() {
        (this.onBodyClickBound = this.onBodyClick.bind(this)),
          document.body.addEventListener("click", this.onBodyClickBound, {
            passive: !0,
            capture: !0,
          });
      }
      deregisterBodyClick() {
        document.body.removeEventListener("click", this.onBodyClickBound, {
          capture: !0,
        });
      }
      close() {
        this.open = !1;
      }
      show() {
        this.open = !0;
      }
    }
    Na([Ra(".mdc-menu-surface")], Cd.prototype, "mdcRoot", void 0),
      Na([Ra("slot")], Cd.prototype, "slotElement", void 0),
      Na(
        [
          Pa({ type: Boolean }),
          Zb(function (a) {
            this.mdcFoundation &&
              !this.fixed &&
              this.mdcFoundation.setIsHoisted(a);
          }),
        ],
        Cd.prototype,
        "absolute",
        void 0
      ),
      Na([Pa({ type: Boolean })], Cd.prototype, "fullwidth", void 0),
      Na(
        [
          Pa({ type: Boolean }),
          Zb(function (a) {
            this.mdcFoundation &&
              !this.absolute &&
              this.mdcFoundation.setFixedPosition(a);
          }),
        ],
        Cd.prototype,
        "fixed",
        void 0
      ),
      Na(
        [
          Pa({ type: Number }),
          Zb(function (a) {
            this.mdcFoundation &&
              null !== this.y &&
              null !== a &&
              (this.mdcFoundation.setAbsolutePosition(a, this.y),
              this.mdcFoundation.setAnchorMargin({
                left: a,
                top: this.y,
                right: -a,
                bottom: this.y,
              }));
          }),
        ],
        Cd.prototype,
        "x",
        void 0
      ),
      Na(
        [
          Pa({ type: Number }),
          Zb(function (a) {
            this.mdcFoundation &&
              null !== this.x &&
              null !== a &&
              (this.mdcFoundation.setAbsolutePosition(this.x, a),
              this.mdcFoundation.setAnchorMargin({
                left: this.x,
                top: a,
                right: -this.x,
                bottom: a,
              }));
          }),
        ],
        Cd.prototype,
        "y",
        void 0
      ),
      Na(
        [
          Pa({ type: Boolean }),
          Zb(function (a) {
            this.mdcFoundation && this.mdcFoundation.setQuickOpen(a);
          }),
        ],
        Cd.prototype,
        "quick",
        void 0
      ),
      Na(
        [
          Pa({ type: Boolean, reflect: !0 }),
          Zb(function (a, b) {
            this.mdcFoundation &&
              (a
                ? this.mdcFoundation.open()
                : b !== void 0 && this.mdcFoundation.close());
          }),
        ],
        Cd.prototype,
        "open",
        void 0
      ),
      Na([Pa({ type: Boolean })], Cd.prototype, "stayOpenOnBodyClick", void 0),
      Na(
        [
          Qa(),
          Zb(function (a) {
            this.mdcFoundation &&
              (a
                ? this.mdcFoundation.setAnchorCorner(a)
                : this.mdcFoundation.setAnchorCorner(a));
          }),
        ],
        Cd.prototype,
        "bitwiseCorner",
        void 0
      ),
      Na(
        [
          Pa({ type: String }),
          Zb(function (a) {
            if (this.mdcFoundation) {
              var b = null === this.previousMenuCorner,
                c = !b && a !== this.previousMenuCorner;
              ("START" === a || "END" === a) &&
                (c || (b && "END" === a)) &&
                ((this.bitwiseCorner ^= ad.RIGHT),
                this.mdcFoundation.flipCornerHorizontally(),
                (this.previousMenuCorner = a));
            }
          }),
        ],
        Cd.prototype,
        "menuCorner",
        void 0
      ),
      Na(
        [
          Pa({ type: String }),
          Zb(function (a) {
            if (this.mdcFoundation && a) {
              var b = Bd[a];
              "END" === this.menuCorner && (b ^= ad.RIGHT),
                (this.bitwiseCorner = b);
            }
          }),
        ],
        Cd.prototype,
        "corner",
        void 0
      ),
      Na([Qa()], Cd.prototype, "styleTop", void 0),
      Na([Qa()], Cd.prototype, "styleLeft", void 0),
      Na([Qa()], Cd.prototype, "styleRight", void 0),
      Na([Qa()], Cd.prototype, "styleBottom", void 0),
      Na([Qa()], Cd.prototype, "styleMaxHeight", void 0),
      Na([Qa()], Cd.prototype, "styleTransformOrigin", void 0);
    var Dd = mb(
      U ||
        (U = j([
          ".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}",
        ]))
    );
    class Ed extends La(Cd) {
      static get defineId() {
        return "mwc-menu-surface";
      }
      static get elementDefinitions() {
        return Vb([], Ed);
      }
      static get styles() {
        return Dd;
      }
    }
    var Fd = (a) => a.hasAttribute("mwc-list-item");
    class Gd extends pc {
      constructor() {
        var a;
        super(),
          (a = this),
          (this.mdcAdapter = null),
          (this.mdcFoundationClass = yd),
          (this.activatable = !1),
          (this.multi = !1),
          (this.wrapFocus = !1),
          (this.itemRoles = null),
          (this.innerRole = null),
          (this.innerAriaLabel = null),
          (this.rootTabbable = !1),
          (this.previousTabindex = null),
          (this.noninteractive = !1),
          (this.itemsReadyResolver = () => {}),
          (this.itemsReady = Promise.resolve([])),
          (this.items_ = []);
        var b = gb(this.layout.bind(this));
        this.debouncedLayout = function () {
          var c =
            !(0 < arguments.length && arguments[0] !== void 0) || arguments[0];
          hb.call(a), b(c);
        };
      }
      getUpdateComplete() {
        var a = () => super.getUpdateComplete,
          b = this;
        return o(function* () {
          var c = yield a().call(b);
          return yield b.itemsReady, c;
        })();
      }
      get items() {
        return this.items_;
      }
      updateItems() {
        var a,
          b = null !== (a = this.assignedElements) && void 0 !== a ? a : [],
          c = [];
        for (var f of b)
          Fd(f) && (c.push(f), (f._managingList = this)),
            f.hasAttribute("divider") &&
              !f.hasAttribute("role") &&
              f.setAttribute("role", "separator");
        this.items_ = c;
        var d = new Set();
        if (
          (this.items_.forEach((a, b) => {
            this.itemRoles
              ? a.setAttribute("role", this.itemRoles)
              : a.removeAttribute("role"),
              a.selected && d.add(b);
          }),
          this.multi)
        )
          this.select(d);
        else {
          var g = d.size ? d.entries().next().value[1] : -1;
          this.select(g);
        }
        var e = new Event("items-updated", { bubbles: !0, composed: !0 });
        this.dispatchEvent(e);
      }
      get selected() {
        var a = this.index;
        if (!fb(a)) return -1 === a ? null : this.items[a];
        var b = [];
        for (var c of a) b.push(this.items[c]);
        return b;
      }
      get index() {
        return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
      }
      render() {
        var a = null === this.innerRole ? void 0 : this.innerRole,
          b = null === this.innerAriaLabel ? void 0 : this.innerAriaLabel,
          c = this.rootTabbable ? "0" : "-1";
        return g(
          V ||
            (V = j([
              "\n      <!-- @ts-ignore -->\n      <ul\n          tabindex=",
              '\n          role="',
              '"\n          aria-label="',
              '"\n          class="mdc-deprecated-list"\n          @keydown=',
              "\n          @focusin=",
              "\n          @focusout=",
              "\n          @request-selected=",
              "\n          @list-item-rendered=",
              ">\n        <slot></slot>\n        ",
              "\n      </ul>\n    ",
            ])),
          c,
          kd(a),
          kd(b),
          this.onKeydown,
          this.onFocusIn,
          this.onFocusOut,
          this.onRequestSelected,
          this.onListItemConnected,
          this.renderPlaceholder()
        );
      }
      renderPlaceholder() {
        var a,
          b = null !== (a = this.assignedElements) && void 0 !== a ? a : [];
        return void 0 !== this.emptyMessage && 0 === b.length
          ? g(
              W ||
                (W = j([
                  "\n        <mwc-list-item noninteractive>",
                  "</mwc-list-item>\n      ",
                ])),
              this.emptyMessage
            )
          : null;
      }
      firstUpdated() {
        super.firstUpdated(),
          this.items.length ||
            (this.mdcFoundation.setMulti(this.multi), this.layout());
      }
      onFocusIn(a) {
        if (this.mdcFoundation && this.mdcRoot) {
          var b = this.getIndexOfTarget(a);
          this.mdcFoundation.handleFocusIn(a, b);
        }
      }
      onFocusOut(a) {
        if (this.mdcFoundation && this.mdcRoot) {
          var b = this.getIndexOfTarget(a);
          this.mdcFoundation.handleFocusOut(a, b);
        }
      }
      onKeydown(a) {
        if (this.mdcFoundation && this.mdcRoot) {
          var b = this.getIndexOfTarget(a),
            c = a.target,
            d = Fd(c);
          this.mdcFoundation.handleKeydown(a, d, b);
        }
      }
      onRequestSelected(a) {
        if (this.mdcFoundation) {
          var d = this.getIndexOfTarget(a);
          if (
            -1 === d &&
            (this.layout(), (d = this.getIndexOfTarget(a)), -1 === d)
          )
            return;
          var e = this.items[d];
          if (e.disabled) return;
          var b = a.detail.selected,
            c = a.detail.source;
          this.mdcFoundation.handleSingleSelection(d, "interaction" === c, b),
            a.stopPropagation();
        }
      }
      getIndexOfTarget(a) {
        var b = this.items,
          c = a.composedPath();
        for (var d of c) {
          var e = -1;
          if ((kc(d) && Fd(d) && (e = b.indexOf(d)), -1 !== e)) return e;
        }
        return -1;
      }
      createAdapter() {
        return (
          (this.mdcAdapter = {
            getListItemCount: () => (this.mdcRoot ? this.items.length : 0),
            getFocusedElementIndex: this.getFocusedItemIndex,
            getAttributeForElementIndex: (a, b) => {
              var c = this.mdcRoot;
              if (!c) return "";
              var d = this.items[a];
              return d ? d.getAttribute(b) : "";
            },
            setAttributeForElementIndex: (a, b, c) => {
              if (this.mdcRoot) {
                var d = this.items[a];
                d && d.setAttribute(b, c);
              }
            },
            focusItemAtIndex: (a) => {
              var b = this.items[a];
              b && b.focus();
            },
            setTabIndexForElementIndex: (a, b) => {
              var c = this.items[a];
              c && (c.tabindex = b);
            },
            notifyAction: (a) => {
              var b = new CustomEvent("action", {
                bubbles: !0,
                composed: !0,
                detail: { index: a },
              });
              this.dispatchEvent(b);
            },
            notifySelected: (a, b) => {
              var c = new CustomEvent("selected", {
                bubbles: !0,
                composed: !0,
                detail: { index: a, diff: b },
              });
              this.dispatchEvent(c);
            },
            isFocusInsideList: () => oc(this),
            isRootFocused: () => {
              var a = this.mdcRoot,
                b = a.getRootNode();
              return b.activeElement === a;
            },
            setDisabledStateForElementIndex: (a, b) => {
              var c = this.items[a];
              c && (c.disabled = b);
            },
            getDisabledStateForElementIndex: (a) => {
              var b = this.items[a];
              return !!b && b.disabled;
            },
            setSelectedStateForElementIndex: (a, b) => {
              var c = this.items[a];
              c && (c.selected = b);
            },
            getSelectedStateForElementIndex: (a) => {
              var b = this.items[a];
              return !!b && b.selected;
            },
            setActivatedStateForElementIndex: (a, b) => {
              var c = this.items[a];
              c && (c.activated = b);
            },
          }),
          this.mdcAdapter
        );
      }
      selectUi(a) {
        var b =
            !!(1 < arguments.length && arguments[1] !== void 0) && arguments[1],
          c = this.items[a];
        c && ((c.selected = !0), (c.activated = b));
      }
      deselectUi(a) {
        var b = this.items[a];
        b && ((b.selected = !1), (b.activated = !1));
      }
      select(a) {
        this.mdcFoundation && this.mdcFoundation.setSelectedIndex(a);
      }
      toggle(a, b) {
        this.multi && this.mdcFoundation.toggleMultiAtIndex(a, b);
      }
      onListItemConnected(a) {
        var b = a.target;
        this.layout(-1 === this.items.indexOf(b));
      }
      layout() {
        var a =
          !(0 < arguments.length && arguments[0] !== void 0) || arguments[0];
        a && this.updateItems();
        var b = this.items[0];
        for (var c of this.items) c.tabindex = -1;
        b &&
          (this.noninteractive
            ? !this.previousTabindex && (this.previousTabindex = b)
            : (b.tabindex = 0)),
          this.itemsReadyResolver();
      }
      getFocusedItemIndex() {
        if (!this.mdcRoot) return -1;
        if (!this.items.length) return -1;
        var a = nc();
        if (!a.length) return -1;
        for (var b, c = a.length - 1; 0 <= c; c--)
          if (((b = a[c]), Fd(b))) return this.items.indexOf(b);
        return -1;
      }
      focusItemAtIndex(a) {
        for (var b of this.items)
          if (0 === b.tabindex) {
            b.tabindex = -1;
            break;
          }
        (this.items[a].tabindex = 0), this.items[a].focus();
      }
      focus() {
        var a = this.mdcRoot;
        a && a.focus();
      }
      blur() {
        var a = this.mdcRoot;
        a && a.blur();
      }
    }
    Na([Pa({ type: String })], Gd.prototype, "emptyMessage", void 0),
      Na([Ra(".mdc-deprecated-list")], Gd.prototype, "mdcRoot", void 0),
      Na([Ta("", !0, "*")], Gd.prototype, "assignedElements", void 0),
      Na(
        [Ta("", !0, '[tabindex="0"]')],
        Gd.prototype,
        "tabbableElements",
        void 0
      ),
      Na(
        [
          Pa({ type: Boolean }),
          Zb(function (a) {
            this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(a);
          }),
        ],
        Gd.prototype,
        "activatable",
        void 0
      ),
      Na(
        [
          Pa({ type: Boolean }),
          Zb(function (a, b) {
            this.mdcFoundation && this.mdcFoundation.setMulti(a),
              b !== void 0 && this.layout();
          }),
        ],
        Gd.prototype,
        "multi",
        void 0
      ),
      Na(
        [
          Pa({ type: Boolean }),
          Zb(function (a) {
            this.mdcFoundation && this.mdcFoundation.setWrapFocus(a);
          }),
        ],
        Gd.prototype,
        "wrapFocus",
        void 0
      ),
      Na(
        [
          Pa({ type: String }),
          Zb(function (a, b) {
            b !== void 0 && this.updateItems();
          }),
        ],
        Gd.prototype,
        "itemRoles",
        void 0
      ),
      Na([Pa({ type: String })], Gd.prototype, "innerRole", void 0),
      Na([Pa({ type: String })], Gd.prototype, "innerAriaLabel", void 0),
      Na([Pa({ type: Boolean })], Gd.prototype, "rootTabbable", void 0),
      Na(
        [
          Pa({ type: Boolean, reflect: !0 }),
          Zb(function (a) {
            var b, c;
            if (a) {
              var d =
                null !==
                  (c =
                    null === (b = this.tabbableElements) || void 0 === b
                      ? void 0
                      : b[0]) && void 0 !== c
                  ? c
                  : null;
              (this.previousTabindex = d),
                d && d.setAttribute("tabindex", "-1");
            } else !a && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), (this.previousTabindex = null));
          }),
        ],
        Gd.prototype,
        "noninteractive",
        void 0
      );
    var Hd = mb(
      X ||
        (X = j([
          '@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}',
        ]))
    );
    class Id extends La(Gd) {
      static get defineId() {
        return "mwc-list";
      }
      static get elementDefinitions() {
        return Vb([Cc], Id);
      }
      static get styles() {
        return Hd;
      }
    }
    class Jd extends La(zd) {
      static get defineId() {
        return "mwc-menu";
      }
      static get elementDefinitions() {
        return Vb([Ed, Id], Jd);
      }
      static get styles() {
        return Ad;
      }
    }
    var Kd = { NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch" },
      Ld = { NOTCH_ELEMENT_PADDING: 8 },
      Md = {
        NO_LABEL: "mdc-notched-outline--no-label",
        OUTLINE_NOTCHED: "mdc-notched-outline--notched",
        OUTLINE_UPGRADED: "mdc-notched-outline--upgraded",
      },
      Nd = (function (a) {
        function b(c) {
          return a.call(this, Yb(Yb({}, b.defaultAdapter), c)) || this;
        }
        return (
          Ma(b, a),
          Object.defineProperty(b, "strings", {
            get: function () {
              return Kd;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "cssClasses", {
            get: function () {
              return Md;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "numbers", {
            get: function () {
              return Ld;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(b, "defaultAdapter", {
            get: function () {
              return {
                addClass: function () {},
                removeClass: function () {},
                setNotchWidthProperty: function () {},
                removeNotchWidthProperty: function () {},
              };
            },
            enumerable: !1,
            configurable: !0,
          }),
          (b.prototype.notch = function (a) {
            var c = b.cssClasses.OUTLINE_NOTCHED;
            0 < a && (a += Ld.NOTCH_ELEMENT_PADDING),
              this.adapter.setNotchWidthProperty(a),
              this.adapter.addClass(c);
          }),
          (b.prototype.closeNotch = function () {
            var a = b.cssClasses.OUTLINE_NOTCHED;
            this.adapter.removeClass(a),
              this.adapter.removeNotchWidthProperty();
          }),
          b
        );
      })(qc);
    class Od extends pc {
      constructor() {
        super(...arguments),
          (this.mdcFoundationClass = Nd),
          (this.width = 0),
          (this.open = !1),
          (this.lastOpen = this.open);
      }
      createAdapter() {
        return {
          addClass: (a) => this.mdcRoot.classList.add(a),
          removeClass: (a) => this.mdcRoot.classList.remove(a),
          setNotchWidthProperty: (a) =>
            this.notchElement.style.setProperty("width", "".concat(a, "px")),
          removeNotchWidthProperty: () =>
            this.notchElement.style.removeProperty("width"),
        };
      }
      openOrClose(a, b) {
        this.mdcFoundation &&
          (a && b !== void 0
            ? this.mdcFoundation.notch(b)
            : this.mdcFoundation.closeNotch());
      }
      render() {
        this.openOrClose(this.open, this.width);
        var a = hc({ "mdc-notched-outline--notched": this.open });
        return g(
          Y ||
            (Y = j([
              '\n      <span class="mdc-notched-outline ',
              '">\n        <span class="mdc-notched-outline__leading"></span>\n        <span class="mdc-notched-outline__notch">\n          <slot></slot>\n        </span>\n        <span class="mdc-notched-outline__trailing"></span>\n      </span>',
            ])),
          a
        );
      }
    }
    Na([Ra(".mdc-notched-outline")], Od.prototype, "mdcRoot", void 0),
      Na([Pa({ type: Number })], Od.prototype, "width", void 0),
      Na([Pa({ type: Boolean, reflect: !0 })], Od.prototype, "open", void 0),
      Na(
        [Ra(".mdc-notched-outline__notch")],
        Od.prototype,
        "notchElement",
        void 0
      );
    var Pd = mb(
      Z ||
        (Z = j([
          ".mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}",
        ]))
    );
    class Qd extends La(Od) {
      static get defineId() {
        return "mwc-notched-outline";
      }
      static get elementDefinitions() {
        return Vb([], Qd);
      }
      static get styles() {
        return Pd;
      }
    }
    var Rd = mb(
      aa ||
        (aa = j([
          ':host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}',
        ]))
    );
    class Sd extends La(Qb) {
      static get defineId() {
        return "mwc-icon";
      }
      static get elementDefinitions() {
        return Vb([], Sd);
      }
      render() {
        return g(ba || (ba = j(["<span><slot></slot></span>"])));
      }
      static get styles() {
        return Rd;
      }
    }
    class Td extends La(md) {
      static get defineId() {
        return "mwc-select";
      }
      static get elementDefinitions() {
        return Vb([Jd, Sd, Qd], Td);
      }
      static get styles() {
        return od;
      }
    }
    var Ud = function (a, b) {
      var c =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
        d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
        e = new Event(b, {
          bubbles: void 0 === d.bubbles || d.bubbles,
          cancelable: !!d.cancelable,
          composed: void 0 === d.composed || d.composed,
        });
      return (e.detail = c), a.dispatchEvent(e), e;
    };
    class Vd extends La(Qb) {
      static get elementDefinitions() {
        return Vb(
          [Wb("ha-checkbox"), Wb("ha-formfield"), Wb("ha-form-string"), Cc, Td],
          Vd
        );
      }
      static get styles() {
        return Ub;
      }
      static get properties() {
        return { hass: {}, _config: {} };
      }
      setConfig(a) {
        this._config = l(l({}, Tb), a);
      }
      get entityOptions() {
        var a = Object.keys(this.hass.states).filter((a) =>
          ["switch", "light", "group"].includes(a.substr(0, a.indexOf(".")))
        );
        return a.sort(), a;
      }
      firstUpdated() {
        this._firstRendered = !0;
      }
      render() {
        if (!this.hass) return g(ca || (ca = j([""])));
        var { header: a } = this._config;
        if (!a && this._config.entity) {
          var c = this._config.entity.split(".")[1] || "";
          c && ((c = c.charAt(0).toUpperCase() + c.slice(1)), (a = c));
        }
        var b = this.entityOptions.map((a) =>
          g(
            da ||
              (da = j([
                '<mwc-list-item value="',
                '" ?selected=',
                ">",
                "</mwc-list-item>",
              ])),
            a,
            a === this._config.entity,
            a
          )
        );
        return g(
          ea ||
            (ea = j([
              '\n      <div class="card-config">\n\n        <div class=overall-config\'>\n          <ha-form-string\n            .schema=',
              '\n            label="Header"\n            .data="',
              '"\n            .configValue="',
              '"\n            @value-changed="',
              "\"\n          ></ha-form-string>\n        </div>\n\n        <div class='entities'>\n          <mwc-select\n            .naturalMenuWidth=",
              '\n            label="Entity"\n            @selected="',
              '" \n            @closed="',
              '" \n            .configValue="',
              '"\n          >\n            ',
              "\n          </mwc-select>\n          <ha-form-string\n            .schema=",
              '\n            label="Brightness Icon"\n            .data="',
              '"\n            .configValue="',
              '"\n            @value-changed="',
              "\"\n          ></ha-form-string>\n        </div>\n\n        <div class='entities'>\n         <ha-form-string\n           .schema=",
              '\n           label="White Icon"\n            .data="',
              '"\n            .configValue="',
              '"\n            @value-changed="',
              '"\n          ></ha-form-string>\n          <ha-form-string\n            .schema=',
              '\n            label="Temperature Icon"\n            .data="',
              '"\n            .configValue="',
              '"\n            @value-changed="',
              "\"\n          ></ha-form-string>\n        </div>\n\n        <div class='overall-config'>\n          <div class='checkbox-options'>\n            <ha-formfield label=\"Show Color Wheel\">\n              <ha-checkbox\n                @change=\"",
              '" \n                .checked=',
              '\n                .value="',
              '"\n              ></ha-checkbox>\n            </ha-formfield>\n            <ha-formfield label="Shorten Cards">\n              <ha-checkbox\n                @change="',
              '"\n                .checked=',
              '\n                .value="',
              '"\n              ></ha-checkbox>\n            </ha-formfield>\n            </div>\n\n            <div class=\'checkbox-options\'>\n              <ha-formfield label="Persist Features">\n                <ha-checkbox\n                  @change="',
              '"\n                  .checked=',
              '\n                  .value="',
              '"\n                ></ha-checkbox>\n              </ha-formfield>\n              <ha-formfield label="Show Brightness">\n                <ha-checkbox\n                  @change="',
              '"\n                  .checked=',
              '\n                  .value="',
              '"\n                ></ha-checkbox>\n              </ha-formfield>\n            </div>\n\n            <div class=\'checkbox-options\'>\n              <ha-formfield label="Show Color Temp">\n                <ha-checkbox\n                  @change="',
              '"\n                  .checked=',
              '\n                  .value="',
              '"\n                ></ha-checkbox>\n              </ha-formfield>\n              <ha-formfield label="Show White Value">\n                <ha-checkbox\n                  @change="',
              '"\n                  .checked=',
              '\n                  .value="',
              '"\n                ></ha-checkbox>\n              </ha-formfield>\n            </div>\n\n            <div class=\'checkbox-options\'>\n              <ha-formfield label="Show Speed">\n                <ha-checkbox\n                  @change="',
              '"\n                  .checked=',
              '\n                  .value="',
              '"\n                ></ha-checkbox>\n              </ha-formfield>\n              <ha-formfield label="Show Intensity">\n                <ha-checkbox\n                  @change="',
              '"\n                  .checked=',
              '\n                  .value="',
              '"\n                ></ha-checkbox>\n              </ha-formfield>\n            </div>\n\n            <div class=\'checkbox-options\'>\n              <ha-formfield label="Show Color Picker">\n                <ha-checkbox\n                  @change="',
              '"\n                  .checked=',
              '\n                  .value="',
              '"\n                ></ha-checkbox>\n              </ha-formfield>\n              <ha-formfield label="Show Effects List">\n                <ha-checkbox\n                  @change="',
              '"\n                  .checked=',
              '\n                  .value="',
              '"\n                ></ha-checkbox>\n              </ha-formfield>\n            </div>\n\n            <div class=\'checkbox-options\'>\n              <ha-formfield label="Full Width Sliders">\n                <ha-checkbox\n                  @change="',
              '"\n                  .checked=',
              '\n                  .value="',
              '"\n                ></ha-checkbox>\n              </ha-formfield>\n              <ha-formfield label="Show Slider Percent">\n                <ha-checkbox\n                  @change="',
              '"\n                  .checked=',
              '\n                  .value="',
              '"\n                ></ha-checkbox>\n              </ha-formfield>\n            </div>\n\n            <div class=\'checkbox-options\'>\n              <ha-formfield label="Smooth Color Wheel">\n                <ha-checkbox\n                  @change="',
              '"\n                  .checked=',
              '\n                  .value="',
              '"\n                ></ha-checkbox>\n              </ha-formfield>\n              <ha-formfield label="Consolidate Entities">\n                <ha-checkbox\n                  @change="',
              '"\n                  .checked=',
              '\n                  .value="',
              '"\n                ></ha-checkbox>\n              </ha-formfield>\n            </div>\n\n            <div class=\'checkbox-options\'>\n              <ha-formfield label="Hide Header">\n                <ha-checkbox\n                  @change="',
              '"\n                  .checked=',
              '\n                  .value="',
              '"\n                ></ha-checkbox>\n              </ha-formfield>\n              <ha-formfield label="Child Card">\n                <ha-checkbox\n                  @change="',
              '"\n                  .checked=',
              '\n                  .value="',
              '"\n                ></ha-checkbox>\n              </ha-formfield>\n            </div>\n\n            <div class=\'checkbox-options\'>\n              <ha-formfield label="Force Features">\n                <ha-checkbox\n                  @change="',
              '"\n                  .checked=',
              '\n                  .value="',
              '"\n                ></ha-checkbox>\n              </ha-formfield>\n            </div>\n          </div>\n      </div>\n    ',
            ])),
          { name: "header", type: "string" },
          a,
          "header",
          this.configChanged,
          !0,
          this.configChanged,
          (a) => a.stopPropagation(),
          "entity",
          b,
          { name: "brightness_icon", type: "string" },
          this._config.brightness_icon,
          "brightness_icon",
          this.configChanged,
          { name: "white_icon", type: "string" },
          this._config.white_icon,
          "white_icon",
          this.configChanged,
          { name: "temperature_icon", type: "string" },
          this._config.temperature_icon,
          "temperature_icon",
          this.configChanged,
          this.checkboxConfigChanged,
          this._config.color_wheel,
          "color_wheel",
          this.checkboxConfigChanged,
          this._config.shorten_cards,
          "shorten_cards",
          this.checkboxConfigChanged,
          this._config.persist_features,
          "persist_features",
          this.checkboxConfigChanged,
          this._config.brightness,
          "brightness",
          this.checkboxConfigChanged,
          this._config.color_temp,
          "color_temp",
          this.checkboxConfigChanged,
          this._config.white_value,
          "white_value",
          this.checkboxConfigChanged,
          this._config.speed,
          "speed",
          this.checkboxConfigChanged,
          this._config.intensity,
          "intensity",
          this.checkboxConfigChanged,
          this._config.color_picker,
          "color_picker",
          this.checkboxConfigChanged,
          this._config.effects_list,
          "effects_list",
          this.checkboxConfigChanged,
          this._config.full_width_sliders,
          "full_width_sliders",
          this.checkboxConfigChanged,
          this._config.show_slider_percent,
          "show_slider_percent",
          this.checkboxConfigChanged,
          this._config.smooth_color_wheel,
          "smooth_color_wheel",
          this.checkboxConfigChanged,
          this._config.consolidate_entities,
          "consolidate_entities",
          this.checkboxConfigChanged,
          this._config.hide_header,
          "hide_header",
          this.checkboxConfigChanged,
          this._config.child_card,
          "child_card",
          this.checkboxConfigChanged,
          this._config.force_features,
          "force_features"
        );
      }
      configChanged(a) {
        if (this._config && this.hass && this._firstRendered) {
          var {
            target: { configValue: b, value: c },
            detail: { value: d },
          } = a;
          (this._config =
            void 0 !== d && null !== d
              ? l(l({}, this._config), {}, { [b]: d })
              : l(l({}, this._config), {}, { [b]: c })),
            Ud(this, "config-changed", { config: this._config });
        }
      }
      checkboxConfigChanged(a) {
        if (this._config && this.hass && this._firstRendered) {
          var {
            target: { value: b, checked: c },
          } = a;
          (this._config = l(l({}, this._config), {}, { [b]: c })),
            Ud(this, "config-changed", { config: this._config });
        }
      }
    }
    var Wd = "light-entity-card-editor";
    customElements.define(Wd, Vd),
      console.info(
        "%c  LIGHT-ENTITY-CARD   \n%c  Version ".concat(
          {
            name: "light-entity-card",
            version: "5.0.0",
            description: "A light-entity card for Home Assistant Lovelace UI",
            keywords: [
              "home-assistant",
              "homeassistant",
              "hass",
              "automation",
              "lovelace",
              "custom-cards",
              "light-entity",
            ],
            repository: "git@github.com:ljmerza/light-entity-card.git",
            author: "Leonardo Merza <ljmerza@gmail.com>",
            license: "MIT",
            dependencies: {
              "@lit-labs/scoped-registry-mixin": "^1.0.0",
              "@material/mwc-icon": "^0.25.3",
              "@material/mwc-list": "^0.25.3",
              "@material/mwc-menu": "^0.25.3",
              "@material/mwc-notched-outline": "^0.25.3",
              "@material/mwc-ripple": "^0.25.3",
              "@material/mwc-select": "^0.25.3",
              "core-js": "^2.6.5",
              lit: "^2.1.2",
            },
            devDependencies: {
              "@babel/cli": "^7.4.3",
              "@babel/core": "^7.4.3",
              "@babel/plugin-proposal-class-properties": "^7.3.3",
              "@babel/plugin-proposal-decorators": "^7.3.0",
              "@babel/plugin-transform-template-literals": "^7.2.0",
              "@babel/preset-env": "^7.3.1",
              "@rollup/plugin-json": "^4.0.3",
              "babel-plugin-iife-wrap": "^1.1.0",
              "babel-preset-minify": "^0.5.0",
              eslint: "^5.16.0",
              "eslint-config-airbnb-base": "^13.1.0",
              "eslint-plugin-import": "2.16.0",
              rollup: "^0.66.6",
              "rollup-plugin-node-resolve": "^3.4.0",
            },
            resolutions: {
              lit: "^2.1.2",
              "lit-html": "2.1.2",
              "lit-element": "3.1.2",
              "@lit/reactive-element": "1.2.1",
            },
            scripts: {
              build: "npm run rollup && npm run babel",
              rollup: "rollup -c",
              babel:
                "babel dist/light-entity-card.js --out-file dist/light-entity-card.js",
              lint: "eslint src/* --ext .js",
              watch: "rollup -c --watch",
              start: "rollup -c --watch",
            },
          }.version,
          "       "
        ),
        "color: orange; font-weight: bold; background: black",
        "color: white; font-weight: bold; background: dimgray"
      );
    class Xd extends La(Qb) {
      static get elementDefinitions() {
        return Vb(
          [
            Wb("ha-card"),
            Wb("more-info-light"),
            Wb("ha-switch"),
            Wb("ha-icon"),
            Wb("ha-slider"),
            Wb("ha-color-picker"),
            Td,
            Cc,
          ],
          Xd
        );
      }
      firstUpdated() {
        return o(function* () {
          if (window.loadCardHelpers) {
            var a = yield window.loadCardHelpers();
            a.importMoreInfoControl("light");
          }
        })();
      }
      static get properties() {
        return { hass: Object, config: Object };
      }
      setConfig(a) {
        if (!a.entity) throw Error("entity required.");
        (this.config = l(l({}, Tb), a)),
          (this._hueSegments = this.config.smooth_color_wheel ? 0 : 24),
          (this._saturationSegments = this.config.smooth_color_wheel ? 0 : 8);
      }
      static getConfigElement() {
        return o(function* () {
          return document.createElement(Wd);
        })();
      }
      static get featureNames() {
        return {
          brightness: 1,
          colorTemp: 2,
          effectList: 4,
          color: 16,
          whiteValue: 128,
        };
      }
      static get cmdToggle() {
        return { on: "turn_on", off: "turn_off" };
      }
      static get entityLength() {
        return { light: 10, switch: 1 };
      }
      getCardSize() {
        if (
          !this.config ||
          !this.__hass ||
          !this.__hass.states[this.config.entity]
        )
          return 1;
        var a = 0,
          b = this.__hass.states[this.config.entity];
        return (
          Array.isArray(b.attributes.entity_id)
            ? b.attributes.entity_id.forEach(
                (b) => (a += this.getEntityLength(b))
              )
            : (a += this.getEntityLength(b.attributes.entity_id)),
          this.config.group && (a *= 0.8),
          parseInt(a, 1)
        );
      }
      getEntityLength(a) {
        return /^light\./.test(a)
          ? Xd.entityLength.light
          : /^switch\./.test(a)
          ? Xd.entityLength.switch
          : 0;
      }
      get styles() {
        return Sb;
      }
      get language() {
        return this.__hass.resources[this.__hass.language];
      }
      isEntityOn(a) {
        return "on" === a.state;
      }
      updated() {
        (this._isUpdating = !1),
          this._shownStateObjects.forEach((a) => {
            var b = this.generateColorPickerId(a),
              c = this.shadowRoot.querySelectorAll("#".concat(b));
            if (c.length) {
              var d = (a.attributes.hs_color && a.attributes.hs_color[0]) || 0,
                e =
                  (a.attributes.hs_color && a.attributes.hs_color[1] / 100) ||
                  0;
              c[0].desiredHsColor = { h: d, s: e };
            }
          });
      }
      render() {
        var a = this.__hass.states[this.config.entity];
        if (!a)
          return g(
            fa ||
              (fa = j([
                "\n        <style>\n          ",
                "\n        </style>\n        <ha-card> ",
                " </ha-card>\n      ",
              ])),
            this.styles,
            "Invalid entity: ".concat(this.config.entity)
          );
        (this._isUpdating = !0),
          (this._stateObjects = this.getEntitiesToShow(a)),
          (this._shownStateObjects = this.config.consolidate_entities
            ? [a]
            : [...this._stateObjects]);
        var b = this._shownStateObjects.reduce(
            (a, b) =>
              g(ga || (ga = j(["", "", ""])), a, this.createEntityTemplate(b)),
            ""
          ),
          c = "light-entity-card "
            .concat(this.config.shorten_cards ? " group" : "", " ")
            .concat(this.config.child_card ? " light-entity-child-card" : "");
        return g(
          ha ||
            (ha = j([
              "\n      <style>\n        ",
              '\n      </style>\n      <ha-card class="',
              '">\n        <more-info-light .hass=',
              "></more-info-light>\n        ",
              "\n      </ha-card>\n    ",
            ])),
          this.styles,
          c,
          this.hass,
          b
        );
      }
      getEntitiesToShow(a) {
        return a.attributes.entity_id && Array.isArray(a.attributes.entity_id)
          ? a.attributes.entity_id
              .map((a) => this.__hass.states[a])
              .filter(Boolean)
          : [a];
      }
      createEntityTemplate(a) {
        var b = this.config.full_width_sliders ? "ha-slider-full-width" : "";
        return g(
          ia ||
            (ia = j([
              "\n      ",
              '\n      <div class="light-entity-card-sliders ',
              '">\n        ',
              " ",
              "\n        ",
              " ",
              "\n        ",
              "\n      </div>\n      ",
              " ",
              "\n    ",
            ])),
          this.createHeader(a),
          b,
          this.createBrightnessSlider(a),
          this.createSpeedSlider(a),
          this.createIntensitySlider(a),
          this.createColorTemperature(a),
          this.createWhiteValue(a),
          this.createColorPicker(a),
          this.createEffectList(a)
        );
      }
      createHeader(a) {
        if (this.config.hide_header) return g(ja || (ja = j([""])));
        var b = this.config.header || a.attributes.friendly_name || a.entity_id;
        return g(
          ka ||
            (ka = j([
              '\n      <div class="light-entity-card__header">\n        <div class="light-entity-card__title">',
              '</div>\n        <div class="light-entity-card-toggle">\n          <ha-switch .checked=',
              " @change=",
              "></ha-switch>\n        </div>\n      </div>\n    ",
            ])),
          b,
          this.isEntityOn(a),
          (b) => this.setToggle(b, a)
        );
      }
      createBrightnessSlider(a) {
        return !1 === this.config.brightness
          ? g(la || (la = j([""])))
          : this.dontShowFeature("brightness", a)
          ? g(ma || (ma = j([""])))
          : g(
              na ||
                (na = j([
                  '\n      <div class="control light-entity-card-center">\n        <div class="icon-container">\n          <ha-icon icon="hass:',
                  '"></ha-icon>\n        </div>\n        <ha-slider\n          .value="',
                  '"\n          @value-changed="',
                  '"\n          min="1"\n          max="255"\n        ></ha-slider>\n        ',
                  "\n      </div>\n    ",
                ])),
              this.config.brightness_icon,
              a.attributes.brightness,
              (b) => this._setValue(b, a, "brightness"),
              this.showPercent(a.attributes.brightness, 0, 254)
            );
      }
      createSpeedSlider(a) {
        return !1 === this.config.speed
          ? g(oa || (oa = j([""])))
          : this.dontShowFeature("speed", a)
          ? g(pa || (pa = j([""])))
          : g(
              qa ||
                (qa = j([
                  '\n      <div class="control light-entity-card-center">\n        <div class="icon-container">\n          <ha-icon icon="hass:',
                  '"></ha-icon>\n        </div>\n        <ha-slider\n          .value="',
                  '"\n          @value-changed="',
                  '"\n          min="1"\n          max="255"\n        ></ha-slider>\n        ',
                  "\n      </div>\n    ",
                ])),
              this.config.speed_icon,
              a.attributes.speed,
              (b) => this._setValue(b, a, "speed"),
              this.showPercent(a.attributes.speed, 0, 254)
            );
      }
      createIntensitySlider(a) {
        return !1 === this.config.speed
          ? g(ra || (ra = j([""])))
          : this.dontShowFeature("intensity", a)
          ? g(sa || (sa = j([""])))
          : g(
              ta ||
                (ta = j([
                  '\n      <div class="control light-entity-card-center">\n        <div class="icon-container">\n          <ha-icon icon="hass:',
                  '"></ha-icon>\n        </div>\n        <ha-slider\n          .value="',
                  '"\n          @value-changed="',
                  '"\n          min="1"\n          max="255"\n        ></ha-slider>\n        ',
                  "\n      </div>\n    ",
                ])),
              this.config.intensity_icon,
              a.attributes.intensity,
              (b) => this._setValue(b, a, "intensity"),
              this.showPercent(a.attributes.intensity, 0, 254)
            );
      }
      showPercent(a, b, c) {
        if (!this.config.show_slider_percent) return g(ua || (ua = j([""])));
        var d = parseInt((100 * (a - b)) / (c - b), 0);
        return (
          isNaN(d) && (d = 0),
          g(va || (va = j([' <div class="percent-slider">', "%</div> "])), d)
        );
      }
      createColorTemperature(a) {
        if (!1 === this.config.color_temp) return g(wa || (wa = j([""])));
        if (this.dontShowFeature("colorTemp", a))
          return g(xa || (xa = j([""])));
        var b = this.showPercent(
          a.attributes.color_temp,
          a.attributes.min_mireds - 1,
          a.attributes.max_mireds - 1
        );
        return g(
          ya ||
            (ya = j([
              '\n      <div class="control light-entity-card-center">\n        <ha-icon icon="hass:',
              '"></ha-icon>\n        <ha-slider\n          class="light-entity-card-color_temp"\n          min="',
              '"\n          max="',
              '"\n          .value=',
              '\n          @value-changed="',
              '"\n        >\n        </ha-slider>\n        ',
              "\n      </div>\n    ",
            ])),
          this.config.temperature_icon,
          a.attributes.min_mireds,
          a.attributes.max_mireds,
          a.attributes.color_temp,
          (b) => this._setValue(b, a, "color_temp"),
          b
        );
      }
      createWhiteValue(a) {
        return !1 === this.config.white_value
          ? g(za || (za = j([""])))
          : this.dontShowFeature("whiteValue", a)
          ? g(Aa || (Aa = j([""])))
          : g(
              Ba ||
                (Ba = j([
                  '\n      <div class="control light-entity-card-center">\n        <div class="icon-container">\n          <ha-icon icon="hass:',
                  '"></ha-icon>\n        </div>\n        <ha-slider\n          max="255"\n          .value="',
                  '"\n          @value-changed="',
                  '"\n        >\n        </ha-slider>\n        ',
                  "\n      </div>\n    ",
                ])),
              this.config.white_icon,
              a.attributes.white_value,
              (b) => this._setValue(b, a, "white_value"),
              this.showPercent(a.attributes.white_value, 0, 254)
            );
      }
      createEffectList(a) {
        if (!1 === this.config.effects_list) return g(Ca || (Ca = j([""])));
        if (!this.config.persist_features && !this.isEntityOn(a))
          return g(Da || (Da = j([""])));
        var b = a.attributes.effect_list || [];
        if (this.config.effects_list && Array.isArray(this.config.effects_list))
          b = this.config.effects_list;
        else if (
          this.config.effects_list &&
          this.hass.states[this.config.effects_list]
        ) {
          var e = this.hass.states[this.config.effects_list];
          b = (e.attributes && e.attributes.options) || [];
        } else if (this.dontShowFeature("effectList", a))
          return g(Ea || (Ea = j([""])));
        var c = b.map((b) => this.createListItem(a, b)),
          d = this.language["ui.card.light.effect"];
        return g(
          Fa ||
            (Fa = j([
              '\n      <div class="control light-entity-card-center light-entity-card-effectlist">\n        <mwc-select @selected=',
              ' label="',
              '"> ',
              " </mwc-select>\n      </div>\n    ",
            ])),
          (b) => this.setEffect(b, a),
          d,
          c
        );
      }
      createListItem(a, b) {
        return g(
          Ga ||
            (Ga = j([
              '<mwc-list-item value="',
              '" ?selected=',
              "\n      >",
              "</mwc-list-item\n    >",
            ])),
          b,
          b === a.attributes.effect,
          b
        );
      }
      createColorPicker(a) {
        return !1 === this.config.color_picker
          ? g(Ha || (Ha = j([""])))
          : this.dontShowFeature("color", a)
          ? g(Ia || (Ia = j([""])))
          : g(
              Ja ||
                (Ja = j([
                  '\n      <div class="light-entity-card__color-picker">\n        <ha-color-picker\n          id="',
                  '"\n          class="control color"\n          saturation-segments=',
                  "\n          hue-segments=",
                  '\n          throttle="500"\n          @colorselected=',
                  "\n        >\n        </ha-color-picker>\n      </div>\n    ",
                ])),
              this.generateColorPickerId(a),
              this._saturationSegments,
              this._hueSegments,
              (b) => this.setColorPicker(b, a)
            );
      }
      dontShowFeature(a, b) {
        if (this.config.force_features) return !1;
        if ("speed" === a && "speed" in b.attributes) return !0;
        if ("intensity" === a && "intensity" in b.attributes) return !0;
        var c = Xd.featureNames[a] & b.attributes.supported_features,
          d = b.attributes.supported_color_modes || [];
        if (!c)
          switch (a) {
            case "brightness":
              if (
                ((c = Object.prototype.hasOwnProperty.call(
                  b.attributes,
                  "brightness"
                )),
                !c)
              ) {
                var e = [
                  "hs",
                  "rgb",
                  "rgbw",
                  "rgbww",
                  "white",
                  "brightness",
                  "color_temp",
                  "xy",
                ];
                c = 0 < [...new Set(d.filter((a) => e.includes(a)))].length;
              }
              break;
            case "colorTemp":
              if (d) {
                var f = ["color_temp"];
                c = 0 < [...new Set(d.filter((a) => f.includes(a)))].length;
              }
              break;
            case "effectList":
              c = b.attributes.effect_list && b.attributes.effect_list.length;
              break;
            case "color":
              if (!c) {
                var g = ["hs", "rgb", "rgbw", "rgbww", "xy"];
                c = 0 < [...new Set(d.filter((a) => g.includes(a)))].length;
              }
              break;
            case "whiteValue":
              c = Object.prototype.hasOwnProperty.call(
                b.attributes,
                "white_value"
              );
              break;
            default:
              c = !1;
          }
        return (
          !c || !(this.config.persist_features || this.isEntityOn(b)) || void 0
        );
      }
      generateColorPickerId(a) {
        var b = a.entity_id.replace(".", "-");
        return "light-entity-card-".concat(b);
      }
      setColorPicker(a, b) {
        this.callEntityService(
          { hs_color: [a.detail.hs.h, 100 * a.detail.hs.s] },
          b
        );
      }
      _setValue(a, b, c) {
        var d = parseInt(a.target.value, 0);
        isNaN(d) ||
          parseInt(b.attributes[c], 0) === d ||
          this.callEntityService({ [c]: d }, b);
      }
      setToggle(a, b) {
        var c = this.isEntityOn(b) ? Xd.cmdToggle.off : Xd.cmdToggle.on;
        this.callEntityService({}, b, c);
      }
      setEffect(a, b) {
        this.callEntityService({ effect: a.target.value }, b);
      }
      callEntityService(a, b, c) {
        if (!this._isUpdating) {
          var d = b.entity_id.split(".")[0];
          "group" === d && (d = "homeassistant"),
            this.hass.callService(
              d,
              c || Xd.cmdToggle.on,
              l({ entity_id: b.entity_id }, a)
            );
        }
      }
    }
    customElements.define("light-entity-card", Xd),
      (window.customCards = window.customCards || []),
      window.customCards.push({
        type: "light-entity-card",
        name: "Light Entity Card",
        description: "Control lights and switches",
      });
  });
})();
