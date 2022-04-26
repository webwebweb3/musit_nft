'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [195],
  {
    75341: function (n, e, t) {
      var r = t(95318);
      e.Z = void 0;
      var i = r(t(64938)),
        o = t(85893),
        a = (0, i.default)(
          (0, o.jsx)('path', {
            d: 'm5.2494 8.0688 2.83-2.8269 14.1343 14.15-2.83 2.8269zm4.2363-4.2415 2.828-2.8289 5.6577 5.656-2.828 2.8289zM.9989 12.3147l2.8284-2.8285 5.6569 5.6569-2.8285 2.8284zM1 21h12v2H1z',
          }),
          'Gavel',
        );
      e.Z = a;
    },
    57563: function (n, e, t) {
      var r = t(95318);
      e.Z = void 0;
      var i = r(t(64938)),
        o = t(85893),
        a = (0, i.default)(
          (0, o.jsx)('path', {
            d: 'm21.9 8.89-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89zm-2.99-3.9 1.05 4.37c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07-.22.26-.54.41-.95.41-.67 0-1.22-.59-1.22-1.31V5zM8.49 9.52 9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41-.25-.29-.37-.68-.33-1.07zm-4.45-.16L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.27-.32-.36-.75-.26-1.17zM5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19H5z',
          }),
          'Storefront',
        );
      e.Z = a;
    },
    34759: function (n, e, t) {
      t.d(e, {
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
    9402: function (n, e, t) {
      t.d(e, {
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
          return c;
        },
      });
      var r = t(5361),
        i = function () {
          return { type: r.Kx };
        },
        o = function (n) {
          return { type: r.O2, data: n };
        },
        a = function (n) {
          return { type: r.um, data: n };
        },
        c = function (n) {
          return { type: r.bZ, data: n };
        };
    },
    76941: function (n, e, t) {
      t(67294);
      var r = t(2734),
        i = t(99226),
        o = t(57709),
        a = t(60076),
        c = t(63931),
        l = t(53640),
        s = t(69587),
        u = t(16003),
        d = t(85893),
        f = { PaperProps: { style: { maxHeight: 224, width: 250 } } },
        p = [
          '\ubc1c\ub77c\ub4dc',
          '\ub304\uc2a4',
          '\ub7a9/\ud799\ud569',
          'R&B/Soul',
          '\uc778\ub514\uc74c\uc545',
          '\ub85d/\uba54\ud0c8',
          '\ud2b8\ub85c\ud2b8',
          '\ud3ec\ud06c/\ube14\ub8e8\uc2a4',
        ],
        x = function (n, e, t) {
          return {
            fontWeight:
              -1 === e.indexOf(n)
                ? t.typography.fontWeightRegular
                : t.typography.fontWeightMedium,
          };
        };
      e.Z = function (n) {
        var e = n.value,
          t = n.func,
          h = (0, r.Z)();
        return (0, d.jsx)('div', {
          children: (0, d.jsxs)(l.Z, {
            sx: { m: 0, width: 320, borderRadius: '50%' },
            children: [
              (0, d.jsx)(a.Z, {
                id: 'demo-multiple-chip-label',
                children: '\uc7a5\ub974',
              }),
              (0, d.jsx)(s.Z, {
                labelId: 'demo-multiple-chip-label',
                id: 'demo-multiple-chip',
                multiple: !0,
                value: e,
                onChange: t,
                input: (0, d.jsx)(o.Z, {
                  id: 'select-multiple-chip',
                  label: 'Chip',
                }),
                renderValue: function (n) {
                  return (0, d.jsx)(i.Z, {
                    sx: { display: 'flex', flexWrap: 'wrap', gap: 0.5 },
                    children: n.map(function (n) {
                      return (0, d.jsx)(u.Z, { label: n }, n);
                    }),
                  });
                },
                MenuProps: f,
                children: p.map(function (n) {
                  return (0,
                  d.jsx)(c.Z, { value: n, style: x(n, e, h), children: n }, n);
                }),
              }),
            ],
          }),
        });
      };
    },
    45943: function (n, e, t) {
      var r,
        i = t(59499),
        o = t(71383),
        a = (t(67294), t(48420)),
        c = t(98801),
        l = t(80085),
        s = t(37791),
        u = t(13264),
        d = t(85893);
      function f(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function p(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(t), !0).forEach(function (e) {
                (0, i.Z)(n, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (e) {
                Object.defineProperty(
                  n,
                  e,
                  Object.getOwnPropertyDescriptor(t, e),
                );
              });
        }
        return n;
      }
      var x = (0, u.Z)('button')(function () {
          return "\n  font-family: IBM Plex Sans, sans-serif;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n  min-height: calc(1.5em + 22px);\n  min-width: 320px;\n  background: #fff;\n  border: 1px solid #CDD2D7;\n  border-radius: 0.4em;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  padding: 10px;\n  text-align: left;\n  line-height: 2.5;\n  color: #1A2027;\n\n  &:hover {\n    background: #E7EBF0;\n    border-color: #B2BAC2;\n  }\n\n  &::after {\n    content: '\u25be';\n    float: right;\n  }\n  ";
        }),
        h = (0, u.Z)('ul')(function () {
          return '\n  font-family: IBM Plex Sans, sans-serif;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n  padding: 5px;\n  margin: 0;\n  margin-bottom: 1px;\n  min-width: 320px;\n  background: #fff;\n  border: 1px solid #CDD2D7;\n  border-radius: 0.5em;\n  color: #1A2027;\n  overflow: auto;\n  outline: 0px;\n  ';
        }),
        g = (0, u.Z)(c.Z)(function () {
          return '\n  list-style: none;\n  padding: 8px;\n  border-radius: 0.45em;\n  cursor: default;\n\n  &:last-of-type {\n    border-bottom: none;\n  }\n\n  &.'
            .concat(
              l.Z.selected,
              ' {\n    background-color: #DAECFF;\n    color: #003A75;\n  }\n\n  &.',
            )
            .concat(
              l.Z.highlighted,
              ' {\n    background-color: #E7EBF0;\n    color: #1A2027;\n  }\n\n  &.',
            )
            .concat(l.Z.highlighted, '.')
            .concat(
              l.Z.selected,
              ' {\n    background-color: #DAECFF;\n    color:#003A75;\n  }\n\n  &.',
            )
            .concat(
              l.Z.disabled,
              ' {\n    color: #B2BAC2;\n  }\n\n  &:hover:not(.',
            )
            .concat(
              l.Z.disabled,
              ') {\n    background-color: #E7EBF0;\n    color: #1A2027;\n  }\n  ',
            );
        }),
        m = (0, u.Z)(s.Z)(r || (r = (0, o.Z)(['\n  z-index: 1;\n']))),
        j = function (n) {
          var e = p({ Root: x, Listbox: h, Popper: m }, n.components);
          return (0, d.jsx)(a.Z, p(p({}, n), {}, { components: e }));
        };
      e.Z = function (n) {
        var e = n.value,
          t = n.func;
        return (0, d.jsx)('div', {
          id: 'nationality',
          style: { display: 'inline-block' },
          children: (0, d.jsxs)(j, {
            value: e,
            onChange: t,
            children: [
              (0, d.jsx)(g, { value: 0, children: '\ub300\ud55c\ubbfc\uad6d' }),
              (0, d.jsx)(g, { value: 1, children: 'English' }),
            ],
          }),
        });
      };
    },
    75934: function (n, e, t) {
      var r = t(59499),
        i = t(4730),
        o = t(85893),
        a = ['children', 'value', 'index'];
      function c(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function l(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(t), !0).forEach(function (e) {
                (0, r.Z)(n, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (e) {
                Object.defineProperty(
                  n,
                  e,
                  Object.getOwnPropertyDescriptor(t, e),
                );
              });
        }
        return n;
      }
      var s = t(38818),
        u = s.Typography,
        d = s.Box;
      e.Z = function (n) {
        var e = n.children,
          t = n.value,
          r = n.index,
          c = (0, i.Z)(n, a);
        return (0, o.jsx)(
          u,
          l(
            l(
              {
                component: 'div',
                role: 'tabpanel',
                hidden: t !== r,
                id: 'action-tabpanel-'.concat(r),
                'aria-labelledby': 'action-tab-'.concat(r),
              },
              c,
            ),
            {},
            {
              children: t === r && (0, o.jsx)(d, { sx: { p: 3 }, children: e }),
            },
          ),
        );
      };
    },
    28222: function (n, e, t) {
      var r = t(22715),
        i = t(45697),
        o = t.n(i),
        a = (t(67294), t(85893)),
        c = function (n) {
          var e = n.label,
            t = n.value,
            i = n.func;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(r.Z, {
              label: e,
              variant: 'outlined',
              value: t,
              onChange: i,
              fullWidth: !0,
              sx: { display: 'block', margin: '1px', width: '320px' },
            }),
          });
        };
      (c.prototype = {
        label: o().string.isRequired,
        value: o().string.isRequired,
        func: o().func.isRequired,
      }),
        (e.Z = c);
    },
    24195: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return Q;
        },
      });
      var r = t(67294),
        i = t(99226),
        o = t(89206),
        a = t(83808),
        c = t(26989),
        l = t(75316),
        s = t(2632),
        u = t(10167),
        d = t(57563),
        f = t(75341),
        p = t(41664),
        x = t(25617),
        h = t(59499),
        g = t(72640),
        m = t(64666),
        j = t(77314),
        v = t(54880),
        b = t(9402),
        y = t(23551),
        Z = t(69397),
        O = t(85893),
        k = function () {
          var n = (0, r.useMemo)(function () {
            return { color: '#808080', marginTop: '8px' };
          }, []);
          return (0, O.jsx)(O.Fragment, {
            children: (0, O.jsx)(Z.Z, {
              style: n,
              type: 'submit',
              variant: 'text',
              children: '\uac00\uc785\ud558\uae30',
            }),
          });
        },
        P = t(45943),
        w = t(76941),
        D = t(75934),
        C = t(28222);
      function S(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function E(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? S(Object(t), !0).forEach(function (e) {
                (0, h.Z)(n, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (e) {
                Object.defineProperty(
                  n,
                  e,
                  Object.getOwnPropertyDescriptor(t, e),
                );
              });
        }
        return n;
      }
      var F = function (n) {
          var e = n.open,
            t = n.setOpen,
            i = n.id,
            o = (0, x.I0)(),
            a = (0, x.v9)(function (n) {
              return n.user;
            }),
            s = (0, v.a)(),
            u = (0, y.W)(''),
            d = (0, g.Z)(u, 3),
            f = d[0],
            p = d[1],
            h = d[2],
            Z = (0, y.G)([]),
            S = (0, g.Z)(Z, 3),
            F = S[0],
            z = S[1],
            M = S[2],
            L = (0, r.useState)(0),
            A = L[0],
            I = L[1],
            R = (0, r.useState)(0),
            B = R[0],
            W = R[1];
          (0, r.useEffect)(
            function () {
              a.registerUserError && alert(a.registerUserError),
                a.registerUserDone &&
                  (alert(
                    '\ud68c\uc6d0\uac00\uc785\uc5d0 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4.',
                  ),
                  h(''),
                  M([]),
                  I(0),
                  W(0)),
                t(!1);
            },
            [a, t, h, M],
          );
          var T = (0, r.useCallback)(
              function () {
                return t(!1);
              },
              [t],
            ),
            U = (0, r.useCallback)(
              function (n) {
                n.preventDefault();
                var e = { metamask: i, genre: F, nationality: A };
                f && (e = E(E({}, e), {}, { name: f, role: '1' })),
                  o((0, b.yI)(e));
              },
              [o, f, F, A, i],
            );
          return (0, O.jsx)(O.Fragment, {
            children: (0, O.jsxs)(m.Z, {
              open: e,
              onClose: T,
              PaperProps: { sx: { width: '40%', height: '43%' } },
              'aria-labelledby': 'draggable-dialog-title',
              children: [
                (0, O.jsxs)(c.Z, {
                  value: B,
                  onChange: function (n, e) {
                    W(e);
                  },
                  indicatorColor: 'primary',
                  textColor: 'primary',
                  variant: 'fullWidth',
                  TabIndicatorProps: { style: { background: 'gray' } },
                  'aria-label': 'action tabs example',
                  children: [
                    (0, O.jsx)(l.Z, {
                      label: (0, O.jsx)('span', {
                        style: { color: 'black' },
                        children: 'User',
                      }),
                    }),
                    (0, O.jsx)(l.Z, {
                      label: (0, O.jsx)('span', {
                        style: { color: 'black' },
                        children: 'Artist',
                      }),
                    }),
                  ],
                }),
                (0, O.jsxs)(j.ZP, {
                  axis: 'rtl' === s.direction ? 'x-reverse' : 'x',
                  index: B,
                  onChangeIndex: function (n) {
                    W(n);
                  },
                  children: [
                    (0, O.jsx)(D.Z, {
                      value: B,
                      index: 0,
                      dir: s.direction,
                      children: (0, O.jsxs)('form', {
                        onSubmit: U,
                        children: [
                          (0, O.jsx)(P.Z, { value: A, func: I }),
                          (0, O.jsx)(w.Z, { value: F, func: z }),
                          (0, O.jsx)(k, {}),
                        ],
                      }),
                    }),
                    (0, O.jsx)(D.Z, {
                      value: B,
                      index: 1,
                      dir: s.direction,
                      children: (0, O.jsxs)('form', {
                        onSubmit: U,
                        children: [
                          (0, O.jsx)(C.Z, {
                            label: '\uc544\ud2f0\uc2a4\ud2b8 \uba85',
                            value: f,
                            func: p,
                          }),
                          (0, O.jsx)(P.Z, { value: A, func: I }),
                          (0, O.jsx)(w.Z, { value: F, func: z }),
                          (0, O.jsx)(k, {}),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        z = t(21023),
        M = t(54799),
        L = t(87952),
        A = t(24486),
        I = t(67720),
        R = t(63931),
        B = t(48885),
        W = t(16975),
        T = t(56478),
        U = t(18377),
        N = t(39029),
        H = function () {
          var n = (0, x.I0)(),
            e = (0, r.useCallback)(
              function () {
                n((0, b.vR)());
              },
              [n],
            );
          return (0, O.jsxs)(R.Z, {
            onClick: e,
            children: [
              (0, O.jsx)(B.Z, {
                children: (0, O.jsx)(N.Z, { fontSize: 'small' }),
              }),
              (0, O.jsx)(U.Z, { component: 'span', children: 'Logout' }),
            ],
          });
        },
        G = function () {
          var n = (0, x.v9)(function (n) {
              return n.user;
            }).userData,
            e = n.img;
          return (0, O.jsx)(p.default, {
            href: '/mypage',
            children: (0, O.jsx)(R.Z, {
              children: e
                ? (0, O.jsxs)(O.Fragment, {
                    children: [
                      (0, O.jsx)(L.Z, { src: n.img, alt: 'Avatar' }),
                      n.name
                        ? (0, O.jsx)(O.Fragment, { children: n.name })
                        : (0, O.jsx)(O.Fragment, { children: 'USER' }),
                    ],
                  })
                : (0, O.jsxs)(O.Fragment, {
                    children: [
                      (0, O.jsx)(L.Z, {
                        src: 'https://avatars.dicebear.com/api/gridy/'.concat(
                          n.metamask,
                          '.svg',
                        ),
                      }),
                      n.name,
                    ],
                  }),
            }),
          });
        },
        V = function () {
          var n = (0, x.v9)(function (n) {
              return n.user;
            }).userData,
            e = (0, r.useState)(null),
            t = e[0],
            o = e[1],
            a = Boolean(t),
            c = function () {
              o(null);
            };
          return (0, O.jsxs)(r.Fragment, {
            children: [
              (0, O.jsx)(i.Z, {
                sx: {
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'center',
                },
                children: (0, O.jsx)(z.Z, {
                  title: 'Account settings',
                  children: (0, O.jsx)(M.Z, {
                    onClick: function (n) {
                      o(n.currentTarget);
                    },
                    size: 'small',
                    sx: { ml: 2 },
                    'aria-controls': a ? 'account-menu' : void 0,
                    'aria-haspopup': 'true',
                    'aria-expanded': a ? 'true' : void 0,
                    children: n.img
                      ? (0, O.jsx)(L.Z, { src: n.img, alt: 'Avatar' })
                      : (0, O.jsx)(L.Z, {
                          src: 'https://avatars.dicebear.com/api/gridy/'.concat(
                            n.metamask,
                            '.svg',
                          ),
                        }),
                  }),
                }),
              }),
              (0, O.jsxs)(A.Z, {
                anchorEl: t,
                id: 'account-menu',
                open: a,
                onClose: c,
                onClick: c,
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
                  (0, O.jsx)(G, {}),
                  (0, O.jsx)(I.Z, {}),
                  (0, O.jsx)(p.default, {
                    href: '/mypage/mynft',
                    children: (0, O.jsxs)(R.Z, {
                      children: [
                        (0, O.jsx)(B.Z, {
                          children: (0, O.jsx)(W.Z, { fontSize: 'small' }),
                        }),
                        'My NFT',
                      ],
                    }),
                  }),
                  (0, O.jsxs)(R.Z, {
                    children: [
                      (0, O.jsx)(B.Z, {
                        children: (0, O.jsx)(T.Z, { fontSize: 'small' }),
                      }),
                      'Listening History',
                    ],
                  }),
                  (0, O.jsx)(H, {}),
                ],
              }),
            ],
          });
        },
        _ = t(34759),
        q = t(11163),
        K = t(95244),
        X = function (n) {
          var e = n.value,
            t = n.func,
            i = (0, K.X)(!1),
            o = (0, g.Z)(i, 3),
            a = o[0],
            c = o[1],
            l = o[2],
            s = (0, r.useMemo)(function () {
              return { color: '#FFFFFF' };
            }, []),
            u = (0, r.useMemo)(function () {
              return { color: '#808080' };
            }, []);
          return (0, O.jsx)(O.Fragment, {
            children: (0, O.jsx)(Z.Z, {
              onMouseOver: c,
              onMouseOut: l,
              style: a ? u : s,
              variant: 'text',
              onClick: t,
              children: e,
            }),
          });
        },
        Y = function (n) {
          var e = n.metamaskLogin,
            t = n.setMetamaskLogin,
            i = n.metaopenfunc,
            o = (0, x.I0)(),
            a = (0, x.v9)(function (n) {
              return n.metamask;
            }),
            c = (0, x.v9)(function (n) {
              return n.user;
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
                c.logInUserError && alert(c.logInUserError);
              },
              [c],
            );
          var l = (0, r.useCallback)(
            function () {
              try {
                o((0, _.i)());
              } catch (n) {
                console.error(n);
              }
            },
            [o],
          );
          return (0, O.jsx)(O.Fragment, {
            children: e
              ? (0, O.jsx)('div', {
                  style: { marginLeft: 'auto' },
                  children: (0, O.jsx)(X, {
                    value:
                      '\uba54\ud0c0\ub9c8\uc2a4\ud06c\ub97c \uba3c\uc800 \ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694!',
                    func: function () {
                      q.default.reload();
                    },
                  }),
                })
              : (0, O.jsxs)(O.Fragment, {
                  children: [
                    (0, O.jsx)('div', {
                      style: { marginLeft: 'auto' },
                      children: (0, O.jsx)(X, { value: 'Login', func: l }),
                    }),
                    (0, O.jsx)(X, { value: 'Register', func: i }),
                  ],
                }),
          });
        },
        J = function () {
          var n = (0, x.I0)(),
            e = (0, x.v9)(function (n) {
              return n.user;
            }).userData,
            t = (0, x.v9)(function (n) {
              return n.metamask;
            }),
            i = (0, r.useState)(!1),
            h = i[0],
            g = i[1],
            m = (0, r.useState)(!1),
            j = m[0],
            v = m[1];
          (0, r.useEffect)(
            function () {
              t.metamaskLoading && null == t.metamaskData && v(!0),
                null !== t.metamaskData && t.metamaskDone && (v(!1), g(!0));
            },
            [t],
          );
          var b = (0, r.useCallback)(
            function () {
              try {
                return void n((0, _.N)());
              } catch (e) {
                console.error(e);
              }
            },
            [n],
          );
          return (0, O.jsx)(O.Fragment, {
            children: (0, O.jsxs)(o.Z, {
              sx: {
                padding: '10px 20px ',
                background: 'transparent',
                height: '100px',
              },
              elevation: 0,
              children: [
                (0, O.jsxs)(a.Z, {
                  sx: { paddingRight: '20px' },
                  children: [
                    (0, O.jsx)(p.default, {
                      href: '/',
                      children: (0, O.jsx)('img', {
                        width: '80px',
                        height: '80px',
                        src: '/logoW.png',
                        alt: 'logo',
                        style: { cursor: 'pointer', marginRight: '30px' },
                      }),
                    }),
                    (0, O.jsxs)(c.Z, {
                      textColor: 'inherit',
                      value: !1,
                      children: [
                        (0, O.jsx)(p.default, {
                          href: '/streaming',
                          children: (0, O.jsx)(l.Z, {
                            icon: (0, O.jsx)(s.Z, {}),
                            iconPosition: 'start',
                            label: 'STREAMING',
                            sx: { fontSize: '18px' },
                          }),
                        }),
                        (0, O.jsx)(p.default, {
                          href: '/nft',
                          children: (0, O.jsx)(l.Z, {
                            icon: (0, O.jsx)(u.Z, {}),
                            iconPosition: 'start',
                            label: 'NFT',
                            sx: { fontSize: '18px' },
                          }),
                        }),
                        (0, O.jsx)(p.default, {
                          href: '/nft/marketplace',
                          children: (0, O.jsx)(l.Z, {
                            icon: (0, O.jsx)(d.Z, {}),
                            iconPosition: 'start',
                            label: 'MarketPlace',
                            sx: { fontSize: '18px' },
                          }),
                        }),
                        (0, O.jsx)(p.default, {
                          href: '/auction',
                          children: (0, O.jsx)(l.Z, {
                            icon: (0, O.jsx)(f.Z, {}),
                            iconPosition: 'start',
                            label: 'Auction',
                            sx: { fontSize: '18px' },
                          }),
                        }),
                      ],
                    }),
                    e
                      ? (0, O.jsx)('div', {
                          style: { marginLeft: 'auto', paddingRight: '20px' },
                          children: (0, O.jsx)(V, {}),
                        })
                      : (0, O.jsx)(Y, {
                          metamaskLogin: j,
                          setMetamaskLogin: v,
                          metaopenfunc: b,
                        }),
                  ],
                }),
                (0, O.jsx)(F, { id: t.metamaskData, setOpen: g, open: h }),
              ],
            }),
          });
        },
        Q = function (n) {
          var e = n.children;
          return (0, O.jsxs)(i.Z, {
            sx: { display: 'inline-block', width: '100%' },
            children: [
              (0, O.jsx)(J, {}),
              (0, O.jsx)(i.Z, {
                style: {
                  marginLeft: '20px',
                  marginTop: '100px',
                  marginRight: '20px',
                },
                children: e,
              }),
            ],
          });
        };
    },
    95244: function (n, e, t) {
      t.d(e, {
        X: function () {
          return i;
        },
      });
      var r = t(67294),
        i = function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            e = (0, r.useState)(n),
            t = e[0],
            i = e[1],
            o = (0, r.useCallback)(function () {
              i(!0);
            }, []),
            a = (0, r.useCallback)(function () {
              i(!1);
            }, []);
          return [t, o, a];
        };
    },
    23551: function (n, e, t) {
      t.d(e, {
        W: function () {
          return i;
        },
        G: function () {
          return o;
        },
      });
      var r = t(67294),
        i = function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            e = (0, r.useState)(n),
            t = e[0],
            i = e[1],
            o = (0, r.useCallback)(
              function (n) {
                i(n.target.value);
              },
              [i],
            );
          return [t, o, i];
        },
        o = function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            e = (0, r.useState)(n),
            t = e[0],
            i = e[1],
            o = function (n) {
              var e = n.target.value;
              i('string' === typeof e ? e.split(',') : e);
            };
          return [t, o, i];
        };
    },
  },
]);
