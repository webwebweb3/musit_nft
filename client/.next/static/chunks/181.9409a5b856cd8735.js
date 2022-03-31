(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [181],
  {
    18859: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return Dn;
        },
      });
      var r = n(87462),
        s = n(63366),
        o = n(67294),
        i = n(8679),
        a = n.n(i),
        c =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              },
        u =
          'object' ===
            ('undefined' === typeof window ? 'undefined' : c(window)) &&
          'object' ===
            ('undefined' === typeof document ? 'undefined' : c(document)) &&
          9 === document.nodeType;
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e, t, n) {
        return (
          t && l(e.prototype, t),
          n && l(e, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      var h = n(75068),
        d = n(97326),
        p = {}.constructor;
      function y(e) {
        if (null == e || 'object' !== typeof e) return e;
        if (Array.isArray(e)) return e.map(y);
        if (e.constructor !== p) return e;
        var t = {};
        for (var n in e) t[n] = y(e[n]);
        return t;
      }
      function g(e, t, n) {
        void 0 === e && (e = 'unnamed');
        var r = n.jss,
          s = y(t),
          o = r.plugins.onCreateRule(e, s, n);
        return o || (e[0], null);
      }
      var m = function (e, t) {
          for (var n = '', r = 0; r < e.length && '!important' !== e[r]; r++)
            n && (n += t), (n += e[r]);
          return n;
        },
        w = function (e, t) {
          if ((void 0 === t && (t = !1), !Array.isArray(e))) return e;
          var n = '';
          if (Array.isArray(e[0]))
            for (var r = 0; r < e.length && '!important' !== e[r]; r++)
              n && (n += ', '), (n += m(e[r], ' '));
          else n = m(e, ', ');
          return (
            t || '!important' !== e[e.length - 1] || (n += ' !important'), n
          );
        };
      function b(e) {
        return e && !1 === e.format
          ? { linebreak: '', space: '' }
          : { linebreak: '\n', space: ' ' };
      }
      function v(e, t) {
        for (var n = '', r = 0; r < t; r++) n += '  ';
        return n + e;
      }
      function E(e, t, n) {
        void 0 === n && (n = {});
        var r = '';
        if (!t) return r;
        var s = n.indent,
          o = void 0 === s ? 0 : s,
          i = t.fallbacks;
        !1 === n.format && (o = -1 / 0);
        var a = b(n),
          c = a.linebreak,
          u = a.space;
        if ((e && o++, i))
          if (Array.isArray(i))
            for (var l = 0; l < i.length; l++) {
              var f = i[l];
              for (var h in f) {
                var d = f[h];
                null != d &&
                  (r && (r += c), (r += v(h + ':' + u + w(d) + ';', o)));
              }
            }
          else
            for (var p in i) {
              var y = i[p];
              null != y &&
                (r && (r += c), (r += v(p + ':' + u + w(y) + ';', o)));
            }
        for (var g in t) {
          var m = t[g];
          null != m &&
            'fallbacks' !== g &&
            (r && (r += c), (r += v(g + ':' + u + w(m) + ';', o)));
        }
        return (r || n.allowEmpty) && e
          ? (r && (r = '' + c + r + c),
            v('' + e + u + '{' + r, --o) + v('}', o))
          : r;
      }
      var k = /([[\].#*$><+~=|^:(),"'`\s])/g,
        S = 'undefined' !== typeof CSS && CSS.escape,
        C = function (e) {
          return S ? S(e) : e.replace(k, '\\$1');
        },
        x = (function () {
          function e(e, t, n) {
            (this.type = 'style'), (this.isProcessed = !1);
            var r = n.sheet,
              s = n.Renderer;
            (this.key = e),
              (this.options = n),
              (this.style = t),
              r ? (this.renderer = r.renderer) : s && (this.renderer = new s());
          }
          return (
            (e.prototype.prop = function (e, t, n) {
              if (void 0 === t) return this.style[e];
              var r = !!n && n.force;
              if (!r && this.style[e] === t) return this;
              var s = t;
              (n && !1 === n.process) ||
                (s = this.options.jss.plugins.onChangeValue(t, e, this));
              var o = null == s || !1 === s,
                i = e in this.style;
              if (o && !i && !r) return this;
              var a = o && i;
              if (
                (a ? delete this.style[e] : (this.style[e] = s),
                this.renderable && this.renderer)
              )
                return (
                  a
                    ? this.renderer.removeProperty(this.renderable, e)
                    : this.renderer.setProperty(this.renderable, e, s),
                  this
                );
              var c = this.options.sheet;
              return c && c.attached, this;
            }),
            e
          );
        })(),
        D = (function (e) {
          function t(t, n, r) {
            var s;
            s = e.call(this, t, n, r) || this;
            var o = r.selector,
              i = r.scoped,
              a = r.sheet,
              c = r.generateId;
            return (
              o
                ? (s.selectorText = o)
                : !1 !== i &&
                  ((s.id = c((0, d.Z)((0, d.Z)(s)), a)),
                  (s.selectorText = '.' + C(s.id))),
              s
            );
          }
          (0, h.Z)(t, e);
          var n = t.prototype;
          return (
            (n.applyTo = function (e) {
              var t = this.renderer;
              if (t) {
                var n = this.toJSON();
                for (var r in n) t.setProperty(e, r, n[r]);
              }
              return this;
            }),
            (n.toJSON = function () {
              var e = {};
              for (var t in this.style) {
                var n = this.style[t];
                'object' !== typeof n
                  ? (e[t] = n)
                  : Array.isArray(n) && (e[t] = w(n));
              }
              return e;
            }),
            (n.toString = function (e) {
              var t = this.options.sheet,
                n =
                  !!t && t.options.link
                    ? (0, r.Z)({}, e, { allowEmpty: !0 })
                    : e;
              return E(this.selectorText, this.style, n);
            }),
            f(t, [
              {
                key: 'selector',
                set: function (e) {
                  if (e !== this.selectorText) {
                    this.selectorText = e;
                    var t = this.renderer,
                      n = this.renderable;
                    if (n && t) t.setSelector(n, e) || t.replaceRule(n, this);
                  }
                },
                get: function () {
                  return this.selectorText;
                },
              },
            ]),
            t
          );
        })(x),
        P = {
          onCreateRule: function (e, t, n) {
            return '@' === e[0] || (n.parent && 'keyframes' === n.parent.type)
              ? null
              : new D(e, t, n);
          },
        },
        I = { indent: 1, children: !0 },
        T = /@([\w-]+)/,
        A = (function () {
          function e(e, t, n) {
            (this.type = 'conditional'),
              (this.isProcessed = !1),
              (this.key = e);
            var s = e.match(T);
            for (var o in ((this.at = s ? s[1] : 'unknown'),
            (this.query = n.name || '@' + this.at),
            (this.options = n),
            (this.rules = new ee((0, r.Z)({}, n, { parent: this }))),
            t))
              this.rules.add(o, t[o]);
            this.rules.process();
          }
          var t = e.prototype;
          return (
            (t.getRule = function (e) {
              return this.rules.get(e);
            }),
            (t.indexOf = function (e) {
              return this.rules.indexOf(e);
            }),
            (t.addRule = function (e, t, n) {
              var r = this.rules.add(e, t, n);
              return r ? (this.options.jss.plugins.onProcessRule(r), r) : null;
            }),
            (t.replaceRule = function (e, t, n) {
              var r = this.rules.replace(e, t, n);
              return r && this.options.jss.plugins.onProcessRule(r), r;
            }),
            (t.toString = function (e) {
              void 0 === e && (e = I);
              var t = b(e).linebreak;
              if (
                (null == e.indent && (e.indent = I.indent),
                null == e.children && (e.children = I.children),
                !1 === e.children)
              )
                return this.query + ' {}';
              var n = this.rules.toString(e);
              return n ? this.query + ' {' + t + n + t + '}' : '';
            }),
            e
          );
        })(),
        j = /@media|@supports\s+/,
        R = {
          onCreateRule: function (e, t, n) {
            return j.test(e) ? new A(e, t, n) : null;
          },
        },
        N = { indent: 1, children: !0 },
        B = /@keyframes\s+([\w-]+)/,
        O = (function () {
          function e(e, t, n) {
            (this.type = 'keyframes'),
              (this.at = '@keyframes'),
              (this.isProcessed = !1);
            var s = e.match(B);
            s && s[1] ? (this.name = s[1]) : (this.name = 'noname'),
              (this.key = this.type + '-' + this.name),
              (this.options = n);
            var o = n.scoped,
              i = n.sheet,
              a = n.generateId;
            for (var c in ((this.id = !1 === o ? this.name : C(a(this, i))),
            (this.rules = new ee((0, r.Z)({}, n, { parent: this }))),
            t))
              this.rules.add(c, t[c], (0, r.Z)({}, n, { parent: this }));
            this.rules.process();
          }
          return (
            (e.prototype.toString = function (e) {
              void 0 === e && (e = N);
              var t = b(e).linebreak;
              if (
                (null == e.indent && (e.indent = N.indent),
                null == e.children && (e.children = N.children),
                !1 === e.children)
              )
                return this.at + ' ' + this.id + ' {}';
              var n = this.rules.toString(e);
              return (
                n && (n = '' + t + n + t),
                this.at + ' ' + this.id + ' {' + n + '}'
              );
            }),
            e
          );
        })(),
        $ = /@keyframes\s+/,
        U = /\$([\w-]+)/g,
        L = function (e, t) {
          return 'string' === typeof e
            ? e.replace(U, function (e, n) {
                return n in t ? t[n] : e;
              })
            : e;
        },
        _ = function (e, t, n) {
          var r = e[t],
            s = L(r, n);
          s !== r && (e[t] = s);
        },
        z = {
          onCreateRule: function (e, t, n) {
            return 'string' === typeof e && $.test(e) ? new O(e, t, n) : null;
          },
          onProcessStyle: function (e, t, n) {
            return 'style' === t.type && n
              ? ('animation-name' in e && _(e, 'animation-name', n.keyframes),
                'animation' in e && _(e, 'animation', n.keyframes),
                e)
              : e;
          },
          onChangeValue: function (e, t, n) {
            var r = n.options.sheet;
            if (!r) return e;
            switch (t) {
              case 'animation':
              case 'animation-name':
                return L(e, r.keyframes);
              default:
                return e;
            }
          },
        },
        M = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            (0, h.Z)(t, e),
            (t.prototype.toString = function (e) {
              var t = this.options.sheet,
                n =
                  !!t && t.options.link
                    ? (0, r.Z)({}, e, { allowEmpty: !0 })
                    : e;
              return E(this.key, this.style, n);
            }),
            t
          );
        })(x),
        F = {
          onCreateRule: function (e, t, n) {
            return n.parent && 'keyframes' === n.parent.type
              ? new M(e, t, n)
              : null;
          },
        },
        W = (function () {
          function e(e, t, n) {
            (this.type = 'font-face'),
              (this.at = '@font-face'),
              (this.isProcessed = !1),
              (this.key = e),
              (this.style = t),
              (this.options = n);
          }
          return (
            (e.prototype.toString = function (e) {
              var t = b(e).linebreak;
              if (Array.isArray(this.style)) {
                for (var n = '', r = 0; r < this.style.length; r++)
                  (n += E(this.at, this.style[r])),
                    this.style[r + 1] && (n += t);
                return n;
              }
              return E(this.at, this.style, e);
            }),
            e
          );
        })(),
        H = /@font-face/,
        q = {
          onCreateRule: function (e, t, n) {
            return H.test(e) ? new W(e, t, n) : null;
          },
        },
        V = (function () {
          function e(e, t, n) {
            (this.type = 'viewport'),
              (this.at = '@viewport'),
              (this.isProcessed = !1),
              (this.key = e),
              (this.style = t),
              (this.options = n);
          }
          return (
            (e.prototype.toString = function (e) {
              return E(this.key, this.style, e);
            }),
            e
          );
        })(),
        Z = {
          onCreateRule: function (e, t, n) {
            return '@viewport' === e || '@-ms-viewport' === e
              ? new V(e, t, n)
              : null;
          },
        },
        J = (function () {
          function e(e, t, n) {
            (this.type = 'simple'),
              (this.isProcessed = !1),
              (this.key = e),
              (this.value = t),
              (this.options = n);
          }
          return (
            (e.prototype.toString = function (e) {
              if (Array.isArray(this.value)) {
                for (var t = '', n = 0; n < this.value.length; n++)
                  (t += this.key + ' ' + this.value[n] + ';'),
                    this.value[n + 1] && (t += '\n');
                return t;
              }
              return this.key + ' ' + this.value + ';';
            }),
            e
          );
        })(),
        G = { '@charset': !0, '@import': !0, '@namespace': !0 },
        X = {
          onCreateRule: function (e, t, n) {
            return e in G ? new J(e, t, n) : null;
          },
        },
        K = [P, R, z, F, q, Z, X],
        Q = { process: !0 },
        Y = { force: !0, process: !0 },
        ee = (function () {
          function e(e) {
            (this.map = {}),
              (this.raw = {}),
              (this.index = []),
              (this.counter = 0),
              (this.options = e),
              (this.classes = e.classes),
              (this.keyframes = e.keyframes);
          }
          var t = e.prototype;
          return (
            (t.add = function (e, t, n) {
              var s = this.options,
                o = s.parent,
                i = s.sheet,
                a = s.jss,
                c = s.Renderer,
                u = s.generateId,
                l = s.scoped,
                f = (0, r.Z)(
                  {
                    classes: this.classes,
                    parent: o,
                    sheet: i,
                    jss: a,
                    Renderer: c,
                    generateId: u,
                    scoped: l,
                    name: e,
                    keyframes: this.keyframes,
                    selector: void 0,
                  },
                  n,
                ),
                h = e;
              e in this.raw && (h = e + '-d' + this.counter++),
                (this.raw[h] = t),
                h in this.classes && (f.selector = '.' + C(this.classes[h]));
              var d = g(h, t, f);
              if (!d) return null;
              this.register(d);
              var p = void 0 === f.index ? this.index.length : f.index;
              return this.index.splice(p, 0, d), d;
            }),
            (t.replace = function (e, t, n) {
              var s = this.get(e),
                o = this.index.indexOf(s);
              s && this.remove(s);
              var i = n;
              return (
                -1 !== o && (i = (0, r.Z)({}, n, { index: o })),
                this.add(e, t, i)
              );
            }),
            (t.get = function (e) {
              return this.map[e];
            }),
            (t.remove = function (e) {
              this.unregister(e),
                delete this.raw[e.key],
                this.index.splice(this.index.indexOf(e), 1);
            }),
            (t.indexOf = function (e) {
              return this.index.indexOf(e);
            }),
            (t.process = function () {
              var e = this.options.jss.plugins;
              this.index.slice(0).forEach(e.onProcessRule, e);
            }),
            (t.register = function (e) {
              (this.map[e.key] = e),
                e instanceof D
                  ? ((this.map[e.selector] = e),
                    e.id && (this.classes[e.key] = e.id))
                  : e instanceof O &&
                    this.keyframes &&
                    (this.keyframes[e.name] = e.id);
            }),
            (t.unregister = function (e) {
              delete this.map[e.key],
                e instanceof D
                  ? (delete this.map[e.selector], delete this.classes[e.key])
                  : e instanceof O && delete this.keyframes[e.name];
            }),
            (t.update = function () {
              var e, t, n;
              if (
                ('string' ===
                typeof (arguments.length <= 0 ? void 0 : arguments[0])
                  ? ((e = arguments.length <= 0 ? void 0 : arguments[0]),
                    (t = arguments.length <= 1 ? void 0 : arguments[1]),
                    (n = arguments.length <= 2 ? void 0 : arguments[2]))
                  : ((t = arguments.length <= 0 ? void 0 : arguments[0]),
                    (n = arguments.length <= 1 ? void 0 : arguments[1]),
                    (e = null)),
                e)
              )
                this.updateOne(this.get(e), t, n);
              else
                for (var r = 0; r < this.index.length; r++)
                  this.updateOne(this.index[r], t, n);
            }),
            (t.updateOne = function (t, n, r) {
              void 0 === r && (r = Q);
              var s = this.options,
                o = s.jss.plugins,
                i = s.sheet;
              if (t.rules instanceof e) t.rules.update(n, r);
              else {
                var a = t.style;
                if ((o.onUpdate(n, t, i, r), r.process && a && a !== t.style)) {
                  for (var c in (o.onProcessStyle(t.style, t, i), t.style)) {
                    var u = t.style[c];
                    u !== a[c] && t.prop(c, u, Y);
                  }
                  for (var l in a) {
                    var f = t.style[l],
                      h = a[l];
                    null == f && f !== h && t.prop(l, null, Y);
                  }
                }
              }
            }),
            (t.toString = function (e) {
              for (
                var t = '',
                  n = this.options.sheet,
                  r = !!n && n.options.link,
                  s = b(e).linebreak,
                  o = 0;
                o < this.index.length;
                o++
              ) {
                var i = this.index[o].toString(e);
                (i || r) && (t && (t += s), (t += i));
              }
              return t;
            }),
            e
          );
        })(),
        te = (function () {
          function e(e, t) {
            for (var n in ((this.attached = !1),
            (this.deployed = !1),
            (this.classes = {}),
            (this.keyframes = {}),
            (this.options = (0, r.Z)({}, t, {
              sheet: this,
              parent: this,
              classes: this.classes,
              keyframes: this.keyframes,
            })),
            t.Renderer && (this.renderer = new t.Renderer(this)),
            (this.rules = new ee(this.options)),
            e))
              this.rules.add(n, e[n]);
            this.rules.process();
          }
          var t = e.prototype;
          return (
            (t.attach = function () {
              return (
                this.attached ||
                  (this.renderer && this.renderer.attach(),
                  (this.attached = !0),
                  this.deployed || this.deploy()),
                this
              );
            }),
            (t.detach = function () {
              return this.attached
                ? (this.renderer && this.renderer.detach(),
                  (this.attached = !1),
                  this)
                : this;
            }),
            (t.addRule = function (e, t, n) {
              var r = this.queue;
              this.attached && !r && (this.queue = []);
              var s = this.rules.add(e, t, n);
              return s
                ? (this.options.jss.plugins.onProcessRule(s),
                  this.attached
                    ? this.deployed
                      ? (r
                          ? r.push(s)
                          : (this.insertRule(s),
                            this.queue &&
                              (this.queue.forEach(this.insertRule, this),
                              (this.queue = void 0))),
                        s)
                      : s
                    : ((this.deployed = !1), s))
                : null;
            }),
            (t.replaceRule = function (e, t, n) {
              var r = this.rules.get(e);
              if (!r) return this.addRule(e, t, n);
              var s = this.rules.replace(e, t, n);
              return (
                s && this.options.jss.plugins.onProcessRule(s),
                this.attached
                  ? this.deployed
                    ? (this.renderer &&
                        (s
                          ? r.renderable &&
                            this.renderer.replaceRule(r.renderable, s)
                          : this.renderer.deleteRule(r)),
                      s)
                    : s
                  : ((this.deployed = !1), s)
              );
            }),
            (t.insertRule = function (e) {
              this.renderer && this.renderer.insertRule(e);
            }),
            (t.addRules = function (e, t) {
              var n = [];
              for (var r in e) {
                var s = this.addRule(r, e[r], t);
                s && n.push(s);
              }
              return n;
            }),
            (t.getRule = function (e) {
              return this.rules.get(e);
            }),
            (t.deleteRule = function (e) {
              var t = 'object' === typeof e ? e : this.rules.get(e);
              return (
                !(!t || (this.attached && !t.renderable)) &&
                (this.rules.remove(t),
                !(this.attached && t.renderable && this.renderer) ||
                  this.renderer.deleteRule(t.renderable))
              );
            }),
            (t.indexOf = function (e) {
              return this.rules.indexOf(e);
            }),
            (t.deploy = function () {
              return (
                this.renderer && this.renderer.deploy(),
                (this.deployed = !0),
                this
              );
            }),
            (t.update = function () {
              var e;
              return (e = this.rules).update.apply(e, arguments), this;
            }),
            (t.updateOne = function (e, t, n) {
              return this.rules.updateOne(e, t, n), this;
            }),
            (t.toString = function (e) {
              return this.rules.toString(e);
            }),
            e
          );
        })(),
        ne = (function () {
          function e() {
            (this.plugins = { internal: [], external: [] }),
              (this.registry = {});
          }
          var t = e.prototype;
          return (
            (t.onCreateRule = function (e, t, n) {
              for (var r = 0; r < this.registry.onCreateRule.length; r++) {
                var s = this.registry.onCreateRule[r](e, t, n);
                if (s) return s;
              }
              return null;
            }),
            (t.onProcessRule = function (e) {
              if (!e.isProcessed) {
                for (
                  var t = e.options.sheet, n = 0;
                  n < this.registry.onProcessRule.length;
                  n++
                )
                  this.registry.onProcessRule[n](e, t);
                e.style && this.onProcessStyle(e.style, e, t),
                  (e.isProcessed = !0);
              }
            }),
            (t.onProcessStyle = function (e, t, n) {
              for (var r = 0; r < this.registry.onProcessStyle.length; r++)
                t.style = this.registry.onProcessStyle[r](t.style, t, n);
            }),
            (t.onProcessSheet = function (e) {
              for (var t = 0; t < this.registry.onProcessSheet.length; t++)
                this.registry.onProcessSheet[t](e);
            }),
            (t.onUpdate = function (e, t, n, r) {
              for (var s = 0; s < this.registry.onUpdate.length; s++)
                this.registry.onUpdate[s](e, t, n, r);
            }),
            (t.onChangeValue = function (e, t, n) {
              for (
                var r = e, s = 0;
                s < this.registry.onChangeValue.length;
                s++
              )
                r = this.registry.onChangeValue[s](r, t, n);
              return r;
            }),
            (t.use = function (e, t) {
              void 0 === t && (t = { queue: 'external' });
              var n = this.plugins[t.queue];
              -1 === n.indexOf(e) &&
                (n.push(e),
                (this.registry = []
                  .concat(this.plugins.external, this.plugins.internal)
                  .reduce(
                    function (e, t) {
                      for (var n in t) n in e && e[n].push(t[n]);
                      return e;
                    },
                    {
                      onCreateRule: [],
                      onProcessRule: [],
                      onProcessStyle: [],
                      onProcessSheet: [],
                      onChangeValue: [],
                      onUpdate: [],
                    },
                  )));
            }),
            e
          );
        })(),
        re = (function () {
          function e() {
            this.registry = [];
          }
          var t = e.prototype;
          return (
            (t.add = function (e) {
              var t = this.registry,
                n = e.options.index;
              if (-1 === t.indexOf(e))
                if (0 === t.length || n >= this.index) t.push(e);
                else
                  for (var r = 0; r < t.length; r++)
                    if (t[r].options.index > n) return void t.splice(r, 0, e);
            }),
            (t.reset = function () {
              this.registry = [];
            }),
            (t.remove = function (e) {
              var t = this.registry.indexOf(e);
              this.registry.splice(t, 1);
            }),
            (t.toString = function (e) {
              for (
                var t = void 0 === e ? {} : e,
                  n = t.attached,
                  r = (0, s.Z)(t, ['attached']),
                  o = b(r).linebreak,
                  i = '',
                  a = 0;
                a < this.registry.length;
                a++
              ) {
                var c = this.registry[a];
                (null != n && c.attached !== n) ||
                  (i && (i += o), (i += c.toString(r)));
              }
              return i;
            }),
            f(e, [
              {
                key: 'index',
                get: function () {
                  return 0 === this.registry.length
                    ? 0
                    : this.registry[this.registry.length - 1].options.index;
                },
              },
            ]),
            e
          );
        })(),
        se = new re(),
        oe =
          'undefined' !== typeof globalThis
            ? globalThis
            : 'undefined' !== typeof window && window.Math === Math
            ? window
            : 'undefined' !== typeof self && self.Math === Math
            ? self
            : Function('return this')(),
        ie = '2f1acc6c3a606b082e5eef5e54414ffb';
      null == oe[ie] && (oe[ie] = 0);
      var ae = oe[ie]++,
        ce = function (e) {
          void 0 === e && (e = {});
          var t = 0;
          return function (n, r) {
            t += 1;
            var s = '',
              o = '';
            return (
              r &&
                (r.options.classNamePrefix && (o = r.options.classNamePrefix),
                null != r.options.jss.id && (s = String(r.options.jss.id))),
              e.minify
                ? '' + (o || 'c') + ae + s + t
                : o + n.key + '-' + ae + (s ? '-' + s : '') + '-' + t
            );
          };
        },
        ue = function (e) {
          var t;
          return function () {
            return t || (t = e()), t;
          };
        },
        le = function (e, t) {
          try {
            return e.attributeStyleMap
              ? e.attributeStyleMap.get(t)
              : e.style.getPropertyValue(t);
          } catch (n) {
            return '';
          }
        },
        fe = function (e, t, n) {
          try {
            var r = n;
            if (
              Array.isArray(n) &&
              ((r = w(n, !0)), '!important' === n[n.length - 1])
            )
              return e.style.setProperty(t, r, 'important'), !0;
            e.attributeStyleMap
              ? e.attributeStyleMap.set(t, r)
              : e.style.setProperty(t, r);
          } catch (s) {
            return !1;
          }
          return !0;
        },
        he = function (e, t) {
          try {
            e.attributeStyleMap
              ? e.attributeStyleMap.delete(t)
              : e.style.removeProperty(t);
          } catch (n) {}
        },
        de = function (e, t) {
          return (e.selectorText = t), e.selectorText === t;
        },
        pe = ue(function () {
          return document.querySelector('head');
        });
      function ye(e) {
        var t = se.registry;
        if (t.length > 0) {
          var n = (function (e, t) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              if (
                r.attached &&
                r.options.index > t.index &&
                r.options.insertionPoint === t.insertionPoint
              )
                return r;
            }
            return null;
          })(t, e);
          if (n && n.renderer)
            return {
              parent: n.renderer.element.parentNode,
              node: n.renderer.element,
            };
          if (
            ((n = (function (e, t) {
              for (var n = e.length - 1; n >= 0; n--) {
                var r = e[n];
                if (r.attached && r.options.insertionPoint === t.insertionPoint)
                  return r;
              }
              return null;
            })(t, e)),
            n && n.renderer)
          )
            return {
              parent: n.renderer.element.parentNode,
              node: n.renderer.element.nextSibling,
            };
        }
        var r = e.insertionPoint;
        if (r && 'string' === typeof r) {
          var s = (function (e) {
            for (var t = pe(), n = 0; n < t.childNodes.length; n++) {
              var r = t.childNodes[n];
              if (8 === r.nodeType && r.nodeValue.trim() === e) return r;
            }
            return null;
          })(r);
          if (s) return { parent: s.parentNode, node: s.nextSibling };
        }
        return !1;
      }
      var ge = ue(function () {
          var e = document.querySelector('meta[property="csp-nonce"]');
          return e ? e.getAttribute('content') : null;
        }),
        me = function (e, t, n) {
          try {
            'insertRule' in e
              ? e.insertRule(t, n)
              : 'appendRule' in e && e.appendRule(t);
          } catch (r) {
            return !1;
          }
          return e.cssRules[n];
        },
        we = function (e, t) {
          var n = e.cssRules.length;
          return void 0 === t || t > n ? n : t;
        },
        be = (function () {
          function e(e) {
            (this.getPropertyValue = le),
              (this.setProperty = fe),
              (this.removeProperty = he),
              (this.setSelector = de),
              (this.hasInsertedRules = !1),
              (this.cssRules = []),
              e && se.add(e),
              (this.sheet = e);
            var t = this.sheet ? this.sheet.options : {},
              n = t.media,
              r = t.meta,
              s = t.element;
            (this.element =
              s ||
              (function () {
                var e = document.createElement('style');
                return (e.textContent = '\n'), e;
              })()),
              this.element.setAttribute('data-jss', ''),
              n && this.element.setAttribute('media', n),
              r && this.element.setAttribute('data-meta', r);
            var o = ge();
            o && this.element.setAttribute('nonce', o);
          }
          var t = e.prototype;
          return (
            (t.attach = function () {
              if (!this.element.parentNode && this.sheet) {
                !(function (e, t) {
                  var n = t.insertionPoint,
                    r = ye(t);
                  if (!1 !== r && r.parent) r.parent.insertBefore(e, r.node);
                  else if (n && 'number' === typeof n.nodeType) {
                    var s = n,
                      o = s.parentNode;
                    o && o.insertBefore(e, s.nextSibling);
                  } else pe().appendChild(e);
                })(this.element, this.sheet.options);
                var e = Boolean(this.sheet && this.sheet.deployed);
                this.hasInsertedRules &&
                  e &&
                  ((this.hasInsertedRules = !1), this.deploy());
              }
            }),
            (t.detach = function () {
              if (this.sheet) {
                var e = this.element.parentNode;
                e && e.removeChild(this.element),
                  this.sheet.options.link &&
                    ((this.cssRules = []), (this.element.textContent = '\n'));
              }
            }),
            (t.deploy = function () {
              var e = this.sheet;
              e &&
                (e.options.link
                  ? this.insertRules(e.rules)
                  : (this.element.textContent = '\n' + e.toString() + '\n'));
            }),
            (t.insertRules = function (e, t) {
              for (var n = 0; n < e.index.length; n++)
                this.insertRule(e.index[n], n, t);
            }),
            (t.insertRule = function (e, t, n) {
              if ((void 0 === n && (n = this.element.sheet), e.rules)) {
                var r = e,
                  s = n;
                if ('conditional' === e.type || 'keyframes' === e.type) {
                  var o = we(n, t);
                  if (!1 === (s = me(n, r.toString({ children: !1 }), o)))
                    return !1;
                  this.refCssRule(e, o, s);
                }
                return this.insertRules(r.rules, s), s;
              }
              var i = e.toString();
              if (!i) return !1;
              var a = we(n, t),
                c = me(n, i, a);
              return (
                !1 !== c &&
                ((this.hasInsertedRules = !0), this.refCssRule(e, a, c), c)
              );
            }),
            (t.refCssRule = function (e, t, n) {
              (e.renderable = n),
                e.options.parent instanceof te && this.cssRules.splice(t, 0, n);
            }),
            (t.deleteRule = function (e) {
              var t = this.element.sheet,
                n = this.indexOf(e);
              return (
                -1 !== n && (t.deleteRule(n), this.cssRules.splice(n, 1), !0)
              );
            }),
            (t.indexOf = function (e) {
              return this.cssRules.indexOf(e);
            }),
            (t.replaceRule = function (e, t) {
              var n = this.indexOf(e);
              return (
                -1 !== n &&
                (this.element.sheet.deleteRule(n),
                this.cssRules.splice(n, 1),
                this.insertRule(t, n))
              );
            }),
            (t.getRules = function () {
              return this.element.sheet.cssRules;
            }),
            e
          );
        })(),
        ve = 0,
        Ee = (function () {
          function e(e) {
            (this.id = ve++),
              (this.version = '10.9.0'),
              (this.plugins = new ne()),
              (this.options = {
                id: { minify: !1 },
                createGenerateId: ce,
                Renderer: u ? be : null,
                plugins: [],
              }),
              (this.generateId = ce({ minify: !1 }));
            for (var t = 0; t < K.length; t++)
              this.plugins.use(K[t], { queue: 'internal' });
            this.setup(e);
          }
          var t = e.prototype;
          return (
            (t.setup = function (e) {
              return (
                void 0 === e && (e = {}),
                e.createGenerateId &&
                  (this.options.createGenerateId = e.createGenerateId),
                e.id && (this.options.id = (0, r.Z)({}, this.options.id, e.id)),
                (e.createGenerateId || e.id) &&
                  (this.generateId = this.options.createGenerateId(
                    this.options.id,
                  )),
                null != e.insertionPoint &&
                  (this.options.insertionPoint = e.insertionPoint),
                'Renderer' in e && (this.options.Renderer = e.Renderer),
                e.plugins && this.use.apply(this, e.plugins),
                this
              );
            }),
            (t.createStyleSheet = function (e, t) {
              void 0 === t && (t = {});
              var n = t.index;
              'number' !== typeof n && (n = 0 === se.index ? 0 : se.index + 1);
              var s = new te(
                e,
                (0, r.Z)({}, t, {
                  jss: this,
                  generateId: t.generateId || this.generateId,
                  insertionPoint: this.options.insertionPoint,
                  Renderer: this.options.Renderer,
                  index: n,
                }),
              );
              return this.plugins.onProcessSheet(s), s;
            }),
            (t.removeStyleSheet = function (e) {
              return e.detach(), se.remove(e), this;
            }),
            (t.createRule = function (e, t, n) {
              if (
                (void 0 === t && (t = {}),
                void 0 === n && (n = {}),
                'object' === typeof e)
              )
                return this.createRule(void 0, e, t);
              var s = (0, r.Z)({}, n, {
                name: e,
                jss: this,
                Renderer: this.options.Renderer,
              });
              s.generateId || (s.generateId = this.generateId),
                s.classes || (s.classes = {}),
                s.keyframes || (s.keyframes = {});
              var o = g(e, t, s);
              return o && this.plugins.onProcessRule(o), o;
            }),
            (t.use = function () {
              for (
                var e = this, t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return (
                n.forEach(function (t) {
                  e.plugins.use(t);
                }),
                this
              );
            }),
            e
          );
        })(),
        ke = function (e) {
          return new Ee(e);
        },
        Se = 'object' === typeof CSS && null != CSS && 'number' in CSS;
      function Ce(e) {
        var t = null;
        for (var n in e) {
          var r = e[n],
            s = typeof r;
          if ('function' === s) t || (t = {}), (t[n] = r);
          else if ('object' === s && null !== r && !Array.isArray(r)) {
            var o = Ce(r);
            o && (t || (t = {}), (t[n] = o));
          }
        }
        return t;
      }
      ke();
      function xe(e = {}) {
        const { baseClasses: t, newClasses: n, Component: s } = e;
        if (!n) return t;
        const o = (0, r.Z)({}, t);
        return (
          Object.keys(n).forEach(e => {
            n[e] && (o[e] = `${t[e]} ${n[e]}`);
          }),
          o
        );
      }
      const De = {
        set: (e, t, n, r) => {
          let s = e.get(t);
          s || ((s = new Map()), e.set(t, s)), s.set(n, r);
        },
        get: (e, t, n) => {
          const r = e.get(t);
          return r ? r.get(n) : void 0;
        },
        delete: (e, t, n) => {
          e.get(t).delete(n);
        },
      };
      var Pe = De,
        Ie = n(56760),
        Te = n(51825);
      const Ae = [
        'checked',
        'disabled',
        'error',
        'focused',
        'focusVisible',
        'required',
        'expanded',
        'selected',
      ];
      var je = Date.now(),
        Re = 'fnValues' + je,
        Ne = 'fnStyle' + ++je,
        Be = function () {
          return {
            onCreateRule: function (e, t, n) {
              if ('function' !== typeof t) return null;
              var r = g(e, {}, n);
              return (r[Ne] = t), r;
            },
            onProcessStyle: function (e, t) {
              if (Re in t || Ne in t) return e;
              var n = {};
              for (var r in e) {
                var s = e[r];
                'function' === typeof s && (delete e[r], (n[r] = s));
              }
              return (t[Re] = n), e;
            },
            onUpdate: function (e, t, n, r) {
              var s = t,
                o = s[Ne];
              o && (s.style = o(e) || {});
              var i = s[Re];
              if (i) for (var a in i) s.prop(a, i[a](e), r);
            },
          };
        },
        Oe = '@global',
        $e = '@global ',
        Ue = (function () {
          function e(e, t, n) {
            for (var s in ((this.type = 'global'),
            (this.at = Oe),
            (this.isProcessed = !1),
            (this.key = e),
            (this.options = n),
            (this.rules = new ee((0, r.Z)({}, n, { parent: this }))),
            t))
              this.rules.add(s, t[s]);
            this.rules.process();
          }
          var t = e.prototype;
          return (
            (t.getRule = function (e) {
              return this.rules.get(e);
            }),
            (t.addRule = function (e, t, n) {
              var r = this.rules.add(e, t, n);
              return r && this.options.jss.plugins.onProcessRule(r), r;
            }),
            (t.replaceRule = function (e, t, n) {
              var r = this.rules.replace(e, t, n);
              return r && this.options.jss.plugins.onProcessRule(r), r;
            }),
            (t.indexOf = function (e) {
              return this.rules.indexOf(e);
            }),
            (t.toString = function (e) {
              return this.rules.toString(e);
            }),
            e
          );
        })(),
        Le = (function () {
          function e(e, t, n) {
            (this.type = 'global'),
              (this.at = Oe),
              (this.isProcessed = !1),
              (this.key = e),
              (this.options = n);
            var s = e.substr($e.length);
            this.rule = n.jss.createRule(
              s,
              t,
              (0, r.Z)({}, n, { parent: this }),
            );
          }
          return (
            (e.prototype.toString = function (e) {
              return this.rule ? this.rule.toString(e) : '';
            }),
            e
          );
        })(),
        _e = /\s*,\s*/g;
      function ze(e, t) {
        for (var n = e.split(_e), r = '', s = 0; s < n.length; s++)
          (r += t + ' ' + n[s].trim()), n[s + 1] && (r += ', ');
        return r;
      }
      var Me = function () {
          return {
            onCreateRule: function (e, t, n) {
              if (!e) return null;
              if (e === Oe) return new Ue(e, t, n);
              if ('@' === e[0] && e.substr(0, $e.length) === $e)
                return new Le(e, t, n);
              var r = n.parent;
              return (
                r &&
                  ('global' === r.type ||
                    (r.options.parent && 'global' === r.options.parent.type)) &&
                  (n.scoped = !1),
                n.selector || !1 !== n.scoped || (n.selector = e),
                null
              );
            },
            onProcessRule: function (e, t) {
              'style' === e.type &&
                t &&
                ((function (e, t) {
                  var n = e.options,
                    s = e.style,
                    o = s ? s[Oe] : null;
                  if (o) {
                    for (var i in o)
                      t.addRule(
                        i,
                        o[i],
                        (0, r.Z)({}, n, { selector: ze(i, e.selector) }),
                      );
                    delete s[Oe];
                  }
                })(e, t),
                (function (e, t) {
                  var n = e.options,
                    s = e.style;
                  for (var o in s)
                    if ('@' === o[0] && o.substr(0, Oe.length) === Oe) {
                      var i = ze(o.substr(Oe.length), e.selector);
                      t.addRule(i, s[o], (0, r.Z)({}, n, { selector: i })),
                        delete s[o];
                    }
                })(e, t));
            },
          };
        },
        Fe = /\s*,\s*/g,
        We = /&/g,
        He = /\$([\w-]+)/g;
      var qe = function () {
          function e(e, t) {
            return function (n, r) {
              var s = e.getRule(r) || (t && t.getRule(r));
              return s ? s.selector : r;
            };
          }
          function t(e, t) {
            for (
              var n = t.split(Fe), r = e.split(Fe), s = '', o = 0;
              o < n.length;
              o++
            )
              for (var i = n[o], a = 0; a < r.length; a++) {
                var c = r[a];
                s && (s += ', '),
                  (s += -1 !== c.indexOf('&') ? c.replace(We, i) : i + ' ' + c);
              }
            return s;
          }
          function n(e, t, n) {
            if (n) return (0, r.Z)({}, n, { index: n.index + 1 });
            var s = e.options.nestingLevel;
            s = void 0 === s ? 1 : s + 1;
            var o = (0, r.Z)({}, e.options, {
              nestingLevel: s,
              index: t.indexOf(e) + 1,
            });
            return delete o.name, o;
          }
          return {
            onProcessStyle: function (s, o, i) {
              if ('style' !== o.type) return s;
              var a,
                c,
                u = o,
                l = u.options.parent;
              for (var f in s) {
                var h = -1 !== f.indexOf('&'),
                  d = '@' === f[0];
                if (h || d) {
                  if (((a = n(u, l, a)), h)) {
                    var p = t(f, u.selector);
                    c || (c = e(l, i)), (p = p.replace(He, c));
                    var y = u.key + '-' + f;
                    'replaceRule' in l
                      ? l.replaceRule(y, s[f], (0, r.Z)({}, a, { selector: p }))
                      : l.addRule(y, s[f], (0, r.Z)({}, a, { selector: p }));
                  } else
                    d &&
                      l
                        .addRule(f, {}, a)
                        .addRule(u.key, s[f], { selector: u.selector });
                  delete s[f];
                }
              }
              return s;
            },
          };
        },
        Ve = /[A-Z]/g,
        Ze = /^ms-/,
        Je = {};
      function Ge(e) {
        return '-' + e.toLowerCase();
      }
      var Xe = function (e) {
        if (Je.hasOwnProperty(e)) return Je[e];
        var t = e.replace(Ve, Ge);
        return (Je[e] = Ze.test(t) ? '-' + t : t);
      };
      function Ke(e) {
        var t = {};
        for (var n in e) {
          t[0 === n.indexOf('--') ? n : Xe(n)] = e[n];
        }
        return (
          e.fallbacks &&
            (Array.isArray(e.fallbacks)
              ? (t.fallbacks = e.fallbacks.map(Ke))
              : (t.fallbacks = Ke(e.fallbacks))),
          t
        );
      }
      var Qe = function () {
          return {
            onProcessStyle: function (e) {
              if (Array.isArray(e)) {
                for (var t = 0; t < e.length; t++) e[t] = Ke(e[t]);
                return e;
              }
              return Ke(e);
            },
            onChangeValue: function (e, t, n) {
              if (0 === t.indexOf('--')) return e;
              var r = Xe(t);
              return t === r ? e : (n.prop(r, e), null);
            },
          };
        },
        Ye = Se && CSS ? CSS.px : 'px',
        et = Se && CSS ? CSS.ms : 'ms',
        tt = Se && CSS ? CSS.percent : '%';
      function nt(e) {
        var t = /(-[a-z])/g,
          n = function (e) {
            return e[1].toUpperCase();
          },
          r = {};
        for (var s in e) (r[s] = e[s]), (r[s.replace(t, n)] = e[s]);
        return r;
      }
      var rt = nt({
        'animation-delay': et,
        'animation-duration': et,
        'background-position': Ye,
        'background-position-x': Ye,
        'background-position-y': Ye,
        'background-size': Ye,
        border: Ye,
        'border-bottom': Ye,
        'border-bottom-left-radius': Ye,
        'border-bottom-right-radius': Ye,
        'border-bottom-width': Ye,
        'border-left': Ye,
        'border-left-width': Ye,
        'border-radius': Ye,
        'border-right': Ye,
        'border-right-width': Ye,
        'border-top': Ye,
        'border-top-left-radius': Ye,
        'border-top-right-radius': Ye,
        'border-top-width': Ye,
        'border-width': Ye,
        'border-block': Ye,
        'border-block-end': Ye,
        'border-block-end-width': Ye,
        'border-block-start': Ye,
        'border-block-start-width': Ye,
        'border-block-width': Ye,
        'border-inline': Ye,
        'border-inline-end': Ye,
        'border-inline-end-width': Ye,
        'border-inline-start': Ye,
        'border-inline-start-width': Ye,
        'border-inline-width': Ye,
        'border-start-start-radius': Ye,
        'border-start-end-radius': Ye,
        'border-end-start-radius': Ye,
        'border-end-end-radius': Ye,
        margin: Ye,
        'margin-bottom': Ye,
        'margin-left': Ye,
        'margin-right': Ye,
        'margin-top': Ye,
        'margin-block': Ye,
        'margin-block-end': Ye,
        'margin-block-start': Ye,
        'margin-inline': Ye,
        'margin-inline-end': Ye,
        'margin-inline-start': Ye,
        padding: Ye,
        'padding-bottom': Ye,
        'padding-left': Ye,
        'padding-right': Ye,
        'padding-top': Ye,
        'padding-block': Ye,
        'padding-block-end': Ye,
        'padding-block-start': Ye,
        'padding-inline': Ye,
        'padding-inline-end': Ye,
        'padding-inline-start': Ye,
        'mask-position-x': Ye,
        'mask-position-y': Ye,
        'mask-size': Ye,
        height: Ye,
        width: Ye,
        'min-height': Ye,
        'max-height': Ye,
        'min-width': Ye,
        'max-width': Ye,
        bottom: Ye,
        left: Ye,
        top: Ye,
        right: Ye,
        inset: Ye,
        'inset-block': Ye,
        'inset-block-end': Ye,
        'inset-block-start': Ye,
        'inset-inline': Ye,
        'inset-inline-end': Ye,
        'inset-inline-start': Ye,
        'box-shadow': Ye,
        'text-shadow': Ye,
        'column-gap': Ye,
        'column-rule': Ye,
        'column-rule-width': Ye,
        'column-width': Ye,
        'font-size': Ye,
        'font-size-delta': Ye,
        'letter-spacing': Ye,
        'text-decoration-thickness': Ye,
        'text-indent': Ye,
        'text-stroke': Ye,
        'text-stroke-width': Ye,
        'word-spacing': Ye,
        motion: Ye,
        'motion-offset': Ye,
        outline: Ye,
        'outline-offset': Ye,
        'outline-width': Ye,
        perspective: Ye,
        'perspective-origin-x': tt,
        'perspective-origin-y': tt,
        'transform-origin': tt,
        'transform-origin-x': tt,
        'transform-origin-y': tt,
        'transform-origin-z': tt,
        'transition-delay': et,
        'transition-duration': et,
        'vertical-align': Ye,
        'flex-basis': Ye,
        'shape-margin': Ye,
        size: Ye,
        gap: Ye,
        grid: Ye,
        'grid-gap': Ye,
        'row-gap': Ye,
        'grid-row-gap': Ye,
        'grid-column-gap': Ye,
        'grid-template-rows': Ye,
        'grid-template-columns': Ye,
        'grid-auto-rows': Ye,
        'grid-auto-columns': Ye,
        'box-shadow-x': Ye,
        'box-shadow-y': Ye,
        'box-shadow-blur': Ye,
        'box-shadow-spread': Ye,
        'font-line-height': Ye,
        'text-shadow-x': Ye,
        'text-shadow-y': Ye,
        'text-shadow-blur': Ye,
      });
      function st(e, t, n) {
        if (null == t) return t;
        if (Array.isArray(t))
          for (var r = 0; r < t.length; r++) t[r] = st(e, t[r], n);
        else if ('object' === typeof t)
          if ('fallbacks' === e) for (var s in t) t[s] = st(s, t[s], n);
          else for (var o in t) t[o] = st(e + '-' + o, t[o], n);
        else if ('number' === typeof t && !1 === isNaN(t)) {
          var i = n[e] || rt[e];
          return !i || (0 === t && i === Ye)
            ? t.toString()
            : 'function' === typeof i
            ? i(t).toString()
            : '' + t + i;
        }
        return t;
      }
      var ot = function (e) {
          void 0 === e && (e = {});
          var t = nt(e);
          return {
            onProcessStyle: function (e, n) {
              if ('style' !== n.type) return e;
              for (var r in e) e[r] = st(r, e[r], t);
              return e;
            },
            onChangeValue: function (e, n) {
              return st(n, e, t);
            },
          };
        },
        it = n(30907);
      var at = n(40181);
      function ct(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, it.Z)(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          (0, at.Z)(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      var ut = '',
        lt = '',
        ft = '',
        ht = '',
        dt = u && 'ontouchstart' in document.documentElement;
      if (u) {
        var pt = { Moz: '-moz-', ms: '-ms-', O: '-o-', Webkit: '-webkit-' },
          yt = document.createElement('p').style;
        for (var gt in pt)
          if (gt + 'Transform' in yt) {
            (ut = gt), (lt = pt[gt]);
            break;
          }
        'Webkit' === ut &&
          'msHyphens' in yt &&
          ((ut = 'ms'), (lt = pt.ms), (ht = 'edge')),
          'Webkit' === ut && '-apple-trailing-word' in yt && (ft = 'apple');
      }
      var mt = ut,
        wt = lt,
        bt = ft,
        vt = ht,
        Et = dt;
      var kt = {
          noPrefill: ['appearance'],
          supportedProperty: function (e) {
            return (
              'appearance' === e && ('ms' === mt ? '-webkit-' + e : wt + e)
            );
          },
        },
        St = {
          noPrefill: ['color-adjust'],
          supportedProperty: function (e) {
            return (
              'color-adjust' === e && ('Webkit' === mt ? wt + 'print-' + e : e)
            );
          },
        },
        Ct = /[-\s]+(.)?/g;
      function xt(e, t) {
        return t ? t.toUpperCase() : '';
      }
      function Dt(e) {
        return e.replace(Ct, xt);
      }
      function Pt(e) {
        return Dt('-' + e);
      }
      var It,
        Tt = {
          noPrefill: ['mask'],
          supportedProperty: function (e, t) {
            if (!/^mask/.test(e)) return !1;
            if ('Webkit' === mt) {
              var n = 'mask-image';
              if (Dt(n) in t) return e;
              if (mt + Pt(n) in t) return wt + e;
            }
            return e;
          },
        },
        At = {
          noPrefill: ['text-orientation'],
          supportedProperty: function (e) {
            return (
              'text-orientation' === e && ('apple' !== bt || Et ? e : wt + e)
            );
          },
        },
        jt = {
          noPrefill: ['transform'],
          supportedProperty: function (e, t, n) {
            return 'transform' === e && (n.transform ? e : wt + e);
          },
        },
        Rt = {
          noPrefill: ['transition'],
          supportedProperty: function (e, t, n) {
            return 'transition' === e && (n.transition ? e : wt + e);
          },
        },
        Nt = {
          noPrefill: ['writing-mode'],
          supportedProperty: function (e) {
            return (
              'writing-mode' === e &&
              ('Webkit' === mt || ('ms' === mt && 'edge' !== vt) ? wt + e : e)
            );
          },
        },
        Bt = {
          noPrefill: ['user-select'],
          supportedProperty: function (e) {
            return (
              'user-select' === e &&
              ('Moz' === mt || 'ms' === mt || 'apple' === bt ? wt + e : e)
            );
          },
        },
        Ot = {
          supportedProperty: function (e, t) {
            return (
              !!/^break-/.test(e) &&
              ('Webkit' === mt
                ? 'WebkitColumn' + Pt(e) in t && wt + 'column-' + e
                : 'Moz' === mt && 'page' + Pt(e) in t && 'page-' + e)
            );
          },
        },
        $t = {
          supportedProperty: function (e, t) {
            if (!/^(border|margin|padding)-inline/.test(e)) return !1;
            if ('Moz' === mt) return e;
            var n = e.replace('-inline', '');
            return mt + Pt(n) in t && wt + n;
          },
        },
        Ut = {
          supportedProperty: function (e, t) {
            return Dt(e) in t && e;
          },
        },
        Lt = {
          supportedProperty: function (e, t) {
            var n = Pt(e);
            return '-' === e[0] || ('-' === e[0] && '-' === e[1])
              ? e
              : mt + n in t
              ? wt + e
              : 'Webkit' !== mt && 'Webkit' + n in t && '-webkit-' + e;
          },
        },
        _t = {
          supportedProperty: function (e) {
            return (
              'scroll-snap' === e.substring(0, 11) &&
              ('ms' === mt ? '' + wt + e : e)
            );
          },
        },
        zt = {
          supportedProperty: function (e) {
            return (
              'overscroll-behavior' === e &&
              ('ms' === mt ? wt + 'scroll-chaining' : e)
            );
          },
        },
        Mt = {
          'flex-grow': 'flex-positive',
          'flex-shrink': 'flex-negative',
          'flex-basis': 'flex-preferred-size',
          'justify-content': 'flex-pack',
          order: 'flex-order',
          'align-items': 'flex-align',
          'align-content': 'flex-line-pack',
        },
        Ft = {
          supportedProperty: function (e, t) {
            var n = Mt[e];
            return !!n && mt + Pt(n) in t && wt + n;
          },
        },
        Wt = {
          flex: 'box-flex',
          'flex-grow': 'box-flex',
          'flex-direction': ['box-orient', 'box-direction'],
          order: 'box-ordinal-group',
          'align-items': 'box-align',
          'flex-flow': ['box-orient', 'box-direction'],
          'justify-content': 'box-pack',
        },
        Ht = Object.keys(Wt),
        qt = function (e) {
          return wt + e;
        },
        Vt = {
          supportedProperty: function (e, t, n) {
            var r = n.multiple;
            if (Ht.indexOf(e) > -1) {
              var s = Wt[e];
              if (!Array.isArray(s)) return mt + Pt(s) in t && wt + s;
              if (!r) return !1;
              for (var o = 0; o < s.length; o++)
                if (!(mt + Pt(s[0]) in t)) return !1;
              return s.map(qt);
            }
            return !1;
          },
        },
        Zt = [kt, St, Tt, At, jt, Rt, Nt, Bt, Ot, $t, Ut, Lt, _t, zt, Ft, Vt],
        Jt = Zt.filter(function (e) {
          return e.supportedProperty;
        }).map(function (e) {
          return e.supportedProperty;
        }),
        Gt = Zt.filter(function (e) {
          return e.noPrefill;
        }).reduce(function (e, t) {
          return e.push.apply(e, ct(t.noPrefill)), e;
        }, []),
        Xt = {};
      if (u) {
        It = document.createElement('p');
        var Kt = window.getComputedStyle(document.documentElement, '');
        for (var Qt in Kt) isNaN(Qt) || (Xt[Kt[Qt]] = Kt[Qt]);
        Gt.forEach(function (e) {
          return delete Xt[e];
        });
      }
      function Yt(e, t) {
        if ((void 0 === t && (t = {}), !It)) return e;
        if (null != Xt[e]) return Xt[e];
        ('transition' !== e && 'transform' !== e) || (t[e] = e in It.style);
        for (
          var n = 0;
          n < Jt.length && ((Xt[e] = Jt[n](e, It.style, t)), !Xt[e]);
          n++
        );
        try {
          It.style[e] = '';
        } catch (r) {
          return !1;
        }
        return Xt[e];
      }
      var en,
        tn = {},
        nn = {
          transition: 1,
          'transition-property': 1,
          '-webkit-transition': 1,
          '-webkit-transition-property': 1,
        },
        rn = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
      function sn(e, t, n) {
        if ('var' === t) return 'var';
        if ('all' === t) return 'all';
        if ('all' === n) return ', all';
        var r = t ? Yt(t) : ', ' + Yt(n);
        return r || t || n;
      }
      function on(e, t) {
        var n = t;
        if (!en || 'content' === e) return t;
        if ('string' !== typeof n || !isNaN(parseInt(n, 10))) return n;
        var r = e + n;
        if (null != tn[r]) return tn[r];
        try {
          en.style[e] = n;
        } catch (s) {
          return (tn[r] = !1), !1;
        }
        if (nn[e]) n = n.replace(rn, sn);
        else if (
          '' === en.style[e] &&
          ('-ms-flex' === (n = wt + n) && (en.style[e] = '-ms-flexbox'),
          (en.style[e] = n),
          '' === en.style[e])
        )
          return (tn[r] = !1), !1;
        return (en.style[e] = ''), (tn[r] = n), tn[r];
      }
      u && (en = document.createElement('p'));
      var an = function () {
        function e(t) {
          for (var n in t) {
            var r = t[n];
            if ('fallbacks' === n && Array.isArray(r)) t[n] = r.map(e);
            else {
              var s = !1,
                o = Yt(n);
              o && o !== n && (s = !0);
              var i = !1,
                a = on(o, w(r));
              a && a !== r && (i = !0),
                (s || i) && (s && delete t[n], (t[o || n] = a || r));
            }
          }
          return t;
        }
        return {
          onProcessRule: function (e) {
            if ('keyframes' === e.type) {
              var t = e;
              t.at = (function (e) {
                return '-' === e[1] || 'ms' === mt
                  ? e
                  : '@' + wt + 'keyframes' + e.substr(10);
              })(t.at);
            }
          },
          onProcessStyle: function (t, n) {
            return 'style' !== n.type ? t : e(t);
          },
          onChangeValue: function (e, t) {
            return on(t, w(e)) || e;
          },
        };
      };
      var cn = function () {
        var e = function (e, t) {
          return e.length === t.length ? (e > t ? 1 : -1) : e.length - t.length;
        };
        return {
          onProcessStyle: function (t, n) {
            if ('style' !== n.type) return t;
            for (
              var r = {}, s = Object.keys(t).sort(e), o = 0;
              o < s.length;
              o++
            )
              r[s[o]] = t[s[o]];
            return r;
          },
        };
      };
      var un = n(85893);
      const ln = ke({
          plugins: [
            Be(),
            Me(),
            qe(),
            Qe(),
            ot(),
            'undefined' === typeof window ? null : an(),
            cn(),
          ],
        }),
        fn = (function (e = {}) {
          const {
              disableGlobal: t = !1,
              productionPrefix: n = 'jss',
              seed: r = '',
            } = e,
            s = '' === r ? '' : `${r}-`;
          let o = 0;
          const i = () => ((o += 1), o);
          return (e, o) => {
            const a = o.options.name;
            if (a && 0 === a.indexOf('Mui') && !o.options.link && !t) {
              if (-1 !== Ae.indexOf(e.key)) return `Mui-${e.key}`;
              const t = `${s}${a}-${e.key}`;
              return o.options.theme[Te.Z] && '' === r ? `${t}-${i()}` : t;
            }
            return `${s}${n}${i()}`;
          };
        })(),
        hn = {
          disableGeneration: !1,
          generateClassName: fn,
          jss: ln,
          sheetsCache: null,
          sheetsManager: new Map(),
          sheetsRegistry: null,
        },
        dn = o.createContext(hn);
      let pn = -1e9;
      var yn = n(59766),
        gn = n(28320);
      const mn = ['variant'];
      function wn(e) {
        return 0 === e.length;
      }
      function bn(e) {
        const t = 'function' === typeof e;
        return {
          create: (n, o) => {
            let i;
            try {
              i = t ? e(n) : e;
            } catch (l) {
              throw l;
            }
            if (
              !o ||
              !n.components ||
              !n.components[o] ||
              (!n.components[o].styleOverrides && !n.components[o].variants)
            )
              return i;
            const a = n.components[o].styleOverrides || {},
              c = n.components[o].variants || [],
              u = (0, r.Z)({}, i);
            return (
              Object.keys(a).forEach(e => {
                u[e] = (0, yn.Z)(u[e] || {}, a[e]);
              }),
              c.forEach(e => {
                const t = (function (e) {
                  const { variant: t } = e,
                    n = (0, s.Z)(e, mn);
                  let r = t || '';
                  return (
                    Object.keys(n)
                      .sort()
                      .forEach(t => {
                        r +=
                          'color' === t
                            ? wn(r)
                              ? e[t]
                              : (0, gn.Z)(e[t])
                            : `${wn(r) ? t : (0, gn.Z)(t)}${(0, gn.Z)(
                                e[t].toString(),
                              )}`;
                      }),
                    r
                  );
                })(e.props);
                u[t] = (0, yn.Z)(u[t] || {}, e.style);
              }),
              u
            );
          },
          options: {},
        };
      }
      var vn = {};
      const En = ['name', 'classNamePrefix', 'Component', 'defaultTheme'];
      function kn(
        { state: e, theme: t, stylesOptions: n, stylesCreator: s, name: o },
        i,
      ) {
        if (n.disableGeneration) return;
        let a = Pe.get(n.sheetsManager, s, t);
        a ||
          ((a = { refs: 0, staticSheet: null, dynamicStyles: null }),
          Pe.set(n.sheetsManager, s, t, a));
        const c = (0, r.Z)({}, s.options, n, {
          theme: t,
          flip: 'boolean' === typeof n.flip ? n.flip : 'rtl' === t.direction,
        });
        c.generateId = c.serverGenerateClassName || c.generateClassName;
        const u = n.sheetsRegistry;
        if (0 === a.refs) {
          let e;
          n.sheetsCache && (e = Pe.get(n.sheetsCache, s, t));
          const i = s.create(t, o);
          e ||
            ((e = n.jss.createStyleSheet(i, (0, r.Z)({ link: !1 }, c))),
            e.attach(),
            n.sheetsCache && Pe.set(n.sheetsCache, s, t, e)),
            u && u.add(e),
            (a.staticSheet = e),
            (a.dynamicStyles = Ce(i));
        }
        if (a.dynamicStyles) {
          const t = n.jss.createStyleSheet(
            a.dynamicStyles,
            (0, r.Z)({ link: !0 }, c),
          );
          t.update(i),
            t.attach(),
            (e.dynamicSheet = t),
            (e.classes = xe({
              baseClasses: a.staticSheet.classes,
              newClasses: t.classes,
            })),
            u && u.add(t);
        } else e.classes = a.staticSheet.classes;
        a.refs += 1;
      }
      function Sn(e, t = {}) {
        const {
            name: n,
            classNamePrefix: i,
            Component: a,
            defaultTheme: c = vn,
          } = t,
          u = (0, s.Z)(t, En),
          l = bn(e),
          f = n || i || 'makeStyles';
        l.options = {
          index: ((pn += 1), pn),
          name: n,
          meta: f,
          classNamePrefix: f,
        };
        return (e = {}) => {
          const t = (0, Ie.Z)() || c,
            s = (0, r.Z)({}, o.useContext(dn), u),
            i = o.useRef(),
            f = o.useRef();
          !(function (e, t) {
            const n = o.useRef([]);
            let r;
            const s = o.useMemo(() => ({}), t);
            n.current !== s && ((n.current = s), (r = e())),
              o.useEffect(
                () => () => {
                  r && r();
                },
                [s],
              );
          })(() => {
            const r = {
              name: n,
              state: {},
              stylesCreator: l,
              stylesOptions: s,
              theme: t,
            };
            return (
              kn(r, e),
              (f.current = !1),
              (i.current = r),
              () => {
                !(function ({
                  state: e,
                  theme: t,
                  stylesOptions: n,
                  stylesCreator: r,
                }) {
                  if (n.disableGeneration) return;
                  const s = Pe.get(n.sheetsManager, r, t);
                  s.refs -= 1;
                  const o = n.sheetsRegistry;
                  0 === s.refs &&
                    (Pe.delete(n.sheetsManager, r, t),
                    n.jss.removeStyleSheet(s.staticSheet),
                    o && o.remove(s.staticSheet)),
                    e.dynamicSheet &&
                      (n.jss.removeStyleSheet(e.dynamicSheet),
                      o && o.remove(e.dynamicSheet));
                })(r);
              }
            );
          }, [t, l]),
            o.useEffect(() => {
              f.current &&
                (function ({ state: e }, t) {
                  e.dynamicSheet && e.dynamicSheet.update(t);
                })(i.current, e),
                (f.current = !0);
            });
          const h = (function ({ state: e, stylesOptions: t }, n, r) {
            if (t.disableGeneration) return n || {};
            e.cacheClasses ||
              (e.cacheClasses = { value: null, lastProp: null, lastJSS: {} });
            let s = !1;
            return (
              e.classes !== e.cacheClasses.lastJSS &&
                ((e.cacheClasses.lastJSS = e.classes), (s = !0)),
              n !== e.cacheClasses.lastProp &&
                ((e.cacheClasses.lastProp = n), (s = !0)),
              s &&
                (e.cacheClasses.value = xe({
                  baseClasses: e.cacheClasses.lastJSS,
                  newClasses: n,
                  Component: r,
                })),
              e.cacheClasses.value
            );
          })(i.current, e.classes, a);
          return h;
        };
      }
      const Cn = ['defaultTheme', 'withTheme', 'name'],
        xn = ['classes'];
      var Dn =
        (e, t = {}) =>
        n => {
          const { defaultTheme: i, withTheme: c = !1, name: u } = t,
            l = (0, s.Z)(t, Cn);
          let f = u;
          const h = Sn(
              e,
              (0, r.Z)(
                {
                  defaultTheme: i,
                  Component: n,
                  name: u || n.displayName,
                  classNamePrefix: f,
                },
                l,
              ),
            ),
            d = o.forwardRef(function (e, t) {
              const o = (0, s.Z)(e, xn),
                a = h((0, r.Z)({}, n.defaultProps, e));
              let l,
                f = o;
              return (
                ('string' === typeof u || c) &&
                  ((l = (0, Ie.Z)() || i),
                  u &&
                    (f = (function (e) {
                      const { theme: t, name: n, props: s } = e;
                      if (
                        !t ||
                        !t.components ||
                        !t.components[n] ||
                        !t.components[n].defaultProps
                      )
                        return s;
                      const o = (0, r.Z)({}, s),
                        i = t.components[n].defaultProps;
                      let a;
                      for (a in i) void 0 === o[a] && (o[a] = i[a]);
                      return o;
                    })({ theme: l, name: u, props: o })),
                  c && !f.theme && (f.theme = l)),
                (0, un.jsx)(n, (0, r.Z)({ ref: t, classes: a }, f))
              );
            });
          return a()(d, n), d;
        };
    },
    34537: function (e) {
      'use strict';
      e.exports = function (e, t) {
        var n = new Array(arguments.length - 1),
          r = 0,
          s = 2,
          o = !0;
        for (; s < arguments.length; ) n[r++] = arguments[s++];
        return new Promise(function (s, i) {
          n[r] = function (e) {
            if (o)
              if (((o = !1), e)) i(e);
              else {
                for (
                  var t = new Array(arguments.length - 1), n = 0;
                  n < t.length;

                )
                  t[n++] = arguments[n];
                s.apply(null, t);
              }
          };
          try {
            e.apply(t || null, n);
          } catch (a) {
            o && ((o = !1), i(a));
          }
        });
      };
    },
    97419: function (e, t) {
      'use strict';
      var n = t;
      n.length = function (e) {
        var t = e.length;
        if (!t) return 0;
        for (var n = 0; --t % 4 > 1 && '=' === e.charAt(t); ) ++n;
        return Math.ceil(3 * e.length) / 4 - n;
      };
      for (var r = new Array(64), s = new Array(123), o = 0; o < 64; )
        s[
          (r[o] =
            o < 26 ? o + 65 : o < 52 ? o + 71 : o < 62 ? o - 4 : (o - 59) | 43)
        ] = o++;
      n.encode = function (e, t, n) {
        for (var s, o = null, i = [], a = 0, c = 0; t < n; ) {
          var u = e[t++];
          switch (c) {
            case 0:
              (i[a++] = r[u >> 2]), (s = (3 & u) << 4), (c = 1);
              break;
            case 1:
              (i[a++] = r[s | (u >> 4)]), (s = (15 & u) << 2), (c = 2);
              break;
            case 2:
              (i[a++] = r[s | (u >> 6)]), (i[a++] = r[63 & u]), (c = 0);
          }
          a > 8191 &&
            ((o || (o = [])).push(String.fromCharCode.apply(String, i)),
            (a = 0));
        }
        return (
          c && ((i[a++] = r[s]), (i[a++] = 61), 1 === c && (i[a++] = 61)),
          o
            ? (a && o.push(String.fromCharCode.apply(String, i.slice(0, a))),
              o.join(''))
            : String.fromCharCode.apply(String, i.slice(0, a))
        );
      };
      var i = 'invalid encoding';
      (n.decode = function (e, t, n) {
        for (var r, o = n, a = 0, c = 0; c < e.length; ) {
          var u = e.charCodeAt(c++);
          if (61 === u && a > 1) break;
          if (void 0 === (u = s[u])) throw Error(i);
          switch (a) {
            case 0:
              (r = u), (a = 1);
              break;
            case 1:
              (t[n++] = (r << 2) | ((48 & u) >> 4)), (r = u), (a = 2);
              break;
            case 2:
              (t[n++] = ((15 & r) << 4) | ((60 & u) >> 2)), (r = u), (a = 3);
              break;
            case 3:
              (t[n++] = ((3 & r) << 6) | u), (a = 0);
          }
        }
        if (1 === a) throw Error(i);
        return n - o;
      }),
        (n.test = function (e) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
            e,
          );
        });
    },
    19211: function (e) {
      'use strict';
      function t() {
        this._listeners = {};
      }
      (e.exports = t),
        (t.prototype.on = function (e, t, n) {
          return (
            (this._listeners[e] || (this._listeners[e] = [])).push({
              fn: t,
              ctx: n || this,
            }),
            this
          );
        }),
        (t.prototype.off = function (e, t) {
          if (void 0 === e) this._listeners = {};
          else if (void 0 === t) this._listeners[e] = [];
          else
            for (var n = this._listeners[e], r = 0; r < n.length; )
              n[r].fn === t ? n.splice(r, 1) : ++r;
          return this;
        }),
        (t.prototype.emit = function (e) {
          var t = this._listeners[e];
          if (t) {
            for (var n = [], r = 1; r < arguments.length; )
              n.push(arguments[r++]);
            for (r = 0; r < t.length; ) t[r].fn.apply(t[r++].ctx, n);
          }
          return this;
        });
    },
    10945: function (e) {
      'use strict';
      function t(e) {
        return (
          'undefined' !== typeof Float32Array
            ? (function () {
                var t = new Float32Array([-0]),
                  n = new Uint8Array(t.buffer),
                  r = 128 === n[3];
                function s(e, r, s) {
                  (t[0] = e),
                    (r[s] = n[0]),
                    (r[s + 1] = n[1]),
                    (r[s + 2] = n[2]),
                    (r[s + 3] = n[3]);
                }
                function o(e, r, s) {
                  (t[0] = e),
                    (r[s] = n[3]),
                    (r[s + 1] = n[2]),
                    (r[s + 2] = n[1]),
                    (r[s + 3] = n[0]);
                }
                function i(e, r) {
                  return (
                    (n[0] = e[r]),
                    (n[1] = e[r + 1]),
                    (n[2] = e[r + 2]),
                    (n[3] = e[r + 3]),
                    t[0]
                  );
                }
                function a(e, r) {
                  return (
                    (n[3] = e[r]),
                    (n[2] = e[r + 1]),
                    (n[1] = e[r + 2]),
                    (n[0] = e[r + 3]),
                    t[0]
                  );
                }
                (e.writeFloatLE = r ? s : o),
                  (e.writeFloatBE = r ? o : s),
                  (e.readFloatLE = r ? i : a),
                  (e.readFloatBE = r ? a : i);
              })()
            : (function () {
                function t(e, t, n, r) {
                  var s = t < 0 ? 1 : 0;
                  if ((s && (t = -t), 0 === t))
                    e(1 / t > 0 ? 0 : 2147483648, n, r);
                  else if (isNaN(t)) e(2143289344, n, r);
                  else if (t > 34028234663852886e22)
                    e(((s << 31) | 2139095040) >>> 0, n, r);
                  else if (t < 11754943508222875e-54)
                    e(
                      ((s << 31) | Math.round(t / 1401298464324817e-60)) >>> 0,
                      n,
                      r,
                    );
                  else {
                    var o = Math.floor(Math.log(t) / Math.LN2);
                    e(
                      ((s << 31) |
                        ((o + 127) << 23) |
                        (8388607 &
                          Math.round(t * Math.pow(2, -o) * 8388608))) >>>
                        0,
                      n,
                      r,
                    );
                  }
                }
                function i(e, t, n) {
                  var r = e(t, n),
                    s = 2 * (r >> 31) + 1,
                    o = (r >>> 23) & 255,
                    i = 8388607 & r;
                  return 255 === o
                    ? i
                      ? NaN
                      : s * (1 / 0)
                    : 0 === o
                    ? 1401298464324817e-60 * s * i
                    : s * Math.pow(2, o - 150) * (i + 8388608);
                }
                (e.writeFloatLE = t.bind(null, n)),
                  (e.writeFloatBE = t.bind(null, r)),
                  (e.readFloatLE = i.bind(null, s)),
                  (e.readFloatBE = i.bind(null, o));
              })(),
          'undefined' !== typeof Float64Array
            ? (function () {
                var t = new Float64Array([-0]),
                  n = new Uint8Array(t.buffer),
                  r = 128 === n[7];
                function s(e, r, s) {
                  (t[0] = e),
                    (r[s] = n[0]),
                    (r[s + 1] = n[1]),
                    (r[s + 2] = n[2]),
                    (r[s + 3] = n[3]),
                    (r[s + 4] = n[4]),
                    (r[s + 5] = n[5]),
                    (r[s + 6] = n[6]),
                    (r[s + 7] = n[7]);
                }
                function o(e, r, s) {
                  (t[0] = e),
                    (r[s] = n[7]),
                    (r[s + 1] = n[6]),
                    (r[s + 2] = n[5]),
                    (r[s + 3] = n[4]),
                    (r[s + 4] = n[3]),
                    (r[s + 5] = n[2]),
                    (r[s + 6] = n[1]),
                    (r[s + 7] = n[0]);
                }
                function i(e, r) {
                  return (
                    (n[0] = e[r]),
                    (n[1] = e[r + 1]),
                    (n[2] = e[r + 2]),
                    (n[3] = e[r + 3]),
                    (n[4] = e[r + 4]),
                    (n[5] = e[r + 5]),
                    (n[6] = e[r + 6]),
                    (n[7] = e[r + 7]),
                    t[0]
                  );
                }
                function a(e, r) {
                  return (
                    (n[7] = e[r]),
                    (n[6] = e[r + 1]),
                    (n[5] = e[r + 2]),
                    (n[4] = e[r + 3]),
                    (n[3] = e[r + 4]),
                    (n[2] = e[r + 5]),
                    (n[1] = e[r + 6]),
                    (n[0] = e[r + 7]),
                    t[0]
                  );
                }
                (e.writeDoubleLE = r ? s : o),
                  (e.writeDoubleBE = r ? o : s),
                  (e.readDoubleLE = r ? i : a),
                  (e.readDoubleBE = r ? a : i);
              })()
            : (function () {
                function t(e, t, n, r, s, o) {
                  var i = r < 0 ? 1 : 0;
                  if ((i && (r = -r), 0 === r))
                    e(0, s, o + t), e(1 / r > 0 ? 0 : 2147483648, s, o + n);
                  else if (isNaN(r)) e(0, s, o + t), e(2146959360, s, o + n);
                  else if (r > 17976931348623157e292)
                    e(0, s, o + t), e(((i << 31) | 2146435072) >>> 0, s, o + n);
                  else {
                    var a;
                    if (r < 22250738585072014e-324)
                      e((a = r / 5e-324) >>> 0, s, o + t),
                        e(((i << 31) | (a / 4294967296)) >>> 0, s, o + n);
                    else {
                      var c = Math.floor(Math.log(r) / Math.LN2);
                      1024 === c && (c = 1023),
                        e(
                          (4503599627370496 * (a = r * Math.pow(2, -c))) >>> 0,
                          s,
                          o + t,
                        ),
                        e(
                          ((i << 31) |
                            ((c + 1023) << 20) |
                            ((1048576 * a) & 1048575)) >>>
                            0,
                          s,
                          o + n,
                        );
                    }
                  }
                }
                function i(e, t, n, r, s) {
                  var o = e(r, s + t),
                    i = e(r, s + n),
                    a = 2 * (i >> 31) + 1,
                    c = (i >>> 20) & 2047,
                    u = 4294967296 * (1048575 & i) + o;
                  return 2047 === c
                    ? u
                      ? NaN
                      : a * (1 / 0)
                    : 0 === c
                    ? 5e-324 * a * u
                    : a * Math.pow(2, c - 1075) * (u + 4503599627370496);
                }
                (e.writeDoubleLE = t.bind(null, n, 0, 4)),
                  (e.writeDoubleBE = t.bind(null, r, 4, 0)),
                  (e.readDoubleLE = i.bind(null, s, 0, 4)),
                  (e.readDoubleBE = i.bind(null, o, 4, 0));
              })(),
          e
        );
      }
      function n(e, t, n) {
        (t[n] = 255 & e),
          (t[n + 1] = (e >>> 8) & 255),
          (t[n + 2] = (e >>> 16) & 255),
          (t[n + 3] = e >>> 24);
      }
      function r(e, t, n) {
        (t[n] = e >>> 24),
          (t[n + 1] = (e >>> 16) & 255),
          (t[n + 2] = (e >>> 8) & 255),
          (t[n + 3] = 255 & e);
      }
      function s(e, t) {
        return (
          (e[t] | (e[t + 1] << 8) | (e[t + 2] << 16) | (e[t + 3] << 24)) >>> 0
        );
      }
      function o(e, t) {
        return (
          ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0
        );
      }
      e.exports = t(t);
    },
    67199: function (module) {
      'use strict';
      function inquire(moduleName) {
        try {
          var mod = eval('quire'.replace(/^/, 're'))(moduleName);
          if (mod && (mod.length || Object.keys(mod).length)) return mod;
        } catch (e) {}
        return null;
      }
      module.exports = inquire;
    },
    76662: function (e) {
      'use strict';
      e.exports = function (e, t, n) {
        var r = n || 8192,
          s = r >>> 1,
          o = null,
          i = r;
        return function (n) {
          if (n < 1 || n > s) return e(n);
          i + n > r && ((o = e(r)), (i = 0));
          var a = t.call(o, i, (i += n));
          return 7 & i && (i = 1 + (7 | i)), a;
        };
      };
    },
    94997: function (e, t) {
      'use strict';
      var n = t;
      (n.length = function (e) {
        for (var t = 0, n = 0, r = 0; r < e.length; ++r)
          (n = e.charCodeAt(r)) < 128
            ? (t += 1)
            : n < 2048
            ? (t += 2)
            : 55296 === (64512 & n) && 56320 === (64512 & e.charCodeAt(r + 1))
            ? (++r, (t += 4))
            : (t += 3);
        return t;
      }),
        (n.read = function (e, t, n) {
          if (n - t < 1) return '';
          for (var r, s = null, o = [], i = 0; t < n; )
            (r = e[t++]) < 128
              ? (o[i++] = r)
              : r > 191 && r < 224
              ? (o[i++] = ((31 & r) << 6) | (63 & e[t++]))
              : r > 239 && r < 365
              ? ((r =
                  (((7 & r) << 18) |
                    ((63 & e[t++]) << 12) |
                    ((63 & e[t++]) << 6) |
                    (63 & e[t++])) -
                  65536),
                (o[i++] = 55296 + (r >> 10)),
                (o[i++] = 56320 + (1023 & r)))
              : (o[i++] =
                  ((15 & r) << 12) | ((63 & e[t++]) << 6) | (63 & e[t++])),
              i > 8191 &&
                ((s || (s = [])).push(String.fromCharCode.apply(String, o)),
                (i = 0));
          return s
            ? (i && s.push(String.fromCharCode.apply(String, o.slice(0, i))),
              s.join(''))
            : String.fromCharCode.apply(String, o.slice(0, i));
        }),
        (n.write = function (e, t, n) {
          for (var r, s, o = n, i = 0; i < e.length; ++i)
            (r = e.charCodeAt(i)) < 128
              ? (t[n++] = r)
              : r < 2048
              ? ((t[n++] = (r >> 6) | 192), (t[n++] = (63 & r) | 128))
              : 55296 === (64512 & r) &&
                56320 === (64512 & (s = e.charCodeAt(i + 1)))
              ? ((r = 65536 + ((1023 & r) << 10) + (1023 & s)),
                ++i,
                (t[n++] = (r >> 18) | 240),
                (t[n++] = ((r >> 12) & 63) | 128),
                (t[n++] = ((r >> 6) & 63) | 128),
                (t[n++] = (63 & r) | 128))
              : ((t[n++] = (r >> 12) | 224),
                (t[n++] = ((r >> 6) & 63) | 128),
                (t[n++] = (63 & r) | 128));
          return n - o;
        });
    },
    32044: function (e) {
      function t(e) {
        const t = new globalThis.AbortController();
        function n() {
          t.abort();
          for (const t of e)
            t && t.removeEventListener && t.removeEventListener('abort', n);
        }
        for (const r of e)
          if (r && r.addEventListener) {
            if (r.aborted) {
              n();
              break;
            }
            r.addEventListener('abort', n);
          }
        return t.signal;
      }
      (e.exports = t), (e.exports.anySignal = t);
    },
    23294: function (e, t, n) {
      'use strict';
      const r = n(86154);
      e.exports = function (e) {
        return 'function' === typeof e.stream
          ? r(e.stream())
          : r(new Response(e).body);
      };
    },
    86154: function (e) {
      'use strict';
      e.exports = async function* (e, t = {}) {
        const n = e.getReader();
        try {
          for (;;) {
            const e = await n.read();
            if (e.done) return;
            yield e.value;
          }
        } finally {
          !0 !== t.preventCancel && n.cancel(), n.releaseLock();
        }
      };
    },
    18254: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      const r = n(57135);
      function s(e) {
        const t = {};
        return (
          e.encrypted_key &&
            (t.encrypted_key = r.fromBase64url(e.encrypted_key)),
          e.header && (t.header = e.header),
          t
        );
      }
      function o(e) {
        const t = {};
        return (
          e.encrypted_key && (t.encrypted_key = r.toBase64url(e.encrypted_key)),
          e.header && (t.header = e.header),
          t
        );
      }
      t.default = {
        fromSplit: function (e) {
          const [t, n, r, s, o] = e,
            i = { ciphertext: s, iv: r, protected: t, tag: o };
          return n && (i.recipients = [{ encrypted_key: n }]), i;
        },
        decode: function (e) {
          const t = {
            ciphertext: r.toBase64url(e.ciphertext),
            protected: r.toBase64url(e.protected),
            iv: r.toBase64url(e.iv),
            tag: r.toBase64url(e.tag),
          };
          return (
            e.aad && (t.aad = r.toBase64url(e.aad)),
            e.recipients && (t.recipients = e.recipients.map(o)),
            e.unprotected && (t.unprotected = e.unprotected),
            t
          );
        },
        encode: function (e) {
          const t = {
            ciphertext: r.fromBase64url(e.ciphertext),
            protected: r.fromBase64url(e.protected),
            iv: r.fromBase64url(e.iv),
            tag: r.fromBase64url(e.tag),
          };
          return (
            e.aad && (t.aad = r.fromBase64url(e.aad)),
            e.recipients && (t.recipients = e.recipients.map(s)),
            e.unprotected && (t.unprotected = e.unprotected),
            t
          );
        },
      };
    },
    28630: function (e, t, n) {
      'use strict';
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, 'default', {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                'default' !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return s(t, e), t;
          },
        i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.decode = t.encode = t.toGeneral = t.code = t.name = void 0);
      const a = i(n(41446)),
        c = i(n(18254)),
        u = o(n(37548));
      function l(e) {
        return (
          'payload' in e &&
          'string' === typeof e.payload &&
          'signatures' in e &&
          Array.isArray(e.signatures)
        );
      }
      function f(e) {
        return (
          'ciphertext' in e &&
          'string' === typeof e.ciphertext &&
          'iv' in e &&
          'string' === typeof e.iv &&
          'protected' in e &&
          'string' === typeof e.protected &&
          'tag' in e &&
          'string' === typeof e.tag
        );
      }
      function h(e) {
        if ('string' === typeof e) {
          const t = e.split('.');
          if (3 === t.length) return a.default.fromSplit(t);
          if (5 === t.length) return c.default.fromSplit(t);
          throw new Error('Not a valid JOSE string');
        }
        if (l(e) || f(e)) return e;
        throw new Error('Not a valid unencoded JOSE object');
      }
      (t.name = 'dag-jose'),
        (t.code = 133),
        (t.toGeneral = h),
        (t.encode = function (e) {
          let t;
          if (('string' === typeof e && (e = h(e)), l(e)))
            t = a.default.encode(e);
          else {
            if (!f(e)) throw new Error('Not a valid JOSE object');
            t = c.default.encode(e);
          }
          return new Uint8Array(u.encode(t));
        }),
        (t.decode = function (e) {
          let t;
          try {
            t = u.decode(e);
          } catch (r) {
            throw new Error('Not a valid DAG-JOSE object');
          }
          if (
            'payload' in (n = t) &&
            n.payload instanceof Uint8Array &&
            'signatures' in n &&
            Array.isArray(n.signatures)
          )
            return a.default.decode(t);
          if (
            (function (e) {
              return (
                'ciphertext' in e &&
                e.ciphertext instanceof Uint8Array &&
                'iv' in e &&
                e.iv instanceof Uint8Array &&
                'protected' in e &&
                e.protected instanceof Uint8Array &&
                'tag' in e &&
                e.tag instanceof Uint8Array
              );
            })(t)
          )
            return c.default.decode(t);
          throw new Error('Not a valid DAG-JOSE object');
          var n;
        });
    },
    41446: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      const r = n(57135),
        s = n(81362);
      function o(e) {
        const t = { signature: r.fromBase64url(e.signature) };
        return (
          e.header && (t.header = e.header),
          e.protected && (t.protected = r.fromBase64url(e.protected)),
          t
        );
      }
      function i(e) {
        const t = { signature: r.toBase64url(e.signature) };
        return (
          e.header && (t.header = e.header),
          e.protected && (t.protected = r.toBase64url(e.protected)),
          t
        );
      }
      t.default = {
        fromSplit: function (e) {
          const [t, n, o] = e;
          return {
            payload: n,
            signatures: [{ protected: t, signature: o }],
            link: s.CID.decode(r.fromBase64url(n)),
          };
        },
        encode: function (e) {
          const t = r.fromBase64url(e.payload);
          try {
            s.CID.decode(t);
          } catch (n) {
            throw new Error('Not a valid DagJWS');
          }
          return { payload: t, signatures: e.signatures.map(o) };
        },
        decode: function (e) {
          const t = {
            payload: r.toBase64url(e.payload),
            signatures: e.signatures.map(i),
          };
          return (t.link = s.CID.decode(new Uint8Array(e.payload))), t;
        },
      };
    },
    57135: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.fromBase64url = t.toBase64url = void 0);
      const r = n(9885);
      (t.toBase64url = function (e) {
        return r.base64url.encode(e).slice(1);
      }),
        (t.fromBase64url = function (e) {
          return r.base64url.decode(`u${e}`);
        });
    },
    11227: function (e, t, n) {
      var r = n(34155);
      (t.formatArgs = function (t) {
        if (
          ((t[0] =
            (this.useColors ? '%c' : '') +
            this.namespace +
            (this.useColors ? ' %c' : ' ') +
            t[0] +
            (this.useColors ? '%c ' : ' ') +
            '+' +
            e.exports.humanize(this.diff)),
          !this.useColors)
        )
          return;
        const n = 'color: ' + this.color;
        t.splice(1, 0, n, 'color: inherit');
        let r = 0,
          s = 0;
        t[0].replace(/%[a-zA-Z%]/g, e => {
          '%%' !== e && (r++, '%c' === e && (s = r));
        }),
          t.splice(s, 0, n);
      }),
        (t.save = function (e) {
          try {
            e ? t.storage.setItem('debug', e) : t.storage.removeItem('debug');
          } catch (n) {}
        }),
        (t.load = function () {
          let e;
          try {
            e = t.storage.getItem('debug');
          } catch (n) {}
          !e && 'undefined' !== typeof r && 'env' in r && (e = r.env.DEBUG);
          return e;
        }),
        (t.useColors = function () {
          if (
            'undefined' !== typeof window &&
            window.process &&
            ('renderer' === window.process.type || window.process.__nwjs)
          )
            return !0;
          if (
            'undefined' !== typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          )
            return !1;
          return (
            ('undefined' !== typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ('undefined' !== typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ('undefined' !== typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ('undefined' !== typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }),
        (t.storage = (function () {
          try {
            return localStorage;
          } catch (e) {}
        })()),
        (t.destroy = (() => {
          let e = !1;
          return () => {
            e ||
              ((e = !0),
              console.warn(
                'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
              ));
          };
        })()),
        (t.colors = [
          '#0000CC',
          '#0000FF',
          '#0033CC',
          '#0033FF',
          '#0066CC',
          '#0066FF',
          '#0099CC',
          '#0099FF',
          '#00CC00',
          '#00CC33',
          '#00CC66',
          '#00CC99',
          '#00CCCC',
          '#00CCFF',
          '#3300CC',
          '#3300FF',
          '#3333CC',
          '#3333FF',
          '#3366CC',
          '#3366FF',
          '#3399CC',
          '#3399FF',
          '#33CC00',
          '#33CC33',
          '#33CC66',
          '#33CC99',
          '#33CCCC',
          '#33CCFF',
          '#6600CC',
          '#6600FF',
          '#6633CC',
          '#6633FF',
          '#66CC00',
          '#66CC33',
          '#9900CC',
          '#9900FF',
          '#9933CC',
          '#9933FF',
          '#99CC00',
          '#99CC33',
          '#CC0000',
          '#CC0033',
          '#CC0066',
          '#CC0099',
          '#CC00CC',
          '#CC00FF',
          '#CC3300',
          '#CC3333',
          '#CC3366',
          '#CC3399',
          '#CC33CC',
          '#CC33FF',
          '#CC6600',
          '#CC6633',
          '#CC9900',
          '#CC9933',
          '#CCCC00',
          '#CCCC33',
          '#FF0000',
          '#FF0033',
          '#FF0066',
          '#FF0099',
          '#FF00CC',
          '#FF00FF',
          '#FF3300',
          '#FF3333',
          '#FF3366',
          '#FF3399',
          '#FF33CC',
          '#FF33FF',
          '#FF6600',
          '#FF6633',
          '#FF9900',
          '#FF9933',
          '#FFCC00',
          '#FFCC33',
        ]),
        (t.log = console.debug || console.log || (() => {})),
        (e.exports = n(82447)(t));
      const { formatters: s } = e.exports;
      s.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return '[UnexpectedJSONParseError]: ' + t.message;
        }
      };
    },
    82447: function (e, t, n) {
      e.exports = function (e) {
        function t(e) {
          let n,
            s,
            o,
            i = null;
          function a(...e) {
            if (!a.enabled) return;
            const r = a,
              s = Number(new Date()),
              o = s - (n || s);
            (r.diff = o),
              (r.prev = n),
              (r.curr = s),
              (n = s),
              (e[0] = t.coerce(e[0])),
              'string' !== typeof e[0] && e.unshift('%O');
            let i = 0;
            (e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, s) => {
              if ('%%' === n) return '%';
              i++;
              const o = t.formatters[s];
              if ('function' === typeof o) {
                const t = e[i];
                (n = o.call(r, t)), e.splice(i, 1), i--;
              }
              return n;
            })),
              t.formatArgs.call(r, e);
            (r.log || t.log).apply(r, e);
          }
          return (
            (a.namespace = e),
            (a.useColors = t.useColors()),
            (a.color = t.selectColor(e)),
            (a.extend = r),
            (a.destroy = t.destroy),
            Object.defineProperty(a, 'enabled', {
              enumerable: !0,
              configurable: !1,
              get: () =>
                null !== i
                  ? i
                  : (s !== t.namespaces &&
                      ((s = t.namespaces), (o = t.enabled(e))),
                    o),
              set: e => {
                i = e;
              },
            }),
            'function' === typeof t.init && t.init(a),
            a
          );
        }
        function r(e, n) {
          const r = t(
            this.namespace + ('undefined' === typeof n ? ':' : n) + e,
          );
          return (r.log = this.log), r;
        }
        function s(e) {
          return e
            .toString()
            .substring(2, e.toString().length - 2)
            .replace(/\.\*\?$/, '*');
        }
        return (
          (t.debug = t),
          (t.default = t),
          (t.coerce = function (e) {
            if (e instanceof Error) return e.stack || e.message;
            return e;
          }),
          (t.disable = function () {
            const e = [
              ...t.names.map(s),
              ...t.skips.map(s).map(e => '-' + e),
            ].join(',');
            return t.enable(''), e;
          }),
          (t.enable = function (e) {
            let n;
            t.save(e), (t.namespaces = e), (t.names = []), (t.skips = []);
            const r = ('string' === typeof e ? e : '').split(/[\s,]+/),
              s = r.length;
            for (n = 0; n < s; n++)
              r[n] &&
                ('-' === (e = r[n].replace(/\*/g, '.*?'))[0]
                  ? t.skips.push(new RegExp('^' + e.slice(1) + '$'))
                  : t.names.push(new RegExp('^' + e + '$')));
          }),
          (t.enabled = function (e) {
            if ('*' === e[e.length - 1]) return !0;
            let n, r;
            for (n = 0, r = t.skips.length; n < r; n++)
              if (t.skips[n].test(e)) return !1;
            for (n = 0, r = t.names.length; n < r; n++)
              if (t.names[n].test(e)) return !0;
            return !1;
          }),
          (t.humanize = n(57824)),
          (t.destroy = function () {
            console.warn(
              'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
            );
          }),
          Object.keys(e).forEach(n => {
            t[n] = e[n];
          }),
          (t.names = []),
          (t.skips = []),
          (t.formatters = {}),
          (t.selectColor = function (e) {
            let n = 0;
            for (let t = 0; t < e.length; t++)
              (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
            return t.colors[Math.abs(n) % t.colors.length];
          }),
          t.enable(t.load()),
          t
        );
      };
    },
    32114: function (e) {
      'use strict';
      function t(e, t) {
        for (const n in t)
          Object.defineProperty(e, n, {
            value: t[n],
            enumerable: !0,
            configurable: !0,
          });
        return e;
      }
      e.exports = function (e, n, r) {
        if (!e || 'string' === typeof e)
          throw new TypeError('Please pass an Error to err-code');
        r || (r = {}),
          'object' === typeof n && ((r = n), (n = '')),
          n && (r.code = n);
        try {
          return t(e, r);
        } catch (s) {
          (r.message = e.message), (r.stack = e.stack);
          const n = function () {};
          n.prototype = Object.create(Object.getPrototypeOf(e));
          return t(new n(), r);
        }
      };
    },
    1476: function (e) {
      'use strict';
      const t = '[a-fA-F\\d:]',
        n = e =>
          e && e.includeBoundaries
            ? `(?:(?<=\\s|^)(?=${t})|(?<=${t})(?=\\s|$))`
            : '',
        r =
          '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
        s = '[a-fA-F\\d]{1,4}',
        o =
          `\n(?:\n(?:${s}:){7}(?:${s}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${s}:){6}(?:${r}|:${s}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${s}:){5}(?::${r}|(?::${s}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${s}:){4}(?:(?::${s}){0,1}:${r}|(?::${s}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${s}:){3}(?:(?::${s}){0,2}:${r}|(?::${s}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${s}:){2}(?:(?::${s}){0,3}:${r}|(?::${s}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${s}:){1}(?:(?::${s}){0,4}:${r}|(?::${s}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::${s}){0,5}:${r}|(?::${s}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n`
            .replace(/\s*\/\/.*$/gm, '')
            .replace(/\n/g, '')
            .trim(),
        i = new RegExp(`(?:^${r}$)|(?:^${o}$)`),
        a = new RegExp(`^${r}$`),
        c = new RegExp(`^${o}$`),
        u = e =>
          e && e.exact
            ? i
            : new RegExp(`(?:${n(e)}${r}${n(e)})|(?:${n(e)}${o}${n(e)})`, 'g');
      (u.v4 = e => (e && e.exact ? a : new RegExp(`${n(e)}${r}${n(e)}`, 'g'))),
        (u.v6 = e =>
          e && e.exact ? c : new RegExp(`${n(e)}${o}${n(e)}`, 'g')),
        (e.exports = u);
    },
    106: function (e, t, n) {
      'use strict';
      const r = n(59134),
        s =
          'object' === typeof window &&
          'object' === typeof document &&
          9 === document.nodeType,
        o = r(),
        i = s && !o,
        a = o && !s,
        c = o && s,
        u =
          'undefined' !== typeof globalThis.process &&
          'undefined' !== typeof globalThis.process.release &&
          'node' === globalThis.process.release.name &&
          !o,
        l =
          'function' === typeof importScripts &&
          'undefined' !== typeof self &&
          'undefined' !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope,
        f =
          'undefined' !== typeof globalThis.process &&
          'undefined' !== typeof globalThis.process.env &&
          'test' === globalThis.process.env.NODE_ENV,
        h =
          'undefined' !== typeof navigator &&
          'ReactNative' === navigator.product;
      e.exports = {
        isTest: f,
        isElectron: o,
        isElectronMain: a,
        isElectronRenderer: c,
        isNode: u,
        isBrowser: i,
        isWebWorker: l,
        isEnvWithDom: s,
        isReactNative: h,
      };
    },
    51180: function (e, t, n) {
      'use strict';
      const { isElectronMain: r } = n(106);
      e.exports = n(r ? 88795 : 30700);
    },
    46953: function (e, t, n) {
      'use strict';
      const r = n(67137);
      async function* s(e, t) {
        const n = new r(),
          s = await n.get(e, t);
        yield* s.iterator();
      }
      e.exports = (e, t) => ({
        path: decodeURIComponent(new URL(e).pathname.split('/').pop() || ''),
        content: s(e, t),
      });
    },
    67137: function (e, t, n) {
      'use strict';
      const { fetch: r, Request: s, Headers: o } = n(50730),
        { TimeoutError: i, HTTPError: a } = n(44171),
        c = n(70942).bind({ ignoreUndefined: !0 }),
        { URL: u, URLSearchParams: l } = n(17745),
        f = n(32044),
        h = { throwHttpErrors: !0, credentials: 'same-origin' };
      class d {
        constructor(e = {}) {
          this.opts = c(h, e);
        }
        async fetch(e, t = {}) {
          const n = c(this.opts, t),
            h = new o(n.headers);
          if ('string' !== typeof e && !(e instanceof u || e instanceof s))
            throw new TypeError('`resource` must be a string, URL, or Request');
          const d = new u(e.toString(), n.base),
            { searchParams: g, transformSearchParams: m, json: w } = n;
          g &&
            (d.search =
              'function' === typeof m
                ? m(new l(n.searchParams))
                : new l(n.searchParams)),
            w &&
              ((n.body = JSON.stringify(n.json)),
              h.set('content-type', 'application/json'));
          const b = new AbortController(),
            v = f([b.signal, n.signal]),
            E = await ((e, t, n) => {
              if (void 0 === t) return e;
              const r = Date.now(),
                s = () => Date.now() - r >= t;
              return new Promise((r, o) => {
                const a = setTimeout(() => {
                    s() && (o(new i()), n.abort());
                  }, t),
                  c = e => t => {
                    clearTimeout(a), s() ? o(new i()) : e(t);
                  };
                e.then(c(r), c(o));
              });
            })(
              r(d.toString(), { ...n, signal: v, timeout: void 0, headers: h }),
              n.timeout,
              b,
            );
          if (!E.ok && n.throwHttpErrors)
            throw (n.handleError && (await n.handleError(E)), new a(E));
          return (
            (E.iterator = function () {
              return y(E.body);
            }),
            (E.ndjson = async function* () {
              for await (const e of p(E.iterator()))
                t.transform ? yield t.transform(e) : yield e;
            }),
            E
          );
        }
        post(e, t = {}) {
          return this.fetch(e, { ...t, method: 'POST' });
        }
        get(e, t = {}) {
          return this.fetch(e, { ...t, method: 'GET' });
        }
        put(e, t = {}) {
          return this.fetch(e, { ...t, method: 'PUT' });
        }
        delete(e, t = {}) {
          return this.fetch(e, { ...t, method: 'DELETE' });
        }
        options(e, t = {}) {
          return this.fetch(e, { ...t, method: 'OPTIONS' });
        }
      }
      const p = async function* (e) {
          const t = new TextDecoder();
          let n = '';
          for await (const r of e) {
            n += t.decode(r, { stream: !0 });
            const e = n.split(/\r?\n/);
            for (let t = 0; t < e.length - 1; t++) {
              const n = e[t].trim();
              n.length > 0 && (yield JSON.parse(n));
            }
            n = e[e.length - 1];
          }
          (n += t.decode()),
            (n = n.trim()),
            0 !== n.length && (yield JSON.parse(n));
        },
        y = e => {
          if (w(e)) {
            const t = e[Symbol.asyncIterator]();
            return {
              [Symbol.asyncIterator]: () => ({
                next: t.next.bind(t),
                return: n => (
                  e.destroy(),
                  'function' === typeof t.return
                    ? t.return()
                    : Promise.resolve({ done: !0, value: n })
                ),
              }),
            };
          }
          if (m(e)) {
            const t = e.getReader();
            return (async function* () {
              try {
                for (;;) {
                  const { done: e, value: n } = await t.read();
                  if (e) return;
                  n && (yield n);
                }
              } finally {
                t.releaseLock();
              }
            })();
          }
          if (g(e)) return e;
          throw new TypeError("Body can't be converted to AsyncIterable");
        },
        g = e =>
          'object' === typeof e &&
          null !== e &&
          'function' === typeof e[Symbol.asyncIterator],
        m = e => e && 'function' === typeof e.getReader,
        w = e =>
          Object.prototype.hasOwnProperty.call(e, 'readable') &&
          Object.prototype.hasOwnProperty.call(e, 'writable');
      (d.HTTPError = a),
        (d.TimeoutError = i),
        (d.streamToAsyncIterator = y),
        (d.post = (e, t) => new d(t).post(e, t)),
        (d.get = (e, t) => new d(t).get(e, t)),
        (d.put = (e, t) => new d(t).put(e, t)),
        (d.delete = (e, t) => new d(t).delete(e, t)),
        (d.options = (e, t) => new d(t).options(e, t)),
        (e.exports = d);
    },
    44171: function (e, t) {
      'use strict';
      class n extends Error {
        constructor(e = 'Request timed out') {
          super(e), (this.name = 'TimeoutError');
        }
      }
      t.TimeoutError = n;
      class r extends Error {
        constructor(e = 'The operation was aborted.') {
          super(e), (this.name = 'AbortError');
        }
      }
      t.AbortError = r;
      class s extends Error {
        constructor(e) {
          super(e.statusText), (this.name = 'HTTPError'), (this.response = e);
        }
      }
      t.HTTPError = s;
    },
    50730: function (e, t, n) {
      'use strict';
      const { TimeoutError: r, AbortError: s } = n(44171),
        { Response: o, Request: i, Headers: a, default: c } = n(51180),
        u = c,
        l = e => {
          const t = new a();
          for (const n of e.trim().split(/[\r\n]+/)) {
            const e = n.indexOf(': ');
            e > 0 && t.set(n.slice(0, e), n.slice(e + 1));
          }
          return t;
        };
      class f extends o {
        constructor(e, t, n) {
          super(t, n), Object.defineProperty(this, 'url', { value: e });
        }
      }
      e.exports = {
        fetch: (e, t = {}) =>
          null != t.onUploadProgress
            ? ((e, t = {}) => {
                const n = new XMLHttpRequest();
                n.open(t.method || 'GET', e.toString(), !0);
                const { timeout: i, headers: c } = t;
                if (
                  (i && i > 0 && i < 1 / 0 && (n.timeout = i),
                  null != t.overrideMimeType &&
                    n.overrideMimeType(t.overrideMimeType),
                  c)
                )
                  for (const [r, s] of new a(c)) n.setRequestHeader(r, s);
                return (
                  t.signal && (t.signal.onabort = () => n.abort()),
                  t.onUploadProgress &&
                    (n.upload.onprogress = t.onUploadProgress),
                  (n.responseType = 'arraybuffer'),
                  new Promise((e, i) => {
                    const a = t => {
                      switch (t.type) {
                        case 'error':
                          e(o.error());
                          break;
                        case 'load':
                          e(
                            new f(n.responseURL, n.response, {
                              status: n.status,
                              statusText: n.statusText,
                              headers: l(n.getAllResponseHeaders()),
                            }),
                          );
                          break;
                        case 'timeout':
                          i(new r());
                          break;
                        case 'abort':
                          i(new s());
                      }
                    };
                    (n.onerror = a),
                      (n.onload = a),
                      (n.ontimeout = a),
                      (n.onabort = a),
                      n.send(t.body);
                  })
                );
              })(e, t)
            : u(e, t),
        Request: i,
        Headers: a,
      };
    },
    59134: function (e, t, n) {
      var r = n(34155);
      e.exports = function () {
        return (
          ('undefined' !== typeof window &&
            'object' === typeof window.process &&
            'renderer' === window.process.type) ||
          !(
            'undefined' === typeof r ||
            'object' !== typeof r.versions ||
            !r.versions.electron
          ) ||
          ('object' === typeof navigator &&
            'string' === typeof navigator.userAgent &&
            navigator.userAgent.indexOf('Electron') >= 0)
        );
      };
    },
    5003: function (e, t, n) {
      'use strict';
      const r = n(1476),
        s = e => r({ exact: !0 }).test(e);
      (s.v4 = e => r.v4({ exact: !0 }).test(e)),
        (s.v6 = e => r.v6({ exact: !0 }).test(e)),
        (s.version = e => (s(e) ? (s.v4(e) ? 4 : 6) : void 0)),
        (e.exports = s);
    },
    17745: function (e, t, n) {
      'use strict';
      const {
          URLWithLegacySupport: r,
          format: s,
          URLSearchParams: o,
          defaultBase: i,
        } = n(82049),
        a = n(15939);
      e.exports = {
        URL: r,
        URLSearchParams: o,
        format: s,
        relative: a,
        defaultBase: i,
      };
    },
    15939: function (e, t, n) {
      'use strict';
      const { URLWithLegacySupport: r, format: s } = n(82049);
      e.exports = (e, t = {}, n = {}, o) => {
        let i,
          a = t.protocol ? t.protocol.replace(':', '') : 'http';
        a = (n[a] || o || a) + ':';
        try {
          i = new r(e);
        } catch (u) {
          i = {};
        }
        const c = Object.assign({}, t, {
          protocol: a || i.protocol,
          host: t.host || i.host,
        });
        return new r(e, s(c)).toString();
      };
    },
    82049: function (e) {
      'use strict';
      const t =
        'undefined' !== typeof navigator && 'ReactNative' === navigator.product;
      const n = self.URL,
        r = t
          ? 'http://localhost'
          : self.location
          ? self.location.protocol + '//' + self.location.host
          : '';
      e.exports = {
        URLWithLegacySupport: class {
          constructor(e = '', t = r) {
            (this.super = new n(e, t)),
              (this.path = this.pathname + this.search),
              (this.auth =
                this.username && this.password
                  ? this.username + ':' + this.password
                  : null),
              (this.query =
                this.search && this.search.startsWith('?')
                  ? this.search.slice(1)
                  : null);
          }
          get hash() {
            return this.super.hash;
          }
          get host() {
            return this.super.host;
          }
          get hostname() {
            return this.super.hostname;
          }
          get href() {
            return this.super.href;
          }
          get origin() {
            return this.super.origin;
          }
          get password() {
            return this.super.password;
          }
          get pathname() {
            return this.super.pathname;
          }
          get port() {
            return this.super.port;
          }
          get protocol() {
            return this.super.protocol;
          }
          get search() {
            return this.super.search;
          }
          get searchParams() {
            return this.super.searchParams;
          }
          get username() {
            return this.super.username;
          }
          set hash(e) {
            this.super.hash = e;
          }
          set host(e) {
            this.super.host = e;
          }
          set hostname(e) {
            this.super.hostname = e;
          }
          set href(e) {
            this.super.href = e;
          }
          set password(e) {
            this.super.password = e;
          }
          set pathname(e) {
            this.super.pathname = e;
          }
          set port(e) {
            this.super.port = e;
          }
          set protocol(e) {
            this.super.protocol = e;
          }
          set search(e) {
            this.super.search = e;
          }
          set username(e) {
            this.super.username = e;
          }
          static createObjectURL(e) {
            return n.createObjectURL(e);
          }
          static revokeObjectURL(e) {
            n.revokeObjectURL(e);
          }
          toJSON() {
            return this.super.toJSON();
          }
          toString() {
            return this.super.toString();
          }
          format() {
            return this.toString();
          }
        },
        URLSearchParams: self.URLSearchParams,
        defaultBase: r,
        format: function (e) {
          if ('string' === typeof e) {
            return new n(e).toString();
          }
          if (!(e instanceof n)) {
            const t =
                e.username && e.password ? `${e.username}:${e.password}@` : '',
              n = e.auth ? e.auth + '@' : '',
              r = e.port ? ':' + e.port : '',
              s = e.protocol ? e.protocol + '//' : '',
              o = e.host || '',
              i = e.hostname || '',
              a = e.search || (e.query ? '?' + e.query : ''),
              c = e.hash || '',
              u = e.pathname || '';
            return `${s}${t || n}${o || i + r}${e.path || u + a}${c}`;
          }
        },
      };
    },
    31303: function (e) {
      'use strict';
      e.exports = async e => {
        const t = [];
        for await (const n of e) t.push(n);
        return t;
      };
    },
    72262: function (e) {
      'use strict';
      e.exports = async e => {
        for await (const t of e) return t;
      };
    },
    93093: function (e) {
      'use strict';
      e.exports = async e => {
        let t;
        for await (const n of e) t = n;
        return t;
      };
    },
    32121: function (e) {
      'use strict';
      e.exports = async function* (e, t) {
        for await (const n of e) yield t(n);
      };
    },
    28132: function (e) {
      'use strict';
      e.exports = function (e) {
        const [t, n] = e[Symbol.asyncIterator]
            ? [e[Symbol.asyncIterator](), Symbol.asyncIterator]
            : [e[Symbol.iterator](), Symbol.iterator],
          r = [];
        return {
          peek: () => t.next(),
          push: e => {
            r.push(e);
          },
          next: () => (r.length ? { done: !1, value: r.shift() } : t.next()),
          [n]() {
            return this;
          },
        };
      };
    },
    70942: function (e, t, n) {
      'use strict';
      const r = n(49727),
        { hasOwnProperty: s } = Object.prototype,
        { propertyIsEnumerable: o } = Object,
        i = (e, t, n) =>
          Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            enumerable: !0,
            configurable: !0,
          }),
        a = this,
        c = { concatArrays: !1, ignoreUndefined: !1 },
        u = e => {
          const t = [];
          for (const n in e) s.call(e, n) && t.push(n);
          if (Object.getOwnPropertySymbols) {
            const n = Object.getOwnPropertySymbols(e);
            for (const r of n) o.call(e, r) && t.push(r);
          }
          return t;
        };
      function l(e) {
        return Array.isArray(e)
          ? (function (e) {
              const t = e.slice(0, 0);
              return (
                u(e).forEach(n => {
                  i(t, n, l(e[n]));
                }),
                t
              );
            })(e)
          : r(e)
          ? (function (e) {
              const t =
                null === Object.getPrototypeOf(e) ? Object.create(null) : {};
              return (
                u(e).forEach(n => {
                  i(t, n, l(e[n]));
                }),
                t
              );
            })(e)
          : e;
      }
      const f = (e, t, n, r) => (
        n.forEach(n => {
          ('undefined' === typeof t[n] && r.ignoreUndefined) ||
            (n in e && e[n] !== Object.getPrototypeOf(e)
              ? i(e, n, h(e[n], t[n], r))
              : i(e, n, l(t[n])));
        }),
        e
      );
      function h(e, t, n) {
        return n.concatArrays && Array.isArray(e) && Array.isArray(t)
          ? ((e, t, n) => {
              let r = e.slice(0, 0),
                o = 0;
              return (
                [e, t].forEach(t => {
                  const a = [];
                  for (let n = 0; n < t.length; n++)
                    s.call(t, n) &&
                      (a.push(String(n)), i(r, o++, t === e ? t[n] : l(t[n])));
                  r = f(
                    r,
                    t,
                    u(t).filter(e => !a.includes(e)),
                    n,
                  );
                }),
                r
              );
            })(e, t, n)
          : r(t) && r(e)
          ? f(e, t, u(t), n)
          : l(t);
      }
      e.exports = function (...e) {
        const t = h(l(c), (this !== a && this) || {}, c);
        let n = { _: {} };
        for (const s of e)
          if (void 0 !== s) {
            if (!r(s))
              throw new TypeError('`' + s + '` is not an Option Object');
            n = h(n, { _: s }, t);
          }
        return n._;
      };
    },
    49727: function (e) {
      'use strict';
      e.exports = e => {
        if ('[object Object]' !== Object.prototype.toString.call(e)) return !1;
        const t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype;
      };
    },
    57824: function (e) {
      var t = 1e3,
        n = 60 * t,
        r = 60 * n,
        s = 24 * r,
        o = 7 * s,
        i = 365.25 * s;
      function a(e, t, n, r) {
        var s = t >= 1.5 * n;
        return Math.round(e / n) + ' ' + r + (s ? 's' : '');
      }
      e.exports = function (e, c) {
        c = c || {};
        var u = typeof e;
        if ('string' === u && e.length > 0)
          return (function (e) {
            if ((e = String(e)).length > 100) return;
            var a =
              /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                e,
              );
            if (!a) return;
            var c = parseFloat(a[1]);
            switch ((a[2] || 'ms').toLowerCase()) {
              case 'years':
              case 'year':
              case 'yrs':
              case 'yr':
              case 'y':
                return c * i;
              case 'weeks':
              case 'week':
              case 'w':
                return c * o;
              case 'days':
              case 'day':
              case 'd':
                return c * s;
              case 'hours':
              case 'hour':
              case 'hrs':
              case 'hr':
              case 'h':
                return c * r;
              case 'minutes':
              case 'minute':
              case 'mins':
              case 'min':
              case 'm':
                return c * n;
              case 'seconds':
              case 'second':
              case 'secs':
              case 'sec':
              case 's':
                return c * t;
              case 'milliseconds':
              case 'millisecond':
              case 'msecs':
              case 'msec':
              case 'ms':
                return c;
              default:
                return;
            }
          })(e);
        if ('number' === u && isFinite(e))
          return c.long
            ? (function (e) {
                var o = Math.abs(e);
                if (o >= s) return a(e, o, s, 'day');
                if (o >= r) return a(e, o, r, 'hour');
                if (o >= n) return a(e, o, n, 'minute');
                if (o >= t) return a(e, o, t, 'second');
                return e + ' ms';
              })(e)
            : (function (e) {
                var o = Math.abs(e);
                if (o >= s) return Math.round(e / s) + 'd';
                if (o >= r) return Math.round(e / r) + 'h';
                if (o >= n) return Math.round(e / n) + 'm';
                if (o >= t) return Math.round(e / t) + 's';
                return e + 'ms';
              })(e);
        throw new Error(
          'val is not a non-empty string or a valid number. val=' +
            JSON.stringify(e),
        );
      };
    },
    95700: function (e, t, n) {
      const { Multiaddr: r } = n(46584),
        s = (e, t) => t,
        o = {
          ip4: s,
          ip6: (e, t, n, r) =>
            1 === r.length && 'ip6' === r[0].protocol ? t : `[${t}]`,
          tcp: (e, t, n, r, s) =>
            r.some(e => ['http', 'https', 'ws', 'wss'].includes(e.protocol))
              ? `${e}:${t}`
              : ((e, t, n, r) => {
                  if (r && !1 === r.assumeHttp) return `tcp://${e}:${t}`;
                  let s = 'tcp',
                    o = `:${t}`;
                  return (
                    'tcp' === n[n.length - 1].protocol &&
                      ((s = '443' === t ? 'https' : 'http'),
                      (o = '443' === t || '80' === t ? '' : o)),
                    `${s}://${e}${o}`
                  );
                })(e, t, r, s),
          udp: (e, t) => `udp://${e}:${t}`,
          dnsaddr: s,
          dns4: s,
          dns6: s,
          ipfs: (e, t) => `${e}/ipfs/${t}`,
          p2p: (e, t) => `${e}/p2p/${t}`,
          http: e => `http://${e}`,
          https: e => `https://${e}`,
          ws: e => `ws://${e}`,
          wss: e => `wss://${e}`,
          'p2p-websocket-star': e => `${e}/p2p-websocket-star`,
          'p2p-webrtc-star': e => `${e}/p2p-webrtc-star`,
          'p2p-webrtc-direct': e => `${e}/p2p-webrtc-direct`,
        };
      e.exports = (e, t) => {
        const n = new r(e),
          s = e.toString().split('/').slice(1);
        return n
          .tuples()
          .map(e => ({ protocol: s.shift(), content: e[1] ? s.shift() : null }))
          .reduce((e, n, r, s) => {
            const i = o[n.protocol];
            if (!i) throw new Error(`Unsupported protocol ${n.protocol}`);
            return i(e, n.content, r, s, t);
          }, '');
      };
    },
    18190: function (e, t, n) {
      'use strict';
      const r = n(99918),
        s = n(89768),
        o = n(66395),
        { concat: i } = n(20605),
        { toString: a } = n(92263);
      function c(e) {
        const t = [],
          n = e.split('/').slice(1);
        if (1 === n.length && '' === n[0]) return [];
        for (let r = 0; r < n.length; r++) {
          const o = n[r],
            i = s(o);
          if (0 !== i.size) {
            if ((r++, r >= n.length)) throw b('invalid address: ' + e);
            if (i.path) {
              t.push([o, w(n.slice(r).join('/'))]);
              break;
            }
            t.push([o, n[r]]);
          } else t.push([o]);
        }
        return t;
      }
      function u(e) {
        const t = [];
        return (
          e.map(e => {
            const n = v(e);
            return t.push(n.name), e.length > 1 && t.push(e[1]), null;
          }),
          w(t.join('/'))
        );
      }
      function l(e) {
        return e.map(e => {
          Array.isArray(e) || (e = [e]);
          const t = v(e);
          return e.length > 1 ? [t.code, r.toBytes(t.code, e[1])] : [t.code];
        });
      }
      function f(e) {
        return e.map(e => {
          const t = v(e);
          return e[1] ? [t.code, r.toString(t.code, e[1])] : [t.code];
        });
      }
      function h(e) {
        return g(
          i(
            e.map(e => {
              const t = v(e);
              let n = Uint8Array.from(o.encode(t.code));
              return e.length > 1 && (n = i([n, e[1]])), n;
            }),
          ),
        );
      }
      function d(e, t) {
        if (e.size > 0) return e.size / 8;
        if (0 === e.size) return 0;
        return o.decode(t) + o.decode.bytes;
      }
      function p(e) {
        const t = [];
        let n = 0;
        for (; n < e.length; ) {
          const r = o.decode(e, n),
            i = o.decode.bytes,
            c = d(s(r), e.slice(n + i));
          if (0 === c) {
            t.push([r]), (n += i);
            continue;
          }
          const u = e.slice(n + i, n + i + c);
          if (((n += c + i), n > e.length))
            throw b('Invalid address Uint8Array: ' + a(e, 'base16'));
          t.push([r, u]);
        }
        return t;
      }
      function y(e) {
        return h(l(c((e = w(e)))));
      }
      function g(e) {
        const t = m(e);
        if (t) throw t;
        return Uint8Array.from(e);
      }
      function m(e) {
        try {
          p(e);
        } catch (t) {
          return t;
        }
      }
      function w(e) {
        return (
          '/' +
          e
            .trim()
            .split('/')
            .filter(e => e)
            .join('/')
        );
      }
      function b(e) {
        return new Error('Error parsing address: ' + e);
      }
      function v(e) {
        return s(e[0]);
      }
      e.exports = {
        stringToStringTuples: c,
        stringTuplesToString: u,
        tuplesToStringTuples: f,
        stringTuplesToTuples: l,
        bytesToTuples: p,
        tuplesToBytes: h,
        bytesToString: function (e) {
          const t = p(e);
          return u(f(t));
        },
        stringToBytes: y,
        fromString: function (e) {
          return y(e);
        },
        fromBytes: g,
        validateBytes: m,
        isValidBytes: function (e) {
          return void 0 === m(e);
        },
        cleanPath: w,
        ParseError: b,
        protoFromTuple: v,
        sizeForAddr: d,
      };
    },
    99918: function (e, t, n) {
      'use strict';
      const r = n(33692),
        s = n(89768),
        { CID: o } = n(81362),
        { base32: i } = n(22817),
        { base58btc: a } = n(99086),
        c = n(28924),
        u = n(66395),
        { toString: l } = n(92263),
        { fromString: f } = n(52217),
        { concat: h } = n(20605);
      function d(e, t) {
        return t instanceof Uint8Array ? d.toString(e, t) : d.toBytes(e, t);
      }
      function p(e) {
        if (!r.isIP(e)) throw new Error('invalid ip address');
        return r.toBytes(e);
      }
      function y(e) {
        const t = new ArrayBuffer(2);
        return new DataView(t).setUint16(0, e), new Uint8Array(t);
      }
      function g(e) {
        return new DataView(e.buffer).getUint16(e.byteOffset);
      }
      function m(e) {
        const t = e.slice(0, e.length - 2),
          n = e.slice(e.length - 2);
        return l(t, 'base32') + ':' + g(n);
      }
      (e.exports = d),
        (d.toString = function (e, t) {
          switch (s(e).code) {
            case 4:
            case 41:
              return (function (e) {
                const t = r.toString(e);
                if (!t || !r.isIP(t)) throw new Error('invalid ip address');
                return t;
              })(t);
            case 6:
            case 273:
            case 33:
            case 132:
              return g(t).toString();
            case 53:
            case 54:
            case 55:
            case 56:
            case 400:
            case 777:
              return (function (e) {
                const t = u.decode(e);
                if ((e = e.slice(u.decode.bytes)).length !== t)
                  throw new Error('inconsistent lengths');
                return l(e);
              })(t);
            case 421:
              return (function (e) {
                const t = u.decode(e),
                  n = e.slice(u.decode.bytes);
                if (n.length !== t) throw new Error('inconsistent lengths');
                return l(n, 'base58btc');
              })(t);
            case 444:
            case 445:
              return m(t);
            default:
              return l(t, 'base16');
          }
        }),
        (d.toBytes = function (e, t) {
          switch (s(e).code) {
            case 4:
            case 41:
              return p(t);
            case 6:
            case 273:
            case 33:
            case 132:
              return y(parseInt(t, 10));
            case 53:
            case 54:
            case 55:
            case 56:
            case 400:
            case 777:
              return (function (e) {
                const t = f(e),
                  n = Uint8Array.from(u.encode(t.length));
                return h([n, t], n.length + t.length);
              })(t);
            case 421:
              return (function (e) {
                let t;
                t =
                  'Q' === e[0] || '1' === e[0]
                    ? c.decode(a.decode(`z${e}`)).bytes
                    : o.parse(e).multihash.bytes;
                const n = Uint8Array.from(u.encode(t.length));
                return h([n, t], n.length + t.length);
              })(t);
            case 444:
              return (function (e) {
                const t = e.split(':');
                if (2 !== t.length)
                  throw new Error(
                    'failed to parse onion addr: ' +
                      t +
                      ' does not contain a port number',
                  );
                if (16 !== t[0].length)
                  throw new Error(
                    'failed to parse onion addr: ' +
                      t[0] +
                      ' not a Tor onion address.',
                  );
                const n = i.decode('b' + t[0]),
                  r = parseInt(t[1], 10);
                if (r < 1 || r > 65536)
                  throw new Error('Port number is not in range(1, 65536)');
                const s = y(r);
                return h([n, s], n.length + s.length);
              })(t);
            case 445:
              return (function (e) {
                const t = e.split(':');
                if (2 !== t.length)
                  throw new Error(
                    'failed to parse onion addr: ' +
                      t +
                      ' does not contain a port number',
                  );
                if (56 !== t[0].length)
                  throw new Error(
                    'failed to parse onion addr: ' +
                      t[0] +
                      ' not a Tor onion3 address.',
                  );
                const n = i.decode('b' + t[0]),
                  r = parseInt(t[1], 10);
                if (r < 1 || r > 65536)
                  throw new Error('Port number is not in range(1, 65536)');
                const s = y(r);
                return h([n, s], n.length + s.length);
              })(t);
            default:
              return f(t, 'base16');
          }
        });
    },
    46584: function (e, t, n) {
      'use strict';
      const r = n(18190),
        s = n(89768),
        o = n(66395),
        { CID: i } = n(81362),
        { base58btc: a } = n(99086),
        c = n(32114),
        u = Symbol.for('nodejs.util.inspect.custom'),
        { toString: l } = n(92263),
        { equals: f } = n(19588),
        h = new Map(),
        d = Symbol.for('@multiformats/js-multiaddr/multiaddr');
      class p {
        constructor(e) {
          if (
            (null == e && (e = ''),
            Object.defineProperty(this, d, { value: !0 }),
            e instanceof Uint8Array)
          )
            this.bytes = r.fromBytes(e);
          else if ('string' === typeof e) {
            if (e.length > 0 && '/' !== e.charAt(0))
              throw new Error(`multiaddr "${e}" must start with a "/"`);
            this.bytes = r.fromString(e);
          } else {
            if (!p.isMultiaddr(e))
              throw new Error(
                'addr must be a string, Buffer, or another Multiaddr',
              );
            this.bytes = r.fromBytes(e.bytes);
          }
        }
        toString() {
          return r.bytesToString(this.bytes);
        }
        toJSON() {
          return this.toString();
        }
        toOptions() {
          const e = {},
            t = this.toString().split('/');
          return (
            (e.family = 'ip4' === t[1] ? 4 : 6),
            (e.host = t[2]),
            (e.transport = t[3]),
            (e.port = parseInt(t[4])),
            e
          );
        }
        protos() {
          return this.protoCodes().map(e => Object.assign({}, s(e)));
        }
        protoCodes() {
          const e = [],
            t = this.bytes;
          let n = 0;
          for (; n < t.length; ) {
            const i = o.decode(t, n),
              a = o.decode.bytes,
              c = s(i);
            (n += r.sizeForAddr(c, t.slice(n + a)) + a), e.push(i);
          }
          return e;
        }
        protoNames() {
          return this.protos().map(e => e.name);
        }
        tuples() {
          return r.bytesToTuples(this.bytes);
        }
        stringTuples() {
          const e = r.bytesToTuples(this.bytes);
          return r.tuplesToStringTuples(e);
        }
        encapsulate(e) {
          return (e = new p(e)), new p(this.toString() + e.toString());
        }
        decapsulate(e) {
          const t = e.toString(),
            n = this.toString(),
            r = n.lastIndexOf(t);
          if (r < 0)
            throw new Error(
              'Address ' + this + ' does not contain subaddress: ' + e,
            );
          return new p(n.slice(0, r));
        }
        decapsulateCode(e) {
          const t = this.tuples();
          for (let n = t.length - 1; n >= 0; n--)
            if (t[n][0] === e) return new p(r.tuplesToBytes(t.slice(0, n)));
          return this;
        }
        getPeerId() {
          try {
            const e = this.stringTuples().filter(
                e => e[0] === s.names.ipfs.code,
              ),
              t = e.pop();
            if (t && t[1]) {
              const e = t[1];
              return 'Q' === e[0] || '1' === e[0]
                ? l(a.decode(`z${e}`), 'base58btc')
                : l(i.parse(e).multihash.bytes, 'base58btc');
            }
            return null;
          } catch (e) {
            return null;
          }
        }
        getPath() {
          let e = null;
          try {
            (e = this.stringTuples().filter(e => !!s(e[0]).path)[0][1]),
              e || (e = null);
          } catch (t) {
            e = null;
          }
          return e;
        }
        equals(e) {
          return f(this.bytes, e.bytes);
        }
        async resolve() {
          const e = this.protos().find(e => e.resolvable);
          if (!e) return [this];
          const t = h.get(e.name);
          if (!t)
            throw c(
              new Error(`no available resolver for ${e.name}`),
              'ERR_NO_AVAILABLE_RESOLVER',
            );
          return (await t(this)).map(e => new p(e));
        }
        nodeAddress() {
          const e = this.protoCodes(),
            t = this.protoNames(),
            n = this.toString().split('/').slice(1);
          if (n.length < 4)
            throw new Error(
              'multiaddr must have a valid format: "/{ip4, ip6, dns4, dns6}/{address}/{tcp, udp}/{port}".',
            );
          if (4 !== e[0] && 41 !== e[0] && 54 !== e[0] && 55 !== e[0])
            throw new Error(
              `no protocol with name: "'${t[0]}'". Must have a valid family name: "{ip4, ip6, dns4, dns6}".`,
            );
          if ('tcp' !== n[2] && 'udp' !== n[2])
            throw new Error(
              `no protocol with name: "'${t[1]}'". Must have a valid transport protocol: "{tcp, udp}".`,
            );
          return {
            family: 41 === e[0] || 55 === e[0] ? 6 : 4,
            address: n[1],
            port: parseInt(n[3]),
          };
        }
        isThinWaistAddress(e) {
          const t = (e || this).protos();
          return (
            2 === t.length &&
            (4 === t[0].code || 41 === t[0].code) &&
            (6 === t[1].code || 273 === t[1].code)
          );
        }
        static fromNodeAddress(e, t) {
          if (!e) throw new Error('requires node address object');
          if (!t) throw new Error('requires transport protocol');
          let n;
          switch (e.family) {
            case 4:
              n = 'ip4';
              break;
            case 6:
              n = 'ip6';
              break;
            default:
              throw Error(
                `Invalid addr family. Got '${e.family}' instead of 4 or 6`,
              );
          }
          return new p('/' + [n, e.address, t, e.port].join('/'));
        }
        static isName(e) {
          return !!p.isMultiaddr(e) && e.protos().some(e => e.resolvable);
        }
        static isMultiaddr(e) {
          return e instanceof p || Boolean(e && e[d]);
        }
        [u]() {
          return (
            '<Multiaddr ' +
            l(this.bytes, 'base16') +
            ' - ' +
            r.bytesToString(this.bytes) +
            '>'
          );
        }
        inspect() {
          return (
            '<Multiaddr ' +
            l(this.bytes, 'base16') +
            ' - ' +
            r.bytesToString(this.bytes) +
            '>'
          );
        }
      }
      (p.protocols = s),
        (p.resolvers = h),
        (e.exports = {
          Multiaddr: p,
          multiaddr: function (e) {
            return new p(e);
          },
          protocols: s,
          resolvers: h,
        });
    },
    33692: function (e, t, n) {
      'use strict';
      const r = n(5003),
        { toString: s } = n(92263),
        o = r,
        i = r.v4,
        a = r.v6,
        c = function (e, t, n) {
          let r;
          if (((n = ~~n), i(e)))
            (r = t || new Uint8Array(n + 4)),
              e.split(/\./g).map(function (e) {
                r[n++] = 255 & parseInt(e, 10);
              });
          else if (a(e)) {
            const o = e.split(':', 8);
            let a;
            for (a = 0; a < o.length; a++) {
              let e;
              i(o[a]) && ((e = c(o[a])), (o[a] = s(e.slice(0, 2), 'base16'))),
                e && ++a < 8 && o.splice(a, 0, s(e.slice(2, 4), 'base16'));
            }
            if ('' === o[0]) for (; o.length < 8; ) o.unshift('0');
            else if ('' === o[o.length - 1]) for (; o.length < 8; ) o.push('0');
            else if (o.length < 8) {
              for (a = 0; a < o.length && '' !== o[a]; a++);
              const e = [a, '1'];
              for (a = 9 - o.length; a > 0; a--) e.push('0');
              o.splice.apply(o, e);
            }
            for (r = t || new Uint8Array(n + 16), a = 0; a < o.length; a++) {
              const e = parseInt(o[a], 16);
              (r[n++] = (e >> 8) & 255), (r[n++] = 255 & e);
            }
          }
          if (!r) throw Error('Invalid ip address: ' + e);
          return r;
        };
      e.exports = {
        isIP: o,
        isV4: i,
        isV6: a,
        toBytes: c,
        toString: function (e, t, n) {
          (t = ~~t), (n = n || e.length - t);
          const r = [];
          let s;
          const o = new DataView(e.buffer);
          if (4 === n) {
            for (let s = 0; s < n; s++) r.push(e[t + s]);
            s = r.join('.');
          } else if (16 === n) {
            for (let e = 0; e < n; e += 2)
              r.push(o.getUint16(t + e).toString(16));
            (s = r.join(':')),
              (s = s.replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3')),
              (s = s.replace(/:{3,4}/, '::'));
          }
          return s;
        },
      };
    },
    89768: function (e) {
      'use strict';
      function t(e) {
        if ('number' === typeof e) {
          if (t.codes[e]) return t.codes[e];
          throw new Error('no protocol with code: ' + e);
        }
        if ('string' === typeof e) {
          if (t.names[e]) return t.names[e];
          throw new Error('no protocol with name: ' + e);
        }
        throw new Error('invalid protocol id type: ' + e);
      }
      const n = -1;
      function r(e, t, n, r, s) {
        return {
          code: e,
          size: t,
          name: n,
          resolvable: Boolean(r),
          path: Boolean(s),
        };
      }
      (t.lengthPrefixedVarSize = n),
        (t.V = n),
        (t.table = [
          [4, 32, 'ip4'],
          [6, 16, 'tcp'],
          [33, 16, 'dccp'],
          [41, 128, 'ip6'],
          [42, n, 'ip6zone'],
          [53, n, 'dns', 'resolvable'],
          [54, n, 'dns4', 'resolvable'],
          [55, n, 'dns6', 'resolvable'],
          [56, n, 'dnsaddr', 'resolvable'],
          [132, 16, 'sctp'],
          [273, 16, 'udp'],
          [275, 0, 'p2p-webrtc-star'],
          [276, 0, 'p2p-webrtc-direct'],
          [277, 0, 'p2p-stardust'],
          [290, 0, 'p2p-circuit'],
          [301, 0, 'udt'],
          [302, 0, 'utp'],
          [400, n, 'unix', !1, 'path'],
          [421, n, 'ipfs'],
          [421, n, 'p2p'],
          [443, 0, 'https'],
          [444, 96, 'onion'],
          [445, 296, 'onion3'],
          [446, n, 'garlic64'],
          [460, 0, 'quic'],
          [477, 0, 'ws'],
          [478, 0, 'wss'],
          [479, 0, 'p2p-websocket-star'],
          [480, 0, 'http'],
          [777, n, 'memory'],
        ]),
        (t.names = {}),
        (t.codes = {}),
        t.table.map(e => {
          const n = r.apply(null, e);
          return (t.codes[n.code] = n), (t.names[n.name] = n), null;
        }),
        (t.object = r),
        (e.exports = t);
    },
    30700: function (e, t, n) {
      'use strict';
      globalThis.fetch &&
      globalThis.Headers &&
      globalThis.Request &&
      globalThis.Response
        ? (e.exports = {
            default: globalThis.fetch,
            Headers: globalThis.Headers,
            Request: globalThis.Request,
            Response: globalThis.Response,
          })
        : (e.exports = {
            default: n(83300).default,
            Headers: n(83300).Headers,
            Request: n(83300).Request,
            Response: n(83300).Response,
          });
    },
    83300: function (e, t) {
      'use strict';
      var n = (function () {
        if ('undefined' !== typeof self) return self;
        if ('undefined' !== typeof window) return window;
        if ('undefined' !== typeof n) return n;
        throw new Error('unable to locate global object');
      })();
      (e.exports = t = n.fetch),
        n.fetch && (t.default = n.fetch.bind(n)),
        (t.Headers = n.Headers),
        (t.Request = n.Request),
        (t.Response = n.Response);
    },
    62100: function (e, t, n) {
      'use strict';
      e.exports = n(89482);
    },
    89482: function (e, t, n) {
      'use strict';
      var r = t;
      function s() {
        r.util._configure(),
          r.Writer._configure(r.BufferWriter),
          r.Reader._configure(r.BufferReader);
      }
      (r.build = 'minimal'),
        (r.Writer = n(41173)),
        (r.BufferWriter = n(43155)),
        (r.Reader = n(51408)),
        (r.BufferReader = n(50593)),
        (r.util = n(99693)),
        (r.rpc = n(35994)),
        (r.roots = n(85054)),
        (r.configure = s),
        s();
    },
    51408: function (e, t, n) {
      'use strict';
      e.exports = c;
      var r,
        s = n(99693),
        o = s.LongBits,
        i = s.utf8;
      function a(e, t) {
        return RangeError(
          'index out of range: ' + e.pos + ' + ' + (t || 1) + ' > ' + e.len,
        );
      }
      function c(e) {
        (this.buf = e), (this.pos = 0), (this.len = e.length);
      }
      var u =
          'undefined' !== typeof Uint8Array
            ? function (e) {
                if (e instanceof Uint8Array || Array.isArray(e))
                  return new c(e);
                throw Error('illegal buffer');
              }
            : function (e) {
                if (Array.isArray(e)) return new c(e);
                throw Error('illegal buffer');
              },
        l = function () {
          return s.Buffer
            ? function (e) {
                return (c.create = function (e) {
                  return s.Buffer.isBuffer(e) ? new r(e) : u(e);
                })(e);
              }
            : u;
        };
      function f() {
        var e = new o(0, 0),
          t = 0;
        if (!(this.len - this.pos > 4)) {
          for (; t < 3; ++t) {
            if (this.pos >= this.len) throw a(this);
            if (
              ((e.lo = (e.lo | ((127 & this.buf[this.pos]) << (7 * t))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return e;
          }
          return (
            (e.lo = (e.lo | ((127 & this.buf[this.pos++]) << (7 * t))) >>> 0), e
          );
        }
        for (; t < 4; ++t)
          if (
            ((e.lo = (e.lo | ((127 & this.buf[this.pos]) << (7 * t))) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return e;
        if (
          ((e.lo = (e.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0),
          (e.hi = (e.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0),
          this.buf[this.pos++] < 128)
        )
          return e;
        if (((t = 0), this.len - this.pos > 4)) {
          for (; t < 5; ++t)
            if (
              ((e.hi =
                (e.hi | ((127 & this.buf[this.pos]) << (7 * t + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return e;
        } else
          for (; t < 5; ++t) {
            if (this.pos >= this.len) throw a(this);
            if (
              ((e.hi =
                (e.hi | ((127 & this.buf[this.pos]) << (7 * t + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return e;
          }
        throw Error('invalid varint encoding');
      }
      function h(e, t) {
        return (
          (e[t - 4] | (e[t - 3] << 8) | (e[t - 2] << 16) | (e[t - 1] << 24)) >>>
          0
        );
      }
      function d() {
        if (this.pos + 8 > this.len) throw a(this, 8);
        return new o(
          h(this.buf, (this.pos += 4)),
          h(this.buf, (this.pos += 4)),
        );
      }
      (c.create = l()),
        (c.prototype._slice =
          s.Array.prototype.subarray || s.Array.prototype.slice),
        (c.prototype.uint32 = (function () {
          var e = 4294967295;
          return function () {
            if (
              ((e = (127 & this.buf[this.pos]) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return e;
            if (
              ((e = (e | ((127 & this.buf[this.pos]) << 7)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return e;
            if (
              ((e = (e | ((127 & this.buf[this.pos]) << 14)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return e;
            if (
              ((e = (e | ((127 & this.buf[this.pos]) << 21)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return e;
            if (
              ((e = (e | ((15 & this.buf[this.pos]) << 28)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return e;
            if ((this.pos += 5) > this.len)
              throw ((this.pos = this.len), a(this, 10));
            return e;
          };
        })()),
        (c.prototype.int32 = function () {
          return 0 | this.uint32();
        }),
        (c.prototype.sint32 = function () {
          var e = this.uint32();
          return ((e >>> 1) ^ -(1 & e)) | 0;
        }),
        (c.prototype.bool = function () {
          return 0 !== this.uint32();
        }),
        (c.prototype.fixed32 = function () {
          if (this.pos + 4 > this.len) throw a(this, 4);
          return h(this.buf, (this.pos += 4));
        }),
        (c.prototype.sfixed32 = function () {
          if (this.pos + 4 > this.len) throw a(this, 4);
          return 0 | h(this.buf, (this.pos += 4));
        }),
        (c.prototype.float = function () {
          if (this.pos + 4 > this.len) throw a(this, 4);
          var e = s.float.readFloatLE(this.buf, this.pos);
          return (this.pos += 4), e;
        }),
        (c.prototype.double = function () {
          if (this.pos + 8 > this.len) throw a(this, 4);
          var e = s.float.readDoubleLE(this.buf, this.pos);
          return (this.pos += 8), e;
        }),
        (c.prototype.bytes = function () {
          var e = this.uint32(),
            t = this.pos,
            n = this.pos + e;
          if (n > this.len) throw a(this, e);
          return (
            (this.pos += e),
            Array.isArray(this.buf)
              ? this.buf.slice(t, n)
              : t === n
              ? new this.buf.constructor(0)
              : this._slice.call(this.buf, t, n)
          );
        }),
        (c.prototype.string = function () {
          var e = this.bytes();
          return i.read(e, 0, e.length);
        }),
        (c.prototype.skip = function (e) {
          if ('number' === typeof e) {
            if (this.pos + e > this.len) throw a(this, e);
            this.pos += e;
          } else
            do {
              if (this.pos >= this.len) throw a(this);
            } while (128 & this.buf[this.pos++]);
          return this;
        }),
        (c.prototype.skipType = function (e) {
          switch (e) {
            case 0:
              this.skip();
              break;
            case 1:
              this.skip(8);
              break;
            case 2:
              this.skip(this.uint32());
              break;
            case 3:
              for (; 4 !== (e = 7 & this.uint32()); ) this.skipType(e);
              break;
            case 5:
              this.skip(4);
              break;
            default:
              throw Error('invalid wire type ' + e + ' at offset ' + this.pos);
          }
          return this;
        }),
        (c._configure = function (e) {
          (r = e), (c.create = l()), r._configure();
          var t = s.Long ? 'toLong' : 'toNumber';
          s.merge(c.prototype, {
            int64: function () {
              return f.call(this)[t](!1);
            },
            uint64: function () {
              return f.call(this)[t](!0);
            },
            sint64: function () {
              return f.call(this).zzDecode()[t](!1);
            },
            fixed64: function () {
              return d.call(this)[t](!0);
            },
            sfixed64: function () {
              return d.call(this)[t](!1);
            },
          });
        });
    },
    50593: function (e, t, n) {
      'use strict';
      e.exports = o;
      var r = n(51408);
      (o.prototype = Object.create(r.prototype)).constructor = o;
      var s = n(99693);
      function o(e) {
        r.call(this, e);
      }
      (o._configure = function () {
        s.Buffer && (o.prototype._slice = s.Buffer.prototype.slice);
      }),
        (o.prototype.string = function () {
          var e = this.uint32();
          return this.buf.utf8Slice
            ? this.buf.utf8Slice(
                this.pos,
                (this.pos = Math.min(this.pos + e, this.len)),
              )
            : this.buf.toString(
                'utf-8',
                this.pos,
                (this.pos = Math.min(this.pos + e, this.len)),
              );
        }),
        o._configure();
    },
    85054: function (e) {
      'use strict';
      e.exports = {};
    },
    35994: function (e, t, n) {
      'use strict';
      t.Service = n(77948);
    },
    77948: function (e, t, n) {
      'use strict';
      e.exports = s;
      var r = n(99693);
      function s(e, t, n) {
        if ('function' !== typeof e)
          throw TypeError('rpcImpl must be a function');
        r.EventEmitter.call(this),
          (this.rpcImpl = e),
          (this.requestDelimited = Boolean(t)),
          (this.responseDelimited = Boolean(n));
      }
      ((s.prototype = Object.create(r.EventEmitter.prototype)).constructor = s),
        (s.prototype.rpcCall = function e(t, n, s, o, i) {
          if (!o) throw TypeError('request must be specified');
          var a = this;
          if (!i) return r.asPromise(e, a, t, n, s, o);
          if (a.rpcImpl)
            try {
              return a.rpcImpl(
                t,
                n[a.requestDelimited ? 'encodeDelimited' : 'encode'](
                  o,
                ).finish(),
                function (e, n) {
                  if (e) return a.emit('error', e, t), i(e);
                  if (null !== n) {
                    if (!(n instanceof s))
                      try {
                        n =
                          s[a.responseDelimited ? 'decodeDelimited' : 'decode'](
                            n,
                          );
                      } catch (e) {
                        return a.emit('error', e, t), i(e);
                      }
                    return a.emit('data', n, t), i(null, n);
                  }
                  a.end(!0);
                },
              );
            } catch (c) {
              return (
                a.emit('error', c, t),
                void setTimeout(function () {
                  i(c);
                }, 0)
              );
            }
          else
            setTimeout(function () {
              i(Error('already ended'));
            }, 0);
        }),
        (s.prototype.end = function (e) {
          return (
            this.rpcImpl &&
              (e || this.rpcImpl(null, null, null),
              (this.rpcImpl = null),
              this.emit('end').off()),
            this
          );
        });
    },
    1945: function (e, t, n) {
      'use strict';
      e.exports = s;
      var r = n(99693);
      function s(e, t) {
        (this.lo = e >>> 0), (this.hi = t >>> 0);
      }
      var o = (s.zero = new s(0, 0));
      (o.toNumber = function () {
        return 0;
      }),
        (o.zzEncode = o.zzDecode =
          function () {
            return this;
          }),
        (o.length = function () {
          return 1;
        });
      var i = (s.zeroHash = '\0\0\0\0\0\0\0\0');
      (s.fromNumber = function (e) {
        if (0 === e) return o;
        var t = e < 0;
        t && (e = -e);
        var n = e >>> 0,
          r = ((e - n) / 4294967296) >>> 0;
        return (
          t &&
            ((r = ~r >>> 0),
            (n = ~n >>> 0),
            ++n > 4294967295 && ((n = 0), ++r > 4294967295 && (r = 0))),
          new s(n, r)
        );
      }),
        (s.from = function (e) {
          if ('number' === typeof e) return s.fromNumber(e);
          if (r.isString(e)) {
            if (!r.Long) return s.fromNumber(parseInt(e, 10));
            e = r.Long.fromString(e);
          }
          return e.low || e.high ? new s(e.low >>> 0, e.high >>> 0) : o;
        }),
        (s.prototype.toNumber = function (e) {
          if (!e && this.hi >>> 31) {
            var t = (1 + ~this.lo) >>> 0,
              n = ~this.hi >>> 0;
            return t || (n = (n + 1) >>> 0), -(t + 4294967296 * n);
          }
          return this.lo + 4294967296 * this.hi;
        }),
        (s.prototype.toLong = function (e) {
          return r.Long
            ? new r.Long(0 | this.lo, 0 | this.hi, Boolean(e))
            : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(e) };
        });
      var a = String.prototype.charCodeAt;
      (s.fromHash = function (e) {
        return e === i
          ? o
          : new s(
              (a.call(e, 0) |
                (a.call(e, 1) << 8) |
                (a.call(e, 2) << 16) |
                (a.call(e, 3) << 24)) >>>
                0,
              (a.call(e, 4) |
                (a.call(e, 5) << 8) |
                (a.call(e, 6) << 16) |
                (a.call(e, 7) << 24)) >>>
                0,
            );
      }),
        (s.prototype.toHash = function () {
          return String.fromCharCode(
            255 & this.lo,
            (this.lo >>> 8) & 255,
            (this.lo >>> 16) & 255,
            this.lo >>> 24,
            255 & this.hi,
            (this.hi >>> 8) & 255,
            (this.hi >>> 16) & 255,
            this.hi >>> 24,
          );
        }),
        (s.prototype.zzEncode = function () {
          var e = this.hi >> 31;
          return (
            (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ e) >>> 0),
            (this.lo = ((this.lo << 1) ^ e) >>> 0),
            this
          );
        }),
        (s.prototype.zzDecode = function () {
          var e = -(1 & this.lo);
          return (
            (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ e) >>> 0),
            (this.hi = ((this.hi >>> 1) ^ e) >>> 0),
            this
          );
        }),
        (s.prototype.length = function () {
          var e = this.lo,
            t = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
            n = this.hi >>> 24;
          return 0 === n
            ? 0 === t
              ? e < 16384
                ? e < 128
                  ? 1
                  : 2
                : e < 2097152
                ? 3
                : 4
              : t < 16384
              ? t < 128
                ? 5
                : 6
              : t < 2097152
              ? 7
              : 8
            : n < 128
            ? 9
            : 10;
        });
    },
    99693: function (e, t, n) {
      'use strict';
      var r = t;
      function s(e, t, n) {
        for (var r = Object.keys(t), s = 0; s < r.length; ++s)
          (void 0 !== e[r[s]] && n) || (e[r[s]] = t[r[s]]);
        return e;
      }
      function o(e) {
        function t(e, n) {
          if (!(this instanceof t)) return new t(e, n);
          Object.defineProperty(this, 'message', {
            get: function () {
              return e;
            },
          }),
            Error.captureStackTrace
              ? Error.captureStackTrace(this, t)
              : Object.defineProperty(this, 'stack', {
                  value: new Error().stack || '',
                }),
            n && s(this, n);
        }
        return (
          ((t.prototype = Object.create(Error.prototype)).constructor = t),
          Object.defineProperty(t.prototype, 'name', {
            get: function () {
              return e;
            },
          }),
          (t.prototype.toString = function () {
            return this.name + ': ' + this.message;
          }),
          t
        );
      }
      (r.asPromise = n(34537)),
        (r.base64 = n(97419)),
        (r.EventEmitter = n(19211)),
        (r.float = n(10945)),
        (r.inquire = n(67199)),
        (r.utf8 = n(94997)),
        (r.pool = n(76662)),
        (r.LongBits = n(1945)),
        (r.isNode = Boolean(
          'undefined' !== typeof n.g &&
            n.g &&
            n.g.process &&
            n.g.process.versions &&
            n.g.process.versions.node,
        )),
        (r.global =
          (r.isNode && n.g) ||
          ('undefined' !== typeof window && window) ||
          ('undefined' !== typeof self && self) ||
          this),
        (r.emptyArray = Object.freeze ? Object.freeze([]) : []),
        (r.emptyObject = Object.freeze ? Object.freeze({}) : {}),
        (r.isInteger =
          Number.isInteger ||
          function (e) {
            return 'number' === typeof e && isFinite(e) && Math.floor(e) === e;
          }),
        (r.isString = function (e) {
          return 'string' === typeof e || e instanceof String;
        }),
        (r.isObject = function (e) {
          return e && 'object' === typeof e;
        }),
        (r.isset = r.isSet =
          function (e, t) {
            var n = e[t];
            return (
              !(null == n || !e.hasOwnProperty(t)) &&
              ('object' !== typeof n ||
                (Array.isArray(n) ? n.length : Object.keys(n).length) > 0)
            );
          }),
        (r.Buffer = (function () {
          try {
            var e = r.inquire('buffer').Buffer;
            return e.prototype.utf8Write ? e : null;
          } catch (t) {
            return null;
          }
        })()),
        (r._Buffer_from = null),
        (r._Buffer_allocUnsafe = null),
        (r.newBuffer = function (e) {
          return 'number' === typeof e
            ? r.Buffer
              ? r._Buffer_allocUnsafe(e)
              : new r.Array(e)
            : r.Buffer
            ? r._Buffer_from(e)
            : 'undefined' === typeof Uint8Array
            ? e
            : new Uint8Array(e);
        }),
        (r.Array = 'undefined' !== typeof Uint8Array ? Uint8Array : Array),
        (r.Long =
          (r.global.dcodeIO && r.global.dcodeIO.Long) ||
          r.global.Long ||
          r.inquire('long')),
        (r.key2Re = /^true|false|0|1$/),
        (r.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
        (r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
        (r.longToHash = function (e) {
          return e ? r.LongBits.from(e).toHash() : r.LongBits.zeroHash;
        }),
        (r.longFromHash = function (e, t) {
          var n = r.LongBits.fromHash(e);
          return r.Long
            ? r.Long.fromBits(n.lo, n.hi, t)
            : n.toNumber(Boolean(t));
        }),
        (r.merge = s),
        (r.lcFirst = function (e) {
          return e.charAt(0).toLowerCase() + e.substring(1);
        }),
        (r.newError = o),
        (r.ProtocolError = o('ProtocolError')),
        (r.oneOfGetter = function (e) {
          for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = 1;
          return function () {
            for (var e = Object.keys(this), n = e.length - 1; n > -1; --n)
              if (1 === t[e[n]] && void 0 !== this[e[n]] && null !== this[e[n]])
                return e[n];
          };
        }),
        (r.oneOfSetter = function (e) {
          return function (t) {
            for (var n = 0; n < e.length; ++n) e[n] !== t && delete this[e[n]];
          };
        }),
        (r.toJSONOptions = {
          longs: String,
          enums: String,
          bytes: String,
          json: !0,
        }),
        (r._configure = function () {
          var e = r.Buffer;
          e
            ? ((r._Buffer_from =
                (e.from !== Uint8Array.from && e.from) ||
                function (t, n) {
                  return new e(t, n);
                }),
              (r._Buffer_allocUnsafe =
                e.allocUnsafe ||
                function (t) {
                  return new e(t);
                }))
            : (r._Buffer_from = r._Buffer_allocUnsafe = null);
        });
    },
    41173: function (e, t, n) {
      'use strict';
      e.exports = f;
      var r,
        s = n(99693),
        o = s.LongBits,
        i = s.base64,
        a = s.utf8;
      function c(e, t, n) {
        (this.fn = e), (this.len = t), (this.next = void 0), (this.val = n);
      }
      function u() {}
      function l(e) {
        (this.head = e.head),
          (this.tail = e.tail),
          (this.len = e.len),
          (this.next = e.states);
      }
      function f() {
        (this.len = 0),
          (this.head = new c(u, 0, 0)),
          (this.tail = this.head),
          (this.states = null);
      }
      var h = function () {
        return s.Buffer
          ? function () {
              return (f.create = function () {
                return new r();
              })();
            }
          : function () {
              return new f();
            };
      };
      function d(e, t, n) {
        t[n] = 255 & e;
      }
      function p(e, t) {
        (this.len = e), (this.next = void 0), (this.val = t);
      }
      function y(e, t, n) {
        for (; e.hi; )
          (t[n++] = (127 & e.lo) | 128),
            (e.lo = ((e.lo >>> 7) | (e.hi << 25)) >>> 0),
            (e.hi >>>= 7);
        for (; e.lo > 127; ) (t[n++] = (127 & e.lo) | 128), (e.lo = e.lo >>> 7);
        t[n++] = e.lo;
      }
      function g(e, t, n) {
        (t[n] = 255 & e),
          (t[n + 1] = (e >>> 8) & 255),
          (t[n + 2] = (e >>> 16) & 255),
          (t[n + 3] = e >>> 24);
      }
      (f.create = h()),
        (f.alloc = function (e) {
          return new s.Array(e);
        }),
        s.Array !== Array &&
          (f.alloc = s.pool(f.alloc, s.Array.prototype.subarray)),
        (f.prototype._push = function (e, t, n) {
          return (
            (this.tail = this.tail.next = new c(e, t, n)), (this.len += t), this
          );
        }),
        (p.prototype = Object.create(c.prototype)),
        (p.prototype.fn = function (e, t, n) {
          for (; e > 127; ) (t[n++] = (127 & e) | 128), (e >>>= 7);
          t[n] = e;
        }),
        (f.prototype.uint32 = function (e) {
          return (
            (this.len += (this.tail = this.tail.next =
              new p(
                (e >>>= 0) < 128
                  ? 1
                  : e < 16384
                  ? 2
                  : e < 2097152
                  ? 3
                  : e < 268435456
                  ? 4
                  : 5,
                e,
              )).len),
            this
          );
        }),
        (f.prototype.int32 = function (e) {
          return e < 0 ? this._push(y, 10, o.fromNumber(e)) : this.uint32(e);
        }),
        (f.prototype.sint32 = function (e) {
          return this.uint32(((e << 1) ^ (e >> 31)) >>> 0);
        }),
        (f.prototype.uint64 = function (e) {
          var t = o.from(e);
          return this._push(y, t.length(), t);
        }),
        (f.prototype.int64 = f.prototype.uint64),
        (f.prototype.sint64 = function (e) {
          var t = o.from(e).zzEncode();
          return this._push(y, t.length(), t);
        }),
        (f.prototype.bool = function (e) {
          return this._push(d, 1, e ? 1 : 0);
        }),
        (f.prototype.fixed32 = function (e) {
          return this._push(g, 4, e >>> 0);
        }),
        (f.prototype.sfixed32 = f.prototype.fixed32),
        (f.prototype.fixed64 = function (e) {
          var t = o.from(e);
          return this._push(g, 4, t.lo)._push(g, 4, t.hi);
        }),
        (f.prototype.sfixed64 = f.prototype.fixed64),
        (f.prototype.float = function (e) {
          return this._push(s.float.writeFloatLE, 4, e);
        }),
        (f.prototype.double = function (e) {
          return this._push(s.float.writeDoubleLE, 8, e);
        });
      var m = s.Array.prototype.set
        ? function (e, t, n) {
            t.set(e, n);
          }
        : function (e, t, n) {
            for (var r = 0; r < e.length; ++r) t[n + r] = e[r];
          };
      (f.prototype.bytes = function (e) {
        var t = e.length >>> 0;
        if (!t) return this._push(d, 1, 0);
        if (s.isString(e)) {
          var n = f.alloc((t = i.length(e)));
          i.decode(e, n, 0), (e = n);
        }
        return this.uint32(t)._push(m, t, e);
      }),
        (f.prototype.string = function (e) {
          var t = a.length(e);
          return t ? this.uint32(t)._push(a.write, t, e) : this._push(d, 1, 0);
        }),
        (f.prototype.fork = function () {
          return (
            (this.states = new l(this)),
            (this.head = this.tail = new c(u, 0, 0)),
            (this.len = 0),
            this
          );
        }),
        (f.prototype.reset = function () {
          return (
            this.states
              ? ((this.head = this.states.head),
                (this.tail = this.states.tail),
                (this.len = this.states.len),
                (this.states = this.states.next))
              : ((this.head = this.tail = new c(u, 0, 0)), (this.len = 0)),
            this
          );
        }),
        (f.prototype.ldelim = function () {
          var e = this.head,
            t = this.tail,
            n = this.len;
          return (
            this.reset().uint32(n),
            n && ((this.tail.next = e.next), (this.tail = t), (this.len += n)),
            this
          );
        }),
        (f.prototype.finish = function () {
          for (
            var e = this.head.next, t = this.constructor.alloc(this.len), n = 0;
            e;

          )
            e.fn(e.val, t, n), (n += e.len), (e = e.next);
          return t;
        }),
        (f._configure = function (e) {
          (r = e), (f.create = h()), r._configure();
        });
    },
    43155: function (e, t, n) {
      'use strict';
      e.exports = o;
      var r = n(41173);
      (o.prototype = Object.create(r.prototype)).constructor = o;
      var s = n(99693);
      function o() {
        r.call(this);
      }
      function i(e, t, n) {
        e.length < 40
          ? s.utf8.write(e, t, n)
          : t.utf8Write
          ? t.utf8Write(e, n)
          : t.write(e, n);
      }
      (o._configure = function () {
        (o.alloc = s._Buffer_allocUnsafe),
          (o.writeBytesBuffer =
            s.Buffer &&
            s.Buffer.prototype instanceof Uint8Array &&
            'set' === s.Buffer.prototype.set.name
              ? function (e, t, n) {
                  t.set(e, n);
                }
              : function (e, t, n) {
                  if (e.copy) e.copy(t, n, 0, e.length);
                  else for (var r = 0; r < e.length; ) t[n++] = e[r++];
                });
      }),
        (o.prototype.bytes = function (e) {
          s.isString(e) && (e = s._Buffer_from(e, 'base64'));
          var t = e.length >>> 0;
          return (
            this.uint32(t), t && this._push(o.writeBytesBuffer, t, e), this
          );
        }),
        (o.prototype.string = function (e) {
          var t = s.Buffer.byteLength(e);
          return this.uint32(t), t && this._push(i, t, e), this;
        }),
        o._configure();
    },
    50590: function (e) {
      e.exports = e => {
        if (e[Symbol.asyncIterator]) return e;
        if (e.getReader)
          return (async function* () {
            const t = e.getReader();
            try {
              for (;;) {
                const { done: e, value: n } = await t.read();
                if (e) return;
                yield n;
              }
            } finally {
              t.releaseLock();
            }
          })();
        throw new Error('unknown stream');
      };
    },
    26988: function (e) {
      e.exports = function e(t, n) {
        var r,
          s = 0,
          o = 0,
          i = (n = n || 0),
          a = t.length;
        do {
          if (i >= a || o > 49)
            throw ((e.bytes = 0), new RangeError('Could not decode varint'));
          (r = t[i++]),
            (s += o < 28 ? (127 & r) << o : (127 & r) * Math.pow(2, o)),
            (o += 7);
        } while (r >= 128);
        return (e.bytes = i - n), s;
      };
    },
    1312: function (e) {
      e.exports = function e(n, r, s) {
        if (Number.MAX_SAFE_INTEGER && n > Number.MAX_SAFE_INTEGER)
          throw ((e.bytes = 0), new RangeError('Could not encode varint'));
        r = r || [];
        var o = (s = s || 0);
        for (; n >= t; ) (r[s++] = (255 & n) | 128), (n /= 128);
        for (; -128 & n; ) (r[s++] = (255 & n) | 128), (n >>>= 7);
        return (r[s] = 0 | n), (e.bytes = s - o + 1), r;
      };
      var t = Math.pow(2, 31);
    },
    66395: function (e, t, n) {
      e.exports = {
        encode: n(1312),
        decode: n(26988),
        encodingLength: n(10082),
      };
    },
    10082: function (e) {
      var t = Math.pow(2, 7),
        n = Math.pow(2, 14),
        r = Math.pow(2, 21),
        s = Math.pow(2, 28),
        o = Math.pow(2, 35),
        i = Math.pow(2, 42),
        a = Math.pow(2, 49),
        c = Math.pow(2, 56),
        u = Math.pow(2, 63);
      e.exports = function (e) {
        return e < t
          ? 1
          : e < n
          ? 2
          : e < r
          ? 3
          : e < s
          ? 4
          : e < o
          ? 5
          : e < i
          ? 6
          : e < a
          ? 7
          : e < c
          ? 8
          : e < u
          ? 9
          : 10;
      };
    },
    30907: function (e, t, n) {
      'use strict';
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    40181: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(30907);
      function s(e, t) {
        if (e) {
          if ('string' === typeof e) return (0, r.Z)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? (0, r.Z)(e, t)
              : void 0
          );
        }
      }
    },
    64936: function (e, t, n) {
      'use strict';
      n.d(t, {
        Jx: function () {
          return s.Jx;
        },
        cv: function () {
          return r.cv;
        },
        WU: function () {
          return o.W;
        },
        Dy: function () {
          return o.D;
        },
      });
      var r = n(85989),
        s = n(61287),
        o = n(59787);
    },
    55580: function (e, t, n) {
      'use strict';
      n.d(t, {
        or: function () {
          return o;
        },
        kj: function () {
          return i;
        },
        X0: function () {
          return a;
        },
        Jl: function () {
          return c;
        },
        YX: function () {
          return u;
        },
        Km: function () {
          return l;
        },
        Zh: function () {
          return f;
        },
        cs: function () {
          return h;
        },
        uN: function () {
          return d;
        },
        Fh: function () {
          return p;
        },
        Tp: function () {
          return y;
        },
      });
      var r = n(59787),
        s = n(85590);
      const o = [24, 256, 65536, 4294967296, BigInt('18446744073709551616')];
      function i(e, t, n) {
        (0, s.DO)(e, t, 1);
        const r = e[t];
        if (!0 === n.strict && r < o[0])
          throw new Error(
            `${s.IR} integer encoded in more bytes than necessary (strict decode)`,
          );
        return r;
      }
      function a(e, t, n) {
        (0, s.DO)(e, t, 2);
        const r = (e[t] << 8) | e[t + 1];
        if (!0 === n.strict && r < o[1])
          throw new Error(
            `${s.IR} integer encoded in more bytes than necessary (strict decode)`,
          );
        return r;
      }
      function c(e, t, n) {
        (0, s.DO)(e, t, 4);
        const r =
          16777216 * e[t] + (e[t + 1] << 16) + (e[t + 2] << 8) + e[t + 3];
        if (!0 === n.strict && r < o[2])
          throw new Error(
            `${s.IR} integer encoded in more bytes than necessary (strict decode)`,
          );
        return r;
      }
      function u(e, t, n) {
        (0, s.DO)(e, t, 8);
        const r =
            16777216 * e[t] + (e[t + 1] << 16) + (e[t + 2] << 8) + e[t + 3],
          i =
            16777216 * e[t + 4] + (e[t + 5] << 16) + (e[t + 6] << 8) + e[t + 7],
          a = (BigInt(r) << BigInt(32)) + BigInt(i);
        if (!0 === n.strict && a < o[3])
          throw new Error(
            `${s.IR} integer encoded in more bytes than necessary (strict decode)`,
          );
        if (a <= Number.MAX_SAFE_INTEGER) return Number(a);
        if (!0 === n.allowBigInt) return a;
        throw new Error(
          `${s.IR} integers outside of the safe integer range are not supported`,
        );
      }
      function l(e, t, n, s) {
        return new r.W(r.D.uint, i(e, t + 1, s), 2);
      }
      function f(e, t, n, s) {
        return new r.W(r.D.uint, a(e, t + 1, s), 3);
      }
      function h(e, t, n, s) {
        return new r.W(r.D.uint, c(e, t + 1, s), 5);
      }
      function d(e, t, n, s) {
        return new r.W(r.D.uint, u(e, t + 1, s), 9);
      }
      function p(e, t) {
        return y(e, 0, t.value);
      }
      function y(e, t, n) {
        if (n < o[0]) {
          const r = Number(n);
          e.push([t | r]);
        } else if (n < o[1]) {
          const r = Number(n);
          e.push([24 | t, r]);
        } else if (n < o[2]) {
          const r = Number(n);
          e.push([25 | t, r >>> 8, 255 & r]);
        } else if (n < o[3]) {
          const r = Number(n);
          e.push([
            26 | t,
            (r >>> 24) & 255,
            (r >>> 16) & 255,
            (r >>> 8) & 255,
            255 & r,
          ]);
        } else {
          const r = BigInt(n);
          if (!(r < o[4]))
            throw new Error(
              `${s.IR} encountered BigInt larger than allowable range`,
            );
          {
            const n = [27 | t, 0, 0, 0, 0, 0, 0, 0];
            let s = Number(r & BigInt(4294967295)),
              o = Number((r >> BigInt(32)) & BigInt(4294967295));
            (n[8] = 255 & s),
              (s >>= 8),
              (n[7] = 255 & s),
              (s >>= 8),
              (n[6] = 255 & s),
              (s >>= 8),
              (n[5] = 255 & s),
              (n[4] = 255 & o),
              (o >>= 8),
              (n[3] = 255 & o),
              (o >>= 8),
              (n[2] = 255 & o),
              (o >>= 8),
              (n[1] = 255 & o),
              e.push(n);
          }
        }
      }
      (p.encodedSize = function (e) {
        return y.encodedSize(e.value);
      }),
        (y.encodedSize = function (e) {
          return e < o[0] ? 1 : e < o[1] ? 2 : e < o[2] ? 3 : e < o[3] ? 5 : 9;
        }),
        (p.compareTokens = function (e, t) {
          return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
        });
    },
    53929: function (e, t, n) {
      'use strict';
      n.d(t, {
        yr: function () {
          return i;
        },
        r0: function () {
          return a;
        },
        wy: function () {
          return c;
        },
        ec: function () {
          return f;
        },
        UT: function () {
          return h;
        },
      });
      var r = n(59787),
        s = n(55580),
        o = n(85590);
      function i(e, t, n, o) {
        return new r.W(r.D.negint, -1 - s.kj(e, t + 1, o), 2);
      }
      function a(e, t, n, o) {
        return new r.W(r.D.negint, -1 - s.X0(e, t + 1, o), 3);
      }
      function c(e, t, n, o) {
        return new r.W(r.D.negint, -1 - s.Jl(e, t + 1, o), 5);
      }
      const u = BigInt(-1),
        l = BigInt(1);
      function f(e, t, n, i) {
        const a = s.YX(e, t + 1, i);
        if ('bigint' !== typeof a) {
          const e = -1 - a;
          if (e >= Number.MIN_SAFE_INTEGER) return new r.W(r.D.negint, e, 9);
        }
        if (!0 !== i.allowBigInt)
          throw new Error(
            `${o.IR} integers outside of the safe integer range are not supported`,
          );
        return new r.W(r.D.negint, u - BigInt(a), 9);
      }
      function h(e, t) {
        const n = t.value,
          r = 'bigint' === typeof n ? n * u - l : -1 * n - 1;
        s.Tp(e, t.type.majorEncoded, r);
      }
      (h.encodedSize = function (e) {
        const t = e.value,
          n = 'bigint' === typeof t ? t * u - l : -1 * t - 1;
        return n < s.or[0]
          ? 1
          : n < s.or[1]
          ? 2
          : n < s.or[2]
          ? 3
          : n < s.or[3]
          ? 5
          : 9;
      }),
        (h.compareTokens = function (e, t) {
          return e.value < t.value ? 1 : e.value > t.value ? -1 : 0;
        });
    },
    92887: function (e, t, n) {
      'use strict';
      n.d(t, {
        Ii: function () {
          return c;
        },
        UQ: function () {
          return u;
        },
        BS: function () {
          return l;
        },
        zU: function () {
          return f;
        },
        ME: function () {
          return h;
        },
        hg: function () {
          return p;
        },
      });
      var r = n(59787),
        s = n(85590),
        o = n(55580),
        i = n(22042);
      function a(e, t, n, o) {
        (0, s.DO)(e, t, n + o);
        const a = (0, i.tP)(e, t + n, t + n + o);
        return new r.W(r.D.bytes, a, n + o);
      }
      function c(e, t, n, r) {
        return a(e, t, 1, n);
      }
      function u(e, t, n, r) {
        return a(e, t, 2, o.kj(e, t + 1, r));
      }
      function l(e, t, n, r) {
        return a(e, t, 3, o.X0(e, t + 1, r));
      }
      function f(e, t, n, r) {
        return a(e, t, 5, o.Jl(e, t + 1, r));
      }
      function h(e, t, n, r) {
        const i = o.YX(e, t + 1, r);
        if ('bigint' === typeof i)
          throw new Error(`${s.IR} 64-bit integer bytes lengths not supported`);
        return a(e, t, 9, i);
      }
      function d(e) {
        return (
          void 0 === e.encodedBytes &&
            (e.encodedBytes =
              e.type === r.D.string ? (0, i.mL)(e.value) : e.value),
          e.encodedBytes
        );
      }
      function p(e, t) {
        const n = d(t);
        o.Tp(e, t.type.majorEncoded, n.length), e.push(n);
      }
      (p.encodedSize = function (e) {
        const t = d(e);
        return o.Tp.encodedSize(t.length) + t.length;
      }),
        (p.compareTokens = function (e, t) {
          return (
            (n = d(e)),
            (r = d(t)),
            n.length < r.length ? -1 : n.length > r.length ? 1 : (0, i.qu)(n, r)
          );
          var n, r;
        });
    },
    50768: function (e, t, n) {
      'use strict';
      n.d(t, {
        nt: function () {
          return u;
        },
        Bq: function () {
          return l;
        },
        h: function () {
          return f;
        },
        q0: function () {
          return h;
        },
        bc: function () {
          return d;
        },
        YW: function () {
          return p;
        },
      });
      var r = n(59787),
        s = n(85590),
        o = n(55580),
        i = n(92887),
        a = n(22042);
      function c(e, t, n, o, i) {
        const c = n + o;
        (0, s.DO)(e, t, c);
        const u = new r.W(r.D.string, (0, a.BB)(e, t + n, t + c), c);
        return (
          !0 === i.retainStringBytes &&
            (u.byteValue = (0, a.tP)(e, t + n, t + c)),
          u
        );
      }
      function u(e, t, n, r) {
        return c(e, t, 1, n, r);
      }
      function l(e, t, n, r) {
        return c(e, t, 2, o.kj(e, t + 1, r), r);
      }
      function f(e, t, n, r) {
        return c(e, t, 3, o.X0(e, t + 1, r), r);
      }
      function h(e, t, n, r) {
        return c(e, t, 5, o.Jl(e, t + 1, r), r);
      }
      function d(e, t, n, r) {
        const i = o.YX(e, t + 1, r);
        if ('bigint' === typeof i)
          throw new Error(
            `${s.IR} 64-bit integer string lengths not supported`,
          );
        return c(e, t, 9, i, r);
      }
      const p = i.hg;
    },
    8278: function (e, t, n) {
      'use strict';
      n.d(t, {
        Ju: function () {
          return a;
        },
        h7: function () {
          return c;
        },
        OC: function () {
          return u;
        },
        lY: function () {
          return l;
        },
        a8: function () {
          return f;
        },
        s5: function () {
          return h;
        },
        HF: function () {
          return d;
        },
      });
      var r = n(59787),
        s = n(55580),
        o = n(85590);
      function i(e, t, n, s) {
        return new r.W(r.D.array, s, n);
      }
      function a(e, t, n, r) {
        return i(0, 0, 1, n);
      }
      function c(e, t, n, r) {
        return i(0, 0, 2, s.kj(e, t + 1, r));
      }
      function u(e, t, n, r) {
        return i(0, 0, 3, s.X0(e, t + 1, r));
      }
      function l(e, t, n, r) {
        return i(0, 0, 5, s.Jl(e, t + 1, r));
      }
      function f(e, t, n, r) {
        const a = s.YX(e, t + 1, r);
        if ('bigint' === typeof a)
          throw new Error(`${o.IR} 64-bit integer array lengths not supported`);
        return i(0, 0, 9, a);
      }
      function h(e, t, n, r) {
        if (!1 === r.allowIndefinite)
          throw new Error(`${o.IR} indefinite length items not allowed`);
        return i(0, 0, 1, 1 / 0);
      }
      function d(e, t) {
        s.Tp(e, r.D.array.majorEncoded, t.value);
      }
      d.compareTokens = s.Fh.compareTokens;
    },
    59283: function (e, t, n) {
      'use strict';
      n.d(t, {
        _K: function () {
          return a;
        },
        G: function () {
          return c;
        },
        qe: function () {
          return u;
        },
        IY: function () {
          return l;
        },
        F2: function () {
          return f;
        },
        ng: function () {
          return h;
        },
        KI: function () {
          return d;
        },
      });
      var r = n(59787),
        s = n(55580),
        o = n(85590);
      function i(e, t, n, s) {
        return new r.W(r.D.map, s, n);
      }
      function a(e, t, n, r) {
        return i(0, 0, 1, n);
      }
      function c(e, t, n, r) {
        return i(0, 0, 2, s.kj(e, t + 1, r));
      }
      function u(e, t, n, r) {
        return i(0, 0, 3, s.X0(e, t + 1, r));
      }
      function l(e, t, n, r) {
        return i(0, 0, 5, s.Jl(e, t + 1, r));
      }
      function f(e, t, n, r) {
        const a = s.YX(e, t + 1, r);
        if ('bigint' === typeof a)
          throw new Error(`${o.IR} 64-bit integer map lengths not supported`);
        return i(0, 0, 9, a);
      }
      function h(e, t, n, r) {
        if (!1 === r.allowIndefinite)
          throw new Error(`${o.IR} indefinite length items not allowed`);
        return i(0, 0, 1, 1 / 0);
      }
      function d(e, t) {
        s.Tp(e, r.D.map.majorEncoded, t.value);
      }
      d.compareTokens = s.Fh.compareTokens;
    },
    82428: function (e, t, n) {
      'use strict';
      n.d(t, {
        qJ: function () {
          return o;
        },
        ZR: function () {
          return i;
        },
        CF: function () {
          return a;
        },
        vP: function () {
          return c;
        },
        MV: function () {
          return u;
        },
        xy: function () {
          return l;
        },
      });
      var r = n(59787),
        s = n(55580);
      function o(e, t, n, s) {
        return new r.W(r.D.tag, n, 1);
      }
      function i(e, t, n, o) {
        return new r.W(r.D.tag, s.kj(e, t + 1, o), 2);
      }
      function a(e, t, n, o) {
        return new r.W(r.D.tag, s.X0(e, t + 1, o), 3);
      }
      function c(e, t, n, o) {
        return new r.W(r.D.tag, s.Jl(e, t + 1, o), 5);
      }
      function u(e, t, n, o) {
        return new r.W(r.D.tag, s.YX(e, t + 1, o), 9);
      }
      function l(e, t) {
        s.Tp(e, r.D.tag.majorEncoded, t.value);
      }
      l.compareTokens = s.Fh.compareTokens;
    },
    73851: function (e, t, n) {
      'use strict';
      n.d(t, {
        h1: function () {
          return i;
        },
        y7: function () {
          return a;
        },
        mW: function () {
          return u;
        },
        GI: function () {
          return l;
        },
        vV: function () {
          return f;
        },
        tA: function () {
          return h;
        },
      });
      var r = n(59787),
        s = n(85590),
        o = n(55580);
      function i(e, t, n, o) {
        if (!1 === o.allowUndefined)
          throw new Error(`${s.IR} undefined values are not supported`);
        return !0 === o.coerceUndefinedToNull
          ? new r.W(r.D.null, null, 1)
          : new r.W(r.D.undefined, void 0, 1);
      }
      function a(e, t, n, o) {
        if (!1 === o.allowIndefinite)
          throw new Error(`${s.IR} indefinite length items not allowed`);
        return new r.W(r.D.break, void 0, 1);
      }
      function c(e, t, n) {
        if (n) {
          if (!1 === n.allowNaN && Number.isNaN(e))
            throw new Error(`${s.IR} NaN values are not supported`);
          if (!1 === n.allowInfinity && (e === 1 / 0 || e === -1 / 0))
            throw new Error(`${s.IR} Infinity values are not supported`);
        }
        return new r.W(r.D.float, e, t);
      }
      function u(e, t, n, r) {
        return c(m(e, t + 1), 3, r);
      }
      function l(e, t, n, r) {
        return c(b(e, t + 1), 5, r);
      }
      function f(e, t, n, r) {
        return c(v(e, t + 1), 9, r);
      }
      function h(e, t, n) {
        const s = t.value;
        if (!1 === s) e.push([20 | r.D.float.majorEncoded]);
        else if (!0 === s) e.push([21 | r.D.float.majorEncoded]);
        else if (null === s) e.push([22 | r.D.float.majorEncoded]);
        else if (void 0 === s) e.push([23 | r.D.float.majorEncoded]);
        else {
          let t,
            r = !1;
          (n && !0 === n.float64) ||
            (g(s),
            (t = m(y, 1)),
            s === t || Number.isNaN(s)
              ? ((y[0] = 249), e.push(y.slice(0, 3)), (r = !0))
              : (w(s),
                (t = b(y, 1)),
                s === t && ((y[0] = 250), e.push(y.slice(0, 5)), (r = !0)))),
            r ||
              ((o = s),
              p.setFloat64(0, o, !1),
              (t = v(y, 1)),
              (y[0] = 251),
              e.push(y.slice(0, 9)));
        }
        var o;
      }
      h.encodedSize = function (e, t) {
        const n = e.value;
        if (!1 === n || !0 === n || null === n || void 0 === n) return 1;
        let r;
        if (!t || !0 !== t.float64) {
          if ((g(n), (r = m(y, 1)), n === r || Number.isNaN(n))) return 3;
          if ((w(n), (r = b(y, 1)), n === r)) return 5;
        }
        return 9;
      };
      const d = new ArrayBuffer(9),
        p = new DataView(d, 1),
        y = new Uint8Array(d, 0);
      function g(e) {
        if (e === 1 / 0) p.setUint16(0, 31744, !1);
        else if (e === -1 / 0) p.setUint16(0, 64512, !1);
        else if (Number.isNaN(e)) p.setUint16(0, 32256, !1);
        else {
          p.setFloat32(0, e);
          const t = p.getUint32(0),
            n = (2139095040 & t) >> 23,
            r = 8388607 & t;
          if (255 === n) p.setUint16(0, 31744, !1);
          else if (0 === n)
            p.setUint16(0, ((2147483648 & e) >> 16) | (r >> 13), !1);
          else {
            const e = n - 127;
            e < -24
              ? p.setUint16(0, 0)
              : e < -14
              ? p.setUint16(0, ((2147483648 & t) >> 16) | (1 << (24 + e)), !1)
              : p.setUint16(
                  0,
                  ((2147483648 & t) >> 16) | ((e + 15) << 10) | (r >> 13),
                  !1,
                );
          }
        }
      }
      function m(e, t) {
        if (e.length - t < 2)
          throw new Error(`${s.IR} not enough data for float16`);
        const n = (e[t] << 8) + e[t + 1];
        if (31744 === n) return 1 / 0;
        if (64512 === n) return -1 / 0;
        if (32256 === n) return NaN;
        const r = (n >> 10) & 31,
          o = 1023 & n;
        let i;
        return (
          (i =
            0 === r
              ? o * 2 ** -24
              : 31 !== r
              ? (o + 1024) * 2 ** (r - 25)
              : 0 === o
              ? 1 / 0
              : NaN),
          32768 & n ? -i : i
        );
      }
      function w(e) {
        p.setFloat32(0, e, !1);
      }
      function b(e, t) {
        if (e.length - t < 4)
          throw new Error(`${s.IR} not enough data for float32`);
        const n = (e.byteOffset || 0) + t;
        return new DataView(e.buffer, n, 4).getFloat32(0, !1);
      }
      function v(e, t) {
        if (e.length - t < 8)
          throw new Error(`${s.IR} not enough data for float64`);
        const n = (e.byteOffset || 0) + t;
        return new DataView(e.buffer, n, 8).getFloat64(0, !1);
      }
      h.compareTokens = o.Fh.compareTokens;
    },
    22042: function (e, t, n) {
      'use strict';
      n.d(t, {
        Dz: function () {
          return a;
        },
        BB: function () {
          return c;
        },
        mL: function () {
          return u;
        },
        nI: function () {
          return l;
        },
        tP: function () {
          return f;
        },
        zo: function () {
          return h;
        },
        un: function () {
          return d;
        },
        qu: function () {
          return p;
        },
        Pu: function () {
          return m;
        },
      });
      const r =
          globalThis.process &&
          !globalThis.process.browser &&
          globalThis.Buffer &&
          'function' === typeof globalThis.Buffer.isBuffer,
        s = new TextDecoder(),
        o = new TextEncoder();
      function i(e) {
        return r && globalThis.Buffer.isBuffer(e);
      }
      function a(e) {
        return e instanceof Uint8Array
          ? i(e)
            ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
            : e
          : Uint8Array.from(e);
      }
      const c = r
          ? (e, t, n) =>
              n - t > 64
                ? globalThis.Buffer.from(e.subarray(t, n)).toString('utf8')
                : g(e, t, n)
          : (e, t, n) => (n - t > 64 ? s.decode(e.subarray(t, n)) : g(e, t, n)),
        u = r
          ? e => (e.length > 64 ? globalThis.Buffer.from(e) : y(e))
          : e => (e.length > 64 ? o.encode(e) : y(e)),
        l = e => Uint8Array.from(e),
        f = r
          ? (e, t, n) =>
              i(e) ? new Uint8Array(e.subarray(t, n)) : e.slice(t, n)
          : (e, t, n) => e.slice(t, n),
        h = r
          ? (e, t) => (
              (e = e.map(e =>
                e instanceof Uint8Array ? e : globalThis.Buffer.from(e),
              )),
              a(globalThis.Buffer.concat(e, t))
            )
          : (e, t) => {
              const n = new Uint8Array(t);
              let r = 0;
              for (let s of e)
                r + s.length > n.length && (s = s.subarray(0, n.length - r)),
                  n.set(s, r),
                  (r += s.length);
              return n;
            },
        d = r ? e => globalThis.Buffer.allocUnsafe(e) : e => new Uint8Array(e);
      function p(e, t) {
        if (i(e) && i(t)) return e.compare(t);
        for (let n = 0; n < e.length; n++)
          if (e[n] !== t[n]) return e[n] < t[n] ? -1 : 1;
        return 0;
      }
      function y(e, t = 1 / 0) {
        let n;
        const r = e.length;
        let s = null;
        const o = [];
        for (let i = 0; i < r; ++i) {
          if (((n = e.charCodeAt(i)), n > 55295 && n < 57344)) {
            if (!s) {
              if (n > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (i + 1 === r) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              s = n;
              continue;
            }
            if (n < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), (s = n);
              continue;
            }
            n = 65536 + (((s - 55296) << 10) | (n - 56320));
          } else s && (t -= 3) > -1 && o.push(239, 191, 189);
          if (((s = null), n < 128)) {
            if ((t -= 1) < 0) break;
            o.push(n);
          } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            o.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error('Invalid code point');
            if ((t -= 4) < 0) break;
            o.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128,
            );
          }
        }
        return o;
      }
      function g(e, t, n) {
        const r = [];
        for (; t < n; ) {
          const s = e[t];
          let o = null,
            i = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
          if (t + i <= n) {
            let n, r, a, c;
            switch (i) {
              case 1:
                s < 128 && (o = s);
                break;
              case 2:
                (n = e[t + 1]),
                  128 === (192 & n) &&
                    ((c = ((31 & s) << 6) | (63 & n)), c > 127 && (o = c));
                break;
              case 3:
                (n = e[t + 1]),
                  (r = e[t + 2]),
                  128 === (192 & n) &&
                    128 === (192 & r) &&
                    ((c = ((15 & s) << 12) | ((63 & n) << 6) | (63 & r)),
                    c > 2047 && (c < 55296 || c > 57343) && (o = c));
                break;
              case 4:
                (n = e[t + 1]),
                  (r = e[t + 2]),
                  (a = e[t + 3]),
                  128 === (192 & n) &&
                    128 === (192 & r) &&
                    128 === (192 & a) &&
                    ((c =
                      ((15 & s) << 18) |
                      ((63 & n) << 12) |
                      ((63 & r) << 6) |
                      (63 & a)),
                    c > 65535 && c < 1114112 && (o = c));
            }
          }
          null === o
            ? ((o = 65533), (i = 1))
            : o > 65535 &&
              ((o -= 65536),
              r.push(((o >>> 10) & 1023) | 55296),
              (o = 56320 | (1023 & o))),
            r.push(o),
            (t += i);
        }
        return m(r);
      }
      function m(e) {
        const t = e.length;
        if (t <= 4096) return String.fromCharCode.apply(String, e);
        let n = '',
          r = 0;
        for (; r < t; )
          n += String.fromCharCode.apply(String, e.slice(r, (r += 4096)));
        return n;
      }
    },
    85590: function (e, t, n) {
      'use strict';
      n.d(t, {
        IR: function () {
          return r;
        },
        OO: function () {
          return s;
        },
        DO: function () {
          return i;
        },
      });
      const r = 'CBOR decode error:',
        s = 'CBOR encode error:',
        o = [];
      function i(e, t, n) {
        if (e.length - t < n) throw new Error(`${r} not enough data for type`);
      }
      (o[23] = 1), (o[24] = 2), (o[25] = 3), (o[26] = 5), (o[27] = 9);
    },
    61287: function (e, t, n) {
      'use strict';
      n.d(t, {
        Jx: function () {
          return f;
        },
      });
      var r = n(85590),
        s = n(59787),
        o = n(53741);
      const i = {
        strict: !1,
        allowIndefinite: !0,
        allowUndefined: !0,
        allowBigInt: !0,
      };
      class a {
        constructor(e, t = {}) {
          (this.pos = 0), (this.data = e), (this.options = t);
        }
        done() {
          return this.pos >= this.data.length;
        }
        next() {
          const e = this.data[this.pos];
          let t = o.PS[e];
          if (void 0 === t) {
            const n = o.cW[e];
            if (!n)
              throw new Error(
                `${r.IR} no decoder for major type ${e >>> 5} (byte 0x${e
                  .toString(16)
                  .padStart(2, '0')})`,
              );
            const s = 31 & e;
            t = n(this.data, this.pos, s, this.options);
          }
          return (this.pos += t.encodedLength), t;
        }
      }
      const c = Symbol.for('DONE'),
        u = Symbol.for('BREAK');
      function l(e, t) {
        if (e.done()) return c;
        const n = e.next();
        if (n.type === s.D.break) return u;
        if (n.type.terminal) return n.value;
        if (n.type === s.D.array)
          return (function (e, t, n) {
            const s = [];
            for (let o = 0; o < e.value; o++) {
              const i = l(t, n);
              if (i === u) {
                if (e.value === 1 / 0) break;
                throw new Error(
                  `${r.IR} got unexpected break to lengthed array`,
                );
              }
              if (i === c)
                throw new Error(
                  `${r.IR} found array but not enough entries (got ${o}, expected ${e.value})`,
                );
              s[o] = i;
            }
            return s;
          })(n, e, t);
        if (n.type === s.D.map)
          return (function (e, t, n) {
            const s = !0 === n.useMaps,
              o = s ? void 0 : {},
              i = s ? new Map() : void 0;
            for (let a = 0; a < e.value; a++) {
              const f = l(t, n);
              if (f === u) {
                if (e.value === 1 / 0) break;
                throw new Error(`${r.IR} got unexpected break to lengthed map`);
              }
              if (f === c)
                throw new Error(
                  `${r.IR} found map but not enough entries (got ${a} [no key], expected ${e.value})`,
                );
              if (!0 !== s && 'string' !== typeof f)
                throw new Error(
                  `${r.IR} non-string keys not supported (got ${typeof f})`,
                );
              const h = l(t, n);
              if (h === c)
                throw new Error(
                  `${r.IR} found map but not enough entries (got ${a} [no value], expected ${e.value})`,
                );
              s ? i.set(f, h) : (o[f] = h);
            }
            return s ? i : o;
          })(n, e, t);
        if (n.type === s.D.tag) {
          if (t.tags && 'function' === typeof t.tags[n.value]) {
            const r = l(e, t);
            return t.tags[n.value](r);
          }
          throw new Error(`${r.IR} tag not supported (${n.value})`);
        }
        throw new Error('unsupported');
      }
      function f(e, t) {
        if (!(e instanceof Uint8Array))
          throw new Error(`${r.IR} data to decode must be a Uint8Array`);
        const n = (t = Object.assign({}, i, t)).tokenizer || new a(e, t),
          s = l(n, t);
        if (s === c)
          throw new Error(`${r.IR} did not find any content to decode`);
        if (s === u) throw new Error(`${r.IR} got unexpected break`);
        if (!n.done())
          throw new Error(`${r.IR} too many terminals, data makes no sense`);
        return s;
      }
    },
    85989: function (e, t, n) {
      'use strict';
      n.d(t, {
        cv: function () {
          return I;
        },
        w$: function () {
          return P;
        },
      });
      const r = ['string', 'number', 'bigint', 'symbol'],
        s = [
          'Function',
          'Generator',
          'AsyncGenerator',
          'GeneratorFunction',
          'AsyncGeneratorFunction',
          'AsyncFunction',
          'Observable',
          'Array',
          'Buffer',
          'Object',
          'RegExp',
          'Date',
          'Error',
          'Map',
          'Set',
          'WeakMap',
          'WeakSet',
          'ArrayBuffer',
          'SharedArrayBuffer',
          'DataView',
          'Promise',
          'URL',
          'HTMLElement',
          'Int8Array',
          'Uint8Array',
          'Uint8ClampedArray',
          'Int16Array',
          'Uint16Array',
          'Int32Array',
          'Uint32Array',
          'Float32Array',
          'Float64Array',
          'BigInt64Array',
          'BigUint64Array',
        ];
      function o(e) {
        if (null === e) return 'null';
        if (void 0 === e) return 'undefined';
        if (!0 === e || !1 === e) return 'boolean';
        const t = typeof e;
        if (r.includes(t)) return t;
        if ('function' === t) return 'Function';
        if (Array.isArray(e)) return 'Array';
        if (
          (function (e) {
            return (
              e &&
              e.constructor &&
              e.constructor.isBuffer &&
              e.constructor.isBuffer.call(null, e)
            );
          })(e)
        )
          return 'Buffer';
        const n = (function (e) {
          const t = Object.prototype.toString.call(e).slice(8, -1);
          if (s.includes(t)) return t;
          return;
        })(e);
        return n || 'Object';
      }
      var i = n(59787),
        a = n(22042);
      class c {
        constructor(e = 256) {
          (this.chunkSize = e),
            (this.cursor = 0),
            (this.maxCursor = -1),
            (this.chunks = []),
            (this._initReuseChunk = null);
        }
        reset() {
          (this.chunks = []),
            (this.cursor = 0),
            (this.maxCursor = -1),
            null !== this._initReuseChunk &&
              (this.chunks.push(this._initReuseChunk),
              (this.maxCursor = this._initReuseChunk.length - 1));
        }
        push(e) {
          let t = this.chunks[this.chunks.length - 1];
          if (this.cursor + e.length <= this.maxCursor + 1) {
            const n = t.length - (this.maxCursor - this.cursor) - 1;
            t.set(e, n);
          } else {
            if (t) {
              const e = t.length - (this.maxCursor - this.cursor) - 1;
              e < t.length &&
                ((this.chunks[this.chunks.length - 1] = t.subarray(0, e)),
                (this.maxCursor = this.cursor - 1));
            }
            e.length < 64 && e.length < this.chunkSize
              ? ((t = (0, a.un)(this.chunkSize)),
                this.chunks.push(t),
                (this.maxCursor += t.length),
                null === this._initReuseChunk && (this._initReuseChunk = t),
                t.set(e, 0))
              : (this.chunks.push(e), (this.maxCursor += e.length));
          }
          this.cursor += e.length;
        }
        toBytes(e = !1) {
          let t;
          if (1 === this.chunks.length) {
            const n = this.chunks[0];
            e && this.cursor > n.length / 2
              ? ((t =
                  this.cursor === n.length ? n : n.subarray(0, this.cursor)),
                (this._initReuseChunk = null),
                (this.chunks = []))
              : (t = (0, a.tP)(n, 0, this.cursor));
          } else t = (0, a.zo)(this.chunks, this.cursor);
          return e && this.reset(), t;
        }
      }
      var u = n(85590),
        l = n(53741),
        f = n(55580),
        h = n(53929),
        d = n(92887),
        p = n(50768),
        y = n(8278),
        g = n(59283),
        m = n(82428),
        w = n(73851);
      const b = {
          float64: !1,
          mapSorter: function (e, t) {
            const n = Array.isArray(e[0]) ? e[0][0] : e[0],
              r = Array.isArray(t[0]) ? t[0][0] : t[0];
            if (n.type !== r.type) return n.type.compare(r.type);
            const s = n.type.major,
              o = v[s].compareTokens(n, r);
            0 === o &&
              console.warn(
                'WARNING: complex key types used, CBOR key sorting guarantees are gone',
              );
            return o;
          },
          quickEncodeToken: l.JN,
        },
        v = [];
      (v[i.D.uint.major] = f.Fh),
        (v[i.D.negint.major] = h.UT),
        (v[i.D.bytes.major] = d.hg),
        (v[i.D.string.major] = p.YW),
        (v[i.D.array.major] = y.HF),
        (v[i.D.map.major] = g.KI),
        (v[i.D.tag.major] = m.xy),
        (v[i.D.float.major] = w.tA);
      const E = new c();
      class k {
        constructor(e, t) {
          (this.obj = e), (this.parent = t);
        }
        includes(e) {
          let t = this;
          do {
            if (t.obj === e) return !0;
          } while ((t = t.parent));
          return !1;
        }
        static createCheck(e, t) {
          if (e && e.includes(t))
            throw new Error(`${u.OO} object contains circular references`);
          return new k(t, e);
        }
      }
      const S = {
          null: new i.W(i.D.null, null),
          undefined: new i.W(i.D.undefined, void 0),
          true: new i.W(i.D.true, !0),
          false: new i.W(i.D.false, !1),
          emptyArray: new i.W(i.D.array, 0),
          emptyMap: new i.W(i.D.map, 0),
        },
        C = {
          number: (e, t, n, r) =>
            Number.isInteger(e) && Number.isSafeInteger(e)
              ? e >= 0
                ? new i.W(i.D.uint, e)
                : new i.W(i.D.negint, e)
              : new i.W(i.D.float, e),
          bigint: (e, t, n, r) =>
            e >= BigInt(0) ? new i.W(i.D.uint, e) : new i.W(i.D.negint, e),
          Uint8Array: (e, t, n, r) => new i.W(i.D.bytes, e),
          string: (e, t, n, r) => new i.W(i.D.string, e),
          boolean: (e, t, n, r) => (e ? S.true : S.false),
          null: (e, t, n, r) => S.null,
          undefined: (e, t, n, r) => S.undefined,
          ArrayBuffer: (e, t, n, r) => new i.W(i.D.bytes, new Uint8Array(e)),
          DataView: (e, t, n, r) =>
            new i.W(
              i.D.bytes,
              new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
            ),
          Array(e, t, n, r) {
            if (!e.length)
              return !0 === n.addBreakTokens
                ? [S.emptyArray, new i.W(i.D.break)]
                : S.emptyArray;
            r = k.createCheck(r, e);
            const s = [];
            let o = 0;
            for (const i of e) s[o++] = x(i, n, r);
            return n.addBreakTokens
              ? [new i.W(i.D.array, e.length), s, new i.W(i.D.break)]
              : [new i.W(i.D.array, e.length), s];
          },
          Object(e, t, n, r) {
            const s = 'Object' !== t,
              o = s ? e.keys() : Object.keys(e),
              a = s ? e.size : o.length;
            if (!a)
              return !0 === n.addBreakTokens
                ? [S.emptyMap, new i.W(i.D.break)]
                : S.emptyMap;
            r = k.createCheck(r, e);
            const c = [];
            let u = 0;
            for (const i of o)
              c[u++] = [x(i, n, r), x(s ? e.get(i) : e[i], n, r)];
            return (
              (function (e, t) {
                t.mapSorter && e.sort(t.mapSorter);
              })(c, n),
              n.addBreakTokens
                ? [new i.W(i.D.map, a), c, new i.W(i.D.break)]
                : [new i.W(i.D.map, a), c]
            );
          },
        };
      (C.Map = C.Object), (C.Buffer = C.Uint8Array);
      for (const T of 'Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64'.split(
        ' ',
      ))
        C[`${T}Array`] = C.DataView;
      function x(e, t = {}, n) {
        const r = o(e),
          s = (t && t.typeEncoders && t.typeEncoders[r]) || C[r];
        if ('function' === typeof s) {
          const o = s(e, r, t, n);
          if (null != o) return o;
        }
        const i = C[r];
        if (!i) throw new Error(`${u.OO} unsupported type: ${r}`);
        return i(e, r, t, n);
      }
      function D(e, t, n, r) {
        if (Array.isArray(t)) for (const s of t) D(e, s, n, r);
        else n[t.type.major](e, t, r);
      }
      function P(e, t, n) {
        const r = x(e, n);
        if (!Array.isArray(r) && n.quickEncodeToken) {
          const e = n.quickEncodeToken(r);
          if (e) return e;
          const s = t[r.type.major];
          if (s.encodedSize) {
            const e = s.encodedSize(r, n),
              t = new c(e);
            if ((s(t, r, n), 1 !== t.chunks.length))
              throw new Error(
                `Unexpected error: pre-calculated length for ${r} was wrong`,
              );
            return (0, a.Dz)(t.chunks[0]);
          }
        }
        return D(E, r, t, n), E.toBytes(!0);
      }
      function I(e, t) {
        return (t = Object.assign({}, b, t)), P(e, v, t);
      }
    },
    53741: function (e, t, n) {
      'use strict';
      n.d(t, {
        cW: function () {
          return g;
        },
        PS: function () {
          return m;
        },
        JN: function () {
          return w;
        },
      });
      var r = n(59787),
        s = n(55580),
        o = n(53929),
        i = n(92887),
        a = n(50768),
        c = n(8278),
        u = n(59283),
        l = n(82428),
        f = n(73851),
        h = n(85590),
        d = n(22042);
      function p(e, t, n) {
        throw new Error(
          `${h.IR} encountered invalid minor (${n}) for major ${e[t] >>> 5}`,
        );
      }
      function y(e) {
        return () => {
          throw new Error(`${h.IR} ${e}`);
        };
      }
      const g = [];
      for (let b = 0; b <= 23; b++) g[b] = p;
      (g[24] = s.Km),
        (g[25] = s.Zh),
        (g[26] = s.cs),
        (g[27] = s.uN),
        (g[28] = p),
        (g[29] = p),
        (g[30] = p),
        (g[31] = p);
      for (let b = 32; b <= 55; b++) g[b] = p;
      (g[56] = o.yr),
        (g[57] = o.r0),
        (g[58] = o.wy),
        (g[59] = o.ec),
        (g[60] = p),
        (g[61] = p),
        (g[62] = p),
        (g[63] = p);
      for (let b = 64; b <= 87; b++) g[b] = i.Ii;
      (g[88] = i.UQ),
        (g[89] = i.BS),
        (g[90] = i.zU),
        (g[91] = i.ME),
        (g[92] = p),
        (g[93] = p),
        (g[94] = p),
        (g[95] = y('indefinite length bytes/strings are not supported'));
      for (let b = 96; b <= 119; b++) g[b] = a.nt;
      (g[120] = a.Bq),
        (g[121] = a.h),
        (g[122] = a.q0),
        (g[123] = a.bc),
        (g[124] = p),
        (g[125] = p),
        (g[126] = p),
        (g[127] = y('indefinite length bytes/strings are not supported'));
      for (let b = 128; b <= 151; b++) g[b] = c.Ju;
      (g[152] = c.h7),
        (g[153] = c.OC),
        (g[154] = c.lY),
        (g[155] = c.a8),
        (g[156] = p),
        (g[157] = p),
        (g[158] = p),
        (g[159] = c.s5);
      for (let b = 160; b <= 183; b++) g[b] = u._K;
      (g[184] = u.G),
        (g[185] = u.qe),
        (g[186] = u.IY),
        (g[187] = u.F2),
        (g[188] = p),
        (g[189] = p),
        (g[190] = p),
        (g[191] = u.ng);
      for (let b = 192; b <= 215; b++) g[b] = l.qJ;
      (g[216] = l.ZR),
        (g[217] = l.CF),
        (g[218] = l.vP),
        (g[219] = l.MV),
        (g[220] = p),
        (g[221] = p),
        (g[222] = p),
        (g[223] = p);
      for (let b = 224; b <= 243; b++)
        g[b] = y('simple values are not supported');
      (g[244] = p),
        (g[245] = p),
        (g[246] = p),
        (g[247] = f.h1),
        (g[248] = y('simple values are not supported')),
        (g[249] = f.mW),
        (g[250] = f.GI),
        (g[251] = f.vV),
        (g[252] = p),
        (g[253] = p),
        (g[254] = p),
        (g[255] = f.y7);
      const m = [];
      for (let b = 0; b < 24; b++) m[b] = new r.W(r.D.uint, b, 1);
      for (let b = -1; b >= -24; b--) m[31 - b] = new r.W(r.D.negint, b, 1);
      function w(e) {
        switch (e.type) {
          case r.D.false:
            return (0, d.nI)([244]);
          case r.D.true:
            return (0, d.nI)([245]);
          case r.D.null:
            return (0, d.nI)([246]);
          case r.D.bytes:
            return e.value.length ? void 0 : (0, d.nI)([64]);
          case r.D.string:
            return '' === e.value ? (0, d.nI)([96]) : void 0;
          case r.D.array:
            return 0 === e.value ? (0, d.nI)([128]) : void 0;
          case r.D.map:
            return 0 === e.value ? (0, d.nI)([160]) : void 0;
          case r.D.uint:
            return e.value < 24 ? (0, d.nI)([Number(e.value)]) : void 0;
          case r.D.negint:
            if (e.value >= -24) return (0, d.nI)([31 - Number(e.value)]);
        }
      }
      (m[64] = new r.W(r.D.bytes, new Uint8Array(0), 1)),
        (m[96] = new r.W(r.D.string, '', 1)),
        (m[128] = new r.W(r.D.array, 0, 1)),
        (m[160] = new r.W(r.D.map, 0, 1)),
        (m[244] = new r.W(r.D.false, !1, 1)),
        (m[245] = new r.W(r.D.true, !0, 1)),
        (m[246] = new r.W(r.D.null, null, 1));
    },
    59787: function (e, t, n) {
      'use strict';
      n.d(t, {
        D: function () {
          return r;
        },
        W: function () {
          return s;
        },
      });
      class r {
        constructor(e, t, n) {
          (this.major = e),
            (this.majorEncoded = e << 5),
            (this.name = t),
            (this.terminal = n);
        }
        toString() {
          return `Type[${this.major}].${this.name}`;
        }
        compare(e) {
          return this.major < e.major ? -1 : this.major > e.major ? 1 : 0;
        }
      }
      (r.uint = new r(0, 'uint', !0)),
        (r.negint = new r(1, 'negint', !0)),
        (r.bytes = new r(2, 'bytes', !0)),
        (r.string = new r(3, 'string', !0)),
        (r.array = new r(4, 'array', !1)),
        (r.map = new r(5, 'map', !1)),
        (r.tag = new r(6, 'tag', !1)),
        (r.float = new r(7, 'float', !0)),
        (r.false = new r(7, 'false', !0)),
        (r.true = new r(7, 'true', !0)),
        (r.null = new r(7, 'null', !0)),
        (r.undefined = new r(7, 'undefined', !0)),
        (r.break = new r(7, 'break', !0));
      class s {
        constructor(e, t, n) {
          (this.type = e),
            (this.value = t),
            (this.encodedLength = n),
            (this.encodedBytes = void 0),
            (this.byteValue = void 0);
        }
        toString() {
          return `Token[${this.type}].${this.value}`;
        }
      }
    },
    37548: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          name: function () {
            return a;
          },
          code: function () {
            return c;
          },
          encode: function () {
            return u;
          },
          decode: function () {
            return l;
          },
        });
      var r = n(64936),
        s = n(81362);
      const o = {
        float64: !0,
        typeEncoders: {
          Object: function (e) {
            if (e.asCID !== e) return null;
            const t = s.CID.asCID(e);
            if (!t) return null;
            const n = new Uint8Array(t.bytes.byteLength + 1);
            return (
              n.set(t.bytes, 1),
              [new r.WU(r.Dy.tag, 42), new r.WU(r.Dy.bytes, n)]
            );
          },
          undefined: function () {
            throw new Error(
              '`undefined` is not supported by the IPLD Data Model and cannot be encoded',
            );
          },
          number: function (e) {
            if (Number.isNaN(e))
              throw new Error(
                '`NaN` is not supported by the IPLD Data Model and cannot be encoded',
              );
            if (e === 1 / 0 || e === -1 / 0)
              throw new Error(
                '`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded',
              );
            return null;
          },
        },
      };
      const i = {
        allowIndefinite: !1,
        allowUndefined: !1,
        allowNaN: !1,
        allowInfinity: !1,
        allowBigInt: !0,
        strict: !0,
        useMaps: !1,
        tags: [],
      };
      i.tags[42] = function (e) {
        if (0 !== e[0])
          throw new Error('Invalid CID for CBOR tag 42; expected leading 0x00');
        return s.CID.decode(e.subarray(1));
      };
      const a = 'dag-cbor',
        c = 113,
        u = e => r.cv(e, o),
        l = e => r.Jx(e, i);
    },
    14400: function (e, t, n) {
      'use strict';
      n.d(t, {
        Ue: function () {
          return Es;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          code: function () {
            return U;
          },
          createLink: function () {
            return O;
          },
          createNode: function () {
            return B;
          },
          decode: function () {
            return _;
          },
          encode: function () {
            return L;
          },
          name: function () {
            return $;
          },
          prepare: function () {
            return R;
          },
          validate: function () {
            return N;
          },
        });
      var s = {};
      n.r(s),
        n.d(s, {
          code: function () {
            return H;
          },
          decode: function () {
            return V;
          },
          encode: function () {
            return q;
          },
          name: function () {
            return W;
          },
        });
      var o = {};
      n.r(o),
        n.d(o, {
          code: function () {
            return ce;
          },
          decode: function () {
            return le;
          },
          encode: function () {
            return ue;
          },
          name: function () {
            return ae;
          },
        });
      const i = e => Promise.reject(new Error(`No base found for "${e}"`));
      class a {
        constructor(e) {
          (this._basesByName = {}),
            (this._basesByPrefix = {}),
            (this._loadBase = e.loadBase || i);
          for (const t of e.bases) this.addBase(t);
        }
        addBase(e) {
          if (this._basesByName[e.name] || this._basesByPrefix[e.prefix])
            throw new Error(`Codec already exists for codec "${e.name}"`);
          (this._basesByName[e.name] = e), (this._basesByPrefix[e.prefix] = e);
        }
        removeBase(e) {
          delete this._basesByName[e.name],
            delete this._basesByPrefix[e.prefix];
        }
        async getBase(e) {
          if (this._basesByName[e]) return this._basesByName[e];
          if (this._basesByPrefix[e]) return this._basesByPrefix[e];
          const t = await this._loadBase(e);
          return (
            null == this._basesByName[t.name] &&
              null == this._basesByPrefix[t.prefix] &&
              this.addBase(t),
            t
          );
        }
        listBases() {
          return Object.values(this._basesByName);
        }
      }
      const c = e => Promise.reject(new Error(`No codec found for "${e}"`));
      class u {
        constructor(e) {
          (this._codecsByName = {}),
            (this._codecsByCode = {}),
            (this._loadCodec = e.loadCodec || c);
          for (const t of e.codecs) this.addCodec(t);
        }
        addCodec(e) {
          if (this._codecsByName[e.name] || this._codecsByCode[e.code])
            throw new Error(`Resolver already exists for codec "${e.name}"`);
          (this._codecsByName[e.name] = e), (this._codecsByCode[e.code] = e);
        }
        removeCodec(e) {
          delete this._codecsByName[e.name], delete this._codecsByCode[e.code];
        }
        async getCodec(e) {
          const t =
            'string' === typeof e ? this._codecsByName : this._codecsByCode;
          if (t[e]) return t[e];
          const n = await this._loadCodec(e);
          return null == t[e] && this.addCodec(n), n;
        }
        listCodecs() {
          return Object.values(this._codecsByName);
        }
      }
      const l = e => Promise.reject(new Error(`No hasher found for "${e}"`));
      class f {
        constructor(e) {
          (this._hashersByName = {}),
            (this._hashersByCode = {}),
            (this._loadHasher = e.loadHasher || l);
          for (const t of e.hashers) this.addHasher(t);
        }
        addHasher(e) {
          if (this._hashersByName[e.name] || this._hashersByCode[e.code])
            throw new Error(`Resolver already exists for codec "${e.name}"`);
          (this._hashersByName[e.name] = e), (this._hashersByCode[e.code] = e);
        }
        removeHasher(e) {
          delete this._hashersByName[e.name],
            delete this._hashersByCode[e.code];
        }
        async getHasher(e) {
          const t =
            'string' === typeof e ? this._hashersByName : this._hashersByCode;
          if (t[e]) return t[e];
          const n = await this._loadHasher(e);
          return null == t[e] && this.addHasher(n), n;
        }
        listHashers() {
          return Object.values(this._hashersByName);
        }
      }
      var h = n(81362);
      const d = new TextDecoder();
      function p(e, t) {
        let n = 0;
        for (let r = 0; ; r += 7) {
          if (r >= 64) throw new Error('protobuf: varint overflow');
          if (t >= e.length)
            throw new Error('protobuf: unexpected end of data');
          const s = e[t++];
          if (((n += r < 28 ? (127 & s) << r : (127 & s) * 2 ** r), s < 128))
            break;
        }
        return [n, t];
      }
      function y(e, t) {
        let n;
        [n, t] = p(e, t);
        const r = t + n;
        if (n < 0 || r < 0) throw new Error('protobuf: invalid length');
        if (r > e.length) throw new Error('protobuf: unexpected end of data');
        return [e.subarray(t, r), r];
      }
      function g(e, t) {
        let n;
        return ([n, t] = p(e, t)), [7 & n, n >> 3, t];
      }
      function m(e) {
        const t = {},
          n = e.length;
        let r = 0;
        for (; r < n; ) {
          let n, s;
          if ((([n, s, r] = g(e, r)), 1 === s)) {
            if (t.Hash)
              throw new Error('protobuf: (PBLink) duplicate Hash section');
            if (2 !== n)
              throw new Error(
                `protobuf: (PBLink) wrong wireType (${n}) for Hash`,
              );
            if (void 0 !== t.Name)
              throw new Error(
                'protobuf: (PBLink) invalid order, found Name before Hash',
              );
            if (void 0 !== t.Tsize)
              throw new Error(
                'protobuf: (PBLink) invalid order, found Tsize before Hash',
              );
            [t.Hash, r] = y(e, r);
          } else if (2 === s) {
            if (void 0 !== t.Name)
              throw new Error('protobuf: (PBLink) duplicate Name section');
            if (2 !== n)
              throw new Error(
                `protobuf: (PBLink) wrong wireType (${n}) for Name`,
              );
            if (void 0 !== t.Tsize)
              throw new Error(
                'protobuf: (PBLink) invalid order, found Tsize before Name',
              );
            let s;
            ([s, r] = y(e, r)), (t.Name = d.decode(s));
          } else {
            if (3 !== s)
              throw new Error(
                `protobuf: (PBLink) invalid fieldNumber, expected 1, 2 or 3, got ${s}`,
              );
            if (void 0 !== t.Tsize)
              throw new Error('protobuf: (PBLink) duplicate Tsize section');
            if (0 !== n)
              throw new Error(
                `protobuf: (PBLink) wrong wireType (${n}) for Tsize`,
              );
            [t.Tsize, r] = p(e, r);
          }
        }
        if (r > n) throw new Error('protobuf: (PBLink) unexpected end of data');
        return t;
      }
      const w = new TextEncoder(),
        b = 2 ** 32;
      function v(e, t) {
        let n = t.length;
        if ('number' === typeof e.Tsize) {
          if (e.Tsize < 0) throw new Error('Tsize cannot be negative');
          if (!Number.isSafeInteger(e.Tsize))
            throw new Error('Tsize too large for encoding');
          (n = S(t, n, e.Tsize) - 1), (t[n] = 24);
        }
        if ('string' === typeof e.Name) {
          const r = w.encode(e.Name);
          (n -= r.length),
            t.set(r, n),
            (n = S(t, n, r.length) - 1),
            (t[n] = 18);
        }
        return (
          e.Hash &&
            ((n -= e.Hash.length),
            t.set(e.Hash, n),
            (n = S(t, n, e.Hash.length) - 1),
            (t[n] = 10)),
          t.length - n
        );
      }
      function E(e) {
        const t = (function (e) {
            let t = 0;
            if (e.Data) {
              const n = e.Data.length;
              t += 1 + n + C(n);
            }
            if (e.Links)
              for (const n of e.Links) {
                const e = k(n);
                t += 1 + e + C(e);
              }
            return t;
          })(e),
          n = new Uint8Array(t);
        let r = t;
        if (
          (e.Data &&
            ((r -= e.Data.length),
            n.set(e.Data, r),
            (r = S(n, r, e.Data.length) - 1),
            (n[r] = 10)),
          e.Links)
        )
          for (let s = e.Links.length - 1; s >= 0; s--) {
            const t = v(e.Links[s], n.subarray(0, r));
            (r -= t), (r = S(n, r, t) - 1), (n[r] = 18);
          }
        return n;
      }
      function k(e) {
        let t = 0;
        if (e.Hash) {
          const n = e.Hash.length;
          t += 1 + n + C(n);
        }
        if ('string' === typeof e.Name) {
          const n = w.encode(e.Name).length;
          t += 1 + n + C(n);
        }
        return 'number' === typeof e.Tsize && (t += 1 + C(e.Tsize)), t;
      }
      function S(e, t, n) {
        const r = (t -= C(n));
        for (; n >= 2147483648; ) (e[t++] = (127 & n) | 128), (n /= 128);
        for (; n >= 128; ) (e[t++] = (127 & n) | 128), (n >>>= 7);
        return (e[t] = n), r;
      }
      function C(e) {
        return (
          e % 2 === 0 && e++,
          Math.floor(
            ((function (e) {
              let t = 0;
              e >= b && ((e = Math.floor(e / b)), (t = 32));
              e >= 65536 && ((e >>>= 16), (t += 16));
              e >= 256 && ((e >>>= 8), (t += 8));
              return t + x[e];
            })(e) +
              6) /
              7,
          )
        );
      }
      const x = [
          0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5,
          5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
          6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7,
          7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
          7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
          7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
          8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
          8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
          8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
          8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
          8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
          8, 8, 8,
        ],
        D = ['Data', 'Links'],
        P = ['Hash', 'Name', 'Tsize'],
        I = new TextEncoder();
      function T(e, t) {
        if (e === t) return 0;
        const n = e.Name ? I.encode(e.Name) : [],
          r = t.Name ? I.encode(t.Name) : [];
        let s = n.length,
          o = r.length;
        for (let i = 0, a = Math.min(s, o); i < a; ++i)
          if (n[i] !== r[i]) {
            (s = n[i]), (o = r[i]);
            break;
          }
        return s < o ? -1 : o < s ? 1 : 0;
      }
      function A(e, t) {
        return !Object.keys(e).some(e => !t.includes(e));
      }
      function j(e) {
        if ('object' === typeof e.asCID) {
          const t = h.CID.asCID(e);
          if (!t) throw new TypeError('Invalid DAG-PB form');
          return { Hash: t };
        }
        if ('object' !== typeof e || Array.isArray(e))
          throw new TypeError('Invalid DAG-PB form');
        const t = {};
        if (e.Hash) {
          let r = h.CID.asCID(e.Hash);
          try {
            r ||
              ('string' === typeof e.Hash
                ? (r = h.CID.parse(e.Hash))
                : e.Hash instanceof Uint8Array && (r = h.CID.decode(e.Hash)));
          } catch (n) {
            throw new TypeError(`Invalid DAG-PB form: ${n.message}`);
          }
          r && (t.Hash = r);
        }
        if (!t.Hash) throw new TypeError('Invalid DAG-PB form');
        return (
          'string' === typeof e.Name && (t.Name = e.Name),
          'number' === typeof e.Tsize && (t.Tsize = e.Tsize),
          t
        );
      }
      function R(e) {
        if (
          ((e instanceof Uint8Array || 'string' === typeof e) &&
            (e = { Data: e }),
          'object' !== typeof e || Array.isArray(e))
        )
          throw new TypeError('Invalid DAG-PB form');
        const t = {};
        if (void 0 !== e.Data)
          if ('string' === typeof e.Data) t.Data = I.encode(e.Data);
          else {
            if (!(e.Data instanceof Uint8Array))
              throw new TypeError('Invalid DAG-PB form');
            t.Data = e.Data;
          }
        if (void 0 !== e.Links) {
          if (!Array.isArray(e.Links))
            throw new TypeError('Invalid DAG-PB form');
          (t.Links = e.Links.map(j)), t.Links.sort(T);
        } else t.Links = [];
        return t;
      }
      function N(e) {
        if (!e || 'object' !== typeof e || Array.isArray(e))
          throw new TypeError('Invalid DAG-PB form');
        if (!A(e, D))
          throw new TypeError('Invalid DAG-PB form (extraneous properties)');
        if (void 0 !== e.Data && !(e.Data instanceof Uint8Array))
          throw new TypeError(
            'Invalid DAG-PB form (Data must be a Uint8Array)',
          );
        if (!Array.isArray(e.Links))
          throw new TypeError('Invalid DAG-PB form (Links must be an array)');
        for (let t = 0; t < e.Links.length; t++) {
          const n = e.Links[t];
          if (!n || 'object' !== typeof n || Array.isArray(n))
            throw new TypeError('Invalid DAG-PB form (bad link object)');
          if (!A(n, P))
            throw new TypeError(
              'Invalid DAG-PB form (extraneous properties on link object)',
            );
          if (!n.Hash)
            throw new TypeError('Invalid DAG-PB form (link must have a Hash)');
          if (n.Hash.asCID !== n.Hash)
            throw new TypeError(
              'Invalid DAG-PB form (link Hash must be a CID)',
            );
          if (void 0 !== n.Name && 'string' !== typeof n.Name)
            throw new TypeError(
              'Invalid DAG-PB form (link Name must be a string)',
            );
          if (
            void 0 !== n.Tsize &&
            ('number' !== typeof n.Tsize || n.Tsize % 1 !== 0)
          )
            throw new TypeError(
              'Invalid DAG-PB form (link Tsize must be an integer)',
            );
          if (t > 0 && -1 === T(n, e.Links[t - 1]))
            throw new TypeError(
              'Invalid DAG-PB form (links must be sorted by Name bytes)',
            );
        }
      }
      function B(e, t = []) {
        return R({ Data: e, Links: t });
      }
      function O(e, t, n) {
        return j({ Hash: n, Name: e, Tsize: t });
      }
      const $ = 'dag-pb',
        U = 112;
      function L(e) {
        N(e);
        const t = {};
        return (
          e.Links &&
            (t.Links = e.Links.map(e => {
              const t = {};
              return (
                e.Hash && (t.Hash = e.Hash.bytes),
                void 0 !== e.Name && (t.Name = e.Name),
                void 0 !== e.Tsize && (t.Tsize = e.Tsize),
                t
              );
            })),
          e.Data && (t.Data = e.Data),
          E(t)
        );
      }
      function _(e) {
        const t = (function (e) {
            const t = e.length;
            let n,
              r,
              s = 0,
              o = !1;
            for (; s < t; ) {
              let t, i;
              if ((([t, i, s] = g(e, s)), 2 !== t))
                throw new Error(
                  `protobuf: (PBNode) invalid wireType, expected 2, got ${t}`,
                );
              if (1 === i) {
                if (r)
                  throw new Error('protobuf: (PBNode) duplicate Data section');
                ([r, s] = y(e, s)), n && (o = !0);
              } else {
                if (2 !== i)
                  throw new Error(
                    `protobuf: (PBNode) invalid fieldNumber, expected 1 or 2, got ${i}`,
                  );
                {
                  if (o)
                    throw new Error(
                      'protobuf: (PBNode) duplicate Links section',
                    );
                  let t;
                  n || (n = []), ([t, s] = y(e, s)), n.push(m(t));
                }
              }
            }
            if (s > t)
              throw new Error('protobuf: (PBNode) unexpected end of data');
            const i = {};
            return r && (i.Data = r), (i.Links = n || []), i;
          })(e),
          n = {};
        return (
          t.Data && (n.Data = t.Data),
          t.Links &&
            (n.Links = t.Links.map(e => {
              const t = {};
              try {
                t.Hash = h.CID.decode(e.Hash);
              } catch (n) {}
              if (!t.Hash)
                throw new Error(
                  'Invalid Hash field found in link, expected CID',
                );
              return (
                void 0 !== e.Name && (t.Name = e.Name),
                void 0 !== e.Tsize && (t.Tsize = e.Tsize),
                t
              );
            })),
          n
        );
      }
      var z = n(64936);
      const M = {
        float64: !0,
        typeEncoders: {
          Object: function (e) {
            if (e.asCID !== e) return null;
            const t = h.CID.asCID(e);
            if (!t) return null;
            const n = new Uint8Array(t.bytes.byteLength + 1);
            return (
              n.set(t.bytes, 1),
              [new z.WU(z.Dy.tag, 42), new z.WU(z.Dy.bytes, n)]
            );
          },
          undefined: function () {
            throw new Error(
              '`undefined` is not supported by the IPLD Data Model and cannot be encoded',
            );
          },
          number: function (e) {
            if (Number.isNaN(e))
              throw new Error(
                '`NaN` is not supported by the IPLD Data Model and cannot be encoded',
              );
            if (e === 1 / 0 || e === -1 / 0)
              throw new Error(
                '`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded',
              );
            return null;
          },
        },
      };
      const F = {
        allowIndefinite: !1,
        coerceUndefinedToNull: !0,
        allowNaN: !1,
        allowInfinity: !1,
        allowBigInt: !0,
        strict: !0,
        useMaps: !1,
        tags: [],
      };
      F.tags[42] = function (e) {
        if (0 !== e[0])
          throw new Error('Invalid CID for CBOR tag 42; expected leading 0x00');
        return h.CID.decode(e.subarray(1));
      };
      const W = 'dag-cbor',
        H = 113,
        q = e => z.cv(e, M),
        V = e => z.Jx(e, F);
      var Z = n(87232),
        J = n(9885),
        G = n(59787),
        X = n(85989),
        K = n(85590),
        Q = n(22042);
      class Y extends Array {
        constructor() {
          super(), (this.inRecursive = []);
        }
        prefix(e) {
          const t = this.inRecursive[this.inRecursive.length - 1];
          t &&
            (t.type === G.D.array &&
              (t.elements++, 1 !== t.elements && e.push([44])),
            t.type === G.D.map &&
              (t.elements++,
              1 !== t.elements &&
                (t.elements % 2 === 1 ? e.push([44]) : e.push([58]))));
        }
        [G.D.uint.major](e, t) {
          this.prefix(e);
          const n = String(t.value),
            r = [];
          for (let s = 0; s < n.length; s++) r[s] = n.charCodeAt(s);
          e.push(r);
        }
        [G.D.negint.major](e, t) {
          this[G.D.uint.major](e, t);
        }
        [G.D.bytes.major](e, t) {
          throw new Error(`${K.OO} unsupported type: Uint8Array`);
        }
        [G.D.string.major](e, t) {
          this.prefix(e);
          const n = (0, Q.mL)(JSON.stringify(t.value));
          e.push(n.length > 32 ? (0, Q.Dz)(n) : n);
        }
        [G.D.array.major](e, t) {
          this.prefix(e),
            this.inRecursive.push({ type: G.D.array, elements: 0 }),
            e.push([91]);
        }
        [G.D.map.major](e, t) {
          this.prefix(e),
            this.inRecursive.push({ type: G.D.map, elements: 0 }),
            e.push([123]);
        }
        [G.D.tag.major](e, t) {}
        [G.D.float.major](e, t) {
          if ('break' === t.type.name) {
            const t = this.inRecursive.pop();
            if (t) {
              if (t.type === G.D.array) e.push([93]);
              else {
                if (t.type !== G.D.map)
                  throw new Error(
                    'Unexpected recursive type; this should not happen!',
                  );
                e.push([125]);
              }
              return;
            }
            throw new Error('Unexpected break; this should not happen!');
          }
          if (void 0 === t.value)
            throw new Error(`${K.OO} unsupported type: undefined`);
          if ((this.prefix(e), 'true' === t.type.name))
            return void e.push([116, 114, 117, 101]);
          if ('false' === t.type.name)
            return void e.push([102, 97, 108, 115, 101]);
          if ('null' === t.type.name) return void e.push([110, 117, 108, 108]);
          const n = String(t.value),
            r = [];
          let s = !1;
          for (let o = 0; o < n.length; o++)
            (r[o] = n.charCodeAt(o)),
              s || (46 !== r[o] && 101 !== r[o] && 69 !== r[o]) || (s = !0);
          s || (r.push(46), r.push(48)), e.push(r);
        }
      }
      const ee = {
        addBreakTokens: !0,
        mapSorter: function (e, t) {
          if (Array.isArray(e[0]) || Array.isArray(t[0]))
            throw new Error(`${K.OO} complex map keys are not supported`);
          const n = e[0],
            r = t[0];
          if (n.type !== G.D.string || r.type !== G.D.string)
            throw new Error(`${K.OO} non-string map keys are not supported`);
          if (n < r) return -1;
          if (n > r) return 1;
          throw new Error(
            `${K.OO} unexpected duplicate map keys, this is not supported`,
          );
        },
      };
      var te = n(61287);
      class ne {
        constructor(e, t = {}) {
          (this.pos = 0),
            (this.data = e),
            (this.options = t),
            (this.modeStack = ['value']),
            (this.lastToken = '');
        }
        done() {
          return this.pos >= this.data.length;
        }
        ch() {
          return this.data[this.pos];
        }
        currentMode() {
          return this.modeStack[this.modeStack.length - 1];
        }
        skipWhitespace() {
          let e = this.ch();
          for (; 32 === e || 9 === e || 13 === e || 10 === e; )
            e = this.data[++this.pos];
        }
        expect(e) {
          if (this.data.length - this.pos < e.length)
            throw new Error(
              `${K.IR} unexpected end of input at position ${this.pos}`,
            );
          for (let t = 0; t < e.length; t++)
            if (this.data[this.pos++] !== e[t])
              throw new Error(
                `${K.IR} unexpected token at position ${
                  this.pos
                }, expected to find '${String.fromCharCode(...e)}'`,
              );
        }
        parseNumber() {
          const e = this.pos;
          let t = !1,
            n = !1;
          const r = e => {
            for (; !this.done(); ) {
              const t = this.ch();
              if (!e.includes(t)) break;
              this.pos++;
            }
          };
          if ((45 === this.ch() && ((t = !0), this.pos++), 48 === this.ch())) {
            if ((this.pos++, 46 !== this.ch()))
              return new G.W(G.D.uint, 0, this.pos - e);
            this.pos++, (n = !0);
          }
          if (
            (r([48, 49, 50, 51, 52, 53, 54, 55, 56, 57]),
            t && this.pos === e + 1)
          )
            throw new Error(`${K.IR} unexpected token at position ${this.pos}`);
          if (!this.done() && 46 === this.ch()) {
            if (n)
              throw new Error(
                `${K.IR} unexpected token at position ${this.pos}`,
              );
            (n = !0), this.pos++, r([48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
          }
          this.done() ||
            (101 !== this.ch() && 69 !== this.ch()) ||
            ((n = !0),
            this.pos++,
            this.done() || (43 !== this.ch() && 45 !== this.ch()) || this.pos++,
            r([48, 49, 50, 51, 52, 53, 54, 55, 56, 57]));
          const s = String.fromCharCode.apply(
              null,
              this.data.subarray(e, this.pos),
            ),
            o = parseFloat(s);
          return n
            ? new G.W(G.D.float, o, this.pos - e)
            : !0 !== this.options.allowBigInt || Number.isSafeInteger(o)
            ? new G.W(o >= 0 ? G.D.uint : G.D.negint, o, this.pos - e)
            : new G.W(o >= 0 ? G.D.uint : G.D.negint, BigInt(s), this.pos - e);
        }
        parseString() {
          if (34 !== this.ch())
            throw new Error(
              `${K.IR} unexpected character at position ${this.pos}; this shouldn't happen`,
            );
          this.pos++;
          for (
            let s = this.pos, o = 0;
            s < this.data.length && o < 65536;
            s++, o++
          ) {
            const e = this.data[s];
            if (92 === e || e < 32 || e >= 128) break;
            if (34 === e) {
              const e = String.fromCharCode.apply(
                null,
                this.data.subarray(this.pos, s),
              );
              return (this.pos = s + 1), new G.W(G.D.string, e, o);
            }
          }
          const e = this.pos,
            t = [],
            n = () => {
              if (this.pos + 4 >= this.data.length)
                throw new Error(
                  `${K.IR} unexpected end of unicode escape sequence at position ${this.pos}`,
                );
              let e = 0;
              for (let t = 0; t < 4; t++) {
                let t = this.ch();
                if (t >= 48 && t <= 57) t -= 48;
                else if (t >= 97 && t <= 102) t = t - 97 + 10;
                else {
                  if (!(t >= 65 && t <= 70))
                    throw new Error(
                      `${K.IR} unexpected unicode escape character at position ${this.pos}`,
                    );
                  t = t - 65 + 10;
                }
                (e = 16 * e + t), this.pos++;
              }
              return e;
            },
            r = () => {
              const e = this.ch();
              let n,
                r,
                s,
                o,
                i = null,
                a = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
              if (this.pos + a > this.data.length)
                throw new Error(
                  `${K.IR} unexpected unicode sequence at position ${this.pos}`,
                );
              switch (a) {
                case 1:
                  e < 128 && (i = e);
                  break;
                case 2:
                  (n = this.data[this.pos + 1]),
                    128 === (192 & n) &&
                      ((o = ((31 & e) << 6) | (63 & n)), o > 127 && (i = o));
                  break;
                case 3:
                  (n = this.data[this.pos + 1]),
                    (r = this.data[this.pos + 2]),
                    128 === (192 & n) &&
                      128 === (192 & r) &&
                      ((o = ((15 & e) << 12) | ((63 & n) << 6) | (63 & r)),
                      o > 2047 && (o < 55296 || o > 57343) && (i = o));
                  break;
                case 4:
                  (n = this.data[this.pos + 1]),
                    (r = this.data[this.pos + 2]),
                    (s = this.data[this.pos + 3]),
                    128 === (192 & n) &&
                      128 === (192 & r) &&
                      128 === (192 & s) &&
                      ((o =
                        ((15 & e) << 18) |
                        ((63 & n) << 12) |
                        ((63 & r) << 6) |
                        (63 & s)),
                      o > 65535 && o < 1114112 && (i = o));
              }
              null === i
                ? ((i = 65533), (a = 1))
                : i > 65535 &&
                  ((i -= 65536),
                  t.push(((i >>> 10) & 1023) | 55296),
                  (i = 56320 | (1023 & i))),
                t.push(i),
                (this.pos += a);
            };
          for (; !this.done(); ) {
            const s = this.ch();
            let o;
            switch (s) {
              case 92:
                if ((this.pos++, this.done()))
                  throw new Error(
                    `${K.IR} unexpected string termination at position ${this.pos}`,
                  );
                switch (((o = this.ch()), this.pos++, o)) {
                  case 34:
                  case 39:
                  case 92:
                  case 47:
                    t.push(o);
                    break;
                  case 98:
                    t.push(8);
                    break;
                  case 116:
                    t.push(9);
                    break;
                  case 110:
                    t.push(10);
                    break;
                  case 102:
                    t.push(12);
                    break;
                  case 114:
                    t.push(13);
                    break;
                  case 117:
                    t.push(n());
                    break;
                  default:
                    throw new Error(
                      `${K.IR} unexpected string escape character at position ${this.pos}`,
                    );
                }
                break;
              case 34:
                return (
                  this.pos++, new G.W(G.D.string, (0, Q.Pu)(t), this.pos - e)
                );
              default:
                if (s < 32)
                  throw new Error(
                    `${K.IR} invalid control character at position ${this.pos}`,
                  );
                s < 128 ? (t.push(s), this.pos++) : r();
            }
          }
          throw new Error(
            `${K.IR} unexpected end of string at position ${this.pos}`,
          );
        }
        parseValue() {
          switch (this.ch()) {
            case 123:
              return (
                this.modeStack.push('obj-start'),
                this.pos++,
                new G.W(G.D.map, 1 / 0, 1)
              );
            case 91:
              return (
                this.modeStack.push('array-start'),
                this.pos++,
                new G.W(G.D.array, 1 / 0, 1)
              );
            case 34:
              return this.parseString();
            case 110:
              return (
                this.expect([110, 117, 108, 108]), new G.W(G.D.null, null, 4)
              );
            case 102:
              return (
                this.expect([102, 97, 108, 115, 101]), new G.W(G.D.false, !1, 5)
              );
            case 116:
              return (
                this.expect([116, 114, 117, 101]), new G.W(G.D.true, !0, 4)
              );
            case 45:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              return this.parseNumber();
            default:
              throw new Error(
                `${K.IR} unexpected character at position ${this.pos}`,
              );
          }
        }
        next() {
          switch ((this.skipWhitespace(), this.currentMode())) {
            case 'value':
              return this.modeStack.pop(), this.parseValue();
            case 'array-value':
              if ((this.modeStack.pop(), 93 === this.ch()))
                return (
                  this.pos++,
                  this.skipWhitespace(),
                  new G.W(G.D.break, void 0, 1)
                );
              if (44 !== this.ch())
                throw new Error(
                  `${K.IR} unexpected character at position ${
                    this.pos
                  }, was expecting array delimiter but found '${String.fromCharCode(
                    this.ch(),
                  )}'`,
                );
              return (
                this.pos++,
                this.modeStack.push('array-value'),
                this.skipWhitespace(),
                this.parseValue()
              );
            case 'array-start':
              return (
                this.modeStack.pop(),
                93 === this.ch()
                  ? (this.pos++,
                    this.skipWhitespace(),
                    new G.W(G.D.break, void 0, 1))
                  : (this.modeStack.push('array-value'),
                    this.skipWhitespace(),
                    this.parseValue())
              );
            case 'obj-key':
              if (125 === this.ch())
                return (
                  this.modeStack.pop(),
                  this.pos++,
                  this.skipWhitespace(),
                  new G.W(G.D.break, void 0, 1)
                );
              if (44 !== this.ch())
                throw new Error(
                  `${K.IR} unexpected character at position ${
                    this.pos
                  }, was expecting object delimiter but found '${String.fromCharCode(
                    this.ch(),
                  )}'`,
                );
              this.pos++, this.skipWhitespace();
            case 'obj-start': {
              if ((this.modeStack.pop(), 125 === this.ch()))
                return (
                  this.pos++,
                  this.skipWhitespace(),
                  new G.W(G.D.break, void 0, 1)
                );
              const e = this.parseString();
              if ((this.skipWhitespace(), 58 !== this.ch()))
                throw new Error(
                  `${K.IR} unexpected character at position ${
                    this.pos
                  }, was expecting key/value delimiter ':' but found '${String.fromCharCode(
                    this.ch(),
                  )}'`,
                );
              return this.pos++, this.modeStack.push('obj-value'), e;
            }
            case 'obj-value':
              return (
                this.modeStack.pop(),
                this.modeStack.push('obj-key'),
                this.skipWhitespace(),
                this.parseValue()
              );
            default:
              throw new Error(
                `${K.IR} unexpected parse state at position ${this.pos}; this shouldn't happen`,
              );
          }
        }
      }
      function re(e) {
        const t = J.base64.encode(e).slice(1);
        return [
          new z.WU(z.Dy.map, 1 / 0, 1),
          new z.WU(z.Dy.string, '/', 1),
          new z.WU(z.Dy.map, 1 / 0, 1),
          new z.WU(z.Dy.string, 'bytes', 5),
          new z.WU(z.Dy.string, t, t.length),
          new z.WU(z.Dy.break, void 0, 1),
          new z.WU(z.Dy.break, void 0, 1),
        ];
      }
      const se = {
        typeEncoders: {
          Object: function (e) {
            if (e.asCID !== e) return null;
            const t = Z.k0.asCID(e);
            if (!t) return null;
            const n = t.toString();
            return [
              new z.WU(z.Dy.map, 1 / 0, 1),
              new z.WU(z.Dy.string, '/', 1),
              new z.WU(z.Dy.string, n, n.length),
              new z.WU(z.Dy.break, void 0, 1),
            ];
          },
          Uint8Array: re,
          Buffer: re,
          undefined: function () {
            throw new Error(
              '`undefined` is not supported by the IPLD Data Model and cannot be encoded',
            );
          },
          number: function (e) {
            if (Number.isNaN(e))
              throw new Error(
                '`NaN` is not supported by the IPLD Data Model and cannot be encoded',
              );
            if (e === 1 / 0 || e === -1 / 0)
              throw new Error(
                '`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded',
              );
            return null;
          },
        },
      };
      class oe extends ne {
        constructor(e, t) {
          super(e, t), (this.tokenBuffer = []);
        }
        done() {
          return 0 === this.tokenBuffer.length && super.done();
        }
        _next() {
          return this.tokenBuffer.length > 0
            ? this.tokenBuffer.pop()
            : super.next();
        }
        next() {
          const e = this._next();
          if (e.type === z.Dy.map) {
            const e = this._next();
            if (e.type === z.Dy.string && '/' === e.value) {
              const e = this._next();
              if (e.type === z.Dy.string) {
                if (this._next().type !== z.Dy.break)
                  throw new Error('Invalid encoded CID form');
                return this.tokenBuffer.push(e), new z.WU(z.Dy.tag, 42, 0);
              }
              if (e.type === z.Dy.map) {
                const e = this._next();
                if (e.type === z.Dy.string && 'bytes' === e.value) {
                  const e = this._next();
                  if (e.type === z.Dy.string) {
                    for (let e = 0; e < 2; e++) {
                      if (this._next().type !== z.Dy.break)
                        throw new Error('Invalid encoded Bytes form');
                    }
                    const t = J.base64.decode(`m${e.value}`);
                    return new z.WU(z.Dy.bytes, t, e.value.length);
                  }
                  this.tokenBuffer.push(e);
                }
                this.tokenBuffer.push(e);
              }
              this.tokenBuffer.push(e);
            }
            this.tokenBuffer.push(e);
          }
          return e;
        }
      }
      const ie = {
        allowIndefinite: !1,
        allowUndefined: !1,
        allowNaN: !1,
        allowInfinity: !1,
        allowBigInt: !0,
        strict: !0,
        useMaps: !1,
        tags: [],
      };
      ie.tags[42] = Z.k0.parse;
      const ae = 'dag-json',
        ce = 297,
        ue = e => {
          return (
            (t = e),
            (n = se),
            (n = Object.assign({}, ee, n)),
            (0, X.w$)(t, new Y(), n)
          );
          var t, n;
        },
        le = e =>
          (function (e, t) {
            return (
              (t = Object.assign({ tokenizer: new ne(e, t) }, t)),
              (0, te.Jx)(e, t)
            );
          })(e, Object.assign(ie, { tokenizer: new oe(e, ie) }));
      var fe = n(28630),
        he = n.t(fe, 2),
        de = n(78103),
        pe = n(91913),
        ye = n(46584),
        ge = n(106);
      let me = /(-?(?:\d+\.?\d*|\d*\.?\d+)(?:e[-+]?\d+)?)\s*([\p{L}]*)/giu;
      function we(e = '', t = 'ms') {
        var n = null;
        return (
          (e = (e + '').replace(/(\d)[,_](\d)/g, '$1$2')).replace(
            me,
            function (e, t, r) {
              (r = be(r)) && (n = (n || 0) + parseFloat(t, 10) * r);
            },
          ),
          n && n / (be(t) || 1)
        );
      }
      function be(e) {
        return we[e] || we[e.toLowerCase().replace(/s$/, '')];
      }
      (we.nanosecond = we.ns = 1e-6),
        (we['\xb5s'] = we['\u03bcs'] = we.us = we.microsecond = 0.001),
        (we.millisecond = we.ms = we[''] = 1),
        (we.second = we.sec = we.s = 1e3 * we.ms),
        (we.minute = we.min = we.m = 60 * we.s),
        (we.hour = we.hr = we.h = 60 * we.m),
        (we.day = we.d = 24 * we.h),
        (we.week = we.wk = we.w = 7 * we.d),
        (we.month = we.b = 30.4375 * we.d),
        (we.year = we.yr = we.y = 365.25 * we.d);
      var ve = we,
        Ee = n(11227),
        ke = n(67137),
        Se = n(70942),
        Ce = n(95700);
      function xe(e) {
        try {
          e = Ce(new ye.Multiaddr(e));
        } catch (t) {}
        return (e = e.toString());
      }
      const De = Ee('ipfs-http-client:lib:error-handler'),
        Pe = Se.bind({ ignoreUndefined: !0 }),
        Ie = ge.isBrowser || ge.isWebWorker ? location.protocol : 'http',
        Te = ge.isBrowser || ge.isWebWorker ? location.hostname : 'localhost',
        Ae = ge.isBrowser || ge.isWebWorker ? location.port : '5001',
        je = async e => {
          let t;
          try {
            if (
              (e.headers.get('Content-Type') || '').startsWith(
                'application/json',
              )
            ) {
              const n = await e.json();
              De(n), (t = n.Message || n.message);
            } else t = await e.text();
          } catch (r) {
            De('Failed to parse error response', r), (t = r.message);
          }
          let n = new ke.HTTPError(e);
          throw (
            (t &&
              (t.includes('deadline has elapsed') &&
                (n = new ke.TimeoutError()),
              t &&
                t.includes('context deadline exceeded') &&
                (n = new ke.TimeoutError())),
            t && t.includes('request timed out') && (n = new ke.TimeoutError()),
            t && (n.message = t),
            n)
          );
        },
        Re = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,
        Ne = e =>
          e.replace(Re, function (e) {
            return '-' + e.toLowerCase();
          });
      class Be extends ke {
        constructor(e = {}) {
          const t = ((e = {}) => {
            let t,
              n,
              r = {};
            if ('string' === typeof e || ye.Multiaddr.isMultiaddr(e))
              t = new URL(xe(e));
            else if (e instanceof URL) t = e;
            else if (
              'string' === typeof e.url ||
              ye.Multiaddr.isMultiaddr(e.url)
            )
              (t = new URL(xe(e.url))), (r = e);
            else if (e.url instanceof URL) (t = e.url), (r = e);
            else {
              r = e || {};
              const n = (r.protocol || Ie).replace(':', ''),
                s = (r.host || Te).split(':')[0],
                o = r.port || Ae;
              t = new URL(`${n}://${s}:${o}`);
            }
            if (
              (r.apiPath
                ? (t.pathname = r.apiPath)
                : ('/' !== t.pathname && void 0 !== t.pathname) ||
                  (t.pathname = 'api/v0'),
              ge.isNode)
            ) {
              const e = void 0;
              n = r.agent || new e({ keepAlive: !0, maxSockets: 6 });
            }
            return {
              ...r,
              host: t.host,
              protocol: t.protocol.replace(':', ''),
              port: Number(t.port),
              apiPath: t.pathname,
              url: t,
              agent: n,
            };
          })(e);
          var n;
          super({
            timeout:
              ((n = t.timeout || 0),
              ('string' === typeof n ? ve(n) : n) || void 0),
            headers: t.headers,
            base: `${t.url}`,
            handleError: je,
            transformSearchParams: e => {
              const t = new URLSearchParams();
              for (const [n, r] of e)
                'undefined' !== r &&
                  'null' !== r &&
                  'signal' !== n &&
                  t.append(Ne(n), r),
                  'timeout' !== n || isNaN(r) || t.append(Ne(n), r);
              return t;
            },
            agent: t.agent,
          }),
            delete this.get,
            delete this.put,
            delete this.delete,
            delete this.options;
          const r = this.fetch;
          this.fetch = (e, n = {}) => (
            'string' !== typeof e || e.startsWith('/') || (e = `${t.url}/${e}`),
            r.call(this, e, Pe(n, { method: 'POST' }))
          );
        }
      }
      ke.HTTPError;
      const Oe = e => t => e(new Be(t), t);
      function $e(e) {
        if (null != e)
          return 'string' === typeof e ? e : e.toString(8).padStart(4, '0');
      }
      var Ue = n(32114);
      function Le(e) {
        if (null == e) return;
        let t;
        if (
          (null != e.secs && (t = { secs: e.secs, nsecs: e.nsecs }),
          null != e.Seconds &&
            (t = { secs: e.Seconds, nsecs: e.FractionalNanoseconds }),
          Array.isArray(e) && (t = { secs: e[0], nsecs: e[1] }),
          e instanceof Date)
        ) {
          const n = e.getTime(),
            r = Math.floor(n / 1e3);
          t = { secs: r, nsecs: 1e3 * (n - 1e3 * r) };
        }
        if (Object.prototype.hasOwnProperty.call(t, 'secs')) {
          if (
            null != t &&
            null != t.nsecs &&
            (t.nsecs < 0 || t.nsecs > 999999999)
          )
            throw Ue(
              new Error('mtime-nsecs must be within the range [0,999999999]'),
              'ERR_INVALID_MTIME_NSECS',
            );
          return t;
        }
      }
      function _e({
        arg: e,
        searchParams: t,
        hashAlg: n,
        mtime: r,
        mode: s,
        ...o
      } = {}) {
        t && (o = { ...o, ...t }),
          n && (o.hash = n),
          null != r &&
            ((r = Le(r)), (o.mtime = r.secs), (o.mtimeNsecs = r.nsecs)),
          null != s && (o.mode = $e(s)),
          o.timeout && !isNaN(o.timeout) && (o.timeout = `${o.timeout}ms`),
          void 0 === e || null === e ? (e = []) : Array.isArray(e) || (e = [e]);
        const i = new URLSearchParams(o);
        return e.forEach(e => i.append('arg', e)), i;
      }
      const ze = Oe(
          e =>
            async function (t = {}) {
              return (
                (
                  await (
                    await e.post('bitswap/wantlist', {
                      signal: t.signal,
                      searchParams: _e(t),
                      headers: t.headers,
                    })
                  ).json()
                ).Keys || []
              ).map(e => h.CID.parse(e['/']));
            },
        ),
        Me = Oe(
          e =>
            async function (t, n = {}) {
              return (
                (
                  await (
                    await e.post('bitswap/wantlist', {
                      signal: n.signal,
                      searchParams: _e({ ...n, peer: t.toString() }),
                      headers: n.headers,
                    })
                  ).json()
                ).Keys || []
              ).map(e => h.CID.parse(e['/']));
            },
        ),
        Fe = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('bitswap/stat', {
                searchParams: _e(t),
                signal: t.signal,
                headers: t.headers,
              });
              return (function (e) {
                return {
                  provideBufLen: e.ProvideBufLen,
                  wantlist: (e.Wantlist || []).map(e => h.CID.parse(e['/'])),
                  peers: e.Peers || [],
                  blocksReceived: BigInt(e.BlocksReceived),
                  dataReceived: BigInt(e.DataReceived),
                  blocksSent: BigInt(e.BlocksSent),
                  dataSent: BigInt(e.DataSent),
                  dupBlksReceived: BigInt(e.DupBlksReceived),
                  dupDataReceived: BigInt(e.DupDataReceived),
                };
              })(await n.json());
            },
        );
      const We = Oe(
        e =>
          async function (t, n = {}) {
            return (
              await e.post('bitswap/unwant', {
                signal: n.signal,
                searchParams: _e({ arg: t.toString(), ...n }),
                headers: n.headers,
              })
            ).json();
          },
      );
      const He = Oe(
        e =>
          async function (t, n = {}) {
            const r = await e.post('block/get', {
              signal: n.signal,
              searchParams: _e({ arg: t.toString(), ...n }),
              headers: n.headers,
            });
            return new Uint8Array(await r.arrayBuffer());
          },
      );
      var qe = n(28132),
        Ve = n(86154),
        Ze = n(31303);
      function Je(e) {
        return ArrayBuffer.isView(e) || e instanceof ArrayBuffer;
      }
      function Ge(e) {
        return (
          e.constructor &&
          ('Blob' === e.constructor.name || 'File' === e.constructor.name) &&
          'function' === typeof e.stream
        );
      }
      function Xe(e) {
        return 'object' === typeof e && (e.path || e.content);
      }
      const Ke = e => e && 'function' === typeof e.getReader;
      async function Qe(e) {
        if (Je(e)) return new Blob([e]);
        if ('string' === typeof e || e instanceof String)
          return new Blob([e.toString()]);
        if (Ge(e)) return e;
        if (
          (Ke(e) && (e = Ve(e)),
          Symbol.iterator in e || Symbol.asyncIterator in e)
        ) {
          const t = qe(e),
            { value: n, done: r } = await t.peek();
          if (r) return Ye(t);
          if ((t.push(n), Number.isInteger(n)))
            return new Blob([Uint8Array.from(await Ze(t))]);
          if (Je(n) || 'string' === typeof n || n instanceof String)
            return Ye(t);
        }
        throw Ue(new Error(`Unexpected input: ${e}`), 'ERR_UNEXPECTED_INPUT');
      }
      async function Ye(e) {
        const t = [];
        for await (const n of e) t.push(n);
        return new Blob(t);
      }
      var et = n(32121),
        tt = n(62100);
      const nt = tt.Reader,
        rt = tt.Writer,
        st = tt.util,
        ot = tt.roots['ipfs-unixfs'] || (tt.roots['ipfs-unixfs'] = {});
      (ot.Data = (() => {
        function e(e) {
          if (((this.blocksizes = []), e))
            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (e.prototype.Type = 0),
          (e.prototype.Data = st.newBuffer([])),
          (e.prototype.filesize = st.Long ? st.Long.fromBits(0, 0, !0) : 0),
          (e.prototype.blocksizes = st.emptyArray),
          (e.prototype.hashType = st.Long ? st.Long.fromBits(0, 0, !0) : 0),
          (e.prototype.fanout = st.Long ? st.Long.fromBits(0, 0, !0) : 0),
          (e.prototype.mode = 0),
          (e.prototype.mtime = null),
          (e.encode = function (e, t) {
            if (
              (t || (t = rt.create()),
              t.uint32(8).int32(e.Type),
              null != e.Data &&
                Object.hasOwnProperty.call(e, 'Data') &&
                t.uint32(18).bytes(e.Data),
              null != e.filesize &&
                Object.hasOwnProperty.call(e, 'filesize') &&
                t.uint32(24).uint64(e.filesize),
              null != e.blocksizes && e.blocksizes.length)
            )
              for (var n = 0; n < e.blocksizes.length; ++n)
                t.uint32(32).uint64(e.blocksizes[n]);
            return (
              null != e.hashType &&
                Object.hasOwnProperty.call(e, 'hashType') &&
                t.uint32(40).uint64(e.hashType),
              null != e.fanout &&
                Object.hasOwnProperty.call(e, 'fanout') &&
                t.uint32(48).uint64(e.fanout),
              null != e.mode &&
                Object.hasOwnProperty.call(e, 'mode') &&
                t.uint32(56).uint32(e.mode),
              null != e.mtime &&
                Object.hasOwnProperty.call(e, 'mtime') &&
                ot.UnixTime.encode(e.mtime, t.uint32(66).fork()).ldelim(),
              t
            );
          }),
          (e.decode = function (e, t) {
            e instanceof nt || (e = nt.create(e));
            for (
              var n = void 0 === t ? e.len : e.pos + t, r = new ot.Data();
              e.pos < n;

            ) {
              var s = e.uint32();
              switch (s >>> 3) {
                case 1:
                  r.Type = e.int32();
                  break;
                case 2:
                  r.Data = e.bytes();
                  break;
                case 3:
                  r.filesize = e.uint64();
                  break;
                case 4:
                  if (
                    ((r.blocksizes && r.blocksizes.length) ||
                      (r.blocksizes = []),
                    2 === (7 & s))
                  )
                    for (var o = e.uint32() + e.pos; e.pos < o; )
                      r.blocksizes.push(e.uint64());
                  else r.blocksizes.push(e.uint64());
                  break;
                case 5:
                  r.hashType = e.uint64();
                  break;
                case 6:
                  r.fanout = e.uint64();
                  break;
                case 7:
                  r.mode = e.uint32();
                  break;
                case 8:
                  r.mtime = ot.UnixTime.decode(e, e.uint32());
                  break;
                default:
                  e.skipType(7 & s);
              }
            }
            if (!r.hasOwnProperty('Type'))
              throw st.ProtocolError("missing required 'Type'", {
                instance: r,
              });
            return r;
          }),
          (e.fromObject = function (e) {
            if (e instanceof ot.Data) return e;
            var t = new ot.Data();
            switch (e.Type) {
              case 'Raw':
              case 0:
                t.Type = 0;
                break;
              case 'Directory':
              case 1:
                t.Type = 1;
                break;
              case 'File':
              case 2:
                t.Type = 2;
                break;
              case 'Metadata':
              case 3:
                t.Type = 3;
                break;
              case 'Symlink':
              case 4:
                t.Type = 4;
                break;
              case 'HAMTShard':
              case 5:
                t.Type = 5;
            }
            if (
              (null != e.Data &&
                ('string' === typeof e.Data
                  ? st.base64.decode(
                      e.Data,
                      (t.Data = st.newBuffer(st.base64.length(e.Data))),
                      0,
                    )
                  : e.Data.length && (t.Data = e.Data)),
              null != e.filesize &&
                (st.Long
                  ? ((t.filesize = st.Long.fromValue(e.filesize)).unsigned = !0)
                  : 'string' === typeof e.filesize
                  ? (t.filesize = parseInt(e.filesize, 10))
                  : 'number' === typeof e.filesize
                  ? (t.filesize = e.filesize)
                  : 'object' === typeof e.filesize &&
                    (t.filesize = new st.LongBits(
                      e.filesize.low >>> 0,
                      e.filesize.high >>> 0,
                    ).toNumber(!0))),
              e.blocksizes)
            ) {
              if (!Array.isArray(e.blocksizes))
                throw TypeError('.Data.blocksizes: array expected');
              t.blocksizes = [];
              for (var n = 0; n < e.blocksizes.length; ++n)
                st.Long
                  ? ((t.blocksizes[n] = st.Long.fromValue(
                      e.blocksizes[n],
                    )).unsigned = !0)
                  : 'string' === typeof e.blocksizes[n]
                  ? (t.blocksizes[n] = parseInt(e.blocksizes[n], 10))
                  : 'number' === typeof e.blocksizes[n]
                  ? (t.blocksizes[n] = e.blocksizes[n])
                  : 'object' === typeof e.blocksizes[n] &&
                    (t.blocksizes[n] = new st.LongBits(
                      e.blocksizes[n].low >>> 0,
                      e.blocksizes[n].high >>> 0,
                    ).toNumber(!0));
            }
            if (
              (null != e.hashType &&
                (st.Long
                  ? ((t.hashType = st.Long.fromValue(e.hashType)).unsigned = !0)
                  : 'string' === typeof e.hashType
                  ? (t.hashType = parseInt(e.hashType, 10))
                  : 'number' === typeof e.hashType
                  ? (t.hashType = e.hashType)
                  : 'object' === typeof e.hashType &&
                    (t.hashType = new st.LongBits(
                      e.hashType.low >>> 0,
                      e.hashType.high >>> 0,
                    ).toNumber(!0))),
              null != e.fanout &&
                (st.Long
                  ? ((t.fanout = st.Long.fromValue(e.fanout)).unsigned = !0)
                  : 'string' === typeof e.fanout
                  ? (t.fanout = parseInt(e.fanout, 10))
                  : 'number' === typeof e.fanout
                  ? (t.fanout = e.fanout)
                  : 'object' === typeof e.fanout &&
                    (t.fanout = new st.LongBits(
                      e.fanout.low >>> 0,
                      e.fanout.high >>> 0,
                    ).toNumber(!0))),
              null != e.mode && (t.mode = e.mode >>> 0),
              null != e.mtime)
            ) {
              if ('object' !== typeof e.mtime)
                throw TypeError('.Data.mtime: object expected');
              t.mtime = ot.UnixTime.fromObject(e.mtime);
            }
            return t;
          }),
          (e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if (((t.arrays || t.defaults) && (n.blocksizes = []), t.defaults)) {
              if (
                ((n.Type = t.enums === String ? 'Raw' : 0),
                t.bytes === String
                  ? (n.Data = '')
                  : ((n.Data = []),
                    t.bytes !== Array && (n.Data = st.newBuffer(n.Data))),
                st.Long)
              ) {
                var r = new st.Long(0, 0, !0);
                n.filesize =
                  t.longs === String
                    ? r.toString()
                    : t.longs === Number
                    ? r.toNumber()
                    : r;
              } else n.filesize = t.longs === String ? '0' : 0;
              if (st.Long) {
                r = new st.Long(0, 0, !0);
                n.hashType =
                  t.longs === String
                    ? r.toString()
                    : t.longs === Number
                    ? r.toNumber()
                    : r;
              } else n.hashType = t.longs === String ? '0' : 0;
              if (st.Long) {
                r = new st.Long(0, 0, !0);
                n.fanout =
                  t.longs === String
                    ? r.toString()
                    : t.longs === Number
                    ? r.toNumber()
                    : r;
              } else n.fanout = t.longs === String ? '0' : 0;
              (n.mode = 0), (n.mtime = null);
            }
            if (
              (null != e.Type &&
                e.hasOwnProperty('Type') &&
                (n.Type =
                  t.enums === String ? ot.Data.DataType[e.Type] : e.Type),
              null != e.Data &&
                e.hasOwnProperty('Data') &&
                (n.Data =
                  t.bytes === String
                    ? st.base64.encode(e.Data, 0, e.Data.length)
                    : t.bytes === Array
                    ? Array.prototype.slice.call(e.Data)
                    : e.Data),
              null != e.filesize &&
                e.hasOwnProperty('filesize') &&
                ('number' === typeof e.filesize
                  ? (n.filesize =
                      t.longs === String ? String(e.filesize) : e.filesize)
                  : (n.filesize =
                      t.longs === String
                        ? st.Long.prototype.toString.call(e.filesize)
                        : t.longs === Number
                        ? new st.LongBits(
                            e.filesize.low >>> 0,
                            e.filesize.high >>> 0,
                          ).toNumber(!0)
                        : e.filesize)),
              e.blocksizes && e.blocksizes.length)
            ) {
              n.blocksizes = [];
              for (var s = 0; s < e.blocksizes.length; ++s)
                'number' === typeof e.blocksizes[s]
                  ? (n.blocksizes[s] =
                      t.longs === String
                        ? String(e.blocksizes[s])
                        : e.blocksizes[s])
                  : (n.blocksizes[s] =
                      t.longs === String
                        ? st.Long.prototype.toString.call(e.blocksizes[s])
                        : t.longs === Number
                        ? new st.LongBits(
                            e.blocksizes[s].low >>> 0,
                            e.blocksizes[s].high >>> 0,
                          ).toNumber(!0)
                        : e.blocksizes[s]);
            }
            return (
              null != e.hashType &&
                e.hasOwnProperty('hashType') &&
                ('number' === typeof e.hashType
                  ? (n.hashType =
                      t.longs === String ? String(e.hashType) : e.hashType)
                  : (n.hashType =
                      t.longs === String
                        ? st.Long.prototype.toString.call(e.hashType)
                        : t.longs === Number
                        ? new st.LongBits(
                            e.hashType.low >>> 0,
                            e.hashType.high >>> 0,
                          ).toNumber(!0)
                        : e.hashType)),
              null != e.fanout &&
                e.hasOwnProperty('fanout') &&
                ('number' === typeof e.fanout
                  ? (n.fanout =
                      t.longs === String ? String(e.fanout) : e.fanout)
                  : (n.fanout =
                      t.longs === String
                        ? st.Long.prototype.toString.call(e.fanout)
                        : t.longs === Number
                        ? new st.LongBits(
                            e.fanout.low >>> 0,
                            e.fanout.high >>> 0,
                          ).toNumber(!0)
                        : e.fanout)),
              null != e.mode && e.hasOwnProperty('mode') && (n.mode = e.mode),
              null != e.mtime &&
                e.hasOwnProperty('mtime') &&
                (n.mtime = ot.UnixTime.toObject(e.mtime, t)),
              n
            );
          }),
          (e.prototype.toJSON = function () {
            return this.constructor.toObject(this, tt.util.toJSONOptions);
          }),
          (e.DataType = (function () {
            const e = {},
              t = Object.create(e);
            return (
              (t[(e[0] = 'Raw')] = 0),
              (t[(e[1] = 'Directory')] = 1),
              (t[(e[2] = 'File')] = 2),
              (t[(e[3] = 'Metadata')] = 3),
              (t[(e[4] = 'Symlink')] = 4),
              (t[(e[5] = 'HAMTShard')] = 5),
              t
            );
          })()),
          e
        );
      })()),
        (ot.UnixTime = (() => {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.Seconds = st.Long ? st.Long.fromBits(0, 0, !1) : 0),
            (e.prototype.FractionalNanoseconds = 0),
            (e.encode = function (e, t) {
              return (
                t || (t = rt.create()),
                t.uint32(8).int64(e.Seconds),
                null != e.FractionalNanoseconds &&
                  Object.hasOwnProperty.call(e, 'FractionalNanoseconds') &&
                  t.uint32(21).fixed32(e.FractionalNanoseconds),
                t
              );
            }),
            (e.decode = function (e, t) {
              e instanceof nt || (e = nt.create(e));
              for (
                var n = void 0 === t ? e.len : e.pos + t, r = new ot.UnixTime();
                e.pos < n;

              ) {
                var s = e.uint32();
                switch (s >>> 3) {
                  case 1:
                    r.Seconds = e.int64();
                    break;
                  case 2:
                    r.FractionalNanoseconds = e.fixed32();
                    break;
                  default:
                    e.skipType(7 & s);
                }
              }
              if (!r.hasOwnProperty('Seconds'))
                throw st.ProtocolError("missing required 'Seconds'", {
                  instance: r,
                });
              return r;
            }),
            (e.fromObject = function (e) {
              if (e instanceof ot.UnixTime) return e;
              var t = new ot.UnixTime();
              return (
                null != e.Seconds &&
                  (st.Long
                    ? ((t.Seconds = st.Long.fromValue(e.Seconds)).unsigned = !1)
                    : 'string' === typeof e.Seconds
                    ? (t.Seconds = parseInt(e.Seconds, 10))
                    : 'number' === typeof e.Seconds
                    ? (t.Seconds = e.Seconds)
                    : 'object' === typeof e.Seconds &&
                      (t.Seconds = new st.LongBits(
                        e.Seconds.low >>> 0,
                        e.Seconds.high >>> 0,
                      ).toNumber())),
                null != e.FractionalNanoseconds &&
                  (t.FractionalNanoseconds = e.FractionalNanoseconds >>> 0),
                t
              );
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              if (t.defaults) {
                if (st.Long) {
                  var r = new st.Long(0, 0, !1);
                  n.Seconds =
                    t.longs === String
                      ? r.toString()
                      : t.longs === Number
                      ? r.toNumber()
                      : r;
                } else n.Seconds = t.longs === String ? '0' : 0;
                n.FractionalNanoseconds = 0;
              }
              return (
                null != e.Seconds &&
                  e.hasOwnProperty('Seconds') &&
                  ('number' === typeof e.Seconds
                    ? (n.Seconds =
                        t.longs === String ? String(e.Seconds) : e.Seconds)
                    : (n.Seconds =
                        t.longs === String
                          ? st.Long.prototype.toString.call(e.Seconds)
                          : t.longs === Number
                          ? new st.LongBits(
                              e.Seconds.low >>> 0,
                              e.Seconds.high >>> 0,
                            ).toNumber()
                          : e.Seconds)),
                null != e.FractionalNanoseconds &&
                  e.hasOwnProperty('FractionalNanoseconds') &&
                  (n.FractionalNanoseconds = e.FractionalNanoseconds),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, tt.util.toJSONOptions);
            }),
            e
          );
        })()),
        (ot.Metadata = (() => {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                null != e[t[n]] && (this[t[n]] = e[t[n]]);
          }
          return (
            (e.prototype.MimeType = ''),
            (e.encode = function (e, t) {
              return (
                t || (t = rt.create()),
                null != e.MimeType &&
                  Object.hasOwnProperty.call(e, 'MimeType') &&
                  t.uint32(10).string(e.MimeType),
                t
              );
            }),
            (e.decode = function (e, t) {
              e instanceof nt || (e = nt.create(e));
              for (
                var n = void 0 === t ? e.len : e.pos + t, r = new ot.Metadata();
                e.pos < n;

              ) {
                var s = e.uint32();
                if (s >>> 3 === 1) r.MimeType = e.string();
                else e.skipType(7 & s);
              }
              return r;
            }),
            (e.fromObject = function (e) {
              if (e instanceof ot.Metadata) return e;
              var t = new ot.Metadata();
              return null != e.MimeType && (t.MimeType = String(e.MimeType)), t;
            }),
            (e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              return (
                t.defaults && (n.MimeType = ''),
                null != e.MimeType &&
                  e.hasOwnProperty('MimeType') &&
                  (n.MimeType = e.MimeType),
                n
              );
            }),
            (e.prototype.toJSON = function () {
              return this.constructor.toObject(this, tt.util.toJSONOptions);
            }),
            e
          );
        })()),
        parseInt('0644', 8),
        parseInt('0755', 8);
      function it(e) {
        if (null != e)
          return 'number' === typeof e
            ? 4095 & e
            : '0' === (e = e.toString()).substring(0, 1)
            ? 4095 & parseInt(e, 8)
            : 4095 & parseInt(e, 10);
      }
      function at(e) {
        if (null == e) return;
        let t;
        if (
          (null != e.secs && (t = { secs: e.secs, nsecs: e.nsecs }),
          null != e.Seconds &&
            (t = { secs: e.Seconds, nsecs: e.FractionalNanoseconds }),
          Array.isArray(e) && (t = { secs: e[0], nsecs: e[1] }),
          e instanceof Date)
        ) {
          const n = e.getTime(),
            r = Math.floor(n / 1e3);
          t = { secs: r, nsecs: 1e3 * (n - 1e3 * r) };
        }
        if (Object.prototype.hasOwnProperty.call(t, 'secs')) {
          if (
            null != t &&
            null != t.nsecs &&
            (t.nsecs < 0 || t.nsecs > 999999999)
          )
            throw Ue(
              new Error('mtime-nsecs must be within the range [0,999999999]'),
              'ERR_INVALID_MTIME_NSECS',
            );
          return t;
        }
      }
      async function ct(e, t) {
        const { path: n, mode: r, mtime: s, content: o } = e,
          i = { path: n || '', mode: it(r), mtime: at(s) };
        return o ? (i.content = await t(o)) : n || (i.content = await t(e)), i;
      }
      function ut(e) {
        return (async function* (e, t) {
          if (
            'string' === typeof e ||
            e instanceof String ||
            Je(e) ||
            Ge(e) ||
            e._readableState
          )
            throw Ue(
              new Error(
                'Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead',
              ),
              'ERR_UNEXPECTED_INPUT',
            );
          if (
            (Ke(e) && (e = Ve(e)),
            Symbol.iterator in e || Symbol.asyncIterator in e)
          ) {
            const n = qe(e),
              { value: r, done: s } = await n.peek();
            if (s) return void (yield* []);
            if ((n.push(r), Number.isInteger(r)))
              throw Ue(
                new Error(
                  'Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead',
                ),
                'ERR_UNEXPECTED_INPUT',
              );
            if (r._readableState)
              return void (yield* et(n, e => ct({ content: e }, t)));
            if (Je(r)) return void (yield ct({ content: n }, t));
            if (
              Xe(r) ||
              r[Symbol.iterator] ||
              r[Symbol.asyncIterator] ||
              Ke(r) ||
              Ge(r)
            )
              return void (yield* et(n, e => ct(e, t)));
          }
          if (Xe(e))
            throw Ue(
              new Error(
                'Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead',
              ),
              'ERR_UNEXPECTED_INPUT',
            );
          throw Ue(
            new Error('Unexpected input: ' + typeof e),
            'ERR_UNEXPECTED_INPUT',
          );
        })(e, Qe);
      }
      function lt(e) {
        if (null != e)
          return 'string' === typeof e ? e : e.toString(8).padStart(4, '0');
      }
      async function ft(e, t, n = {}) {
        const r = [],
          s = new FormData();
        let o = 0,
          i = 0;
        for await (const { content: a, path: c, mode: u, mtime: l } of ut(e)) {
          let e = '';
          o > 0 && (e = `-${o}`);
          let t = (a ? 'file' : 'dir') + e;
          const n = [];
          if (
            (null !== u && void 0 !== u && n.push(`mode=${lt(u)}`), null != l)
          ) {
            const { secs: e, nsecs: t } = l;
            n.push(`mtime=${e}`), null != t && n.push(`mtime-nsecs=${t}`);
          }
          if ((n.length && (t = `${t}?${n.join('&')}`), a)) {
            s.set(t, a, null != c ? encodeURIComponent(c) : void 0);
            const e = i + a.size;
            r.push({ name: c, start: i, end: e }), (i = e);
          } else {
            if (null == c)
              throw new Error('path or content or both must be set');
            s.set(
              t,
              new File([''], encodeURIComponent(c), {
                type: 'application/x-directory',
              }),
            );
          }
          o++;
        }
        return { total: i, parts: r, headers: n, body: s };
      }
      var ht = n(32044);
      function dt(...e) {
        return (0, ht.anySignal)(
          (function (e) {
            return e.filter(Boolean);
          })(e),
        );
      }
      const pt = Oe(
          e =>
            async function t(n, r = {}) {
              const s = new AbortController(),
                o = dt(s.signal, r.signal);
              let i;
              try {
                const t = await e.post('block/put', {
                  signal: o,
                  searchParams: _e(r),
                  ...(await ft([n], 0, r.headers)),
                });
                i = await t.json();
              } catch (a) {
                if ('dag-pb' === r.format)
                  return t(n, { ...r, format: 'protobuf' });
                if ('dag-cbor' === r.format)
                  return t(n, { ...r, format: 'cbor' });
                throw a;
              }
              return h.CID.parse(i.Key);
            },
        ),
        yt = Oe(
          e =>
            async function* (t, n = {}) {
              Array.isArray(t) || (t = [t]);
              const r = await e.post('block/rm', {
                signal: n.signal,
                searchParams: _e({
                  arg: t.map(e => e.toString()),
                  'stream-channels': !0,
                  ...n,
                }),
                headers: n.headers,
              });
              for await (const e of r.ndjson()) yield gt(e);
            },
        );
      function gt(e) {
        const t = { cid: h.CID.parse(e.Hash) };
        return e.Error && (t.error = new Error(e.Error)), t;
      }
      const mt = Oe(
        e =>
          async function (t, n = {}) {
            const r = await e.post('block/stat', {
                signal: n.signal,
                searchParams: _e({ arg: t.toString(), ...n }),
                headers: n.headers,
              }),
              s = await r.json();
            return { cid: h.CID.parse(s.Key), size: s.Size };
          },
      );
      function wt(e) {
        return { get: He(e), put: pt(e), rm: yt(e), stat: mt(e) };
      }
      const bt = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('bootstrap/add', {
                  signal: n.signal,
                  searchParams: _e({ arg: t, ...n }),
                  headers: n.headers,
                }),
                { Peers: s } = await r.json();
              return { Peers: s.map(e => new ye.Multiaddr(e)) };
            },
        ),
        vt = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('bootstrap/rm', {
                  signal: t.signal,
                  searchParams: _e({ ...t, all: !0 }),
                  headers: t.headers,
                }),
                { Peers: r } = await n.json();
              return { Peers: r.map(e => new ye.Multiaddr(e)) };
            },
        ),
        Et = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('bootstrap/list', {
                  signal: t.signal,
                  searchParams: _e(t),
                  headers: t.headers,
                }),
                { Peers: r } = await n.json();
              return { Peers: r.map(e => new ye.Multiaddr(e)) };
            },
        ),
        kt = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('bootstrap/add', {
                  signal: t.signal,
                  searchParams: _e({ ...t, default: !0 }),
                  headers: t.headers,
                }),
                { Peers: r } = await n.json();
              return { Peers: r.map(e => new ye.Multiaddr(e)) };
            },
        ),
        St = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('bootstrap/rm', {
                  signal: n.signal,
                  searchParams: _e({ arg: t, ...n }),
                  headers: n.headers,
                }),
                { Peers: s } = await r.json();
              return { Peers: s.map(e => new ye.Multiaddr(e)) };
            },
        );
      function Ct(e) {
        return {
          add: bt(e),
          clear: vt(e),
          list: Et(e),
          reset: kt(e),
          rm: St(e),
        };
      }
      const xt = Oe(
        e =>
          async function (t, n = {}) {
            const r = await e.post('config/profile/apply', {
                signal: n.signal,
                searchParams: _e({ arg: t, ...n }),
                headers: n.headers,
              }),
              s = await r.json();
            return { original: s.OldCfg, updated: s.NewCfg };
          },
      );
      function Dt(e) {
        if (null == e) return e;
        const t = /^[A-Z]+$/;
        return Object.keys(e).reduce(
          (n, r) => (
            t.test(r)
              ? (n[r.toLowerCase()] = e[r])
              : t.test(r[0])
              ? (n[r[0].toLowerCase() + r.slice(1)] = e[r])
              : (n[r] = e[r]),
            n
          ),
          {},
        );
      }
      const Pt = Oe(
        e =>
          async function (t = {}) {
            const n = await e.post('config/profile/list', {
              signal: t.signal,
              searchParams: _e(t),
              headers: t.headers,
            });
            return (await n.json()).map(e => Dt(e));
          },
      );
      function It(e) {
        return { apply: xt(e), list: Pt(e) };
      }
      const Tt = Oe(e => async (t, n = {}) => {
          if (!t) throw new Error('key argument is required');
          const r = await e.post('config', {
            signal: n.signal,
            searchParams: _e({ arg: t, ...n }),
            headers: n.headers,
          });
          return (await r.json()).Value;
        }),
        At = Oe(e => async (t = {}) => {
          const n = await e.post('config/show', {
            signal: t.signal,
            searchParams: _e({ ...t }),
            headers: t.headers,
          });
          return await n.json();
        });
      var jt = n(52217);
      const Rt = Oe(e => async (t, n = {}) => {
          const r = new AbortController(),
            s = dt(r.signal, n.signal),
            o = await e.post('config/replace', {
              signal: s,
              searchParams: _e(n),
              ...(await ft(
                [(0, jt.fromString)(JSON.stringify(t))],
                0,
                n.headers,
              )),
            });
          await o.text();
        }),
        Nt = Oe(e => async (t, n, r = {}) => {
          if ('string' !== typeof t) throw new Error('Invalid key type');
          const s = { ...r, ...Bt(t, n) },
            o = await e.post('config', {
              signal: r.signal,
              searchParams: _e(s),
              headers: r.headers,
            });
          await o.text();
        }),
        Bt = (e, t) => {
          switch (typeof t) {
            case 'boolean':
              return { arg: [e, t.toString()], bool: !0 };
            case 'string':
              return { arg: [e, t] };
            default:
              return { arg: [e, JSON.stringify(t)], json: !0 };
          }
        };
      function Ot(e) {
        return {
          getAll: At(e),
          get: Tt(e),
          set: Nt(e),
          replace: Rt(e),
          profiles: It(e),
        };
      }
      const $t = Oe(
        e =>
          async function* (t, n = {}) {
            const r = await e.post('dag/export', {
              signal: n.signal,
              searchParams: _e({ arg: t.toString() }),
              headers: n.headers,
            });
            yield* r.iterator();
          },
      );
      async function* Ut(e, t, n, r, s) {
        const o = async e => {
            const t = await n.getCodec(e.code),
              o = await r(e, s);
            return t.decode(o);
          },
          i = t.split('/').filter(Boolean);
        let a = await o(e),
          c = e;
        for (; i.length; ) {
          const e = i.shift();
          if (!e)
            throw Ue(
              new Error(`Could not resolve path "${t}"`),
              'ERR_INVALID_PATH',
            );
          if (!Object.prototype.hasOwnProperty.call(a, e))
            throw Ue(
              new Error(`no link named "${e}" under ${c}`),
              'ERR_NO_LINK',
            );
          (a = a[e]), yield { value: a, remainderPath: i.join('/') };
          const n = h.CID.asCID(a);
          n && ((c = n), (a = await o(a)));
        }
        yield { value: a, remainderPath: '' };
      }
      var Lt = n(72262),
        _t = n(93093);
      const zt = (e, t) => {
          const n = Oe((t, n) => {
            const r = He(n);
            return async (t, n = {}) => {
              if (n.path) {
                const s = n.localResolve
                  ? await Lt(Ut(t, n.path, e, r, n))
                  : await _t(Ut(t, n.path, e, r, n));
                if (!s) throw Ue(new Error('Not found'), 'ERR_NOT_FOUND');
                return s;
              }
              const s = await e.getCodec(t.code),
                o = await r(t, n);
              return { value: s.decode(o), remainderPath: '' };
            };
          });
          return n(t);
        },
        Mt = Oe(
          e =>
            async function* (t, n = {}) {
              const r = new AbortController(),
                s = dt(r.signal, n.signal),
                { headers: o, body: i } = await ft(t, 0, n.headers),
                a = await e.post('dag/import', {
                  signal: s,
                  headers: o,
                  body: i,
                  searchParams: _e({ 'pin-roots': n.pinRoots }),
                });
              for await (const { Root: e } of a.ndjson())
                if (void 0 !== e) {
                  const {
                    Cid: { '/': t },
                    PinErrorMsg: n,
                  } = e;
                  yield { root: { cid: h.CID.parse(t), pinErrorMsg: n } };
                }
            },
        ),
        Ft = (e, t) => {
          const n = Oe(t => async (n, r = {}) => {
            const s = { storeCodec: 'dag-cbor', hashAlg: 'sha2-256', ...r };
            let o;
            if (s.inputCodec) {
              if (!(n instanceof Uint8Array))
                throw new Error(
                  'Can only inputCodec on raw bytes that can be decoded',
                );
              o = n;
            } else {
              (o = (await e.getCodec(s.storeCodec)).encode(n)),
                (s.inputCodec = s.storeCodec);
            }
            const i = new AbortController(),
              a = dt(i.signal, s.signal),
              c = await t.post('dag/put', {
                timeout: s.timeout,
                signal: a,
                searchParams: _e(s),
                ...(await ft([o], 0, s.headers)),
              }),
              u = await c.json();
            return h.CID.parse(u.Cid['/']);
          });
          return n(t);
        },
        Wt = Oe(e => async (t, n = {}) => {
          const r = await e.post('dag/resolve', {
              signal: n.signal,
              searchParams: _e({
                arg: `${t}${
                  n.path ? `/${n.path}`.replace(/\/[/]+/g, '/') : ''
                }`,
                ...n,
              }),
              headers: n.headers,
            }),
            s = await r.json();
          return { cid: h.CID.parse(s.Cid['/']), remainderPath: s.RemPath };
        });
      function Ht(e, t) {
        return {
          export: $t(t),
          get: zt(e, t),
          import: Mt(t),
          put: Ft(e, t),
          resolve: Wt(t),
        };
      }
      const qt = e => {
          if (0 === e.Type)
            return { to: e.ID, name: 'SENDING_QUERY', type: e.Type };
          if (1 === e.Type)
            return {
              from: e.ID,
              name: 'PEER_RESPONSE',
              type: e.Type,
              messageType: 0,
              messageName: 'PUT_VALUE',
              closer: (e.Responses || []).map(({ ID: e, Addrs: t }) => ({
                id: e,
                multiaddrs: t.map(e => new ye.Multiaddr(e)),
              })),
              providers: (e.Responses || []).map(({ ID: e, Addrs: t }) => ({
                id: e,
                multiaddrs: t.map(e => new ye.Multiaddr(e)),
              })),
            };
          if (2 === e.Type) {
            let t = { id: e.ID, multiaddrs: [] };
            return (
              e.Responses &&
                e.Responses.length &&
                (t = {
                  id: e.Responses[0].ID,
                  multiaddrs: e.Responses[0].Addrs.map(
                    e => new ye.Multiaddr(e),
                  ),
                }),
              { from: e.ID, name: 'FINAL_PEER', type: e.Type, peer: t }
            );
          }
          if (3 === e.Type)
            return {
              from: e.ID,
              name: 'QUERY_ERROR',
              type: e.Type,
              error: new Error(e.Extra),
            };
          if (4 === e.Type)
            return {
              from: e.ID,
              name: 'PROVIDER',
              type: e.Type,
              providers: e.Responses.map(({ ID: e, Addrs: t }) => ({
                id: e,
                multiaddrs: t.map(e => new ye.Multiaddr(e)),
              })),
            };
          if (5 === e.Type)
            return {
              from: e.ID,
              name: 'VALUE',
              type: e.Type,
              value: (0, jt.fromString)(e.Extra, 'base64pad'),
            };
          if (6 === e.Type) {
            const t = e.Responses.map(({ ID: e }) => e);
            if (!t.length) throw new Error('No peer found');
            return { name: 'ADDING_PEER', type: e.Type, peer: t[0] };
          }
          if (7 === e.Type)
            return { name: 'DIALING_PEER', type: e.Type, peer: e.ID };
          throw new Error('Unknown DHT event type');
        },
        Vt = Oe(
          e =>
            async function* (t, n = {}) {
              const r = await e.post('dht/findpeer', {
                signal: n.signal,
                searchParams: _e({ arg: t, ...n }),
                headers: n.headers,
              });
              for await (const e of r.ndjson()) yield qt(e);
            },
        ),
        Zt = Oe(
          e =>
            async function* (t, n = {}) {
              const r = await e.post('dht/findprovs', {
                signal: n.signal,
                searchParams: _e({ arg: t.toString(), ...n }),
                headers: n.headers,
              });
              for await (const e of r.ndjson()) yield qt(e);
            },
        );
      var Jt = n(92263);
      const Gt = Oe(
          e =>
            async function* (t, n = {}) {
              const r = await e.post('dht/get', {
                signal: n.signal,
                searchParams: _e({
                  arg:
                    t instanceof Uint8Array
                      ? (0, Jt.toString)(t)
                      : t.toString(),
                  ...n,
                }),
                headers: n.headers,
              });
              for await (const e of r.ndjson()) yield qt(e);
            },
        ),
        Xt = Oe(
          e =>
            async function* (t, n = { recursive: !1 }) {
              const r = Array.isArray(t) ? t : [t],
                s = await e.post('dht/provide', {
                  signal: n.signal,
                  searchParams: _e({ arg: r.map(e => e.toString()), ...n }),
                  headers: n.headers,
                });
              for await (const e of s.ndjson()) yield qt(e);
            },
        ),
        Kt = Oe(
          e =>
            async function* (t, n, r = {}) {
              const s = new AbortController(),
                o = dt(s.signal, r.signal),
                i = await e.post('dht/put', {
                  signal: o,
                  searchParams: _e({
                    arg:
                      t instanceof Uint8Array
                        ? (0, Jt.toString)(t)
                        : t.toString(),
                    ...r,
                  }),
                  ...(await ft([n], 0, r.headers)),
                });
              for await (const e of i.ndjson()) yield qt(e);
            },
        ),
        Qt = Oe(
          e =>
            async function* (t, n = {}) {
              const r = await e.post('dht/query', {
                signal: n.signal,
                searchParams: _e({ arg: t.toString(), ...n }),
                headers: n.headers,
              });
              for await (const e of r.ndjson()) yield qt(e);
            },
        );
      function Yt(e) {
        return {
          findPeer: Vt(e),
          findProvs: Zt(e),
          get: Gt(e),
          provide: Xt(e),
          put: Kt(e),
          query: Qt(e),
        };
      }
      const en = Oe(
          e =>
            async function (t = {}) {
              return (
                await e.post('diag/cmds', {
                  signal: t.signal,
                  searchParams: _e(t),
                  headers: t.headers,
                })
              ).json();
            },
        ),
        tn = Oe(
          e =>
            async function (t = {}) {
              return (
                await e.post('diag/net', {
                  signal: t.signal,
                  searchParams: _e(t),
                  headers: t.headers,
                })
              ).json();
            },
        ),
        nn = Oe(
          e =>
            async function (t = {}) {
              return (
                await e.post('diag/sys', {
                  signal: t.signal,
                  searchParams: _e(t),
                  headers: t.headers,
                })
              ).json();
            },
        );
      function rn(e) {
        return { cmds: en(e), net: tn(e), sys: nn(e) };
      }
      const sn = Oe(
          e =>
            async function (t, n, r = {}) {
              const s = await e.post('files/chmod', {
                signal: r.signal,
                searchParams: _e({ arg: t, mode: n, ...r }),
                headers: r.headers,
              });
              await s.text();
            },
        ),
        on = Oe(
          e =>
            async function (t, n, r = {}) {
              const s = Array.isArray(t) ? t : [t],
                o = await e.post('files/cp', {
                  signal: r.signal,
                  searchParams: _e({
                    arg: s
                      .concat(n)
                      .map(e => (h.CID.asCID(e) ? `/ipfs/${e}` : e)),
                    ...r,
                  }),
                  headers: r.headers,
                });
              await o.text();
            },
        ),
        an = Oe(
          e =>
            async function (t, n = {}) {
              if (!t || 'string' !== typeof t)
                throw new Error('ipfs.files.flush requires a path');
              const r = await e.post('files/flush', {
                  signal: n.signal,
                  searchParams: _e({ arg: t, ...n }),
                  headers: n.headers,
                }),
                s = await r.json();
              return h.CID.parse(s.Cid);
            },
        );
      function cn(e) {
        const t = Dt(e);
        return (
          Object.prototype.hasOwnProperty.call(t, 'mode') &&
            (t.mode = parseInt(t.mode, 8)),
          Object.prototype.hasOwnProperty.call(t, 'mtime') &&
            ((t.mtime = { secs: t.mtime, nsecs: t.mtimeNsecs || 0 }),
            delete t.mtimeNsecs),
          t
        );
      }
      const un = Oe(
        e =>
          async function* (t, n = {}) {
            if (!t) throw new Error('ipfs.files.ls requires a path');
            const r = await e.post('files/ls', {
              signal: n.signal,
              searchParams: _e({
                arg: h.CID.asCID(t) ? `/ipfs/${t}` : t,
                long: !0,
                ...n,
                stream: !0,
              }),
              headers: n.headers,
            });
            for await (const e of r.ndjson())
              if ('Entries' in e)
                for (const t of e.Entries || []) yield ln(cn(t));
              else yield ln(cn(e));
          },
      );
      function ln(e) {
        return (
          e.hash && (e.cid = h.CID.parse(e.hash)),
          delete e.hash,
          (e.type = 1 === e.type ? 'directory' : 'file'),
          e
        );
      }
      const fn = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('files/mkdir', {
                signal: n.signal,
                searchParams: _e({ arg: t, ...n }),
                headers: n.headers,
              });
              await r.text();
            },
        ),
        hn = Oe(
          e =>
            async function (t, n, r = {}) {
              Array.isArray(t) || (t = [t]);
              const s = await e.post('files/mv', {
                signal: r.signal,
                searchParams: _e({ arg: t.concat(n), ...r }),
                headers: r.headers,
              });
              await s.text();
            },
        );
      var dn = n(50590);
      const pn = Oe(
          e =>
            async function* (t, n = {}) {
              const r = await e.post('files/read', {
                signal: n.signal,
                searchParams: _e({ arg: t, count: n.length, ...n }),
                headers: n.headers,
              });
              yield* dn(r.body);
            },
        ),
        yn = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('files/rm', {
                  signal: n.signal,
                  searchParams: _e({ arg: t, ...n }),
                  headers: n.headers,
                }),
                s = await r.text();
              if ('' !== s) {
                const e = new ke.HTTPError(r);
                throw ((e.message = s), e);
              }
            },
        ),
        gn = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('files/stat', {
                  signal: n.signal,
                  searchParams: _e({ arg: t, ...n }),
                  headers: n.headers,
                }),
                s = await r.json();
              return (
                (s.WithLocality = s.WithLocality || !1),
                ((o = cn(s)).cid = h.CID.parse(o.hash)),
                delete o.hash,
                o
              );
              var o;
            },
        );
      const mn = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('files/touch', {
                signal: n.signal,
                searchParams: _e({ arg: t, ...n }),
                headers: n.headers,
              });
              await r.text();
            },
        ),
        wn = Oe(
          e =>
            async function (t, n, r = {}) {
              const s = new AbortController(),
                o = dt(s.signal, r.signal),
                i = await e.post('files/write', {
                  signal: o,
                  searchParams: _e({
                    arg: t,
                    streamChannels: !0,
                    count: r.length,
                    ...r,
                  }),
                  ...(await ft(
                    [
                      {
                        content: n,
                        path: 'arg',
                        mode: $e(r.mode),
                        mtime: Le(r.mtime),
                      },
                    ],
                    0,
                    r.headers,
                  )),
                });
              await i.text();
            },
        );
      function bn(e) {
        return {
          chmod: sn(e),
          cp: on(e),
          flush: an(e),
          ls: un(e),
          mkdir: fn(e),
          mv: hn(e),
          read: pn(e),
          rm: yn(e),
          stat: gn(e),
          touch: mn(e),
          write: wn(e),
        };
      }
      const vn = Oe(e => async (e, t, n = {}) => {
          throw Ue(new Error('Not implemented'), 'ERR_NOT_IMPLEMENTED');
        }),
        En = Oe(
          e =>
            async function (t, n = { type: 'rsa', size: 2048 }) {
              const r = await e.post('key/gen', {
                signal: n.signal,
                searchParams: _e({ arg: t, ...n }),
                headers: n.headers,
              });
              return Dt(await r.json());
            },
        ),
        kn = Oe(
          e =>
            async function (t, n, r, s = {}) {
              const o = await e.post('key/import', {
                signal: s.signal,
                searchParams: _e({ arg: t, pem: n, password: r, ...s }),
                headers: s.headers,
              });
              return Dt(await o.json());
            },
        ),
        Sn = Oe(e => async (e, t = {}) => {
          throw Ue(new Error('Not implemented'), 'ERR_NOT_IMPLEMENTED');
        }),
        Cn = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('key/list', {
                signal: t.signal,
                searchParams: _e(t),
                headers: t.headers,
              });
              return ((await n.json()).Keys || []).map(e => Dt(e));
            },
        ),
        xn = Oe(
          e =>
            async function (t, n, r = {}) {
              const s = await e.post('key/rename', {
                signal: r.signal,
                searchParams: _e({ arg: [t, n], ...r }),
                headers: r.headers,
              });
              return Dt(await s.json());
            },
        ),
        Dn = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('key/rm', {
                signal: n.signal,
                searchParams: _e({ arg: t, ...n }),
                headers: n.headers,
              });
              return Dt((await r.json()).Keys[0]);
            },
        );
      function Pn(e) {
        return {
          export: vn(e),
          gen: En(e),
          import: kn(e),
          info: Sn(e),
          list: Cn(e),
          rename: xn(e),
          rm: Dn(e),
        };
      }
      const In = Oe(
          e =>
            async function (t, n, r = {}) {
              const s = await e.post('log/level', {
                signal: r.signal,
                searchParams: _e({ arg: [t, n], ...r }),
                headers: r.headers,
              });
              return Dt(await s.json());
            },
        ),
        Tn = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('log/ls', {
                signal: t.signal,
                searchParams: _e(t),
                headers: t.headers,
              });
              return (await n.json()).Strings;
            },
        ),
        An = Oe(
          e =>
            async function* (t = {}) {
              const n = await e.post('log/tail', {
                signal: t.signal,
                searchParams: _e(t),
                headers: t.headers,
              });
              yield* n.ndjson();
            },
        );
      function jn(e) {
        return { level: In(e), ls: Tn(e), tail: An(e) };
      }
      const Rn = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('name/publish', {
                signal: n.signal,
                searchParams: _e({ arg: `${t}`, ...n }),
                headers: n.headers,
              });
              return Dt(await r.json());
            },
        ),
        Nn = Oe(
          e =>
            async function* (t, n = {}) {
              const r = await e.post('name/resolve', {
                signal: n.signal,
                searchParams: _e({ arg: t, stream: !0, ...n }),
                headers: n.headers,
              });
              for await (const e of r.ndjson()) yield e.Path;
            },
        ),
        Bn = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('name/pubsub/cancel', {
                signal: n.signal,
                searchParams: _e({ arg: t, ...n }),
                headers: n.headers,
              });
              return Dt(await r.json());
            },
        ),
        On = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('name/pubsub/state', {
                signal: t.signal,
                searchParams: _e(t),
                headers: t.headers,
              });
              return Dt(await n.json());
            },
        ),
        $n = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('name/pubsub/subs', {
                signal: t.signal,
                searchParams: _e(t),
                headers: t.headers,
              });
              return (await n.json()).Strings || [];
            },
        );
      function Un(e) {
        return { cancel: Bn(e), state: On(e), subs: $n(e) };
      }
      function Ln(e) {
        return { publish: Rn(e), resolve: Nn(e), pubsub: Un(e) };
      }
      const _n = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('object/data', {
                  signal: n.signal,
                  searchParams: _e({
                    arg: `${t instanceof Uint8Array ? h.CID.decode(t) : t}`,
                    ...n,
                  }),
                  headers: n.headers,
                }),
                s = await r.arrayBuffer();
              return new Uint8Array(s, 0, s.byteLength);
            },
        ),
        zn = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('object/get', {
                  signal: n.signal,
                  searchParams: _e({
                    arg: `${t instanceof Uint8Array ? h.CID.decode(t) : t}`,
                    dataEncoding: 'base64',
                    ...n,
                  }),
                  headers: n.headers,
                }),
                s = await r.json();
              return {
                Data: (0, jt.fromString)(s.Data, 'base64pad'),
                Links: (s.Links || []).map(e => ({
                  Name: e.Name,
                  Hash: h.CID.parse(e.Hash),
                  Tsize: e.Size,
                })),
              };
            },
        ),
        Mn = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('object/links', {
                signal: n.signal,
                searchParams: _e({
                  arg: `${t instanceof Uint8Array ? h.CID.decode(t) : t}`,
                  ...n,
                }),
                headers: n.headers,
              });
              return ((await r.json()).Links || []).map(e => ({
                Name: e.Name,
                Tsize: e.Size,
                Hash: h.CID.parse(e.Hash),
              }));
            },
        ),
        Fn = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('object/new', {
                  signal: t.signal,
                  searchParams: _e({ arg: t.template, ...t }),
                  headers: t.headers,
                }),
                { Hash: r } = await n.json();
              return h.CID.parse(r);
            },
        ),
        Wn = (e, t) => {
          const n = Oe(n => {
            const r = Ft(e, t);
            return async function (e, t = {}) {
              return r(e, {
                ...t,
                storeCodec: 'dag-pb',
                hashAlg: 'sha2-256',
                version: 1,
              });
            };
          });
          return n(t);
        },
        Hn = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('object/stat', {
                  signal: n.signal,
                  searchParams: _e({ arg: `${t}`, ...n }),
                  headers: n.headers,
                }),
                s = await r.json();
              return { ...s, Hash: h.CID.parse(s.Hash) };
            },
        ),
        qn = Oe(
          e =>
            async function (t, n, r = {}) {
              const s = await e.post('object/patch/add-link', {
                  signal: r.signal,
                  searchParams: _e({
                    arg: [
                      `${t}`,
                      n.Name || n.name || '',
                      (n.Hash || n.cid || '').toString() || null,
                    ],
                    ...r,
                  }),
                  headers: r.headers,
                }),
                { Hash: o } = await s.json();
              return h.CID.parse(o);
            },
        ),
        Vn = Oe(
          e =>
            async function (t, n, r = {}) {
              const s = new AbortController(),
                o = dt(s.signal, r.signal),
                i = await e.post('object/patch/append-data', {
                  signal: o,
                  searchParams: _e({ arg: `${t}`, ...r }),
                  ...(await ft([n], 0, r.headers)),
                }),
                { Hash: a } = await i.json();
              return h.CID.parse(a);
            },
        ),
        Zn = Oe(
          e =>
            async function (t, n, r = {}) {
              const s = await e.post('object/patch/rm-link', {
                  signal: r.signal,
                  searchParams: _e({
                    arg: [`${t}`, n.Name || n.name || null],
                    ...r,
                  }),
                  headers: r.headers,
                }),
                { Hash: o } = await s.json();
              return h.CID.parse(o);
            },
        ),
        Jn = Oe(
          e =>
            async function (t, n, r = {}) {
              const s = new AbortController(),
                o = dt(s.signal, r.signal),
                i = await e.post('object/patch/set-data', {
                  signal: o,
                  searchParams: _e({ arg: [`${t}`], ...r }),
                  ...(await ft([n], 0, r.headers)),
                }),
                { Hash: a } = await i.json();
              return h.CID.parse(a);
            },
        );
      function Gn(e) {
        return {
          addLink: qn(e),
          appendData: Vn(e),
          rmLink: Zn(e),
          setData: Jn(e),
        };
      }
      function Xn(e, t) {
        return {
          data: _n(t),
          get: zn(t),
          links: Mn(t),
          new: Fn(t),
          put: Wn(e, t),
          stat: Hn(t),
          patch: Gn(t),
        };
      }
      async function* Kn(e) {
        if (null === e || void 0 === e)
          throw Ue(new Error(`Unexpected input: ${e}`), 'ERR_UNEXPECTED_INPUT');
        const t = h.CID.asCID(e);
        if (t) yield Qn({ cid: t });
        else {
          if (!(e instanceof String || 'string' === typeof e)) {
            if (null != e.cid || null != e.path) return yield Qn(e);
            if (Symbol.iterator in e) {
              const t = e[Symbol.iterator](),
                n = t.next();
              if (n.done) return t;
              if (
                h.CID.asCID(n.value) ||
                n.value instanceof String ||
                'string' === typeof n.value
              ) {
                yield Qn({ cid: n.value });
                for (const e of t) yield Qn({ cid: e });
                return;
              }
              if (null != n.value.cid || null != n.value.path) {
                yield Qn(n.value);
                for (const e of t) yield Qn(e);
                return;
              }
              throw Ue(
                new Error('Unexpected input: ' + typeof e),
                'ERR_UNEXPECTED_INPUT',
              );
            }
            if (Symbol.asyncIterator in e) {
              const t = e[Symbol.asyncIterator](),
                n = await t.next();
              if (n.done) return t;
              if (
                h.CID.asCID(n.value) ||
                n.value instanceof String ||
                'string' === typeof n.value
              ) {
                yield Qn({ cid: n.value });
                for await (const e of t) yield Qn({ cid: e });
                return;
              }
              if (null != n.value.cid || null != n.value.path) {
                yield Qn(n.value);
                for await (const e of t) yield Qn(e);
                return;
              }
              throw Ue(
                new Error('Unexpected input: ' + typeof e),
                'ERR_UNEXPECTED_INPUT',
              );
            }
            throw Ue(
              new Error('Unexpected input: ' + typeof e),
              'ERR_UNEXPECTED_INPUT',
            );
          }
          yield Qn({ path: e });
        }
      }
      function Qn(e) {
        const t = e.cid || `${e.path}`;
        if (!t)
          throw Ue(
            new Error(
              'Unexpected input: Please path either a CID or an IPFS path',
            ),
            'ERR_UNEXPECTED_INPUT',
          );
        const n = { path: t, recursive: !1 !== e.recursive };
        return null != e.metadata && (n.metadata = e.metadata), n;
      }
      const Yn = Oe(
        e =>
          async function* (t, n = {}) {
            for await (const { path: r, recursive: s, metadata: o } of Kn(t)) {
              const t = await e.post('pin/add', {
                signal: n.signal,
                searchParams: _e({
                  ...n,
                  arg: r,
                  recursive: s,
                  metadata: o ? JSON.stringify(o) : void 0,
                  stream: !0,
                }),
                headers: n.headers,
              });
              for await (const e of t.ndjson())
                if (e.Pins) for (const t of e.Pins) yield h.CID.parse(t);
                else yield h.CID.parse(e);
            }
          },
      );
      function er(e) {
        const t = Yn(e);
        return Oe(
          () =>
            async function (e, n = {}) {
              return _t(t([{ path: e, ...n }], n));
            },
        )(e);
      }
      function tr(e, t, n) {
        const r = { type: e, cid: h.CID.parse(t) };
        return n && (r.metadata = n), r;
      }
      const nr = Oe(
          e =>
            async function* (t = {}) {
              let n = [];
              t.paths && (n = Array.isArray(t.paths) ? t.paths : [t.paths]);
              const r = await e.post('pin/ls', {
                signal: t.signal,
                searchParams: _e({ ...t, arg: n.map(e => `${e}`), stream: !0 }),
                headers: t.headers,
              });
              for await (const e of r.ndjson()) {
                if (e.Keys) {
                  for (const t of Object.keys(e.Keys))
                    yield tr(e.Keys[t].Type, t, e.Keys[t].Metadata);
                  return;
                }
                yield tr(e.Type, e.Cid, e.Metadata);
              }
            },
        ),
        rr = Oe(
          e =>
            async function* (t, n = {}) {
              for await (const { path: r, recursive: s } of Kn(t)) {
                const t = new URLSearchParams(n.searchParams);
                t.append('arg', `${r}`),
                  null != s && t.set('recursive', String(s));
                const o = await e.post('pin/rm', {
                  signal: n.signal,
                  headers: n.headers,
                  searchParams: _e({ ...n, arg: `${r}`, recursive: s }),
                });
                for await (const e of o.ndjson())
                  e.Pins
                    ? yield* e.Pins.map(e => h.CID.parse(e))
                    : yield h.CID.parse(e);
              }
            },
        ),
        sr = e => {
          const t = rr(e);
          return Oe(
            () =>
              async function (e, n = {}) {
                return _t(t([{ path: e, ...n }], n));
              },
          )(e);
        },
        or = ({ Name: e, Status: t, Cid: n }) => ({
          cid: h.CID.parse(n),
          name: e,
          status: t,
        }),
        ir = e => {
          if ('string' === typeof e && '' !== e) return e;
          throw new TypeError('service name must be passed');
        },
        ar = e => {
          if (h.CID.asCID(e)) return e.toString();
          throw new TypeError('CID instance expected instead of ' + typeof e);
        },
        cr = ({ service: e, cid: t, name: n, status: r, all: s }) => {
          const o = _e({ service: ir(e), name: n, force: !!s || void 0 });
          if (t) for (const i of t) o.append('cid', ar(i));
          if (r) for (const i of r) o.append('status', i);
          return o;
        },
        ur = ({ cid: e, service: t, background: n, name: r, origins: s }) => {
          const o = _e({
            arg: ar(e),
            service: ir(t),
            name: r,
            background: !!n || void 0,
          });
          if (s) for (const i of s) o.append('origin', i.toString());
          return o;
        };
      function lr(e) {
        return async function (t, { timeout: n, signal: r, headers: s, ...o }) {
          const i = await e.post('pin/remote/add', {
            timeout: n,
            signal: r,
            headers: s,
            searchParams: ur({ cid: t, ...o }),
          });
          return or(await i.json());
        };
      }
      function fr(e) {
        return async function* ({ timeout: t, signal: n, headers: r, ...s }) {
          const o = await e.post('pin/remote/ls', {
            timeout: t,
            signal: n,
            headers: r,
            searchParams: cr(s),
          });
          for await (const e of o.ndjson()) yield or(e);
        };
      }
      function hr(e) {
        return async function ({ timeout: t, signal: n, headers: r, ...s }) {
          await e.post('pin/remote/rm', {
            timeout: t,
            signal: n,
            headers: r,
            searchParams: cr({ ...s, all: !1 }),
          });
        };
      }
      function dr(e) {
        return async function ({ timeout: t, signal: n, headers: r, ...s }) {
          await e.post('pin/remote/rm', {
            timeout: t,
            signal: n,
            headers: r,
            searchParams: cr({ ...s, all: !0 }),
          });
        };
      }
      function pr(e) {
        const t = String(e);
        if ('undefined' === t) throw Error('endpoint is required');
        return '/' === t[t.length - 1] ? t.slice(0, -1) : t;
      }
      function yr(e) {
        return {
          service: e.Service,
          endpoint: new URL(e.ApiEndpoint),
          ...(e.Stat && { stat: gr(e.Stat) }),
        };
      }
      function gr(e) {
        switch (e.Status) {
          case 'valid': {
            const { Pinning: t, Pinned: n, Queued: r, Failed: s } = e.PinCount;
            return {
              status: 'valid',
              pinCount: { queued: r, pinning: t, pinned: n, failed: s },
            };
          }
          case 'invalid':
            return { status: 'invalid' };
          default:
            return { status: e.Status };
        }
      }
      function mr(e) {
        return async function (t, n) {
          const { endpoint: r, key: s, headers: o, timeout: i, signal: a } = n;
          await e.post('pin/remote/service/add', {
            timeout: i,
            signal: a,
            searchParams: _e({ arg: [t, pr(r), s] }),
            headers: o,
          });
        };
      }
      function wr(e) {
        return async function (t = {}) {
          const { stat: n, headers: r, timeout: s, signal: o } = t,
            i = await e.post('pin/remote/service/ls', {
              timeout: s,
              signal: o,
              headers: r,
              searchParams: !0 === n ? _e({ stat: n }) : void 0,
            }),
            { RemoteServices: a } = await i.json();
          return a.map(yr);
        };
      }
      function br(e) {
        return async function (t, n = {}) {
          await e.post('pin/remote/service/rm', {
            signal: n.signal,
            headers: n.headers,
            searchParams: _e({ arg: t }),
          });
        };
      }
      function vr(e) {
        const t = new Be(e);
        return { add: mr(t), ls: wr(t), rm: br(t) };
      }
      function Er(e) {
        const t = new Be(e);
        return {
          add: lr(t),
          ls: fr(t),
          rm: hr(t),
          rmAll: dr(t),
          service: vr(e),
        };
      }
      function kr(e) {
        return {
          addAll: Yn(e),
          add: er(e),
          ls: nr(e),
          rmAll: rr(e),
          rm: sr(e),
          remote: Er(e),
        };
      }
      const Sr = e => (Array.isArray(e) ? e.map(Cr) : e),
        Cr = e => (0, Jt.toString)(xr(e)),
        xr = e => J.base64url.decode(e),
        Dr = e => J.base64url.encode((0, jt.fromString)(e)),
        Pr = Oe(
          e =>
            async function (t = {}) {
              const { Strings: n } = await (
                await e.post('pubsub/ls', {
                  signal: t.signal,
                  searchParams: _e(t),
                  headers: t.headers,
                })
              ).json();
              return Sr(n) || [];
            },
        ),
        Ir = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('pubsub/peers', {
                  signal: n.signal,
                  searchParams: _e({ arg: Dr(t), ...n }),
                  headers: n.headers,
                }),
                { Strings: s } = await r.json();
              return s || [];
            },
        ),
        Tr = Oe(
          e =>
            async function (t, n, r = {}) {
              const s = _e({ arg: Dr(t), ...r }),
                o = new AbortController(),
                i = dt(o.signal, r.signal),
                a = await e.post('pubsub/pub', {
                  signal: i,
                  searchParams: s,
                  ...(await ft([n], 0, r.headers)),
                });
              await a.text();
            },
        ),
        Ar = Ee('ipfs-http-client:pubsub:subscribe'),
        jr = (e, t) =>
          Oe(
            e =>
              async function (n, r, s = {}) {
                let o, i;
                s.signal = t.subscribe(n, r, s.signal);
                const a = new Promise((e, t) => {
                    (o = e), (i = t);
                  }),
                  c = setTimeout(() => o(), 1e3);
                return (
                  e
                    .post('pubsub/sub', {
                      signal: s.signal,
                      searchParams: _e({ arg: Dr(n), ...s }),
                      headers: s.headers,
                    })
                    .catch(e => {
                      t.unsubscribe(n, r), i(e);
                    })
                    .then(e => {
                      clearTimeout(c),
                        e &&
                          (!(async function (
                            e,
                            { onMessage: t, onEnd: n, onError: r },
                          ) {
                            r = r || Ar;
                            try {
                              for await (const n of e.ndjson())
                                try {
                                  if (!n.from) continue;
                                  t({
                                    from: n.from,
                                    data: xr(n.data),
                                    seqno: xr(n.seqno),
                                    topicIDs: Sr(n.topicIDs),
                                  });
                                } catch (s) {
                                  (s.message = `Failed to parse pubsub message: ${s.message}`),
                                    r(s, !1, n);
                                }
                            } catch (s) {
                              Rr(s) || r(s, !0);
                            } finally {
                              n();
                            }
                          })(e, {
                            onMessage: r,
                            onEnd: () => t.unsubscribe(n, r),
                            onError: s.onError,
                          }),
                          o());
                    }),
                  a
                );
              },
          )(e);
      const Rr = e => {
        switch (e.type) {
          case 'aborted':
          case 'abort':
            return !0;
          default:
            return 'AbortError' === e.name;
        }
      };
      class Nr {
        constructor() {
          this._subs = new Map();
        }
        subscribe(e, t, n) {
          const r = this._subs.get(e) || [];
          if (r.find(e => e.handler === t))
            throw new Error(`Already subscribed to ${e} with this handler`);
          const s = new AbortController();
          return (
            this._subs.set(e, [{ handler: t, controller: s }].concat(r)),
            n && n.addEventListener('abort', () => this.unsubscribe(e, t)),
            s.signal
          );
        }
        unsubscribe(e, t) {
          const n = this._subs.get(e) || [];
          let r;
          t
            ? (this._subs.set(
                e,
                n.filter(e => e.handler !== t),
              ),
              (r = n.filter(e => e.handler === t)))
            : (this._subs.set(e, []), (r = n)),
            (this._subs.get(e) || []).length || this._subs.delete(e),
            r.forEach(e => e.controller.abort());
        }
      }
      function Br(e) {
        const t = new Nr();
        return {
          ls: Pr(e),
          peers: Ir(e),
          publish: Tr(e),
          subscribe: jr(e, t),
          unsubscribe:
            ((n = t),
            async function (e, t) {
              n.unsubscribe(e, t);
            }),
        };
        var n;
      }
      const Or = Oe(
          e =>
            async function* (t = {}) {
              const n = await e.post('refs/local', {
                signal: t.signal,
                transform: Dt,
                searchParams: _e(t),
                headers: t.headers,
              });
              yield* n.ndjson();
            },
        ),
        $r = Oe((e, t) =>
          Object.assign(
            async function* (t, n = {}) {
              const r = Array.isArray(t) ? t : [t],
                s = await e.post('refs', {
                  signal: n.signal,
                  searchParams: _e({
                    arg: r.map(
                      e => `${e instanceof Uint8Array ? h.CID.decode(e) : e}`,
                    ),
                    ...n,
                  }),
                  headers: n.headers,
                  transform: Dt,
                });
              yield* s.ndjson();
            },
            { local: Or(t) },
          ),
        ),
        Ur = Oe(
          e =>
            async function* (t = {}) {
              const n = await e.post('repo/gc', {
                signal: t.signal,
                searchParams: _e(t),
                headers: t.headers,
                transform: e => ({
                  err: e.Error ? new Error(e.Error) : null,
                  cid: (e.Key || {})['/'] ? h.CID.parse(e.Key['/']) : null,
                }),
              });
              yield* n.ndjson();
            },
        ),
        Lr = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('repo/stat', {
                  signal: t.signal,
                  searchParams: _e(t),
                  headers: t.headers,
                }),
                r = await n.json();
              return {
                numObjects: BigInt(r.NumObjects),
                repoSize: BigInt(r.RepoSize),
                repoPath: r.RepoPath,
                version: r.Version,
                storageMax: BigInt(r.StorageMax),
              };
            },
        ),
        _r = Oe(
          e =>
            async function (t = {}) {
              return (
                await (
                  await e.post('repo/version', {
                    signal: t.signal,
                    searchParams: _e(t),
                    headers: t.headers,
                  })
                ).json()
              ).Version;
            },
        );
      function zr(e) {
        return { gc: Ur(e), stat: Lr(e), version: _r(e) };
      }
      const Mr = Oe(
        e =>
          async function* (t = {}) {
            const n = await e.post('stats/bw', {
              signal: t.signal,
              searchParams: _e(t),
              headers: t.headers,
              transform: e => ({
                totalIn: BigInt(e.TotalIn),
                totalOut: BigInt(e.TotalOut),
                rateIn: parseFloat(e.RateIn),
                rateOut: parseFloat(e.RateOut),
              }),
            });
            yield* n.ndjson();
          },
      );
      function Fr(e) {
        return { bitswap: Fe(e), repo: Lr(e), bw: Mr(e) };
      }
      const Wr = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('swarm/addrs', {
                  signal: t.signal,
                  searchParams: _e(t),
                  headers: t.headers,
                }),
                { Addrs: r } = await n.json();
              return Object.keys(r).map(e => ({
                id: e,
                addrs: (r[e] || []).map(e => new ye.Multiaddr(e)),
              }));
            },
        ),
        Hr = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('swarm/connect', {
                  signal: n.signal,
                  searchParams: _e({ arg: t, ...n }),
                  headers: n.headers,
                }),
                { Strings: s } = await r.json();
              return s || [];
            },
        ),
        qr = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('swarm/disconnect', {
                  signal: n.signal,
                  searchParams: _e({ arg: t, ...n }),
                  headers: n.headers,
                }),
                { Strings: s } = await r.json();
              return s || [];
            },
        ),
        Vr = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('swarm/addrs/local', {
                  signal: t.signal,
                  searchParams: _e(t),
                  headers: t.headers,
                }),
                { Strings: r } = await n.json();
              return (r || []).map(e => new ye.Multiaddr(e));
            },
        ),
        Zr = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('swarm/peers', {
                  signal: t.signal,
                  searchParams: _e(t),
                  headers: t.headers,
                }),
                { Peers: r } = await n.json();
              return (r || []).map(e => ({
                addr: new ye.Multiaddr(e.Addr),
                peer: e.Peer,
                muxer: e.Muxer,
                latency: e.Latency,
                streams: e.Streams,
                direction:
                  null == e.Direction
                    ? void 0
                    : 0 === e.Direction
                    ? 'inbound'
                    : 'outbound',
              }));
            },
        );
      function Jr(e) {
        return {
          addrs: Wr(e),
          connect: Hr(e),
          disconnect: qr(e),
          localAddrs: Vr(e),
          peers: Zr(e),
        };
      }
      const Gr = Oe(
          e =>
            async function* (t, n = {}) {
              const r = new AbortController(),
                s = dt(r.signal, n.signal),
                {
                  headers: o,
                  body: i,
                  total: a,
                  parts: c,
                } = await ft(t, 0, n.headers),
                [u, l] =
                  'function' === typeof n.progress
                    ? Xr(a, c, n.progress)
                    : [void 0, void 0],
                f = await e.post('add', {
                  searchParams: _e({
                    'stream-channels': !0,
                    ...n,
                    progress: Boolean(u),
                  }),
                  onUploadProgress: l,
                  signal: s,
                  headers: o,
                  body: i,
                });
              for await (let e of f.ndjson())
                (e = Dt(e)),
                  void 0 !== e.hash
                    ? yield Qr(e)
                    : u && u(e.bytes || 0, e.name);
            },
        ),
        Xr = (e, t, n) => (t ? [void 0, Kr(e, t, n)] : [n, void 0]),
        Kr = (e, t, n) => {
          let r = 0;
          const s = t.length;
          return ({ loaded: o, total: i }) => {
            const a = Math.floor((o / i) * e);
            for (; r < s; ) {
              const { start: e, end: s, name: o } = t[r];
              if (a < s) {
                n(a - e, o);
                break;
              }
              n(s - e, o), (r += 1);
            }
          };
        };
      function Qr({
        name: e,
        hash: t,
        size: n,
        mode: r,
        mtime: s,
        mtimeNsecs: o,
      }) {
        const i = { path: e, cid: h.CID.parse(t), size: parseInt(n) };
        return (
          null != r && (i.mode = parseInt(r, 8)),
          null != s && (i.mtime = { secs: s, nsecs: o || 0 }),
          i
        );
      }
      var Yr = n(23294);
      async function* es(e) {
        yield e;
      }
      async function ts(e) {
        if (Je(e)) return es(ns(e));
        if ('string' === typeof e || e instanceof String)
          return es(ns(e.toString()));
        if (Ge(e)) return Yr(e);
        if (
          (Ke(e) && (e = Ve(e)),
          Symbol.iterator in e || Symbol.asyncIterator in e)
        ) {
          const t = qe(e),
            { value: n, done: r } = await t.peek();
          if (r) return es(new Uint8Array(0));
          if ((t.push(n), Number.isInteger(n)))
            return es(Uint8Array.from(await Ze(t)));
          if (Je(n) || 'string' === typeof n || n instanceof String)
            return et(t, ns);
        }
        throw Ue(new Error(`Unexpected input: ${e}`), 'ERR_UNEXPECTED_INPUT');
      }
      function ns(e) {
        return e instanceof Uint8Array
          ? e
          : ArrayBuffer.isView(e)
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e instanceof ArrayBuffer
          ? new Uint8Array(e)
          : Array.isArray(e)
          ? Uint8Array.from(e)
          : (0, jt.fromString)(e.toString());
      }
      async function rs(e, t) {
        const { path: n, mode: r, mtime: s, content: o } = e,
          i = { path: n || '', mode: it(r), mtime: at(s) };
        return o ? (i.content = await t(o)) : n || (i.content = await t(e)), i;
      }
      function ss(e) {
        return (async function* (e, t) {
          if (null === e || void 0 === e)
            throw Ue(
              new Error(`Unexpected input: ${e}`),
              'ERR_UNEXPECTED_INPUT',
            );
          if ('string' === typeof e || e instanceof String)
            yield rs(e.toString(), t);
          else if (Je(e) || Ge(e)) yield rs(e, t);
          else {
            if (
              (Ke(e) && (e = Ve(e)),
              Symbol.iterator in e || Symbol.asyncIterator in e)
            ) {
              const n = qe(e),
                { value: r, done: s } = await n.peek();
              if (s) return void (yield { content: [] });
              if (
                (n.push(r),
                Number.isInteger(r) ||
                  Je(r) ||
                  'string' === typeof r ||
                  r instanceof String)
              )
                return void (yield rs(n, t));
              throw Ue(
                new Error(
                  'Unexpected input: multiple items passed - if you are using ipfs.add, please use ipfs.addAll instead',
                ),
                'ERR_UNEXPECTED_INPUT',
              );
            }
            if (!Xe(e))
              throw Ue(
                new Error(
                  'Unexpected input: cannot convert "' +
                    typeof e +
                    '" into ImportCandidate',
                ),
                'ERR_UNEXPECTED_INPUT',
              );
            yield rs(e, t);
          }
        })(e, ts);
      }
      function os(e) {
        const t = Gr(e);
        return Oe(
          () =>
            async function (e, n = {}) {
              return await _t(t(ss(e), n));
            },
        )(e);
      }
      const is = Oe(
          e =>
            async function* (t, n = {}) {
              const r = await e.post('cat', {
                signal: n.signal,
                searchParams: _e({ arg: t.toString(), ...n }),
                headers: n.headers,
              });
              yield* r.iterator();
            },
        ),
        as = Oe(
          e =>
            async (t = {}) =>
              (
                await e.post('commands', {
                  signal: t.signal,
                  searchParams: _e(t),
                  headers: t.headers,
                })
              ).json(),
        ),
        cs = Oe(e => async (t, n = {}) => {
          const r = await e.post('dns', {
            signal: n.signal,
            searchParams: _e({ arg: t, ...n }),
            headers: n.headers,
          });
          return (await r.json()).Path;
        }),
        us = Oe(e => () => {
          const t = new URL(e.opts.base || '');
          return {
            host: t.hostname,
            port: t.port,
            protocol: t.protocol,
            pathname: t.pathname,
            'api-path': t.pathname,
          };
        }),
        ls = Oe(
          e =>
            async function* (t, n = {}) {
              const r = {
                arg: `${t instanceof Uint8Array ? h.CID.decode(t) : t}`,
                ...n,
              };
              r.compressionLevel &&
                ((r['compression-level'] = r.compressionLevel),
                delete r.compressionLevel);
              const s = await e.post('get', {
                signal: n.signal,
                searchParams: _e(r),
                headers: n.headers,
              });
              yield* s.iterator();
            },
        ),
        fs = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('id', {
                  signal: t.signal,
                  searchParams: _e({
                    arg: t.peerId ? t.peerId.toString() : void 0,
                    ...t,
                  }),
                  headers: t.headers,
                }),
                r = { ...Dt(await n.json()) };
              return (
                r.addresses &&
                  (r.addresses = r.addresses.map(e => new ye.Multiaddr(e))),
                r
              );
            },
        ),
        hs = e => {
          const t = fs(e);
          return async function (e = {}) {
            const n = await t(e);
            return Boolean(n && n.addresses && n.addresses.length);
          };
        },
        ds = Oe(
          (e, t) =>
            async function* (n, r = {}) {
              const s = `${n instanceof Uint8Array ? h.CID.decode(n) : n}`;
              async function o(e) {
                let n = e.Hash;
                if (n.includes('/')) {
                  const e = n.startsWith('/ipfs/') ? n : `/ipfs/${n}`;
                  n = (await gn(t)(e)).cid;
                } else n = h.CID.parse(n);
                const r = {
                  name: e.Name,
                  path: s + (e.Name ? `/${e.Name}` : ''),
                  size: e.Size,
                  cid: n,
                  type: ps(e),
                };
                return (
                  e.Mode && (r.mode = parseInt(e.Mode, 8)),
                  void 0 !== e.Mtime &&
                    null !== e.Mtime &&
                    ((r.mtime = { secs: e.Mtime }),
                    void 0 !== e.MtimeNsecs &&
                      null !== e.MtimeNsecs &&
                      (r.mtime.nsecs = e.MtimeNsecs)),
                  r
                );
              }
              const i = await e.post('ls', {
                signal: r.signal,
                searchParams: _e({ arg: s, ...r }),
                headers: r.headers,
              });
              for await (let e of i.ndjson()) {
                if (((e = e.Objects), !e))
                  throw new Error('expected .Objects in results');
                if (((e = e[0]), !e))
                  throw new Error('expected one array in results.Objects');
                const t = e.Links;
                if (!Array.isArray(t))
                  throw new Error(
                    'expected one array in results.Objects[0].Links',
                  );
                if (!t.length) return void (yield o(e));
                yield* t.map(o);
              }
            },
        );
      function ps(e) {
        switch (e.Type) {
          case 1:
          case 5:
            return 'dir';
          default:
            return 'file';
        }
      }
      const ys = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('dns', {
                signal: t.signal,
                searchParams: _e(t),
                headers: t.headers,
              });
              return Dt(await n.json());
            },
        ),
        gs = Oe(
          e =>
            async function* (t, n = {}) {
              const r = await e.post('ping', {
                signal: n.signal,
                searchParams: _e({ arg: `${t}`, ...n }),
                headers: n.headers,
                transform: Dt,
              });
              yield* r.ndjson();
            },
        ),
        ms = Oe(
          e =>
            async function (t, n = {}) {
              const r = await e.post('resolve', {
                  signal: n.signal,
                  searchParams: _e({ arg: t, ...n }),
                  headers: n.headers,
                }),
                { Path: s } = await r.json();
              return s;
            },
        ),
        ws = Oe(e => async (e = {}) => {
          throw Ue(new Error('Not implemented'), 'ERR_NOT_IMPLEMENTED');
        }),
        bs = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('shutdown', {
                signal: t.signal,
                searchParams: _e(t),
                headers: t.headers,
              });
              await n.text();
            },
        ),
        vs = Oe(
          e =>
            async function (t = {}) {
              const n = await e.post('version', {
                signal: t.signal,
                searchParams: _e(t),
                headers: t.headers,
              });
              return { ...Dt(await n.json()), 'ipfs-http-client': '1.0.0' };
            },
        );
      n(42611), n(46953);
      function Es(e = {}) {
        const t = {
            name: de.identity.name,
            code: de.identity.code,
            encode: e => e,
            decode: e => e,
          },
          n = Object.values(pe.gh);
        (e.ipld && e.ipld.bases ? e.ipld.bases : []).forEach(e => n.push(e));
        const i = new a({ bases: n, loadBase: e.ipld && e.ipld.loadBase }),
          c = Object.values(pe.QB);
        [r, s, o, he, t]
          .concat((e.ipld && e.ipld.codecs) || [])
          .forEach(e => c.push(e));
        const l = new u({ codecs: c, loadCodec: e.ipld && e.ipld.loadCodec }),
          h = Object.values(pe.kq);
        (e.ipld && e.ipld.hashers ? e.ipld.hashers : []).forEach(e =>
          h.push(e),
        );
        const d = new f({
          hashers: h,
          loadHasher: e.ipld && e.ipld.loadHasher,
        });
        var p;
        return {
          add: os(e),
          addAll: Gr(e),
          bitswap:
            ((p = e),
            {
              wantlist: ze(p),
              wantlistForPeer: Me(p),
              unwant: We(p),
              stat: Fe(p),
            }),
          block: wt(e),
          bootstrap: Ct(e),
          cat: is(e),
          commands: as(e),
          config: Ot(e),
          dag: Ht(l, e),
          dht: Yt(e),
          diag: rn(e),
          dns: cs(e),
          files: bn(e),
          get: ls(e),
          getEndpointConfig: us(e),
          id: fs(e),
          isOnline: hs(e),
          key: Pn(e),
          log: jn(e),
          ls: ds(e),
          mount: ys(e),
          name: Ln(e),
          object: Xn(l, e),
          pin: kr(e),
          ping: gs(e),
          pubsub: Br(e),
          refs: $r(e),
          repo: zr(e),
          resolve: ms(e),
          start: ws(e),
          stats: Fr(e),
          stop: bs(e),
          swarm: Jr(e),
          version: vs(e),
          bases: i,
          codecs: l,
          hashers: d,
        };
      }
    },
    31114: function (e, t, n) {
      'use strict';
      n.d(t, {
        kU: function () {
          return f;
        },
        Dp: function () {
          return l;
        },
        ET: function () {
          return h;
        },
      });
      var r = function (e, t) {
          if (e.length >= 255) throw new TypeError('Alphabet too long');
          for (var n = new Uint8Array(256), r = 0; r < n.length; r++)
            n[r] = 255;
          for (var s = 0; s < e.length; s++) {
            var o = e.charAt(s),
              i = o.charCodeAt(0);
            if (255 !== n[i]) throw new TypeError(o + ' is ambiguous');
            n[i] = s;
          }
          var a = e.length,
            c = e.charAt(0),
            u = Math.log(a) / Math.log(256),
            l = Math.log(256) / Math.log(a);
          function f(e) {
            if ('string' !== typeof e) throw new TypeError('Expected String');
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (' ' !== e[t]) {
              for (var r = 0, s = 0; e[t] === c; ) r++, t++;
              for (
                var o = ((e.length - t) * u + 1) >>> 0, i = new Uint8Array(o);
                e[t];

              ) {
                var l = n[e.charCodeAt(t)];
                if (255 === l) return;
                for (
                  var f = 0, h = o - 1;
                  (0 !== l || f < s) && -1 !== h;
                  h--, f++
                )
                  (l += (a * i[h]) >>> 0),
                    (i[h] = l % 256 >>> 0),
                    (l = (l / 256) >>> 0);
                if (0 !== l) throw new Error('Non-zero carry');
                (s = f), t++;
              }
              if (' ' !== e[t]) {
                for (var d = o - s; d !== o && 0 === i[d]; ) d++;
                for (var p = new Uint8Array(r + (o - d)), y = r; d !== o; )
                  p[y++] = i[d++];
                return p;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw new TypeError('Expected Uint8Array');
              if (0 === t.length) return '';
              for (
                var n = 0, r = 0, s = 0, o = t.length;
                s !== o && 0 === t[s];

              )
                s++, n++;
              for (
                var i = ((o - s) * l + 1) >>> 0, u = new Uint8Array(i);
                s !== o;

              ) {
                for (
                  var f = t[s], h = 0, d = i - 1;
                  (0 !== f || h < r) && -1 !== d;
                  d--, h++
                )
                  (f += (256 * u[d]) >>> 0),
                    (u[d] = f % a >>> 0),
                    (f = (f / a) >>> 0);
                if (0 !== f) throw new Error('Non-zero carry');
                (r = h), s++;
              }
              for (var p = i - r; p !== i && 0 === u[p]; ) p++;
              for (var y = c.repeat(n); p < i; ++p) y += e.charAt(u[p]);
              return y;
            },
            decodeUnsafe: f,
            decode: function (e) {
              var n = f(e);
              if (n) return n;
              throw new Error(`Non-${t} character`);
            },
          };
        },
        s = n(95934);
      class o {
        constructor(e, t, n) {
          (this.name = e), (this.prefix = t), (this.baseEncode = n);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class i {
        constructor(e, t, n) {
          (this.name = e), (this.prefix = t), (this.baseDecode = n);
        }
        decode(e) {
          if ('string' === typeof e) {
            if (e[0] === this.prefix) return this.baseDecode(e.slice(1));
            throw Error(
              `Unable to decode multibase string ${JSON.stringify(e)}, ${
                this.name
              } decoder only supports inputs prefixed with ${this.prefix}`,
            );
          }
          throw Error('Can only multibase decode strings');
        }
        or(e) {
          return c(this, e);
        }
      }
      class a {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return c(this, e);
        }
        decode(e) {
          const t = e[0],
            n = this.decoders[t];
          if (n) return n.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e,
            )}, only inputs prefixed with ${Object.keys(
              this.decoders,
            )} are supported`,
          );
        }
      }
      const c = (e, t) =>
        new a({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class u {
        constructor(e, t, n, r) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = n),
            (this.baseDecode = r),
            (this.encoder = new o(e, t, n)),
            (this.decoder = new i(e, t, r));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      const l = ({ name: e, prefix: t, encode: n, decode: r }) =>
          new u(e, t, n, r),
        f = ({ prefix: e, name: t, alphabet: n }) => {
          const { encode: o, decode: i } = r(n, t);
          return l({
            prefix: e,
            name: t,
            encode: o,
            decode: e => (0, s.oQ)(i(e)),
          });
        },
        h = ({ name: e, prefix: t, bitsPerChar: n, alphabet: r }) =>
          l({
            prefix: t,
            name: e,
            encode: e =>
              ((e, t, n) => {
                const r = '=' === t[t.length - 1],
                  s = (1 << n) - 1;
                let o = '',
                  i = 0,
                  a = 0;
                for (let c = 0; c < e.length; ++c)
                  for (a = (a << 8) | e[c], i += 8; i > n; )
                    (i -= n), (o += t[s & (a >> i)]);
                if ((i && (o += t[s & (a << (n - i))]), r))
                  for (; (o.length * n) & 7; ) o += '=';
                return o;
              })(e, r, n),
            decode: t =>
              ((e, t, n, r) => {
                const s = {};
                for (let l = 0; l < t.length; ++l) s[t[l]] = l;
                let o = e.length;
                for (; '=' === e[o - 1]; ) --o;
                const i = new Uint8Array(((o * n) / 8) | 0);
                let a = 0,
                  c = 0,
                  u = 0;
                for (let l = 0; l < o; ++l) {
                  const t = s[e[l]];
                  if (void 0 === t) throw new SyntaxError(`Non-${r} character`);
                  (c = (c << n) | t),
                    (a += n),
                    a >= 8 && ((a -= 8), (i[u++] = 255 & (c >> a)));
                }
                if (a >= n || 255 & (c << (8 - a)))
                  throw new SyntaxError('Unexpected end of data');
                return i;
              })(t, r, n, e),
          });
    },
    22817: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          base32: function () {
            return s;
          },
          base32upper: function () {
            return o;
          },
          base32pad: function () {
            return i;
          },
          base32padupper: function () {
            return a;
          },
          base32hex: function () {
            return c;
          },
          base32hexupper: function () {
            return u;
          },
          base32hexpad: function () {
            return l;
          },
          base32hexpadupper: function () {
            return f;
          },
          base32z: function () {
            return h;
          },
        });
      var r = n(31114);
      const s = (0, r.ET)({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        o = (0, r.ET)({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        i = (0, r.ET)({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        a = (0, r.ET)({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        c = (0, r.ET)({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        u = (0, r.ET)({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        l = (0, r.ET)({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        }),
        f = (0, r.ET)({
          prefix: 'T',
          name: 'base32hexpadupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
          bitsPerChar: 5,
        }),
        h = (0, r.ET)({
          prefix: 'h',
          name: 'base32z',
          alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
          bitsPerChar: 5,
        });
    },
    99086: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          base58btc: function () {
            return s;
          },
          base58flickr: function () {
            return o;
          },
        });
      var r = n(31114);
      const s = (0, r.kU)({
          name: 'base58btc',
          prefix: 'z',
          alphabet:
            '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
        }),
        o = (0, r.kU)({
          name: 'base58flickr',
          prefix: 'Z',
          alphabet:
            '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
        });
    },
    9885: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          base64: function () {
            return s;
          },
          base64pad: function () {
            return o;
          },
          base64url: function () {
            return i;
          },
          base64urlpad: function () {
            return a;
          },
        });
      var r = n(31114);
      const s = (0, r.ET)({
          prefix: 'm',
          name: 'base64',
          alphabet:
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        o = (0, r.ET)({
          prefix: 'M',
          name: 'base64pad',
          alphabet:
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        }),
        i = (0, r.ET)({
          prefix: 'u',
          name: 'base64url',
          alphabet:
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        a = (0, r.ET)({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet:
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        });
    },
    91913: function (e, t, n) {
      'use strict';
      n.d(t, {
        gh: function () {
          return z;
        },
        QB: function () {
          return F;
        },
        kq: function () {
          return M;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          identity: function () {
            return p;
          },
        });
      var s = {};
      n.r(s),
        n.d(s, {
          base2: function () {
            return y;
          },
        });
      var o = {};
      n.r(o),
        n.d(o, {
          base8: function () {
            return g;
          },
        });
      var i = {};
      n.r(i),
        n.d(i, {
          base10: function () {
            return m;
          },
        });
      var a = {};
      n.r(a),
        n.d(a, {
          base16: function () {
            return w;
          },
          base16upper: function () {
            return b;
          },
        });
      var c = {};
      n.r(c),
        n.d(c, {
          base36: function () {
            return E;
          },
          base36upper: function () {
            return k;
          },
        });
      var u = {};
      n.r(u),
        n.d(u, {
          sha256: function () {
            return P;
          },
          sha512: function () {
            return I;
          },
        });
      var l = {};
      n.r(l),
        n.d(l, {
          code: function () {
            return j;
          },
          decode: function () {
            return N;
          },
          encode: function () {
            return R;
          },
          name: function () {
            return A;
          },
        });
      var f = {};
      n.r(f),
        n.d(f, {
          code: function () {
            return U;
          },
          decode: function () {
            return _;
          },
          encode: function () {
            return L;
          },
          name: function () {
            return $;
          },
        });
      var h = n(31114),
        d = n(95934);
      const p = (0, h.Dp)({
          prefix: '\0',
          name: 'identity',
          encode: e => (0, d.BB)(e),
          decode: e => (0, d.mL)(e),
        }),
        y = (0, h.ET)({
          prefix: '0',
          name: 'base2',
          alphabet: '01',
          bitsPerChar: 1,
        }),
        g = (0, h.ET)({
          prefix: '7',
          name: 'base8',
          alphabet: '01234567',
          bitsPerChar: 3,
        }),
        m = (0, h.kU)({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        w = (0, h.ET)({
          prefix: 'f',
          name: 'base16',
          alphabet: '0123456789abcdef',
          bitsPerChar: 4,
        }),
        b = (0, h.ET)({
          prefix: 'F',
          name: 'base16upper',
          alphabet: '0123456789ABCDEF',
          bitsPerChar: 4,
        });
      var v = n(22817);
      const E = (0, h.kU)({
          prefix: 'k',
          name: 'base36',
          alphabet: '0123456789abcdefghijklmnopqrstuvwxyz',
        }),
        k = (0, h.kU)({
          prefix: 'K',
          name: 'base36upper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        });
      var S = n(99086),
        C = n(9885),
        x = n(7225);
      const D = e => async t =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        P = (0, x.D)({ name: 'sha2-256', code: 18, encode: D('SHA-256') }),
        I = (0, x.D)({ name: 'sha2-512', code: 19, encode: D('SHA-512') });
      var T = n(78103);
      const A = 'raw',
        j = 85,
        R = e => (0, d.oQ)(e),
        N = e => (0, d.oQ)(e),
        B = new TextEncoder(),
        O = new TextDecoder(),
        $ = 'json',
        U = 512,
        L = e => B.encode(JSON.stringify(e)),
        _ = e => JSON.parse(O.decode(e));
      n(87232);
      const z = { ...r, ...s, ...o, ...i, ...a, ...v, ...c, ...S, ...C },
        M = { ...u, ...T },
        F = { raw: l, json: f };
    },
    95934: function (e, t, n) {
      'use strict';
      n.d(t, {
        fS: function () {
          return r;
        },
        oQ: function () {
          return s;
        },
        mL: function () {
          return o;
        },
        BB: function () {
          return i;
        },
      });
      new Uint8Array(0);
      const r = (e, t) => {
          if (e === t) return !0;
          if (e.byteLength !== t.byteLength) return !1;
          for (let n = 0; n < e.byteLength; n++) if (e[n] !== t[n]) return !1;
          return !0;
        },
        s = e => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw new Error('Unknown type, must be binary type');
        },
        o = e => new TextEncoder().encode(e),
        i = e => new TextDecoder().decode(e);
    },
    81362: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          CID: function () {
            return c;
          },
        });
      var r = n(15216),
        s = n(28924),
        o = n(99086),
        i = n(22817),
        a = n(95934);
      class c {
        constructor(e, t, n, r) {
          (this.code = t),
            (this.version = e),
            (this.multihash = n),
            (this.bytes = r),
            (this.byteOffset = r.byteOffset),
            (this.byteLength = r.byteLength),
            (this.asCID = this),
            (this._baseCache = new Map()),
            Object.defineProperties(this, {
              byteOffset: m,
              byteLength: m,
              code: g,
              version: g,
              multihash: g,
              bytes: g,
              _baseCache: m,
              asCID: m,
            });
        }
        toV0() {
          if (0 === this.version) return this;
          {
            const { code: e, multihash: t } = this;
            if (e !== h)
              throw new Error('Cannot convert a non dag-pb CID to CIDv0');
            if (t.code !== d)
              throw new Error(
                'Cannot convert non sha2-256 multihash CID to CIDv0',
              );
            return c.createV0(t);
          }
        }
        toV1() {
          switch (this.version) {
            case 0: {
              const { code: e, digest: t } = this.multihash,
                n = s.create(e, t);
              return c.createV1(this.code, n);
            }
            case 1:
              return this;
            default:
              throw Error(
                `Can not convert CID version ${this.version} to version 0. This is a bug please report`,
              );
          }
        }
        equals(e) {
          return (
            e &&
            this.code === e.code &&
            this.version === e.version &&
            s.equals(this.multihash, e.multihash)
          );
        }
        toString(e) {
          const { bytes: t, version: n, _baseCache: r } = this;
          return 0 === n
            ? l(t, r, e || o.base58btc.encoder)
            : f(t, r, e || i.base32.encoder);
        }
        toJSON() {
          return {
            code: this.code,
            version: this.version,
            hash: this.multihash.bytes,
          };
        }
        get [Symbol.toStringTag]() {
          return 'CID';
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
          return 'CID(' + this.toString() + ')';
        }
        static isCID(e) {
          return w(/^0\.0/, b), !(!e || (!e[y] && e.asCID !== e));
        }
        get toBaseEncodedString() {
          throw new Error('Deprecated, use .toString()');
        }
        get codec() {
          throw new Error(
            '"codec" property is deprecated, use integer "code" property instead',
          );
        }
        get buffer() {
          throw new Error(
            'Deprecated .buffer property, use .bytes to get Uint8Array instead',
          );
        }
        get multibaseName() {
          throw new Error('"multibaseName" property is deprecated');
        }
        get prefix() {
          throw new Error('"prefix" property is deprecated');
        }
        static asCID(e) {
          if (e instanceof c) return e;
          if (null != e && e.asCID === e) {
            const { version: t, code: n, multihash: r, bytes: s } = e;
            return new c(t, n, r, s || p(t, n, r.bytes));
          }
          if (null != e && !0 === e[y]) {
            const { version: t, multihash: n, code: r } = e,
              o = s.decode(n);
            return c.create(t, r, o);
          }
          return null;
        }
        static create(e, t, n) {
          if ('number' !== typeof t)
            throw new Error('String codecs are no longer supported');
          switch (e) {
            case 0:
              if (t !== h)
                throw new Error(
                  `Version 0 CID must use dag-pb (code: ${h}) block encoding`,
                );
              return new c(e, t, n, n.bytes);
            case 1: {
              const r = p(e, t, n.bytes);
              return new c(e, t, n, r);
            }
            default:
              throw new Error('Invalid version');
          }
        }
        static createV0(e) {
          return c.create(0, h, e);
        }
        static createV1(e, t) {
          return c.create(1, e, t);
        }
        static decode(e) {
          const [t, n] = c.decodeFirst(e);
          if (n.length) throw new Error('Incorrect length');
          return t;
        }
        static decodeFirst(e) {
          const t = c.inspectBytes(e),
            n = t.size - t.multihashSize,
            r = (0, a.oQ)(e.subarray(n, n + t.multihashSize));
          if (r.byteLength !== t.multihashSize)
            throw new Error('Incorrect length');
          const o = r.subarray(t.multihashSize - t.digestSize),
            i = new s.Digest(t.multihashCode, t.digestSize, o, r);
          return [
            0 === t.version ? c.createV0(i) : c.createV1(t.codec, i),
            e.subarray(t.size),
          ];
        }
        static inspectBytes(e) {
          let t = 0;
          const n = () => {
            const [n, s] = r.Jx(e.subarray(t));
            return (t += s), n;
          };
          let s = n(),
            o = h;
          if (
            (18 === s ? ((s = 0), (t = 0)) : 1 === s && (o = n()),
            0 !== s && 1 !== s)
          )
            throw new RangeError(`Invalid CID version ${s}`);
          const i = t,
            a = n(),
            c = n(),
            u = t + c;
          return {
            version: s,
            codec: o,
            multihashCode: a,
            digestSize: c,
            multihashSize: u - i,
            size: u,
          };
        }
        static parse(e, t) {
          const [n, r] = u(e, t),
            s = c.decode(r);
          return s._baseCache.set(n, e), s;
        }
      }
      const u = (e, t) => {
          switch (e[0]) {
            case 'Q': {
              const n = t || o.base58btc;
              return [
                o.base58btc.prefix,
                n.decode(`${o.base58btc.prefix}${e}`),
              ];
            }
            case o.base58btc.prefix: {
              const n = t || o.base58btc;
              return [o.base58btc.prefix, n.decode(e)];
            }
            case i.base32.prefix: {
              const n = t || i.base32;
              return [i.base32.prefix, n.decode(e)];
            }
            default:
              if (null == t)
                throw Error(
                  'To parse non base32 or base58btc encoded CID multibase decoder must be provided',
                );
              return [e[0], t.decode(e)];
          }
        },
        l = (e, t, n) => {
          const { prefix: r } = n;
          if (r !== o.base58btc.prefix)
            throw Error(`Cannot string encode V0 in ${n.name} encoding`);
          const s = t.get(r);
          if (null == s) {
            const s = n.encode(e).slice(1);
            return t.set(r, s), s;
          }
          return s;
        },
        f = (e, t, n) => {
          const { prefix: r } = n,
            s = t.get(r);
          if (null == s) {
            const s = n.encode(e);
            return t.set(r, s), s;
          }
          return s;
        },
        h = 112,
        d = 18,
        p = (e, t, n) => {
          const s = r.P$(e),
            o = s + r.P$(t),
            i = new Uint8Array(o + n.byteLength);
          return r.mL(e, i, 0), r.mL(t, i, s), i.set(n, o), i;
        },
        y = Symbol.for('@ipld/js-cid/CID'),
        g = { writable: !1, configurable: !1, enumerable: !0 },
        m = { writable: !1, enumerable: !1, configurable: !1 },
        w = (e, t) => {
          if (!e.test('0.0.0-dev')) throw new Error(t);
          console.warn(t);
        },
        b =
          'CID.isCID(v) is deprecated and will be removed in the next major release.\nFollowing code pattern:\n\nif (CID.isCID(value)) {\n  doSomethingWithCID(value)\n}\n\nIs replaced with:\n\nconst cid = CID.asCID(value)\nif (cid) {\n  // Make sure to use cid instead of value\n  doSomethingWithCID(cid)\n}\n';
    },
    28924: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          create: function () {
            return o;
          },
          decode: function () {
            return i;
          },
          equals: function () {
            return a;
          },
          Digest: function () {
            return c;
          },
        });
      var r = n(95934),
        s = n(15216);
      const o = (e, t) => {
          const n = t.byteLength,
            r = s.P$(e),
            o = r + s.P$(n),
            i = new Uint8Array(o + n);
          return s.mL(e, i, 0), s.mL(n, i, r), i.set(t, o), new c(e, n, t, i);
        },
        i = e => {
          const t = (0, r.oQ)(e),
            [n, o] = s.Jx(t),
            [i, a] = s.Jx(t.subarray(o)),
            u = t.subarray(o + a);
          if (u.byteLength !== i) throw new Error('Incorrect length');
          return new c(n, i, u, t);
        },
        a = (e, t) =>
          e === t ||
          (e.code === t.code &&
            e.size === t.size &&
            (0, r.fS)(e.bytes, t.bytes));
      class c {
        constructor(e, t, n, r) {
          (this.code = e), (this.size = t), (this.digest = n), (this.bytes = r);
        }
      }
    },
    7225: function (e, t, n) {
      'use strict';
      n.d(t, {
        D: function () {
          return s;
        },
      });
      var r = n(28924);
      const s = ({ name: e, code: t, encode: n }) => new o(e, t, n);
      class o {
        constructor(e, t, n) {
          (this.name = e), (this.code = t), (this.encode = n);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array
              ? r.create(this.code, t)
              : t.then(e => r.create(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
    },
    78103: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          identity: function () {
            return i;
          },
        });
      var r = n(95934),
        s = n(28924);
      const o = r.oQ,
        i = {
          code: 0,
          name: 'identity',
          encode: o,
          digest: e => s.create(0, o(e)),
        };
    },
    87232: function (e, t, n) {
      'use strict';
      n.d(t, {
        k0: function () {
          return r.CID;
        },
      });
      var r = n(81362);
      n(15216), n(95934), n(7225), n(28924);
    },
    15216: function (e, t, n) {
      'use strict';
      n.d(t, {
        Jx: function () {
          return g;
        },
        mL: function () {
          return m;
        },
        P$: function () {
          return w;
        },
      });
      var r = function e(t, n, r) {
          n = n || [];
          var o = (r = r || 0);
          for (; t >= s; ) (n[r++] = (255 & t) | 128), (t /= 128);
          for (; -128 & t; ) (n[r++] = (255 & t) | 128), (t >>>= 7);
          return (n[r] = 0 | t), (e.bytes = r - o + 1), n;
        },
        s = Math.pow(2, 31);
      var o = function e(t, n) {
        var r,
          s = 0,
          o = 0,
          i = (n = n || 0),
          a = t.length;
        do {
          if (i >= a)
            throw ((e.bytes = 0), new RangeError('Could not decode varint'));
          (r = t[i++]),
            (s += o < 28 ? (127 & r) << o : (127 & r) * Math.pow(2, o)),
            (o += 7);
        } while (r >= 128);
        return (e.bytes = i - n), s;
      };
      var i = Math.pow(2, 7),
        a = Math.pow(2, 14),
        c = Math.pow(2, 21),
        u = Math.pow(2, 28),
        l = Math.pow(2, 35),
        f = Math.pow(2, 42),
        h = Math.pow(2, 49),
        d = Math.pow(2, 56),
        p = Math.pow(2, 63),
        y = {
          encode: r,
          decode: o,
          encodingLength: function (e) {
            return e < i
              ? 1
              : e < a
              ? 2
              : e < c
              ? 3
              : e < u
              ? 4
              : e < l
              ? 5
              : e < f
              ? 6
              : e < h
              ? 7
              : e < d
              ? 8
              : e < p
              ? 9
              : 10;
          },
        };
      const g = e => [y.decode(e), y.decode.bytes],
        m = (e, t, n = 0) => (y.encode(e, t, n), t),
        w = e => y.encodingLength(e);
    },
    20605: function (e, t, n) {
      'use strict';
      function r(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        const n = new Uint8Array(t);
        let r = 0;
        for (const s of e) n.set(s, r), (r += s.length);
        return n;
      }
      n.r(t),
        n.d(t, {
          concat: function () {
            return r;
          },
        });
    },
    19588: function (e, t, n) {
      'use strict';
      function r(e, t) {
        if (e === t) return !0;
        if (e.byteLength !== t.byteLength) return !1;
        for (let n = 0; n < e.byteLength; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      n.r(t),
        n.d(t, {
          equals: function () {
            return r;
          },
        });
    },
    52217: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          fromString: function () {
            return s;
          },
        });
      var r = n(67645);
      function s(e, t = 'utf8') {
        const n = r.Z[t];
        if (!n) throw new Error(`Unsupported encoding "${t}"`);
        return n.decoder.decode(`${n.prefix}${e}`);
      }
    },
    92263: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          toString: function () {
            return s;
          },
        });
      var r = n(67645);
      function s(e, t = 'utf8') {
        const n = r.Z[t];
        if (!n) throw new Error(`Unsupported encoding "${t}"`);
        return n.encoder.encode(e).substring(1);
      }
    },
    67645: function (e, t, n) {
      'use strict';
      var r = n(91913);
      function s(e, t, n, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: n },
          decoder: { decode: r },
        };
      }
      const o = s(
          'utf8',
          'u',
          e => 'u' + new TextDecoder('utf8').decode(e),
          e => new TextEncoder().encode(e.substring(1)),
        ),
        i = s(
          'ascii',
          'a',
          e => {
            let t = 'a';
            for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
            return t;
          },
          e => {
            e = e.substring(1);
            const t = new Uint8Array(e.length);
            for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
            return t;
          },
        ),
        a = {
          utf8: o,
          'utf-8': o,
          hex: r.gh.base16,
          latin1: i,
          ascii: i,
          binary: i,
          ...r.gh,
        };
      t.Z = a;
    },
  },
]);
