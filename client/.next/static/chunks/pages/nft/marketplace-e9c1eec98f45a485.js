(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [620],
  {
    36069: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return k;
          },
          default: function () {
            return m;
          },
        });
      var r = t(67294),
        a = t(99226),
        c = t(50029),
        i = t(87794),
        s = t.n(i),
        o = { ContentsContainer: {} },
        u = t(69001),
        l = t(85893),
        p = function () {
          var e = (0, r.useState)(),
            n = e[0],
            t = e[1],
            i = (function () {
              var e = (0, c.Z)(
                s().mark(function e() {
                  var n, r, a, c, i;
                  return s().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              u.A_.methods.getOnSaleMusicTokens().call()
                            );
                          case 3:
                            (n = e.sent), (r = []), (a = 0);
                          case 6:
                            if (!(a < n.length)) {
                              e.next = 17;
                              break;
                            }
                            return (
                              (e.next = 9),
                              fetch(
                                'https://ipfs.io/ipfs/'.concat(
                                  n[a].musicTokenURI,
                                ),
                              )
                            );
                          case 9:
                            return (c = e.sent), (e.next = 12), c.json();
                          case 12:
                            (i = e.sent),
                              r.push({
                                musicTokenId: n[a].musicTokenId,
                                musicTokenData: i,
                                musicTokenPrice: n[a].musicTokenPrice,
                              });
                          case 14:
                            a++, (e.next = 6);
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
                n || i(), console.log(n);
              },
              [n],
            ),
            (0, l.jsx)(a.Z, {
              sx: o.ContentsContainer,
              children: 'MarketPlaceContents',
            })
          );
        },
        x = function () {
          return (0, l.jsxs)(a.Z, {
            children: [
              (0, l.jsx)(a.Z, { children: '\uac80\uc0c9' }),
              (0, l.jsx)(a.Z, { children: '\uce74\ud14c\uace0\ub9ac' }),
            ],
          });
        },
        h = {
          marketplaceHeader: {
            width: '100%',
            minWidth: '1600px',
            maxWidth: '1600px',
            color: 'white',
            lineHeight: '72px',
            paddingTop: '60px',
            paddingBottom: '60px',
            fontSize: '30px',
            fontWeight: '700',
            '&.h1': { margin: '0' },
          },
          marketplaceContainer: {
            width: '100%',
            minWidth: '1600px',
            maxWidth: '1600px',
            height: '100%',
            display: 'flex',
            color: 'white',
            margin: '0 40px',
          },
          marketplaceLeftSideBar: { flex: 2 },
          marketplaceWrapper: { flex: 10 },
        },
        d = function () {
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(a.Z, {
                sx: h.marketplaceHeader,
                children: (0, l.jsx)('h1', {
                  style: { margin: '0 0 0 40px' },
                  children: 'MarketPlace',
                }),
              }),
              (0, l.jsxs)(a.Z, {
                sx: h.marketplaceContainer,
                children: [
                  (0, l.jsx)(a.Z, {
                    sx: h.marketplaceLeftSideBar,
                    children: (0, l.jsx)(x, {}),
                  }),
                  (0, l.jsx)(a.Z, {
                    sx: h.marketplaceWrapper,
                    children: (0, l.jsx)(p, {}),
                  }),
                ],
              }),
            ],
          });
        },
        f = t(24195),
        k = !0,
        m = function () {
          return (0, l.jsx)(f.Z, { children: (0, l.jsx)(d, {}) });
        };
    },
    65775: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/nft/marketplace',
        function () {
          return t(36069);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [767, 195, 774, 888, 179], function () {
      return (n = 65775), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
