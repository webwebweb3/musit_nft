'use strict';
exports.id = 627;
exports.ids = [627];
exports.modules = {
  /***/ 4627: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__,
  ) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(5692);
    /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        _mui_material__WEBPACK_IMPORTED_MODULE_0__,
      );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(6689);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(6022);
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_redux__WEBPACK_IMPORTED_MODULE_2__,
      );
    /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(1664);
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(1853);
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default =
      /*#__PURE__*/ __webpack_require__.n(
        next_router__WEBPACK_IMPORTED_MODULE_4__,
      );
    /* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_5__ =
      __webpack_require__(9001);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ =
      __webpack_require__(997);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__,
      );

    const Studio = () => {
      const router = (0, next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
      let { artistName } = router.query;
      const { userData } = (0,
      react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(
        state => state.user,
      );
      console.log(userData);

      if (userData === null) {
        alert('로그인 해주세요');
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/');
        return null;
      }

      const account = userData.metamask;

      const onClickMint = async () => {
        try {
          if (!account) {
            alert('Please connect account');
            return;
          }

          const response =
            await _contracts__WEBPACK_IMPORTED_MODULE_5__ /* .mintMusicTokenContract.methods.mintMusicToken */.sx.methods
              .mintMusicToken('abc')
              .send({
                from: account,
              });
        } catch (error) {
          console.error(error);
        }
      };

      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(
        _mui_material__WEBPACK_IMPORTED_MODULE_0__.Box,
        {
          sx: {
            marginTop: '10px',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          },
          children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
              _mui_material__WEBPACK_IMPORTED_MODULE_0__.Box,
              {
                sx: {
                  width: '100%',
                  height: '150px',
                  backgroundColor: 'red',
                },
                children: 'profile background',
              },
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
              _mui_material__WEBPACK_IMPORTED_MODULE_0__.Box,
              {
                sx: {
                  width: '150px',
                  height: '150px',
                  backgroundColor: 'blue',
                  color: 'white',
                  margin: '0 auto',
                  position: 'relative',
                  top: '-60px',
                },
                children: 'profile Image',
              },
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
              _mui_material__WEBPACK_IMPORTED_MODULE_0__.Box,
              {
                children:
                  artistName === userData.name
                    ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
                        _mui_material__WEBPACK_IMPORTED_MODULE_0__.Button,
                        {
                          sx: {
                            position: 'relative',
                            top: '-150px',
                            float: 'right',
                          },
                          children:
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
                              next_link__WEBPACK_IMPORTED_MODULE_3__['default'],
                              {
                                href: `${artistName}/uploadmusic`,
                                children: '+ Add Music NFT',
                              },
                            ),
                        },
                      )
                    : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
                        'div',
                        {
                          style: {
                            height: '36.5px',
                          },
                        },
                      ),
              },
            ),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
              _mui_material__WEBPACK_IMPORTED_MODULE_0__.Box,
              {
                sx: {
                  width: '100%',
                  height: '1000px',
                  backgroundColor: 'green',
                  position: 'relative',
                  top: '-60px',
                  color: 'white',
                },
                children: "Artist's Musics",
              },
            ),
          ],
        },
      );
    };

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Studio;

    /***/
  },
};
