"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define("PersonalitySunburstChart", [], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.PersonalitySunburstChart = t() : e.PersonalitySunburstChart = t();
}(window, function () {
  var e = Math.abs,
      t = Math.sqrt,
      n = Math.atan2,
      i = Math.round,
      r = Math.min,
      s = Math.pow,
      a = Math.PI,
      o = Math.sin,
      c = Math.cos,
      u = Math.max;return function (e) {
    function t(i) {
      if (n[i]) return n[i].exports;var r = n[i] = { i: i, l: !1, exports: {} };return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
    }var n = {};return t.m = e, t.c = n, t.d = function (e, n, i) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: i });
    }, t.r = function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 });
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(n, "a", n), n;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 71);
  }([function (e, t, n) {
    (function (t) {
      function n(e, t) {
        for (var n = -1, i = t.length, r = e.length; ++n < i;) {
          e[r + n] = t[n];
        }return e;
      }function i(e) {
        return S(e) || function (e) {
          return function (e) {
            return s(e) && function (e) {
              return null != e && function (e) {
                return "number" == typeof e && -1 < e && 0 == e % 1 && e <= o;
              }(e.length) && !function (e) {
                var t = function (e) {
                  var t = typeof e === "undefined" ? "undefined" : _typeof(e);return !!e && ("object" == t || "function" == t);
                }(e) ? m.call(e) : "";return t == l || t == h;
              }(e);
            }(e);
          }(e) && v.call(e, "callee") && (!x.call(e, "callee") || m.call(e) == c);
        }(e) || !!(b && e && e[b]);
      }function r(e) {
        if ("string" == typeof e || function (e) {
          return "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || s(e) && m.call(e) == f;
        }(e)) return e;var t = e + "";return "0" == t && 1 / e == -a ? "-0" : t;
      }function s(e) {
        return !!e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
      }var a = 1 / 0,
          o = 9007199254740991,
          c = "[object Arguments]",
          l = "[object Function]",
          h = "[object GeneratorFunction]",
          f = "[object Symbol]",
          _ = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.Object === Object && t,
          d = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
          p = _ || d || Function("return this")(),
          y = Object.prototype,
          v = y.hasOwnProperty,
          m = y.toString,
          g = p.Symbol,
          x = y.propertyIsEnumerable,
          b = g ? g.isConcatSpreadable : void 0,
          A = u,
          S = Array.isArray,
          w = function (e, t) {
        return t = A(void 0 === t ? e.length - 1 : t, 0), function () {
          for (var n = arguments, i = -1, r = A(n.length - t, 0), s = Array(r); ++i < r;) {
            s[i] = n[t + i];
          }i = -1;for (var a = Array(t + 1); ++i < t;) {
            a[i] = n[i];
          }return a[t] = s, function (e, t, n) {
            switch (n.length) {case 0:
                return e.call(t);case 1:
                return e.call(t, n[0]);case 2:
                return e.call(t, n[0], n[1]);case 3:
                return e.call(t, n[0], n[1], n[2]);}return e.apply(t, n);
          }(e, this, a);
        };
      }(function (e, t) {
        return null == e ? {} : function (e, t) {
          return function (e, t, n) {
            for (var i = -1, r = t.length, s = {}; ++i < r;) {
              var a = t[i],
                  o = e[a];n(o, a) && (s[a] = o);
            }return s;
          }(e = Object(e), t, function (t, n) {
            return n in e;
          });
        }(e, function (e, t) {
          for (var n = -1, i = e ? e.length : 0, r = Array(i); ++n < i;) {
            r[n] = t(e[n], n, e);
          }return r;
        }(function e(t, r, s, a, o) {
          var c = -1,
              u = t.length;for (s || (s = i), o || (o = []); ++c < u;) {
            var l = t[c];0 < r && s(l) ? 1 < r ? e(l, r - 1, s, a, o) : n(o, l) : !a && (o[o.length] = l);
          }return o;
        }(t, 1), r));
      });e.exports = w;
    }).call(this, n(69));
  }, function (e, t, n) {
    "use strict";

    var i = n(38);e.exports = function () {
      function _class(e, t) {
        _classCallCheck(this, _class);

        this.I18nData = t, this.setLocale(e.locale);
      }

      _createClass(_class, [{
        key: "setLocale",
        value: function setLocale(e) {
          if (this._locale !== e) {
            this._locale = e;var _t2 = new this.I18nData(e);this._data = _t2.data();
          }
        }
      }, {
        key: "name",
        value: function name(e) {
          return this._data[e];
        }
      }, {
        key: "names",
        value: function names() {
          return i(this._data).map(function (e) {
            return e[1];
          });
        }
      }]);

      return _class;
    }();
  }, function (e) {
    "use strict";

    function t(e, t) {
      return e.data ? e.data[t] : e[t];
    }e.exports = { isLocatedBottom: function isLocatedBottom(e) {
        var t = e.x ? e.x : e.x0,
            n = e.x ? e.x + e.dx : e.x1;return t > a / 2 && 5 > n;
      }, arc: function arc(e, t, n) {
        return "M" + n * c(e) + "," + n * o(e) + "A" + n + "," + n + " 0 0 , 0 " + n * c(t) + "," + n * o(t);
      }, expandOrFoldSector: function expandOrFoldSector(e, n, i) {
        null !== n.expand && 1 < n.depth && (0 === n.expand ? (n.children && i.attr("opacity", 1), e.filter(function (e) {
          if (e.parent) return t(e.parent, "id") === t(n, "id");
        }).attr("visibility", "visible"), n.expand = 1) : (n.children && i.attr("opacity", 1), function e(n, i) {
          i.filter(function (e) {
            if (e.parent) return t(e.parent, "id") === t(n, "id");
          }).attr("visibility", "hidden").attr("opacity", 1).each(function (t) {
            t.children && e(t, i);
          }), n.expand = 0;
        }(n, e)));
      }, getValue: t, getBarLengthFactor: function getBarLengthFactor(e) {
        var n = 10 / (e.depth - 2);return e.parent && e.parent.parent && (("needs" === t(e.parent.parent, "id") || "values" === t(e.parent.parent, "id")) && (n = 1), e.parent.parent.parent && "personality" === t(e.parent.parent.parent, "id") && (n = 1)), n;
      } };
  }, function (e, l, h) {
    "use strict";

    function f(e, t) {
      var n = Object.create(e.prototype);for (var i in t) {
        n[i] = t[i];
      }return n;
    }function _() {}function d(e) {
      var t;return e = (e + "").trim().toLowerCase(), (t = H.exec(e)) ? new g(15 & (t = parseInt(t[1], 16)) >> 8 | 240 & t >> 4, 15 & t >> 4 | 240 & t, (15 & t) << 4 | 15 & t, 1) : (t = B.exec(e)) ? p(parseInt(t[1], 16)) : (t = U.exec(e)) ? new g(t[1], t[2], t[3], 1) : (t = F.exec(e)) ? new g(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, 1) : (t = V.exec(e)) ? y(t[1], t[2], t[3], t[4]) : (t = G.exec(e)) ? y(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, t[4]) : (t = $.exec(e)) ? x(t[1], t[2] / 100, t[3] / 100, 1) : (t = W.exec(e)) ? x(t[1], t[2] / 100, t[3] / 100, t[4]) : X.hasOwnProperty(e) ? p(X[e]) : "transparent" === e ? new g(NaN, NaN, NaN, 0) : null;
    }function p(e) {
      return new g(255 & e >> 16, 255 & e >> 8, 255 & e, 1);
    }function y(e, t, n, i) {
      return 0 >= i && (e = t = n = NaN), new g(e, t, n, i);
    }function v(e) {
      return e instanceof _ || (e = d(e)), e ? new g((e = e.rgb()).r, e.g, e.b, e.opacity) : new g();
    }function m(e, t, n, i) {
      return 1 === arguments.length ? v(e) : new g(e, t, n, null == i ? 1 : i);
    }function g(e, t, n, i) {
      this.r = +e, this.g = +t, this.b = +n, this.opacity = +i;
    }function x(e, t, n, i) {
      return 0 >= i ? e = t = n = NaN : 0 >= n || 1 <= n ? e = t = NaN : 0 >= t && (e = NaN), new A(e, t, n, i);
    }function b(e, t, n, i) {
      return 1 === arguments.length ? function (e) {
        if (e instanceof A) return new A(e.h, e.s, e.l, e.opacity);if (e instanceof _ || (e = d(e)), !e) return new A();if (e instanceof A) return e;var t = (e = e.rgb()).r / 255,
            n = e.g / 255,
            i = e.b / 255,
            s = r(t, n, i),
            a = u(t, n, i),
            o = NaN,
            c = a - s,
            l = (a + s) / 2;return c ? (o = t === a ? (n - i) / c + 6 * (n < i) : n === a ? (i - t) / c + 2 : (t - n) / c + 4, c /= .5 > l ? a + s : 2 - a - s, o *= 60) : c = 0 < l && 1 > l ? 0 : o, new A(o, c, l, e.opacity);
      }(e) : new A(e, t, n, null == i ? 1 : i);
    }function A(e, t, n, i) {
      this.h = +e, this.s = +t, this.l = +n, this.opacity = +i;
    }function S(e, t, n) {
      return 255 * (60 > e ? t + (n - t) * e / 60 : 180 > e ? n : 240 > e ? t + (n - t) * (240 - e) / 60 : t);
    }function w(e) {
      if (e instanceof C) return new C(e.l, e.a, e.b, e.opacity);if (e instanceof z) {
        var t = e.h * Y;return new C(e.l, c(t) * e.c, o(t) * e.c, e.opacity);
      }e instanceof g || (e = v(e));var n = N(e.r),
          i = N(e.g),
          r = N(e.b),
          s = k((.4124564 * n + .3575761 * i + .1804375 * r) / Z),
          a = k((.2126729 * n + .7151522 * i + .072175 * r) / J);return new C(116 * a - 16, 500 * (s - a), 200 * (a - k((.0193339 * n + .119192 * i + .9503041 * r) / Q)), e.opacity);
    }function E(e, t, n, i) {
      return 1 === arguments.length ? w(e) : new C(e, t, n, null == i ? 1 : i);
    }function C(e, t, n, i) {
      this.l = +e, this.a = +t, this.b = +n, this.opacity = +i;
    }function k(e) {
      return e > ie ? s(e, 1 / 3) : e / ne + ee;
    }function T(e) {
      return e > te ? e * e * e : ne * (e - ee);
    }function I(e) {
      return 255 * (.0031308 >= e ? 12.92 * e : 1.055 * s(e, 1 / 2.4) - .055);
    }function N(e) {
      return .04045 >= (e /= 255) ? e / 12.92 : s((e + .055) / 1.055, 2.4);
    }function O(e) {
      if (e instanceof z) return new z(e.h, e.c, e.l, e.opacity);e instanceof C || (e = w(e));var i = n(e.b, e.a) * K;return new z(0 > i ? i + 360 : i, t(e.a * e.a + e.b * e.b), e.l, e.opacity);
    }function P(e, t, n, i) {
      return 1 === arguments.length ? O(e) : new z(e, t, n, null == i ? 1 : i);
    }function z(e, t, n, i) {
      this.h = +e, this.c = +t, this.l = +n, this.opacity = +i;
    }function L(e) {
      if (e instanceof D) return new D(e.h, e.s, e.l, e.opacity);e instanceof g || (e = v(e));var i = e.r / 255,
          r = e.g / 255,
          s = e.b / 255,
          a = (le * s + ce * i - ue * r) / (le + ce - ue),
          o = s - a,
          c = (oe * (r - a) - se * o) / ae,
          u = t(c * c + o * o) / (oe * a * (1 - a)),
          l = u ? n(c, o) * K - 120 : NaN;return new D(0 > l ? l + 360 : l, u, a, e.opacity);
    }function M(e, t, n, i) {
      return 1 === arguments.length ? L(e) : new D(e, t, n, null == i ? 1 : i);
    }function D(e, t, n, i) {
      this.h = +e, this.s = +t, this.l = +n, this.opacity = +i;
    }h.r(l);var j = function j(e, t, n) {
      e.prototype = t.prototype = n, n.constructor = e;
    },
        R = .7,
        q = 1 / R,
        H = /^#([0-9a-f]{3})$/,
        B = /^#([0-9a-f]{6})$/,
        U = /^rgb\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*\)$/,
        F = /^rgb\(\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*\)$/,
        V = /^rgba\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s*\)$/,
        G = /^rgba\(\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s*\)$/,
        $ = /^hsl\(\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*\)$/,
        W = /^hsla\(\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*,\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s*\)$/,
        X = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };j(_, d, { displayable: function displayable() {
        return this.rgb().displayable();
      }, toString: function toString() {
        return this.rgb() + "";
      } }), j(g, m, f(_, { brighter: function brighter(e) {
        return e = null == e ? q : s(q, e), new g(this.r * e, this.g * e, this.b * e, this.opacity);
      }, darker: function darker(e) {
        return e = null == e ? R : s(R, e), new g(this.r * e, this.g * e, this.b * e, this.opacity);
      }, rgb: function rgb() {
        return this;
      }, displayable: function displayable() {
        return 0 <= this.r && 255 >= this.r && 0 <= this.g && 255 >= this.g && 0 <= this.b && 255 >= this.b && 0 <= this.opacity && 1 >= this.opacity;
      }, toString: function toString() {
        var e = this.opacity;return (1 === (e = isNaN(e) ? 1 : u(0, r(1, e))) ? "rgb(" : "rgba(") + u(0, r(255, i(this.r) || 0)) + ", " + u(0, r(255, i(this.g) || 0)) + ", " + u(0, r(255, i(this.b) || 0)) + (1 === e ? ")" : ", " + e + ")");
      } })), j(A, b, f(_, { brighter: function brighter(e) {
        return e = null == e ? q : s(q, e), new A(this.h, this.s, this.l * e, this.opacity);
      }, darker: function darker(e) {
        return e = null == e ? R : s(R, e), new A(this.h, this.s, this.l * e, this.opacity);
      }, rgb: function rgb() {
        var e = this.h % 360 + 360 * (0 > this.h),
            t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
            n = this.l,
            i = n + (.5 > n ? n : 1 - n) * t,
            r = 2 * n - i;return new g(S(240 <= e ? e - 240 : e + 120, r, i), S(e, r, i), S(120 > e ? e + 240 : e - 120, r, i), this.opacity);
      }, displayable: function displayable() {
        return (0 <= this.s && 1 >= this.s || isNaN(this.s)) && 0 <= this.l && 1 >= this.l && 0 <= this.opacity && 1 >= this.opacity;
      } }));var Y = a / 180,
        K = 180 / a,
        Z = .95047,
        J = 1,
        Q = 1.08883,
        ee = 4 / 29,
        te = 6 / 29,
        ne = 3 * te * te,
        ie = te * te * te;j(C, E, f(_, { brighter: function brighter(e) {
        return new C(this.l + 18 * (null == e ? 1 : e), this.a, this.b, this.opacity);
      }, darker: function darker(e) {
        return new C(this.l - 18 * (null == e ? 1 : e), this.a, this.b, this.opacity);
      }, rgb: function rgb() {
        var e = (this.l + 16) / 116,
            t = isNaN(this.a) ? e : e + this.a / 500,
            n = isNaN(this.b) ? e : e - this.b / 200;return e = J * T(e), new g(I(3.2404542 * (t = Z * T(t)) - 1.5371385 * e - .4985314 * (n = Q * T(n))), I(-.969266 * t + 1.8760108 * e + .041556 * n), I(.0556434 * t - .2040259 * e + 1.0572252 * n), this.opacity);
      } })), j(z, P, f(_, { brighter: function brighter(e) {
        return new z(this.h, this.c, this.l + 18 * (null == e ? 1 : e), this.opacity);
      }, darker: function darker(e) {
        return new z(this.h, this.c, this.l - 18 * (null == e ? 1 : e), this.opacity);
      }, rgb: function rgb() {
        return w(this).rgb();
      } }));var re = 1.78277,
        se = -.29227,
        ae = -.90649,
        oe = 1.97294,
        ce = oe * ae,
        ue = oe * re,
        le = re * se - -.14861 * ae;j(D, M, f(_, { brighter: function brighter(e) {
        return e = null == e ? q : s(q, e), new D(this.h, this.s, this.l * e, this.opacity);
      }, darker: function darker(e) {
        return e = null == e ? R : s(R, e), new D(this.h, this.s, this.l * e, this.opacity);
      }, rgb: function rgb() {
        var e = isNaN(this.h) ? 0 : (this.h + 120) * Y,
            t = +this.l,
            n = isNaN(this.s) ? 0 : this.s * t * (1 - t),
            i = c(e),
            r = o(e);return new g(255 * (t + n * (-.14861 * i + re * r)), 255 * (t + n * (se * i + ae * r)), 255 * (t + n * (oe * i)), this.opacity);
      } })), h.d(l, "color", function () {
      return d;
    }), h.d(l, "rgb", function () {
      return m;
    }), h.d(l, "hsl", function () {
      return b;
    }), h.d(l, "lab", function () {
      return E;
    }), h.d(l, "hcl", function () {
      return P;
    }), h.d(l, "cubehelix", function () {
      return M;
    });
  }, function (e, n, s) {
    "use strict";

    function a(e, t) {
      return e.parent === t.parent ? 1 : 2;
    }function o(e) {
      return e.reduce(c, 0) / e.length;
    }function c(e, t) {
      return e + t.x;
    }function l(e) {
      return 1 + e.reduce(h, 0);
    }function h(e, t) {
      return u(e, t.y);
    }function f(e) {
      var t = 0,
          n = e.children,
          i = n && n.length;if (i) for (; 0 <= --i;) {
        t += n[i].value;
      } else t = 1;e.value = t;
    }function _(e, t) {
      var n,
          i,
          r,
          s,
          a,
          o = new v(e),
          c = +e.value && (o.value = e.value),
          u = [o];for (null == t && (t = d); n = u.pop();) {
        if (c && (n.value = +n.data.value), (r = t(n.data)) && (a = r.length)) for (n.children = Array(a), s = a - 1; 0 <= s; --s) {
          u.push(i = n.children[s] = new v(r[s])), i.parent = n, i.depth = n.depth + 1;
        }
      }return o.eachBefore(y);
    }function d(e) {
      return e.children;
    }function p(e) {
      e.data = e.data.data;
    }function y(e) {
      var t = 0;do {
        e.height = t;
      } while ((e = e.parent) && e.height < ++t);
    }function v(e) {
      this.data = e, this.depth = this.height = 0, this.parent = null;
    }function m(e, t) {
      var n, i;if (b(t, e)) return [t];for (n = 0; n < e.length; ++n) {
        if (g(t, e[n]) && b(S(e[n], t), e)) return [e[n], t];
      }for (n = 0; n < e.length - 1; ++n) {
        for (i = n + 1; i < e.length; ++i) {
          if (g(S(e[n], e[i]), t) && g(S(e[n], t), e[i]) && g(S(e[i], t), e[n]) && b(w(e[n], e[i], t), e)) return [e[n], e[i], t];
        }
      }throw new Error();
    }function g(e, t) {
      var n = e.r - t.r,
          i = t.x - e.x,
          r = t.y - e.y;return 0 > n || n * n < i * i + r * r;
    }function x(e, t) {
      var n = e.r - t.r + 1e-6,
          i = t.x - e.x,
          r = t.y - e.y;return 0 < n && n * n > i * i + r * r;
    }function b(e, t) {
      for (var n = 0; n < t.length; ++n) {
        if (!x(e, t[n])) return !1;
      }return !0;
    }function A(e) {
      switch (e.length) {case 1:
          return function (e) {
            return { x: e.x, y: e.y, r: e.r };
          }(e[0]);case 2:
          return S(e[0], e[1]);case 3:
          return w(e[0], e[1], e[2]);}
    }function S(e, n) {
      var i = e.x,
          r = e.y,
          s = e.r,
          a = n.x,
          o = n.y,
          c = n.r,
          u = a - i,
          l = o - r,
          h = c - s,
          f = t(u * u + l * l);return { x: (i + a + u / f * h) / 2, y: (r + o + l / f * h) / 2, r: (f + s + c) / 2 };
    }function w(e, n, i) {
      var r = e.x,
          s = e.y,
          a = e.r,
          o = n.x,
          c = n.y,
          u = n.r,
          l = i.x,
          h = i.y,
          f = i.r,
          _ = r - o,
          d = r - l,
          p = s - c,
          y = s - h,
          v = u - a,
          m = f - a,
          g = r * r + s * s - a * a,
          x = g - o * o - c * c + u * u,
          b = g - l * l - h * h + f * f,
          A = d * p - _ * y,
          S = (p * b - y * x) / (2 * A) - r,
          w = (y * v - p * m) / A,
          E = (d * x - _ * b) / (2 * A) - s,
          C = (_ * m - d * v) / A,
          k = w * w + C * C - 1,
          T = 2 * (a + S * w + E * C),
          I = S * S + E * E - a * a,
          N = -(k ? (T + t(T * T - 4 * k * I)) / (2 * k) : I / T);return { x: r + S + w * N, y: s + E + C * N, r: N };
    }function E(e, n, i) {
      var r = e.x,
          s = e.y,
          a = n.r + i.r,
          o = e.r + i.r,
          c = n.x - r,
          l = n.y - s,
          h = c * c + l * l;if (h) {
        var f = .5 + ((o *= o) - (a *= a)) / (2 * h),
            _ = t(u(0, 2 * a * (o + h) - (o -= h) * o - a * a)) / (2 * h);i.x = r + f * c + _ * l, i.y = s + f * l - _ * c;
      } else i.x = r + o, i.y = s;
    }function C(e, t) {
      var n = t.x - e.x,
          i = t.y - e.y,
          r = e.r + t.r;return r * r - 1e-6 > n * n + i * i;
    }function k(e) {
      var t = e._,
          n = e.next._,
          i = t.r + n.r,
          r = (t.x * n.r + n.x * t.r) / i,
          s = (t.y * n.r + n.y * t.r) / i;return r * r + s * s;
    }function T(e) {
      this._ = e, this.next = null, this.previous = null;
    }function I(e) {
      if (!(r = e.length)) return 0;var t, n, i, r, s, a, o, c, u, l, h;if ((t = e[0]).x = 0, t.y = 0, !(1 < r)) return t.r;if (n = e[1], t.x = -n.r, n.x = t.r, n.y = 0, !(2 < r)) return t.r + n.r;E(n, t, i = e[2]), t = new T(t), n = new T(n), i = new T(i), t.next = i.previous = n, n.next = t.previous = i, i.next = n.previous = t;e: for (o = 3; o < r; ++o) {
        E(t._, n._, i = e[o]), i = new T(i), c = n.next, u = t.previous, l = n._.r, h = t._.r;do {
          if (l <= h) {
            if (C(c._, i._)) {
              n = c, t.next = n, n.previous = t, --o;continue e;
            }l += c._.r, c = c.next;
          } else {
            if (C(u._, i._)) {
              (t = u).next = n, n.previous = t, --o;continue e;
            }h += u._.r, u = u.previous;
          }
        } while (c !== u.next);for (i.previous = t, i.next = n, t.next = n.previous = n = i, s = k(t); (i = i.next) !== n;) {
          (a = k(i)) < s && (t = i, s = a);
        }n = t.next;
      }for (t = [n._], i = n; (i = i.next) !== n;) {
        t.push(i._);
      }for (i = W(t), o = 0; o < r; ++o) {
        (t = e[o]).x -= i.x, t.y -= i.y;
      }return i.r;
    }function N(e) {
      if ("function" != typeof e) throw new Error();return e;
    }function O() {
      return 0;
    }function P(e) {
      return t(e.value);
    }function z(e) {
      return function (t) {
        t.children || (t.r = u(0, +e(t) || 0));
      };
    }function L(e, t) {
      return function (n) {
        if (i = n.children) {
          var i,
              r,
              s,
              a = i.length,
              o = e(n) * t || 0;if (o) for (r = 0; r < a; ++r) {
            i[r].r += o;
          }if (s = I(i), o) for (r = 0; r < a; ++r) {
            i[r].r -= o;
          }n.r = s + o;
        }
      };
    }function M(e) {
      return function (t) {
        var n = t.parent;t.r *= e, n && (t.x = n.x + e * t.x, t.y = n.y + e * t.y);
      };
    }function D(e) {
      return e.id;
    }function j(e) {
      return e.parentId;
    }function R(e, t) {
      return e.parent === t.parent ? 1 : 2;
    }function q(e) {
      var t = e.children;return t ? t[0] : e.t;
    }function H(e) {
      var t = e.children;return t ? t[t.length - 1] : e.t;
    }function B(e, t, n) {
      var i = n / (t.i - e.i);t.c -= i, t.s += n, e.c += i, t.z += n, t.m += n;
    }function U(e, t, n) {
      return e.a.parent === t.parent ? e.a : n;
    }function F(e, t) {
      this._ = e, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = t;
    }function V(e, t, n, i, r, s) {
      for (var a, o, c, l, h, f, _, d, p, y, v, m = [], g = t.children, x = 0, b = 0, A = g.length, S = t.value; x < A;) {
        c = r - n, l = s - i;do {
          h = g[b++].value;
        } while (!h && b < A);for (f = _ = h, y = u(l / c, c / l) / (S * e), p = u(_ / (v = h * h * y), v / f); b < A; ++b) {
          if (h += o = g[b].value, o < f && (f = o), o > _ && (_ = o), (d = u(_ / (v = h * h * y), v / f)) > p) {
            h -= o;break;
          }p = d;
        }m.push(a = { value: h, dice: c < l, children: g.slice(x, b) }), a.dice ? J(a, n, i, r, S ? i += l * h / S : s) : se(a, n, i, S ? n += c * h / S : r, s), S -= h, x = b;
      }return m;
    }s.r(n);var G = function G() {
      function e(e) {
        var s,
            a = 0;e.eachAfter(function (e) {
          var n = e.children;n ? (e.x = o(n), e.y = l(n)) : (e.x = s ? a += t(e, s) : 0, e.y = 0, s = e);
        });var c = function (e) {
          for (var t; t = e.children;) {
            e = t[0];
          }return e;
        }(e),
            u = function (e) {
          for (var t; t = e.children;) {
            e = t[t.length - 1];
          }return e;
        }(e),
            h = c.x - t(c, u) / 2,
            f = u.x + t(u, c) / 2;return e.eachAfter(r ? function (t) {
          t.x = (t.x - e.x) * n, t.y = (e.y - t.y) * i;
        } : function (t) {
          t.x = (t.x - h) / (f - h) * n, t.y = (1 - (e.y ? t.y / e.y : 1)) * i;
        });
      }var t = a,
          n = 1,
          i = 1,
          r = !1;return e.separation = function (n) {
        return arguments.length ? (t = n, e) : t;
      }, e.size = function (t) {
        return arguments.length ? (r = !1, n = +t[0], i = +t[1], e) : r ? null : [n, i];
      }, e.nodeSize = function (t) {
        return arguments.length ? (r = !0, n = +t[0], i = +t[1], e) : r ? [n, i] : null;
      }, e;
    };v.prototype = _.prototype = { constructor: v, count: function count() {
        return this.eachAfter(f);
      }, each: function each(e) {
        var t,
            n,
            i,
            r,
            s = this,
            a = [s];do {
          for (t = a.reverse(), a = []; s = t.pop();) {
            if (e(s), n = s.children) for (i = 0, r = n.length; i < r; ++i) {
              a.push(n[i]);
            }
          }
        } while (a.length);return this;
      }, eachAfter: function eachAfter(e) {
        for (var t, n, i, r = this, s = [r], a = []; r = s.pop();) {
          if (a.push(r), t = r.children) for (n = 0, i = t.length; n < i; ++n) {
            s.push(t[n]);
          }
        }for (; r = a.pop();) {
          e(r);
        }return this;
      }, eachBefore: function eachBefore(e) {
        for (var t, n, i = this, r = [i]; i = r.pop();) {
          if (e(i), t = i.children) for (n = t.length - 1; 0 <= n; --n) {
            r.push(t[n]);
          }
        }return this;
      }, sum: function sum(e) {
        return this.eachAfter(function (t) {
          for (var n = +e(t.data) || 0, i = t.children, r = i && i.length; 0 <= --r;) {
            n += i[r].value;
          }t.value = n;
        });
      }, sort: function sort(e) {
        return this.eachBefore(function (t) {
          t.children && t.children.sort(e);
        });
      }, path: function path(e) {
        for (var t = this, n = function (e, t) {
          if (e === t) return e;var n = e.ancestors(),
              i = t.ancestors(),
              r = null;for (e = n.pop(), t = i.pop(); e === t;) {
            r = e, e = n.pop(), t = i.pop();
          }return r;
        }(t, e), i = [t]; t !== n;) {
          t = t.parent, i.push(t);
        }for (var r = i.length; e !== n;) {
          i.splice(r, 0, e), e = e.parent;
        }return i;
      }, ancestors: function ancestors() {
        for (var e = this, t = [e]; e = e.parent;) {
          t.push(e);
        }return t;
      }, descendants: function descendants() {
        var e = [];return this.each(function (t) {
          e.push(t);
        }), e;
      }, leaves: function leaves() {
        var e = [];return this.eachBefore(function (t) {
          t.children || e.push(t);
        }), e;
      }, links: function links() {
        var e = this,
            t = [];return e.each(function (n) {
          n !== e && t.push({ source: n.parent, target: n });
        }), t;
      }, copy: function copy() {
        return _(this).eachBefore(p);
      } };var $ = Array.prototype.slice,
        W = function W(e) {
      for (var t, n, i = 0, r = (e = function (e) {
        for (var t, n, i = e.length; i;) {
          n = 0 | Math.random() * i--, t = e[i], e[i] = e[n], e[n] = t;
        }return e;
      }($.call(e))).length, s = []; i < r;) {
        t = e[i], n && x(n, t) ? ++i : (n = A(s = m(s, t)), i = 0);
      }return n;
    },
        X = function X(e) {
      return I(e), e;
    },
        Y = function Y(e) {
      return function () {
        return e;
      };
    },
        K = function K() {
      function e(e) {
        return e.x = n / 2, e.y = i / 2, t ? e.eachBefore(z(t)).eachAfter(L(s, .5)).eachBefore(M(1)) : e.eachBefore(z(P)).eachAfter(L(O, 1)).eachAfter(L(s, e.r / r(n, i))).eachBefore(M(r(n, i) / (2 * e.r))), e;
      }var t = null,
          n = 1,
          i = 1,
          s = O;return e.radius = function (n) {
        return arguments.length ? (t = function (e) {
          return null == e ? null : N(e);
        }(n), e) : t;
      }, e.size = function (t) {
        return arguments.length ? (n = +t[0], i = +t[1], e) : [n, i];
      }, e.padding = function (t) {
        return arguments.length ? (s = "function" == typeof t ? t : Y(+t), e) : s;
      }, e;
    },
        Z = function Z(e) {
      e.x0 = i(e.x0), e.y0 = i(e.y0), e.x1 = i(e.x1), e.y1 = i(e.y1);
    },
        J = function J(e, t, n, i, r) {
      for (var s, a = e.children, o = -1, c = a.length, u = e.value && (i - t) / e.value; ++o < c;) {
        (s = a[o]).y0 = n, s.y1 = r, s.x0 = t, s.x1 = t += s.value * u;
      }
    },
        Q = function Q() {
      function e(e) {
        var s = e.height + 1;return e.x0 = e.y0 = i, e.x1 = t, e.y1 = n / s, e.eachBefore(function (e, t) {
          return function (n) {
            n.children && J(n, n.x0, e * (n.depth + 1) / t, n.x1, e * (n.depth + 2) / t);var r = n.x0,
                s = n.y0,
                a = n.x1 - i,
                o = n.y1 - i;a < r && (r = a = (r + a) / 2), o < s && (s = o = (s + o) / 2), n.x0 = r, n.y0 = s, n.x1 = a, n.y1 = o;
          };
        }(n, s)), r && e.eachBefore(Z), e;
      }var t = 1,
          n = 1,
          i = 0,
          r = !1;return e.round = function (t) {
        return arguments.length ? (r = !!t, e) : r;
      }, e.size = function (i) {
        return arguments.length ? (t = +i[0], n = +i[1], e) : [t, n];
      }, e.padding = function (t) {
        return arguments.length ? (i = +t, e) : i;
      }, e;
    },
        ee = "$",
        te = { depth: -1 },
        ne = {},
        ie = function ie() {
      function e(e) {
        var i,
            r,
            s,
            a,
            o,
            c,
            u,
            l = e.length,
            h = Array(l),
            f = {};for (r = 0; r < l; ++r) {
          i = e[r], o = h[r] = new v(i), null != (c = t(i, r, e)) && (c += "") && (f[u = ee + (o.id = c)] = u in f ? ne : o);
        }for (r = 0; r < l; ++r) {
          if (o = h[r], null != (c = n(e[r], r, e)) && (c += "")) {
            if (!(a = f[ee + c])) throw new Error("missing: " + c);if (a === ne) throw new Error("ambiguous: " + c);a.children ? a.children.push(o) : a.children = [o], o.parent = a;
          } else {
            if (s) throw new Error("multiple roots");s = o;
          }
        }if (!s) throw new Error("no root");if (s.parent = te, s.eachBefore(function (e) {
          e.depth = e.parent.depth + 1, --l;
        }).eachBefore(y), s.parent = null, 0 < l) throw new Error("cycle");return s;
      }var t = D,
          n = j;return e.id = function (n) {
        return arguments.length ? (t = N(n), e) : t;
      }, e.parentId = function (t) {
        return arguments.length ? (n = N(t), e) : n;
      }, e;
    };F.prototype = Object.create(v.prototype);var re = function re() {
      function e(e) {
        var c = function (e) {
          for (var t, n, i, r, s, a = new F(e, 0), o = [a]; t = o.pop();) {
            if (i = t._.children) for (t.children = Array(s = i.length), r = s - 1; 0 <= r; --r) {
              o.push(n = t.children[r] = new F(i[r], r)), n.parent = t;
            }
          }return (a.parent = new F(null, 0)).children = [a], a;
        }(e);if (c.eachAfter(t), c.parent.m = -c.z, c.eachBefore(n), o) e.eachBefore(i);else {
          var u = e,
              l = e,
              h = e;e.eachBefore(function (e) {
            e.x < u.x && (u = e), e.x > l.x && (l = e), e.depth > h.depth && (h = e);
          });var f = u === l ? 1 : r(u, l) / 2,
              _ = f - u.x,
              d = s / (l.x + f + _),
              p = a / (h.depth || 1);e.eachBefore(function (e) {
            e.x = (e.x + _) * d, e.y = e.depth * p;
          });
        }return e;
      }function t(e) {
        var t = e.children,
            n = e.parent.children,
            i = e.i ? n[e.i - 1] : null;if (t) {
          !function (e) {
            for (var t, n = 0, i = 0, r = e.children, s = r.length; 0 <= --s;) {
              (t = r[s]).z += n, t.m += n, n += t.s + (i += t.c);
            }
          }(e);var s = (t[0].z + t[t.length - 1].z) / 2;i ? (e.z = i.z + r(e._, i._), e.m = e.z - s) : e.z = s;
        } else i && (e.z = i.z + r(e._, i._));e.parent.A = function (e, t, n) {
          if (t) {
            for (var i, s = e, a = e, o = t, c = s.parent.children[0], u = s.m, l = a.m, h = o.m, f = c.m; o = H(o), s = q(s), o && s;) {
              c = q(c), (a = H(a)).a = e, 0 < (i = o.z + h - s.z - u + r(o._, s._)) && (B(U(o, e, n), e, i), u += i, l += i), h += o.m, u += s.m, f += c.m, l += a.m;
            }o && !H(a) && (a.t = o, a.m += h - l), s && !q(c) && (c.t = s, c.m += u - f, n = e);
          }return n;
        }(e, i, e.parent.A || n[0]);
      }function n(e) {
        e._.x = e.z + e.parent.m, e.m += e.parent.m;
      }function i(e) {
        e.x *= s, e.y = e.depth * a;
      }var r = R,
          s = 1,
          a = 1,
          o = null;return e.separation = function (t) {
        return arguments.length ? (r = t, e) : r;
      }, e.size = function (t) {
        return arguments.length ? (o = !1, s = +t[0], a = +t[1], e) : o ? null : [s, a];
      }, e.nodeSize = function (t) {
        return arguments.length ? (o = !0, s = +t[0], a = +t[1], e) : o ? [s, a] : null;
      }, e;
    },
        se = function se(e, t, n, i, r) {
      for (var s, a = e.children, o = -1, c = a.length, u = e.value && (r - n) / e.value; ++o < c;) {
        (s = a[o]).x0 = t, s.x1 = i, s.y0 = n, s.y1 = n += s.value * u;
      }
    },
        ae = 1.618033988749895,
        oe = function e(t) {
      function n(e, n, i, r, s) {
        V(t, e, n, i, r, s);
      }return n.ratio = function (t) {
        return e(1 < (t = +t) ? t : 1);
      }, n;
    }(ae),
        ce = function ce() {
      function e(e) {
        return e.x0 = e.y0 = 0, e.x1 = r, e.y1 = s, e.eachBefore(t), a = [0], i && e.eachBefore(Z), e;
      }function t(e) {
        var t = a[e.depth],
            i = e.x0 + t,
            r = e.y0 + t,
            s = e.x1 - t,
            f = e.y1 - t;s < i && (i = s = (i + s) / 2), f < r && (r = f = (r + f) / 2), e.x0 = i, e.y0 = r, e.x1 = s, e.y1 = f, e.children && (t = a[e.depth + 1] = o(e) / 2, i += h(e) - t, r += c(e) - t, s -= u(e) - t, f -= l(e) - t, s < i && (i = s = (i + s) / 2), f < r && (r = f = (r + f) / 2), n(e, i, r, s, f));
      }var n = oe,
          i = !1,
          r = 1,
          s = 1,
          a = [0],
          o = O,
          c = O,
          u = O,
          l = O,
          h = O;return e.round = function (t) {
        return arguments.length ? (i = !!t, e) : i;
      }, e.size = function (t) {
        return arguments.length ? (r = +t[0], s = +t[1], e) : [r, s];
      }, e.tile = function (t) {
        return arguments.length ? (n = N(t), e) : n;
      }, e.padding = function (t) {
        return arguments.length ? e.paddingInner(t).paddingOuter(t) : e.paddingInner();
      }, e.paddingInner = function (t) {
        return arguments.length ? (o = "function" == typeof t ? t : Y(+t), e) : o;
      }, e.paddingOuter = function (t) {
        return arguments.length ? e.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : e.paddingTop();
      }, e.paddingTop = function (t) {
        return arguments.length ? (c = "function" == typeof t ? t : Y(+t), e) : c;
      }, e.paddingRight = function (t) {
        return arguments.length ? (u = "function" == typeof t ? t : Y(+t), e) : u;
      }, e.paddingBottom = function (t) {
        return arguments.length ? (l = "function" == typeof t ? t : Y(+t), e) : l;
      }, e.paddingLeft = function (t) {
        return arguments.length ? (h = "function" == typeof t ? t : Y(+t), e) : h;
      }, e;
    },
        ue = function ue(e, t, n, i, r) {
      var s,
          a,
          o = e.children,
          c = o.length,
          u = Array(c + 1);for (u[0] = a = s = 0; s < c; ++s) {
        u[s + 1] = a += o[s].value;
      }!function e(t, n, i, r, s, a, c) {
        if (t >= n - 1) {
          var l = o[t];return l.x0 = r, l.y0 = s, l.x1 = a, void (l.y1 = c);
        }for (var h = u[t], f = i / 2 + h, _ = t + 1, d = n - 1; _ < d;) {
          var p = _ + d >>> 1;u[p] < f ? _ = p + 1 : d = p;
        }f - u[_ - 1] < u[_] - f && t + 1 < _ && --_;var y = u[_] - h,
            v = i - y;if (a - r > c - s) {
          var m = (r * v + a * y) / i;e(t, _, y, r, s, m, c), e(_, n, v, m, s, a, c);
        } else {
          var g = (s * v + c * y) / i;e(t, _, y, r, s, a, g), e(_, n, v, r, g, a, c);
        }
      }(0, c, e.value, t, n, i, r);
    },
        le = function le(e, t, n, i, r) {
      (1 & e.depth ? se : J)(e, t, n, i, r);
    },
        he = function e(t) {
      function n(e, n, i, r, s) {
        if ((a = e._squarify) && a.ratio === t) for (var a, o, c, u, l, h = -1, f = a.length, _ = e.value; ++h < f;) {
          for (c = (o = a[h]).children, u = o.value = 0, l = c.length; u < l; ++u) {
            o.value += c[u].value;
          }o.dice ? J(o, n, i, r, i += (s - i) * o.value / _) : se(o, n, i, n += (r - n) * o.value / _, s), _ -= o.value;
        } else e._squarify = a = V(t, e, n, i, r, s), a.ratio = t;
      }return n.ratio = function (t) {
        return e(1 < (t = +t) ? t : 1);
      }, n;
    }(ae);s.d(n, "cluster", function () {
      return G;
    }), s.d(n, "hierarchy", function () {
      return _;
    }), s.d(n, "pack", function () {
      return K;
    }), s.d(n, "packSiblings", function () {
      return X;
    }), s.d(n, "packEnclose", function () {
      return W;
    }), s.d(n, "partition", function () {
      return Q;
    }), s.d(n, "stratify", function () {
      return ie;
    }), s.d(n, "tree", function () {
      return re;
    }), s.d(n, "treemap", function () {
      return ce;
    }), s.d(n, "treemapBinary", function () {
      return ue;
    }), s.d(n, "treemapDice", function () {
      return J;
    }), s.d(n, "treemapSlice", function () {
      return se;
    }), s.d(n, "treemapSliceDice", function () {
      return le;
    }), s.d(n, "treemapSquarify", function () {
      return oe;
    }), s.d(n, "treemapResquarify", function () {
      return he;
    });
  }, function (e, t, n) {
    "use strict";

    function i() {}function s() {
      return [];
    }function a(e, t) {
      this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
    }function o(e, t, n, i, r, s) {
      for (var o, c = 0, u = t.length, l = s.length; c < l; ++c) {
        (o = t[c]) ? (o.__data__ = s[c], i[c] = o) : n[c] = new a(e, s[c]);
      }for (; c < u; ++c) {
        (o = t[c]) && (r[c] = o);
      }
    }function c(e, t, n, i, r, s, o) {
      var c,
          u,
          l,
          h = {},
          f = t.length,
          _ = s.length,
          d = Array(f);for (c = 0; c < f; ++c) {
        (u = t[c]) && (d[c] = l = G + o.call(u, u.__data__, c, t), l in h ? r[c] = u : h[l] = u);
      }for (c = 0; c < _; ++c) {
        (u = h[l = G + o.call(e, s[c], c, s)]) ? (i[c] = u, u.__data__ = s[c], h[l] = null) : n[c] = new a(e, s[c]);
      }for (c = 0; c < f; ++c) {
        (u = t[c]) && h[d[c]] === u && (r[c] = u);
      }
    }function u(e, t) {
      return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
    }function l(e, t) {
      return e.style.getPropertyValue(t) || $(e).getComputedStyle(e, null).getPropertyValue(t);
    }function h(e) {
      return e.trim().split(/^|\s+/);
    }function f(e) {
      return e.classList || new _(e);
    }function _(e) {
      this._node = e, this._names = h(e.getAttribute("class") || "");
    }function d(e, t) {
      for (var n = f(e), i = -1, r = t.length; ++i < r;) {
        n.add(t[i]);
      }
    }function p(e, t) {
      for (var n = f(e), i = -1, r = t.length; ++i < r;) {
        n.remove(t[i]);
      }
    }function y() {
      this.textContent = "";
    }function v() {
      this.innerHTML = "";
    }function m() {
      this.nextSibling && this.parentNode.appendChild(this);
    }function g() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }function x() {
      return null;
    }function b() {
      var e = this.parentNode;e && e.removeChild(this);
    }function A() {
      return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
    }function S() {
      return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
    }function w(e, t, n) {
      return e = E(e, t, n), function (t) {
        var n = t.relatedTarget;n && (n === this || 8 & n.compareDocumentPosition(this)) || e.call(this, t);
      };
    }function E(e, t, n) {
      return function (i) {
        var r = X;X = i;try {
          e.call(this, this.__data__, t, n);
        } finally {
          X = r;
        }
      };
    }function C(e) {
      return function () {
        var t = this.__on;if (t) {
          for (var n, i = 0, r = -1, s = t.length; i < s; ++i) {
            n = t[i], e.type && n.type !== e.type || n.name !== e.name ? t[++r] = n : this.removeEventListener(n.type, n.listener, n.capture);
          }++r ? t.length = r : delete this.__on;
        }
      };
    }function k(e, t, n) {
      var i = W.hasOwnProperty(e.type) ? w : E;return function (r, s, a) {
        var o,
            c = this.__on,
            u = i(t, s, a);if (c) for (var l = 0, h = c.length; l < h; ++l) {
          if ((o = c[l]).type === e.type && o.name === e.name) return this.removeEventListener(o.type, o.listener, o.capture), this.addEventListener(o.type, o.listener = u, o.capture = n), void (o.value = t);
        }this.addEventListener(e.type, u, n), o = { type: e.type, name: e.name, value: t, listener: u, capture: n }, c ? c.push(o) : this.__on = [o];
      };
    }function T(e, t, n, i) {
      var r = X;e.sourceEvent = X, X = e;try {
        return t.apply(n, i);
      } finally {
        X = r;
      }
    }function I(e, t, n) {
      var i = $(e),
          r = i.CustomEvent;"function" == typeof r ? r = new r(t, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(t, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(t, !1, !1)), e.dispatchEvent(r);
    }function N(e, t) {
      this._groups = e, this._parents = t;
    }function O() {
      return new N([[document.documentElement]], Y);
    }function P() {
      return new z();
    }function z() {
      this._ = "@" + (++J).toString(36);
    }n.r(t);var L = "http://www.w3.org/1999/xhtml",
        M = { svg: "http://www.w3.org/2000/svg", xhtml: L, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
        D = function D(e) {
      var t = e += "",
          n = t.indexOf(":");return 0 <= n && "xmlns" !== (t = e.slice(0, n)) && (e = e.slice(n + 1)), M.hasOwnProperty(t) ? { space: M[t], local: e } : e;
    },
        j = function j(e) {
      var t = D(e);return (t.local ? function (e) {
        return function () {
          return this.ownerDocument.createElementNS(e.space, e.local);
        };
      } : function (e) {
        return function () {
          var t = this.ownerDocument,
              n = this.namespaceURI;return n === L && t.documentElement.namespaceURI === L ? t.createElement(e) : t.createElementNS(n, e);
        };
      })(t);
    },
        R = function R(e) {
      return null == e ? i : function () {
        return this.querySelector(e);
      };
    },
        q = function q(e) {
      return null == e ? s : function () {
        return this.querySelectorAll(e);
      };
    },
        H = function H(e) {
      return function () {
        return this.matches(e);
      };
    };if ("undefined" != typeof document) {
      var B = document.documentElement;if (!B.matches) {
        var U = B.webkitMatchesSelector || B.msMatchesSelector || B.mozMatchesSelector || B.oMatchesSelector;H = function H(e) {
          return function () {
            return U.call(this, e);
          };
        };
      }
    }var F = H,
        V = function V(e) {
      return Array(e.length);
    };a.prototype = { constructor: a, appendChild: function appendChild(e) {
        return this._parent.insertBefore(e, this._next);
      }, insertBefore: function insertBefore(e, t) {
        return this._parent.insertBefore(e, t);
      }, querySelector: function querySelector(e) {
        return this._parent.querySelector(e);
      }, querySelectorAll: function querySelectorAll(e) {
        return this._parent.querySelectorAll(e);
      } };var G = "$",
        $ = function $(e) {
      return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
    };_.prototype = { add: function add(e) {
        0 > this._names.indexOf(e) && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
      }, remove: function remove(e) {
        var t = this._names.indexOf(e);0 <= t && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
      }, contains: function contains(e) {
        return 0 <= this._names.indexOf(e);
      } };var W = {},
        X = null;"undefined" != typeof document && ("onmouseenter" in document.documentElement || (W = { mouseenter: "mouseover", mouseleave: "mouseout" }));var Y = [null];N.prototype = O.prototype = { constructor: N, select: function select(e) {
        "function" != typeof e && (e = R(e));for (var t = this._groups, n = t.length, i = Array(n), r = 0; r < n; ++r) {
          for (var s, a, o = t[r], c = o.length, u = i[r] = Array(c), l = 0; l < c; ++l) {
            (s = o[l]) && (a = e.call(s, s.__data__, l, o)) && ("__data__" in s && (a.__data__ = s.__data__), u[l] = a);
          }
        }return new N(i, this._parents);
      }, selectAll: function selectAll(e) {
        "function" != typeof e && (e = q(e));for (var t = this._groups, n = t.length, i = [], r = [], s = 0; s < n; ++s) {
          for (var a, o = t[s], c = o.length, u = 0; u < c; ++u) {
            (a = o[u]) && (i.push(e.call(a, a.__data__, u, o)), r.push(a));
          }
        }return new N(i, r);
      }, filter: function filter(e) {
        "function" != typeof e && (e = F(e));for (var t = this._groups, n = t.length, i = Array(n), r = 0; r < n; ++r) {
          for (var s, a = t[r], o = a.length, c = i[r] = [], u = 0; u < o; ++u) {
            (s = a[u]) && e.call(s, s.__data__, u, a) && c.push(s);
          }
        }return new N(i, this._parents);
      }, data: function data(e, t) {
        if (!e) return p = Array(this.size()), h = -1, this.each(function (e) {
          p[++h] = e;
        }), p;var n = t ? c : o,
            i = this._parents,
            r = this._groups;"function" != typeof e && (e = function (e) {
          return function () {
            return e;
          };
        }(e));for (var s = r.length, a = Array(s), u = Array(s), l = Array(s), h = 0; h < s; ++h) {
          var f = i[h],
              _ = r[h],
              d = _.length,
              p = e.call(f, f && f.__data__, h, i),
              y = p.length,
              v = u[h] = Array(y),
              m = a[h] = Array(y);n(f, _, v, m, l[h] = Array(d), p, t);for (var g, x, b = 0, A = 0; b < y; ++b) {
            if (g = v[b]) {
              for (b >= A && (A = b + 1); !(x = m[A]) && ++A < y;) {}g._next = x || null;
            }
          }
        }return (a = new N(a, i))._enter = u, a._exit = l, a;
      }, enter: function enter() {
        return new N(this._enter || this._groups.map(V), this._parents);
      }, exit: function exit() {
        return new N(this._exit || this._groups.map(V), this._parents);
      }, merge: function merge(e) {
        for (var t = this._groups, n = e._groups, i = t.length, s = n.length, a = r(i, s), o = Array(i), c = 0; c < a; ++c) {
          for (var u, l = t[c], h = n[c], f = l.length, _ = o[c] = Array(f), d = 0; d < f; ++d) {
            (u = l[d] || h[d]) && (_[d] = u);
          }
        }for (; c < i; ++c) {
          o[c] = t[c];
        }return new N(o, this._parents);
      }, order: function order() {
        for (var e = this._groups, t = -1, n = e.length; ++t < n;) {
          for (var i, r = e[t], s = r.length - 1, a = r[s]; 0 <= --s;) {
            (i = r[s]) && (a && a !== i.nextSibling && a.parentNode.insertBefore(i, a), a = i);
          }
        }return this;
      }, sort: function sort(e) {
        function t(t, n) {
          return t && n ? e(t.__data__, n.__data__) : !t - !n;
        }e || (e = u);for (var n = this._groups, i = n.length, r = Array(i), s = 0; s < i; ++s) {
          for (var a, o = n[s], c = o.length, l = r[s] = Array(c), h = 0; h < c; ++h) {
            (a = o[h]) && (l[h] = a);
          }l.sort(t);
        }return new N(r, this._parents).order();
      }, call: function call() {
        var e = arguments[0];return arguments[0] = this, e.apply(null, arguments), this;
      }, nodes: function nodes() {
        var e = Array(this.size()),
            t = -1;return this.each(function () {
          e[++t] = this;
        }), e;
      }, node: function node() {
        for (var e = this._groups, t = 0, n = e.length; t < n; ++t) {
          for (var i, r = e[t], s = 0, a = r.length; s < a; ++s) {
            if (i = r[s]) return i;
          }
        }return null;
      }, size: function size() {
        var e = 0;return this.each(function () {
          ++e;
        }), e;
      }, empty: function empty() {
        return !this.node();
      }, each: function each(e) {
        for (var t = this._groups, n = 0, i = t.length; n < i; ++n) {
          for (var r, s = t[n], a = 0, o = s.length; a < o; ++a) {
            (r = s[a]) && e.call(r, r.__data__, a, s);
          }
        }return this;
      }, attr: function attr(e, t) {
        var n = D(e);if (2 > arguments.length) {
          var i = this.node();return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
        }return this.each((null == t ? n.local ? function (e) {
          return function () {
            this.removeAttributeNS(e.space, e.local);
          };
        } : function (e) {
          return function () {
            this.removeAttribute(e);
          };
        } : "function" == typeof t ? n.local ? function (e, t) {
          return function () {
            var n = t.apply(this, arguments);null == n ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
          };
        } : function (e, t) {
          return function () {
            var n = t.apply(this, arguments);null == n ? this.removeAttribute(e) : this.setAttribute(e, n);
          };
        } : n.local ? function (e, t) {
          return function () {
            this.setAttributeNS(e.space, e.local, t);
          };
        } : function (e, t) {
          return function () {
            this.setAttribute(e, t);
          };
        })(n, t));
      }, style: function style(e, t, n) {
        return 1 < arguments.length ? this.each((null == t ? function (e) {
          return function () {
            this.style.removeProperty(e);
          };
        } : "function" == typeof t ? function (e, t, n) {
          return function () {
            var i = t.apply(this, arguments);null == i ? this.style.removeProperty(e) : this.style.setProperty(e, i, n);
          };
        } : function (e, t, n) {
          return function () {
            this.style.setProperty(e, t, n);
          };
        })(e, t, null == n ? "" : n)) : l(this.node(), e);
      }, property: function property(e, t) {
        return 1 < arguments.length ? this.each((null == t ? function (e) {
          return function () {
            delete this[e];
          };
        } : "function" == typeof t ? function (e, t) {
          return function () {
            var n = t.apply(this, arguments);null == n ? delete this[e] : this[e] = n;
          };
        } : function (e, t) {
          return function () {
            this[e] = t;
          };
        })(e, t)) : this.node()[e];
      }, classed: function classed(e, t) {
        var n = h(e + "");if (2 > arguments.length) {
          for (var i = f(this.node()), r = -1, s = n.length; ++r < s;) {
            if (!i.contains(n[r])) return !1;
          }return !0;
        }return this.each(("function" == typeof t ? function (e, t) {
          return function () {
            (t.apply(this, arguments) ? d : p)(this, e);
          };
        } : t ? function (e) {
          return function () {
            d(this, e);
          };
        } : function (e) {
          return function () {
            p(this, e);
          };
        })(n, t));
      }, text: function text(e) {
        return arguments.length ? this.each(null == e ? y : ("function" == typeof e ? function (e) {
          return function () {
            var t = e.apply(this, arguments);this.textContent = null == t ? "" : t;
          };
        } : function (e) {
          return function () {
            this.textContent = e;
          };
        })(e)) : this.node().textContent;
      }, html: function html(e) {
        return arguments.length ? this.each(null == e ? v : ("function" == typeof e ? function (e) {
          return function () {
            var t = e.apply(this, arguments);this.innerHTML = null == t ? "" : t;
          };
        } : function (e) {
          return function () {
            this.innerHTML = e;
          };
        })(e)) : this.node().innerHTML;
      }, raise: function raise() {
        return this.each(m);
      }, lower: function lower() {
        return this.each(g);
      }, append: function append(e) {
        var t = "function" == typeof e ? e : j(e);return this.select(function () {
          return this.appendChild(t.apply(this, arguments));
        });
      }, insert: function insert(e, t) {
        var n = "function" == typeof e ? e : j(e),
            i = null == t ? x : "function" == typeof t ? t : R(t);return this.select(function () {
          return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
        });
      }, remove: function remove() {
        return this.each(b);
      }, clone: function clone(e) {
        return this.select(e ? S : A);
      }, datum: function datum(e) {
        return arguments.length ? this.property("__data__", e) : this.node().__data__;
      }, on: function on(e, t, n) {
        var i,
            r,
            s = function (e) {
          return e.trim().split(/^|\s+/).map(function (e) {
            var t = "",
                n = e.indexOf(".");return 0 <= n && (t = e.slice(n + 1), e = e.slice(0, n)), { type: e, name: t };
          });
        }(e + ""),
            a = s.length;if (!(2 > arguments.length)) {
          for (o = t ? k : C, null == n && (n = !1), i = 0; i < a; ++i) {
            this.each(o(s[i], t, n));
          }return this;
        }var o = this.node().__on;if (o) for (var c, u = 0, l = o.length; u < l; ++u) {
          for (i = 0, c = o[u]; i < a; ++i) {
            if ((r = s[i]).type === c.type && r.name === c.name) return c.value;
          }
        }
      }, dispatch: function dispatch(e, t) {
        return this.each(("function" == typeof t ? function (e, t) {
          return function () {
            return I(this, e, t.apply(this, arguments));
          };
        } : function (e, t) {
          return function () {
            return I(this, e, t);
          };
        })(e, t));
      } };var K = function K(e) {
      return "string" == typeof e ? new N([[document.querySelector(e)]], [document.documentElement]) : new N([[e]], Y);
    },
        Z = function Z(e) {
      return K(j(e).call(document.documentElement));
    },
        J = 0;z.prototype = P.prototype = { constructor: z, get: function get(e) {
        for (var t = this._; !(t in e);) {
          if (!(e = e.parentNode)) return;
        }return e[t];
      }, set: function set(e, t) {
        return e[this._] = t;
      }, remove: function remove(e) {
        return this._ in e && delete e[this._];
      }, toString: function toString() {
        return this._;
      } };var Q = function Q() {
      for (var e, t = X; e = t.sourceEvent;) {
        t = e;
      }return t;
    },
        ee = function ee(e, t) {
      var n = e.ownerSVGElement || e;if (n.createSVGPoint) {
        var i = n.createSVGPoint();return i.x = t.clientX, i.y = t.clientY, [(i = i.matrixTransform(e.getScreenCTM().inverse())).x, i.y];
      }var r = e.getBoundingClientRect();return [t.clientX - r.left - e.clientLeft, t.clientY - r.top - e.clientTop];
    },
        te = function te(e) {
      var t = Q();return t.changedTouches && (t = t.changedTouches[0]), ee(e, t);
    },
        ne = function ne(e) {
      return "string" == typeof e ? new N([document.querySelectorAll(e)], [document.documentElement]) : new N([null == e ? [] : e], Y);
    },
        ie = function ie(e, t, n) {
      3 > arguments.length && (n = t, t = Q().changedTouches);for (var i, r = 0, s = t ? t.length : 0; r < s; ++r) {
        if ((i = t[r]).identifier === n) return ee(e, i);
      }return null;
    },
        re = function re(e, t) {
      null == t && (t = Q().touches);for (var n = 0, i = t ? t.length : 0, r = Array(i); n < i; ++n) {
        r[n] = ee(e, t[n]);
      }return r;
    };n.d(t, "create", function () {
      return Z;
    }), n.d(t, "creator", function () {
      return j;
    }), n.d(t, "local", function () {
      return P;
    }), n.d(t, "matcher", function () {
      return F;
    }), n.d(t, "mouse", function () {
      return te;
    }), n.d(t, "namespace", function () {
      return D;
    }), n.d(t, "namespaces", function () {
      return M;
    }), n.d(t, "clientPoint", function () {
      return ee;
    }), n.d(t, "select", function () {
      return K;
    }), n.d(t, "selectAll", function () {
      return ne;
    }), n.d(t, "selection", function () {
      return O;
    }), n.d(t, "selector", function () {
      return R;
    }), n.d(t, "selectorAll", function () {
      return q;
    }), n.d(t, "style", function () {
      return l;
    }), n.d(t, "touch", function () {
      return ie;
    }), n.d(t, "touches", function () {
      return re;
    }), n.d(t, "window", function () {
      return $;
    }), n.d(t, "event", function () {
      return X;
    }), n.d(t, "customEvent", function () {
      return T;
    });
  }, function (i, l, h) {
    "use strict";

    function f() {
      this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
    }function _() {
      return new f();
    }function d(e) {
      return 1 <= e ? ke : -1 >= e ? -ke : Math.asin(e);
    }function p(e) {
      return e.innerRadius;
    }function y(e) {
      return e.outerRadius;
    }function v(e) {
      return e.startAngle;
    }function m(e) {
      return e.endAngle;
    }function g(e) {
      return e && e.padAngle;
    }function x(e, t, n, i, r, s, a) {
      var o = e - n,
          c = t - i,
          u = (a ? s : -s) / we(o * o + c * c),
          l = u * c,
          h = -u * o,
          f = e + l,
          _ = t + h,
          d = n + l,
          p = i + h,
          y = (f + d) / 2,
          v = (_ + p) / 2,
          m = d - f,
          g = p - _,
          x = m * m + g * g,
          b = r - s,
          A = f * p - d * _,
          S = (0 > g ? -1 : 1) * we(be(0, b * b * x - A * A)),
          w = (A * g - m * S) / x,
          E = (-A * m - g * S) / x,
          C = (A * g + m * S) / x,
          k = (-A * m + g * S) / x,
          T = w - y,
          I = E - v,
          N = C - y,
          O = k - v;return T * T + I * I > N * N + O * O && (w = C, E = k), { cx: w, cy: E, x01: -l, y01: -h, x11: w * (r / b - 1), y11: E * (r / b - 1) };
    }function b(e) {
      this._context = e;
    }function A(e) {
      return e[0];
    }function S(e) {
      return e[1];
    }function w(e) {
      this._curve = e;
    }function E(e) {
      function t(t) {
        return new w(e(t));
      }return t._curve = e, t;
    }function C(e) {
      var t = e.curve;return e.angle = e.x, delete e.x, e.radius = e.y, delete e.y, e.curve = function (e) {
        return arguments.length ? t(E(e)) : t()._curve;
      }, e;
    }function k(e) {
      return e.source;
    }function T(e) {
      return e.target;
    }function I(e) {
      function t() {
        var t,
            o = He.call(arguments),
            c = n.apply(this, o),
            u = i.apply(this, o);if (a || (a = t = ye()), e(a, +r.apply(this, (o[0] = c, o)), +s.apply(this, o), +r.apply(this, (o[0] = u, o)), +s.apply(this, o)), t) return a = null, t + "" || null;
      }var n = k,
          i = T,
          r = A,
          s = S,
          a = null;return t.source = function (e) {
        return arguments.length ? (n = e, t) : n;
      }, t.target = function (e) {
        return arguments.length ? (i = e, t) : i;
      }, t.x = function (e) {
        return arguments.length ? (r = "function" == typeof e ? e : ve(+e), t) : r;
      }, t.y = function (e) {
        return arguments.length ? (s = "function" == typeof e ? e : ve(+e), t) : s;
      }, t.context = function (e) {
        return arguments.length ? (a = null == e ? null : e, t) : a;
      }, t;
    }function N(e, t, n, i, r) {
      e.moveTo(t, n), e.bezierCurveTo(t = (t + i) / 2, n, t, r, i, r);
    }function O(e, t, n, i, r) {
      e.moveTo(t, n), e.bezierCurveTo(t, n = (n + r) / 2, i, n, i, r);
    }function P(e, t, n, i, r) {
      var s = qe(t, n),
          a = qe(t, n = (n + r) / 2),
          o = qe(i, n),
          c = qe(i, r);e.moveTo(s[0], s[1]), e.bezierCurveTo(a[0], a[1], o[0], o[1], c[0], c[1]);
    }function z() {
      return I(N);
    }function L() {
      return I(O);
    }function M() {
      var e = I(P);return e.angle = e.x, delete e.x, e.radius = e.y, delete e.y, e;
    }function D(e, t, n) {
      e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + n) / 6);
    }function j(e) {
      this._context = e;
    }function R(e) {
      this._context = e;
    }function q(e) {
      this._context = e;
    }function H(e, t) {
      this._basis = new j(e), this._beta = t;
    }function B(e, t, n) {
      e._context.bezierCurveTo(e._x1 + e._k * (e._x2 - e._x0), e._y1 + e._k * (e._y2 - e._y0), e._x2 + e._k * (e._x1 - t), e._y2 + e._k * (e._y1 - n), e._x2, e._y2);
    }function U(e, t) {
      this._context = e, this._k = (1 - t) / 6;
    }function F(e, t) {
      this._context = e, this._k = (1 - t) / 6;
    }function V(e, t) {
      this._context = e, this._k = (1 - t) / 6;
    }function G(e, t, n) {
      var i = e._x1,
          r = e._y1,
          s = e._x2,
          a = e._y2;if (e._l01_a > Ee) {
        var o = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a,
            c = 3 * e._l01_a * (e._l01_a + e._l12_a);i = (i * o - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / c, r = (r * o - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / c;
      }if (e._l23_a > Ee) {
        var u = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a,
            l = 3 * e._l23_a * (e._l23_a + e._l12_a);s = (s * u + e._x1 * e._l23_2a - t * e._l12_2a) / l, a = (a * u + e._y1 * e._l23_2a - n * e._l12_2a) / l;
      }e._context.bezierCurveTo(i, r, s, a, e._x2, e._y2);
    }function $(e, t) {
      this._context = e, this._alpha = t;
    }function W(e, t) {
      this._context = e, this._alpha = t;
    }function X(e, t) {
      this._context = e, this._alpha = t;
    }function Y(e) {
      this._context = e;
    }function K(e) {
      return 0 > e ? -1 : 1;
    }function Z(t, n, i) {
      var s = t._x1 - t._x0,
          a = n - t._x1,
          o = (t._y1 - t._y0) / (s || 0 > a && -0),
          c = (i - t._y1) / (a || 0 > s && -0);return (K(o) + K(c)) * r(e(o), e(c), .5 * e((o * a + c * s) / (s + a))) || 0;
    }function J(e, t) {
      var n = e._x1 - e._x0;return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
    }function Q(e, t, n) {
      var i = e._x0,
          r = e._y0,
          s = e._x1,
          a = e._y1,
          o = (s - i) / 3;e._context.bezierCurveTo(i + o, r + o * t, s - o, a - o * n, s, a);
    }function ee(e) {
      this._context = e;
    }function te(e) {
      this._context = new ne(e);
    }function ne(e) {
      this._context = e;
    }function ie(e) {
      return new ee(e);
    }function re(e) {
      return new te(e);
    }function se(e) {
      this._context = e;
    }function ae(e) {
      var t,
          n,
          i = e.length - 1,
          r = Array(i),
          s = Array(i),
          a = Array(i);for (r[0] = 0, s[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < i - 1; ++t) {
        r[t] = 1, s[t] = 4, a[t] = 4 * e[t] + 2 * e[t + 1];
      }for (r[i - 1] = 2, s[i - 1] = 7, a[i - 1] = 8 * e[i - 1] + e[i], t = 1; t < i; ++t) {
        n = r[t] / s[t - 1], s[t] -= n, a[t] -= n * a[t - 1];
      }for (r[i - 1] = a[i - 1] / s[i - 1], t = i - 2; 0 <= t; --t) {
        r[t] = (a[t] - r[t + 1]) / s[t];
      }for (s[i - 1] = (e[i] + r[i - 1]) / 2, t = 0; t < i - 1; ++t) {
        s[t] = 2 * e[t + 1] - r[t + 1];
      }return [r, s];
    }function oe(e, t) {
      this._context = e, this._t = t;
    }function ce(e) {
      return new oe(e, 0);
    }function ue(e) {
      return new oe(e, 1);
    }function le(e, t) {
      return e[t];
    }function he(e) {
      for (var t, n = 0, i = -1, r = e.length; ++i < r;) {
        (t = +e[i][1]) && (n += t);
      }return n;
    }var fe = Math.acos;h.r(l);var _e = a,
        de = 2 * _e,
        pe = 1e-6;f.prototype = _.prototype = { constructor: f, moveTo: function moveTo(e, t) {
        this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
      }, closePath: function closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
      }, lineTo: function lineTo(e, t) {
        this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
      }, quadraticCurveTo: function quadraticCurveTo(e, t, n, i) {
        this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +i);
      }, bezierCurveTo: function bezierCurveTo(e, t, n, i, r, s) {
        this._ += "C" + +e + "," + +t + "," + +n + "," + +i + "," + (this._x1 = +r) + "," + (this._y1 = +s);
      }, arcTo: function arcTo(n, i, r, s, a) {
        n = +n, i = +i, r = +r, s = +s, a = +a;var o = this._x1,
            c = this._y1,
            u = r - n,
            l = s - i,
            h = o - n,
            f = c - i,
            _ = h * h + f * f;if (0 > a) throw new Error("negative radius: " + a);if (null === this._x1) this._ += "M" + (this._x1 = n) + "," + (this._y1 = i);else if (_ > pe) {
          if (e(f * u - l * h) > pe && a) {
            var d = r - o,
                p = s - c,
                y = u * u + l * l,
                v = t(y),
                m = t(_),
                g = a * Math.tan((_e - fe((y + _ - (d * d + p * p)) / (2 * v * m))) / 2),
                x = g / m,
                b = g / v;e(x - 1) > pe && (this._ += "L" + (n + x * h) + "," + (i + x * f)), this._ += "A" + a + "," + a + ",0,0," + +(f * d > h * p) + "," + (this._x1 = n + b * u) + "," + (this._y1 = i + b * l);
          } else this._ += "L" + (this._x1 = n) + "," + (this._y1 = i);
        } else ;
      }, arc: function arc(t, n, i, r, s, a) {
        t = +t, n = +n;var u = (i = +i) * c(r),
            l = i * o(r),
            h = t + u,
            f = n + l,
            _ = 1 ^ a,
            d = a ? r - s : s - r;if (0 > i) throw new Error("negative radius: " + i);null === this._x1 ? this._ += "M" + h + "," + f : (e(this._x1 - h) > pe || e(this._y1 - f) > pe) && (this._ += "L" + h + "," + f), i && (0 > d && (d = d % de + de), d > de - pe ? this._ += "A" + i + "," + i + ",0,1," + _ + "," + (t - u) + "," + (n - l) + "A" + i + "," + i + ",0,1," + _ + "," + (this._x1 = h) + "," + (this._y1 = f) : d > pe && (this._ += "A" + i + "," + i + ",0," + +(d >= _e) + "," + _ + "," + (this._x1 = t + i * c(s)) + "," + (this._y1 = n + i * o(s))));
      }, rect: function rect(e, t, n, i) {
        this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +i + "h" + -n + "Z";
      }, toString: function toString() {
        return this._;
      } };var ye = _,
        ve = function ve(e) {
      return function () {
        return e;
      };
    },
        me = e,
        ge = n,
        xe = c,
        be = u,
        Ae = r,
        Se = o,
        we = t,
        Ee = 1e-12,
        Ce = a,
        ke = Ce / 2,
        Te = 2 * Ce,
        Ie = function Ie() {
      function e() {
        var e,
            u,
            l = +t.apply(this, arguments),
            h = +n.apply(this, arguments),
            f = s.apply(this, arguments) - ke,
            _ = a.apply(this, arguments) - ke,
            p = me(_ - f),
            y = _ > f;if (c || (c = e = ye()), h < l && (u = h, h = l, l = u), h > Ee) {
          if (p > Te - Ee) c.moveTo(h * xe(f), h * Se(f)), c.arc(0, 0, h, f, _, !y), l > Ee && (c.moveTo(l * xe(_), l * Se(_)), c.arc(0, 0, l, _, f, y));else {
            var v,
                m,
                g = f,
                b = _,
                A = f,
                S = _,
                w = p,
                E = p,
                C = o.apply(this, arguments) / 2,
                k = C > Ee && (r ? +r.apply(this, arguments) : we(l * l + h * h)),
                T = Ae(me(h - l) / 2, +i.apply(this, arguments)),
                I = T,
                N = T;if (k > Ee) {
              var O = d(k / l * Se(C)),
                  P = d(k / h * Se(C));(w -= 2 * O) > Ee ? (A += O *= y ? 1 : -1, S -= O) : (w = 0, A = S = (f + _) / 2), (E -= 2 * P) > Ee ? (g += P *= y ? 1 : -1, b -= P) : (E = 0, g = b = (f + _) / 2);
            }var z = h * xe(g),
                L = h * Se(g),
                M = l * xe(S),
                D = l * Se(S);if (T > Ee) {
              var j = h * xe(b),
                  R = h * Se(b),
                  q = l * xe(A),
                  H = l * Se(A);if (p < Ce) {
                var B = w > Ee ? function (e, t, n, i, r, s, a, o) {
                  var c = n - e,
                      u = i - t,
                      l = a - r,
                      h = o - s,
                      f = (l * (t - s) - h * (e - r)) / (h * c - l * u);return [e + f * c, t + f * u];
                }(z, L, q, H, j, R, M, D) : [M, D],
                    U = z - B[0],
                    F = L - B[1],
                    V = j - B[0],
                    G = R - B[1],
                    $ = 1 / Se(function (e) {
                  return 1 < e ? 0 : -1 > e ? Ce : fe(e);
                }((U * V + F * G) / (we(U * U + F * F) * we(V * V + G * G))) / 2),
                    W = we(B[0] * B[0] + B[1] * B[1]);I = Ae(T, (l - W) / ($ - 1)), N = Ae(T, (h - W) / ($ + 1));
              }
            }E > Ee ? N > Ee ? (v = x(q, H, z, L, h, N, y), m = x(j, R, M, D, h, N, y), c.moveTo(v.cx + v.x01, v.cy + v.y01), N < T ? c.arc(v.cx, v.cy, N, ge(v.y01, v.x01), ge(m.y01, m.x01), !y) : (c.arc(v.cx, v.cy, N, ge(v.y01, v.x01), ge(v.y11, v.x11), !y), c.arc(0, 0, h, ge(v.cy + v.y11, v.cx + v.x11), ge(m.cy + m.y11, m.cx + m.x11), !y), c.arc(m.cx, m.cy, N, ge(m.y11, m.x11), ge(m.y01, m.x01), !y))) : (c.moveTo(z, L), c.arc(0, 0, h, g, b, !y)) : c.moveTo(z, L), l > Ee && w > Ee ? I > Ee ? (v = x(M, D, j, R, l, -I, y), m = x(z, L, q, H, l, -I, y), c.lineTo(v.cx + v.x01, v.cy + v.y01), I < T ? c.arc(v.cx, v.cy, I, ge(v.y01, v.x01), ge(m.y01, m.x01), !y) : (c.arc(v.cx, v.cy, I, ge(v.y01, v.x01), ge(v.y11, v.x11), !y), c.arc(0, 0, l, ge(v.cy + v.y11, v.cx + v.x11), ge(m.cy + m.y11, m.cx + m.x11), y), c.arc(m.cx, m.cy, I, ge(m.y11, m.x11), ge(m.y01, m.x01), !y))) : c.arc(0, 0, l, S, A, y) : c.lineTo(M, D);
          }
        } else c.moveTo(0, 0);return c.closePath(), e ? (c = null, e + "" || null) : void 0;
      }var t = p,
          n = y,
          i = ve(0),
          r = null,
          s = v,
          a = m,
          o = g,
          c = null;return e.centroid = function () {
        var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
            i = (+s.apply(this, arguments) + +a.apply(this, arguments)) / 2 - Ce / 2;return [xe(i) * e, Se(i) * e];
      }, e.innerRadius = function (n) {
        return arguments.length ? (t = "function" == typeof n ? n : ve(+n), e) : t;
      }, e.outerRadius = function (t) {
        return arguments.length ? (n = "function" == typeof t ? t : ve(+t), e) : n;
      }, e.cornerRadius = function (t) {
        return arguments.length ? (i = "function" == typeof t ? t : ve(+t), e) : i;
      }, e.padRadius = function (t) {
        return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : ve(+t), e) : r;
      }, e.startAngle = function (t) {
        return arguments.length ? (s = "function" == typeof t ? t : ve(+t), e) : s;
      }, e.endAngle = function (t) {
        return arguments.length ? (a = "function" == typeof t ? t : ve(+t), e) : a;
      }, e.padAngle = function (t) {
        return arguments.length ? (o = "function" == typeof t ? t : ve(+t), e) : o;
      }, e.context = function (t) {
        return arguments.length ? (c = null == t ? null : t, e) : c;
      }, e;
    };b.prototype = { areaStart: function areaStart() {
        this._line = 0;
      }, areaEnd: function areaEnd() {
        this._line = NaN;
      }, lineStart: function lineStart() {
        this._point = 0;
      }, lineEnd: function lineEnd() {
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function point(e, t) {
        switch (e = +e, t = +t, this._point) {case 0:
            this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);break;case 1:
            this._point = 2;default:
            this._context.lineTo(e, t);}
      } };var Ne = function Ne(e) {
      return new b(e);
    },
        Oe = function Oe() {
      function e(e) {
        var o,
            c,
            u,
            l = e.length,
            h = !1;for (null == r && (a = s(u = ye())), o = 0; o <= l; ++o) {
          !(o < l && i(c = e[o], o, e)) == h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+t(c, o, e), +n(c, o, e));
        }if (u) return a = null, u + "" || null;
      }var t = A,
          n = S,
          i = ve(!0),
          r = null,
          s = Ne,
          a = null;return e.x = function (n) {
        return arguments.length ? (t = "function" == typeof n ? n : ve(+n), e) : t;
      }, e.y = function (t) {
        return arguments.length ? (n = "function" == typeof t ? t : ve(+t), e) : n;
      }, e.defined = function (t) {
        return arguments.length ? (i = "function" == typeof t ? t : ve(!!t), e) : i;
      }, e.curve = function (t) {
        return arguments.length ? (s = t, null != r && (a = s(r)), e) : s;
      }, e.context = function (t) {
        return arguments.length ? (null == t ? r = a = null : a = s(r = t), e) : r;
      }, e;
    },
        Pe = function Pe() {
      function e(e) {
        var t,
            l,
            h,
            f,
            _,
            d = e.length,
            p = !1,
            y = Array(d),
            v = Array(d);for (null == o && (u = c(_ = ye())), t = 0; t <= d; ++t) {
          if (!(t < d && a(f = e[t], t, e)) == p) if (p = !p) l = t, u.areaStart(), u.lineStart();else {
            for (u.lineEnd(), u.lineStart(), h = t - 1; h >= l; --h) {
              u.point(y[h], v[h]);
            }u.lineEnd(), u.areaEnd();
          }p && (y[t] = +n(f, t, e), v[t] = +r(f, t, e), u.point(i ? +i(f, t, e) : y[t], s ? +s(f, t, e) : v[t]));
        }if (_) return u = null, _ + "" || null;
      }function t() {
        return Oe().defined(a).curve(c).context(o);
      }var n = A,
          i = null,
          r = ve(0),
          s = S,
          a = ve(!0),
          o = null,
          c = Ne,
          u = null;return e.x = function (t) {
        return arguments.length ? (n = "function" == typeof t ? t : ve(+t), i = null, e) : n;
      }, e.x0 = function (t) {
        return arguments.length ? (n = "function" == typeof t ? t : ve(+t), e) : n;
      }, e.x1 = function (t) {
        return arguments.length ? (i = null == t ? null : "function" == typeof t ? t : ve(+t), e) : i;
      }, e.y = function (t) {
        return arguments.length ? (r = "function" == typeof t ? t : ve(+t), s = null, e) : r;
      }, e.y0 = function (t) {
        return arguments.length ? (r = "function" == typeof t ? t : ve(+t), e) : r;
      }, e.y1 = function (t) {
        return arguments.length ? (s = null == t ? null : "function" == typeof t ? t : ve(+t), e) : s;
      }, e.lineX0 = e.lineY0 = function () {
        return t().x(n).y(r);
      }, e.lineY1 = function () {
        return t().x(n).y(s);
      }, e.lineX1 = function () {
        return t().x(i).y(r);
      }, e.defined = function (t) {
        return arguments.length ? (a = "function" == typeof t ? t : ve(!!t), e) : a;
      }, e.curve = function (t) {
        return arguments.length ? (c = t, null != o && (u = c(o)), e) : c;
      }, e.context = function (t) {
        return arguments.length ? (null == t ? o = u = null : u = c(o = t), e) : o;
      }, e;
    },
        ze = function ze(e, t) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    },
        Le = function Le(e) {
      return e;
    },
        Me = function Me() {
      function t(t) {
        var l,
            h,
            f,
            _,
            d,
            p = t.length,
            y = 0,
            v = Array(p),
            m = Array(p),
            g = +a.apply(this, arguments),
            x = r(Te, u(-Te, o.apply(this, arguments) - g)),
            b = r(e(x) / p, c.apply(this, arguments)),
            A = b * (0 > x ? -1 : 1);for (l = 0; l < p; ++l) {
          0 < (d = m[v[l] = l] = +n(t[l], l, t)) && (y += d);
        }for (null == i ? null != s && v.sort(function (e, n) {
          return s(t[e], t[n]);
        }) : v.sort(function (e, t) {
          return i(m[e], m[t]);
        }), l = 0, f = y ? (x - p * A) / y : 0; l < p; ++l, g = _) {
          h = v[l], _ = g + (0 < (d = m[h]) ? d * f : 0) + A, m[h] = { data: t[h], index: l, value: d, startAngle: g, endAngle: _, padAngle: b };
        }return m;
      }var n = Le,
          i = ze,
          s = null,
          a = ve(0),
          o = ve(Te),
          c = ve(0);return t.value = function (e) {
        return arguments.length ? (n = "function" == typeof e ? e : ve(+e), t) : n;
      }, t.sortValues = function (e) {
        return arguments.length ? (i = e, s = null, t) : i;
      }, t.sort = function (e) {
        return arguments.length ? (s = e, i = null, t) : s;
      }, t.startAngle = function (e) {
        return arguments.length ? (a = "function" == typeof e ? e : ve(+e), t) : a;
      }, t.endAngle = function (e) {
        return arguments.length ? (o = "function" == typeof e ? e : ve(+e), t) : o;
      }, t.padAngle = function (e) {
        return arguments.length ? (c = "function" == typeof e ? e : ve(+e), t) : c;
      }, t;
    },
        De = E(Ne);w.prototype = { areaStart: function areaStart() {
        this._curve.areaStart();
      }, areaEnd: function areaEnd() {
        this._curve.areaEnd();
      }, lineStart: function lineStart() {
        this._curve.lineStart();
      }, lineEnd: function lineEnd() {
        this._curve.lineEnd();
      }, point: function point(e, t) {
        this._curve.point(t * o(e), t * -c(e));
      } };var je = function je() {
      return C(Oe().curve(De));
    },
        Re = function Re() {
      var e = Pe().curve(De),
          t = e.curve,
          n = e.lineX0,
          i = e.lineX1,
          r = e.lineY0,
          s = e.lineY1;return e.angle = e.x, delete e.x, e.startAngle = e.x0, delete e.x0, e.endAngle = e.x1, delete e.x1, e.radius = e.y, delete e.y, e.innerRadius = e.y0, delete e.y0, e.outerRadius = e.y1, delete e.y1, e.lineStartAngle = function () {
        return C(n());
      }, delete e.lineX0, e.lineEndAngle = function () {
        return C(i());
      }, delete e.lineX1, e.lineInnerRadius = function () {
        return C(r());
      }, delete e.lineY0, e.lineOuterRadius = function () {
        return C(s());
      }, delete e.lineY1, e.curve = function (e) {
        return arguments.length ? t(E(e)) : t()._curve;
      }, e;
    },
        qe = function qe(e, t) {
      return [(t = +t) * c(e -= a / 2), t * o(e)];
    },
        He = Array.prototype.slice,
        Be = { draw: function draw(e, n) {
        var i = t(n / Ce);e.moveTo(i, 0), e.arc(0, 0, i, 0, Te);
      } },
        Ue = { draw: function draw(e, n) {
        var i = t(n / 5) / 2;e.moveTo(-3 * i, -i), e.lineTo(-i, -i), e.lineTo(-i, -3 * i), e.lineTo(i, -3 * i), e.lineTo(i, -i), e.lineTo(3 * i, -i), e.lineTo(3 * i, i), e.lineTo(i, i), e.lineTo(i, 3 * i), e.lineTo(-i, 3 * i), e.lineTo(-i, i), e.lineTo(-3 * i, i), e.closePath();
      } },
        Fe = .5773502691896257,
        Ve = { draw: function draw(e, n) {
        var i = t(n / (2 * Fe)),
            r = i * Fe;e.moveTo(0, -i), e.lineTo(r, 0), e.lineTo(0, i), e.lineTo(-r, 0), e.closePath();
      } },
        Ge = o(Ce / 10) / o(7 * Ce / 10),
        $e = o(Te / 10) * Ge,
        We = -c(Te / 10) * Ge,
        Xe = { draw: function draw(e, n) {
        var i = t(.8908130915292852 * n),
            r = $e * i,
            s = We * i;e.moveTo(0, -i), e.lineTo(r, s);for (var a = 1; 5 > a; ++a) {
          var u = Te * a / 5,
              l = c(u),
              h = o(u);e.lineTo(h * i, -l * i), e.lineTo(l * r - h * s, h * r + l * s);
        }e.closePath();
      } },
        Ye = { draw: function draw(e, n) {
        var i = t(n),
            r = -i / 2;e.rect(r, r, i, i);
      } },
        Ke = 1.7320508075688772,
        Ze = { draw: function draw(e, n) {
        var i = -t(n / (3 * Ke));e.moveTo(0, 2 * i), e.lineTo(-Ke * i, -i), e.lineTo(Ke * i, -i), e.closePath();
      } },
        Je = -.5,
        Qe = .8660254037844386,
        et = .2886751345948129,
        tt = { draw: function draw(e, n) {
        var i = t(n / (3 * (et / 2 + 1))),
            r = i / 2,
            s = i * et,
            a = r,
            o = i * et + i,
            c = -a,
            u = o;e.moveTo(r, s), e.lineTo(a, o), e.lineTo(c, u), e.lineTo(Je * r - Qe * s, Qe * r + Je * s), e.lineTo(Je * a - Qe * o, Qe * a + Je * o), e.lineTo(Je * c - Qe * u, Qe * c + Je * u), e.lineTo(Je * r + Qe * s, Je * s - Qe * r), e.lineTo(Je * a + Qe * o, Je * o - Qe * a), e.lineTo(Je * c + Qe * u, Je * u - Qe * c), e.closePath();
      } },
        nt = [Be, Ue, Ve, Ye, Xe, Ze, tt],
        it = function it() {
      function e() {
        var e;if (i || (i = e = ye()), t.apply(this, arguments).draw(i, +n.apply(this, arguments)), e) return i = null, e + "" || null;
      }var t = ve(Be),
          n = ve(64),
          i = null;return e.type = function (n) {
        return arguments.length ? (t = "function" == typeof n ? n : ve(n), e) : t;
      }, e.size = function (t) {
        return arguments.length ? (n = "function" == typeof t ? t : ve(+t), e) : n;
      }, e.context = function (t) {
        return arguments.length ? (i = null == t ? null : t, e) : i;
      }, e;
    },
        rt = function rt() {};j.prototype = { areaStart: function areaStart() {
        this._line = 0;
      }, areaEnd: function areaEnd() {
        this._line = NaN;
      }, lineStart: function lineStart() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
      }, lineEnd: function lineEnd() {
        switch (this._point) {case 3:
            D(this, this._x1, this._y1);case 2:
            this._context.lineTo(this._x1, this._y1);}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function point(e, t) {
        switch (e = +e, t = +t, this._point) {case 0:
            this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);break;case 1:
            this._point = 2;break;case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);default:
            D(this, e, t);}this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
      } };var st = function st(e) {
      return new j(e);
    };R.prototype = { areaStart: rt, areaEnd: rt, lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
      }, lineEnd: function lineEnd() {
        switch (this._point) {case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();break;case 2:
            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();break;case 3:
            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);}
      }, point: function point(e, t) {
        switch (e = +e, t = +t, this._point) {case 0:
            this._point = 1, this._x2 = e, this._y2 = t;break;case 1:
            this._point = 2, this._x3 = e, this._y3 = t;break;case 2:
            this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);break;default:
            D(this, e, t);}this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
      } };var at = function at(e) {
      return new R(e);
    };q.prototype = { areaStart: function areaStart() {
        this._line = 0;
      }, areaEnd: function areaEnd() {
        this._line = NaN;
      }, lineStart: function lineStart() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
      }, lineEnd: function lineEnd() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function point(e, t) {
        switch (e = +e, t = +t, this._point) {case 0:
            this._point = 1;break;case 1:
            this._point = 2;break;case 2:
            this._point = 3;var n = (this._x0 + 4 * this._x1 + e) / 6,
                i = (this._y0 + 4 * this._y1 + t) / 6;this._line ? this._context.lineTo(n, i) : this._context.moveTo(n, i);break;case 3:
            this._point = 4;default:
            D(this, e, t);}this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
      } };var ot = function ot(e) {
      return new q(e);
    };H.prototype = { lineStart: function lineStart() {
        this._x = [], this._y = [], this._basis.lineStart();
      }, lineEnd: function lineEnd() {
        var e = this._x,
            t = this._y,
            n = e.length - 1;if (0 < n) for (var i, r = e[0], s = t[0], a = e[n] - r, o = t[n] - s, c = -1; ++c <= n;) {
          i = c / n, this._basis.point(this._beta * e[c] + (1 - this._beta) * (r + i * a), this._beta * t[c] + (1 - this._beta) * (s + i * o));
        }this._x = this._y = null, this._basis.lineEnd();
      }, point: function point(e, t) {
        this._x.push(+e), this._y.push(+t);
      } };var ct = function e(t) {
      function n(e) {
        return 1 === t ? new j(e) : new H(e, t);
      }return n.beta = function (t) {
        return e(+t);
      }, n;
    }(.85);U.prototype = { areaStart: function areaStart() {
        this._line = 0;
      }, areaEnd: function areaEnd() {
        this._line = NaN;
      }, lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
      }, lineEnd: function lineEnd() {
        switch (this._point) {case 2:
            this._context.lineTo(this._x2, this._y2);break;case 3:
            B(this, this._x1, this._y1);}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function point(e, t) {
        switch (e = +e, t = +t, this._point) {case 0:
            this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);break;case 1:
            this._point = 2, this._x1 = e, this._y1 = t;break;case 2:
            this._point = 3;default:
            B(this, e, t);}this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
      } };var ut = function e(t) {
      function n(e) {
        return new U(e, t);
      }return n.tension = function (t) {
        return e(+t);
      }, n;
    }(0);F.prototype = { areaStart: rt, areaEnd: rt, lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
      }, lineEnd: function lineEnd() {
        switch (this._point) {case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();break;case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();break;case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);}
      }, point: function point(e, t) {
        switch (e = +e, t = +t, this._point) {case 0:
            this._point = 1, this._x3 = e, this._y3 = t;break;case 1:
            this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);break;case 2:
            this._point = 3, this._x5 = e, this._y5 = t;break;default:
            B(this, e, t);}this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
      } };var lt = function e(t) {
      function n(e) {
        return new F(e, t);
      }return n.tension = function (t) {
        return e(+t);
      }, n;
    }(0);V.prototype = { areaStart: function areaStart() {
        this._line = 0;
      }, areaEnd: function areaEnd() {
        this._line = NaN;
      }, lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
      }, lineEnd: function lineEnd() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function point(e, t) {
        switch (e = +e, t = +t, this._point) {case 0:
            this._point = 1;break;case 1:
            this._point = 2;break;case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);break;case 3:
            this._point = 4;default:
            B(this, e, t);}this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
      } };var ht = function e(t) {
      function n(e) {
        return new V(e, t);
      }return n.tension = function (t) {
        return e(+t);
      }, n;
    }(0);$.prototype = { areaStart: function areaStart() {
        this._line = 0;
      }, areaEnd: function areaEnd() {
        this._line = NaN;
      }, lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      }, lineEnd: function lineEnd() {
        switch (this._point) {case 2:
            this._context.lineTo(this._x2, this._y2);break;case 3:
            this.point(this._x2, this._y2);}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function point(e, n) {
        if (e = +e, n = +n, this._point) {
          var i = this._x2 - e,
              r = this._y2 - n;this._l23_a = t(this._l23_2a = s(i * i + r * r, this._alpha));
        }switch (this._point) {case 0:
            this._point = 1, this._line ? this._context.lineTo(e, n) : this._context.moveTo(e, n);break;case 1:
            this._point = 2;break;case 2:
            this._point = 3;default:
            G(this, e, n);}this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
      } };var ft = function e(t) {
      function n(e) {
        return t ? new $(e, t) : new U(e, 0);
      }return n.alpha = function (t) {
        return e(+t);
      }, n;
    }(.5);W.prototype = { areaStart: rt, areaEnd: rt, lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      }, lineEnd: function lineEnd() {
        switch (this._point) {case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();break;case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();break;case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);}
      }, point: function point(e, n) {
        if (e = +e, n = +n, this._point) {
          var i = this._x2 - e,
              r = this._y2 - n;this._l23_a = t(this._l23_2a = s(i * i + r * r, this._alpha));
        }switch (this._point) {case 0:
            this._point = 1, this._x3 = e, this._y3 = n;break;case 1:
            this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = n);break;case 2:
            this._point = 3, this._x5 = e, this._y5 = n;break;default:
            G(this, e, n);}this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
      } };var _t = function e(t) {
      function n(e) {
        return t ? new W(e, t) : new F(e, 0);
      }return n.alpha = function (t) {
        return e(+t);
      }, n;
    }(.5);X.prototype = { areaStart: function areaStart() {
        this._line = 0;
      }, areaEnd: function areaEnd() {
        this._line = NaN;
      }, lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      }, lineEnd: function lineEnd() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function point(e, n) {
        if (e = +e, n = +n, this._point) {
          var i = this._x2 - e,
              r = this._y2 - n;this._l23_a = t(this._l23_2a = s(i * i + r * r, this._alpha));
        }switch (this._point) {case 0:
            this._point = 1;break;case 1:
            this._point = 2;break;case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);break;case 3:
            this._point = 4;default:
            G(this, e, n);}this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
      } };var dt = function e(t) {
      function n(e) {
        return t ? new X(e, t) : new V(e, 0);
      }return n.alpha = function (t) {
        return e(+t);
      }, n;
    }(.5);Y.prototype = { areaStart: rt, areaEnd: rt, lineStart: function lineStart() {
        this._point = 0;
      }, lineEnd: function lineEnd() {
        this._point && this._context.closePath();
      }, point: function point(e, t) {
        e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
      } };var pt = function pt(e) {
      return new Y(e);
    };ee.prototype = { areaStart: function areaStart() {
        this._line = 0;
      }, areaEnd: function areaEnd() {
        this._line = NaN;
      }, lineStart: function lineStart() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
      }, lineEnd: function lineEnd() {
        switch (this._point) {case 2:
            this._context.lineTo(this._x1, this._y1);break;case 3:
            Q(this, this._t0, J(this, this._t0));}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function point(e, t) {
        var n = NaN;if (t = +t, (e = +e) !== this._x1 || t !== this._y1) {
          switch (this._point) {case 0:
              this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);break;case 1:
              this._point = 2;break;case 2:
              this._point = 3, Q(this, J(this, n = Z(this, e, t)), n);break;default:
              Q(this, this._t0, n = Z(this, e, t));}this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
        }
      } }, (te.prototype = Object.create(ee.prototype)).point = function (e, t) {
      ee.prototype.point.call(this, t, e);
    }, ne.prototype = { moveTo: function moveTo(e, t) {
        this._context.moveTo(t, e);
      }, closePath: function closePath() {
        this._context.closePath();
      }, lineTo: function lineTo(e, t) {
        this._context.lineTo(t, e);
      }, bezierCurveTo: function bezierCurveTo(e, t, n, i, r, s) {
        this._context.bezierCurveTo(t, e, i, n, s, r);
      } }, se.prototype = { areaStart: function areaStart() {
        this._line = 0;
      }, areaEnd: function areaEnd() {
        this._line = NaN;
      }, lineStart: function lineStart() {
        this._x = [], this._y = [];
      }, lineEnd: function lineEnd() {
        var e = this._x,
            t = this._y,
            n = e.length;if (n) if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), 2 === n) this._context.lineTo(e[1], t[1]);else for (var i = ae(e), r = ae(t), s = 0, a = 1; a < n; ++s, ++a) {
          this._context.bezierCurveTo(i[0][s], r[0][s], i[1][s], r[1][s], e[a], t[a]);
        }(this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
      }, point: function point(e, t) {
        this._x.push(+e), this._y.push(+t);
      } };var yt = function yt(e) {
      return new se(e);
    };oe.prototype = { areaStart: function areaStart() {
        this._line = 0;
      }, areaEnd: function areaEnd() {
        this._line = NaN;
      }, lineStart: function lineStart() {
        this._x = this._y = NaN, this._point = 0;
      }, lineEnd: function lineEnd() {
        0 < this._t && 1 > this._t && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), 0 <= this._line && (this._t = 1 - this._t, this._line = 1 - this._line);
      }, point: function point(e, t) {
        switch (e = +e, t = +t, this._point) {case 0:
            this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);break;case 1:
            this._point = 2;default:
            if (0 >= this._t) this._context.lineTo(this._x, t), this._context.lineTo(e, t);else {
              var n = this._x * (1 - this._t) + e * this._t;this._context.lineTo(n, this._y), this._context.lineTo(n, t);
            }}this._x = e, this._y = t;
      } };var vt = function vt(e) {
      return new oe(e, .5);
    },
        mt = function mt(e, t) {
      if (1 < (r = e.length)) for (var n, i, r, s = 1, a = e[t[0]], o = a.length; s < r; ++s) {
        for (i = a, a = e[t[s]], n = 0; n < o; ++n) {
          a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
        }
      }
    },
        gt = function gt(e) {
      for (var t = e.length, n = Array(t); 0 <= --t;) {
        n[t] = t;
      }return n;
    },
        xt = function xt() {
      function e(e) {
        var s,
            a,
            o = t.apply(this, arguments),
            c = e.length,
            u = o.length,
            l = Array(u);for (s = 0; s < u; ++s) {
          for (var h, f = o[s], _ = l[s] = Array(c), d = 0; d < c; ++d) {
            _[d] = h = [0, +r(e[d], f, d, e)], h.data = e[d];
          }_.key = f;
        }for (s = 0, a = n(l); s < u; ++s) {
          l[a[s]].index = s;
        }return i(l, a), l;
      }var t = ve([]),
          n = gt,
          i = mt,
          r = le;return e.keys = function (n) {
        return arguments.length ? (t = "function" == typeof n ? n : ve(He.call(n)), e) : t;
      }, e.value = function (t) {
        return arguments.length ? (r = "function" == typeof t ? t : ve(+t), e) : r;
      }, e.order = function (t) {
        return arguments.length ? (n = null == t ? gt : "function" == typeof t ? t : ve(He.call(t)), e) : n;
      }, e.offset = function (t) {
        return arguments.length ? (i = null == t ? mt : t, e) : i;
      }, e;
    },
        bt = function bt(e, t) {
      if (0 < (i = e.length)) {
        for (var n, i, r, s = 0, a = e[0].length; s < a; ++s) {
          for (r = n = 0; n < i; ++n) {
            r += e[n][s][1] || 0;
          }if (r) for (n = 0; n < i; ++n) {
            e[n][s][1] /= r;
          }
        }mt(e, t);
      }
    },
        At = function At(e, t) {
      if (1 < (o = e.length)) for (var n, i, r, s, a, o, c = 0, u = e[t[0]].length; c < u; ++c) {
        for (s = a = 0, n = 0; n < o; ++n) {
          0 <= (r = (i = e[t[n]][c])[1] - i[0]) ? (i[0] = s, i[1] = s += r) : 0 > r ? (i[1] = a, i[0] = a += r) : i[0] = s;
        }
      }
    },
        St = function St(e, t) {
      if (0 < (n = e.length)) {
        for (var n, i = 0, r = e[t[0]], s = r.length; i < s; ++i) {
          for (var a = 0, o = 0; a < n; ++a) {
            o += e[a][i][1] || 0;
          }r[i][1] += r[i][0] = -o / 2;
        }mt(e, t);
      }
    },
        wt = function wt(e, t) {
      if (0 < (r = e.length) && 0 < (i = (n = e[t[0]]).length)) {
        for (var n, i, r, s = 0, a = 1; a < i; ++a) {
          for (var o = 0, c = 0, u = 0; o < r; ++o) {
            for (var l = e[t[o]], h = l[a][1] || 0, f = (h - (l[a - 1][1] || 0)) / 2, _ = 0; _ < o; ++_) {
              var d = e[t[_]];f += (d[a][1] || 0) - (d[a - 1][1] || 0);
            }c += h, u += f * h;
          }n[a - 1][1] += n[a - 1][0] = s, c && (s -= u / c);
        }n[a - 1][1] += n[a - 1][0] = s, mt(e, t);
      }
    },
        Et = function Et(e) {
      var t = e.map(he);return gt(e).sort(function (e, n) {
        return t[e] - t[n];
      });
    },
        Ct = function Ct(e) {
      return Et(e).reverse();
    },
        kt = function kt(e) {
      var t,
          n,
          i = e.length,
          r = e.map(he),
          s = gt(e).sort(function (e, t) {
        return r[t] - r[e];
      }),
          a = 0,
          o = 0,
          c = [],
          u = [];for (t = 0; t < i; ++t) {
        n = s[t], a < o ? (a += r[n], c.push(n)) : (o += r[n], u.push(n));
      }return u.reverse().concat(c);
    },
        Tt = function Tt(e) {
      return gt(e).reverse();
    };h.d(l, "arc", function () {
      return Ie;
    }), h.d(l, "area", function () {
      return Pe;
    }), h.d(l, "line", function () {
      return Oe;
    }), h.d(l, "pie", function () {
      return Me;
    }), h.d(l, "areaRadial", function () {
      return Re;
    }), h.d(l, "radialArea", function () {
      return Re;
    }), h.d(l, "lineRadial", function () {
      return je;
    }), h.d(l, "radialLine", function () {
      return je;
    }), h.d(l, "pointRadial", function () {
      return qe;
    }), h.d(l, "linkHorizontal", function () {
      return z;
    }), h.d(l, "linkVertical", function () {
      return L;
    }), h.d(l, "linkRadial", function () {
      return M;
    }), h.d(l, "symbol", function () {
      return it;
    }), h.d(l, "symbols", function () {
      return nt;
    }), h.d(l, "symbolCircle", function () {
      return Be;
    }), h.d(l, "symbolCross", function () {
      return Ue;
    }), h.d(l, "symbolDiamond", function () {
      return Ve;
    }), h.d(l, "symbolSquare", function () {
      return Ye;
    }), h.d(l, "symbolStar", function () {
      return Xe;
    }), h.d(l, "symbolTriangle", function () {
      return Ze;
    }), h.d(l, "symbolWye", function () {
      return tt;
    }), h.d(l, "curveBasisClosed", function () {
      return at;
    }), h.d(l, "curveBasisOpen", function () {
      return ot;
    }), h.d(l, "curveBasis", function () {
      return st;
    }), h.d(l, "curveBundle", function () {
      return ct;
    }), h.d(l, "curveCardinalClosed", function () {
      return lt;
    }), h.d(l, "curveCardinalOpen", function () {
      return ht;
    }), h.d(l, "curveCardinal", function () {
      return ut;
    }), h.d(l, "curveCatmullRomClosed", function () {
      return _t;
    }), h.d(l, "curveCatmullRomOpen", function () {
      return dt;
    }), h.d(l, "curveCatmullRom", function () {
      return ft;
    }), h.d(l, "curveLinearClosed", function () {
      return pt;
    }), h.d(l, "curveLinear", function () {
      return Ne;
    }), h.d(l, "curveMonotoneX", function () {
      return ie;
    }), h.d(l, "curveMonotoneY", function () {
      return re;
    }), h.d(l, "curveNatural", function () {
      return yt;
    }), h.d(l, "curveStep", function () {
      return vt;
    }), h.d(l, "curveStepAfter", function () {
      return ue;
    }), h.d(l, "curveStepBefore", function () {
      return ce;
    }), h.d(l, "stack", function () {
      return xt;
    }), h.d(l, "stackOffsetExpand", function () {
      return bt;
    }), h.d(l, "stackOffsetDiverging", function () {
      return At;
    }), h.d(l, "stackOffsetNone", function () {
      return mt;
    }), h.d(l, "stackOffsetSilhouette", function () {
      return St;
    }), h.d(l, "stackOffsetWiggle", function () {
      return wt;
    }), h.d(l, "stackOrderAscending", function () {
      return Et;
    }), h.d(l, "stackOrderDescending", function () {
      return Ct;
    }), h.d(l, "stackOrderInsideOut", function () {
      return kt;
    }), h.d(l, "stackOrderNone", function () {
      return gt;
    }), h.d(l, "stackOrderReverse", function () {
      return Tt;
    });
  }, function (e, n, s) {
    "use strict";

    var a = function () {
      function e(e, t) {
        for (var n, i = 0; i < t.length; i++) {
          (n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    }(),
        o = s(2),
        c = function () {
      function e(t, n) {
        (function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, e), this.renderer = n, this.d3 = n.d3, this.visualizationWidth = t.width || "100%", this.visualizationHeight = t.height || "100%", this.dimW = 45 * (1 / t.scale || 1) * 16.58, this.dimH = 45 * (1 / t.scale || 1) * 16.58, this.id = "SystemUWidget_" + Math.random().toString().replace("0.", ""), this.exclude = t.exclude || [], this.loadingDiv = "dummy", this.d3vis = null, this.vis = null, this.data = null, this._colors = t.colors, this._d3version = t.d3version, this._element = null, this._childElements = { icondefs: null, image: null, pattern: null, circle: null, parts: {} };
      }return a(e, [{ key: "setElement", value: function value(e) {
          this._element = e;
        } }, { key: "setData", value: function value(e) {
          this.data = e;
        } }, { key: "clearData", value: function value() {
          this.data = null;
        } }, { key: "hasData", value: function value() {
          return null !== this.data;
        } }, { key: "setColors", value: function value(e) {
          e && (this._colors = e);
        } }, { key: "switchState", value: function value() {} }, { key: "_layout", value: function value() {} }, { key: "showTooltip", value: function value() {} }, { key: "init", value: function value() {
          this.d3vis || (this.d3vis = this.d3.select(this._element).append("svg:svg")), this.d3vis.attr("width", this.visualizationWidth).attr("height", this.visualizationHeight).attr("viewBox", "0 0 " + this.dimH + ", " + this.dimW);
        } }, { key: "clear", value: function value() {
          this._element.innerHTML = null;
        } }, { key: "expandAll", value: function value() {
          if (this.vis) {
            var e = this;this.vis.selectAll("g").each(function () {
              var t = e.d3.select(this);t.datum().parent && t.datum().parent.parent && t.datum().parent.parent.parent && t.attr("visibility", "visible");
            });
          }
        } }, { key: "collapseAll", value: function value() {
          if (this.vis) {
            var e = this;this.vis.selectAll("g").each(function () {
              var t = e.d3.select(this);null !== t.datum().parent && null !== t.datum().parent.parent && null !== t.datum().parent.parent.parent && t.attr("visibility", "hidden");
            });
          }
        } }, { key: "render", value: function value() {
          this.renderer.render(this), this.updateText();
        } }, { key: "updateText", value: function value() {
          if (this.vis) {
            var e = this.data ? this.data.tree ? this.data.tree : this.data : null;if (e && e.children && e.children.length) {
              var t = this;e.children.forEach(function (e) {
                t._childElements.parts[t.getUniqueId(e, "sector_label_path")] && t._childElements.parts[t.getUniqueId(e, "sector_label_path")].text(t.getNameLabelText(e)), e.children.forEach(function (e) {
                  t._childElements.parts[t.getUniqueId(e, "sector_label_path")] && t._childElements.parts[t.getUniqueId(e, "sector_label_path")].text(e.name), t._childElements.parts[t.getUniqueId(e, "sector_label_number_path")] && t._childElements.parts[t.getUniqueId(e, "sector_label_number_path")].text(t.getScoreLabelText(e)), e.children.forEach(function (e) {
                    "personality" === e.category ? (t._childElements.parts[t.getUniqueId(e, "sector_label_path")] && t._childElements.parts[t.getUniqueId(e, "sector_label_path")].text(e.name), t._childElements.parts[t.getUniqueId(e, "sector_label_number_path")] && t._childElements.parts[t.getUniqueId(e, "sector_label_number_path")].text(t.getScoreLabelText(e)), e.children.forEach(function (e) {
                      t._childElements.parts[t.getUniqueId(e, "sector_leaf_text")] && t._childElements.parts[t.getUniqueId(e, "sector_leaf_text")].text(t.getNameLabelText(e));
                    })) : t._childElements.parts[t.getUniqueId(e, "sector_leaf_text")] && t._childElements.parts[t.getUniqueId(e, "sector_leaf_text")].text(t.getNameLabelText(e));
                  });
                });
              }), this.updateLabelLayout();
            }
          }
        } }, { key: "updateLabelLayout", value: function value() {
          this.updateLabelLayoutWithClass(".sector_label_path"), this.updateLabelLayoutWithClass(".sector_label_number_path");
        } }, { key: "updateLabelLayoutWithClass", value: function value(e) {
          if (this.d3vis) {
            var t = this;this.d3vis.selectAll(e).each(function (e) {
              var n = t.d3.select(this),
                  i = n.node(),
                  r = n.text();if (r && 0 < r.length) {
                var s = t.d3.select(this).attr("position-in-sector"),
                    a = "center" === s ? .5 : "outer" === s ? 2 / 3 : 1 / 3,
                    o = "v3" === t._d3version ? (e.y + e.dy * a) * e.dx : (e.y0 + (e.y1 - e.y0) * a) * (e.x1 - e.x0),
                    c = i.getComputedTextLength(),
                    u = t.d3.select(this).attr("font-size") * o / c;u > 16 / (.4 * e.depth + .6) && (u = 16 / (.4 * e.depth + .6)), t.d3.select(this).attr("font-size", u), t.d3.select(this).attr("startOffset", (o - i.getComputedTextLength()) / 2);
              }
            });
          }
        } }, { key: "updateColors", value: function value() {
          var e = this;this.d3vis.selectAll(".arc2").each(function (t) {
            e.updatePartColor(t);
          }), this.d3vis.selectAll(".arc1").each(function (t) {
            e.updatePartColor(t);
          }), this.d3vis.selectAll("._bar").each(function (t) {
            e.updatePartColor(t);
          });
        } }, { key: "updatePartColor", value: function value(e) {
          var t = this.getColors(e),
              n = 2 > e.depth ? this.d3.color(t.innerRingLightColor) : this.d3.color(t.innerRingDarkColor),
              i = n;e.children ? (this._childElements.parts[this.getUniqueId(e, "arc1")].style("stroke", i).style("fill", n), this._childElements.parts[this.getUniqueId(e, "arc2")].style("stroke", i).style("fill", n).style("fill-opacity", .15)) : this._childElements.parts[this.getUniqueId(e, "bar")].style("stroke", "#EEE").style("fill", this.d3.color(t.outerRingColor));
        } }, { key: "addImage", value: function value(e) {
          if (this.vis && e) {
            if (!this.hasImage()) {
              this._childElements.icondefs = this.vis.append("defs");var t = r(this.dimW, this.dimH) / 16.58,
                  n = 2 * t,
                  i = "user_icon_" + this.id,
                  s = this._childElements.icondefs.append("pattern");s.attr("id", i).attr("height", 1).attr("width", 1).attr("patternUnits", "objectBoundingBox"), this._childElements.image = s.append("image"), this._childElements.image.attr("width", n).attr("height", n).attr("x", 0).attr("y", 0).attr("opacity", 1).on("dblclick.zoom", null), this._childElements.circle = this.vis.append("circle"), this._childElements.circle.attr("r", t).attr("stroke-width", 0).attr("fill", "url(#" + i + ")");
            }this.changeImage(e);
          } else this.hasImage() && this.removeImage();
        } }, { key: "changeImage", value: function value(e) {
          e ? this.hasImage() ? this._childElements.image.attr("xlink:href", e) : this.addImage(e) : this.removeImage();
        } }, { key: "removeImage", value: function value() {
          this._childElements.icondefs && (this._childElements.icondefs.remove(), this._childElements.icondefs = null, this._childElements.image = null), this._childElements.circle && (this._childElements.circle.remove(), this._childElements.circle = null);
        } }, { key: "hasImage", value: function value() {
          return null !== this._childElements.icondefs;
        } }, { key: "getScore", value: function value(e) {
          var t = o.getValue(e, "score"),
              n = o.getValue(e, "name");return void 0 === t || void 0 === n ? t = 0 : null === t ? t = .99 : 1 <= t ? t = .99 : -1 >= t && (t = -.99), t;
        } }, { key: "getScoreLabelText", value: function value(e) {
          var t = o.getValue(e, "score");return null === t || isNaN(t) ? "" : " (" + (100 * this.getScore(e)).toFixed(0) + "%)";
        } }, { key: "getNameLabelText", value: function value(e) {
          var t = o.getValue(e, "name");if (!t) return "";var n = this.getScore(e),
              r = o.getValue(e, "id"),
              s = o.getValue(e, "category"),
              a = t;return "sbh_dom" === r || "sbh_parent" === r ? a = t : "values" === s ? a = t + ("NaN" === (100 * n).toFixed(0) || isNaN(n) ? "" : " (" + (100 * n).toFixed(0) + "%)") : (a = t + ("NaN" === (100 * n).toFixed(0) || isNaN(n) ? "" : " (" + (100 * n).toFixed(0) + "%)"), 0 == i(100 * parseFloat(n)) / 100 && (a = t)), a;
        } }, { key: "getUniqueId", value: function value(e, t) {
          var n = this.id + "_" + o.getValue(e, "id");return t && (n += "." + t), n;
        } }, { key: "getColors", value: function value(e) {
          return e.coloridx = 1 === e.depth || 0 === e.depth ? o.getValue(e, "id") : e.parent.coloridx, "personality" === e.coloridx ? { innerRingDarkColor: this._colors.traits_dark, innerRingLightColor: this._colors.traits_light, outerRingColor: this._colors.facet } : "needs" === e.coloridx ? { innerRingDarkColor: this._colors.needs_dark, innerRingLightColor: this._colors.needs_light, outerRingColor: this._colors.need } : "values" === e.coloridx ? { innerRingDarkColor: this._colors.values_dark, innerRingLightColor: this._colors.values_light, outerRingColor: this._colors.value } : { innerRingDarkColor: this._colors.traits_dark, innerRingLightColor: this._colors.traits_light, outerRingColor: this._colors.facet };
        } }, { key: "createParts", value: function value(e, n) {
          var i,
              r = this,
              s = o.isLocatedBottom(n);n.children ? (i = this.getUniqueId(n, "arc1"), !this._childElements.parts[i] && (this._childElements.parts[i] = e.append("path").attr("class", "arc1")), i = this.getUniqueId(n, "arc2"), !this._childElements.parts[i] && (this._childElements.parts[i] = e.append("path").attr("class", "arc2")), i = this.getUniqueId(n, "arc_for_label"), !this._childElements.parts[i] && (this._childElements.parts[i] = e.append("path").attr("class", "arc_for_label").attr("id", function (e) {
            return r.getUniqueId(e, "arc_for_label");
          }).style("stroke-opacity", 0).style("fill-opacity", 0)), i = this.getUniqueId(n, "sector_label_path"), !this._childElements.parts[i] && (this._childElements.parts[i] = e.append("text").attr("class", "sector_label").attr("visibility", function (e) {
            return 1 === e.depth ? "visible" : null;
          }).attr("class", "sector_nonleaf_text").append("textPath").attr("class", "sector_label_path").attr("position-in-sector", 1 >= n.depth ? "center" : s ? "inner" : "outer").attr("font-size", function (e) {
            return 30 / t(e.depth + 1);
          }).attr("xlink:href", function (e) {
            return "#" + r.getUniqueId(e, "arc_for_label");
          })), 1 < n.depth && (i = this.getUniqueId(n, "arc_for_label_number"), !this._childElements.parts[i] && (this._childElements.parts[i] = e.append("path").attr("class", "arc_for_label_number").attr("id", function (e) {
            return r.getUniqueId(e, "arc_for_label_number");
          }).style("stroke-opacity", 0).style("fill-opacity", 0)), i = this.getUniqueId(n, "sector_label_number_path"), !this._childElements.parts[i] && (this._childElements.parts[i] = e.append("text").attr("class", "sector_label_number ").attr("visibility", function (e) {
            return 1 === e.depth ? "visible" : null;
          }).attr("class", "sector_nonleaf_text").append("textPath").attr("class", "sector_label_number_path").attr("position-in-sector", s ? "outer" : "inner").attr("font-size", function () {
            return 10;
          }).attr("xlink:href", function (e) {
            return "#" + r.getUniqueId(e, "arc_for_label_number");
          })))) : (i = this.getUniqueId(n, "bar"), !this._childElements.parts[i] && (this._childElements.parts[i] = e.append("path").attr("class", "_bar")), i = this.getUniqueId(n, "sector_leaf_text"), !this._childElements.parts[i] && (this._childElements.parts[i] = e.append("text").attr("class", "sector_leaf_text")));
        } }]), e;
    }();e.exports = c;
  }, function (e, t, n) {
    "use strict";

    var i = function () {
      function e(e, t) {
        for (var n, i = 0; i < t.length; i++) {
          (n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    }(),
        r = n(7),
        s = function () {
      function e(t, n, i, r) {
        (function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, e), this.D3PersonalityProfile = n, this.ChartRenderer = i, this._options = t, this._selector = t.selector, this._element = t.element, this._locale = t.locale, this._colors = t.colors, this._imageUrl = "", this._profile = null, this._widget = null, this._traitNames = new r({ locale: this._locale });
      }return i(e, [{ key: "setLocale", value: function value(e) {
          var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];if (this._locale !== e && (this._locale = e, this._traitNames.setLocale(e), this._profile && this._widget)) {
            var n = new this.D3PersonalityProfile(this._profile, this._traitNames);this._widget.setData(n.d3Json()), t && this._widget.updateText();
          }
        } }, { key: "setImage", value: function value(e) {
          var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];this._imageUrl !== e && (this._imageUrl = e, this._widget && t && this._widget.changeImage(e));
        } }, { key: "setProfile", value: function value(e) {
          var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];if (this._profile !== e) {
            if (this._profile = e, this._widget) if (this._profile) {
              var n = new this.D3PersonalityProfile(this._profile, this._traitNames);this._widget.setData(n.d3Json());
            } else this._widget.clearData();
          } else if (this._widget && this._profile && !this._widget.hasData()) {
            var i = new this.D3PersonalityProfile(this._profile, this._traitNames);this._widget.setData(i.d3Json());
          }t && this.render();
        } }, { key: "setColors", value: function value(e) {
          var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];e && (this._colors = e, this._widget && (this._widget.setColors(this._colors), t && this._widget.updateColors()));
        } }, { key: "render", value: function value() {
          this._widget ? (this._widget.init(), this._widget.render(), this._widget.updateText(), this._widget.updateColors(), this._widget.expandAll(), this._imageUrl && this._widget.addImage(this._imageUrl)) : this.show();
        } }, { key: "show", value: function value(e, t, n) {
          if (!this._widget) {
            this._widget = new r(this._options, this.ChartRenderer);var i = this._element || document.querySelector(this._selector);this._widget.setElement(i);
          }this._widget.clear(), this.setProfile(e || this._profile, !1), this.setImage(t || this._imageUrl, !1), this.setColors(n || this._colors, !1), this.render();
        } }]), e;
    }();e.exports = s;
  }, function (e) {
    e.exports = { big5_agreeableness: "Amabilidade", big5_conscientiousness: "Escrupulosidade", big5_extraversion: "Extroversão", big5_neuroticism: "Faixa emocional", big5_openness: "Abertura", facet_achievement_striving: "Esforço para realização", facet_activity_level: "Nível de atividade", facet_adventurousness: "Desejo de aventura", facet_altruism: "Altruísmo", facet_anger: "Furioso", facet_anxiety: "Propenso a se preocupar", facet_artistic_interests: "Interesses artísticos", facet_assertiveness: "Assertividade", facet_cautiousness: "Cautela", facet_cheerfulness: "Bom Humor", facet_cooperation: "Cooperação", facet_depression: "Melancolia", facet_dutifulness: "Respeito", facet_emotionality: "Emotividade", facet_excitement_seeking: "Busca de Empolgação", facet_friendliness: "Extrovertido", facet_gregariousness: "Gregarismo", facet_imagination: "Imaginação", facet_immoderation: "Imoderação", facet_intellect: "Intelecto", facet_liberalism: "Desafio à autoridade", facet_modesty: "Modéstia", facet_morality: "Determinação", facet_orderliness: "Regularidade", facet_self_consciousness: "Autoconsciência", facet_self_discipline: "Autodisciplina", facet_self_efficacy: "Autoeficiência", facet_sympathy: "Simpatia", facet_trust: "Confiança", facet_vulnerability: "Suscetível ao stress", need_challenge: "Desafio", need_closeness: "Retraimento", need_curiosity: "Curiosidade", need_excitement: "Empolgação", need_harmony: "Harmonia", need_ideal: "Ideal", need_liberty: "Liberdade", need_love: "Amor", need_practicality: "Natureza prática", need_self_expression: "Expressão da própria personalidade", need_stability: "Estabilidade", need_structure: "Estrutura", value_conservation: "Conservação", value_hedonism: "Hedonismo", value_openness_to_change: "Abertura à mudança", value_self_enhancement: "Autocrescimento", value_self_transcendence: "Autotranscendência" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(9);
  }, function (e) {
    e.exports = { big5_agreeableness: "Amabilité", big5_conscientiousness: "Tempérament consciencieux", big5_extraversion: "Extraversion", big5_neuroticism: "Portée émotionnelle", big5_openness: "Ouverture", facet_achievement_striving: "Persévérance", facet_activity_level: "Niveau d'activité", facet_adventurousness: "Intrépidité", facet_altruism: "Altruisme", facet_anger: "Passion", facet_anxiety: "Prompt à s'inquiéter", facet_artistic_interests: "Intérêt pour l'art", facet_assertiveness: "Assertivité", facet_cautiousness: "Circonspection", facet_cheerfulness: "Gaieté", facet_cooperation: "Coopération", facet_depression: "Mélancolie", facet_dutifulness: "Sens du devoir", facet_emotionality: "Emotionnalité", facet_excitement_seeking: "Recherche de sensations", facet_friendliness: "Extraversion", facet_gregariousness: "Convivialité", facet_imagination: "Imagination", facet_immoderation: "Immodération", facet_intellect: "Intellect", facet_liberalism: "Rebelle", facet_modesty: "Modestie", facet_morality: "Intransigeance", facet_orderliness: "Ordre", facet_self_consciousness: "Susceptibilité", facet_self_discipline: "Autodiscipline", facet_self_efficacy: "Efficacité personnelle", facet_sympathy: "Empathie", facet_trust: "Confiance", facet_vulnerability: "Sujet au stress", need_challenge: "Combativité", need_closeness: "Comportement clanique", need_curiosity: "Curiosité", need_excitement: "Enthousiasme", need_harmony: "Harmonie", need_ideal: "Idéal", need_liberty: "Liberté", need_love: "Amour", need_practicality: "Pragmatisme", need_self_expression: "Extériorisation", need_stability: "Stabilité", need_structure: "Structure", value_conservation: "Conservatisme", value_hedonism: "Hédonisme", value_openness_to_change: "Ouverture au changement", value_self_enhancement: "Ambition personnelle", value_self_transcendence: "Dépassement de soi" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(11);
  }, function (e) {
    e.exports = { big5_agreeableness: "親和性", big5_conscientiousness: "盡責性", big5_extraversion: "外向性", big5_neuroticism: "情緒範圍", big5_openness: "開放性", facet_achievement_striving: "成就驅力", facet_activity_level: "活動水準", facet_adventurousness: "冒險", facet_altruism: "利他", facet_anger: "暴躁", facet_anxiety: "容易煩惱", facet_artistic_interests: "審美", facet_assertiveness: "獨斷", facet_cautiousness: "謹慎", facet_cheerfulness: "快樂", facet_cooperation: "合作", facet_depression: "憂鬱", facet_dutifulness: "守分", facet_emotionality: "情緒豐富", facet_excitement_seeking: "追求刺激", facet_friendliness: "外向", facet_gregariousness: "合群", facet_imagination: "想像", facet_immoderation: "不知節制", facet_intellect: "智能", facet_liberalism: "挑戰權威", facet_modesty: "謙遜", facet_morality: "不妥協", facet_orderliness: "規律", facet_self_consciousness: "自我意識", facet_self_discipline: "自律", facet_self_efficacy: "自我效能", facet_sympathy: "同情心", facet_trust: "信任", facet_vulnerability: "抗壓性低", need_challenge: "挑戰", need_closeness: "封閉", need_curiosity: "好奇心", need_excitement: "興奮", need_harmony: "和諧", need_ideal: "理想", need_liberty: "自由", need_love: "愛", need_practicality: "務實", need_self_expression: "自我表達", need_stability: "穩定性", need_structure: "結構", value_conservation: "保守", value_hedonism: "享樂主義", value_openness_to_change: "接受改變的開放態度", value_self_enhancement: "自我提升", value_self_transcendence: "自我超越" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(13);
  }, function (e) {
    e.exports = { big5_agreeableness: "宜人性", big5_conscientiousness: "尽责性", big5_extraversion: "外向性", big5_neuroticism: "情感范围", big5_openness: "开放性", facet_achievement_striving: "追求成就", facet_activity_level: "活力程度", facet_adventurousness: "冒险", facet_altruism: "利他", facet_anger: "暴躁", facet_anxiety: "易焦虑", facet_artistic_interests: "审美", facet_assertiveness: "独断性", facet_cautiousness: "审慎", facet_cheerfulness: "热情", facet_cooperation: "合作", facet_depression: "忧郁", facet_dutifulness: "责任感", facet_emotionality: "情感丰富", facet_excitement_seeking: "寻求刺激", facet_friendliness: "开朗", facet_gregariousness: "合群性", facet_imagination: "想象力", facet_immoderation: "无节制", facet_intellect: "智力", facet_liberalism: "挑战权威", facet_modesty: "谦逊", facet_morality: "坚定", facet_orderliness: "条理性", facet_self_consciousness: "自我意识", facet_self_discipline: "自律", facet_self_efficacy: "自我效能", facet_sympathy: "同情心", facet_trust: "信任", facet_vulnerability: "易受压力", need_challenge: "挑战", need_closeness: "亲密", need_curiosity: "好奇心", need_excitement: "刺激", need_harmony: "和谐", need_ideal: "理想", need_liberty: "自由", need_love: "爱", need_practicality: "实用", need_self_expression: "自我表现", need_stability: "稳定性", need_structure: "结构", value_conservation: "保守", value_hedonism: "享乐主义", value_openness_to_change: "对改变持开放态度", value_self_enhancement: "自我提高", value_self_transcendence: "自我超越" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(15);
  }, function (e) {
    e.exports = { big5_agreeableness: "친화성", big5_conscientiousness: "성실성", big5_extraversion: "외향성", big5_neuroticism: "감정의 기복", big5_openness: "개방성", facet_achievement_striving: "성취 추구", facet_activity_level: "활동 레벨", facet_adventurousness: "모험성", facet_altruism: "이타성", facet_anger: "급한", facet_anxiety: "걱정이 많은", facet_artistic_interests: "예술적 흥미", facet_assertiveness: "자신만만함", facet_cautiousness: "신중함", facet_cheerfulness: "쾌활", facet_cooperation: "협동성", facet_depression: "우울한", facet_dutifulness: "순종성", facet_emotionality: "정서성", facet_excitement_seeking: "자극 탐색", facet_friendliness: "외향적", facet_gregariousness: "사교적", facet_imagination: "상상력", facet_immoderation: "극단적인", facet_intellect: "지력", facet_liberalism: "권력에 저항", facet_modesty: "겸손함", facet_morality: "비타협성", facet_orderliness: "질서 정연함", facet_self_consciousness: "자의식이 강한", facet_self_discipline: "자기 훈련", facet_self_efficacy: "자기 효능감", facet_sympathy: "동정", facet_trust: "신뢰", facet_vulnerability: "스트레스에 민감한", need_challenge: "도전", need_closeness: "친밀감", need_curiosity: "호기심", need_excitement: "흥미", need_harmony: "조화", need_ideal: "이상", need_liberty: "자유", need_love: "사랑", need_practicality: "실용성", need_self_expression: "자기 표현", need_stability: "안정", need_structure: "구조", value_conservation: "보수성", value_hedonism: "쾌락주의", value_openness_to_change: "변화에 대한 개방성", value_self_enhancement: "자기고양", value_self_transcendence: "자기초월" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(17);
  }, function (e) {
    e.exports = { big5_agreeableness: "Angenehme Wesenszüge", big5_conscientiousness: "Pflichtbewusstsein", big5_extraversion: "Extraversion", big5_neuroticism: "Emotionaler Bereich", big5_openness: "Offen", facet_achievement_striving: "Nach Zielen strebend", facet_activity_level: "Aktivitätsstufe", facet_adventurousness: "Abenteuerlustig", facet_altruism: "Altruistisch", facet_anger: "Hitzig", facet_anxiety: "macht sich leicht Sorgen", facet_artistic_interests: "Künstlerische Interessen", facet_assertiveness: "Durchsetzungsvermögen", facet_cautiousness: "Vorsichtig", facet_cheerfulness: "Fröhlich", facet_cooperation: "Kooperativ", facet_depression: "Melancholisch", facet_dutifulness: "Pflichtbewusst", facet_emotionality: "Emotionalität", facet_excitement_seeking: "Nach Aufregungen suchend", facet_friendliness: "Gerne ausgehend", facet_gregariousness: "Gesellig", facet_imagination: "Phantasie", facet_immoderation: "Maßlos", facet_intellect: "Intellekt", facet_liberalism: "Aufmüpfig", facet_modesty: "Bescheiden", facet_morality: "Kompromisslos", facet_orderliness: "Ordnungsliebend", facet_self_consciousness: "Selbstbewusst", facet_self_discipline: "Selbstdiszipliniert", facet_self_efficacy: "Selbsteffizient", facet_sympathy: "Sympathisch", facet_trust: "Vertrauenswürdig", facet_vulnerability: "Anfällig für Stress", need_challenge: "Herausforderung", need_closeness: "Verschwiegenheit", need_curiosity: "Neugier", need_excitement: "Aufregung", need_harmony: "Harmonie", need_ideal: "Ideal", need_liberty: "Freiheit", need_love: "Liebe", need_practicality: "Zweckmäßigkeit", need_self_expression: "Selbstdarstellung", need_stability: "Stabilität", need_structure: "Struktur", value_conservation: "Konservierung", value_hedonism: "Hedonismus", value_openness_to_change: "Offen für Veränderungen", value_self_enhancement: "Selbstverbesserung", value_self_transcendence: "Selbsttranszendenz" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(19);
  }, function (e) {
    e.exports = { big5_agreeableness: "Disponibilità", big5_conscientiousness: "Scrupolosità", big5_extraversion: "Estroversione", big5_neuroticism: "Gamma emotiva", big5_openness: "Apertura", facet_achievement_striving: "Propensione al raggiungimento dello scopo", facet_activity_level: "Livello di attività", facet_adventurousness: "Spirito d'avventura", facet_altruism: "Altruismo", facet_anger: "Irascibile", facet_anxiety: "Incline alla preoccupazione", facet_artistic_interests: "Interessi artistici", facet_assertiveness: "Assertività", facet_cautiousness: "Prudenza", facet_cheerfulness: "Positività", facet_cooperation: "Cooperazione", facet_depression: "Malinconico", facet_dutifulness: "Responsabilità", facet_emotionality: "Emotività", facet_excitement_seeking: "Desiderio di stimoli", facet_friendliness: "Cordialità", facet_gregariousness: "Socialità", facet_imagination: "Immaginazione", facet_immoderation: "Smodato", facet_intellect: "Curiosità intellettuale", facet_liberalism: "Anticonvenzionale", facet_modesty: "Modestia", facet_morality: "Irremovibilità", facet_orderliness: "Accuratezza", facet_self_consciousness: "Autocosciente", facet_self_discipline: "Autodisciplina", facet_self_efficacy: "Sicurezza di sé", facet_sympathy: "Compartecipazione", facet_trust: "Fiducia", facet_vulnerability: "Suscettibile allo stress", need_challenge: "Stimolo", need_closeness: "Vicinanza", need_curiosity: "Curiosità", need_excitement: "Eccitazione", need_harmony: "Armonia", need_ideal: "Ideale", need_liberty: "Libertà", need_love: "Amore", need_practicality: "Pragmatismo", need_self_expression: "Espressione della personalità", need_stability: "Stabilità", need_structure: "Struttura", value_conservation: "Tradizionalismo", value_hedonism: "Edonismo", value_openness_to_change: "Apertura al cambiamento", value_self_enhancement: "Successo personale", value_self_transcendence: "Impegno sociale" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(21);
  }, function (e) {
    e.exports = { big5_agreeableness: "الوئام", big5_conscientiousness: "الاجتهاد", big5_extraversion: "الانبساط", big5_neuroticism: "مدى العاطفية", big5_openness: "الانفتاح", facet_achievement_striving: "السعي للانجاز", facet_activity_level: "مستوى النشاط", facet_adventurousness: "المغامرة", facet_altruism: "الايثار", facet_anger: "متقد", facet_anxiety: "عرضة للقلق", facet_artistic_interests: "الهوايات  الفنية", facet_assertiveness: "الاصرار", facet_cautiousness: "الحذر", facet_cheerfulness: "البهجة", facet_cooperation: "التعاون", facet_depression: "كئيب", facet_dutifulness: "الطاعة", facet_emotionality: "الانفعال", facet_excitement_seeking: "البحث عن الاثارة", facet_friendliness: "غير متحفظ", facet_gregariousness: "الألفة", facet_imagination: "الخيال", facet_immoderation: "الغلو", facet_intellect: "الذكاء", facet_liberalism: "تحدي-السلطة", facet_modesty: "التواضع", facet_morality: "العند", facet_orderliness: "النظام", facet_self_consciousness: "الوعي الذاتي", facet_self_discipline: "الانضباط الذاتي", facet_self_efficacy: "كفاءة الذات", facet_sympathy: "التعاطف", facet_trust: "الثقة", facet_vulnerability: "عرضة للتوتر", need_challenge: "التحدي", need_closeness: "التقارب", need_curiosity: "الفضول", need_excitement: "الاثارة", need_harmony: "الانسجام", need_ideal: "المثالية", need_liberty: "الحرية", need_love: "الحب", need_practicality: "العملية", need_self_expression: "التعبير عن الذات", need_stability: "الثبات", need_structure: "الانتظام", value_conservation: "المحافظة", value_hedonism: "التلذذ", value_openness_to_change: "الانفتاح  على  التغيير", value_self_enhancement: "تعزيز الذات", value_self_transcendence: "تنزيه الذات" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(23);
  }, function (e) {
    e.exports = { big5_agreeableness: "協調性", big5_conscientiousness: "誠実性", big5_extraversion: "外向性", big5_neuroticism: "感情起伏", big5_openness: "知的好奇心", facet_achievement_striving: "達成努力", facet_activity_level: "活発度", facet_adventurousness: "大胆性", facet_altruism: "利他主義", facet_anger: "激情的", facet_anxiety: "心配性", facet_artistic_interests: "芸術的関心度", facet_assertiveness: "自己主張", facet_cautiousness: "注意深さ", facet_cheerfulness: "明朗性", facet_cooperation: "協同性", facet_depression: "悲観的", facet_dutifulness: "忠実さ", facet_emotionality: "情動性", facet_excitement_seeking: "刺激希求性", facet_friendliness: "友好性", facet_gregariousness: "社交性", facet_imagination: "想像力", facet_immoderation: "利己的", facet_intellect: "思考力", facet_liberalism: "現状打破", facet_modesty: "謙虚さ", facet_morality: "強硬さ", facet_orderliness: "秩序性", facet_self_consciousness: "自意識過剰", facet_self_discipline: "自制力", facet_self_efficacy: "自己効力感", facet_sympathy: "共感度", facet_trust: "信用度", facet_vulnerability: "低ストレス耐性", need_challenge: "挑戦", need_closeness: "親密", need_curiosity: "好奇心", need_excitement: "興奮", need_harmony: "調和", need_ideal: "理想", need_liberty: "自由主義", need_love: "社会性", need_practicality: "実用主義", need_self_expression: "自己表現", need_stability: "安定性", need_structure: "仕組", value_conservation: "現状維持", value_hedonism: "快楽主義", value_openness_to_change: "変化許容性", value_self_enhancement: "自己増進", value_self_transcendence: "自己超越" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(25);
  }, function (e) {
    e.exports = { big5_agreeableness: "Amabilidad", big5_conscientiousness: "Responsabilidad", big5_extraversion: "Extroversión", big5_neuroticism: "Rango emocional", big5_openness: "Apertura a experiencias", facet_achievement_striving: "Necesidad de éxito", facet_activity_level: "Nivel de actividad", facet_adventurousness: "Audacia", facet_altruism: "Altruismo", facet_anger: "Vehemencia", facet_anxiety: "Tendencia a la preocupación", facet_artistic_interests: "Intereses artísticos", facet_assertiveness: "Seguridad en uno mismo", facet_cautiousness: "Cautela", facet_cheerfulness: "Alegría", facet_cooperation: "Cooperación", facet_depression: "Melancolía", facet_dutifulness: "Obediencia", facet_emotionality: "Emocionalidad", facet_excitement_seeking: "Búsqueda de emociones", facet_friendliness: "Simpatía", facet_gregariousness: "Sociabilidad", facet_imagination: "Imaginación", facet_immoderation: "Desmesura", facet_intellect: "Intelecto", facet_liberalism: "Desafío a la autoridad", facet_modesty: "Modestia", facet_morality: "Intransigencia", facet_orderliness: "Disciplina", facet_self_consciousness: "Timidez", facet_self_discipline: "Autodisciplina", facet_self_efficacy: "Autoeficacia", facet_sympathy: "Compasión", facet_trust: "Confianza", facet_vulnerability: "Susceptibilidad a la tensión", need_challenge: "Desafío", need_closeness: "Familiaridad", need_curiosity: "Curiosidad", need_excitement: "Entusiasmo", need_harmony: "Armonía", need_ideal: "Ideal", need_liberty: "Libertad", need_love: "Amor", need_practicality: "Practicidad", need_self_expression: "Autoexpresión", need_stability: "Estabilidad", need_structure: "Estructura", value_conservation: "Conservación", value_hedonism: "Hedonismo", value_openness_to_change: "Apertura al cambio", value_self_enhancement: "Superación personal", value_self_transcendence: "Autotranscendencia" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(27);
  }, function (e) {
    e.exports = { big5_agreeableness: "Agreeableness", facet_altruism: "Altruism", facet_cooperation: "Cooperation", facet_modesty: "Modesty", facet_morality: "Uncompromising", facet_sympathy: "Sympathy", facet_trust: "Trust", big5_conscientiousness: "Conscientiousness", facet_achievement_striving: "Achievement striving", facet_cautiousness: "Cautiousness", facet_dutifulness: "Dutifulness", facet_orderliness: "Orderliness", facet_self_discipline: "Self-discipline", facet_self_efficacy: "Self-efficacy", big5_extraversion: "Extraversion", facet_activity_level: "Activity level", facet_assertiveness: "Assertiveness", facet_cheerfulness: "Cheerfulness", facet_excitement_seeking: "Excitement-seeking", facet_friendliness: "Outgoing", facet_gregariousness: "Gregariousness", big5_neuroticism: "Emotional range", facet_anger: "Fiery", facet_anxiety: "Prone to worry", facet_depression: "Melancholy", facet_immoderation: "Immoderation", facet_self_consciousness: "Self-consciousness", facet_vulnerability: "Susceptible to stress", big5_openness: "Openness", facet_adventurousness: "Adventurousness", facet_artistic_interests: "Artistic interests", facet_emotionality: "Emotionality", facet_imagination: "Imagination", facet_intellect: "Intellect", facet_liberalism: "Authority-challenging", need_liberty: "Liberty", need_ideal: "Ideal", need_love: "Love", need_practicality: "Practicality", need_self_expression: "Self-expression", need_stability: "Stability", need_structure: "Structure", need_challenge: "Challenge", need_closeness: "Closeness", need_curiosity: "Curiosity", need_excitement: "Excitement", need_harmony: "Harmony", value_conservation: "Conservation", value_hedonism: "Hedonism", value_openness_to_change: "Openness to change", value_self_enhancement: "Self-enhancement", value_self_transcendence: "Self-transcendence" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(29);
  }, function (e, t, n) {
    "use strict";

    e.exports = { en: n(30), es: n(28), ja: n(26), ar: n(24), it: n(22), de: n(20), ko: n(18), zh: n(16), "zh-tw": n(14), fr: n(12), "pt-br": n(10) };
  }, function (e, t, n) {
    "use strict";

    var i = n(31);e.exports = function () {
      function _class2(e) {
        _classCallCheck(this, _class2);

        this._locale = function (e, t) {
          return -1 !== Object.keys(e || {}).indexOf(t);
        }(i, e) ? e : "en", this._dictionary = i[this._locale];
      }

      _createClass(_class2, [{
        key: "data",
        value: function data() {
          return _extends({}, this._dictionary);
        }
      }]);

      return _class2;
    }();
  }, function (e, t, n) {
    "use strict";

    var i = n(0),
        r = n(32),
        s = n(1),
        a = { locale: "en", version: "v3" };e.exports = function (_s) {
      _inherits(_class3, _s);

      function _class3(e) {
        _classCallCheck(this, _class3);

        return _possibleConstructorReturn(this, (_class3.__proto__ || Object.getPrototypeOf(_class3)).call(this, _extends({}, a, i(e, ["locale"])), r));
      }

      _createClass(_class3, [{
        key: "defaultOptions",
        value: function defaultOptions() {
          return a;
        }
      }]);

      return _class3;
    }(s);
  }, function (e) {
    function t(e) {
      return !!e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
    }function n(e) {
      return null != e && (function (e) {
        return function (e) {
          var t = typeof e === "undefined" ? "undefined" : _typeof(e);return !!e && ("object" == t || "function" == t);
        }(e) && c.call(e) == i;
      }(e) ? u.test(a.call(e)) : t(e) && r.test(e));
    }var i = "[object Function]",
        r = /^\[object .+?Constructor\]$/,
        s = Object.prototype,
        a = Function.prototype.toString,
        o = s.hasOwnProperty,
        c = s.toString,
        u = RegExp("^" + a.call(o).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        l = function (e, t) {
      var i = null == e ? void 0 : e.isArray;return n(i) ? i : void 0;
    }(Array),
        h = 9007199254740991;e.exports = l || function (e) {
      return t(e) && function (e) {
        return "number" == typeof e && -1 < e && 0 == e % 1 && e <= h;
      }(e.length) && "[object Array]" == c.call(e);
    };
  }, function (e) {
    function t(e) {
      return null != e && function (e) {
        return "number" == typeof e && -1 < e && 0 == e % 1 && e <= n;
      }(e.length) && !function (e) {
        var t = function (e) {
          var t = typeof e === "undefined" ? "undefined" : _typeof(e);return !!e && ("object" == t || "function" == t);
        }(e) ? o.call(e) : "";return t == i || t == r;
      }(e);
    }var n = 9007199254740991,
        i = "[object Function]",
        r = "[object GeneratorFunction]",
        s = Object.prototype,
        a = s.hasOwnProperty,
        o = s.toString,
        c = s.propertyIsEnumerable;e.exports = function (e) {
      return function (e) {
        return function (e) {
          return !!e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
        }(e) && t(e);
      }(e) && a.call(e, "callee") && (!c.call(e, "callee") || "[object Arguments]" == o.call(e));
    };
  }, function (e) {
    function t(e) {
      return null != e && (function (e) {
        return function (e) {
          var t = typeof e === "undefined" ? "undefined" : _typeof(e);return !!e && ("object" == t || "function" == t);
        }(e) && o.call(e) == n;
      }(e) ? c.test(s.call(e)) : function (e) {
        return !!e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
      }(e) && i.test(e));
    }var n = "[object Function]",
        i = /^\[object .+?Constructor\]$/,
        r = Object.prototype,
        s = Function.prototype.toString,
        a = r.hasOwnProperty,
        o = r.toString,
        c = RegExp("^" + s.call(a).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");e.exports = function (e, n) {
      var i = null == e ? void 0 : e[n];return t(i) ? i : void 0;
    };
  }, function (e, t, n) {
    function i(e, t) {
      return e = "number" == typeof e || h.test(e) ? +e : -1, t = null == t ? d : t, -1 < e && 0 == e % 1 && e < t;
    }function r(e) {
      return "number" == typeof e && -1 < e && 0 == e % 1 && e <= d;
    }function s(e) {
      for (var t = o(e), n = t.length, s = n && e.length, a = !!s && r(s) && (l(e) || u(e)), c = -1, h = []; ++c < n;) {
        var _ = t[c];(a && i(_, s) || f.call(e, _)) && h.push(_);
      }return h;
    }function a(e) {
      var t = typeof e === "undefined" ? "undefined" : _typeof(e);return !!e && ("object" == t || "function" == t);
    }function o(e) {
      if (null == e) return [];a(e) || (e = Object(e));var t = e.length;t = t && r(t) && (l(e) || u(e)) && t || 0;for (var n = e.constructor, s = -1, o = "function" == typeof n && n.prototype === e, c = Array(t), h = 0 < t; ++s < t;) {
        c[s] = s + "";
      }for (var _ in e) {
        h && i(_, t) || "constructor" == _ && (o || !f.call(e, _)) || c.push(_);
      }return c;
    }var c = n(36),
        u = n(35),
        l = n(34),
        h = /^\d+$/,
        f = Object.prototype.hasOwnProperty,
        _ = c(Object, "keys"),
        d = 9007199254740991,
        p = function p(e) {
      return null == e ? void 0 : e.length;
    },
        y = _ ? function (e) {
      var t = null == e ? void 0 : e.constructor;return "function" == typeof t && t.prototype === e || "function" != typeof e && function (e) {
        return null != e && r(p(e));
      }(e) ? s(e) : a(e) ? _(e) : [];
    } : s;e.exports = y;
  }, function (e, t, n) {
    var i = n(37);e.exports = function (e) {
      e = function (e) {
        return function (e) {
          var t = typeof e === "undefined" ? "undefined" : _typeof(e);return !!e && ("object" == t || "function" == t);
        }(e) ? e : Object(e);
      }(e);for (var t = -1, n = i(e), r = n.length, s = Array(r); ++t < r;) {
        var a = n[t];s[t] = [a, e[a]];
      }return s;
    };
  }, function (e) {
    e.exports = { Agreeableness: "Amabilidade", Conscientiousness: "Escrupulosidade", Extraversion: "Extroversão", Neuroticism: "Faixa emocional", Openness: "Abertura", "Achievement striving": "Esforço para realização", "Activity level": "Nível de atividade", Adventurousness: "Desejo de aventura", Altruism: "Altruísmo", Anger: "Furioso", Anxiety: "Propenso a se preocupar", "Artistic interests": "Interesses artísticos", Assertiveness: "Assertividade", Cautiousness: "Cautela", Cheerfulness: "Bom Humor", Cooperation: "Cooperação", Depression: "Melancolia", Dutifulness: "Respeito", Emotionality: "Emotividade", "Excitement-seeking": "Busca de Empolgação", Friendliness: "Extrovertido", Gregariousness: "Gregarismo", Imagination: "Imaginação", Immoderation: "Imoderação", Intellect: "Intelecto", Liberalism: "Desafio à autoridade", Modesty: "Modéstia", Morality: "Determinação", Orderliness: "Regularidade", "Self-consciousness": "Autoconsciência", "Self-discipline": "Autodisciplina", "Self-efficacy": "Autoeficiência", Sympathy: "Simpatia", Trust: "Confiança", Vulnerability: "Suscetível ao stress", Challenge: "Desafio", Closeness: "Retraimento", Curiosity: "Curiosidade", Excitement: "Empolgação", Harmony: "Harmonia", Ideal: "Ideal", Liberty: "Liberdade", Love: "Amor", Practicality: "Natureza prática", "Self-expression": "Expressão da própria personalidade", Stability: "Estabilidade", Structure: "Estrutura", Conservation: "Conservação", Hedonism: "Hedonismo", "Openness to change": "Abertura à mudança", "Self-enhancement": "Autocrescimento", "Self-transcendence": "Autotranscendência" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(39);
  }, function (e) {
    e.exports = { Agreeableness: "Amabilité", Conscientiousness: "Tempérament consciencieux", Extraversion: "Extraversion", Neuroticism: "Portée émotionnelle", Openness: "Ouverture", "Achievement striving": "Persévérance", "Activity level": "Niveau d'activité", Adventurousness: "Intrépidité", Altruism: "Altruisme", Anger: "Passion", Anxiety: "Prompt à s'inquiéter", "Artistic interests": "Intérêt pour l'art", Assertiveness: "Assertivité", Cautiousness: "Circonspection", Cheerfulness: "Gaieté", Cooperation: "Coopération", Depression: "Mélancolie", Dutifulness: "Sens du devoir", Emotionality: "Emotionnalité", "Excitement-seeking": "Recherche de sensations", Friendliness: "Extraversion", Gregariousness: "Convivialité", Imagination: "Imagination", Immoderation: "Immodération", Intellect: "Intellect", Liberalism: "Rebelle", Modesty: "Modestie", Morality: "Intransigeance", Orderliness: "Ordre", "Self-consciousness": "Susceptibilité", "Self-discipline": "Autodiscipline", "Self-efficacy": "Efficacité personnelle", Sympathy: "Empathie", Trust: "Confiance", Vulnerability: "Sujet au stress", Challenge: "Combativité", Closeness: "Comportement clanique", Curiosity: "Curiosité", Excitement: "Enthousiasme", Harmony: "Harmonie", Ideal: "Idéal", Liberty: "Liberté", Love: "Amour", Practicality: "Pragmatisme", "Self-expression": "Extériorisation", Stability: "Stabilité", Structure: "Structure", Conservation: "Conservatisme", Hedonism: "Hédonisme", "Openness to change": "Ouverture au changement", "Self-enhancement": "Ambition personnelle", "Self-transcendence": "Dépassement de soi" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(41);
  }, function (e) {
    e.exports = { Agreeableness: "親和性", Conscientiousness: "盡責性", Extraversion: "外向性", Neuroticism: "情緒範圍", Openness: "開放性", "Achievement striving": "成就驅力", "Activity level": "活動水準", Adventurousness: "冒險", Altruism: "利他", Anger: "暴躁", Anxiety: "容易煩惱", "Artistic interests": "審美", Assertiveness: "獨斷", Cautiousness: "謹慎", Cheerfulness: "快樂", Cooperation: "合作", Depression: "憂鬱", Dutifulness: "守分", Emotionality: "情緒豐富", "Excitement-seeking": "追求刺激", Friendliness: "外向", Gregariousness: "合群", Imagination: "想像", Immoderation: "不知節制", Intellect: "智能", Liberalism: "挑戰權威", Modesty: "謙遜", Morality: "不妥協", Orderliness: "規律", "Self-consciousness": "自我意識", "Self-discipline": "自律", "Self-efficacy": "自我效能", Sympathy: "同情心", Trust: "信任", Vulnerability: "抗壓性低", Challenge: "挑戰", Closeness: "封閉", Curiosity: "好奇心", Excitement: "興奮", Harmony: "和諧", Ideal: "理想", Liberty: "自由", Love: "愛", Practicality: "務實", "Self-expression": "自我表達", Stability: "穩定性", Structure: "結構", Conservation: "保守", Hedonism: "享樂主義", "Openness to change": "接受改變的開放態度", "Self-enhancement": "自我提升", "Self-transcendence": "自我超越" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(43);
  }, function (e) {
    e.exports = { Agreeableness: "宜人性", Conscientiousness: "尽责性", Extraversion: "外向性", Neuroticism: "情感范围", Openness: "开放性", "Achievement striving": "追求成就", "Activity level": "活力程度", Adventurousness: "冒险", Altruism: "利他", Anger: "暴躁", Anxiety: "易焦虑", "Artistic interests": "审美", Assertiveness: "独断性", Cautiousness: "审慎", Cheerfulness: "热情", Cooperation: "合作", Depression: "忧郁", Dutifulness: "责任感", Emotionality: "情感丰富", "Excitement-seeking": "寻求刺激", Friendliness: "开朗", Gregariousness: "合群性", Imagination: "想象力", Immoderation: "无节制", Intellect: "智力", Liberalism: "挑战权威", Modesty: "谦逊", Morality: "坚定", Orderliness: "条理性", "Self-consciousness": "自我意识", "Self-discipline": "自律", "Self-efficacy": "自我效能", Sympathy: "同情心", Trust: "信任", Vulnerability: "易受压力", Challenge: "挑战", Closeness: "亲密", Curiosity: "好奇心", Excitement: "刺激", Harmony: "和谐", Ideal: "理想", Liberty: "自由", Love: "爱", Practicality: "实用", "Self-expression": "自我表现", Stability: "稳定性", Structure: "结构", Conservation: "保守", Hedonism: "享乐主义", "Openness to change": "对改变持开放态度", "Self-enhancement": "自我提高", "Self-transcendence": "自我超越" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(45);
  }, function (e) {
    e.exports = { Agreeableness: "친화성", Conscientiousness: "성실성", Extraversion: "외향성", Neuroticism: "감정의 기복", Openness: "개방성", "Achievement striving": "성취 추구", "Activity level": "활동 레벨", Adventurousness: "모험성", Altruism: "이타성", Anger: "급한", Anxiety: "걱정이 많은", "Artistic interests": "예술적 흥미", Assertiveness: "자신만만함", Cautiousness: "신중함", Cheerfulness: "쾌활", Cooperation: "협동성", Depression: "우울한", Dutifulness: "순종성", Emotionality: "정서성", "Excitement-seeking": "자극 탐색", Friendliness: "외향적", Gregariousness: "사교적", Imagination: "상상력", Immoderation: "극단적인", Intellect: "지력", Liberalism: "권력에 저항", Modesty: "겸손함", Morality: "비타협성", Orderliness: "질서 정연함", "Self-consciousness": "자의식이 강한", "Self-discipline": "자기 훈련", "Self-efficacy": "자기 효능감", Sympathy: "동정", Trust: "신뢰", Vulnerability: "스트레스에 민감한", Challenge: "도전", Closeness: "친밀감", Curiosity: "호기심", Excitement: "흥미", Harmony: "조화", Ideal: "이상", Liberty: "자유", Love: "사랑", Practicality: "실용성", "Self-expression": "자기 표현", Stability: "안정", Structure: "구조", Conservation: "보수성", Hedonism: "쾌락주의", "Openness to change": "변화에 대한 개방성", "Self-enhancement": "자기고양", "Self-transcendence": "자기초월" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(47);
  }, function (e) {
    e.exports = { Agreeableness: "Angenehme Wesenszüge", Conscientiousness: "Pflichtbewusstsein", Extraversion: "Extraversion", Neuroticism: "Emotionaler Bereich", Openness: "Offen", "Achievement striving": "Nach Zielen strebend", "Activity level": "Aktivitätsstufe", Adventurousness: "Abenteuerlustig", Altruism: "Altruistisch", Anger: "Hitzig", Anxiety: "macht sich leicht Sorgen", "Artistic interests": "Künstlerische Interessen", Assertiveness: "Durchsetzungsvermögen", Cautiousness: "Vorsichtig", Cheerfulness: "Fröhlich", Cooperation: "Kooperativ", Depression: "Melancholisch", Dutifulness: "Pflichtbewusst", Emotionality: "Emotionalität", "Excitement-seeking": "Nach Aufregungen suchend", Friendliness: "Gerne ausgehend", Gregariousness: "Gesellig", Imagination: "Phantasie", Immoderation: "Maßlos", Intellect: "Intellekt", Liberalism: "Aufmüpfig", Modesty: "Bescheiden", Morality: "Kompromisslos", Orderliness: "Ordnungsliebend", "Self-consciousness": "Selbstbewusst", "Self-discipline": "Selbstdiszipliniert", "Self-efficacy": "Selbsteffizient", Sympathy: "Sympathisch", Trust: "Vertrauenswürdig", Vulnerability: "Anfällig für Stress", Challenge: "Herausforderung", Closeness: "Verschwiegenheit", Curiosity: "Neugier", Excitement: "Aufregung", Harmony: "Harmonie", Ideal: "Ideal", Liberty: "Freiheit", Love: "Liebe", Practicality: "Zweckmäßigkeit", "Self-expression": "Selbstdarstellung", Stability: "Stabilität", Structure: "Struktur", Conservation: "Konservierung", Hedonism: "Hedonismus", "Openness to change": "Offen für Veränderungen", "Self-enhancement": "Selbstverbesserung", "Self-transcendence": "Selbsttranszendenz" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(49);
  }, function (e) {
    e.exports = { Agreeableness: "Disponibilità", Conscientiousness: "Scrupolosità", Extraversion: "Estroversione", Neuroticism: "Gamma emotiva", Openness: "Apertura", "Achievement striving": "Propensione al raggiungimento dello scopo", "Activity level": "Livello di attività", Adventurousness: "Spirito d'avventura", Altruism: "Altruismo", Anger: "Irascibile", Anxiety: "Incline alla preoccupazione", "Artistic interests": "Interessi artistici", Assertiveness: "Assertività", Cautiousness: "Prudenza", Cheerfulness: "Positività", Cooperation: "Cooperazione", Depression: "Malinconico", Dutifulness: "Responsabilità", Emotionality: "Emotività", "Excitement-seeking": "Desiderio di stimoli", Friendliness: "Cordialità", Gregariousness: "Socialità", Imagination: "Immaginazione", Immoderation: "Smodato", Intellect: "Curiosità intellettuale", Liberalism: "Anticonvenzionale", Modesty: "Modestia", Morality: "Irremovibilità", Orderliness: "Accuratezza", "Self-consciousness": "Autocosciente", "Self-discipline": "Autodisciplina", "Self-efficacy": "Sicurezza di sé", Sympathy: "Compartecipazione", Trust: "Fiducia", Vulnerability: "Suscettibile allo stress", Challenge: "Stimolo", Closeness: "Vicinanza", Curiosity: "Curiosità", Excitement: "Eccitazione", Harmony: "Armonia", Ideal: "Ideale", Liberty: "Libertà", Love: "Amore", Practicality: "Pragmatismo", "Self-expression": "Espressione della personalità", Stability: "Stabilità", Structure: "Struttura", Conservation: "Tradizionalismo", Hedonism: "Edonismo", "Openness to change": "Apertura al cambiamento", "Self-enhancement": "Successo personale", "Self-transcendence": "Impegno sociale" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(51);
  }, function (e) {
    e.exports = { Agreeableness: "الوئام", Conscientiousness: "الاجتهاد", Extraversion: "الانبساط", Neuroticism: "مدى العاطفية", Openness: "الانفتاح", "Achievement striving": "السعي للانجاز", "Activity level": "مستوى النشاط", Adventurousness: "المغامرة", Altruism: "الايثار", Anger: "متقد", Anxiety: "عرضة للقلق", "Artistic interests": "الهوايات  الفنية", Assertiveness: "الاصرار", Cautiousness: "الحذر", Cheerfulness: "البهجة", Cooperation: "التعاون", Depression: "كئيب", Dutifulness: "الطاعة", Emotionality: "الانفعال", "Excitement-seeking": "البحث عن الاثارة", Friendliness: "غير متحفظ", Gregariousness: "الألفة", Imagination: "الخيال", Immoderation: "الغلو", Intellect: "الذكاء", Liberalism: "تحدي-السلطة", Modesty: "التواضع", Morality: "العند", Orderliness: "النظام", "Self-consciousness": "الوعي الذاتي", "Self-discipline": "الانضباط الذاتي", "Self-efficacy": "كفاءة الذات", Sympathy: "التعاطف", Trust: "الثقة", Vulnerability: "عرضة للتوتر", Challenge: "التحدي", Closeness: "التقارب", Curiosity: "الفضول", Excitement: "الاثارة", Harmony: "الانسجام", Ideal: "المثالية", Liberty: "الحرية", Love: "الحب", Practicality: "العملية", "Self-expression": "التعبير عن الذات", Stability: "الثبات", Structure: "الانتظام", Conservation: "المحافظة", Hedonism: "التلذذ", "Openness to change": "الانفتاح  على  التغيير", "Self-enhancement": "تعزيز الذات", "Self-transcendence": "تنزيه الذات" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(53);
  }, function (e) {
    e.exports = { Agreeableness: "協調性", Conscientiousness: "誠実性", Extraversion: "外向性", Neuroticism: "感情起伏", Openness: "知的好奇心", "Achievement striving": "達成努力", "Activity level": "活発度", Adventurousness: "大胆性", Altruism: "利他主義", Anger: "激情的", Anxiety: "心配性", "Artistic interests": "芸術的関心度", Assertiveness: "自己主張", Cautiousness: "注意深さ", Cheerfulness: "明朗性", Cooperation: "協同性", Depression: "悲観的", Dutifulness: "忠実さ", Emotionality: "情動性", "Excitement-seeking": "刺激希求性", Friendliness: "友好性", Gregariousness: "社交性", Imagination: "想像力", Immoderation: "利己的", Intellect: "思考力", Liberalism: "現状打破", Modesty: "謙虚さ", Morality: "強硬さ", Orderliness: "秩序性", "Self-consciousness": "自意識過剰", "Self-discipline": "自制力", "Self-efficacy": "自己効力感", Sympathy: "共感度", Trust: "信用度", Vulnerability: "低ストレス耐性", Challenge: "挑戦", Closeness: "親密", Curiosity: "好奇心", Excitement: "興奮", Harmony: "調和", Ideal: "理想", Liberty: "自由主義", Love: "社会性", Practicality: "実用主義", "Self-expression": "自己表現", Stability: "安定性", Structure: "仕組", Conservation: "現状維持", Hedonism: "快楽主義", "Openness to change": "変化許容性", "Self-enhancement": "自己増進", "Self-transcendence": "自己超越" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(55);
  }, function (e) {
    e.exports = { Agreeableness: "Amabilidad", Conscientiousness: "Responsabilidad", Extraversion: "Extroversión", Neuroticism: "Rango emocional", Openness: "Apertura a experiencias", "Achievement striving": "Necesidad de éxito", "Activity level": "Nivel de actividad", Adventurousness: "Audacia", Altruism: "Altruismo", Anger: "Vehemencia", Anxiety: "Tendencia a la preocupación", "Artistic interests": "Intereses artísticos", Assertiveness: "Seguridad en uno mismo", Cautiousness: "Cautela", Cheerfulness: "Alegría", Cooperation: "Cooperación", Depression: "Melancolía", Dutifulness: "Obediencia", Emotionality: "Emocionalidad", "Excitement-seeking": "Búsqueda de emociones", Friendliness: "Simpatía", Gregariousness: "Sociabilidad", Imagination: "Imaginación", Immoderation: "Desmesura", Intellect: "Intelecto", Liberalism: "Desafío a la autoridad", Modesty: "Modestia", Morality: "Intransigencia", Orderliness: "Disciplina", "Self-consciousness": "Timidez", "Self-discipline": "Autodisciplina", "Self-efficacy": "Autoeficacia", Sympathy: "Compasión", Trust: "Confianza", Vulnerability: "Susceptibilidad a la tensión", Challenge: "Desafío", Closeness: "Familiaridad", Curiosity: "Curiosidad", Excitement: "Entusiasmo", Harmony: "Armonía", Ideal: "Ideal", Liberty: "Libertad", Love: "Amor", Practicality: "Practicidad", "Self-expression": "Autoexpresión", Stability: "Estabilidad", Structure: "Estructura", Conservation: "Conservación", Hedonism: "Hedonismo", "Openness to change": "Apertura al cambio", "Self-enhancement": "Superación personal", "Self-transcendence": "Autotranscendencia" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(57);
  }, function (e) {
    e.exports = { Agreeableness: "Agreeableness", Altruism: "Altruism", Cooperation: "Cooperation", Modesty: "Modesty", Morality: "Uncompromising", Sympathy: "Sympathy", Trust: "Trust", Conscientiousness: "Conscientiousness", "Achievement striving": "Achievement striving", Cautiousness: "Cautiousness", Dutifulness: "Dutifulness", Orderliness: "Orderliness", "Self-discipline": "Self-discipline", "Self-efficacy": "Self-efficacy", Extraversion: "Extraversion", "Activity level": "Activity level", Assertiveness: "Assertiveness", Cheerfulness: "Cheerfulness", "Excitement-seeking": "Excitement-seeking", Friendliness: "Outgoing", Gregariousness: "Gregariousness", Neuroticism: "Emotional range", Anger: "Fiery", Anxiety: "Prone to worry", Depression: "Melancholy", Immoderation: "Immoderation", "Self-consciousness": "Self-consciousness", Vulnerability: "Susceptible to stress", Openness: "Openness", Adventurousness: "Adventurousness", "Artistic interests": "Artistic interests", Emotionality: "Emotionality", Imagination: "Imagination", Intellect: "Intellect", Liberalism: "Authority-challenging", Liberty: "Liberty", Ideal: "Ideal", Love: "Love", Practicality: "Practicality", "Self-expression": "Self-expression", Stability: "Stability", Structure: "Structure", Challenge: "Challenge", Closeness: "Closeness", Curiosity: "Curiosity", Excitement: "Excitement", Harmony: "Harmony", Conservation: "Conservation", Hedonism: "Hedonism", "Openness to change": "Openness to change", "Self-enhancement": "Self-enhancement", "Self-transcendence": "Self-transcendence" };
  }, function (e, t, n) {
    "use static";

    e.exports = n(59);
  }, function (e, t, n) {
    "use strict";

    e.exports = { en: n(60), es: n(58), ja: n(56), ar: n(54), it: n(52), de: n(50), ko: n(48), zh: n(46), "zh-tw": n(44), fr: n(42), "pt-br": n(40) };
  }, function (e, t, n) {
    "use strict";

    var i = n(61);e.exports = function () {
      function _class4(e) {
        _classCallCheck(this, _class4);

        this._locale = function (e, t) {
          return -1 !== Object.keys(e || {}).indexOf(t);
        }(i, e) ? e : "en", this._dictionary = i[this._locale];
      }

      _createClass(_class4, [{
        key: "data",
        value: function data() {
          return _extends({}, this._dictionary);
        }
      }]);

      return _class4;
    }();
  }, function (e, t, n) {
    "use strict";

    var i = n(0),
        r = n(62),
        s = n(1),
        a = { locale: "en", version: "v2" };e.exports = function (_s2) {
      _inherits(_class5, _s2);

      function _class5(e) {
        _classCallCheck(this, _class5);

        return _possibleConstructorReturn(this, (_class5.__proto__ || Object.getPrototypeOf(_class5)).call(this, _extends({}, a, i(e, ["locale"])), r));
      }

      _createClass(_class5, [{
        key: "defaultOptions",
        value: function defaultOptions() {
          return a;
        }
      }]);

      return _class5;
    }(s);
  }, function (t) {
    "use strict";

    var n = function () {
      function e(e, t) {
        for (var n, i = 0; i < t.length; i++) {
          (n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    }(),
        i = function () {
      function t(e, n) {
        (function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, t), this._traitNames = n, this._traits = e.personality, this._needs = e.needs, this._values = e.values;
      }return n(t, [{ key: "d3Json", value: function value() {
          return { tree: { children: [{ name: "Big 5", id: "personality", children: [this.traitsTree()] }, { name: "Values", id: "values", children: [this.valuesTree()] }, { name: "Needs", id: "needs", children: [this.needsTree()] }] } };
        } }, { key: "traitsTree", value: function value() {
          var e = this,
              t = this.mostSignificantChild(this._traits);return { name: e._traitNames.name(t.trait_id), id: t.trait_id + "_parent", category: t.category, score: t.percentile, children: this._traits.map(function (t) {
              return { name: e._traitNames.name(t.trait_id), id: t.trait_id, category: t.category, score: t.percentile, children: t.children.map(function (t) {
                  return { name: e._traitNames.name(t.trait_id), id: t.trait_id, category: t.category, score: t.percentile };
                }) };
            }) };
        } }, { key: "needsTree", value: function value() {
          var e = this,
              t = this.mostSignificantChild(this._needs);return { name: e._traitNames.name(t.trait_id), id: t.trait_id + "_parent", category: t.category, score: t.percentile, children: this._needs.map(function (t) {
              return { name: e._traitNames.name(t.trait_id), id: t.trait_id, category: t.category, score: t.percentile };
            }) };
        } }, { key: "valuesTree", value: function value() {
          var e = this,
              t = this.mostSignificantChild(this._values);return { name: e._traitNames.name(t.trait_id), id: t.trait_id + "_parent", category: t.category, score: t.percentile, children: this._values.map(function (t) {
              return { name: e._traitNames.name(t.trait_id), id: t.trait_id, category: t.category, score: t.percentile };
            }) };
        } }, { key: "mostSignificantChild", value: function value(t) {
          for (var n, i = 0, r = {}, s = 0; s < t.length; s++) {
            (n = e(t[s].percentile - .5)) >= i && (r = t[s], i = n);
          }return r;
        } }]), t;
    }();t.exports = i;
  }, function (t) {
    "use strict";

    var n = function () {
      function e(e, t) {
        for (var n, i = 0; i < t.length; i++) {
          (n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    }(),
        i = function () {
      function t(e, n) {
        (function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, t), this._traitNames = n, this._traits = e.tree.children[0].children[0], this._needs = e.tree.children[1].children[0], this._values = e.tree.children[2].children[0];
      }return n(t, [{ key: "d3Json", value: function value() {
          return { tree: { children: [{ name: "Big 5", id: "personality", children: [this.traitsTree()] }, { name: "Values", id: "values", children: [this.valuesTree()] }, { name: "Needs", id: "needs", children: [this.needsTree()] }] } };
        } }, { key: "traitsTree", value: function value() {
          var e = this,
              t = this.mostSignificantChild(this._traits.children);return { name: e._traitNames.name(t.id), id: t.id + "_parent", category: t.category, score: t.percentage, children: this._traits.children.map(function (t) {
              return { name: e._traitNames.name(t.id), id: t.id, category: t.category, score: t.percentage, children: t.children.map(function (t) {
                  return { name: e._traitNames.name(t.id), id: t.id, category: t.category, score: t.percentage };
                }) };
            }) };
        } }, { key: "needsTree", value: function value() {
          var e = this,
              t = this.mostSignificantChild(this._needs.children);return { name: e._traitNames.name(t.id), id: t.id + "_parent", category: t.category, score: t.percentage, children: this._needs.children.map(function (t) {
              return { name: e._traitNames.name(t.id), id: t.id, category: t.category, score: t.percentage };
            }) };
        } }, { key: "valuesTree", value: function value() {
          var e = this,
              t = this.mostSignificantChild(this._values.children);return { name: e._traitNames.name(t.id), id: t.id + "_parent", category: t.category, score: t.percentage, children: this._values.children.map(function (t) {
              return { name: e._traitNames.name(t.id), id: t.id, category: t.category, score: t.percentage };
            }) };
        } }, { key: "mostSignificantChild", value: function value(t) {
          for (var n, i = 0, r = null, s = 0; s < t.length; s++) {
            (n = e(t[s].percentage - .5)) >= i && (r = t[s], i = n);
          }return r;
        } }]), t;
    }();t.exports = i;
  }, function (e) {
    "use strict";

    function t(e) {
      return e.radius;
    }function n(e) {
      return e.startAngle;
    }function i(e) {
      return e.endAngle;
    }function r(e) {
      return "function" == typeof e ? e : function () {
        return e;
      };
    }e.exports = function () {
      function e() {
        var e = s.apply(this, arguments),
            t = u.apply(this, arguments) + h,
            n = l.apply(this, arguments) + h,
            i = (n < t && (i = t, t = n, n = i), n - t),
            r = i < a ? "0" : "1";return "M" + e * c(t) + "," + e * o(t) + "A" + e + "," + e + " 0 " + r + ",1 " + e * c(n) + "," + e * o(n);
      }var s = t,
          u = n,
          l = i,
          h = -a / 2;return e.radius = function (t) {
        return arguments.length ? (s = r(t), e) : s;
      }, e.startAngle = function (t) {
        return arguments.length ? (u = r(t), e) : u;
      }, e.endAngle = function (t) {
        return arguments.length ? (l = r(t), e) : l;
      }, e.centroid = function () {
        var e = s.apply(this, arguments),
            t = (u.apply(this, arguments) + l.apply(this, arguments)) / 2 + h;return [c(t) * e, o(t) * e];
      }, e;
    };
  }, function (t, n, i) {
    "use strict";

    var s = _extends({}, i(3), i(4), i(5), i(6)),
        l = i(66),
        h = i(2);t.exports = { render: function render(t) {
        if (t.data && t.loadingDiv) {
          var n = t.data ? t.data.tree ? t.data.tree : t.data : null;if (n && n.children && n.children.length) {
            t.switchState(1), t._layout();var i = .08 * a,
                f = 5,
                _ = r(t.dimW, t.dimH) / 3.2,
                d = function d(n) {
              n.each(function (r) {
                n = s.select(this), t.createParts(n, r);var _ = 0 < r.depth ? i / (3 * r.depth) : i,
                    d = t.getScore(r);if (r.children) {
                  var p = u(e(d) * (r.x1 - r.x0) - _, 0),
                      y = s.arc().startAngle(function (e) {
                    return e.x0;
                  }).endAngle(function (e) {
                    return e.x0 + p;
                  }).innerRadius(function (e) {
                    return f + e.y0;
                  }).outerRadius(function (e) {
                    return e.y1;
                  });t._childElements.parts[t.getUniqueId(r, "arc1")].attr("d", y);var v = s.arc().startAngle(function (e) {
                    return e.x0 + p;
                  }).endAngle(function (e) {
                    return e.x0 + (e.x1 - e.x0) - _;
                  }).innerRadius(function (e) {
                    return f + e.y0;
                  }).outerRadius(function (e) {
                    return e.y1;
                  });t._childElements.parts[t.getUniqueId(r, "arc2")].attr("d", v);var m,
                      g,
                      x,
                      b,
                      A = h.isLocatedBottom(r);1 === r.depth && A ? (x = r.y1 - (r.y1 - f - r.y0) / 6, b = r.y1 - (r.y1 - f - r.y0) / 8) : (x = f + r.y0 + 5 * (r.y1 - f - r.y0) / 12, b = r.y1 - (r.y1 - f - r.y0) / 7), A ? (m = h.arc(r.x1 - _ - a / 2, r.x0 - a / 2, x), g = h.arc(r.x1 - _ - a / 2, r.x0 - a / 2, b)) : (m = l().startAngle(function (e) {
                    return e.x0;
                  }).endAngle(function (e) {
                    return e.x1 - _;
                  }).radius(function (e) {
                    return 1 === e.depth ? e.y1 - (e.y1 - f - e.y0) / 3 : f + e.y0 + 3 * (e.y1 - f - e.y0) / 5;
                  }), g = l().startAngle(function (e) {
                    return e.x0;
                  }).endAngle(function (e) {
                    return e.x1 - _;
                  }).radius(function (e) {
                    return 1 === e.depth ? e.y1 - (e.y1 - f - e.y0) / 3 : f + e.y0 + (e.y1 - f - e.y0) / 5;
                  })), t._childElements.parts[t.getUniqueId(r, "arc_for_label")].attr("d", m), 1 < r.depth && t._childElements.parts[t.getUniqueId(r, "arc_for_label_number")].attr("d", g);
                } else {
                  var S = f + r.y0,
                      w = f + r.y0 + h.getBarLengthFactor(r) * e(d) * (r.y1 - r.y0),
                      E = s.arc().startAngle(r.x0).endAngle(r.x1).innerRadius(S).outerRadius(w);t._childElements.parts[t.getUniqueId(r, "bar")].attr("d", E);var C = 0,
                      k = "start",
                      T = 0;r.x0 > a ? (C = 180 * r.x0 / a + 90, k = "end", T = 20 * -(r.x1 - r.x0) * a) : (C = 180 * r.x0 / a - 90, k = "start", T = 5 + 20 * (r.x1 - r.x0) * a), t._childElements.parts[t.getUniqueId(r, "sector_leaf_text")].attr("dy", T).attr("text-anchor", k).attr("transform", "translate(" + (w + 5) * o(r.x0) + "," + -(w + 5) * c(r.x0) + ") rotate(" + C + ")");
                }
              });
            };t.vis = t.d3vis.append("g").attr("transform", "translate(" + t.dimW / 2 + "," + t.dimH / 2 + ")").append("g");var p = { children: n.children.filter(function (e) {
                return -1 === t.exclude.indexOf(e.id);
              }) },
                y = s.hierarchy(p).sum(function (e) {
              return e.hasOwnProperty("size") || e.hasOwnProperty("children") ? e.size : 1;
            }),
                v = s.partition().size([2 * a, _]),
                m = t.vis.selectAll("g").data(v(y).descendants()).enter().append("g").attr("class", "sector").attr("visibility", function (e) {
              return 2 === e.depth || e.forceVisible ? "visible" : "hidden";
            }).call(d).each(function (e) {
              e.expand = 1;
            }).on("click", function (e) {
              h.expandOrFoldSector(m, e, s.select(this));
            }).on("mouseover", function (e) {
              t.showTooltip(e, this);
            }).on("mouseout", function () {
              t.showTooltip();
            });t.updateText();
          }
        }
      }, d3: s };
  }, function (e) {
    "use strict";

    e.exports = { traits_dark: "#5aaafa", traits_light: "#c0e6ff", facet: "#4178be", needs_dark: "#41d6c3", needs_light: "#a7fae6", need: "#008571", values_dark: "#ba8ff7", values_light: "#eed2ff", value: "#9855d4" };
  }, function (e) {
    var t = function () {
      return this;
    }();try {
      t = t || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (t = window);
    }e.exports = t;
  }, function (e, t, n) {
    "use strict";

    var i = function () {
      function e(e, t) {
        for (var n, i = 0; i < t.length; i++) {
          (n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    }(),
        r = n(0),
        s = n(68),
        a = n(67),
        o = n(65),
        c = n(64),
        u = n(63),
        l = n(33),
        h = n(8),
        f = { locale: "en", version: "v2", d3version: "v4", colors: s },
        _ = function (e) {
      function t(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t);var n = _extends({}, f, r(e, ["element", "selector", "version", "locale", "colors", "exclude"]));return function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, "v2" === n.version ? o : c, a, "v2" === n.version ? u : l));
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, h), i(t, [{ key: "defaultOptions", value: function value() {
          return f;
        } }]), t;
    }();e.exports = _;
  }, function (e, t, n) {
    "use strict";

    var i = n(70);e.exports = i;
  }]);
});