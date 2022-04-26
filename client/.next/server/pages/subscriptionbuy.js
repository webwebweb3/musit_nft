'use strict';
(() => {
  var exports = {};
  exports.id = 544;
  exports.ids = [544];
  exports.modules = {
    /***/ 8811: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ subscriptionbuy,
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
      // EXTERNAL MODULE: external "@mui/material"
      var material_ = __webpack_require__(5692);
      // EXTERNAL MODULE: external "@mui/material/Paper"
      var Paper_ = __webpack_require__(1598);
      var Paper_default = /*#__PURE__*/ __webpack_require__.n(Paper_);
      // EXTERNAL MODULE: external "@mui/material/Grid"
      var Grid_ = __webpack_require__(5612);
      var Grid_default = /*#__PURE__*/ __webpack_require__.n(Grid_);
      // EXTERNAL MODULE: external "@mui/material/styles"
      var styles_ = __webpack_require__(8442);
      // EXTERNAL MODULE: external "react-icons/bs"
      var bs_ = __webpack_require__(567);
      // EXTERNAL MODULE: external "react-icons/fa"
      var fa_ = __webpack_require__(6290);
      // EXTERNAL MODULE: external "react-icons/gi"
      var gi_ = __webpack_require__(8866);
      // EXTERNAL MODULE: external "@mui/material/Button"
      var Button_ = __webpack_require__(3819);
      var Button_default = /*#__PURE__*/ __webpack_require__.n(Button_);
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997); // CONCATENATED MODULE: ./components/views/SubscriptionBuy.jsx
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source),
            );
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key),
              );
            });
          }
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      const Item = (0, styles_.styled)(Paper_default())(({ theme }) =>
        _objectSpread(
          _objectSpread(
            {
              backgroundColor:
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            },
            theme.typography.body2,
          ),
          {},
          {
            padding: theme.spacing(6),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          },
        ),
      );

      const SubscriptionBuy = () => {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Box, {
              sx: {
                marginTop: '100px',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
              },
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx('h1', {
                  children: '\uAD6C\uB3C5\uAD8C \uAD6C\uB9E4',
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                  children: '\uAD6C\uB3C5\uAD8C \uAD6C\uB9E4',
                }),
              ],
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
              sx: {
                flexGrow: 1,
              },
              children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Grid_default(), {
                container: true,
                spacing: 3,
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx(Grid_default(), {
                    item: true,
                    xs: 4,
                    children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Item, {
                      children: [
                        ' ',
                        /*#__PURE__*/ jsx_runtime_.jsx(Button_default(), {
                          variant: 'contained',
                          startIcon: /*#__PURE__*/ jsx_runtime_.jsx(
                            bs_.BsXDiamondFill,
                            {},
                          ),
                          size: 'large',
                          children: '\uCCAD\uCDE8\uC790',
                        }),
                      ],
                    }),
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(Grid_default(), {
                    item: true,
                    xs: 8,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                      children:
                        'subscription (\uD55C \uB2EC + \uD574\uC9C0\uC548\uD558\uBA74 \uC790\uB3D9 \uAC31\uC2E0(\uC57D\uAD00?)) \uC9C0\uBD88',
                    }),
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(Grid_default(), {
                    item: true,
                    xs: 4,
                    children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Item, {
                      children: [
                        ' ',
                        /*#__PURE__*/ jsx_runtime_.jsx(gi_.GiCrystalize, {}),
                        '\uC544\uD2F0\uC2A4\uD2B8',
                      ],
                    }),
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(Grid_default(), {
                    item: true,
                    xs: 8,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                      children:
                        'subscription (\uBB34\uC81C\uD55C) + \uCD5C\uCD08 \uAC00\uC785\uC2DC \uAC00\uC785\uBE44 \uC9C0\uBD88',
                    }),
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(Grid_default(), {
                    item: true,
                    xs: 4,
                    children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Item, {
                      children: [
                        ' ',
                        /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFire, {}),
                        ' \uC774\uBCA4\uD2B8',
                      ],
                    }),
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(Grid_default(), {
                    item: true,
                    xs: 8,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                      children:
                        '\uAC00\uC785\uBE44 + \uC6D4 \uAD6C\uB3C5\uB8CC \uBB34\uB8CC',
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };

      /* harmony default export */ const views_SubscriptionBuy =
        SubscriptionBuy;
      // EXTERNAL MODULE: ./_actions/user_actions.js
      var user_actions = __webpack_require__(9402); // CONCATENATED MODULE: ./pages/subscriptionbuy.jsx
      const SubscriptionBuyPage = () => {
        return /*#__PURE__*/ jsx_runtime_.jsx(mainlayout /* default */.Z, {
          children: /*#__PURE__*/ jsx_runtime_.jsx(views_SubscriptionBuy, {}),
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
      /* harmony default export */ const subscriptionbuy = SubscriptionBuyPage;

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

    /***/ 3819: /***/ module => {
      module.exports = require('@mui/material/Button');

      /***/
    },

    /***/ 8369: /***/ module => {
      module.exports = require('@mui/material/Chip');

      /***/
    },

    /***/ 8891: /***/ module => {
      module.exports = require('@mui/material/FormControl');

      /***/
    },

    /***/ 5612: /***/ module => {
      module.exports = require('@mui/material/Grid');

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

    /***/ 1598: /***/ module => {
      module.exports = require('@mui/material/Paper');

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

    /***/ 567: /***/ module => {
      module.exports = require('react-icons/bs');

      /***/
    },

    /***/ 6290: /***/ module => {
      module.exports = require('react-icons/fa');

      /***/
    },

    /***/ 8866: /***/ module => {
      module.exports = require('react-icons/gi');

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
    () => __webpack_exec__(8811),
  );
  module.exports = __webpack_exports__;
})();
