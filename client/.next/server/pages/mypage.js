'use strict';
(() => {
  var exports = {};
  exports.id = 587;
  exports.ids = [587];
  exports.modules = {
    /***/ 2627: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ F: () => /* binding */ cardStyles,
        /* harmony export */
      });
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(7518);
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_0__,
        );

      const cardStyles = (0,
      styled_components__WEBPACK_IMPORTED_MODULE_0__.css)([
        'padding:1rem 2rem 3rem 2rem;border-radius:1rem;background-color:#0546d6;color:white;',
      ]);

      /***/
    },

    /***/ 6532: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ mypage,
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
      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(7518);
      var external_styled_components_default =
        /*#__PURE__*/ __webpack_require__.n(external_styled_components_);
      // EXTERNAL MODULE: external "react-icons/bs"
      var bs_ = __webpack_require__(567); // CONCATENATED MODULE: external "react-icons/io5"
      const io5_namespaceObject = require('react-icons/io5');
      // EXTERNAL MODULE: external "react-icons/fa"
      var fa_ = __webpack_require__(6290); // CONCATENATED MODULE: external "react-icons/si"
      const si_namespaceObject = require('react-icons/si');
      // EXTERNAL MODULE: ./components/views/mypage/ReusableStyles.js
      var ReusableStyles = __webpack_require__(2627);
      // EXTERNAL MODULE: external "@mui/material/styles"
      var styles_ = __webpack_require__(8442);
      // EXTERNAL MODULE: external "@mui/material/Box"
      var Box_ = __webpack_require__(19);
      var Box_default = /*#__PURE__*/ __webpack_require__.n(Box_);
      // EXTERNAL MODULE: external "@mui/material/Card"
      var Card_ = __webpack_require__(8167);
      var Card_default = /*#__PURE__*/ __webpack_require__.n(Card_);
      // EXTERNAL MODULE: external "@mui/material/CardContent"
      var CardContent_ = __webpack_require__(8455);
      var CardContent_default =
        /*#__PURE__*/ __webpack_require__.n(CardContent_);
      // EXTERNAL MODULE: external "@mui/material/CardMedia"
      var CardMedia_ = __webpack_require__(6731);
      var CardMedia_default = /*#__PURE__*/ __webpack_require__.n(CardMedia_);
      // EXTERNAL MODULE: external "@mui/material/IconButton"
      var IconButton_ = __webpack_require__(7934);
      var IconButton_default = /*#__PURE__*/ __webpack_require__.n(IconButton_);
      // EXTERNAL MODULE: external "@mui/material/Typography"
      var Typography_ = __webpack_require__(7163);
      var Typography_default = /*#__PURE__*/ __webpack_require__.n(Typography_);
      // EXTERNAL MODULE: external "@mui/icons-material/SkipPrevious"
      var SkipPrevious_ = __webpack_require__(7089);
      var SkipPrevious_default =
        /*#__PURE__*/ __webpack_require__.n(SkipPrevious_);
      // EXTERNAL MODULE: external "@mui/icons-material/PlayArrow"
      var PlayArrow_ = __webpack_require__(9272);
      var PlayArrow_default = /*#__PURE__*/ __webpack_require__.n(PlayArrow_);
      // EXTERNAL MODULE: external "@mui/icons-material/SkipNext"
      var SkipNext_ = __webpack_require__(4613);
      var SkipNext_default = /*#__PURE__*/ __webpack_require__.n(SkipNext_);
      // EXTERNAL MODULE: external "@mui/material/Divider"
      var Divider_ = __webpack_require__(3646);
      var Divider_default = /*#__PURE__*/ __webpack_require__.n(Divider_);
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997); // CONCATENATED MODULE: ./components/views/mypage/DashBoard.jsx
      const Section = external_styled_components_default().section.withConfig({
        displayName: 'DashBoard__Section',
        componentId: 'sc-1ud32gl-0',
      })(
        [
          'width:738.54px;display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;.analytic{',
          ';padding:1rem;display:flex;justify-content:space-evenly;align-items:center;gap:1rem;transition:0.5s ease-in-out;&:hover{background-color:#fff;color:black;svg{color:white;}}.logo{background-color:black;border-radius:3rem;display:flex;justify-content:center;align-items:center;padding:1.5rem;svg{font-size:1.5rem;}}}@media screen and (min-width:280px) and (max-width:720px){grid-template-columns:repeat(auto-fill,minmax(220px,1fr));.analytic{&:nth-of-type(3),&:nth-of-type(4){flex-direction:row-reverse;}}}',
        ],
        ReusableStyles /* cardStyles */.F,
      );

      const DashBoard = () => {
        const theme = (0, styles_.useTheme)();
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Section, {
              children: [
                /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                  className: 'analytic ',
                  children: [
                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                      className: 'content',
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx('h5', {
                          children: '\uCD1D \uC74C\uC545 \uC7AC\uC0DD\uC218 ',
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx('h2', {
                          children: ' \uC7AC\uC0DD \uC2DC\uAC04 \uBD84 \uCD08 ',
                        }),
                      ],
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx('div', {
                      className: 'logo',
                      children: /*#__PURE__*/ jsx_runtime_.jsx(
                        bs_.BsMusicPlayerFill,
                        {},
                      ),
                    }),
                  ],
                }),
                /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                  className: 'analytic',
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx('div', {
                      className: 'logo',
                      children: /*#__PURE__*/ jsx_runtime_.jsx(
                        io5_namespaceObject.IoStatsChart,
                        {},
                      ),
                    }),
                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                      className: 'content',
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx('h5', {
                          children: '\uB0B4\uAC00 \uAD6C\uB9E4\uD55C NFT',
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx('h2', {
                          children:
                            '\uBCF4\uC720\uC911\uC778 NFT \uAC2F\uC218 ',
                        }),
                      ],
                    }),
                  ],
                }),
                /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                  className: 'analytic',
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx('div', {
                      className: 'logo',
                      children: /*#__PURE__*/ jsx_runtime_.jsx(
                        fa_.FaHeartbeat,
                        {},
                      ),
                    }),
                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                      className: 'content',
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx('h5', {
                          children:
                            '\uC88B\uC544\uD558\uB294 \uB178\uB798 \uD2B8\uB799',
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx('h2', {
                          children:
                            '\uC88B\uC544\uD558\uB294 \uB178\uB798 \uD2B8\uB799 \uC218 ',
                        }),
                      ],
                    }),
                  ],
                }),
                /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                  className: 'analytic ',
                  children: [
                    /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                      className: 'content',
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx('h5', {
                          children: '\uD604\uC7AC \uAD6C\uB3C5 \uC815\uBCF4 ',
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx('h2', {
                          children:
                            '\uAD6C\uB3C5 \uB4F1\uAE09 \uBCF4\uC5EC\uC8FC\uAE30',
                        }),
                      ],
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx('div', {
                      className: 'logo',
                      children: /*#__PURE__*/ jsx_runtime_.jsx(
                        si_namespaceObject.SiSubstack,
                        {},
                      ),
                    }),
                  ],
                }),
              ],
            }),
            /*#__PURE__*/ jsx_runtime_.jsx('br', {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Divider_default(), {}),
            /*#__PURE__*/ jsx_runtime_.jsx('h2', {
              children: '\uCD5C\uC2E0 \uD50C\uB808\uC774 \uBAA9\uB85D',
            }),
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Section, {
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx('div', {
                  children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                    Card_default(),
                    {
                      sx: {
                        display: 'flex',
                      },
                      children: [
                        /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Box_default(), {
                          sx: {
                            display: 'flex',
                            flexDirection: 'column',
                          },
                          children: [
                            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                              CardContent_default(),
                              {
                                sx: {
                                  flex: '1 0 auto',
                                },
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Typography_default(),
                                    {
                                      component: 'div',
                                      variant: 'h5',
                                      children: '\uB178\uB798\uC81C\uBAA9',
                                    },
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Typography_default(),
                                    {
                                      variant: 'subtitle1',
                                      color: 'text.secondary',
                                      component: 'div',
                                      children:
                                        '\uC544\uD2F0\uC2A4\uD2B8\uC774\uB984',
                                    },
                                  ),
                                ],
                              },
                            ),
                            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                              Box_default(),
                              {
                                sx: {
                                  display: 'flex',
                                  alignItems: 'center',
                                  pl: 1,
                                  pb: 1,
                                },
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    IconButton_default(),
                                    {
                                      'aria-label': 'previous',
                                      children:
                                        theme.direction === 'rtl'
                                          ? /*#__PURE__*/ jsx_runtime_.jsx(
                                              SkipNext_default(),
                                              {},
                                            )
                                          : /*#__PURE__*/ jsx_runtime_.jsx(
                                              SkipPrevious_default(),
                                              {},
                                            ),
                                    },
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    IconButton_default(),
                                    {
                                      'aria-label': 'play/pause',
                                      children: /*#__PURE__*/ jsx_runtime_.jsx(
                                        PlayArrow_default(),
                                        {
                                          sx: {
                                            height: 38,
                                            width: 38,
                                          },
                                        },
                                      ),
                                    },
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    IconButton_default(),
                                    {
                                      'aria-label': 'next',
                                      children:
                                        theme.direction === 'rtl'
                                          ? /*#__PURE__*/ jsx_runtime_.jsx(
                                              SkipPrevious_default(),
                                              {},
                                            )
                                          : /*#__PURE__*/ jsx_runtime_.jsx(
                                              SkipNext_default(),
                                              {},
                                            ),
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CardMedia_default(), {
                          component: 'img',
                          sx: {
                            width: 151,
                          },
                          image: '../../public/images/bgimg.jpg',
                          alt: '\uC568\uBC94 \uCEE4\uBC84',
                        }),
                      ],
                    },
                  ),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx('div', {
                  children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                    Card_default(),
                    {
                      sx: {
                        display: 'flex',
                      },
                      children: [
                        /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Box_default(), {
                          sx: {
                            display: 'flex',
                            flexDirection: 'column',
                          },
                          children: [
                            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                              CardContent_default(),
                              {
                                sx: {
                                  flex: '1 0 auto',
                                },
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Typography_default(),
                                    {
                                      component: 'div',
                                      variant: 'h5',
                                      children: '\uB178\uB798\uC81C\uBAA9',
                                    },
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Typography_default(),
                                    {
                                      variant: 'subtitle1',
                                      color: 'text.secondary',
                                      component: 'div',
                                      children:
                                        '\uC544\uD2F0\uC2A4\uD2B8\uC774\uB984',
                                    },
                                  ),
                                ],
                              },
                            ),
                            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                              Box_default(),
                              {
                                sx: {
                                  display: 'flex',
                                  alignItems: 'center',
                                  pl: 1,
                                  pb: 1,
                                },
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    IconButton_default(),
                                    {
                                      'aria-label': 'previous',
                                      children:
                                        theme.direction === 'rtl'
                                          ? /*#__PURE__*/ jsx_runtime_.jsx(
                                              SkipNext_default(),
                                              {},
                                            )
                                          : /*#__PURE__*/ jsx_runtime_.jsx(
                                              SkipPrevious_default(),
                                              {},
                                            ),
                                    },
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    IconButton_default(),
                                    {
                                      'aria-label': 'play/pause',
                                      children: /*#__PURE__*/ jsx_runtime_.jsx(
                                        PlayArrow_default(),
                                        {
                                          sx: {
                                            height: 38,
                                            width: 38,
                                          },
                                        },
                                      ),
                                    },
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    IconButton_default(),
                                    {
                                      'aria-label': 'next',
                                      children:
                                        theme.direction === 'rtl'
                                          ? /*#__PURE__*/ jsx_runtime_.jsx(
                                              SkipPrevious_default(),
                                              {},
                                            )
                                          : /*#__PURE__*/ jsx_runtime_.jsx(
                                              SkipNext_default(),
                                              {},
                                            ),
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CardMedia_default(), {
                          component: 'img',
                          sx: {
                            width: 151,
                          },
                          image: '../../public/images/bgimg.jpg',
                          alt: '\uC568\uBC94 \uCEE4\uBC84',
                        }),
                      ],
                    },
                  ),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx('div', {
                  children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                    Card_default(),
                    {
                      sx: {
                        display: 'flex',
                      },
                      children: [
                        /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Box_default(), {
                          sx: {
                            display: 'flex',
                            flexDirection: 'column',
                          },
                          children: [
                            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                              CardContent_default(),
                              {
                                sx: {
                                  flex: '1 0 auto',
                                },
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Typography_default(),
                                    {
                                      component: 'div',
                                      variant: 'h5',
                                      children: '\uB178\uB798\uC81C\uBAA9',
                                    },
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Typography_default(),
                                    {
                                      variant: 'subtitle1',
                                      color: 'text.secondary',
                                      component: 'div',
                                      children:
                                        '\uC544\uD2F0\uC2A4\uD2B8\uC774\uB984',
                                    },
                                  ),
                                ],
                              },
                            ),
                            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                              Box_default(),
                              {
                                sx: {
                                  display: 'flex',
                                  alignItems: 'center',
                                  pl: 1,
                                  pb: 1,
                                },
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    IconButton_default(),
                                    {
                                      'aria-label': 'previous',
                                      children:
                                        theme.direction === 'rtl'
                                          ? /*#__PURE__*/ jsx_runtime_.jsx(
                                              SkipNext_default(),
                                              {},
                                            )
                                          : /*#__PURE__*/ jsx_runtime_.jsx(
                                              SkipPrevious_default(),
                                              {},
                                            ),
                                    },
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    IconButton_default(),
                                    {
                                      'aria-label': 'play/pause',
                                      children: /*#__PURE__*/ jsx_runtime_.jsx(
                                        PlayArrow_default(),
                                        {
                                          sx: {
                                            height: 38,
                                            width: 38,
                                          },
                                        },
                                      ),
                                    },
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    IconButton_default(),
                                    {
                                      'aria-label': 'next',
                                      children:
                                        theme.direction === 'rtl'
                                          ? /*#__PURE__*/ jsx_runtime_.jsx(
                                              SkipPrevious_default(),
                                              {},
                                            )
                                          : /*#__PURE__*/ jsx_runtime_.jsx(
                                              SkipNext_default(),
                                              {},
                                            ),
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CardMedia_default(), {
                          component: 'img',
                          sx: {
                            width: 151,
                          },
                          image: '../../public/images/bgimg.jpg',
                          alt: '\uC568\uBC94 \uCEE4\uBC84',
                        }),
                      ],
                    },
                  ),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx('div', {
                  children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                    Card_default(),
                    {
                      sx: {
                        display: 'flex',
                      },
                      children: [
                        /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Box_default(), {
                          sx: {
                            display: 'flex',
                            flexDirection: 'column',
                          },
                          children: [
                            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                              CardContent_default(),
                              {
                                sx: {
                                  flex: '1 0 auto',
                                },
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Typography_default(),
                                    {
                                      component: 'div',
                                      variant: 'h5',
                                      children: '\uB178\uB798\uC81C\uBAA9',
                                    },
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    Typography_default(),
                                    {
                                      variant: 'subtitle1',
                                      color: 'text.secondary',
                                      component: 'div',
                                      children:
                                        '\uC544\uD2F0\uC2A4\uD2B8\uC774\uB984',
                                    },
                                  ),
                                ],
                              },
                            ),
                            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                              Box_default(),
                              {
                                sx: {
                                  display: 'flex',
                                  alignItems: 'center',
                                  pl: 1,
                                  pb: 1,
                                },
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    IconButton_default(),
                                    {
                                      'aria-label': 'previous',
                                      children:
                                        theme.direction === 'rtl'
                                          ? /*#__PURE__*/ jsx_runtime_.jsx(
                                              SkipNext_default(),
                                              {},
                                            )
                                          : /*#__PURE__*/ jsx_runtime_.jsx(
                                              SkipPrevious_default(),
                                              {},
                                            ),
                                    },
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    IconButton_default(),
                                    {
                                      'aria-label': 'play/pause',
                                      children: /*#__PURE__*/ jsx_runtime_.jsx(
                                        PlayArrow_default(),
                                        {
                                          sx: {
                                            height: 38,
                                            width: 38,
                                          },
                                        },
                                      ),
                                    },
                                  ),
                                  /*#__PURE__*/ jsx_runtime_.jsx(
                                    IconButton_default(),
                                    {
                                      'aria-label': 'next',
                                      children:
                                        theme.direction === 'rtl'
                                          ? /*#__PURE__*/ jsx_runtime_.jsx(
                                              SkipPrevious_default(),
                                              {},
                                            )
                                          : /*#__PURE__*/ jsx_runtime_.jsx(
                                              SkipNext_default(),
                                              {},
                                            ),
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CardMedia_default(), {
                          component: 'img',
                          sx: {
                            width: 151,
                          },
                          image: '../../public/images/bgimg.jpg',
                          alt: '\uC568\uBC94 \uCEE4\uBC84',
                        }),
                      ],
                    },
                  ),
                }),
              ],
            }),
          ],
        });
      };

      /* harmony default export */ const mypage_DashBoard = DashBoard;
      // EXTERNAL MODULE: ./_actions/user_actions.js
      var user_actions = __webpack_require__(9402); // CONCATENATED MODULE: ./pages/mypage/index.jsx
      const DashBoardPage = () => {
        return /*#__PURE__*/ jsx_runtime_.jsx(mainlayout /* default */.Z, {
          children: /*#__PURE__*/ jsx_runtime_.jsx(layout /* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(mypage_DashBoard, {}),
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
      /* harmony default export */ const mypage = DashBoardPage;

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

    /***/ 9272: /***/ module => {
      module.exports = require('@mui/icons-material/PlayArrow');

      /***/
    },

    /***/ 4613: /***/ module => {
      module.exports = require('@mui/icons-material/SkipNext');

      /***/
    },

    /***/ 7089: /***/ module => {
      module.exports = require('@mui/icons-material/SkipPrevious');

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

    /***/ 19: /***/ module => {
      module.exports = require('@mui/material/Box');

      /***/
    },

    /***/ 8167: /***/ module => {
      module.exports = require('@mui/material/Card');

      /***/
    },

    /***/ 8455: /***/ module => {
      module.exports = require('@mui/material/CardContent');

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

    /***/ 7934: /***/ module => {
      module.exports = require('@mui/material/IconButton');

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

    /***/ 7163: /***/ module => {
      module.exports = require('@mui/material/Typography');

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
    [400, 664, 361, 758, 739, 745, 289],
    () => __webpack_exec__(6532),
  );
  module.exports = __webpack_exports__;
})();
