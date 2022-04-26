(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [383],
  {
    3985: function (e, n, t) {
      'use strict';
      var r = t(95318);
      n.Z = void 0;
      var i = r(t(64938)),
        o = t(85893),
        a = (0, i.default)(
          (0, o.jsx)('path', { d: 'M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3z' }),
          'DensityMedium',
        );
      n.Z = a;
    },
    70655: function (e, n, t) {
      'use strict';
      var r = t(95318);
      n.Z = void 0;
      var i = r(t(64938)),
        o = t(85893),
        a = (0, i.default)(
          (0, o.jsx)('path', { d: 'M8 5v14l11-7z' }),
          'PlayArrow',
        );
      n.Z = a;
    },
    95397: function (e, n, t) {
      'use strict';
      var r = t(95318);
      n.Z = void 0;
      var i = r(t(64938)),
        o = t(85893),
        a = (0, i.default)(
          (0, o.jsx)('path', { d: 'm6 18 8.5-6L6 6v12zM16 6v12h2V6h-2z' }),
          'SkipNext',
        );
      n.Z = a;
    },
    82709: function (e, n, t) {
      'use strict';
      var r = t(95318);
      n.Z = void 0;
      var i = r(t(64938)),
        o = t(85893),
        a = (0, i.default)(
          (0, o.jsx)('path', { d: 'M6 6h2v12H6zm3.5 6 8.5 6V6z' }),
          'SkipPrevious',
        );
      n.Z = a;
    },
    34759: function (e, n, t) {
      'use strict';
      t.d(n, {
        N: function () {
          return i;
        },
        i: function () {
          return o;
        },
      });
      var r = t(5361),
        i = function () {
          return { type: r.fU };
        },
        o = function () {
          return { type: r.GK };
        };
    },
    9402: function (e, n, t) {
      'use strict';
      t.d(n, {
        vR: function () {
          return i;
        },
        yI: function () {
          return o;
        },
        cn: function () {
          return a;
        },
        ar: function () {
          return s;
        },
      });
      var r = t(5361),
        i = function () {
          return { type: r.Kx };
        },
        o = function (e) {
          return { type: r.O2, data: e };
        },
        a = function (e) {
          return { type: r.um, data: e };
        },
        s = function (e) {
          return { type: r.bZ, data: e };
        };
    },
    76941: function (e, n, t) {
      'use strict';
      t(67294);
      var r = t(2734),
        i = t(99226),
        o = t(57709),
        a = t(60076),
        s = t(63931),
        c = t(53640),
        l = t(69587),
        u = t(16003),
        d = t(85893),
        f = { PaperProps: { style: { maxHeight: 224, width: 250 } } },
        x = [
          '\ubc1c\ub77c\ub4dc',
          '\ub304\uc2a4',
          '\ub7a9/\ud799\ud569',
          'R&B/Soul',
          '\uc778\ub514\uc74c\uc545',
          '\ub85d/\uba54\ud0c8',
          '\ud2b8\ub85c\ud2b8',
          '\ud3ec\ud06c/\ube14\ub8e8\uc2a4',
        ],
        p = function (e, n, t) {
          return {
            fontWeight:
              -1 === n.indexOf(e)
                ? t.typography.fontWeightRegular
                : t.typography.fontWeightMedium,
          };
        };
      n.Z = function (e) {
        var n = e.value,
          t = e.func,
          h = (0, r.Z)();
        return (0, d.jsx)('div', {
          children: (0, d.jsxs)(c.Z, {
            sx: { m: 0, width: 320, borderRadius: '50%' },
            children: [
              (0, d.jsx)(a.Z, {
                id: 'demo-multiple-chip-label',
                children: '\uc7a5\ub974',
              }),
              (0, d.jsx)(l.Z, {
                labelId: 'demo-multiple-chip-label',
                id: 'demo-multiple-chip',
                multiple: !0,
                value: n,
                onChange: t,
                input: (0, d.jsx)(o.Z, {
                  id: 'select-multiple-chip',
                  label: 'Chip',
                }),
                renderValue: function (e) {
                  return (0, d.jsx)(i.Z, {
                    sx: { display: 'flex', flexWrap: 'wrap', gap: 0.5 },
                    children: e.map(function (e) {
                      return (0, d.jsx)(u.Z, { label: e }, e);
                    }),
                  });
                },
                MenuProps: f,
                children: x.map(function (e) {
                  return (0,
                  d.jsx)(s.Z, { value: e, style: p(e, n, h), children: e }, e);
                }),
              }),
            ],
          }),
        });
      };
    },
    45943: function (e, n, t) {
      'use strict';
      var r,
        i = t(59499),
        o = t(71383),
        a = (t(67294), t(48420)),
        s = t(98801),
        c = t(80085),
        l = t(37791),
        u = t(13264),
        d = t(85893);
      function f(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function x(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? f(Object(t), !0).forEach(function (n) {
                (0, i.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
        }
        return e;
      }
      var p = (0, u.Z)('button')(function () {
          return "\n  font-family: IBM Plex Sans, sans-serif;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n  min-height: calc(1.5em + 22px);\n  min-width: 320px;\n  background: #fff;\n  border: 1px solid #CDD2D7;\n  border-radius: 0.4em;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  padding: 10px;\n  text-align: left;\n  line-height: 2.5;\n  color: #1A2027;\n\n  &:hover {\n    background: #E7EBF0;\n    border-color: #B2BAC2;\n  }\n\n  &::after {\n    content: '\u25be';\n    float: right;\n  }\n  ";
        }),
        h = (0, u.Z)('ul')(function () {
          return '\n  font-family: IBM Plex Sans, sans-serif;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n  padding: 5px;\n  margin: 0;\n  margin-bottom: 1px;\n  min-width: 320px;\n  background: #fff;\n  border: 1px solid #CDD2D7;\n  border-radius: 0.5em;\n  color: #1A2027;\n  overflow: auto;\n  outline: 0px;\n  ';
        }),
        m = (0, u.Z)(s.Z)(function () {
          return '\n  list-style: none;\n  padding: 8px;\n  border-radius: 0.45em;\n  cursor: default;\n\n  &:last-of-type {\n    border-bottom: none;\n  }\n\n  &.'
            .concat(
              c.Z.selected,
              ' {\n    background-color: #DAECFF;\n    color: #003A75;\n  }\n\n  &.',
            )
            .concat(
              c.Z.highlighted,
              ' {\n    background-color: #E7EBF0;\n    color: #1A2027;\n  }\n\n  &.',
            )
            .concat(c.Z.highlighted, '.')
            .concat(
              c.Z.selected,
              ' {\n    background-color: #DAECFF;\n    color:#003A75;\n  }\n\n  &.',
            )
            .concat(
              c.Z.disabled,
              ' {\n    color: #B2BAC2;\n  }\n\n  &:hover:not(.',
            )
            .concat(
              c.Z.disabled,
              ') {\n    background-color: #E7EBF0;\n    color: #1A2027;\n  }\n  ',
            );
        }),
        j = (0, u.Z)(l.Z)(r || (r = (0, o.Z)(['\n  z-index: 1;\n']))),
        g = function (e) {
          var n = x({ Root: p, Listbox: h, Popper: j }, e.components);
          return (0, d.jsx)(a.Z, x(x({}, e), {}, { components: n }));
        };
      n.Z = function (e) {
        var n = e.value,
          t = e.func;
        return (0, d.jsx)('div', {
          id: 'nationality',
          style: { display: 'inline-block' },
          children: (0, d.jsxs)(g, {
            value: n,
            onChange: t,
            children: [
              (0, d.jsx)(m, { value: 0, children: '\ub300\ud55c\ubbfc\uad6d' }),
              (0, d.jsx)(m, { value: 1, children: 'English' }),
            ],
          }),
        });
      };
    },
    75934: function (e, n, t) {
      'use strict';
      var r = t(59499),
        i = t(4730),
        o = t(85893),
        a = ['children', 'value', 'index'];
      function s(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function c(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? s(Object(t), !0).forEach(function (n) {
                (0, r.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
        }
        return e;
      }
      var l = t(38818),
        u = l.Typography,
        d = l.Box;
      n.Z = function (e) {
        var n = e.children,
          t = e.value,
          r = e.index,
          s = (0, i.Z)(e, a);
        return (0, o.jsx)(
          u,
          c(
            c(
              {
                component: 'div',
                role: 'tabpanel',
                hidden: t !== r,
                id: 'action-tabpanel-'.concat(r),
                'aria-labelledby': 'action-tab-'.concat(r),
              },
              s,
            ),
            {},
            {
              children: t === r && (0, o.jsx)(d, { sx: { p: 3 }, children: n }),
            },
          ),
        );
      };
    },
    28222: function (e, n, t) {
      'use strict';
      var r = t(22715),
        i = t(45697),
        o = t.n(i),
        a = (t(67294), t(85893)),
        s = function (e) {
          var n = e.label,
            t = e.value,
            i = e.func;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(r.Z, {
              label: n,
              variant: 'outlined',
              value: t,
              onChange: i,
              fullWidth: !0,
              sx: { display: 'block', margin: '1px', width: '320px' },
            }),
          });
        };
      (s.prototype = {
        label: o().string.isRequired,
        value: o().string.isRequired,
        func: o().func.isRequired,
      }),
        (n.Z = s);
    },
    95244: function (e, n, t) {
      'use strict';
      t.d(n, {
        X: function () {
          return i;
        },
      });
      var r = t(67294),
        i = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = (0, r.useState)(e),
            t = n[0],
            i = n[1],
            o = (0, r.useCallback)(function () {
              i(!0);
            }, []),
            a = (0, r.useCallback)(function () {
              i(!1);
            }, []);
          return [t, o, a];
        };
    },
    23551: function (e, n, t) {
      'use strict';
      t.d(n, {
        W: function () {
          return i;
        },
        G: function () {
          return o;
        },
      });
      var r = t(67294),
        i = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            n = (0, r.useState)(e),
            t = n[0],
            i = n[1],
            o = (0, r.useCallback)(
              function (e) {
                i(e.target.value);
              },
              [i],
            );
          return [t, o, i];
        },
        o = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            n = (0, r.useState)(e),
            t = n[0],
            i = n[1],
            o = function (e) {
              var n = e.target.value;
              i('string' === typeof n ? n.split(',') : n);
            };
          return [t, o, i];
        };
    },
    98520: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return ye;
          },
          default: function () {
            return Oe;
          },
        });
      var r = t(67294),
        i = t(99226),
        o = {
          streamingContainer: {
            width: '100%',
            minWidth: '1040px',
            height: '100%',
            display: 'flex',
          },
          streamingSideBarContainer: { flex: 1 },
          streamingWrapper: { flex: 10 },
        },
        a = t(59499),
        s = t(18843),
        c = t(29861),
        l = t(48885),
        u = t(59334),
        d = t(67720),
        f = t(69397),
        x = t(19058),
        p = t(41664),
        h = t(3985),
        m = t(85893);
      function j(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function g(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? j(Object(t), !0).forEach(function (n) {
                (0, a.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
        }
        return e;
      }
      function v() {
        var e,
          n = (0, r.useState)({ left: !1 }),
          t = n[0],
          o = n[1],
          j = function (e, n) {
            return function (r) {
              ('keydown' !== r.type ||
                ('Tab' !== r.key && 'Shift' !== r.key)) &&
                o(g(g({}, t), {}, (0, a.Z)({}, e, n)));
            };
          };
        return (0, m.jsx)(i.Z, {
          children: (0, m.jsxs)(
            r.Fragment,
            {
              children: [
                (0, m.jsx)(f.Z, {
                  onClick: j('left', !0),
                  children: (0, m.jsx)(h.Z, {
                    fontSize: 'medium',
                    sx: { color: 'white', marginLeft: '0px', marginTop: '0px' },
                  }),
                }),
                (0, m.jsx)(x.ZP, {
                  anchor: 'left',
                  open: t.left,
                  onClose: j('left', !1),
                  children:
                    ((e = 'left'),
                    (0, m.jsx)(i.Z, {
                      sx: {
                        width: 250,
                        backgroundColor: 'black',
                        height: '100%',
                      },
                      role: 'presentation',
                      onClick: j(e, !1),
                      onKeyDown: j(e, !1),
                      children: (0, m.jsxs)(s.Z, {
                        children: [
                          (0, m.jsx)(p.default, {
                            href: '/',
                            children: (0, m.jsxs)(
                              c.ZP,
                              {
                                button: !0,
                                sx: { color: 'white', fontSize: '100px' },
                                children: [
                                  (0, m.jsx)(l.Z, {
                                    children: (0, m.jsx)('img', {
                                      width: '65px',
                                      height: '65px',
                                      src: '/logoW.png',
                                      alt: 'logo',
                                      style: { marginRight: '10px' },
                                    }),
                                  }),
                                  (0, m.jsx)(u.Z, { primary: 'Home' }),
                                ],
                              },
                              'Home',
                            ),
                          }),
                          (0, m.jsx)(d.Z, {}),
                          [
                            { text: 'Search', move: 'search' },
                            { text: 'My Library', move: 'mypage' },
                            { text: 'My Favorite', move: 'myfavorite' },
                          ].map(function (e, n) {
                            return (0,
                            m.jsx)(p.default, { href: '/'.concat(e.move), children: (0, m.jsx)(c.ZP, { button: !0, sx: { color: 'white', fontSize: '100px' }, children: (0, m.jsx)(u.Z, { primary: e.text }) }) }, e.text);
                          }),
                        ],
                      }),
                    })),
                }),
              ],
            },
            'left',
          ),
        });
      }
      var b = t(50029),
        Z = t(87794),
        y = t.n(Z),
        O = t(69001),
        k = t(2734),
        w = t(62623),
        P = t(28492),
        S = t(44781),
        C = t(54799),
        D = t(23972),
        E = t(82709),
        F = t(70655),
        z = t(95397),
        M = function (e) {
          var n = e.musicTitle,
            t = e.albumCover,
            r = e.artistName,
            o = (0, k.Z)();
          return (0, m.jsxs)(w.Z, {
            sx: { display: 'inline-block' },
            children: [
              (0, m.jsxs)(i.Z, {
                sx: { display: 'flex', flexDirection: 'row' },
                children: [
                  (0, m.jsxs)(P.Z, {
                    sx: { flex: '1 0 auto' },
                    children: [
                      (0, m.jsx)(D.Z, {
                        component: 'div',
                        variant: 'h5',
                        children: n,
                      }),
                      (0, m.jsx)(D.Z, {
                        variant: 'subtitle1',
                        color: 'text.secondary',
                        component: 'div',
                        style: { cursor: 'pointer' },
                        children: (0, m.jsx)(p.default, {
                          href: '/studio/'.concat(r),
                          children: r,
                        }),
                      }),
                    ],
                  }),
                  (0, m.jsxs)(i.Z, {
                    sx: { display: 'flex', alignItems: 'center', pl: 1, pb: 1 },
                    children: [
                      (0, m.jsx)(C.Z, {
                        'aria-label': 'previous',
                        children:
                          'rtl' === o.direction
                            ? (0, m.jsx)(z.Z, {})
                            : (0, m.jsx)(E.Z, {}),
                      }),
                      (0, m.jsx)(C.Z, {
                        'aria-label': 'play/pause',
                        children: (0, m.jsx)(F.Z, {
                          sx: { height: 38, width: 38 },
                        }),
                      }),
                      (0, m.jsx)(C.Z, {
                        'aria-label': 'next',
                        children:
                          'rtl' === o.direction
                            ? (0, m.jsx)(E.Z, {})
                            : (0, m.jsx)(z.Z, {}),
                      }),
                    ],
                  }),
                ],
              }),
              (0, m.jsx)(S.Z, {
                component: 'img',
                sx: { width: '200px' },
                image: t,
                alt: ''.concat(n, ' album Cover'),
              }),
            ],
          });
        },
        A = { title: { fontSize: '30px', fontWeight: '600', color: 'white' } },
        L = function () {
          var e = (0, r.useState)([]),
            n = e[0],
            t = e[1],
            o = (function () {
              var e = (0, b.Z)(
                y().mark(function e() {
                  var n, r, i, o, a;
                  return y().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              O.sx.methods.getLatestMusicToken().call()
                            );
                          case 3:
                            (n = e.sent), (r = []), (i = 0);
                          case 6:
                            if (!(i < n.length)) {
                              e.next = 17;
                              break;
                            }
                            return (
                              (e.next = 9),
                              fetch('https://ipfs.io/ipfs/'.concat(n[i]))
                            );
                          case 9:
                            return (o = e.sent), (e.next = 12), o.json();
                          case 12:
                            (a = e.sent), r.push(a);
                          case 14:
                            i++, (e.next = 6);
                            break;
                          case 17:
                            t(r), (e.next = 23);
                            break;
                          case 20:
                            (e.prev = 20),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0);
                          case 23:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 20]],
                  );
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            (0, r.useEffect)(
              function () {
                0 === n.length && o();
              },
              [n],
            ),
            (0, m.jsxs)(i.Z, {
              children: [
                (0, m.jsx)(i.Z, {
                  children: (0, m.jsx)(i.Z, {
                    sx: A.title,
                    children: '\ucd5c\uc2e0 \ub4f1\ub85d \uc74c\uc545',
                  }),
                }),
                (0, m.jsx)(d.Z, {
                  sx: { background: 'white', margin: '10px 0' },
                }),
                (0, m.jsx)(i.Z, {
                  children: (0, m.jsx)(i.Z, {
                    children:
                      0 !== n.length &&
                      (0, m.jsx)(m.Fragment, {
                        children: n.map(function (e, n) {
                          return (0,
                          m.jsx)(M, { musicTitle: ''.concat(e.properties.dataToSubmit.title), albumCover: 'https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/'.concat(e.properties.S3AlbumCover), artistName: ''.concat(e.properties.dataToSubmit.artist) }, n);
                        }),
                      }),
                  }),
                }),
              ],
            })
          );
        },
        I = t(25617),
        T = function () {
          var e = (0, I.v9)(function (e) {
            return e.user;
          }).userData;
          return (0, m.jsxs)(i.Z, {
            sx: o.streamingContainer,
            children: [
              (0, m.jsx)(i.Z, {
                sx: o.streamingSideBarContainer,
                children: (0, m.jsx)(v, {}),
              }),
              (0, m.jsx)(i.Z, {
                sx: o.streamingWrapper,
                children: (0, m.jsx)(L, { userData: e }),
              }),
              (0, m.jsx)(i.Z, { sx: { flexDirection: '' } }),
            ],
          });
        },
        R = t(89206),
        _ = t(83808),
        B = t(26989),
        N = t(75316),
        W = t(2632),
        H = t(10167),
        U = t(72640),
        G = t(64666),
        X = t(77314),
        q = t(54880),
        K = t(9402),
        V = t(23551),
        Y = function () {
          var e = (0, r.useMemo)(function () {
            return { color: '#808080', marginTop: '8px' };
          }, []);
          return (0, m.jsx)(m.Fragment, {
            children: (0, m.jsx)(f.Z, {
              style: e,
              type: 'submit',
              variant: 'text',
              children: '\uac00\uc785\ud558\uae30',
            }),
          });
        },
        J = t(45943),
        Q = t(76941),
        $ = t(75934),
        ee = t(28222);
      function ne(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function te(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? ne(Object(t), !0).forEach(function (n) {
                (0, a.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ne(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
        }
        return e;
      }
      var re = function (e) {
          var n = e.open,
            t = e.setOpen,
            i = e.id,
            o = (0, I.I0)(),
            a = (0, I.v9)(function (e) {
              return e.user;
            }),
            s = (0, q.a)(),
            c = (0, V.W)(''),
            l = (0, U.Z)(c, 3),
            u = l[0],
            d = l[1],
            f = l[2],
            x = (0, V.G)([]),
            p = (0, U.Z)(x, 3),
            h = p[0],
            j = p[1],
            g = p[2],
            v = (0, r.useState)(0),
            b = v[0],
            Z = v[1],
            y = (0, r.useState)(0),
            O = y[0],
            k = y[1];
          (0, r.useEffect)(
            function () {
              a.registerUserError && alert(a.registerUserError),
                a.registerUserDone &&
                  (alert(
                    '\ud68c\uc6d0\uac00\uc785\uc5d0 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4.',
                  ),
                  f(''),
                  g([]),
                  Z(0),
                  k(0)),
                t(!1);
            },
            [a, t, f, g],
          );
          var w = (0, r.useCallback)(
              function () {
                return t(!1);
              },
              [t],
            ),
            P = (0, r.useCallback)(
              function (e) {
                e.preventDefault();
                var n = { metamask: i, genre: h, nationality: b };
                u && (n = te(te({}, n), {}, { name: u, role: '1' })),
                  o((0, K.yI)(n));
              },
              [o, u, h, b, i],
            );
          return (0, m.jsx)(m.Fragment, {
            children: (0, m.jsxs)(G.Z, {
              open: n,
              onClose: w,
              PaperProps: { sx: { width: '40%', height: '43%' } },
              'aria-labelledby': 'draggable-dialog-title',
              children: [
                (0, m.jsxs)(B.Z, {
                  value: O,
                  onChange: function (e, n) {
                    k(n);
                  },
                  indicatorColor: 'primary',
                  textColor: 'primary',
                  variant: 'fullWidth',
                  TabIndicatorProps: { style: { background: 'gray' } },
                  'aria-label': 'action tabs example',
                  children: [
                    (0, m.jsx)(N.Z, {
                      label: (0, m.jsx)('span', {
                        style: { color: 'black' },
                        children: 'User',
                      }),
                    }),
                    (0, m.jsx)(N.Z, {
                      label: (0, m.jsx)('span', {
                        style: { color: 'black' },
                        children: 'Artist',
                      }),
                    }),
                  ],
                }),
                (0, m.jsxs)(X.ZP, {
                  axis: 'rtl' === s.direction ? 'x-reverse' : 'x',
                  index: O,
                  onChangeIndex: function (e) {
                    k(e);
                  },
                  children: [
                    (0, m.jsx)($.Z, {
                      value: O,
                      index: 0,
                      dir: s.direction,
                      children: (0, m.jsxs)('form', {
                        onSubmit: P,
                        children: [
                          (0, m.jsx)(J.Z, { value: b, func: Z }),
                          (0, m.jsx)(Q.Z, { value: h, func: j }),
                          (0, m.jsx)(Y, {}),
                        ],
                      }),
                    }),
                    (0, m.jsx)($.Z, {
                      value: O,
                      index: 1,
                      dir: s.direction,
                      children: (0, m.jsxs)('form', {
                        onSubmit: P,
                        children: [
                          (0, m.jsx)(ee.Z, {
                            label: '\uc544\ud2f0\uc2a4\ud2b8 \uba85',
                            value: u,
                            func: d,
                          }),
                          (0, m.jsx)(J.Z, { value: b, func: Z }),
                          (0, m.jsx)(Q.Z, { value: h, func: j }),
                          (0, m.jsx)(Y, {}),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        ie = t(21023),
        oe = t(87952),
        ae = t(24486),
        se = t(63931),
        ce = t(16975),
        le = t(56478),
        ue = t(18377),
        de = t(39029),
        fe = function () {
          var e = (0, I.I0)(),
            n = (0, r.useCallback)(
              function () {
                e((0, K.vR)());
              },
              [e],
            );
          return (0, m.jsxs)(se.Z, {
            onClick: n,
            children: [
              (0, m.jsx)(l.Z, {
                children: (0, m.jsx)(de.Z, { fontSize: 'small' }),
              }),
              (0, m.jsx)(ue.Z, { component: 'span', children: 'Logout' }),
            ],
          });
        },
        xe = function () {
          var e = (0, I.v9)(function (e) {
              return e.user;
            }).userData,
            n = e.img;
          return (0, m.jsx)(p.default, {
            href: '/mypage',
            children: (0, m.jsx)(se.Z, {
              children: n
                ? (0, m.jsxs)(m.Fragment, {
                    children: [
                      (0, m.jsx)(oe.Z, { src: e.img, alt: 'Avatar' }),
                      e.name
                        ? (0, m.jsx)(m.Fragment, { children: e.name })
                        : (0, m.jsx)(m.Fragment, { children: 'USER' }),
                    ],
                  })
                : (0, m.jsxs)(m.Fragment, {
                    children: [
                      (0, m.jsx)(oe.Z, {
                        src: 'https://avatars.dicebear.com/api/gridy/'.concat(
                          e.metamask,
                          '.svg',
                        ),
                      }),
                      e.name,
                    ],
                  }),
            }),
          });
        },
        pe = function () {
          var e = (0, I.v9)(function (e) {
              return e.user;
            }).userData,
            n = (0, r.useState)(null),
            t = n[0],
            o = n[1],
            a = Boolean(t),
            s = function () {
              o(null);
            };
          return (0, m.jsxs)(r.Fragment, {
            children: [
              (0, m.jsx)(i.Z, {
                sx: {
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'center',
                },
                children: (0, m.jsx)(ie.Z, {
                  title: 'Account settings',
                  children: (0, m.jsx)(C.Z, {
                    onClick: function (e) {
                      o(e.currentTarget);
                    },
                    size: 'small',
                    sx: { ml: 2 },
                    'aria-controls': a ? 'account-menu' : void 0,
                    'aria-haspopup': 'true',
                    'aria-expanded': a ? 'true' : void 0,
                    children: e.img
                      ? (0, m.jsx)(oe.Z, { src: e.img, alt: 'Avatar' })
                      : (0, m.jsx)(oe.Z, {
                          src: 'https://avatars.dicebear.com/api/gridy/'.concat(
                            e.metamask,
                            '.svg',
                          ),
                        }),
                  }),
                }),
              }),
              (0, m.jsxs)(ae.Z, {
                anchorEl: t,
                id: 'account-menu',
                open: a,
                onClose: s,
                onClick: s,
                PaperProps: {
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                },
                transformOrigin: { horizontal: 'right', vertical: 'top' },
                anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
                children: [
                  (0, m.jsx)(xe, {}),
                  (0, m.jsx)(d.Z, {}),
                  (0, m.jsx)(p.default, {
                    href: '/mypage/mynft',
                    children: (0, m.jsxs)(se.Z, {
                      children: [
                        (0, m.jsx)(l.Z, {
                          children: (0, m.jsx)(ce.Z, { fontSize: 'small' }),
                        }),
                        'My NFT',
                      ],
                    }),
                  }),
                  (0, m.jsxs)(se.Z, {
                    children: [
                      (0, m.jsx)(l.Z, {
                        children: (0, m.jsx)(le.Z, { fontSize: 'small' }),
                      }),
                      'Listening History',
                    ],
                  }),
                  (0, m.jsx)(fe, {}),
                ],
              }),
            ],
          });
        },
        he = t(34759),
        me = t(11163),
        je = t(95244),
        ge = function (e) {
          var n = e.value,
            t = e.func,
            i = (0, je.X)(!1),
            o = (0, U.Z)(i, 3),
            a = o[0],
            s = o[1],
            c = o[2],
            l = (0, r.useMemo)(function () {
              return { color: '#FFFFFF' };
            }, []),
            u = (0, r.useMemo)(function () {
              return { color: '#808080' };
            }, []);
          return (0, m.jsx)(m.Fragment, {
            children: (0, m.jsx)(f.Z, {
              onMouseOver: s,
              onMouseOut: c,
              style: a ? u : l,
              variant: 'text',
              onClick: t,
              children: n,
            }),
          });
        },
        ve = function (e) {
          var n = e.metamaskLogin,
            t = e.setMetamaskLogin,
            i = e.metaopenfunc,
            o = (0, I.I0)(),
            a = (0, I.v9)(function (e) {
              return e.metamask;
            }),
            s = (0, I.v9)(function (e) {
              return e.user;
            });
          (0, r.useEffect)(
            function () {
              a.metamaskLoginLoading && null == a.metamaskData && t(!0),
                null !== a.metamaskData && a.metamaskLoginDone && t(!1);
            },
            [a, t],
          ),
            (0, r.useEffect)(
              function () {
                s.logInUserError && alert(s.logInUserError);
              },
              [s],
            );
          var c = (0, r.useCallback)(
            function () {
              try {
                o((0, he.i)());
              } catch (e) {
                console.error(e);
              }
            },
            [o],
          );
          return (0, m.jsx)(m.Fragment, {
            children: n
              ? (0, m.jsx)('div', {
                  style: { marginLeft: 'auto' },
                  children: (0, m.jsx)(ge, {
                    value:
                      '\uba54\ud0c0\ub9c8\uc2a4\ud06c\ub97c \uba3c\uc800 \ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694!',
                    func: function () {
                      me.default.reload();
                    },
                  }),
                })
              : (0, m.jsxs)(m.Fragment, {
                  children: [
                    (0, m.jsx)('div', {
                      style: { marginLeft: 'auto' },
                      children: (0, m.jsx)(ge, { value: 'Login', func: c }),
                    }),
                    (0, m.jsx)(ge, { value: 'Register', func: i }),
                  ],
                }),
          });
        },
        be = function () {
          var e = (0, I.I0)(),
            n = (0, I.v9)(function (e) {
              return e.user;
            }).userData,
            t = (0, I.v9)(function (e) {
              return e.metamask;
            }),
            i = (0, r.useState)(!1),
            o = i[0],
            a = i[1],
            s = (0, r.useState)(!1),
            c = s[0],
            l = s[1];
          (0, r.useEffect)(
            function () {
              t.metamaskLoading && null == t.metamaskData && l(!0),
                null !== t.metamaskData && t.metamaskDone && (l(!1), a(!0));
            },
            [t],
          );
          var u = (0, r.useCallback)(
            function () {
              try {
                return void e((0, he.N)());
              } catch (n) {
                console.error(n);
              }
            },
            [e],
          );
          return (0, m.jsx)(m.Fragment, {
            children: (0, m.jsxs)(R.Z, {
              sx: {
                padding: '10px 20px ',
                background: 'transparent',
                height: '100px',
              },
              elevation: 0,
              children: [
                (0, m.jsxs)(_.Z, {
                  sx: { paddingRight: '20px' },
                  children: [
                    (0, m.jsx)(p.default, {
                      href: '/',
                      children: (0, m.jsx)('img', {
                        width: '80px',
                        height: '80px',
                        src: '/logoW.png',
                        alt: 'logo',
                        style: { cursor: 'pointer', marginRight: '30px' },
                      }),
                    }),
                    (0, m.jsxs)(B.Z, {
                      textColor: 'inherit',
                      value: !1,
                      children: [
                        (0, m.jsx)(p.default, {
                          href: '/streaming',
                          children: (0, m.jsx)(N.Z, {
                            icon: (0, m.jsx)(W.Z, {}),
                            iconPosition: 'start',
                            label: 'STREAMING',
                            sx: { fontSize: '18px' },
                          }),
                        }),
                        (0, m.jsx)(p.default, {
                          href: '/nft',
                          children: (0, m.jsx)(N.Z, {
                            icon: (0, m.jsx)(H.Z, {}),
                            iconPosition: 'start',
                            label: 'NFT',
                            sx: { fontSize: '18px' },
                          }),
                        }),
                      ],
                    }),
                    n
                      ? (0, m.jsx)('div', {
                          style: { marginLeft: 'auto', paddingRight: '20px' },
                          children: (0, m.jsx)(pe, {}),
                        })
                      : (0, m.jsx)(ve, {
                          metamaskLogin: c,
                          setMetamaskLogin: l,
                          metaopenfunc: u,
                        }),
                  ],
                }),
                (0, m.jsx)(re, { id: t.metamaskData, setOpen: a, open: o }),
              ],
            }),
          });
        },
        Ze = function (e) {
          var n = e.children;
          return (0, m.jsxs)(i.Z, {
            sx: { display: 'inline-block', width: '100%' },
            children: [
              (0, m.jsx)(be, {}),
              (0, m.jsx)(i.Z, { style: { marginTop: '100px' }, children: n }),
            ],
          });
        },
        ye = !0,
        Oe = function () {
          return (0, m.jsx)(Ze, { children: (0, m.jsx)(T, {}) });
        };
    },
    31401: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/streaming',
        function () {
          return t(98520);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [767, 774, 888, 179], function () {
      return (n = 31401), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
