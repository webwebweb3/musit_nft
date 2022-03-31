'use strict';
(() => {
  var exports = {};
  exports.id = 405;
  exports.ids = [405];
  exports.modules = {
    /***/ 1958: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ pages,
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
      // EXTERNAL MODULE: ./node_modules/next/link.js
      var next_link = __webpack_require__(1664);
      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(7518); // CONCATENATED MODULE: ./components/views/homepage/heroSectionStyle.js
      const Global = (0, external_styled_components_.createGlobalStyle)([
        '.home__hero-section{color:#fff;padding:160px 0;}.home__hero-row{align-items:center;}.row{display:flex;margin-right:-15px;margin-bottom:-15px;margin-left:-15px;flex-wrap:wrap;align-content:stretch;}.col{margin-bottom:15px;padding-right:15px;padding-left:15px;flex:1;max-width:50%;flex-basis:50%;}.home__hero-text-wrapper{max-width:540px;padding-top:0;padding-bottom:60px;}.top-line{color:#f00946;font-size:16px;line-height:16px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;margin-bottom:16px;}.heading{margin-bottom:24px;font-size:48px;line-height:1.1;font-weight:600;color:#f7f8fa;}.dark{color:#1c2237;}.darkBg{background-color:#1c2237;}.home__hero-subtitle{max-width:440px;margin-bottom:35px;font-size:18px;line-height:24px;}.home__hero-img-wrapper{max-width:555px;}.home__hero-img{max-width:95%;margin-top:0;margin-right:0;margin-left:10px;padding-right:0;}img{border:0;max-width:100%;vertical-align:middle;display:inline-block;}@media screen and (max-width:991px){.container{padding-right:30px;padding-left:30px;}}@media screen and (max-width:768px){.home__hero-text-wrapper{padding-bottom:65px;}.col{max-width:100%;flex-basis:100%;}}',
      ]); // CONCATENATED MODULE: ./components/views/homepage/buttonStyle.js
      const buttonStyle_Global = (0,
      external_styled_components_.createGlobalStyle)([
        ':root{--primary:#fff;}.btn{padding:8px 20px;border-radius:4px;outline:none;border:none;cursor:pointer;white-space:nowrap;}.btn--primary{background-color:var(--primary);color:#242424;border:1px solid var(--primary);}.btn--outline{background-color:transparent;color:#fff;padding:8px 20px;border:1px solid var(--primary);transition:all 0.3s ease-out;}.btn--medium{padding:8px 20px;font-size:18px;}.btn--large{padding:12px 26px;font-size:20px;}.btn--mobile{text-align:center;border-radius:4px;width:80%;text-decoration:none;font-size:1.5rem;background-color:transparent;color:#fff;padding:14px 20px;border:1px solid #fff;transition:all 0.3s ease-out;}.btn--wide{padding:12px 64px;font-size:20px;}.btn--large:hover,.btn--medium:hover,.btn--mobile:hover{transition:all 0.3s ease-out;background:#fff;color:#242424;}.btn--wide:hover{color:#fff;background-color:#f00946;transition:all 0.2s ease-out;}.btn-link{display:flex;justify-content:center;align-items:center;text-decoration:none;padding:8px 16px;height:100%;width:100%;}.blue{background-color:#276afb;color:#fff;border:none;}.red{background-color:#f00946;color:#fff;border:none;}.primary{background-color:#242424;color:#fff;border:none;}.primary:hover{background-color:#fff;color:#242424;border:none;}.green{background:#25ce4a;color:#fff;border:none;}.green:hover{background-color:#242424;}',
      ]);
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997); // CONCATENATED MODULE: ./components/views/homepage/Button.jsx
      const STYLES = ['btn--primary', 'btn--outline'];
      const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
      const COLOR = ['primary', 'blue', 'red', 'green'];
      const Button = ({
        children,
        type,
        onClick,
        buttonStyle,
        buttonSize,
        buttonColor,
      }) => {
        const checkButtonStyle = STYLES.includes(buttonStyle)
          ? buttonStyle
          : STYLES[0];
        const checkButtonSize = SIZES.includes(buttonSize)
          ? buttonSize
          : SIZES[0];
        const checkButtonColor = COLOR.includes(buttonColor)
          ? buttonColor
          : null;
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(buttonStyle_Global, {}),
            /*#__PURE__*/ jsx_runtime_.jsx('button', {
              className: `btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`,
              onClick: onClick,
              type: type,
              children: children,
            }),
          ],
        });
      }; // CONCATENATED MODULE: ./components/views/homepage/HeroSection.jsx
      function HeroSection({
        lightBg,
        topLine,
        lightText,
        lightTextDesc,
        headline,
        description,
        buttonLabel,
        img,
        alt,
        imgStart,
      }) {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Global, {}),
            /*#__PURE__*/ jsx_runtime_.jsx('div', {
              className: lightBg
                ? 'home__hero-section'
                : 'home__hero-section darkBg',
              children: /*#__PURE__*/ jsx_runtime_.jsx('div', {
                className: 'container',
                children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                  className: 'row home__hero-row',
                  style: {
                    display: 'flex',
                    flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
                  },
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx('div', {
                      className: 'col',
                      children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                        className: 'home__hero-text-wrapper',
                        children: [
                          /*#__PURE__*/ jsx_runtime_.jsx('div', {
                            className: 'top-line',
                            children: topLine,
                          }),
                          /*#__PURE__*/ jsx_runtime_.jsx('h1', {
                            className: lightText ? 'heading' : 'heading dark',
                            children: headline,
                          }),
                          /*#__PURE__*/ jsx_runtime_.jsx('p', {
                            className: lightTextDesc
                              ? 'home__hero-subtitle'
                              : 'home__hero-subtitle dark',
                            children: description,
                          }),
                          /*#__PURE__*/ jsx_runtime_.jsx(next_link['default'], {
                            href: '/',
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                              buttonSize: 'btn--wide',
                              buttonColor: 'blue',
                              children: buttonLabel,
                            }),
                          }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx('div', {
                      className: 'col',
                      children: /*#__PURE__*/ jsx_runtime_.jsx('div', {
                        className: 'home__hero-img-wrapper',
                        children: /*#__PURE__*/ jsx_runtime_.jsx('img', {
                          src: img,
                          alt: alt,
                          className: 'home__hero-img',
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }

      /* harmony default export */ const homepage_HeroSection = HeroSection; // CONCATENATED MODULE: ./components/views/homepage/Data.jsx
      const homeObjOne = {
        lightBg: false,
        lightText: true,
        lightTextDesc: true,
        topLine: '런칭 3개월 이내',
        headline: '모든 신규료 고객에게 가입비/ 구독료 무료',
        description:
          'WEBWEB의 NFT 음악플랫폼에서는 유저/아티스트 고객의 차별적 서비스 제공, 경매, 일반거래 등으로 음원에 대한 수익 창출이 가능합니다  ',
        buttonLabel: '지금 시작하기',
      };
      const homeObjTwo = {
        lightBg: false,
        lightText: true,
        lightTextDesc: true,
        topLine: 'STREAMING',
        headline: '전세계 동시 스트리밍 서비스',
        description:
          '전세계 스트리밍 서비스로 모든 아티스트 음원을 플레이스트, 좋아하는 아티스트를 저장함으로서 감상이 가능합니다.',
        buttonLabel: '스트리밍 바로가기',
        imgStart: '',
        img: '/bgimg.jpg',
        alt: 'Vault',
      };
      const homeObjThree = {
        lightBg: true,
        lightText: false,
        lightTextDesc: false,
        topLine: 'NFT',
        headline: '음원에 대한 NFT',
        description:
          '아티스트의 동의 하에 모든 음원은 NFT 로 유통이 되며 구매/판매 및 경매를 할 수 있습니다.',
        buttonLabel: 'NFT 바로가기',
        imgStart: 'start',
        img: '/bgimg.jpg',
        alt: 'Vault',
      };
      // EXTERNAL MODULE: external "react-icons/fa"
      var fa_ = __webpack_require__(6290);
      // EXTERNAL MODULE: external "react-icons/bs"
      var bs_ = __webpack_require__(567);
      // EXTERNAL MODULE: external "react-icons/gi"
      var gi_ = __webpack_require__(8866); // CONCATENATED MODULE: external "react-icons/lib"
      const lib_namespaceObject = require('react-icons/lib'); // CONCATENATED MODULE: ./components/views/homepage/pricingStyle.js
      const pricingStyle_Global = (0,
      external_styled_components_.createGlobalStyle)([
        '.pricing__section{padding:100px 0 160px;display:flex;flex-direction:column;justify-content:center;background:#fafafa;}.pricing__container-card{background:linear-gradient(45deg,#0660e9 0%,#276afb 100%);box-shadow:0 6px 20px rgba(56,125,255,0.2);width:280px;height:500px;text-decoration:none;border-radius:4px;}.pricing__container-card:nth-child(2){transform:scale(1.05);background:#242424;}.pricing__container-card:hover{transform:scale(1.06);transition:all 0.3s ease-out;color:#1c2237;}.pricing__container-card:nth-child(2){margin:0 24px;}.pricing__container{display:flex;justify-content:center;align-items:center;}.pricing__wrapper{display:flex;flex-direction:column;align-items:start;margin:0 auto;}.pricing__heading{color:#1c2237;margin-bottom:24px;}.pricing__container-cardInfo{display:flex;flex-direction:column;height:500px;padding:24px;align-items:center;color:#fff;}.pricing__container-cardInfo h3{margin-bottom:5px;font-size:24px;}.pricing__container-cardInfo h4{font-size:40px;}.pricing__container-cardInfo p{font-size:14px;margin-bottom:24px;}.pricing__container-features{margin:16px 0 32px;list-style:none;}.pricing__container-features li{margin-bottom:10px;}.pricing__container-features{display:flex;flex-direction:column;align-items:center;}.icon{margin:24px 0;}@media screen and (max-width:960px){.pricing__container{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;}.pricing__container-card{width:90%;}.pricing__wrapper{margin:0 30px;display:flex;flex-direction:column;align-items:center;}.pricing__container-card:nth-child(2){transform:scale(1);background:#242424;margin:24px;}.pricing__container-card:hover{transform:none;}}',
      ]); // CONCATENATED MODULE: ./components/views/homepage/Pricing.jsx
      function Pricing() {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(pricingStyle_Global, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(
              lib_namespaceObject.IconContext.Provider,
              {
                value: {
                  color: '#fff',
                  size: 64,
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx('div', {
                  className: 'pricing__section',
                  children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                    className: 'pricing__wrapper',
                    children: [
                      /*#__PURE__*/ jsx_runtime_.jsx('h1', {
                        className: 'pricing__heading',
                        children: 'Pricing',
                      }),
                      /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                        className: 'pricing__container',
                        children: [
                          /*#__PURE__*/ jsx_runtime_.jsx(next_link['default'], {
                            href: '/subscription',
                            children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                              'div',
                              {
                                className:
                                  'pricing__container-card pricing__container-cardInfo',
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx('div', {
                                    className: 'icon',
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(
                                      fa_.FaFire,
                                      {},
                                    ),
                                  }),
                                  /*#__PURE__*/ jsx_runtime_.jsx('h3', {
                                    children: '3\uAC1C\uC6D4 \uBB34\uB8CC',
                                  }),
                                  /*#__PURE__*/ jsx_runtime_.jsx('h4', {
                                    children: '$0',
                                  }),
                                  /*#__PURE__*/ jsx_runtime_.jsx('p', {
                                    children: 'per month',
                                  }),
                                  /*#__PURE__*/ (0, jsx_runtime_.jsxs)('ul', {
                                    className: 'pricing__container-features',
                                    children: [
                                      /*#__PURE__*/ jsx_runtime_.jsx('li', {
                                        children:
                                          '\uBB34\uB8CC \uC2A4\uD2B8\uB9AC\uBC0D',
                                      }),
                                      /*#__PURE__*/ jsx_runtime_.jsx('li', {
                                        children:
                                          '\uC544\uD2F0\uC2A4\uD2B8 \uAC00\uC785\uBE44 \uBB34\uB8CC',
                                      }),
                                      /*#__PURE__*/ jsx_runtime_.jsx('li', {
                                        children:
                                          '3\uAC1C\uC6D4\uAC04 NFT \uAC70\uB798 \uAC00\uB2A5',
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                    buttonSize: 'btn--wide',
                                    buttonColor: 'primary',
                                    children: 'Choose Plan',
                                  }),
                                ],
                              },
                            ),
                          }),
                          /*#__PURE__*/ jsx_runtime_.jsx(next_link['default'], {
                            href: '/subscription',
                            children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                              'div',
                              {
                                className:
                                  'pricing__container-cardInfo pricing__container-card',
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx('div', {
                                    className: 'icon',
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(
                                      bs_.BsXDiamondFill,
                                      {},
                                    ),
                                  }),
                                  /*#__PURE__*/ jsx_runtime_.jsx('h3', {
                                    children: '\uC720\uC800',
                                  }),
                                  /*#__PURE__*/ jsx_runtime_.jsx('h4', {
                                    children: '$29.99',
                                  }),
                                  /*#__PURE__*/ jsx_runtime_.jsx('p', {
                                    children: 'per month',
                                  }),
                                  /*#__PURE__*/ (0, jsx_runtime_.jsxs)('ul', {
                                    className: 'pricing__container-features',
                                    children: [
                                      /*#__PURE__*/ jsx_runtime_.jsx('li', {
                                        children:
                                          '\uBB34\uC81C\uD55C \uC2A4\uD2B8\uB9AC\uBC0D \uC11C\uBE44\uC2A4',
                                      }),
                                      /*#__PURE__*/ jsx_runtime_.jsx('li', {
                                        children:
                                          '\uD50C\uB808\uC774\uB9AC\uC2A4\uD2B8 \uC81C\uACF5',
                                      }),
                                      /*#__PURE__*/ jsx_runtime_.jsx('li', {
                                        children:
                                          '\uC544\uD2F0\uC2A4\uD2B8 \uBC14\uAD6C\uB2C8 \uC81C\uACF5',
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                    buttonSize: 'btn--wide',
                                    buttonColor: 'blue',
                                    children: 'Choose Plan',
                                  }),
                                ],
                              },
                            ),
                          }),
                          /*#__PURE__*/ jsx_runtime_.jsx(next_link['default'], {
                            href: '/subscription',
                            children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                              'div',
                              {
                                className:
                                  'pricing__container-cardInfo pricing__container-card',
                                children: [
                                  /*#__PURE__*/ jsx_runtime_.jsx('div', {
                                    className: 'icon',
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(
                                      gi_.GiCrystalize,
                                      {},
                                    ),
                                  }),
                                  /*#__PURE__*/ jsx_runtime_.jsx('h3', {
                                    children: '\uC544\uD2F0\uC2A4\uD2B8',
                                  }),
                                  /*#__PURE__*/ jsx_runtime_.jsx('h4', {
                                    children: '$99.99',
                                  }),
                                  /*#__PURE__*/ jsx_runtime_.jsx('p', {
                                    children: 'per month',
                                  }),
                                  /*#__PURE__*/ (0, jsx_runtime_.jsxs)('ul', {
                                    className: 'pricing__container-features',
                                    children: [
                                      /*#__PURE__*/ jsx_runtime_.jsx('li', {
                                        children:
                                          '\uBB34\uC81C\uD55C \uC2A4\uD2B8\uB9AC\uBC0D \uC81C\uACF5',
                                      }),
                                      /*#__PURE__*/ jsx_runtime_.jsx('li', {
                                        children:
                                          'NFT \uAC70\uB798/\uACBD\uB9E4 \uAC00\uB2A5',
                                      }),
                                      /*#__PURE__*/ jsx_runtime_.jsx('li', {
                                        children:
                                          'NFT \uC74C\uC6D0 \uB4F1\uB85D \uAC00\uB2A5',
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                    buttonSize: 'btn--wide',
                                    buttonColor: 'primary',
                                    children: 'Choose Plan',
                                  }),
                                ],
                              },
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              },
            ),
          ],
        });
      }

      /* harmony default export */ const homepage_Pricing = Pricing; // CONCATENATED MODULE: ./components/views/homepage/Home.jsx
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

      function HomePage() {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(
              homepage_HeroSection,
              _objectSpread({}, homeObjOne),
            ),
            /*#__PURE__*/ jsx_runtime_.jsx(
              homepage_HeroSection,
              _objectSpread({}, homeObjThree),
            ),
            /*#__PURE__*/ jsx_runtime_.jsx(
              homepage_HeroSection,
              _objectSpread({}, homeObjTwo),
            ),
            /*#__PURE__*/ jsx_runtime_.jsx(homepage_Pricing, {}),
          ],
        });
      }

      /* harmony default export */ const Home = HomePage;
      // EXTERNAL MODULE: ./_actions/user_actions.js
      var user_actions = __webpack_require__(9402); // CONCATENATED MODULE: ./pages/index.jsx
      const pages_Home = () => {
        return /*#__PURE__*/ jsx_runtime_.jsx(mainlayout /* default */.Z, {
          children: /*#__PURE__*/ jsx_runtime_.jsx(Home, {}),
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
              } ///

              store.dispatch((0, user_actions /* myInfoRequestAction */.e8)()); ///

              store.dispatch(external_redux_saga_.END);
              await store.sagaTask.toPromise();
            },
        );
      /* harmony default export */ const pages = pages_Home;

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

    /***/ 9283: /***/ module => {
      module.exports = require('@mui/icons-material/Paid');

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

    /***/ 567: /***/ module => {
      module.exports = require('react-icons/bs');

      /***/
    },

    /***/ 6290: /***/ module => {
      module.exports = require('react-icons/fa');

      /***/
    },

    /***/ 8866: /***/ module => {
      module.exports = require('react-icons/gi');

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
    [400, 664, 361, 758, 739, 745],
    () => __webpack_exec__(1958),
  );
  module.exports = __webpack_exports__;
})();
