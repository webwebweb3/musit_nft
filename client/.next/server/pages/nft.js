'use strict';
(() => {
  var exports = {};
  exports.id = 447;
  exports.ids = [447];
  exports.modules = {
    /***/ 6535: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ nft,
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
      // EXTERNAL MODULE: ./components/nftLayout/NFTLayout.jsx + 8 modules
      var NFTLayout = __webpack_require__(4195);
      // EXTERNAL MODULE: ./_actions/user_actions.js
      var user_actions = __webpack_require__(9402);
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997); // CONCATENATED MODULE: ./components/views/nft/NFT.jsx
      const NFT = () => {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
          style: {
            color: 'white',
          },
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx('div', {
              children:
                '\uB098\uB9CC\uC758 NFT\uB97C \uAC70\uB798\uD574 \uBCF4\uC138\uC694! \uC5B4\uCA4C\uAD6C \uC800\uCA4C\uAD6C \uC0AC\uC9C4 \uC0AC\uC9C4 ',
            }),
            /*#__PURE__*/ jsx_runtime_.jsx('div', {
              children: 'MarketPlace\uB85C \uAC00\uB294 \uBC84\uD2BC',
            }),
            /*#__PURE__*/ jsx_runtime_.jsx('hr', {}),
            /*#__PURE__*/ jsx_runtime_.jsx('div', {
              children:
                '\uB2F9\uC2E0\uC758 NFT\uB97C \uACBD\uB9E4\uD574 \uBCF4\uC138\uC694! \uC5B4\uCA4C\uAD6C \uC800\uCA4C\uAD6C \uC0AC\uC9C4 \uC0AC\uC9C4',
            }),
            /*#__PURE__*/ jsx_runtime_.jsx('div', {
              children: 'Auction\uC73C\uB85C \uAC00\uB294 \uBC84\uD2BC',
            }),
          ],
        });
      };

      /* harmony default export */ const nft_NFT = NFT; // CONCATENATED MODULE: ./pages/nft/index.jsx
      const NFTHome = () => {
        return /*#__PURE__*/ jsx_runtime_.jsx(NFTLayout /* default */.Z, {
          children: /*#__PURE__*/ jsx_runtime_.jsx(nft_NFT, {}),
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
      /* harmony default export */ const nft = NFTHome;

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

    /***/ 1234: /***/ module => {
      module.exports = require('@mui/icons-material/Gavel');

      /***/
    },

    /***/ 3612: /***/ module => {
      module.exports = require('@mui/icons-material/Headset');

      /***/
    },

    /***/ 7458: /***/ module => {
      module.exports = require('@mui/icons-material/Storefront');

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

    /***/ 8369: /***/ module => {
      module.exports = require('@mui/material/Chip');

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
    [400, 664, 361, 758, 739, 195],
    () => __webpack_exec__(6535),
  );
  module.exports = __webpack_exports__;
})();
