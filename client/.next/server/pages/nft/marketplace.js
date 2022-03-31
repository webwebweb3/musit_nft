'use strict';
(() => {
  var exports = {};
  exports.id = 620;
  exports.ids = [620];
  exports.modules = {
    /***/ 6069: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ marketplace,
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
      // EXTERNAL MODULE: ./_actions/user_actions.js
      var user_actions = __webpack_require__(9402);
      // EXTERNAL MODULE: external "@mui/material"
      var material_ = __webpack_require__(5692); // CONCATENATED MODULE: ./components/views/nft/marketplace/contents/style.js
      const style = {
        ContentsContainer: {},
      };
      // EXTERNAL MODULE: ./contracts/index.js
      var contracts = __webpack_require__(9001);
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997); // CONCATENATED MODULE: ./components/views/nft/marketplace/contents/MarketPlaceContents.jsx
      const MarketPlaceContents = () => {
        const { 0: saleMusicTokens, 1: setSaleMusicTokens } = (0,
        external_react_.useState)();

        const getOnSaleMusicTokens = async () => {
          try {
            const onSaleMusicTokenArray =
              await contracts /* saleMusicTokenContract.methods.getOnSaleMusicTokens */.A_.methods
                .getOnSaleMusicTokens()
                .call();
            const tempMusicTokenArray = [];

            for (let i = 0; i < onSaleMusicTokenArray.length; i++) {
              const ipfsData = await fetch(
                `https://ipfs.io/ipfs/${onSaleMusicTokenArray[i].musicTokenURI}`,
              );
              const data = await ipfsData.json();
              tempMusicTokenArray.push({
                musicTokenId: onSaleMusicTokenArray[i].musicTokenId,
                musicTokenData: data,
                musicTokenPrice: onSaleMusicTokenArray[i].musicTokenPrice,
              });
            }

            setSaleMusicTokens(tempMusicTokenArray);
          } catch (error) {
            console.error(error);
          }
        };

        (0, external_react_.useEffect)(() => {
          if (!saleMusicTokens) getOnSaleMusicTokens();
          console.log(saleMusicTokens);
        }, [saleMusicTokens]);
        return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
          sx: style.ContentsContainer,
          children: 'MarketPlaceContents',
        });
      };

      /* harmony default export */ const contents_MarketPlaceContents =
        MarketPlaceContents; // CONCATENATED MODULE: ./components/views/nft/marketplace/leftSideBar/LeftSideBar.jsx
      const LeftSideBar = () => {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Box, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
              children: '\uAC80\uC0C9',
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
              children: '\uCE74\uD14C\uACE0\uB9AC',
            }),
          ],
        });
      };

      /* harmony default export */ const leftSideBar_LeftSideBar = LeftSideBar; // CONCATENATED MODULE: ./components/views/nft/marketplace/style.js
      const style_style = {
        marketplaceHeader: {
          width: '100%',
          minWidth: '1600px',
          maxWidth: '1600px',
          color: 'white',
          lineHeight: '72px',
          paddingTop: '60px',
          paddingBottom: '60px',
          fontSize: '30px',
          fontWeight: '700',
          '&.h1': {
            margin: '0',
          },
        },
        marketplaceContainer: {
          width: '100%',
          minWidth: '1600px',
          maxWidth: '1600px',
          height: '100%',
          display: 'flex',
          color: 'white',
          margin: '0 40px',
        },
        marketplaceLeftSideBar: {
          flex: 2,
        },
        marketplaceWrapper: {
          flex: 10,
        },
      }; // CONCATENATED MODULE: ./components/views/nft/marketplace/MarketPlace.jsx
      const MarketPlace = () => {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
              sx: style_style.marketplaceHeader,
              children: /*#__PURE__*/ jsx_runtime_.jsx('h1', {
                style: {
                  margin: '0 0 0 40px',
                },
                children: 'MarketPlace',
              }),
            }),
            /*#__PURE__*/ (0, jsx_runtime_.jsxs)(material_.Box, {
              sx: style_style.marketplaceContainer,
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                  sx: style_style.marketplaceLeftSideBar,
                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                    leftSideBar_LeftSideBar,
                    {},
                  ),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                  sx: style_style.marketplaceWrapper,
                  children: /*#__PURE__*/ jsx_runtime_.jsx(
                    contents_MarketPlaceContents,
                    {},
                  ),
                }),
              ],
            }),
          ],
        });
      };

      /* harmony default export */ const marketplace_MarketPlace = MarketPlace;
      // EXTERNAL MODULE: ./components/nftLayout/NFTLayout.jsx + 8 modules
      var NFTLayout = __webpack_require__(4195); // CONCATENATED MODULE: ./pages/nft/marketplace/index.jsx
      const MarketPlacePage = () => {
        return /*#__PURE__*/ jsx_runtime_.jsx(NFTLayout /* default */.Z, {
          children: /*#__PURE__*/ jsx_runtime_.jsx(marketplace_MarketPlace, {}),
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
      /* harmony default export */ const marketplace = MarketPlacePage;

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

    /***/ 1234: /***/ module => {
      module.exports = require('@mui/icons-material/Gavel');

      /***/
    },

    /***/ 3612: /***/ module => {
      module.exports = require('@mui/icons-material/Headset');

      /***/
    },

    /***/ 7458: /***/ module => {
      module.exports = require('@mui/icons-material/Storefront');

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

    /***/ 8891: /***/ module => {
      module.exports = require('@mui/material/FormControl');

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
    [400, 664, 361, 758, 739, 195],
    () => __webpack_exec__(6069),
  );
  module.exports = __webpack_exports__;
})();
