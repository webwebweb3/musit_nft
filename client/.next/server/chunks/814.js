'use strict';
exports.id = 814;
exports.ids = [814];
exports.modules = {
  /***/ 2814: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__,
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ StyledAvatar,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(8442);
    /* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(
        _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__,
      );
    /* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(2120);
    /* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__,
      );
    /* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(5168);
    /* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/ __webpack_require__.n(
        _mui_material_Badge__WEBPACK_IMPORTED_MODULE_3__,
      );
    /* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(19);
    /* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default =
      /*#__PURE__*/ __webpack_require__.n(
        _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__,
      );
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ =
      __webpack_require__(997);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__,
      );

    const StyledBadge = (0,
    _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(
      _mui_material_Badge__WEBPACK_IMPORTED_MODULE_3___default(),
    )(({ theme }) => ({
      '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          animation: 'ripple 1.2s infinite ease-in-out',
          border: '1px solid currentColor',
          content: '""',
        },
      },
      '@keyframes ripple': {
        '0%': {
          transform: 'scale(.8)',
          opacity: 1,
        },
        '100%': {
          transform: 'scale(2.4)',
          opacity: 0,
        },
      },
    }));
    function StyledAvatar() {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(
        _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default(),
        {
          children:
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(
              StyledBadge,
              {
                overlap: 'circular',
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'right',
                },
                variant: 'dot',
                children:
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(
                    _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default(),
                    {
                      alt: 'Remy Sharp',
                      sx: {
                        width: '32px',
                        height: '32px',
                      },
                      children: 'A',
                    },
                  ),
              },
            ),
        },
      );
    }

    /***/
  },
};
