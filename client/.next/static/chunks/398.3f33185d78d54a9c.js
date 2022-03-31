(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [398],
  {
    35626: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, {
          default: function () {
            return B;
          },
        });
      var n = i(50029),
        r = i(72640),
        o = i(87794),
        l = i.n(o),
        a = i(67294),
        u = i(25617),
        p = i(99226),
        s = i(8797),
        d = {
          imgwrapper: {
            position: 'relative',
            height: '250px',
            width: '250px',
            border: 'none',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          },
          wrapper: {
            position: 'relative',
            height: '250px',
            width: '250px',
            border: '2px dashed #c2cdda',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          },
          image: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          text: { fontSize: '20px', fontWeight: '500', color: '#5b5b7b' },
          cancelBtn: [
            {
              position: 'absolute',
              fontSize: '20px',
              right: '15px',
              top: '15px',
              color: '#9658fe',
              cursor: 'pointer',
              fontWeight: '600',
            },
            { '&:hover': { color: 'red' } },
          ],
          fileName: {
            position: 'absolute',
            bottom: '0px',
            width: '100%',
            padding: '8px 0',
            fontSize: '18px',
            color: 'black',
          },
          uploadBtn: {
            marginTop: '30px',
            display: 'block',
            width: '100%',
            height: '50px',
            border: 'none',
            outline: 'none',
            borderRadius: '25px',
            color: '#fff',
            fontSize: '18px',
            fontWeight: '500',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            cursor: 'pointer',
          },
        },
        c = i(85893),
        f = s.ZP.button.withConfig({
          displayName: 'S3Upload__AlbumCoverButton',
          componentId: 'sc-ifwigc-0',
        })([
          'margin-top:10px;display:block;width:100%;height:40px;border:none;outline:none;border-radius:25px;color:#fff;font-size:18px;font-weight:500;letter-spacing:1px;text-transform:uppercase;cursor:pointer;background:linear-gradient(135deg,#3a8ffe 0%,#9658fe 100%);',
        ]),
        x = function (e) {
          var t = (0, a.useRef)(null),
            i = e.selectedFile;
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsxs)(p.Z, {
                sx: i ? d.imgwrapper : d.wrapper,
                children: [
                  (0, c.jsx)(p.Z, {
                    sx: d.image,
                    children:
                      i &&
                      (0, c.jsx)('img', {
                        src: URL.createObjectURL(i),
                        style: {
                          objectFit: 'cover',
                          width: '250px',
                          height: '250px',
                        },
                      }),
                  }),
                  (0, c.jsx)(p.Z, {
                    sx: d.content,
                    children: (0, c.jsx)(p.Z, {
                      sx: d.text,
                      children: 'No file chosen, yet!',
                    }),
                  }),
                  (0, c.jsx)(p.Z, {
                    sx: d.cancelBtn,
                    onClick: function () {
                      e.setSelectedFile(null);
                    },
                    children: 'X',
                  }),
                ],
              }),
              (0, c.jsx)('input', {
                id: 'uploadBtn',
                type: 'file',
                onChange: function (t) {
                  var i = t.target.files[0],
                    n = i.name.split('.').pop();
                  return 'image/jpeg' === i.type ||
                    'jpg' === n ||
                    'image/gif' === i.type ||
                    'gif' === n ||
                    'image/png' === i.type ||
                    'png' === n
                    ? void e.setSelectedFile(i)
                    : void alert(
                        '\uc774\ubbf8\uc9c0 \ud30c\uc77c\ub9cc \uc5c5\ub85c\ub4dc \uac00\ub2a5\ud569\ub2c8\ub2e4.',
                      );
                },
                ref: t,
                style: { display: 'none' },
              }),
              (0, c.jsx)(f, {
                type: 'button',
                onClick: function () {
                  t.current.click();
                },
                style: i ? { display: 'none' } : {},
                children: 'Upload ALBUM COVER',
              }),
            ],
          });
        },
        h = s.ZP.button.withConfig({
          displayName: 'IPFSUpload__IPFSUploadButton',
          componentId: 'sc-gydtcd-0',
        })([
          'margin-top:10px;display:block;width:100%;height:40px;border:none;outline:none;border-radius:25px;color:#fff;font-size:18px;font-weight:500;letter-spacing:1px;text-transform:uppercase;cursor:pointer;background:linear-gradient(135deg,#3a8ffe 0%,#9658fe 100%);',
        ]),
        g = function (e) {
          var t = e.setSelectedIPFSFile,
            i = (0, a.useRef)(null);
          return (0, c.jsxs)('div', {
            className: 'App',
            children: [
              (0, c.jsx)('input', {
                ref: i,
                type: 'file',
                onChange: function (e) {
                  var i = e.target.files[0],
                    n = i.name.split('.').pop();
                  return 'audio/mpeg' === i.type ||
                    'mp3' === n ||
                    'audio/mp4' === i.type ||
                    'mp4' === n ||
                    'audio/wav' === i.type ||
                    'wav' === n ||
                    'audio/flac' === i.type ||
                    'flac' === n
                    ? void t(i)
                    : void alert(
                        '\uc74c\uc545 \ud30c\uc77c\ub9cc \uc5c5\ub85c\ub4dc \uac00\ub2a5\ud569\ub2c8\ub2e4.',
                      );
                },
                style: { display: 'none' },
              }),
              (0, c.jsx)(h, {
                type: 'button',
                onClick: function () {
                  i.current.click();
                },
                children: 'MUSIC UPLOAD',
              }),
            ],
          });
        },
        b = i(5361),
        m = i(23551),
        v = i(22715),
        w = i(18859),
        y = i(45697),
        j = i.n(y),
        C = (0, w.Z)({
          root: {
            '& label.Mui-focused': { color: 'white' },
            '& .MuiInputLabel-root': { color: 'white' },
            '& .MuiInput-underline:before': { borderBottomColor: 'white' },
            '& .MuiInput-underline:after': { borderBottomColor: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' },
            },
          },
        })(v.Z),
        S = function (e) {
          var t = e.label,
            i = e.value,
            n = e.func,
            r = e.required,
            o = e.inputprops;
          return (0, c.jsx)(c.Fragment, {
            children: (0, c.jsx)(C, {
              label: t,
              variant: 'standard',
              value: i,
              onChange: n,
              fullWidth: !0,
              sx: {
                display: 'block',
                margin: '1px',
                width: '420px',
                height: '80px',
                marginBottom: '10px',
                input: { color: 'white' },
                fontSize: '40px',
              },
              color: 'secondary',
              required: r,
              inputProps: { inputprops: o, style: { fontSize: 30 } },
            }),
          });
        };
      S.prototype = {
        label: j().string.isRequired,
        value: j().string.isRequired,
        func: j().func.isRequired,
      };
      var Z = S,
        I = i(14400),
        k = i(11163),
        M = {
          uploadMusicContainer: {
            margin: '100px',
            marginTop: '140px',
            height: '100%',
            width: '960px',
            display: 'flex',
          },
          leftSide: { margin: '0', padding: '0', flex: 1 },
          S3UploadContainer: {
            margin: '0',
            padding: '30px 30px 0 30px',
            height: '304px',
          },
          IPFSUploadContainer: { marginTop: '0', padding: '0 30px' },
          rightSide: { margin: '0', padding: '10px 0 0 40px', flex: 2 },
          inputMusicDataContainer: {},
          uploadMusicBtnContainer: { margin: '0', padding: '0' },
        },
        F = i(63931),
        U = (0, I.Ue)('https://ipfs.infura.io:5001/api/v0'),
        B = function () {
          var e = (0, u.I0)(),
            t = (0, k.useRouter)().query.artistName,
            i = (0, a.useRef)(null),
            o = (0, u.v9)(function (e) {
              return e.user;
            }).userData,
            s = (0, m.W)(''),
            d = (0, r.Z)(s, 2),
            f = d[0],
            h = d[1],
            v = (0, m.W)(''),
            w = (0, r.Z)(v, 2),
            y = w[0],
            j = w[1],
            C = (0, m.W)('balad'),
            S = (0, r.Z)(C, 2),
            I = S[0],
            B = S[1],
            _ = (0, m.W)(''),
            z = (0, r.Z)(_, 2),
            W = z[0],
            q = z[1],
            D = (0, m.W)(''),
            L = (0, r.Z)(D, 2),
            O = L[0],
            T = L[1],
            A = (0, m.W)(''),
            E = (0, r.Z)(A, 2),
            V = E[0],
            X = E[1],
            $ = (0, a.useState)(null),
            G = $[0],
            H = $[1],
            J = (0, a.useState)(null),
            K = J[0],
            Q = J[1],
            Y = o.metamask,
            ee = { client: U, file: K },
            te = {
              dataToSubmit: {
                userName: o.name,
                title: f,
                artist: t,
                albumName: y,
                genre: I,
                release: W,
                songwriter: O,
                lyricist: V,
                account: Y,
                createdAt: Date.now(),
              },
              ipfsredux: ee,
              selectedFile: G,
              selectedIPFSFile: K,
              account: Y,
            },
            ie = (function () {
              var i = (0, n.Z)(
                l().mark(function i(n) {
                  return l().wrap(function (i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          if (
                            (n.preventDefault(),
                            e(((r = te), { type: b.$f, data: r })),
                            o.name === t)
                          ) {
                            i.next = 5;
                            break;
                          }
                          return (
                            alert('This user is not that artist'),
                            i.abrupt('return')
                          );
                        case 5:
                        case 'end':
                          return i.stop();
                      }
                    var r;
                  }, i);
                }),
              );
              return function (e) {
                return i.apply(this, arguments);
              };
            })();
          return (
            (0, a.useEffect)(function () {}, []),
            (0, c.jsx)('form', {
              onSubmit: ie,
              children: (0, c.jsxs)(p.Z, {
                sx: M.uploadMusicContainer,
                children: [
                  (0, c.jsxs)(p.Z, {
                    sx: M.leftSide,
                    children: [
                      (0, c.jsx)(p.Z, {
                        sx: M.S3UploadContainer,
                        children: (0, c.jsx)(x, {
                          account: Y,
                          selectedFile: G,
                          setSelectedFile: H,
                          S3UploarRef: i,
                        }),
                      }),
                      (0, c.jsx)(p.Z, {
                        sx: M.IPFSUploadContainer,
                        children: (0, c.jsx)(g, {
                          account: Y,
                          setSelectedIPFSFile: Q,
                        }),
                      }),
                    ],
                  }),
                  (0, c.jsxs)(p.Z, {
                    sx: M.rightSide,
                    children: [
                      (0, c.jsxs)(p.Z, {
                        sx: M.inputMusicDataContainer,
                        children: [
                          (0, c.jsx)(Z, {
                            label: '\ud0c0\uc774\ud2c0',
                            value: f,
                            func: h,
                            required: !0,
                          }),
                          (0, c.jsx)(Z, {
                            label: '\uc544\ud2f0\uc2a4\ud2b8',
                            value: t,
                            required: !0,
                            inputprops: { readOnly: !0 },
                          }),
                          (0, c.jsx)(Z, {
                            label: '\uc568\ubc94\uba85',
                            value: y,
                            func: j,
                          }),
                          (0, c.jsx)(P, {
                            variant: 'standard',
                            id: 'music_genre',
                            select: !0,
                            label: '\uc7a5\ub974',
                            value: I,
                            onChange: B,
                            sx: {
                              width: '200px',
                              margin: '10px 0',
                              color: 'white',
                              fontSize: '40px',
                            },
                            children: N.map(function (e) {
                              return (0,
                              c.jsx)(F.Z, { value: e.value, children: e.label }, e.value);
                            }),
                          }),
                          (0, c.jsx)(Z, {
                            label: '\ubc1c\ub9e4\ub144\ub3c4',
                            value: W,
                            func: q,
                          }),
                          (0, c.jsx)(Z, {
                            label: '\uc791\uace1\uac00',
                            value: O,
                            func: T,
                          }),
                          (0, c.jsx)(Z, {
                            label: '\uc791\uc0ac\uac00',
                            value: V,
                            func: X,
                          }),
                        ],
                      }),
                      (0, c.jsx)(p.Z, {
                        sx: M.uploadMusicBtnContainer,
                        children: (0, c.jsx)(R, {
                          type: 'submit',
                          variant: 'text',
                          children: '\ub4f1\ub85d\ud558\uae30',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        R = s.ZP.button.withConfig({
          displayName: 'UploadMusic__UploadButton',
          componentId: 'sc-1kinrsq-0',
        })([
          'margin-top:10px;display:block;width:200px;height:50px;border:none;outline:none;border-radius:25px;color:#fff;font-size:18px;font-weight:500;letter-spacing:1px;text-transform:uppercase;cursor:pointer;background:linear-gradient(135deg,#3a8ffe 0%,#9658fe 100%);',
        ]),
        P = (0, w.Z)({
          root: {
            '& label.Mui-focused': { color: 'white' },
            '& .MuiInputLabel-root': { color: 'white' },
            '& .MuiSvgIcon-root': { color: 'white' },
            '& .MuiInput-root': { color: 'white' },
            '& .MuiInput-underline:before': { borderBottomColor: 'white' },
            '& .MuiInput-underline:after': { borderBottomColor: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' },
            },
          },
        })(v.Z),
        N = [
          { value: 'balad', label: '\ubc1c\ub77c\ub4dc' },
          { value: 'dance', label: '\ub304\uc2a4' },
          { value: 'raphiphop', label: '\ub7a9/\ud799\ud569' },
          { value: 'rnbsoul', label: 'R&B/Soul' },
          { value: 'indie', label: '\uc778\ub514\uc74c\uc545' },
          { value: 'rockmetal', label: '\ub85d/\uba54\ud0c8' },
          { value: 'trot', label: '\ud2b8\ub85c\ud2b8' },
          { value: 'porkblues', label: '\ud3ec\ud06c/\ube14\ub8e8\uc2a4' },
        ];
    },
    42611: function () {},
    88795: function () {},
  },
]);
