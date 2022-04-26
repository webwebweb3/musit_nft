'use strict';
(() => {
  var exports = {};
  exports.id = 888;
  exports.ids = [888];
  exports.modules = {
    /***/ 1201: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        Global: () => /* binding */ Global,
        default: () => /* binding */ _app,
        reportWebVitals: () => /* binding */ reportWebVitals,
      });

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(6689); // CONCATENATED MODULE: external "next/head"
      const head_namespaceObject = require('next/head');
      var head_default =
        /*#__PURE__*/ __webpack_require__.n(head_namespaceObject);
      // EXTERNAL MODULE: ./_store/configureStore.js + 9 modules
      var configureStore = __webpack_require__(5758);
      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(7518);
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997); // CONCATENATED MODULE: ./pages/_app.jsx
      const Global = (0, external_styled_components_.createGlobalStyle)([
        'body{background-color:#111;margin:0;}',
      ]);

      const App = ({ Component }) =>
        /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Global, {}),
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(head_default(), {
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx('meta', {
                  charSet: 'utf-8',
                }),
                /*#__PURE__*/ jsx_runtime_.jsx('title', {
                  children: 'WebWebWeb3',
                }),
              ],
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {}),
          ],
        });

      function reportWebVitals(metric) {
        // console.log(metric);
      }
      /* harmony default export */ const _app =
        configureStore /* default.withRedux */.Z.withRedux(App);

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

    /***/ 6689: /***/ module => {
      module.exports = require('react');

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
  var __webpack_exports__ = __webpack_require__.X(0, [361, 758], () =>
    __webpack_exec__(1201),
  );
  module.exports = __webpack_exports__;
})();
