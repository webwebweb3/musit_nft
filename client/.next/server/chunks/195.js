'use strict';
exports.id = 195;
exports.ids = [195];
exports.modules = {
  /***/ 4195: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__,
  ) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ nftLayout_NFTLayout,
    });

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689);
    // EXTERNAL MODULE: external "@mui/material"
    var material_ = __webpack_require__(5692);
    // EXTERNAL MODULE: external "@mui/icons-material/Headset"
    var Headset_ = __webpack_require__(3612);
    var Headset_default = /*#__PURE__*/ __webpack_require__.n(Headset_);
    // EXTERNAL MODULE: external "@mui/icons-material/Token"
    var Token_ = __webpack_require__(303);
    var Token_default = /*#__PURE__*/ __webpack_require__.n(Token_);
    // EXTERNAL MODULE: external "@mui/icons-material/Storefront"
    var Storefront_ = __webpack_require__(7458);
    var Storefront_default = /*#__PURE__*/ __webpack_require__.n(Storefront_);
    // EXTERNAL MODULE: external "@mui/icons-material/Gavel"
    var Gavel_ = __webpack_require__(1234);
    var Gavel_default = /*#__PURE__*/ __webpack_require__.n(Gavel_);
    // EXTERNAL MODULE: ./node_modules/next/link.js
    var next_link = __webpack_require__(1664);
    // EXTERNAL MODULE: external "react-redux"
    var external_react_redux_ = __webpack_require__(6022);
    // EXTERNAL MODULE: external "react-swipeable-views"
    var external_react_swipeable_views_ = __webpack_require__(9980);
    var external_react_swipeable_views_default =
      /*#__PURE__*/ __webpack_require__.n(external_react_swipeable_views_);
    // EXTERNAL MODULE: external "@emotion/react"
    var react_ = __webpack_require__(2805);
    // EXTERNAL MODULE: ./_actions/user_actions.js
    var user_actions = __webpack_require__(9402);
    // EXTERNAL MODULE: ./hooks/useInput.js
    var useInput = __webpack_require__(3551);
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997); // CONCATENATED MODULE: ./components/nftLayout/Navbar/Register/button/RegisterButton.jsx
    const RegisterButton = () => {
      const style = (0, external_react_.useMemo)(
        () => ({
          color: '#808080',
          marginTop: '8px',
        }),
        [],
      );
      return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
          style: style,
          type: 'submit',
          variant: 'text',
          children: '\uAC00\uC785\uD558\uAE30',
        }),
      });
    };

    /* harmony default export */ const button_RegisterButton = RegisterButton;
    // EXTERNAL MODULE: ./components/mui/SelectNationality.jsx
    var SelectNationality = __webpack_require__(5943);
    // EXTERNAL MODULE: ./components/mui/ChipGenre.jsx
    var ChipGenre = __webpack_require__(6941);
    // EXTERNAL MODULE: ./components/mui/TanPanel.jsx
    var TanPanel = __webpack_require__(5934);
    // EXTERNAL MODULE: ./components/mui/TextFieldInput.jsx
    var TextFieldInput = __webpack_require__(8222); // CONCATENATED MODULE: ./components/nftLayout/Navbar/Register/RegisterModal.jsx
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

    const RegisterModal = ({ open, setOpen, id }) => {
      const dispatch = (0, external_react_redux_.useDispatch)();
      const user = (0, external_react_redux_.useSelector)(state => state.user);
      const theme = (0, react_.useTheme)();
      const [artist, onChangeArtist, setArtist] = (0,
      useInput /* useInput */.W)('');
      const [genre, onChangeGenre, setGenre] = (0,
      useInput /* useGenreInput */.G)([]);
      const { 0: nationality, 1: onChangeNationality } = (0,
      external_react_.useState)(0);
      const { 0: value, 1: setValue } = (0, external_react_.useState)(0);
      (0, external_react_.useEffect)(() => {
        if (user.registerUserError) {
          alert(user.registerUserError);
        }

        if (user.registerUserDone) {
          alert('회원가입에 성공했습니다.');
          setArtist('');
          setGenre([]);
          onChangeNationality(0);
          setValue(0);
        }

        setOpen(false);
      }, [user, setOpen, setArtist, setGenre]);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      const handleChangeIndex = index => {
        setValue(index);
      };

      const handleClose = (0, external_react_.useCallback)(
        () => setOpen(false),
        [setOpen],
      );
      const onSubmitUserForm = (0, external_react_.useCallback)(
        e => {
          e.preventDefault();
          let dataToSubmit = {
            metamask: id,
            genre,
            nationality,
          };

          if (artist) {
            dataToSubmit = _objectSpread(
              _objectSpread({}, dataToSubmit),
              {},
              {
                name: artist,
                role: '1',
              },
            );
          }

          dispatch(
            (0, user_actions /* registerRequestAction */.yI)(dataToSubmit),
          );
        },
        [dispatch, artist, genre, nationality, id],
      );
      return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Dialog, {
          open: open,
          onClose: handleClose,
          PaperProps: {
            sx: {
              width: '40%',
              height: '43%',
            },
          },
          'aria-labelledby': 'draggable-dialog-title',
          children: [
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Tabs, {
              value: value,
              onChange: handleChange,
              indicatorColor: 'primary',
              textColor: 'primary',
              variant: 'fullWidth',
              TabIndicatorProps: {
                style: {
                  background: 'gray',
                },
              },
              'aria-label': 'action tabs example',
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Tab, {
                  label: /*#__PURE__*/ jsx_runtime_.jsx('span', {
                    style: {
                      color: 'black',
                    },
                    children: 'User',
                  }),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Tab, {
                  label: /*#__PURE__*/ jsx_runtime_.jsx('span', {
                    style: {
                      color: 'black',
                    },
                    children: 'Artist',
                  }),
                }),
              ],
            }),
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
              external_react_swipeable_views_default(),
              {
                axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',
                index: value,
                onChangeIndex: handleChangeIndex,
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx(TanPanel /* default */.Z, {
                    value: value,
                    index: 0,
                    dir: theme.direction,
                    children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('form', {
                      onSubmit: onSubmitUserForm,
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(
                          SelectNationality /* default */.Z,
                          {
                            value: nationality,
                            func: onChangeNationality,
                          },
                        ),
                        /*#__PURE__*/ jsx_runtime_.jsx(
                          ChipGenre /* default */.Z,
                          {
                            value: genre,
                            func: onChangeGenre,
                          },
                        ),
                        /*#__PURE__*/ jsx_runtime_.jsx(
                          button_RegisterButton,
                          {},
                        ),
                      ],
                    }),
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx(TanPanel /* default */.Z, {
                    value: value,
                    index: 1,
                    dir: theme.direction,
                    children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('form', {
                      onSubmit: onSubmitUserForm,
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(
                          TextFieldInput /* default */.Z,
                          {
                            label: '\uC544\uD2F0\uC2A4\uD2B8 \uBA85',
                            value: artist,
                            func: onChangeArtist,
                          },
                        ),
                        /*#__PURE__*/ jsx_runtime_.jsx(
                          SelectNationality /* default */.Z,
                          {
                            value: nationality,
                            func: onChangeNationality,
                          },
                        ),
                        /*#__PURE__*/ jsx_runtime_.jsx(
                          ChipGenre /* default */.Z,
                          {
                            value: genre,
                            func: onChangeGenre,
                          },
                        ),
                        /*#__PURE__*/ jsx_runtime_.jsx(
                          button_RegisterButton,
                          {},
                        ),
                      ],
                    }),
                  }),
                ],
              },
            ),
          ],
        }),
      });
    };

    /* harmony default export */ const Register_RegisterModal = RegisterModal;
    // EXTERNAL MODULE: external "@mui/icons-material"
    var icons_material_ = __webpack_require__(7915);
    // EXTERNAL MODULE: external "@mui/system"
    var system_ = __webpack_require__(7986); // CONCATENATED MODULE: ./components/nftLayout/Navbar/myMenu/LogoutButton.jsx
    const LogoutButton = () => {
      const dispatch = (0, external_react_redux_.useDispatch)();
      const onClickLogout = (0, external_react_.useCallback)(() => {
        dispatch((0, user_actions /* logoutRequestAction */.vR)());
      }, [dispatch]);
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.MenuItem, {
        onClick: onClickLogout,
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.Logout, {
              fontSize: 'small',
            }),
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(system_.Box, {
            component: 'span',
            children: 'Logout',
          }),
        ],
      });
    };

    /* harmony default export */ const myMenu_LogoutButton = LogoutButton; // CONCATENATED MODULE: ./components/nftLayout/Navbar/myMenu/MyPageButton.jsx
    const MyPageButton = () => {
      const { userData } = (0, external_react_redux_.useSelector)(
        state => state.user,
      );
      const userImg = userData.img;
      return /*#__PURE__*/ jsx_runtime_.jsx(next_link['default'], {
        href: '/mypage',
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
          children: userImg
            ? /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                    src: userData.img,
                    alt: 'Avatar',
                  }),
                  userData.name
                    ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: userData.name,
                      })
                    : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: 'USER',
                      }),
                ],
              })
            : /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                    src: `https://avatars.dicebear.com/api/gridy/${userData.metamask}.svg`,
                  }),
                  userData.name,
                ],
              }),
        }),
      });
    };

    /* harmony default export */ const myMenu_MyPageButton = MyPageButton; // CONCATENATED MODULE: ./components/nftLayout/Navbar/myMenu/index.jsx
    const ProfileButton = () => {
      const { userData } = (0, external_react_redux_.useSelector)(
        state => state.user,
      );
      const { 0: anchorEl, 1: setAnchorEl } = (0, external_react_.useState)(
        null,
      );
      const open = Boolean(anchorEl);

      const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };

      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
              title: 'Account settings',
              children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                onClick: handleClick,
                size: 'small',
                sx: {
                  ml: 2,
                },
                'aria-controls': open ? 'account-menu' : undefined,
                'aria-haspopup': 'true',
                'aria-expanded': open ? 'true' : undefined,
                children: userData.img
                  ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                      src: userData.img,
                      alt: 'Avatar',
                    })
                  : /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                      src: `https://avatars.dicebear.com/api/gridy/${userData.metamask}.svg`,
                    }),
              }),
            }),
          }),
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Menu, {
            anchorEl: anchorEl,
            id: 'account-menu',
            open: open,
            onClose: handleClose,
            onClick: handleClose,
            PaperProps: {
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            },
            transformOrigin: {
              horizontal: 'right',
              vertical: 'top',
            },
            anchorOrigin: {
              horizontal: 'right',
              vertical: 'bottom',
            },
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(myMenu_MyPageButton, {}),
              /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
              /*#__PURE__*/ jsx_runtime_.jsx(next_link['default'], {
                href: '/mypage/mynft',
                children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                  material_.MenuItem,
                  {
                    children: [
                      /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(
                          icons_material_.LibraryMusic,
                          {
                            fontSize: 'small',
                          },
                        ),
                      }),
                      'My NFT',
                    ],
                  },
                ),
              }),
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.MenuItem, {
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(
                      icons_material_.QueueMusic,
                      {
                        fontSize: 'small',
                      },
                    ),
                  }),
                  'Listening History',
                ],
              }),
              /*#__PURE__*/ jsx_runtime_.jsx(myMenu_LogoutButton, {}),
            ],
          }),
        ],
      });
    };

    /* harmony default export */ const myMenu = ProfileButton;
    // EXTERNAL MODULE: ./_actions/metamask_actions.js
    var metamask_actions = __webpack_require__(4759);
    // EXTERNAL MODULE: external "next/router"
    var router_ = __webpack_require__(1853);
    var router_default = /*#__PURE__*/ __webpack_require__.n(router_);
    // EXTERNAL MODULE: ./hooks/useHover.js
    var useHover = __webpack_require__(5244); // CONCATENATED MODULE: ./components/nftLayout/Navbar/Register/button/NavButton.jsx
    const NavButton = ({ value, func }) => {
      const [isHovering, onMouseOverFunc, onMouseOutFunc] = (0,
      useHover /* useHover */.X)(false);
      const colorWhite = (0, external_react_.useMemo)(
        () => ({
          color: '#FFFFFF',
        }),
        [],
      );
      const colorGreen = (0, external_react_.useMemo)(
        () => ({
          color: '#808080',
        }),
        [],
      );
      return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
          onMouseOver: onMouseOverFunc,
          onMouseOut: onMouseOutFunc,
          style: isHovering ? colorGreen : colorWhite,
          variant: 'text',
          onClick: func,
          children: value,
        }),
      });
    };

    /* harmony default export */ const button_NavButton = NavButton; // CONCATENATED MODULE: ./components/nftLayout/Navbar/Register/button/metamaskButton.jsx
    const MetamaskButton = ({
      metamaskLogin,
      setMetamaskLogin,
      metaopenfunc,
    }) => {
      const dispatch = (0, external_react_redux_.useDispatch)();
      const metamask = (0, external_react_redux_.useSelector)(
        state => state.metamask,
      );
      const user = (0, external_react_redux_.useSelector)(state => state.user);

      const onClickHandler = () => {
        router_default().reload();
      };

      (0, external_react_.useEffect)(() => {
        // 메타마스크 로그인 상태
        if (metamask.metamaskLoginLoading && metamask.metamaskData == null) {
          setMetamaskLogin(true);
        } // 메타마스크 비로그인 상태

        if (metamask.metamaskData !== null && metamask.metamaskLoginDone) {
          setMetamaskLogin(false);
        }
      }, [metamask, setMetamaskLogin]);
      (0, external_react_.useEffect)(() => {
        if (user.logInUserError) {
          alert(user.logInUserError);
        }
      }, [user]);
      const onClickLogin = (0, external_react_.useCallback)(() => {
        try {
          dispatch((0, metamask_actions /* metaMaskLoginRequestAction */.i)());
        } catch (error) {
          console.error(error);
        }
      }, [dispatch]);
      return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: metamaskLogin
          ? /*#__PURE__*/ jsx_runtime_.jsx('div', {
              style: {
                marginLeft: 'auto',
              },
              children: /*#__PURE__*/ jsx_runtime_.jsx(button_NavButton, {
                value:
                  '\uBA54\uD0C0\uB9C8\uC2A4\uD06C\uB97C \uBA3C\uC800 \uB85C\uADF8\uC778\uD574\uC8FC\uC138\uC694!',
                func: onClickHandler,
              }),
            })
          : /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx('div', {
                  style: {
                    marginLeft: 'auto',
                  },
                  children: /*#__PURE__*/ jsx_runtime_.jsx(button_NavButton, {
                    value: 'Login',
                    func: onClickLogin,
                  }),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(button_NavButton, {
                  value: 'Register',
                  func: metaopenfunc,
                }),
              ],
            }),
      });
    };

    /* harmony default export */ const metamaskButton = MetamaskButton; // CONCATENATED MODULE: ./components/nftLayout/Navbar/index.jsx
    const Navbar = () => {
      const dispatch = (0, external_react_redux_.useDispatch)();
      const { userData } = (0, external_react_redux_.useSelector)(
        state => state.user,
      );
      const metamask = (0, external_react_redux_.useSelector)(
        state => state.metamask,
      );
      const { 0: open, 1: setOpen } = (0, external_react_.useState)(false);
      const { 0: metamaskLogin, 1: setMetamaskLogin } = (0,
      external_react_.useState)(false);
      (0, external_react_.useEffect)(() => {
        // 메타마스크 로그인 상태
        if (metamask.metamaskLoading && metamask.metamaskData == null) {
          setMetamaskLogin(true);
        } // 메타마스크 비로그인 상태

        if (metamask.metamaskData !== null && metamask.metamaskDone) {
          setMetamaskLogin(false);
          setOpen(true);
        }
      }, [metamask]); // 메타 마스크 회원가입 모달창

      const handleMetaMaskOpen = (0, external_react_.useCallback)(() => {
        try {
          dispatch((0, metamask_actions /* metaMaskRequestAction */.N)());
          return;
        } catch (error) {
          console.error(error);
        }
      }, [dispatch]);
      return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.AppBar, {
          sx: {
            padding: '10px 20px ',
            background: 'transparent',
            height: '100px',
          },
          elevation: 0,
          children: [
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Toolbar, {
              sx: {
                paddingRight: '20px',
              },
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link['default'], {
                  href: '/',
                  children: /*#__PURE__*/ jsx_runtime_.jsx('img', {
                    width: '80px',
                    height: '80px',
                    src: '/logoW.png',
                    alt: 'logo',
                    style: {
                      cursor: 'pointer',
                      marginRight: '30px',
                    },
                  }),
                }),
                /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Tabs, {
                  textColor: 'inherit',
                  value: false,
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link['default'], {
                      href: '/streaming',
                      children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Tab, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(
                          Headset_default(),
                          {},
                        ),
                        iconPosition: 'start',
                        label: 'STREAMING',
                        sx: {
                          fontSize: '18px',
                        },
                      }),
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link['default'], {
                      href: '/nft',
                      children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Tab, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(
                          Token_default(),
                          {},
                        ),
                        iconPosition: 'start',
                        label: 'NFT',
                        sx: {
                          fontSize: '18px',
                        },
                      }),
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link['default'], {
                      href: '/nft/marketplace',
                      children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Tab, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(
                          Storefront_default(),
                          {},
                        ),
                        iconPosition: 'start',
                        label: 'MarketPlace',
                        sx: {
                          fontSize: '18px',
                        },
                      }),
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link['default'], {
                      href: '/auction',
                      children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Tab, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(
                          Gavel_default(),
                          {},
                        ),
                        iconPosition: 'start',
                        label: 'Auction',
                        sx: {
                          fontSize: '18px',
                        },
                      }),
                    }),
                  ],
                }),
                userData
                  ? /*#__PURE__*/ jsx_runtime_.jsx('div', {
                      style: {
                        marginLeft: 'auto',
                        paddingRight: '20px',
                      },
                      children: /*#__PURE__*/ jsx_runtime_.jsx(myMenu, {}),
                    })
                  : /*#__PURE__*/ jsx_runtime_.jsx(metamaskButton, {
                      metamaskLogin: metamaskLogin,
                      setMetamaskLogin: setMetamaskLogin,
                      metaopenfunc: handleMetaMaskOpen,
                    }),
              ],
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Register_RegisterModal, {
              id: metamask.metamaskData,
              setOpen: setOpen,
              open: open,
            }),
          ],
        }),
      });
    };

    /* harmony default export */ const nftLayout_Navbar = Navbar; // CONCATENATED MODULE: ./components/nftLayout/NFTLayout.jsx
    const NFTLayout = ({ children }) => {
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Box, {
        sx: {
          display: 'inline-block',
          width: '100%',
        },
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx(nftLayout_Navbar, {}),
          /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            style: {
              marginLeft: '20px',
              marginTop: '100px',
              marginRight: '20px',
            },
            children: children,
          }),
        ],
      });
    };

    /* harmony default export */ const nftLayout_NFTLayout = NFTLayout;

    /***/
  },
};
