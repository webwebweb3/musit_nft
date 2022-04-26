'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [627],
  {
    4627: function (e, t, r) {
      r.r(t);
      r(50029), r(87794);
      var i = r(99226),
        o = r(69397),
        n = (r(67294), r(25617)),
        s = r(41664),
        l = r(11163),
        u = (r(69001), r(85893));
      t.default = function () {
        var e = (0, l.useRouter)().query.artistName,
          t = (0, n.v9)(function (e) {
            return e.user;
          }).userData;
        if ((console.log(t), null === t))
          return (
            alert('\ub85c\uadf8\uc778 \ud574\uc8fc\uc138\uc694'),
            l.default.push('/'),
            null
          );
        t.metamask;
        return (0, u.jsxs)(i.Z, {
          sx: {
            marginTop: '10px',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          },
          children: [
            (0, u.jsx)(i.Z, {
              sx: { width: '100%', height: '150px', backgroundColor: 'red' },
              children: 'profile background',
            }),
            (0, u.jsx)(i.Z, {
              sx: {
                width: '150px',
                height: '150px',
                backgroundColor: 'blue',
                color: 'white',
                margin: '0 auto',
                position: 'relative',
                top: '-60px',
              },
              children: 'profile Image',
            }),
            (0, u.jsx)(i.Z, {
              children:
                e === t.name
                  ? (0, u.jsx)(o.Z, {
                      sx: {
                        position: 'relative',
                        top: '-150px',
                        float: 'right',
                      },
                      children: (0, u.jsx)(s.default, {
                        href: ''.concat(e, '/uploadmusic'),
                        children: '+ Add Music NFT',
                      }),
                    })
                  : (0, u.jsx)('div', { style: { height: '36.5px' } }),
            }),
            (0, u.jsx)(i.Z, {
              sx: {
                width: '100%',
                height: '1000px',
                backgroundColor: 'green',
                position: 'relative',
                top: '-60px',
                color: 'white',
              },
              children: "Artist's Musics",
            }),
          ],
        });
      };
    },
  },
]);
