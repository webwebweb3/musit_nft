'use strict';
(() => {
  var exports = {};
  exports.id = 660;
  exports.ids = [660];
  exports.modules = {
    /***/ 1798: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => /* binding */ MyDocument,
        /* harmony export */
      });
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(6689);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(6859);
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(7518);
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(997);
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__,
        );
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

      class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__[
        'default'
      ] {
        static async getInitialProps(ctx) {
          const sheet =
            new styled_components__WEBPACK_IMPORTED_MODULE_2__.ServerStyleSheet();
          const originalRenderPage = ctx.renderPage;

          try {
            ctx.renderPage = () =>
              originalRenderPage({
                enhanceApp: App => props =>
                  sheet.collectStyles(
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
                      App,
                      _objectSpread({}, props),
                    ),
                  ),
              });

            const initialProps =
              await next_document__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ].getInitialProps(ctx);
            return _objectSpread(
              _objectSpread({}, initialProps),
              {},
              {
                styles: /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                  {
                    children: [initialProps.styles, sheet.getStyleElement()],
                  },
                ),
              },
            );
          } catch (error) {
            console.error(error);
          } finally {
            sheet.seal();
          }
        }

        render() {
          return /*#__PURE__*/ (0,
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
            next_document__WEBPACK_IMPORTED_MODULE_1__.Html,
            {
              children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
                  next_document__WEBPACK_IMPORTED_MODULE_1__.Head,
                  {},
                ),
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)('body', {
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
                      next_document__WEBPACK_IMPORTED_MODULE_1__.Main,
                      {},
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
                      next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript,
                      {},
                    ),
                  ],
                }),
              ],
            },
          );
        }
      }

      /***/
    },

    /***/ 4140: /***/ module => {
      module.exports = require('next/dist/server/get-page-files.js');

      /***/
    },

    /***/ 9716: /***/ module => {
      module.exports = require('next/dist/server/htmlescape.js');

      /***/
    },

    /***/ 6368: /***/ module => {
      module.exports = require('next/dist/server/utils.js');

      /***/
    },

    /***/ 6724: /***/ module => {
      module.exports = require('next/dist/shared/lib/constants.js');

      /***/
    },

    /***/ 2796: /***/ module => {
      module.exports = require('next/dist/shared/lib/head-manager-context.js');

      /***/
    },

    /***/ 8524: /***/ module => {
      module.exports = require('next/dist/shared/lib/is-plain-object.js');

      /***/
    },

    /***/ 9232: /***/ module => {
      module.exports = require('next/dist/shared/lib/utils.js');

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

    /***/ 7518: /***/ module => {
      module.exports = require('styled-components');

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = moduleId =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(0, [400, 859], () =>
    __webpack_exec__(1798),
  );
  module.exports = __webpack_exports__;
})();
