'use strict';
(() => {
  var exports = {};
  exports.id = 383;
  exports.ids = [383];
  exports.modules = {
    /***/ 8048: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ streaming,
        getServerSideProps: () => /* binding */ getServerSideProps,
      });

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(6689);
      var external_react_default =
        /*#__PURE__*/ __webpack_require__.n(external_react_);
      // EXTERNAL MODULE: external "redux-saga"
      var external_redux_saga_ = __webpack_require__(6537);
      // EXTERNAL MODULE: external "axios"
      var external_axios_ = __webpack_require__(2167);
      var external_axios_default =
        /*#__PURE__*/ __webpack_require__.n(external_axios_);
      // EXTERNAL MODULE: ./_store/configureStore.js + 9 modules
      var configureStore = __webpack_require__(5758);
      // EXTERNAL MODULE: external "@mui/material"
      var material_ = __webpack_require__(5692); // CONCATENATED MODULE: ./components/views/streaming/style.js
      const style = {
        streamingContainer: {
          width: '100%',
          minWidth: '1040px',
          height: '100%',
          display: 'flex',
        },
        streamingSideBarContainer: {
          flex: 1,
        },
        streamingWrapper: {
          flex: 10,
        },
      };
      // EXTERNAL MODULE: ./node_modules/next/link.js
      var next_link = __webpack_require__(1664); // CONCATENATED MODULE: external "@mui/icons-material/DensityMedium"
      const DensityMedium_namespaceObject = require('@mui/icons-material/DensityMedium');
      var DensityMedium_default = /*#__PURE__*/ __webpack_require__.n(
        DensityMedium_namespaceObject,
      );
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997); // CONCATENATED MODULE: ./components/views/streaming/streamingSideBar/SteamingSideBar.jsx
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

      function StreamingSideBar() {
        const { 0: state, 1: setState } = (0, external_react_.useState)({
          left: false,
        });

        const toggleDrawer = (anchor, open) => event => {
          if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
          ) {
            return;
          }

          setState(
            _objectSpread(
              _objectSpread({}, state),
              {},
              {
                [anchor]: open,
              },
            ),
          );
        };

        const list = anchor =>
          /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            sx: {
              width: 250,
              backgroundColor: 'black',
              height: '100%',
            },
            role: 'presentation',
            onClick: toggleDrawer(anchor, false),
            onKeyDown: toggleDrawer(anchor, false),
            children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.List, {
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link['default'], {
                  href: '/',
                  children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                    material_.ListItem,
                    {
                      button: true,
                      sx: {
                        color: 'white',
                        fontSize: '100px',
                      },
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                          children: /*#__PURE__*/ jsx_runtime_.jsx('img', {
                            width: '65px',
                            height: '65px',
                            src: '/logoW.png',
                            alt: 'logo',
                            style: {
                              marginRight: '10px',
                            },
                          }),
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                          primary: 'Home',
                        }),
                      ],
                    },
                    'Home',
                  ),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
                [
                  {
                    text: 'Search',
                    move: 'search',
                  },
                  {
                    text: 'My Library',
                    move: 'mypage',
                  },
                  {
                    text: 'My Favorite',
                    move: 'myfavorite',
                  },
                ].map((text, i) =>
                  /*#__PURE__*/ jsx_runtime_.jsx(
                    next_link['default'],
                    {
                      href: `/${text.move}`,
                      children: /*#__PURE__*/ jsx_runtime_.jsx(
                        material_.ListItem,
                        {
                          button: true,
                          sx: {
                            color: 'white',
                            fontSize: '100px',
                          },
                          children: /*#__PURE__*/ jsx_runtime_.jsx(
                            material_.ListItemText,
                            {
                              primary: text.text,
                            },
                          ),
                        },
                      ),
                    },
                    text.text,
                  ),
                ),
              ],
            }),
          });

        return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
          children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
            external_react_default().Fragment,
            {
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                  onClick: toggleDrawer('left', true),
                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                    DensityMedium_default(),
                    {
                      fontSize: 'medium',
                      sx: {
                        color: 'white',
                        marginLeft: '0px',
                        marginTop: '0px',
                      },
                    },
                  ),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Drawer, {
                  anchor: 'left',
                  open: state['left'],
                  onClose: toggleDrawer('left', false),
                  children: list('left'),
                }),
              ],
            },
            'left',
          ),
        });
      }
      // EXTERNAL MODULE: ./contracts/index.js
      var contracts = __webpack_require__(9001);
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
      var SkipNext_default = /*#__PURE__*/ __webpack_require__.n(SkipNext_); // CONCATENATED MODULE: ./components/views/cards/MusicCard.jsx
      const MusicCard = ({ musicTitle, albumCover, artistName }) => {
        const theme = (0, styles_.useTheme)();
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Card_default(), {
          sx: {
            display: 'inline-block',
          },
          children: [
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Box_default(), {
              sx: {
                display: 'flex',
                flexDirection: 'row',
              },
              children: [
                /*#__PURE__*/ (0, jsx_runtime_.jsxs)(CardContent_default(), {
                  sx: {
                    flex: '1 0 auto',
                  },
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Typography_default(), {
                      component: 'div',
                      variant: 'h5',
                      children: musicTitle,
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Typography_default(), {
                      variant: 'subtitle1',
                      color: 'text.secondary',
                      component: 'div',
                      style: {
                        cursor: 'pointer',
                      },
                      children: /*#__PURE__*/ jsx_runtime_.jsx(
                        next_link['default'],
                        {
                          href: `/studio/${artistName}`,
                          children: artistName,
                        },
                      ),
                    }),
                  ],
                }),
                /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Box_default(), {
                  sx: {
                    display: 'flex',
                    alignItems: 'center',
                    pl: 1,
                    pb: 1,
                  },
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(IconButton_default(), {
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
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(IconButton_default(), {
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
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(IconButton_default(), {
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
                    }),
                  ],
                }),
              ],
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CardMedia_default(), {
              component: 'img',
              sx: {
                width: '200px',
              },
              image: albumCover,
              alt: `${musicTitle} album Cover`,
            }),
          ],
        });
      };

      /* harmony default export */ const cards_MusicCard = MusicCard; // CONCATENATED MODULE: ./components/views/streaming/latestMusic/style.js
      const style_style = {
        title: {
          fontSize: '30px',
          fontWeight: '600',
          color: 'white',
        },
      }; // CONCATENATED MODULE: ./components/views/streaming/latestMusic/LatestMusic.jsx
      const LatestMusic = () => {
        const { 0: musics, 1: setMusics } = (0, external_react_.useState)([]);

        const getMusic = async () => {
          try {
            const getLatestMusicToken =
              await contracts /* mintMusicTokenContract.methods.getLatestMusicToken */.sx.methods
                .getLatestMusicToken()
                .call(); // const latestMusic = getLatestMusicToken.filter(music => {
            //   return music !== '' && music !== null && music !== undefined;
            // });

            const tempMusics = [];

            for (let i = 0; i < getLatestMusicToken.length; i++) {
              const response = await fetch(
                `https://ipfs.io/ipfs/${getLatestMusicToken[i]}`,
              );
              const data = await response.json();
              tempMusics.push(data);
            }

            setMusics(tempMusics);
          } catch (error) {
            console.error(error);
          }
        };

        (0, external_react_.useEffect)(() => {
          if (musics.length === 0) {
            getMusic();
          }
        }, [musics]);
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Box, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
              children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: style_style.title,
                children: '\uCD5C\uC2E0 \uB4F1\uB85D \uC74C\uC545',
              }),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
              sx: {
                background: 'white',
                margin: '10px 0',
              },
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
              children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                children:
                  musics.length !== 0 &&
                  /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: musics.map((v, i) => {
                      return /*#__PURE__*/ jsx_runtime_.jsx(
                        cards_MusicCard,
                        {
                          musicTitle: `${v.properties.dataToSubmit.title}`,
                          albumCover: `https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${v.properties.S3AlbumCover}`,
                          artistName: `${v.properties.dataToSubmit.artist}`,
                        },
                        i,
                      );
                    }),
                  }),
              }),
            }),
          ],
        });
      };

      /* harmony default export */ const latestMusic_LatestMusic = LatestMusic;
      // EXTERNAL MODULE: external "react-redux"
      var external_react_redux_ = __webpack_require__(6022); // CONCATENATED MODULE: ./components/views/streaming/Streaming.jsx
      const Streaming = () => {
        const { userData } = (0, external_react_redux_.useSelector)(
          state => state.user,
        );
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Box, {
          sx: style.streamingContainer,
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
              sx: style.streamingSideBarContainer,
              children: /*#__PURE__*/ jsx_runtime_.jsx(StreamingSideBar, {}),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
              sx: style.streamingWrapper,
              children: /*#__PURE__*/ jsx_runtime_.jsx(
                latestMusic_LatestMusic,
                {
                  userData: userData,
                },
              ),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
              sx: {
                flexDirection: '',
              },
            }),
          ],
        });
      };

      /* harmony default export */ const streaming_Streaming = Streaming;
      // EXTERNAL MODULE: ./_actions/user_actions.js
      var user_actions = __webpack_require__(9402);
      // EXTERNAL MODULE: external "@mui/icons-material/Headset"
      var Headset_ = __webpack_require__(3612);
      var Headset_default = /*#__PURE__*/ __webpack_require__.n(Headset_);
      // EXTERNAL MODULE: external "@mui/icons-material/Token"
      var Token_ = __webpack_require__(303);
      var Token_default = /*#__PURE__*/ __webpack_require__.n(Token_);
      // EXTERNAL MODULE: external "react-swipeable-views"
      var external_react_swipeable_views_ = __webpack_require__(9980);
      var external_react_swipeable_views_default =
        /*#__PURE__*/ __webpack_require__.n(external_react_swipeable_views_);
      // EXTERNAL MODULE: external "@emotion/react"
      var react_ = __webpack_require__(2805);
      // EXTERNAL MODULE: ./hooks/useInput.js
      var useInput = __webpack_require__(3551); // CONCATENATED MODULE: ./components/streamingLayout/Navbar/Register/button/RegisterButton.jsx
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
      var TextFieldInput = __webpack_require__(8222); // CONCATENATED MODULE: ./components/streamingLayout/Navbar/Register/RegisterModal.jsx
      function RegisterModal_ownKeys(object, enumerableOnly) {
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

      function RegisterModal_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            RegisterModal_ownKeys(Object(source), true).forEach(function (key) {
              RegisterModal_defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source),
            );
          } else {
            RegisterModal_ownKeys(Object(source)).forEach(function (key) {
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

      function RegisterModal_defineProperty(obj, key, value) {
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
        const user = (0, external_react_redux_.useSelector)(
          state => state.user,
        );
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
              dataToSubmit = RegisterModal_objectSpread(
                RegisterModal_objectSpread({}, dataToSubmit),
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
      var system_ = __webpack_require__(7986); // CONCATENATED MODULE: ./components/streamingLayout/Navbar/myMenu/LogoutButton.jsx
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

      /* harmony default export */ const myMenu_LogoutButton = LogoutButton; // CONCATENATED MODULE: ./components/streamingLayout/Navbar/myMenu/MyPageButton.jsx
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

      /* harmony default export */ const myMenu_MyPageButton = MyPageButton; // CONCATENATED MODULE: ./components/streamingLayout/Navbar/myMenu/index.jsx
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
      var useHover = __webpack_require__(5244); // CONCATENATED MODULE: ./components/streamingLayout/Navbar/Register/button/NavButton.jsx
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

      /* harmony default export */ const button_NavButton = NavButton; // CONCATENATED MODULE: ./components/streamingLayout/Navbar/Register/button/metamaskButton.jsx
      const MetamaskButton = ({
        metamaskLogin,
        setMetamaskLogin,
        metaopenfunc,
      }) => {
        const dispatch = (0, external_react_redux_.useDispatch)();
        const metamask = (0, external_react_redux_.useSelector)(
          state => state.metamask,
        );
        const user = (0, external_react_redux_.useSelector)(
          state => state.user,
        );

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
            dispatch(
              (0, metamask_actions /* metaMaskLoginRequestAction */.i)(),
            );
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

      /* harmony default export */ const metamaskButton = MetamaskButton; // CONCATENATED MODULE: ./components/streamingLayout/Navbar/index.jsx
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
                        children: /*#__PURE__*/ jsx_runtime_.jsx(
                          material_.Tab,
                          {
                            icon: /*#__PURE__*/ jsx_runtime_.jsx(
                              Headset_default(),
                              {},
                            ),
                            iconPosition: 'start',
                            label: 'STREAMING',
                            sx: {
                              fontSize: '18px',
                            },
                          },
                        ),
                      }),
                      /*#__PURE__*/ jsx_runtime_.jsx(next_link['default'], {
                        href: '/nft',
                        children: /*#__PURE__*/ jsx_runtime_.jsx(
                          material_.Tab,
                          {
                            icon: /*#__PURE__*/ jsx_runtime_.jsx(
                              Token_default(),
                              {},
                            ),
                            iconPosition: 'start',
                            label: 'NFT',
                            sx: {
                              fontSize: '18px',
                            },
                          },
                        ),
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

      /* harmony default export */ const streamingLayout_Navbar = Navbar; // CONCATENATED MODULE: ./components/streamingLayout/StreamingLayout.jsx
      const StreamingLayout = ({ children }) => {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Box, {
          sx: {
            display: 'inline-block',
            width: '100%',
          },
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(streamingLayout_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
              style: {
                marginTop: '100px',
              },
              children: children,
            }),
          ],
        });
      };

      /* harmony default export */ const streamingLayout_StreamingLayout =
        StreamingLayout; // CONCATENATED MODULE: ./pages/streaming/index.jsx
      const StreamingHome = () => {
        return /*#__PURE__*/ jsx_runtime_.jsx(streamingLayout_StreamingLayout, {
          children: /*#__PURE__*/ jsx_runtime_.jsx(streaming_Streaming, {}),
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
      /* harmony default export */ const streaming = StreamingHome;

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
    [400, 664, 361, 758, 739],
    () => __webpack_exec__(8048),
  );
  module.exports = __webpack_exports__;
})();
