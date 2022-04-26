'use strict';
(() => {
  var exports = {};
  exports.id = 750;
  exports.ids = [750];
  exports.modules = {
    /***/ 1082: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ getServerSideProps: () =>
          /* binding */ getServerSideProps,
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(6689);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(6537);
      /* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          redux_saga__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(2167);
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(5758);
      /* harmony import */ var _components_mainlayout__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(2745);
      /* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_7__ =
        __webpack_require__(9402);
      /* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(5152);
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(997);
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__,
        );

      // import UploadMusic from '../../../components/views/studio/uploadmusic/UploadMusic';

      const UploadMusic = (0,
      next_dynamic__WEBPACK_IMPORTED_MODULE_5__['default'])(
        () =>
          __webpack_require__
            .e(/* import() */ 913)
            .then(__webpack_require__.bind(__webpack_require__, 9913)),
        {
          ssr: false,
          loadableGenerated: {
            modules: [
              'studio\\[artistName]\\uploadmusic.jsx -> ' +
                '../../../components/views/studio/uploadmusic/UploadMusic',
            ],
          },
        },
      );

      const Home = () => {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
          _components_mainlayout__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
          {
            children:
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
                UploadMusic,
                {},
              ),
          },
        );
      };

      const getServerSideProps =
        _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ /* ["default"].getServerSideProps */.Z.getServerSideProps(
          store =>
            async ({ req }) => {
              const cookie = req ? req.headers.cookie : '';
              axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.Cookie =
                '';

              if (req && cookie) {
                axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.Cookie =
                  cookie;
              }

              store.dispatch(
                (0,
                _actions_user_actions__WEBPACK_IMPORTED_MODULE_7__ /* .myInfoRequestAction */.e8)(),
              );
              store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_1__.END);
              await store.sagaTask.toPromise();
            },
        );
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Home;

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

    /***/ 9484: /***/ module => {
      module.exports = require('@mui/styles');

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

    /***/ 5832: /***/ module => {
      module.exports = require('next/dist/shared/lib/loadable.js');

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

    /***/ 7518: /***/ module => {
      module.exports = require('styled-components');

      /***/
    },

    /***/ 8519: /***/ module => {
      module.exports = require('web3');

      /***/
    },

    /***/ 7000: /***/ module => {
      module.exports = import('ipfs-http-client');

      /***/
    },

    /***/ 7147: /***/ module => {
      module.exports = require('fs');

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require('../../../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = moduleId =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(
    0,
    [400, 664, 152, 361, 758, 739, 745],
    () => __webpack_exec__(1082),
  );
  module.exports = __webpack_exports__;
})();
