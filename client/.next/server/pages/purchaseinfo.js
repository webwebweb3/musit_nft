'use strict';
(() => {
  var exports = {};
  exports.id = 221;
  exports.ids = [221];
  exports.modules = {
    /***/ 2418: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ pages_purchaseinfo,
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
      // EXTERNAL MODULE: external "@mui/material/styles"
      var styles_ = __webpack_require__(8442);
      // EXTERNAL MODULE: external "@mui/material"
      var material_ = __webpack_require__(5692);
      // EXTERNAL MODULE: external "@mui/material/CardMedia"
      var CardMedia_ = __webpack_require__(6731);
      var CardMedia_default = /*#__PURE__*/ __webpack_require__.n(CardMedia_); // CONCATENATED MODULE: external "@material-ui/core"
      const core_namespaceObject = require('@material-ui/core');
      // EXTERNAL MODULE: external "@mui/material/Divider"
      var Divider_ = __webpack_require__(3646);
      var Divider_default = /*#__PURE__*/ __webpack_require__.n(Divider_);
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997); // CONCATENATED MODULE: ./components/views/PurchaseInfo.jsx
      const muiTheme = (0, core_namespaceObject.createMuiTheme)({});

      const PurchaseInfo = () => {
        const SectionStyle = (0, styles_.styled)(material_.Card)(
          ({ theme }) => ({
            width: '100%',
            maxWidth: 464,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: theme.spacing(2, 0, 2, 2),
          }),
        );
        const PurchaseInfoContainer = (0, styles_.styled)('div')(
          ({ theme }) => ({
            width: '100%',
            margin: 'auto',
            display: 'flex',
          }),
        );
        const ContentStyle = (0, styles_.styled)('div')(({ theme }) => ({
          maxWidth: 480,
          margin: 'auto',
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          // justifyContent: 'center',
          padding: theme.spacing(12, 0),
        }));
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
            PurchaseInfoContainer,
            {
              sx: {
                display: 'flex',
              },
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx(SectionStyle, {
                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                    CardMedia_default(),
                    {
                      component: 'img',
                      height: '300',
                      image: '',
                      alt: '\uC568\uBC94\uCEE4\uBC84',
                    },
                  ),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                  children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(ContentStyle, {
                    children: [
                      /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Stack, {
                        children: [
                          /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                              pb: 5,
                              backgroundColor: '#fff',
                            },
                            children: [
                              /*#__PURE__*/ jsx_runtime_.jsx(
                                material_.Typography,
                                {
                                  variant: 'h3',
                                  children: '\uAC00\uC218\uC774\uB984',
                                },
                              ),
                              /*#__PURE__*/ jsx_runtime_.jsx(
                                material_.Typography,
                                {
                                  variant: 'h4',
                                  children: '\uC568\uBC94\uC774\uB984',
                                },
                              ),
                            ],
                          }),
                          /*#__PURE__*/ jsx_runtime_.jsx(Divider_default(), {
                            children: ' STATUS',
                          }),
                        ],
                      }),
                      /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        variant: 'h4',
                        children: '\uAC00\uACA9\uADF8\uB798\uD504',
                      }),
                      /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 12,
                        md: 6,
                        lg: 8,
                      }),
                    ],
                  }),
                }),
              ],
            },
          ),
        });
      };

      /* harmony default export */ const views_PurchaseInfo = PurchaseInfo;
      // EXTERNAL MODULE: ./_actions/user_actions.js
      var user_actions = __webpack_require__(9402); // CONCATENATED MODULE: ./pages/purchaseinfo.jsx
      const purchaseinfo = () => {
        return /*#__PURE__*/ jsx_runtime_.jsx(mainlayout /* default */.Z, {
          children: /*#__PURE__*/ jsx_runtime_.jsx(views_PurchaseInfo, {}),
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
              } ///

              store.dispatch((0, user_actions /* myInfoRequestAction */.e8)()); ///

              store.dispatch(external_redux_saga_.END);
              await store.sagaTask.toPromise();
            },
        );
      /* harmony default export */ const pages_purchaseinfo = purchaseinfo;

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

    /***/ 3612: /***/ module => {
      module.exports = require('@mui/icons-material/Headset');

      /***/
    },

    /***/ 9283: /***/ module => {
      module.exports = require('@mui/icons-material/Paid');

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

    /***/ 19: /***/ module => {
      module.exports = require('@mui/material/Box');

      /***/
    },

    /***/ 6731: /***/ module => {
      module.exports = require('@mui/material/CardMedia');

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
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = moduleId =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(
    0,
    [400, 664, 361, 758, 739, 745],
    () => __webpack_exec__(2418),
  );
  module.exports = __webpack_exports__;
})();
