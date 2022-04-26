'use strict';
exports.id = 289;
exports.ids = [289];
exports.modules = {
  /***/ 2289: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__,
  ) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ layout,
    });

    // EXTERNAL MODULE: external "@mui/material"
    var material_ = __webpack_require__(5692);
    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689);
    // EXTERNAL MODULE: external "react-redux"
    var external_react_redux_ = __webpack_require__(6022);
    // EXTERNAL MODULE: external "next/router"
    var router_ = __webpack_require__(1853);
    var router_default = /*#__PURE__*/ __webpack_require__.n(router_);
    // EXTERNAL MODULE: ./node_modules/next/link.js
    var next_link = __webpack_require__(1664);
    // EXTERNAL MODULE: external "@mui/material/Box"
    var Box_ = __webpack_require__(19);
    var Box_default = /*#__PURE__*/ __webpack_require__.n(Box_);
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
    // EXTERNAL MODULE: external "@mui/material/ListItemIcon"
    var ListItemIcon_ = __webpack_require__(3787);
    var ListItemIcon_default =
      /*#__PURE__*/ __webpack_require__.n(ListItemIcon_);
    // EXTERNAL MODULE: external "@mui/material/ListItemText"
    var ListItemText_ = __webpack_require__(8315);
    var ListItemText_default =
      /*#__PURE__*/ __webpack_require__.n(ListItemText_);
    // EXTERNAL MODULE: external "@mui/material/Divider"
    var Divider_ = __webpack_require__(3646);
    var Divider_default = /*#__PURE__*/ __webpack_require__.n(Divider_);
    // EXTERNAL MODULE: external "@mui/icons-material/Token"
    var Token_ = __webpack_require__(303);
    var Token_default = /*#__PURE__*/ __webpack_require__.n(Token_);
    // EXTERNAL MODULE: external "@mui/icons-material/Person"
    var Person_ = __webpack_require__(1939);
    var Person_default = /*#__PURE__*/ __webpack_require__.n(Person_);
    // EXTERNAL MODULE: external "@mui/icons-material/LibraryMusic"
    var LibraryMusic_ = __webpack_require__(8582);
    var LibraryMusic_default =
      /*#__PURE__*/ __webpack_require__.n(LibraryMusic_);
    // EXTERNAL MODULE: external "@mui/icons-material/SpatialTracking"
    var SpatialTracking_ = __webpack_require__(7609);
    var SpatialTracking_default =
      /*#__PURE__*/ __webpack_require__.n(SpatialTracking_);
    // EXTERNAL MODULE: external "@mui/icons-material/Audiotrack"
    var Audiotrack_ = __webpack_require__(4555);
    var Audiotrack_default = /*#__PURE__*/ __webpack_require__.n(Audiotrack_);
    // EXTERNAL MODULE: external "@mui/icons-material/CardMembership"
    var CardMembership_ = __webpack_require__(3239);
    var CardMembership_default =
      /*#__PURE__*/ __webpack_require__.n(CardMembership_);
    // EXTERNAL MODULE: external "@mui/icons-material/AutoAwesome"
    var AutoAwesome_ = __webpack_require__(2395);
    var AutoAwesome_default = /*#__PURE__*/ __webpack_require__.n(AutoAwesome_);
    // EXTERNAL MODULE: external "@mui/icons-material/Dashboard"
    var Dashboard_ = __webpack_require__(7235);
    var Dashboard_default = /*#__PURE__*/ __webpack_require__.n(Dashboard_);
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997); // CONCATENATED MODULE: ./components/views/mypage/Sidebar/index.jsx
    const Sidebar = () => {
      return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Box_default(), {
          sx: {
            height: '100%',
            width: '300px',
            maxWidth: 360,
            color: 'white',
          },
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(List_default(), {
              children: /*#__PURE__*/ jsx_runtime_.jsx(ListItem_default(), {
                disablePadding: true,
                children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                  ListItemButton_default(),
                  {
                    children: [
                      /*#__PURE__*/ jsx_runtime_.jsx(ListItemIcon_default(), {
                        sx: {
                          color: '#fff',
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(
                          Dashboard_default(),
                          {},
                        ),
                      }),
                      /*#__PURE__*/ jsx_runtime_.jsx(ListItemText_default(), {
                        primary: 'Dashboard',
                      }),
                    ],
                  },
                ),
              }),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Divider_default(), {
              sx: {
                bgcolor: '#fff',
              },
            }),
            /*#__PURE__*/ jsx_runtime_.jsx('nav', {
              'aria-label': '\uC0AC\uC774\uB4DC\uBC14',
              children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(List_default(), {
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx(ListItem_default(), {
                    disablePadding: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(
                      next_link['default'],
                      {
                        href: '/mypage/infoedit',
                        children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                          ListItemButton_default(),
                          {
                            children: [
                              /*#__PURE__*/ jsx_runtime_.jsx(
                                ListItemIcon_default(),
                                {
                                  sx: {
                                    color: '#fff',
                                  },
                                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                                    Person_default(),
                                    {},
                                  ),
                                },
                              ),
                              /*#__PURE__*/ jsx_runtime_.jsx(
                                ListItemText_default(),
                                {
                                  primary:
                                    '\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815',
                                },
                              ),
                            ],
                          },
                        ),
                      },
                    ),
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(ListItem_default(), {
                    disablePadding: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(
                      next_link['default'],
                      {
                        href: '/mypage/mynft',
                        children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                          ListItemButton_default(),
                          {
                            children: [
                              /*#__PURE__*/ jsx_runtime_.jsx(
                                ListItemIcon_default(),
                                {
                                  sx: {
                                    color: '#fff',
                                  },
                                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                                    Token_default(),
                                    {},
                                  ),
                                },
                              ),
                              /*#__PURE__*/ jsx_runtime_.jsx(
                                ListItemText_default(),
                                {
                                  primary: 'My NFT',
                                },
                              ),
                            ],
                          },
                        ),
                      },
                    ),
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(ListItem_default(), {
                    disablePadding: true,
                    children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                      ListItemButton_default(),
                      {
                        children: [
                          /*#__PURE__*/ jsx_runtime_.jsx(
                            ListItemIcon_default(),
                            {
                              sx: {
                                color: '#fff',
                              },
                              children: /*#__PURE__*/ jsx_runtime_.jsx(
                                AutoAwesome_default(),
                                {},
                              ),
                            },
                          ),
                          /*#__PURE__*/ jsx_runtime_.jsx(
                            ListItemText_default(),
                            {
                              primary: '\uB0B4 \uC2A4\uD29C\uB514\uC624',
                            },
                          ),
                        ],
                      },
                    ),
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(ListItem_default(), {
                    disablePadding: true,
                    children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                      ListItemButton_default(),
                      {
                        children: [
                          /*#__PURE__*/ jsx_runtime_.jsx(
                            ListItemIcon_default(),
                            {
                              sx: {
                                color: '#fff',
                              },
                              children: /*#__PURE__*/ jsx_runtime_.jsx(
                                Audiotrack_default(),
                                {},
                              ),
                            },
                          ),
                          /*#__PURE__*/ jsx_runtime_.jsx(
                            ListItemText_default(),
                            {
                              primary: '\uC88B\uC544\uD558\uB294 \uB178\uB798',
                            },
                          ),
                        ],
                      },
                    ),
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(ListItem_default(), {
                    disablePadding: true,
                    children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                      ListItemButton_default(),
                      {
                        children: [
                          /*#__PURE__*/ jsx_runtime_.jsx(
                            ListItemIcon_default(),
                            {
                              sx: {
                                color: '#fff',
                              },
                              children: /*#__PURE__*/ jsx_runtime_.jsx(
                                SpatialTracking_default(),
                                {},
                              ),
                            },
                          ),
                          /*#__PURE__*/ jsx_runtime_.jsx(
                            ListItemText_default(),
                            {
                              primary:
                                '\uC88B\uC544\uD558\uB294 \uC544\uD2F0\uC2A4\uD2B8',
                            },
                          ),
                        ],
                      },
                    ),
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(ListItem_default(), {
                    disablePadding: true,
                    children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                      ListItemButton_default(),
                      {
                        children: [
                          /*#__PURE__*/ jsx_runtime_.jsx(
                            ListItemIcon_default(),
                            {
                              sx: {
                                color: '#fff',
                              },
                              children: /*#__PURE__*/ jsx_runtime_.jsx(
                                LibraryMusic_default(),
                                {},
                              ),
                            },
                          ),
                          /*#__PURE__*/ jsx_runtime_.jsx(
                            ListItemText_default(),
                            {
                              primary: '\uB098\uC758 \uC7AC\uC0DD\uBAA9\uB85D',
                            },
                          ),
                        ],
                      },
                    ),
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(ListItem_default(), {
                    disablePadding: true,
                    children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                      ListItemButton_default(),
                      {
                        children: [
                          /*#__PURE__*/ jsx_runtime_.jsx(
                            ListItemIcon_default(),
                            {
                              sx: {
                                color: '#fff',
                              },
                              children: /*#__PURE__*/ jsx_runtime_.jsx(
                                CardMembership_default(),
                                {},
                              ),
                            },
                          ),
                          /*#__PURE__*/ jsx_runtime_.jsx(
                            ListItemText_default(),
                            {
                              primary:
                                '\uC774\uC6A9\uAD8C \uC815\uBCF4 \uC870\uD68C',
                            },
                          ),
                        ],
                      },
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    };

    /* harmony default export */ const mypage_Sidebar = Sidebar; // CONCATENATED MODULE: ./components/views/mypage/layout/index.jsx
    const MyPageLayout = ({ children }) => {
      const { userData } = (0, external_react_redux_.useSelector)(
        state => state.user,
      );
      (0, external_react_.useEffect)(() => {
        console.log(1111);

        if (!userData) {
          router_default().push('/');
        }
      }, [userData]);
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
        style: {
          minWidth: '1300px',
          display: 'flex',
        },
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            sx: {
              display: 'inline-block',
              verticalAlign: 'top',
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(mypage_Sidebar, {}),
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            sx: {
              display: 'inline-block',
              width: '1px',
              height: '650px',
              backgroundColor: 'gray',
            },
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            sx: {
              display: 'inline-block',
              marginLeft: '70px',
              marginRight: '70px',
              verticalAlign: 'top',
              minWidth: '1159px',
              maxWidth: '1159px',
              width: '1159px',
            },
            children: children,
          }),
        ],
      });
    };

    /* harmony default export */ const layout = MyPageLayout;

    /***/
  },
};
