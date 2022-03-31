(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    82341: function (e, r, n) {
      'use strict';
      var i = n(95318);
      r.Z = void 0;
      var t = i(n(64938)),
        o = n(85893),
        a = (0, t.default)(
          (0, o.jsx)('path', {
            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.88 15.76V19h-1.75v-1.29c-.74-.18-2.39-.77-3.02-2.96l1.65-.67c.06.22.58 2.09 2.4 2.09.93 0 1.98-.48 1.98-1.61 0-.96-.7-1.46-2.28-2.03-1.1-.39-3.35-1.03-3.35-3.31 0-.1.01-2.4 2.62-2.96V5h1.75v1.24c1.84.32 2.51 1.79 2.66 2.23l-1.58.67c-.11-.35-.59-1.34-1.9-1.34-.7 0-1.81.37-1.81 1.39 0 .95.86 1.31 2.64 1.9 2.4.83 3.01 2.05 3.01 3.45 0 2.63-2.5 3.13-3.02 3.22z',
          }),
          'Paid',
        );
      r.Z = a;
    },
    2726: function (e, r, n) {
      'use strict';
      n.r(r),
        n.d(r, {
          __N_SSP: function () {
            return P;
          },
          default: function () {
            return z;
          },
        });
      n(67294);
      var i = n(2745),
        t = n(59499),
        o = n(41664),
        a = n(8797),
        c = (0, a.vJ)([
          '.home__hero-section{color:#fff;padding:160px 0;}.home__hero-row{align-items:center;}.row{display:flex;margin-right:-15px;margin-bottom:-15px;margin-left:-15px;flex-wrap:wrap;align-content:stretch;}.col{margin-bottom:15px;padding-right:15px;padding-left:15px;flex:1;max-width:50%;flex-basis:50%;}.home__hero-text-wrapper{max-width:540px;padding-top:0;padding-bottom:60px;}.top-line{color:#f00946;font-size:16px;line-height:16px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;margin-bottom:16px;}.heading{margin-bottom:24px;font-size:48px;line-height:1.1;font-weight:600;color:#f7f8fa;}.dark{color:#1c2237;}.darkBg{background-color:#1c2237;}.home__hero-subtitle{max-width:440px;margin-bottom:35px;font-size:18px;line-height:24px;}.home__hero-img-wrapper{max-width:555px;}.home__hero-img{max-width:95%;margin-top:0;margin-right:0;margin-left:10px;padding-right:0;}img{border:0;max-width:100%;vertical-align:middle;display:inline-block;}@media screen and (max-width:991px){.container{padding-right:30px;padding-left:30px;}}@media screen and (max-width:768px){.home__hero-text-wrapper{padding-bottom:65px;}.col{max-width:100%;flex-basis:100%;}}',
        ]),
        l = (0, a.vJ)([
          ':root{--primary:#fff;}.btn{padding:8px 20px;border-radius:4px;outline:none;border:none;cursor:pointer;white-space:nowrap;}.btn--primary{background-color:var(--primary);color:#242424;border:1px solid var(--primary);}.btn--outline{background-color:transparent;color:#fff;padding:8px 20px;border:1px solid var(--primary);transition:all 0.3s ease-out;}.btn--medium{padding:8px 20px;font-size:18px;}.btn--large{padding:12px 26px;font-size:20px;}.btn--mobile{text-align:center;border-radius:4px;width:80%;text-decoration:none;font-size:1.5rem;background-color:transparent;color:#fff;padding:14px 20px;border:1px solid #fff;transition:all 0.3s ease-out;}.btn--wide{padding:12px 64px;font-size:20px;}.btn--large:hover,.btn--medium:hover,.btn--mobile:hover{transition:all 0.3s ease-out;background:#fff;color:#242424;}.btn--wide:hover{color:#fff;background-color:#f00946;transition:all 0.2s ease-out;}.btn-link{display:flex;justify-content:center;align-items:center;text-decoration:none;padding:8px 16px;height:100%;width:100%;}.blue{background-color:#276afb;color:#fff;border:none;}.red{background-color:#f00946;color:#fff;border:none;}.primary{background-color:#242424;color:#fff;border:none;}.primary:hover{background-color:#fff;color:#242424;border:none;}.green{background:#25ce4a;color:#fff;border:none;}.green:hover{background-color:#242424;}',
        ]),
        s = n(85893),
        d = ['btn--primary', 'btn--outline'],
        p = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'],
        h = ['primary', 'blue', 'red', 'green'],
        x = function (e) {
          var r = e.children,
            n = e.type,
            i = e.onClick,
            t = e.buttonStyle,
            o = e.buttonSize,
            a = e.buttonColor,
            c = d.includes(t) ? t : d[0],
            x = p.includes(o) ? o : p[0],
            g = h.includes(a) ? a : null;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(l, {}),
              (0, s.jsx)('button', {
                className: 'btn '.concat(c, ' ').concat(x, ' ').concat(g),
                onClick: i,
                type: n,
                children: r,
              }),
            ],
          });
        };
      var g = function (e) {
          var r = e.lightBg,
            n = e.topLine,
            i = e.lightText,
            t = e.lightTextDesc,
            a = e.headline,
            l = e.description,
            d = e.buttonLabel,
            p = e.img,
            h = e.alt,
            g = e.imgStart;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(c, {}),
              (0, s.jsx)('div', {
                className: r
                  ? 'home__hero-section'
                  : 'home__hero-section darkBg',
                children: (0, s.jsx)('div', {
                  className: 'container',
                  children: (0, s.jsxs)('div', {
                    className: 'row home__hero-row',
                    style: {
                      display: 'flex',
                      flexDirection: 'start' === g ? 'row-reverse' : 'row',
                    },
                    children: [
                      (0, s.jsx)('div', {
                        className: 'col',
                        children: (0, s.jsxs)('div', {
                          className: 'home__hero-text-wrapper',
                          children: [
                            (0, s.jsx)('div', {
                              className: 'top-line',
                              children: n,
                            }),
                            (0, s.jsx)('h1', {
                              className: i ? 'heading' : 'heading dark',
                              children: a,
                            }),
                            (0, s.jsx)('p', {
                              className: t
                                ? 'home__hero-subtitle'
                                : 'home__hero-subtitle dark',
                              children: l,
                            }),
                            (0, s.jsx)(o.default, {
                              href: '/',
                              children: (0, s.jsx)(x, {
                                buttonSize: 'btn--wide',
                                buttonColor: 'blue',
                                children: d,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsx)('div', {
                        className: 'col',
                        children: (0, s.jsx)('div', {
                          className: 'home__hero-img-wrapper',
                          children: (0, s.jsx)('img', {
                            src: p,
                            alt: h,
                            className: 'home__hero-img',
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        f = {
          lightBg: !1,
          lightText: !0,
          lightTextDesc: !0,
          topLine: '\ub7f0\uce6d 3\uac1c\uc6d4 \uc774\ub0b4',
          headline:
            '\ubaa8\ub4e0 \uc2e0\uaddc\ub8cc \uace0\uac1d\uc5d0\uac8c \uac00\uc785\ube44/ \uad6c\ub3c5\ub8cc \ubb34\ub8cc',
          description:
            'WEBWEB\uc758 NFT \uc74c\uc545\ud50c\ub7ab\ud3fc\uc5d0\uc11c\ub294 \uc720\uc800/\uc544\ud2f0\uc2a4\ud2b8 \uace0\uac1d\uc758 \ucc28\ubcc4\uc801 \uc11c\ube44\uc2a4 \uc81c\uacf5, \uacbd\ub9e4, \uc77c\ubc18\uac70\ub798 \ub4f1\uc73c\ub85c \uc74c\uc6d0\uc5d0 \ub300\ud55c \uc218\uc775 \ucc3d\ucd9c\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4  ',
          buttonLabel: '\uc9c0\uae08 \uc2dc\uc791\ud558\uae30',
        },
        m = {
          lightBg: !1,
          lightText: !0,
          lightTextDesc: !0,
          topLine: 'STREAMING',
          headline:
            '\uc804\uc138\uacc4 \ub3d9\uc2dc \uc2a4\ud2b8\ub9ac\ubc0d \uc11c\ube44\uc2a4',
          description:
            '\uc804\uc138\uacc4 \uc2a4\ud2b8\ub9ac\ubc0d \uc11c\ube44\uc2a4\ub85c \ubaa8\ub4e0 \uc544\ud2f0\uc2a4\ud2b8 \uc74c\uc6d0\uc744 \ud50c\ub808\uc774\uc2a4\ud2b8, \uc88b\uc544\ud558\ub294 \uc544\ud2f0\uc2a4\ud2b8\ub97c \uc800\uc7a5\ud568\uc73c\ub85c\uc11c \uac10\uc0c1\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.',
          buttonLabel: '\uc2a4\ud2b8\ub9ac\ubc0d \ubc14\ub85c\uac00\uae30',
          imgStart: '',
          img: '/bgimg.jpg',
          alt: 'Vault',
        },
        u = {
          lightBg: !0,
          lightText: !1,
          lightTextDesc: !1,
          topLine: 'NFT',
          headline: '\uc74c\uc6d0\uc5d0 \ub300\ud55c NFT',
          description:
            '\uc544\ud2f0\uc2a4\ud2b8\uc758 \ub3d9\uc758 \ud558\uc5d0 \ubaa8\ub4e0 \uc74c\uc6d0\uc740 NFT \ub85c \uc720\ud1b5\uc774 \ub418\uba70 \uad6c\ub9e4/\ud310\ub9e4 \ubc0f \uacbd\ub9e4\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
          buttonLabel: 'NFT \ubc14\ub85c\uac00\uae30',
          imgStart: 'start',
          img: '/bgimg.jpg',
          alt: 'Vault',
        },
        b = n(89583),
        _ = n(63750),
        j = n(2585),
        v = n(88357),
        w = (0, a.vJ)([
          '.pricing__section{padding:100px 0 160px;display:flex;flex-direction:column;justify-content:center;background:#fafafa;}.pricing__container-card{background:linear-gradient(45deg,#0660e9 0%,#276afb 100%);box-shadow:0 6px 20px rgba(56,125,255,0.2);width:280px;height:500px;text-decoration:none;border-radius:4px;}.pricing__container-card:nth-child(2){transform:scale(1.05);background:#242424;}.pricing__container-card:hover{transform:scale(1.06);transition:all 0.3s ease-out;color:#1c2237;}.pricing__container-card:nth-child(2){margin:0 24px;}.pricing__container{display:flex;justify-content:center;align-items:center;}.pricing__wrapper{display:flex;flex-direction:column;align-items:start;margin:0 auto;}.pricing__heading{color:#1c2237;margin-bottom:24px;}.pricing__container-cardInfo{display:flex;flex-direction:column;height:500px;padding:24px;align-items:center;color:#fff;}.pricing__container-cardInfo h3{margin-bottom:5px;font-size:24px;}.pricing__container-cardInfo h4{font-size:40px;}.pricing__container-cardInfo p{font-size:14px;margin-bottom:24px;}.pricing__container-features{margin:16px 0 32px;list-style:none;}.pricing__container-features li{margin-bottom:10px;}.pricing__container-features{display:flex;flex-direction:column;align-items:center;}.icon{margin:24px 0;}@media screen and (max-width:960px){.pricing__container{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;}.pricing__container-card{width:90%;}.pricing__wrapper{margin:0 30px;display:flex;flex-direction:column;align-items:center;}.pricing__container-card:nth-child(2){transform:scale(1);background:#242424;margin:24px;}.pricing__container-card:hover{transform:none;}}',
        ]);
      var y = function () {
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(w, {}),
            (0, s.jsx)(v.Pd.Provider, {
              value: { color: '#fff', size: 64 },
              children: (0, s.jsx)('div', {
                className: 'pricing__section',
                children: (0, s.jsxs)('div', {
                  className: 'pricing__wrapper',
                  children: [
                    (0, s.jsx)('h1', {
                      className: 'pricing__heading',
                      children: 'Pricing',
                    }),
                    (0, s.jsxs)('div', {
                      className: 'pricing__container',
                      children: [
                        (0, s.jsx)(o.default, {
                          href: '/subscription',
                          children: (0, s.jsxs)('div', {
                            className:
                              'pricing__container-card pricing__container-cardInfo',
                            children: [
                              (0, s.jsx)('div', {
                                className: 'icon',
                                children: (0, s.jsx)(b.NcA, {}),
                              }),
                              (0, s.jsx)('h3', {
                                children: '3\uac1c\uc6d4 \ubb34\ub8cc',
                              }),
                              (0, s.jsx)('h4', { children: '$0' }),
                              (0, s.jsx)('p', { children: 'per month' }),
                              (0, s.jsxs)('ul', {
                                className: 'pricing__container-features',
                                children: [
                                  (0, s.jsx)('li', {
                                    children:
                                      '\ubb34\ub8cc \uc2a4\ud2b8\ub9ac\ubc0d',
                                  }),
                                  (0, s.jsx)('li', {
                                    children:
                                      '\uc544\ud2f0\uc2a4\ud2b8 \uac00\uc785\ube44 \ubb34\ub8cc',
                                  }),
                                  (0, s.jsx)('li', {
                                    children:
                                      '3\uac1c\uc6d4\uac04 NFT \uac70\ub798 \uac00\ub2a5',
                                  }),
                                ],
                              }),
                              (0, s.jsx)(x, {
                                buttonSize: 'btn--wide',
                                buttonColor: 'primary',
                                children: 'Choose Plan',
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)(o.default, {
                          href: '/subscription',
                          children: (0, s.jsxs)('div', {
                            className:
                              'pricing__container-cardInfo pricing__container-card',
                            children: [
                              (0, s.jsx)('div', {
                                className: 'icon',
                                children: (0, s.jsx)(_.Fn8, {}),
                              }),
                              (0, s.jsx)('h3', { children: '\uc720\uc800' }),
                              (0, s.jsx)('h4', { children: '$29.99' }),
                              (0, s.jsx)('p', { children: 'per month' }),
                              (0, s.jsxs)('ul', {
                                className: 'pricing__container-features',
                                children: [
                                  (0, s.jsx)('li', {
                                    children:
                                      '\ubb34\uc81c\ud55c \uc2a4\ud2b8\ub9ac\ubc0d \uc11c\ube44\uc2a4',
                                  }),
                                  (0, s.jsx)('li', {
                                    children:
                                      '\ud50c\ub808\uc774\ub9ac\uc2a4\ud2b8 \uc81c\uacf5',
                                  }),
                                  (0, s.jsx)('li', {
                                    children:
                                      '\uc544\ud2f0\uc2a4\ud2b8 \ubc14\uad6c\ub2c8 \uc81c\uacf5',
                                  }),
                                ],
                              }),
                              (0, s.jsx)(x, {
                                buttonSize: 'btn--wide',
                                buttonColor: 'blue',
                                children: 'Choose Plan',
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)(o.default, {
                          href: '/subscription',
                          children: (0, s.jsxs)('div', {
                            className:
                              'pricing__container-cardInfo pricing__container-card',
                            children: [
                              (0, s.jsx)('div', {
                                className: 'icon',
                                children: (0, s.jsx)(j.jtD, {}),
                              }),
                              (0, s.jsx)('h3', {
                                children: '\uc544\ud2f0\uc2a4\ud2b8',
                              }),
                              (0, s.jsx)('h4', { children: '$99.99' }),
                              (0, s.jsx)('p', { children: 'per month' }),
                              (0, s.jsxs)('ul', {
                                className: 'pricing__container-features',
                                children: [
                                  (0, s.jsx)('li', {
                                    children:
                                      '\ubb34\uc81c\ud55c \uc2a4\ud2b8\ub9ac\ubc0d \uc81c\uacf5',
                                  }),
                                  (0, s.jsx)('li', {
                                    children:
                                      'NFT \uac70\ub798/\uacbd\ub9e4 \uac00\ub2a5',
                                  }),
                                  (0, s.jsx)('li', {
                                    children:
                                      'NFT \uc74c\uc6d0 \ub4f1\ub85d \uac00\ub2a5',
                                  }),
                                ],
                              }),
                              (0, s.jsx)(x, {
                                buttonSize: 'btn--wide',
                                buttonColor: 'primary',
                                children: 'Choose Plan',
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      };
      function N(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          r &&
            (i = i.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function k(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? N(Object(n), !0).forEach(function (r) {
                (0, t.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(n, r),
                );
              });
        }
        return e;
      }
      var O = function () {
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(g, k({}, f)),
              (0, s.jsx)(g, k({}, u)),
              (0, s.jsx)(g, k({}, m)),
              (0, s.jsx)(y, {}),
            ],
          });
        },
        P = !0,
        z = function () {
          return (0, s.jsx)(i.Z, { children: (0, s.jsx)(O, {}) });
        };
    },
    33685: function (e, r, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n(2726);
        },
      ]);
    },
    88357: function (e, r, n) {
      'use strict';
      n.d(r, {
        w_: function () {
          return s;
        },
        Pd: function () {
          return o;
        },
      });
      var i = n(67294),
        t = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        o = i.createContext && i.createContext(t),
        a = function () {
          return (
            (a =
              Object.assign ||
              function (e) {
                for (var r, n = 1, i = arguments.length; n < i; n++)
                  for (var t in (r = arguments[n]))
                    Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
                return e;
              }),
            a.apply(this, arguments)
          );
        },
        c = function (e, r) {
          var n = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              r.indexOf(i) < 0 &&
              (n[i] = e[i]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var t = 0;
            for (i = Object.getOwnPropertySymbols(e); t < i.length; t++)
              r.indexOf(i[t]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[t]) &&
                (n[i[t]] = e[i[t]]);
          }
          return n;
        };
      function l(e) {
        return (
          e &&
          e.map(function (e, r) {
            return i.createElement(e.tag, a({ key: r }, e.attr), l(e.child));
          })
        );
      }
      function s(e) {
        return function (r) {
          return i.createElement(d, a({ attr: a({}, e.attr) }, r), l(e.child));
        };
      }
      function d(e) {
        var r = function (r) {
          var n,
            t = e.attr,
            o = e.size,
            l = e.title,
            s = c(e, ['attr', 'size', 'title']),
            d = o || r.size || '1em';
          return (
            r.className && (n = r.className),
            e.className && (n = (n ? n + ' ' : '') + e.className),
            i.createElement(
              'svg',
              a(
                {
                  stroke: 'currentColor',
                  fill: 'currentColor',
                  strokeWidth: '0',
                },
                r.attr,
                t,
                s,
                {
                  className: n,
                  style: a(a({ color: e.color || r.color }, r.style), e.style),
                  height: d,
                  width: d,
                  xmlns: 'http://www.w3.org/2000/svg',
                },
              ),
              l && i.createElement('title', null, l),
              e.children,
            )
          );
        };
        return void 0 !== o
          ? i.createElement(o.Consumer, null, function (e) {
              return r(e);
            })
          : r(t);
      }
    },
  },
  function (e) {
    e.O(0, [980, 445, 13, 767, 745, 774, 888, 179], function () {
      return (r = 33685), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
