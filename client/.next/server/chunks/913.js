'use strict';
exports.id = 913;
exports.ids = [913];
exports.modules = {
  /***/ 1407: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__,
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ k0: () => /* binding */ mintMusicNFTRequestAction,
      /* harmony export */
    });
    /* unused harmony exports s3AlbumCoverRequestAction, IPFSMusicRequestAction */
    /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(5361);

    const s3AlbumCoverRequestAction = data => ({
      type: S3_ALBUMCOVER_REQUEST,
      data,
    });
    const IPFSMusicRequestAction = data => ({
      type: IPFS_MUSIC_REQUEST,
      data,
    });
    const mintMusicNFTRequestAction = data => ({
      type: _types__WEBPACK_IMPORTED_MODULE_0__ /* .MINT_MUSIC_NFT_REQUEST */.$f,
      data,
    });

    /***/
  },

  /***/ 9913: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__,
      ) => {
        try {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(6689);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(6022);
          /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_redux__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var _s3upload_S3Upload__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(8675);
          /* harmony import */ var _ipfsupload_IPFSUpload__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(1015);
          /* harmony import */ var _actions_uploadMusic_actions__WEBPACK_IMPORTED_MODULE_15__ =
            __webpack_require__(1407);
          /* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(3551);
          /* harmony import */ var _inputmusicdata_TextFieldInput__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(3777);
          /* harmony import */ var ipfs_http_client__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(7000);
          /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(1853);
          /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              next_router__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(7518);
          /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              styled_components__WEBPACK_IMPORTED_MODULE_8__,
            );
          /* harmony import */ var _uploadMusicStyle__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(3458);
          /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(5692);
          /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default =
            /*#__PURE__*/ __webpack_require__.n(
              _mui_material__WEBPACK_IMPORTED_MODULE_10__,
            );
          /* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(9484);
          /* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_11___default =
            /*#__PURE__*/ __webpack_require__.n(
              _mui_styles__WEBPACK_IMPORTED_MODULE_11__,
            );
          /* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(9271);
          /* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12___default =
            /*#__PURE__*/ __webpack_require__.n(
              _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12__,
            );
          /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(8475);
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(997);
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__,
            );
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              ipfs_http_client__WEBPACK_IMPORTED_MODULE_6__,
            ]);
          ipfs_http_client__WEBPACK_IMPORTED_MODULE_6__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0];

          const client = (0,
          ipfs_http_client__WEBPACK_IMPORTED_MODULE_6__.create)(
            'https://ipfs.infura.io:5001/api/v0',
          );

          const UploadMusic = () => {
            const dispatch = (0,
            react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
            const router = (0,
            next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
            const artist = router.query.artistName;
            const S3UploadRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
              null,
            );
            const { userData } = (0,
            react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(
              state => state.user,
            );
            const [title, onChangeTitle] = (0,
            _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ /* .useInput */.W)('');
            const [albumName, onChangeAlbumName] = (0,
            _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ /* .useInput */.W)('');
            const [genre, onChangeGenre] = (0,
            _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ /* .useInput */.W)(
              'balad',
            );
            const [release, onChangeRelease] = (0,
            _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ /* .useInput */.W)('');
            const [songwriter, onChangeSongwriter] = (0,
            _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ /* .useInput */.W)('');
            const [lyricist, onChangeLyricist] = (0,
            _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ /* .useInput */.W)('');
            const { 0: selectedFile, 1: setSelectedFile } = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
            const { 0: selectedIPFSFile, 1: setSelectedIPFSFile } = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
            const account = userData.metamask;
            const ipfsredux = {
              client,
              file: selectedIPFSFile,
            };
            const dataToSubmit = {
              userName: userData.name,
              title,
              artist,
              albumName,
              genre,
              release,
              songwriter,
              lyricist,
              account,
              createdAt: Date.now(),
            };
            const mintToData = {
              dataToSubmit,
              ipfsredux,
              selectedFile,
              selectedIPFSFile,
              account,
            };

            const minting = async e => {
              e.preventDefault();
              dispatch(
                (0,
                _actions_uploadMusic_actions__WEBPACK_IMPORTED_MODULE_15__ /* .mintMusicNFTRequestAction */.k0)(
                  mintToData,
                ),
              );

              if (userData.name !== artist) {
                alert('This user is not that artist');
                return;
              }
            };

            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, []);
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
              'form',
              {
                onSubmit: minting,
                children: /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(
                  _mui_material__WEBPACK_IMPORTED_MODULE_10__.Box,
                  {
                    sx: _uploadMusicStyle__WEBPACK_IMPORTED_MODULE_9__ /* .style.uploadMusicContainer */
                      .o.uploadMusicContainer,
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(
                        _mui_material__WEBPACK_IMPORTED_MODULE_10__.Box,
                        {
                          sx: _uploadMusicStyle__WEBPACK_IMPORTED_MODULE_9__ /* .style.leftSide */
                            .o.leftSide,
                          children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                              _mui_material__WEBPACK_IMPORTED_MODULE_10__.Box,
                              {
                                sx: _uploadMusicStyle__WEBPACK_IMPORTED_MODULE_9__ /* .style.S3UploadContainer */
                                  .o.S3UploadContainer,
                                children:
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                                    _s3upload_S3Upload__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                                    {
                                      account: account,
                                      selectedFile: selectedFile,
                                      setSelectedFile: setSelectedFile,
                                      S3UploarRef: S3UploadRef,
                                    },
                                  ),
                              },
                            ),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                              _mui_material__WEBPACK_IMPORTED_MODULE_10__.Box,
                              {
                                sx: _uploadMusicStyle__WEBPACK_IMPORTED_MODULE_9__ /* .style.IPFSUploadContainer */
                                  .o.IPFSUploadContainer,
                                children:
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                                    _ipfsupload_IPFSUpload__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
                                    {
                                      account: account,
                                      setSelectedIPFSFile: setSelectedIPFSFile,
                                    },
                                  ),
                              },
                            ),
                          ],
                        },
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(
                        _mui_material__WEBPACK_IMPORTED_MODULE_10__.Box,
                        {
                          sx: _uploadMusicStyle__WEBPACK_IMPORTED_MODULE_9__ /* .style.rightSide */
                            .o.rightSide,
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(
                              _mui_material__WEBPACK_IMPORTED_MODULE_10__.Box,
                              {
                                sx: _uploadMusicStyle__WEBPACK_IMPORTED_MODULE_9__ /* .style.inputMusicDataContainer */
                                  .o.inputMusicDataContainer,
                                children: [
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                                    _inputmusicdata_TextFieldInput__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                                    {
                                      label: '\uD0C0\uC774\uD2C0',
                                      value: title,
                                      func: onChangeTitle,
                                      required: true,
                                    },
                                  ),
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                                    _inputmusicdata_TextFieldInput__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                                    {
                                      label: '\uC544\uD2F0\uC2A4\uD2B8',
                                      value: artist,
                                      required: true,
                                      inputprops: {
                                        readOnly: true,
                                      },
                                    },
                                  ),
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                                    _inputmusicdata_TextFieldInput__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                                    {
                                      label: '\uC568\uBC94\uBA85',
                                      value: albumName,
                                      func: onChangeAlbumName,
                                    },
                                  ),
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                                    CssTextField,
                                    {
                                      variant: 'standard',
                                      id: 'music_genre',
                                      select: true,
                                      label: '\uC7A5\uB974',
                                      value: genre,
                                      onChange: onChangeGenre,
                                      sx: {
                                        width: '200px',
                                        margin: '10px 0',
                                        color: 'white',
                                        fontSize: '40px',
                                      },
                                      children: currencies.map(option =>
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                                          _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12___default(),
                                          {
                                            value: option.value,
                                            children: option.label,
                                          },
                                          option.value,
                                        ),
                                      ),
                                    },
                                  ),
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                                    _inputmusicdata_TextFieldInput__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                                    {
                                      label: '\uBC1C\uB9E4\uB144\uB3C4',
                                      value: release,
                                      func: onChangeRelease,
                                    },
                                  ),
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                                    _inputmusicdata_TextFieldInput__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                                    {
                                      label: '\uC791\uACE1\uAC00',
                                      value: songwriter,
                                      func: onChangeSongwriter,
                                    },
                                  ),
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                                    _inputmusicdata_TextFieldInput__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                                    {
                                      label: '\uC791\uC0AC\uAC00',
                                      value: lyricist,
                                      func: onChangeLyricist,
                                    },
                                  ),
                                ],
                              },
                            ),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                              _mui_material__WEBPACK_IMPORTED_MODULE_10__.Box,
                              {
                                sx: _uploadMusicStyle__WEBPACK_IMPORTED_MODULE_9__ /* .style.uploadMusicBtnContainer */
                                  .o.uploadMusicBtnContainer,
                                children:
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(
                                    UploadButton,
                                    {
                                      type: 'submit',
                                      variant: 'text',
                                      children: '\uB4F1\uB85D\uD558\uAE30',
                                    },
                                  ),
                              },
                            ),
                          ],
                        },
                      ),
                    ],
                  },
                ),
              },
            );
          };

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            UploadMusic;
          /*********************** 
 
// style

***********************/

          const UploadButton =
            styled_components__WEBPACK_IMPORTED_MODULE_8___default().button.withConfig(
              {
                displayName: 'UploadMusic__UploadButton',
                componentId: 'sc-1kinrsq-0',
              },
            )([
              'margin-top:10px;display:block;width:200px;height:50px;border:none;outline:none;border-radius:25px;color:#fff;font-size:18px;font-weight:500;letter-spacing:1px;text-transform:uppercase;cursor:pointer;background:linear-gradient(135deg,#3a8ffe 0%,#9658fe 100%);',
            ]);
          const CssTextField = (0,
          _mui_styles__WEBPACK_IMPORTED_MODULE_11__.withStyles)({
            root: {
              '& label.Mui-focused': {
                color: 'white',
              },
              '& .MuiInputLabel-root': {
                color: 'white',
              },
              '& .MuiSvgIcon-root': {
                color: 'white',
              },
              '& .MuiInput-root': {
                color: 'white',
              },
              '& .MuiInput-underline:before': {
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'white',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
            },
          })(_mui_material__WEBPACK_IMPORTED_MODULE_10__.TextField);
          const currencies =
            _utils__WEBPACK_IMPORTED_MODULE_13__ /* .utilCurrencies */.T;
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      },
    );

    /***/
  },

  /***/ 3777: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__,
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(5692);
    /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        _mui_material__WEBPACK_IMPORTED_MODULE_0__,
      );
    /* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(9484);
    /* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(
        _mui_styles__WEBPACK_IMPORTED_MODULE_1__,
      );
    /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(580);
    /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_2__,
      );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(6689);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(997);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__,
      );

    const CssTextField = (0,
    _mui_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)({
      root: {
        '& label.Mui-focused': {
          color: 'white',
        },
        '& .MuiInputLabel-root': {
          color: 'white',
        },
        '& .MuiInput-underline:before': {
          borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
        },
      },
    })(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TextField);

    const TextFieldInput = ({ label, value, func, required, inputprops }) => {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
        {
          children:
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(
              CssTextField,
              {
                label: label,
                variant: 'standard',
                value: value,
                onChange: func,
                fullWidth: true,
                sx: {
                  display: 'block',
                  margin: '1px',
                  width: '420px',
                  height: '80px',
                  marginBottom: '10px',
                  input: {
                    color: 'white',
                  },
                  fontSize: '40px',
                },
                color: 'secondary',
                required: required,
                inputProps: {
                  inputprops,
                  style: {
                    fontSize: 30,
                  },
                },
              },
            ),
        },
      );
    };

    TextFieldInput.prototype = {
      label:
        prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,
      value:
        prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,
      func: prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired,
    };
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
      TextFieldInput;

    /***/
  },

  /***/ 1015: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__,
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(7518);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_1__,
      );
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(997);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__,
      );

    const IPFSUploadButton =
      styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig(
        {
          displayName: 'IPFSUpload__IPFSUploadButton',
          componentId: 'sc-gydtcd-0',
        },
      )([
        'margin-top:10px;display:block;width:100%;height:40px;border:none;outline:none;border-radius:25px;color:#fff;font-size:18px;font-weight:500;letter-spacing:1px;text-transform:uppercase;cursor:pointer;background:linear-gradient(135deg,#3a8ffe 0%,#9658fe 100%);',
      ]);

    const IPFSUpload = ({ setSelectedIPFSFile }) => {
      const hiddenIPSFileInput = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
        null,
      );

      const handleMusicInput = e => {
        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();

        if (
          file.type === 'audio/mpeg' ||
          fileExt === 'mp3' ||
          file.type === 'audio/mp4' ||
          fileExt === 'mp4' ||
          file.type === 'audio/wav' ||
          fileExt === 'wav' ||
          file.type === 'audio/flac' ||
          fileExt === 'flac'
        ) {
          setSelectedIPFSFile(file);
          return;
        } else {
          alert('음악 파일만 업로드 가능합니다.');
          return;
        }
      };

      const onChange = () => {
        hiddenIPSFileInput.current.click();
      };

      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('div', {
        className: 'App',
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
            'input',
            {
              ref: hiddenIPSFileInput,
              type: 'file',
              onChange: handleMusicInput,
              style: {
                display: 'none',
              },
            },
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
            IPFSUploadButton,
            {
              type: 'button',
              onClick: onChange,
              children: 'MUSIC UPLOAD',
            },
          ),
        ],
      });
    };

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = IPFSUpload;

    /***/
  },

  /***/ 8675: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__,
  ) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ s3upload_S3Upload,
    });

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689);
    // EXTERNAL MODULE: external "@mui/material"
    var material_ = __webpack_require__(5692);
    // EXTERNAL MODULE: external "styled-components"
    var external_styled_components_ = __webpack_require__(7518);
    var external_styled_components_default =
      /*#__PURE__*/ __webpack_require__.n(external_styled_components_); // CONCATENATED MODULE: ./components/views/studio/uploadmusic/s3upload/style.js
    const style = {
      imgwrapper: {
        position: 'relative',
        height: '250px',
        width: '250px',
        border: 'none',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      },
      wrapper: {
        position: 'relative',
        height: '250px',
        width: '250px',
        border: '2px dashed #c2cdda',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      },
      image: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontSize: '20px',
        fontWeight: '500',
        color: '#5b5b7b',
      },
      cancelBtn: [
        {
          position: 'absolute',
          fontSize: '20px',
          right: '15px',
          top: '15px',
          color: '#9658fe',
          cursor: 'pointer',
          fontWeight: '600', // display: 'none',
        },
        {
          '&:hover': {
            color: 'red',
          },
        },
      ],
      fileName: {
        position: 'absolute',
        bottom: '0px',
        width: '100%',
        padding: '8px 0',
        fontSize: '18px',
        color: 'black', // display: 'none',
      },
      uploadBtn: {
        marginTop: '30px',
        display: 'block',
        width: '100%',
        height: '50px',
        border: 'none',
        outline: 'none',
        borderRadius: '25px',
        color: '#fff',
        fontSize: '18px',
        fontWeight: '500',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        cursor: 'pointer', // background: 'linear-gradient(135deg, #3a8ffe 0%, #9658fe 100%)',
      },
    };
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997); // CONCATENATED MODULE: ./components/views/studio/uploadmusic/s3upload/S3Upload.jsx
    const AlbumCoverButton =
      external_styled_components_default().button.withConfig({
        displayName: 'S3Upload__AlbumCoverButton',
        componentId: 'sc-ifwigc-0',
      })([
        'margin-top:10px;display:block;width:100%;height:40px;border:none;outline:none;border-radius:25px;color:#fff;font-size:18px;font-weight:500;letter-spacing:1px;text-transform:uppercase;cursor:pointer;background:linear-gradient(135deg,#3a8ffe 0%,#9658fe 100%);',
      ]);

    const S3Upload = props => {
      const hiddenFileInput = (0, external_react_.useRef)(null);
      const selectedFile = props.selectedFile;

      const handleFileInput = e => {
        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();

        if (
          file.type === 'image/jpeg' ||
          fileExt === 'jpg' ||
          file.type === 'image/gif' ||
          fileExt === 'gif' ||
          file.type === 'image/png' ||
          fileExt === 'png'
        ) {
          props.setSelectedFile(file);
          return;
        } else {
          alert('이미지 파일만 업로드 가능합니다.');
          return;
        }
      };

      const uploadAlbumCoverBtn = () => {
        hiddenFileInput.current.click();
      };

      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Box, {
            sx: selectedFile ? style.imgwrapper : style.wrapper,
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: style.image,
                children:
                  selectedFile &&
                  /*#__PURE__*/ jsx_runtime_.jsx('img', {
                    src: URL.createObjectURL(selectedFile),
                    style: {
                      objectFit: 'cover',
                      width: '250px',
                      height: '250px',
                    },
                  }),
              }),
              /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: style.content,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                  sx: style.text,
                  children: 'No file chosen, yet!',
                }),
              }),
              /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: style.cancelBtn,
                onClick: () => {
                  props.setSelectedFile(null);
                },
                children: 'X',
              }),
            ],
          }),
          /*#__PURE__*/ jsx_runtime_.jsx('input', {
            id: 'uploadBtn',
            type: 'file',
            onChange: handleFileInput,
            ref: hiddenFileInput,
            style: {
              display: 'none',
            },
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(AlbumCoverButton, {
            type: 'button',
            onClick: uploadAlbumCoverBtn,
            style: selectedFile
              ? {
                  display: 'none',
                }
              : {},
            children: 'Upload ALBUM COVER',
          }),
        ],
      });
    };

    /* harmony default export */ const s3upload_S3Upload = S3Upload;

    /***/
  },

  /***/ 3458: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__,
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ o: () => /* binding */ style,
      /* harmony export */
    });
    const style = {
      uploadMusicContainer: {
        margin: '100px',
        marginTop: '140px',
        height: '100%',
        width: '960px',
        display: 'flex',
      },
      leftSide: {
        margin: '0',
        padding: '0',
        flex: 1,
      },
      S3UploadContainer: {
        margin: '0',
        padding: '30px 30px 0 30px',
        height: '304px',
      },
      IPFSUploadContainer: {
        marginTop: '0',
        padding: '0 30px',
      },
      rightSide: {
        margin: '0',
        padding: '10px 0 0 40px',
        flex: 2,
      },
      inputMusicDataContainer: {},
      uploadMusicBtnContainer: {
        margin: '0',
        padding: '0',
      },
    };

    /***/
  },

  /***/ 8475: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__,
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ T: () => /* binding */ utilCurrencies,
      /* harmony export */
    });
    const utilCurrencies = [
      {
        value: 'balad',
        label: '발라드',
      },
      {
        value: 'dance',
        label: '댄스',
      },
      {
        value: 'raphiphop',
        label: '랩/힙합',
      },
      {
        value: 'rnbsoul',
        label: 'R&B/Soul',
      },
      {
        value: 'indie',
        label: '인디음악',
      },
      {
        value: 'rockmetal',
        label: '록/메탈',
      },
      {
        value: 'trot',
        label: '트로트',
      },
      {
        value: 'porkblues',
        label: '포크/블루스',
      },
    ];

    /***/
  },
};
