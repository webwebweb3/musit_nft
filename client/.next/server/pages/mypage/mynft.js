'use strict';
(() => {
  var exports = {};
  exports.id = 357;
  exports.ids = [357];
  exports.modules = {
    /***/ 6520: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ mynft,
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
      // EXTERNAL MODULE: ./_actions/user_actions.js
      var user_actions = __webpack_require__(9402);
      // EXTERNAL MODULE: external "react-redux"
      var external_react_redux_ = __webpack_require__(6022);
      // EXTERNAL MODULE: external "next/router"
      var router_ = __webpack_require__(1853);
      var router_default = /*#__PURE__*/ __webpack_require__.n(router_);
      // EXTERNAL MODULE: ./contracts/index.js
      var contracts = __webpack_require__(9001);
      // EXTERNAL MODULE: external "@mui/material"
      var material_ = __webpack_require__(5692);
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997); // CONCATENATED MODULE: ./components/views/cards/MyNFTCards.jsx
      const NFTCards = ({
        account,
        musicTokenIds,
        musicTokenDatas,
        musicTokenPrices,
        saleStatus,
      }) => {
        const musicTokenData = musicTokenDatas.properties;
        const { 0: sellPrice, 1: setSellPrice } = (0, external_react_.useState)(
          '',
        );
        const { 0: myNFTPrice, 1: setMyNFTPrice } = (0,
        external_react_.useState)(musicTokenPrices);

        const onChangeSellPrice = e => {
          setSellPrice(e.target.value);
        };

        const onClickSell = async () => {
          try {
            if (!account) {
              alert('계정을 다시한번 살펴봐 주세요');
              return;
            }

            if (!saleStatus) {
              alert('NFT 판매에 동의를 먼재 해주세요.');
              return;
            }

            console.log(
              contracts /* web3.utils.toWei */.rV.utils
                .toWei(sellPrice, 'ether'),
            );
            const response =
              await contracts /* saleMusicTokenContract.methods.setForSaleMusicToken */.A_.methods
                .setForSaleMusicToken(
                  musicTokenIds,
                  contracts /* web3.utils.toWei */.rV.utils
                    .toWei(sellPrice, 'ether'),
                )
                .send({
                  from: account,
                });

            if (response.status) {
              setMyNFTPrice(
                contracts /* web3.utils.toWei */.rV.utils
                  .toWei(sellPrice, 'ether'),
              );
            }
          } catch (error) {
            console.error(error);
          }
        };

        console.log(sellPrice);
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Box, {
          style: {
            color: 'white',
          },
          children: [
            musicTokenData.dataToSubmit.title,
            /*#__PURE__*/ jsx_runtime_.jsx('img', {
              src: `https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${musicTokenData.S3AlbumCover}`,
              alt: 'Album Cover',
              width: '250px',
              height: '250px',
            }),
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Box, {
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Input, {
                  type: 'number',
                  value: sellPrice,
                  onChange: onChangeSellPrice,
                  style: {
                    color: 'white',
                  },
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                  onClick: onClickSell,
                  children: '\uD310\uB9E4',
                }),
                contracts /* web3.utils.fromWei */.rV.utils
                  .fromWei(myNFTPrice),
              ],
            }),
          ],
        });
      };

      /* harmony default export */ const MyNFTCards = NFTCards; // CONCATENATED MODULE: ./components/views/mypage/mynft/style.js
      const style = {
        myNFTContainer: {
          width: '100%',
          color: 'white',
          margin: '0',
        },
        myNFTSaleApprovalButton: {
          margin: '20px auto',
          width: '100px',
        },
      }; // CONCATENATED MODULE: ./components/views/mypage/mynft/MyNFT.jsx
      const MyNFT = () => {
        const { 0: myNFT, 1: setMyNFT } = (0, external_react_.useState)();
        const { 0: saleStatus, 1: setSaleStauts } = (0,
        external_react_.useState)(false);
        const { userData } = (0, external_react_redux_.useSelector)(
          state => state.user,
        );

        if (userData === null) {
          alert('로그인 해주세요');
          router_default().push('/');
        }

        const account = userData.metamask;

        const getMyMusicTokens = async () => {
          try {
            if (!account) return;
            const balanceLength =
              await contracts /* mintMusicTokenContract.methods.balanceOf */.sx.methods
                .balanceOf(account)
                .call();
            if (balanceLength === '0') return;
            const tempMusicCardArray = [];
            const response =
              await contracts /* mintMusicTokenContract.methods.getMusicTokens */.sx.methods
                .getMusicTokens(account)
                .call();

            for (let i = 0; i < response.length; i++) {
              const ipfsData = await fetch(
                `https://ipfs.io/ipfs/${response[i].musicTokenURI}`,
              );
              const data = await ipfsData.json();
              tempMusicCardArray.push({
                musicTokenId: response[i].musicTokenId,
                musicTokenData: data,
                musicTokenPrice: response[i].musicTokenPrice,
              });
            }

            setMyNFT(tempMusicCardArray);
          } catch (error) {
            console.error(error);
          }
        };

        const getIsApprovedForAll = async () => {
          try {
            const response =
              await contracts /* mintMusicTokenContract.methods.isApprovedForAll */.sx.methods
                .isApprovedForAll(
                  account,
                  contracts /* saleMusicTokenAddress */.bl,
                )
                .call();

            if (response) {
              setSaleStauts(response);
            }
          } catch (error) {
            console.error(error);
          }
        };

        const onClickSalesApproval = async () => {
          try {
            if (!account) return;

            if (saleStatus) {
              alert('이미 판매에 동의 하셨습니다.');
              return;
            }

            const response =
              await contracts /* mintMusicTokenContract.methods.setApprovalForAll */.sx.methods
                .setApprovalForAll(
                  contracts /* saleMusicTokenAddress */.bl,
                  true,
                )
                .send({
                  from: account,
                });

            if (response.status) {
              setSaleStauts(true);
            }
          } catch (error) {
            console.error(error);
          }
        };

        (0, external_react_.useEffect)(() => {
          if (!account) return;

          if (!myNFT) {
            getMyMusicTokens();
          }

          getIsApprovedForAll();
        }, [myNFT, saleStatus]);
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Box, {
          style: style.myNFTContainer,
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
              style: style.myNFTSaleApprovalButton,
              children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                onClick: onClickSalesApproval,
                children: !saleStatus && '판매동의',
              }),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
              container: true,
              spacing: {
                xs: 2,
                md: 4,
              },
              columns: {
                xs: 3,
                sm: 8,
                md: 12,
              },
              children:
                myNFT &&
                myNFT.map((v, i) => {
                  return /*#__PURE__*/ jsx_runtime_.jsx(
                    material_.Grid,
                    {
                      item: true,
                      xs: 2,
                      sm: 3,
                      md: 3,
                      children: /*#__PURE__*/ jsx_runtime_.jsx(MyNFTCards, {
                        account: account,
                        musicTokenIds: v.musicTokenId,
                        musicTokenDatas: v.musicTokenData,
                        musicTokenPrices: v.musicTokenPrice,
                        saleStatus: saleStatus,
                      }),
                    },
                    i,
                  );
                }),
            }),
          ],
        });
      };

      /* harmony default export */ const mynft_MyNFT = MyNFT; // CONCATENATED MODULE: ./pages/mypage/mynft.jsx
      const MyNFTPage = () => {
        return /*#__PURE__*/ jsx_runtime_.jsx(mainlayout /* default */.Z, {
          children: /*#__PURE__*/ jsx_runtime_.jsx(layout /* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(mynft_MyNFT, {}),
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
      /* harmony default export */ const mynft = MyNFTPage;

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
  var __webpack_require__ = require('../../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = moduleId =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(
    0,
    [400, 664, 361, 758, 739, 745, 289],
    () => __webpack_exec__(6520),
  );
  module.exports = __webpack_exports__;
})();
