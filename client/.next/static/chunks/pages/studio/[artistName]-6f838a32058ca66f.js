(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [688],
  {
    82341: function (e, t, r) {
      'use strict';
      var n = r(95318);
      t.Z = void 0;
      var u = n(r(64938)),
        o = r(85893),
        a = (0, u.default)(
          (0, o.jsx)('path', {
            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.88 15.76V19h-1.75v-1.29c-.74-.18-2.39-.77-3.02-2.96l1.65-.67c.06.22.58 2.09 2.4 2.09.93 0 1.98-.48 1.98-1.61 0-.96-.7-1.46-2.28-2.03-1.1-.39-3.35-1.03-3.35-3.31 0-.1.01-2.4 2.62-2.96V5h1.75v1.24c1.84.32 2.51 1.79 2.66 2.23l-1.58.67c-.11-.35-.59-1.34-1.9-1.34-.7 0-1.81.37-1.81 1.39 0 .95.86 1.31 2.64 1.9 2.4.83 3.01 2.05 3.01 3.45 0 2.63-2.5 3.13-3.02 3.22z',
          }),
          'Paid',
        );
      t.Z = a;
    },
    73579: function (e, t, r) {
      'use strict';
      var n = r(930);
      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      t.default = function (e, t) {
        var r = a.default,
          n = {
            loading: function (e) {
              e.error, e.isLoading;
              return e.pastDelay, null;
            },
          };
        e instanceof Promise
          ? (n.loader = function () {
              return e;
            })
          : 'function' === typeof e
          ? (n.loader = e)
          : 'object' === typeof e && (n = o(o({}, n), e));
        var u = (n = o(o({}, n), t));
        if (u.suspense)
          throw new Error(
            'Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense',
          );
        if (u.suspense) return r(u);
        n.loadableGenerated &&
          delete (n = o(o({}, n), n.loadableGenerated)).loadableGenerated;
        if ('boolean' === typeof n.ssr) {
          if (!n.ssr) return delete n.ssr, s(r, n);
          delete n.ssr;
        }
        return r(n);
      };
      i(r(67294));
      var a = i(r(23668));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
    },
    3982: function (e, t, r) {
      'use strict';
      var n;
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.LoadableContext = void 0);
      var u = (
        (n = r(67294)) && n.__esModule ? n : { default: n }
      ).default.createContext(null);
      t.LoadableContext = u;
    },
    23668: function (e, t, r) {
      'use strict';
      var n = r(33227),
        u = r(88361),
        o = r(930);
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function s(e, t) {
        var r =
          ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return;
              if ('string' === typeof e) return l(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === r && e.constructor && (r = e.constructor.name);
              if ('Map' === r || 'Set' === r) return Array.from(e);
              if (
                'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return l(e, t);
            })(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              u = function () {};
            return {
              s: u,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: u,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var o,
          a = !0,
          i = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (i = !0), (o = e);
          },
          f: function () {
            try {
              a || null == r.return || r.return();
            } finally {
              if (i) throw o;
            }
          },
        };
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var c,
        f = (c = r(67294)) && c.__esModule ? c : { default: c },
        d = r(67161),
        p = r(3982);
      var b = [],
        y = [],
        v = !1;
      function h(e) {
        var t = e(),
          r = { loading: !0, loaded: null, error: null };
        return (
          (r.promise = t
            .then(function (e) {
              return (r.loading = !1), (r.loaded = e), e;
            })
            .catch(function (e) {
              throw ((r.loading = !1), (r.error = e), e);
            })),
          r
        );
      }
      var _ = (function () {
        function e(t, r) {
          n(this, e),
            (this._loadFn = t),
            (this._opts = r),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          u(e, [
            {
              key: 'promise',
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: 'retry',
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  r = this._opts;
                t.loading &&
                  ('number' === typeof r.delay &&
                    (0 === r.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 });
                        }, r.delay))),
                  'number' === typeof r.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 });
                    }, r.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update({}), e._clearTimeouts();
                    })
                    .catch(function (t) {
                      e._update({}), e._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: '_update',
              value: function (e) {
                (this._state = i(
                  i({}, this._state),
                  {},
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  e,
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: '_clearTimeouts',
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: 'getCurrentValue',
              value: function () {
                return this._state;
              },
            },
            {
              key: 'subscribe',
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]),
          e
        );
      })();
      function m(e) {
        return (function (e, t) {
          var r = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              webpack: null,
              modules: null,
              suspense: !1,
            },
            t,
          );
          r.suspense && (r.lazy = f.default.lazy(r.loader));
          var n = null;
          function u() {
            if (!n) {
              var t = new _(e, r);
              n = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return n.promise();
          }
          if (!v && !r.suspense) {
            var o = r.webpack ? r.webpack() : r.modules;
            o &&
              y.push(function (e) {
                var t,
                  r = s(o);
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var n = t.value;
                    if (-1 !== e.indexOf(n)) return u();
                  }
                } catch (a) {
                  r.e(a);
                } finally {
                  r.f();
                }
              });
          }
          var a = r.suspense
            ? function (e, t) {
                return f.default.createElement(
                  r.lazy,
                  i(i({}, e), {}, { ref: t }),
                );
              }
            : function (e, t) {
                u();
                var o = f.default.useContext(p.LoadableContext),
                  a = d.useSubscription(n);
                return (
                  f.default.useImperativeHandle(
                    t,
                    function () {
                      return { retry: n.retry };
                    },
                    [],
                  ),
                  o &&
                    Array.isArray(r.modules) &&
                    r.modules.forEach(function (e) {
                      o(e);
                    }),
                  f.default.useMemo(
                    function () {
                      return a.loading || a.error
                        ? f.default.createElement(r.loading, {
                            isLoading: a.loading,
                            pastDelay: a.pastDelay,
                            timedOut: a.timedOut,
                            error: a.error,
                            retry: n.retry,
                          })
                        : a.loaded
                        ? f.default.createElement(
                            (function (e) {
                              return e && e.__esModule ? e.default : e;
                            })(a.loaded),
                            e,
                          )
                        : null;
                    },
                    [e, a],
                  )
                );
              };
          return (
            (a.preload = function () {
              return !r.suspense && u();
            }),
            (a.displayName = 'LoadableComponent'),
            f.default.forwardRef(a)
          );
        })(h, e);
      }
      function g(e, t) {
        for (var r = []; e.length; ) {
          var n = e.pop();
          r.push(n(t));
        }
        return Promise.all(r).then(function () {
          if (e.length) return g(e, t);
        });
      }
      (m.preloadAll = function () {
        return new Promise(function (e, t) {
          g(b).then(e, t);
        });
      }),
        (m.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var r = function () {
              return (v = !0), t();
            };
            g(y, e).then(r, r);
          });
        }),
        (window.__NEXT_PRELOADREADY = m.preloadReady);
      var O = m;
      t.default = O;
    },
    11051: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return i;
          },
        });
      r(67294);
      var n = r(2745),
        u = r(5152),
        o = r(85893),
        a = (0, u.default)(
          function () {
            return r.e(627).then(r.bind(r, 4627));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [4627];
              },
            },
          },
        ),
        i = !0;
      t.default = function () {
        return (0, o.jsx)(n.Z, { children: (0, o.jsx)(a, {}) });
      };
    },
    39657: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/studio/[artistName]',
        function () {
          return r(11051);
        },
      ]);
    },
    5152: function (e, t, r) {
      e.exports = r(73579);
    },
    68217: function (e, t, r) {
      'use strict';
      var n = r(96086),
        u = r(67294);
      t.useSubscription = function (e) {
        var t = e.getCurrentValue,
          r = e.subscribe,
          o = u.useState(function () {
            return { getCurrentValue: t, subscribe: r, value: t() };
          });
        e = o[0];
        var a = o[1];
        return (
          (o = e.value),
          (e.getCurrentValue === t && e.subscribe === r) ||
            ((o = t()), a({ getCurrentValue: t, subscribe: r, value: o })),
          u.useDebugValue(o),
          u.useEffect(
            function () {
              function e() {
                if (!u) {
                  var e = t();
                  a(function (u) {
                    return u.getCurrentValue !== t ||
                      u.subscribe !== r ||
                      u.value === e
                      ? u
                      : n({}, u, { value: e });
                  });
                }
              }
              var u = !1,
                o = r(e);
              return (
                e(),
                function () {
                  (u = !0), o();
                }
              );
            },
            [t, r],
          ),
          o
        );
      };
    },
    67161: function (e, t, r) {
      'use strict';
      e.exports = r(68217);
    },
  },
  function (e) {
    e.O(0, [767, 745, 774, 888, 179], function () {
      return (t = 39657), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
