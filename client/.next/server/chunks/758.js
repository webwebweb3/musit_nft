'use strict';
exports.id = 758;
exports.ids = [758];
exports.modules = {
  /***/ 5758: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__,
  ) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ _store_configureStore,
    });

    // EXTERNAL MODULE: external "next-redux-wrapper"
    var external_next_redux_wrapper_ = __webpack_require__(5648);
    // EXTERNAL MODULE: external "redux"
    var external_redux_ = __webpack_require__(6695);
    // EXTERNAL MODULE: external "redux-devtools-extension"
    var external_redux_devtools_extension_ = __webpack_require__(173);
    // EXTERNAL MODULE: external "redux-saga"
    var external_redux_saga_ = __webpack_require__(6537);
    var external_redux_saga_default =
      /*#__PURE__*/ __webpack_require__.n(external_redux_saga_);
    // EXTERNAL MODULE: external "immer"
    var external_immer_ = __webpack_require__(7133); // CONCATENATED MODULE: ./util/produce.js
    // eslint-disable-next-line import/no-anonymous-default-export

    /* harmony default export */ const produce = (...args) => {
      (0, external_immer_.enableES5)();
      return (0, external_immer_.produce)(...args);
    };
    // EXTERNAL MODULE: ./_actions/types.js
    var types = __webpack_require__(5361); // CONCATENATED MODULE: ./_reducers/user_reducer.js
    const initialState = {
      logInUserLoading: false,
      logInUserDone: false,
      logInUserError: null,
      logOutUserLoading: false,
      logOutUserDone: false,
      logOutUserError: null,
      registerUserLoading: false,
      registerUserDone: false,
      registerUserError: null,
      editImagesLoading: false,
      editImagesDone: false,
      editImagesError: null,
      myInfoLoading: false,
      myInfoDone: false,
      myInfoError: null,
      userData: null,
      imagePath: null,
    };

    const UserReducer = (state = initialState, action) =>
      produce(state, draft => {
        switch (action.type) {
          case types /* LOGIN_USER_REQUEST */.a2:
            draft.logInUserLoading = true;
            draft.logInUserError = null;
            draft.logInUserDone = false;
            draft.logOutUserLoading = false;
            draft.logOutUserError = null;
            draft.logOutUserDone = false;
            draft.registerUserLoading = false;
            draft.registerUserError = null;
            draft.registerUserDone = false;
            break;

          case types /* LOGIN_USER_SUCCESS */.$U:
            draft.logInUserLoading = false;
            draft.userData = action.data;
            draft.logInUserDone = true;
            break;

          case types /* LOGIN_USER_FAILURE */.Ht:
            draft.logInUserLoading = false;
            draft.logInUserError = action.error;
            break;

          case types /* LOGOUT_USER_REQUEST */.Kx:
            draft.logOutUserLoading = true;
            draft.logOutUserError = null;
            draft.logOutUserDone = false;
            draft.logInUserLoading = false;
            draft.logInUserError = null;
            draft.logInUserDone = false;
            draft.registerUserLoading = false;
            draft.registerUserError = null;
            draft.registerUserDone = false;
            break;

          case types /* LOGOUT_USER_SUCCESS */.Q6:
            draft.logOutUserLoading = false;
            draft.logOutUserDone = true;
            draft.userData = null;
            break;

          case types /* LOGOUT_USER_FAILURE */.LI:
            draft.logOutUserLoading = false;
            draft.logOutUserError = action.error;
            break;

          case types /* REGISTER_USER_REQUEST */.O2:
            draft.logInUserLoading = false;
            draft.logInUserError = null;
            draft.logInUserDone = false;
            draft.logOutUserLoading = false;
            draft.logOutUserError = null;
            draft.logOutUserDone = false;
            draft.registerUserLoading = true;
            draft.registerUserError = null;
            draft.registerUserDone = false;
            break;

          case types /* REGISTER_USER_SUCCESS */.Vx:
            draft.registerUserLoading = false;
            draft.registerUserDone = true;
            break;

          case types /* REGISTER_USER_FAILURE */.Bw:
            draft.registerUserLoading = false;
            draft.registerUserError = action.error;
            break;

          case types /* EDIT_USER_REQUEST */.bZ:
            draft.editUserLoading = true;
            draft.editUserError = null;
            draft.editUserDone = false;
            break;

          case types /* EDIT_USER_SUCCESS */.ow:
            draft.editUserLoading = false;
            draft.editUserDone = true;
            draft.userData = action.data;
            draft.imagePath = null;
            break;

          case types /* EDIT_USER_FAILURE */.fF:
            draft.editUserLoading = false;
            draft.editUserError = action.error;
            break;

          case types /* USER_IMAGES_REQUEST */.um:
            draft.uploadImagesLoading = true;
            draft.uploadImagesDone = false;
            draft.uploadImagesError = null;
            break;

          case types /* USER_IMAGES_SUCCESS */.AJ:
            draft.imagePath = action.data;
            draft.uploadImagesLoading = false;
            draft.uploadImagesDone = true;
            break;

          case types /* USER_IMAGES_FAILURE */.EW:
            draft.uploadImagesLoading = false;
            draft.uploadImagesError = action.error;
            break;

          case types /* MY_INFO_REQUEST */.$b:
            draft.myInfoLoading = true;
            draft.myInfoError = null;
            draft.myInfoDone = false;
            break;

          case types /* MY_INFO_SUCCESS */.XF:
            draft.myInfoLoading = false;
            draft.userData = action.data;
            draft.myInfoDone = true;
            break;

          case types /* MY_INFO_FAILURE */.Gh:
            draft.myInfoLoading = false;
            draft.myInfoError = action.error;
            break;

          default:
            return state;
        }
      });

    /* harmony default export */ const user_reducer = UserReducer; // CONCATENATED MODULE: ./_reducers/metamask_reducer.js
    const metamask_reducer_initialState = {
      metamaskLoading: false,
      metamaskDone: false,
      metamaskError: null,
      metamaskLoginLoading: false,
      metamaskLoginDone: false,
      metamaskLoginError: null,
      metamaskData: null,
    };

    const MetamaskReducer = (state = metamask_reducer_initialState, action) =>
      produce(state, draft => {
        switch (action.type) {
          case types /* METAMASK_REQUEST */.fU:
            draft.metamaskLoading = true;
            draft.metamaskError = null;
            draft.metamaskDone = false;
            draft.metamaskLoginLoading = false;
            draft.metamaskLoginError = null;
            draft.metamaskLoginDone = false;
            draft.metamaskData = null;
            break;

          case types /* METAMASK_SUCCESS */.vH:
            draft.metamaskLoading = false;
            draft.metamaskData = action.data;
            draft.metamaskDone = true;
            break;

          case types /* METAMASK_FAILURE */.J3:
            draft.metamaskLoading = false;
            draft.metamaskError = action.error;
            break;

          case types /* METAMASK_LOGIN_REQUEST */.GK:
            draft.metamaskLoading = false;
            draft.metamaskError = null;
            draft.metamaskDone = false;
            draft.metamaskLoginLoading = true;
            draft.metamaskLoginError = null;
            draft.metamaskLoginDone = false;
            draft.metamaskData = null;
            break;

          case types /* METAMASK_LOGIN_SUCCESS */.xQ:
            draft.metamaskLoginLoading = false;
            draft.metamaskData = action.data;
            draft.metamaskLoginDone = true;
            break;

          case types /* METAMASK_LOGIN_FAILURE */.cc:
            draft.metamaskLoginLoading = false;
            draft.metamaskLoginError = action.error;
            break;

          default:
            return state;
        }
      });

    /* harmony default export */ const metamask_reducer = MetamaskReducer; // CONCATENATED MODULE: ./_reducers/uploadMusic_reducer.js
    const uploadMusic_reducer_initialState = {
      S3UploadLoading: false,
      S3UploadDone: false,
      S3UploadError: null,
      IPFSUploadLoading: false,
      IPFSUploadDone: false,
      IPFSUploadError: null,
      MintMusicNFTLoading: false,
      MintMusicNFTDone: false,
      MintMusicNFTError: null,
      S3Data: null,
      IPFSData: null,
      jsonData: null,
    };

    const uploadMusic_reducer_UserReducer = (
      state = uploadMusic_reducer_initialState,
      action,
    ) =>
      produce(state, draft => {
        switch (action.type) {
          case types /* S3_ALBUMCOVER_REQUEST */.Ar:
            draft.S3UploadLoading = true;
            draft.S3UploadError = null;
            draft.S3UploadDone = false;
            break;

          case types /* S3_ALBUMCOVER_SUCCESS */.GF:
            draft.S3UploadLoading = false;
            draft.S3Data = action.data;
            draft.S3UploadDone = true;
            break;

          case types /* S3_ALBUMCOVER_FAILURE */.yR:
            draft.S3UploadLoading = false;
            draft.S3UploadError = action.error;
            break;

          case types /* IPFS_MUSIC_REQUEST */.F3:
            draft.IPFSUploadLoading = true;
            draft.IPFSUploadError = null;
            draft.IPFSUploadDone = false;
            break;

          case types /* IPFS_MUSIC_SUCCESS */.hq:
            draft.IPFSUploadLoading = false;
            draft.IPFSData = action.data;
            draft.IPFSUploadDone = true;
            break;

          case types /* IPFS_MUSIC_FAILURE */.J6:
            draft.IPFSUploadLoading = false;
            draft.IPFSUploadError = action.error;
            break;

          case types /* MINT_MUSIC_NFT_REQUEST */.$f:
            draft.MintMusicNFTLoading = true;
            draft.MintMusicNFTError = null;
            draft.MintMusicNFTDone = false;
            break;

          case types /* MINT_MUSIC_NFT_SUCCESS */.f7:
            draft.MintMusicNFTLoading = false;
            draft.jsonData = action.data;
            draft.MintMusicNFTDone = true;
            break;

          case types /* MINT_MUSIC_NFT_FAILURE */.ZK:
            draft.MintMusicNFTLoading = false;
            draft.MintMusicNFTError = action.error;
            break;

          default:
            break;
        }
      });

    /* harmony default export */ const uploadMusic_reducer =
      uploadMusic_reducer_UserReducer; // CONCATENATED MODULE: ./_reducers/index.js
    const rootReducer = (state, action) => {
      switch (action.type) {
        case external_next_redux_wrapper_.HYDRATE:
          console.log('HYDRATE', action);
          return action.payload;

        default: {
          const combinedReducer = (0, external_redux_.combineReducers)({
            user: user_reducer,
            metamask: metamask_reducer,
            s3: uploadMusic_reducer,
          });
          return combinedReducer(state, action);
        }
      }
    }; // export default persistReducer(rootPersistConfig, rootReducer);

    /* harmony default export */ const _reducers = rootReducer;
    // EXTERNAL MODULE: external "redux-saga/effects"
    var effects_ = __webpack_require__(6477);
    // EXTERNAL MODULE: external "axios"
    var external_axios_ = __webpack_require__(2167);
    var external_axios_default =
      /*#__PURE__*/ __webpack_require__.n(external_axios_); // CONCATENATED MODULE: ./_sagas/userRegister.js
    function logInAPI(data) {
      let loginData = {
        metamask: data,
        password: '1', // 임시 - 수정 예정
      };
      return external_axios_default().post('/login', loginData);
    }

    function* logIn(action) {
      try {
        const result = yield (0, effects_.call)(logInAPI, action.data);
        yield (0, effects_.put)({
          type: types /* LOGIN_USER_SUCCESS */.$U,
          data: result.data,
        });
      } catch (err) {
        console.error(err);
        yield (0, effects_.put)({
          type: types /* LOGIN_USER_FAILURE */.Ht,
          error: err.response.data,
        });
      }
    }

    function logOutAPI() {
      return external_axios_default().post('/logout');
    }

    function* logOut() {
      try {
        yield (0, effects_.call)(logOutAPI);
        yield (0, effects_.put)({
          type: types /* LOGOUT_USER_SUCCESS */.Q6,
        });
      } catch (err) {
        console.error(err);
        yield (0, effects_.put)({
          type: types /* LOGOUT_USER_FAILURE */.LI,
          error: err.response.data,
        });
      }
    }

    function registerAPI(data) {
      return external_axios_default().post('/register', data);
    }

    function* register(action) {
      try {
        yield (0, effects_.call)(registerAPI, action.data);
        yield (0, effects_.put)({
          type: types /* REGISTER_USER_SUCCESS */.Vx,
        });
      } catch (err) {
        console.error(err);
        yield (0, effects_.put)({
          type: types /* REGISTER_USER_FAILURE */.Bw,
          error: err.response.data,
        });
      }
    }

    function userImgAPI(data) {
      return external_axios_default().post('/useredit/img', data);
    }

    function* userImg(action) {
      try {
        const result = yield (0, effects_.call)(userImgAPI, action.data);
        yield (0, effects_.put)({
          type: types /* USER_IMAGES_SUCCESS */.AJ,
          data: result.data,
        });
      } catch (err) {
        console.error(err);
        yield (0, effects_.put)({
          type: types /* USER_IMAGES_FAILURE */.EW,
          error: err.response.data,
        });
      }
    }

    function userEditAPI(data) {
      return external_axios_default().post('/useredit', data);
    }

    function* userEdit(action) {
      try {
        const result = yield (0, effects_.call)(userEditAPI, action.data);
        yield (0, effects_.put)({
          type: types /* EDIT_USER_SUCCESS */.ow,
          data: result.data,
        });
      } catch (err) {
        console.error(err);
        yield (0, effects_.put)({
          type: types /* EDIT_USER_FAILURE */.fF,
          error: err.response.data,
        });
      }
    }

    function myInfoAPI() {
      return external_axios_default().get('/user');
    }

    function* myInfo() {
      try {
        const result = yield (0, effects_.call)(myInfoAPI);
        yield (0, effects_.put)({
          type: types /* MY_INFO_SUCCESS */.XF,
          data: result.data,
        });
      } catch (err) {
        console.error(err);
        yield (0, effects_.put)({
          type: types /* MY_INFO_FAILURE */.Gh,
          error: err.response.data,
        });
      }
    }

    function* watchLogIn() {
      yield (0, effects_.takeLatest)(types /* LOGIN_USER_REQUEST */.a2, logIn);
    }

    function* watchLogOut() {
      yield (0, effects_.takeLatest)(
        types /* LOGOUT_USER_REQUEST */.Kx,
        logOut,
      );
    }

    function* watchRegister() {
      yield (0, effects_.takeLatest)(
        types /* REGISTER_USER_REQUEST */.O2,
        register,
      );
    }

    function* watchUserImg() {
      yield (0, effects_.takeLatest)(
        types /* USER_IMAGES_REQUEST */.um,
        userImg,
      );
    }

    function* watchUserEdit() {
      yield (0, effects_.takeLatest)(
        types /* EDIT_USER_REQUEST */.bZ,
        userEdit,
      );
    }

    function* watchMyInfo() {
      yield (0, effects_.takeLatest)(types /* MY_INFO_REQUEST */.$b, myInfo);
    }

    function* userSaga() {
      yield (0, effects_.all)([
        (0, effects_.fork)(watchLogIn),
        (0, effects_.fork)(watchLogOut),
        (0, effects_.fork)(watchRegister),
        (0, effects_.fork)(watchUserImg),
        (0, effects_.fork)(watchUserEdit),
        (0, effects_.fork)(watchMyInfo),
      ]);
    } // CONCATENATED MODULE: ./_sagas/metamask.js
    function metamaskAPI() {
      let request = window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      return request;
    }

    function* metamask() {
      try {
        const result = yield (0, effects_.call)(metamaskAPI);
        yield (0, effects_.put)({
          type: types /* METAMASK_SUCCESS */.vH,
          data: result[0],
        });
      } catch (err) {
        console.error(err);
        yield (0, effects_.put)({
          type: types /* METAMASK_FAILURE */.J3,
          error: err.response.data,
        });
      }
    }

    function metamaskloginAPI() {
      let request = window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      return request;
    }

    function* metamasklogin() {
      try {
        const result = yield (0, effects_.call)(metamaskloginAPI);
        yield (0, effects_.put)({
          type: types /* METAMASK_LOGIN_SUCCESS */.xQ,
          data: result[0],
        });
        yield (0, effects_.put)({
          type: types /* LOGIN_USER_REQUEST */.a2,
          data: result[0],
        });
      } catch (err) {
        console.error(err);
        yield (0, effects_.put)({
          type: types /* METAMASK_LOGIN_FAILURE */.cc,
          error: err.response.data,
        });
      }
    }

    function* watchMetamask() {
      yield (0, effects_.takeLatest)(types /* METAMASK_REQUEST */.fU, metamask);
    }

    function* watchMetamaskLogin() {
      yield (0, effects_.takeLatest)(
        types /* METAMASK_LOGIN_REQUEST */.GK,
        metamasklogin,
      );
    }

    function* metamask_userSaga() {
      yield (0, effects_.all)([
        (0, effects_.fork)(watchMetamask),
        (0, effects_.fork)(watchMetamaskLogin),
      ]);
    }
    // EXTERNAL MODULE: external "@aws-sdk/lib-storage"
    var lib_storage_ = __webpack_require__(8641);
    // EXTERNAL MODULE: external "@aws-sdk/client-s3"
    var client_s3_ = __webpack_require__(1841);
    // EXTERNAL MODULE: ./contracts/index.js
    var contracts = __webpack_require__(9001);
    // EXTERNAL MODULE: external "fs"
    var external_fs_ = __webpack_require__(7147); // CONCATENATED MODULE: ./_sagas/uploadMusic.js
    function uploadS3AlbumCover(data) {
      const myFile = data.selectedFile;
      const fileName = `${Date.now()}_${myFile.name}`;
      console.log('s3F', fileName);
      const target = {
        Bucket: 'webwebweb3',
        Key: `upload/${fileName}`,
        Body: myFile,
      };
      const creds = {
        accessKeyId: 'AKIATD34FPVMDI273ZHF',
        secretAccessKey: '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',
      };

      try {
        const parallelUploads3 = new lib_storage_.Upload({
          client:
            new client_s3_.S3({
              region: 'ap-northeast-2',
              credentials: creds,
            }) || new client_s3_.S3Client({}),
          partSize: 10485760,
          leavePartsOnError: false,
          params: target,
        });
        parallelUploads3.on('httpUploadProgress', progress => {
          console.log('saga progress', progress);
        });
        parallelUploads3.done();
        return fileName;
      } catch (e) {
        console.error(e);
      }
    }

    async function uploadIPFSMusic(data) {
      console.log('ipfs data', data.ipfsredux.file);
      const url = await data.ipfsredux.client.add(data.ipfsredux.file);
      return url.path;
    }

    async function mintNFTMusic(data) {
      try {
        let jsonData = {
          title: 'musit NFT',
          description: 'This data is for minting a NFT.',
          type: 'object',
          properties: {
            dataToSubmit: data.data.dataToSubmit,
            IPFSUrl: data.IPFSurl,
            S3AlbumCover: data.S3AlbumUrl,
          },
        };
        const mintIPFSurl = await external_axios_default().post(
          '/uploadmusic/fs',
          jsonData,
        ); // const NFTIPFSurl = await data.data.ipfsredux.client.add(MintData);
        // console.log('nftipfs', NFTIPFSurl);
        // const mintingData = JSON.stringify(jsonData);
        // console.log('mintingdata', mintingData);

        const response =
          await contracts /* mintMusicTokenContract.methods.mintMusicToken */.sx.methods
            .mintMusicToken(mintIPFSurl.data.path)
            .send({
              from: data.data.account,
            });

        if (response.status) {
          const uploadToServer = async e => {
            try {
              await external_axios_default()
                .post(`/uploadmusic`, data.data.dataToSubmit)
                .then(res => {
                  if (res.data.uploadSuccess === 'true') {
                    console.log('good');
                  } else if (res.data.uploadSuccess !== 'empty') {
                    alert(res.data.message);
                  } else if (res.data.uploadSuccess !== 'emptyIPFS') {
                    alert(res.data.message);
                  } else if (res.data.uploadSuccess !== 'emptyS3AlbumCover') {
                    alert(res.data.message);
                  } else {
                    alert(res.data.message);
                  }
                });
            } catch (error) {
              console.error(error);
            }
          };

          uploadToServer();
        }
      } catch (error) {
        console.error(error);
      }
    }

    function* mintNFT(action) {
      try {
        const S3AlbumUrl = yield (0, effects_.call)(
          uploadS3AlbumCover,
          action.data,
        );
        yield (0, effects_.put)({
          type: types /* S3_ALBUMCOVER_SUCCESS */.GF,
          data: S3AlbumUrl,
        });
        const IPFSurl = yield (0, effects_.call)(uploadIPFSMusic, action.data);
        yield (0, effects_.put)({
          type: types /* IPFS_MUSIC_SUCCESS */.hq,
          data: IPFSurl,
        });
        const newActionData = {
          data: action.data,
          S3AlbumUrl,
          IPFSurl,
        };
        yield (0, effects_.call)(mintNFTMusic, newActionData);
        yield (0, effects_.put)({
          type: types /* MINT_MUSIC_NFT_SUCCESS */.f7,
          data: 'success',
        });
      } catch (err) {
        console.error(err);
        yield (0, effects_.put)({
          type: types /* S3_ALBUMCOVER_FAILURE */.yR,
          error: err.response.data,
        });
        yield (0, effects_.put)({
          type: types /* IPFS_MUSIC_FAILURE */.J6,
          error: err.response.data,
        });
        yield (0, effects_.put)({
          type: types /* MINT_MUSIC_NFT_FAILURE */.ZK,
          error: err.response.data,
        });
      }
    }

    function* watchMintNFTMusic() {
      yield (0, effects_.takeLatest)(
        types /* MINT_MUSIC_NFT_REQUEST */.$f,
        mintNFT,
      );
    }

    function* uploadMusic() {
      yield (0, effects_.all)([(0, effects_.fork)(watchMintNFTMusic)]);
    } // CONCATENATED MODULE: ./_sagas/index.js
    external_axios_default().defaults.baseURL = 'http://localhost:8000/api';
    external_axios_default().defaults.withCredentials = true;
    function* rootSaga() {
      yield (0, effects_.all)([
        (0, effects_.fork)(userSaga),
        (0, effects_.fork)(metamask_userSaga),
        (0, effects_.fork)(uploadMusic),
      ]); // all 에 배열을 넣고 배열의 함수들을 한번에 전부 실행
    } // CONCATENATED MODULE: ./_store/configureStore.js
    /* redux-saga/effects */
    // all 은 위에
    // fork 는 비동기 함수 호출
    // call 은 동기 함수 호출
    // take("액션"); 은 해당 액션이 실행될 때까지 대기
    // put 은 리덕스의 dispatch 와 비슷함
    const configureStore = () => {
      const sagaMiddleware = external_redux_saga_default()();
      const middlewares = [sagaMiddleware];
      const enhancer = true
        ? (0, external_redux_.compose)(
            (0, external_redux_.applyMiddleware)(...middlewares),
          )
        : 0;
      const store = (0, external_redux_.createStore)(_reducers, enhancer);
      store.sagaTask = sagaMiddleware.run(rootSaga); // const persistor = persistStore(store);

      return store;
    };

    const wrapper = (0, external_next_redux_wrapper_.createWrapper)(
      configureStore,
      {
        debug: false,
      },
    );
    /* harmony default export */ const _store_configureStore = wrapper;

    /***/
  },

  /***/ 9001: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__,
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ bl: () => /* binding */ saleMusicTokenAddress,
      /* harmony export */ rV: () => /* binding */ web3,
      /* harmony export */ sx: () => /* binding */ mintMusicTokenContract,
      /* harmony export */ A_: () => /* binding */ saleMusicTokenContract,
      /* harmony export */
    });
    /* unused harmony export mintMusicTokenAddress */
    /* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(8519);
    /* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

    const mintMusicTokenAbi = [
      {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'approved',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'ApprovalForAll',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'getApproved',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getLatestMusicToken',
        outputs: [
          {
            internalType: 'string[]',
            name: '',
            type: 'string[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_musicTokenOwner',
            type: 'address',
          },
        ],
        name: 'getMusicTokens',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'musicTokenId',
                type: 'uint256',
              },
              {
                internalType: 'string',
                name: 'musicTokenURI',
                type: 'string',
              },
              {
                internalType: 'uint256',
                name: 'musicTokenPrice',
                type: 'uint256',
              },
            ],
            internalType: 'struct MintMusicToken.MusicTokenData[]',
            name: '',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
        ],
        name: 'isApprovedForAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: '_metadata',
            type: 'string',
          },
        ],
        name: 'mintMusicToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'musicTokens',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'ownerOf',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: '_data',
            type: 'bytes',
          },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'saleMusicToken',
        outputs: [
          {
            internalType: 'contract SaleMusicToken',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_saleMusicToken',
            type: 'address',
          },
        ],
        name: 'setSaleMusicToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes4',
            name: 'interfaceId',
            type: 'bytes4',
          },
        ],
        name: 'supportsInterface',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'tokenByIndex',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'tokenURI',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ];
    const saleMusicTokenAbi = [
      {
        inputs: [
          {
            internalType: 'address',
            name: '_mintMusicTokenAddress',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_musicTokenId',
            type: 'uint256',
          },
        ],
        name: 'getMusicTokenPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getOnSaleMusicTokenArrayLength',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getOnSaleMusicTokens',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'musicTokenId',
                type: 'uint256',
              },
              {
                internalType: 'string',
                name: 'musicTokenURI',
                type: 'string',
              },
              {
                internalType: 'uint256',
                name: 'musicTokenPrice',
                type: 'uint256',
              },
            ],
            internalType: 'struct SaleMusicToken.OnSaleMusicTokenData[]',
            name: '',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'mintMusicTokenAddress',
        outputs: [
          {
            internalType: 'contract MintMusicToken',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'musicTokenPrices',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'onSaleMusicTokenArray',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_musicTokenId',
            type: 'uint256',
          },
        ],
        name: 'purchaseMusicToken',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_musicTokenId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_price',
            type: 'uint256',
          },
        ],
        name: 'setForSaleMusicToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ];
    const mintMusicTokenAddress = '0xa1bB2CA9fD3dD36946AA18A00Ff24Bf2B6021fAC';
    const saleMusicTokenAddress = '0x8DAff91a817A61CF71E15715D58CcEB4786B9393';
    let web3;
    let mintMusicTokenContract;
    let saleMusicTokenContract;

    if (false) {
    }

    /***/
  },
};
