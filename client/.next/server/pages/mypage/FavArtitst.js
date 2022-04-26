'use strict';
(() => {
  var exports = {};
  exports.id = 288;
  exports.ids = [288];
  exports.modules = {
    /***/ 8709: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ FavArtitst,
        getServerSideProps: () => /* binding */ getServerSideProps,
      });

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(6689);
      // EXTERNAL MODULE: external "redux-saga"
      var external_redux_saga_ = __webpack_require__(6537);
      // EXTERNAL MODULE: external "axios"
      var external_axios_ = __webpack_require__(2167);
      var external_axios_default =
        /*#__PURE__*/ __webpack_require__.n(external_axios_);
      // EXTERNAL MODULE: ./_store/configureStore.js + 9 modules
      var configureStore = __webpack_require__(5758);
      // EXTERNAL MODULE: ./components/mainlayout/index.jsx + 8 modules
      var mainlayout = __webpack_require__(2745);
      // EXTERNAL MODULE: ./components/views/mypage/layout/index.jsx + 1 modules
      var layout = __webpack_require__(2289);
      // EXTERNAL MODULE: ./components/views/mypage/Sidebar/StyledAvatar.jsx
      var StyledAvatar = __webpack_require__(2814);
      // EXTERNAL MODULE: external "@mui/material/ListItemText"
      var ListItemText_ = __webpack_require__(8315);
      var ListItemText_default =
        /*#__PURE__*/ __webpack_require__.n(ListItemText_);
      // EXTERNAL MODULE: external "@mui/material/Divider"
      var Divider_ = __webpack_require__(3646);
      var Divider_default = /*#__PURE__*/ __webpack_require__.n(Divider_);
      // EXTERNAL MODULE: external "@mui/material/List"
      var List_ = __webpack_require__(4192);
      var List_default = /*#__PURE__*/ __webpack_require__.n(List_);
      // EXTERNAL MODULE: external "@mui/material/ListItem"
      var ListItem_ = __webpack_require__(834);
      var ListItem_default = /*#__PURE__*/ __webpack_require__.n(ListItem_);
      // EXTERNAL MODULE: external "@mui/material/ListItemButton"
      var ListItemButton_ = __webpack_require__(1011);
      var ListItemButton_default =
        /*#__PURE__*/ __webpack_require__.n(ListItemButton_);
      // EXTERNAL MODULE: external "@mui/material/Avatar"
      var Avatar_ = __webpack_require__(2120);
      var Avatar_default = /*#__PURE__*/ __webpack_require__.n(Avatar_); // CONCATENATED MODULE: external "@mui/material/Stack"
      const Stack_namespaceObject = require('@mui/material/Stack');
      var Stack_default = /*#__PURE__*/ __webpack_require__.n(
        Stack_namespaceObject,
      );
      // EXTERNAL MODULE: external "@mui/material"
      var material_ = __webpack_require__(5692);
      // EXTERNAL MODULE: external "@mui/system"
      var system_ = __webpack_require__(7986);
      // EXTERNAL MODULE: external "@mui/icons-material/Favorite"
      var Favorite_ = __webpack_require__(7372);
      var Favorite_default = /*#__PURE__*/ __webpack_require__.n(Favorite_);
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997); // CONCATENATED MODULE: ./components/views/mypage/FavArtists.jsx
      //import CardMedia from '@mui/material/CardMedia';

      const FavArtists = () => {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx('div', {
              children: /*#__PURE__*/ jsx_runtime_.jsx(List_default(), {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ListItem_default(), {
                  disablePadding: true,
                  children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                    ListItemButton_default(),
                    {
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(
                          StyledAvatar /* default */.Z,
                          {},
                        ),
                        /*#__PURE__*/ jsx_runtime_.jsx(ListItemText_default(), {
                          primary:
                            '\uC544\uD2F0\uC2A4\uD2B8/ \uC720\uC800 \uC774\uB984',
                        }),
                      ],
                    },
                  ),
                }),
              }),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Divider_default(), {
              textAlign: 'left',
              children: 'You Are Following:',
            }),
            /*#__PURE__*/ jsx_runtime_.jsx('br', {}),
            /*#__PURE__*/ jsx_runtime_.jsx(system_.Box, {
              sx: {
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              },
              children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Stack_default(), {
                direction: 'column',
                spacing: 1,
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx(Avatar_default(), {
                    alt: 'Remy Sharp',
                    src: '',
                    sx: {
                      width: 200,
                      height: 200,
                    },
                  }),
                  /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Typography, {
                    children: [
                      ' ',
                      /*#__PURE__*/ jsx_runtime_.jsx(Favorite_default(), {}),
                      ' \uC544\uD2F0\uC2A4\uD2B8 \uC774\uB984',
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };

      /* harmony default export */ const mypage_FavArtists = FavArtists;
      // EXTERNAL MODULE: ./_actions/user_actions.js
      var user_actions = __webpack_require__(9402); // CONCATENATED MODULE: ./pages/mypage/FavArtitst.jsx
      const FavArtistsPage = () => {
        return /*#__PURE__*/ jsx_runtime_.jsx(mainlayout /* default */.Z, {
          children: /*#__PURE__*/ jsx_runtime_.jsx(layout /* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(mypage_FavArtists, {}),
          }),
        });
      };

      const getServerSideProps =
        configureStore /* default.getServerSideProps */.Z.getServerSideProps(
          store =>
            async ({ req }) => {
              const cookie = req ? req.headers.cookie : '';
              external_axios_default().defaults.headers.Cookie = '';

              if (req && cookie) {
                external_axios_default().defaults.headers.Cookie = cookie;
              }

              store.dispatch((0, user_actions /* myInfoRequestAction */.e8)());
              store.dispatch(external_redux_saga_.END);
              await store.sagaTask.toPromise();
            },
        );
      /* harmony default export */ const FavArtitst = FavArtistsPage;

      /***/
    },

    /***/ 1841: /***/ module => {
      module.exports = require('@aws-sdk/client-s3');

      /***/
    },

    /***/ 8641: /***/ module => {
      module.exports = require('@aws-sdk/lib-storage');

      /***/
    },

    /***/ 2805: /***/ module => {
      module.exports = require('@emotion/react');

      /***/
    },

    /***/ 113: /***/ module => {
      module.exports = require('@mui/base/OptionUnstyled');

      /***/
    },

    /***/ 9395: /***/ module => {
      module.exports = require('@mui/base/PopperUnstyled');

      /***/
    },

    /***/ 374: /***/ module => {
      module.exports = require('@mui/base/SelectUnstyled');

      /***/
    },

    /***/ 7915: /***/ module => {
      module.exports = require('@mui/icons-material');

      /***/
    },

    /***/ 4555: /***/ module => {
      module.exports = require('@mui/icons-material/Audiotrack');

      /***/
    },

    /***/ 2395: /***/ module => {
      module.exports = require('@mui/icons-material/AutoAwesome');

      /***/
    },

    /***/ 3239: /***/ module => {
      module.exports = require('@mui/icons-material/CardMembership');

      /***/
    },

    /***/ 7235: /***/ module => {
      module.exports = require('@mui/icons-material/Dashboard');

      /***/
    },

    /***/ 7372: /***/ module => {
      module.exports = require('@mui/icons-material/Favorite');

      /***/
    },

    /***/ 3612: /***/ module => {
      module.exports = require('@mui/icons-material/Headset');

      /***/
    },

    /***/ 8582: /***/ module => {
      module.exports = require('@mui/icons-material/LibraryMusic');

      /***/
    },

    /***/ 9283: /***/ module => {
      module.exports = require('@mui/icons-material/Paid');

      /***/
    },

    /***/ 1939: /***/ module => {
      module.exports = require('@mui/icons-material/Person');

      /***/
    },

    /***/ 7609: /***/ module => {
      module.exports = require('@mui/icons-material/SpatialTracking');

      /***/
    },

    /***/ 303: /***/ module => {
      module.exports = require('@mui/icons-material/Token');

      /***/
    },

    /***/ 5692: /***/ module => {
      module.exports = require('@mui/material');

      /***/
    },

    /***/ 2120: /***/ module => {
      module.exports = require('@mui/material/Avatar');

      /***/
    },

    /***/ 5168: /***/ module => {
      module.exports = require('@mui/material/Badge');

      /***/
    },

    /***/ 19: /***/ module => {
      module.exports = require('@mui/material/Box');

      /***/
    },

    /***/ 8369: /***/ module => {
      module.exports = require('@mui/material/Chip');

      /***/
    },

    /***/ 3646: /***/ module => {
      module.exports = require('@mui/material/Divider');

      /***/
    },

    /***/ 8891: /***/ module => {
      module.exports = require('@mui/material/FormControl');

      /***/
    },

    /***/ 911: /***/ module => {
      module.exports = require('@mui/material/InputLabel');

      /***/
    },

    /***/ 4192: /***/ module => {
      module.exports = require('@mui/material/List');

      /***/
    },

    /***/ 834: /***/ module => {
      module.exports = require('@mui/material/ListItem');

      /***/
    },

    /***/ 1011: /***/ module => {
      module.exports = require('@mui/material/ListItemButton');

      /***/
    },

    /***/ 3787: /***/ module => {
      module.exports = require('@mui/material/ListItemIcon');

      /***/
    },

    /***/ 8315: /***/ module => {
      module.exports = require('@mui/material/ListItemText');

      /***/
    },

    /***/ 9271: /***/ module => {
      module.exports = require('@mui/material/MenuItem');

      /***/
    },

    /***/ 7730: /***/ module => {
      module.exports = require('@mui/material/OutlinedInput');

      /***/
    },

    /***/ 2651: /***/ module => {
      module.exports = require('@mui/material/Select');

      /***/
    },

    /***/ 8442: /***/ module => {
      module.exports = require('@mui/material/styles');

      /***/
    },

    /***/ 7986: /***/ module => {
      module.exports = require('@mui/system');

      /***/
    },

    /***/ 2167: /***/ module => {
      module.exports = require('axios');

      /***/
    },

    /***/ 7133: /***/ module => {
      module.exports = require('immer');

      /***/
    },

    /***/ 5648: /***/ module => {
      module.exports = require('next-redux-wrapper');

      /***/
    },

    /***/ 562: /***/ module => {
      module.exports = require('next/dist/server/denormalize-page-path.js');

      /***/
    },

    /***/ 4014: /***/ module => {
      module.exports = require('next/dist/shared/lib/i18n/normalize-locale-path.js');

      /***/
    },

    /***/ 8524: /***/ module => {
      module.exports = require('next/dist/shared/lib/is-plain-object.js');

      /***/
    },

    /***/ 8020: /***/ module => {
      module.exports = require('next/dist/shared/lib/mitt.js');

      /***/
    },

    /***/ 4964: /***/ module => {
      module.exports = require('next/dist/shared/lib/router-context.js');

      /***/
    },

    /***/ 9565: /***/ module => {
      module.exports = require('next/dist/shared/lib/router/utils/get-asset-path-from-route.js');

      /***/
    },

    /***/ 4365: /***/ module => {
      module.exports = require('next/dist/shared/lib/router/utils/get-middleware-regex.js');

      /***/
    },

    /***/ 1428: /***/ module => {
      module.exports = require('next/dist/shared/lib/router/utils/is-dynamic.js');

      /***/
    },

    /***/ 1292: /***/ module => {
      module.exports = require('next/dist/shared/lib/router/utils/parse-relative-url.js');

      /***/
    },

    /***/ 979: /***/ module => {
      module.exports = require('next/dist/shared/lib/router/utils/querystring.js');

      /***/
    },

    /***/ 6052: /***/ module => {
      module.exports = require('next/dist/shared/lib/router/utils/resolve-rewrites.js');

      /***/
    },

    /***/ 4226: /***/ module => {
      module.exports = require('next/dist/shared/lib/router/utils/route-matcher.js');

      /***/
    },

    /***/ 5052: /***/ module => {
      module.exports = require('next/dist/shared/lib/router/utils/route-regex.js');

      /***/
    },

    /***/ 9232: /***/ module => {
      module.exports = require('next/dist/shared/lib/utils.js');

      /***/
    },

    /***/ 1853: /***/ module => {
      module.exports = require('next/router');

      /***/
    },

    /***/ 580: /***/ module => {
      module.exports = require('prop-types');

      /***/
    },

    /***/ 6689: /***/ module => {
      module.exports = require('react');

      /***/
    },

    /***/ 6022: /***/ module => {
      module.exports = require('react-redux');

      /***/
    },

    /***/ 9980: /***/ module => {
      module.exports = require('react-swipeable-views');

      /***/
    },

    /***/ 997: /***/ module => {
      module.exports = require('react/jsx-runtime');

      /***/
    },

    /***/ 6695: /***/ module => {
      module.exports = require('redux');

      /***/
    },

    /***/ 173: /***/ module => {
      module.exports = require('redux-devtools-extension');

      /***/
    },

    /***/ 6537: /***/ module => {
      module.exports = require('redux-saga');

      /***/
    },

    /***/ 6477: /***/ module => {
      module.exports = require('redux-saga/effects');

      /***/
    },

    /***/ 8519: /***/ module => {
      module.exports = require('web3');

      /***/
    },

    /***/ 7147: /***/ module => {
      module.exports = require('fs');

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require('../../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = moduleId =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(
    0,
    [400, 664, 361, 758, 739, 745, 289, 814],
    () => __webpack_exec__(8709),
  );
  module.exports = __webpack_exports__;
})();
