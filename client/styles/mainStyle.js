import { createGlobalStyle } from 'styled-components';

export const GlobalMain = createGlobalStyle`
:root {
  /* --upload-font-size: 1.7vw;
  --upload-font-family: SpoqaHanSansNeo-Regular;
  --btn-border-color: #dadada;
  --btn-size: 1.4vw;
  --btn-border-radius: 10px; */
  --streaming-font-color: #fff;
  --streaming-font-artist-color: #dada;
  --streaming-font-title-size: 30px;
}

html,
body {
  background-color: #0d0f1a;
  margin: 0;
}

rect[fill] {
  fill: transparent;
  color: #000;
  background-color: #000;
}

.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root {
  color: #dada;
}

.css-1y7coo4-MuiButtonBase-root-MuiPaginationItem-root {
  color: rgb(66 97 139 / 87%);
}

.css-wjh20t-MuiPagination-ul {
  margin-top: 25px;
  justify-content: center;
}

.auctionBlur {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  position: fixed;
  display: flex;
  z-index: 5;
  width: 85%;
  height: 70%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
.popup {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  display: flex;
}

.auctionBlurAni {
  width: 300px;
  height: 300px;
}
.uploadBlur {
  background-color: rgba(70, 70, 70, 0.95);
  border-radius: 30px;
  margin-top: -40px;
  position: fixed;
  display: flex;
  z-index: 5;
  width: 85%;
  height: 80%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.9);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
.svgContainer {
  width: 300px;
  height: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.css-187mznn-MuiSlider-root:hover > .css-eg0mwd-MuiSlider-thumb {
  display: flex;
}
.css-187mznn-MuiSlider-root:hover > .css-14pt78w-MuiSlider-rail {
  height: 5px;
}
.css-187mznn-MuiSlider-root:hover {
  height: 5px;
}

.css-eg0mwd-MuiSlider-thumb {
  display: none;
}

.css-12lvs33 .css-0 .page .pageList.css-0 {
  width: 732px;
  text-align: center;
  margin-left: 70px;
}

.pageList {
  width: 933px;
  text-align: center;
  margin-left: 70px;
}

.pageList > ul {
  list-style: none;
  display: inline-block;
  margin: 0 auto;
  align-items: center;
  padding: 0;
}

.pageList > ul li {
  list-style: none;
  display: inline-block;
  width: 20px;
  margin: 0 auto;
}

/* Card */
.cardContract {
  display: inline-block;
  width: 300px;
  opacity: 1;
  background-color: #2c3352;
  color: white;
  border-radius: 1rem;
}

.cardContract:hover {
  opacity: 0.8;
  cursor: pointer;
}

.cardBottom {
  display: flex;
  flexdirection: column;
}

.cardContent {
  flex: 1 0 auto;
}

.cardTitle {
  color: #768fb5;
}

.cardETH {
  fontweight: 600;
  color: #18c99b;
}

.navSpan .react-reveal {
  display: inline;
}

.ListContainer {
  width: 100%;
  margin: auto;
  padding-bottom: 0px;
}

.CoverArt :hover {
  transform: scale(1.01);
  transition: all 0.3s ease-out;
  color: #ffffff;
  opacity: 75%;
}

@media screen and (max-width: 960px) {
  .CoverArt {
    align-items: center;
    width: 100%;
  }
  .TList {
    width: auto;
  }
}
@media screen and (max-width: 480px) {
  .CoverArt {
    align-items: center;
    width: 100%;
  }
  .TList {
    width: auto;
  }
}

.TList {
  margin-left: 50px;
  display: inline-block;
}
.CoverArt {
  width: 600px;
  height: 600px;
  display: inline;
}

.LikeButtonIcon {
  background-color: #dada;
  border-radius: 50%;
  padding: 3px;
  color: #fff;
}

.auctionAllContainer {
  width: 100%;
}

.auctionMainContainer {
  display: flex;
  flex-direction: column;
  color: white;
  flex: 0 1 auto;
  min-width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
}

.auctionHeader {
  color: white;
  line-height: 52px;
  padding: 5px 0 15px 0;
  flex: 0 1 auto;
  font-size: 30px;
  font-weight: 700;
  margin: 0 auto 0 0;
  width: 100%;
}

.styledNewAuctionButton {
  display: block;
  background-color: transparent;
  padding: 6px 12px;
  width: auto;
  margin: 0 0 0 auto;
  color: #fff;
}

.styledNewAuctionButton:hover {
  color: rgb(25, 118, 210);
  background-color: transparent;
}

.page > .pageList > .selectBox {
  color: white;
  border: 1px solid white;
  margin-left: 20px;
  margin-bottom: 120px;
  height: 45px;
}

.page > .pageList > .selectBox > svg {
  color: white;
}

.edition_history_container {
  margin: 60px 0 140px;
  /* background-color: #dada; */
}
.edition_history_title {
  /* background-color: red; */
  text-align: center;
  margin: 0 0 16px;
  font-size: 22px;
  color: #91afcc;
  font-weight: 600;
}
.edition_history_description {
  width: 100%;
  min-width: 1200px;
}
.edition_history_contents_container {
  background-color: #333649;
  width: 100%;
  min-width: 1180px;
  height: 52px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  font-size: 19px;
}

.edition_history_contents_title_container {
  width: 400px;
  display: flex;
}
.edition_history_contents_title {
  padding: 0 15px;
  margin: auto 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.edition_history_contents_price {
  width: 170px;
  padding: 0 15px;
  margin: auto 0;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.edition_history_contents_buyer {
  width: 120px;
  padding: 0 15px;
  margin: auto 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.edition_history_contents_seller {
  width: 120px;
  padding: 0 15px;
  margin: auto 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.edition_history_contents_date {
  width: 270px;
  padding: 0 15px;
  margin: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
}

.mypage_myfavorite_artist_contents {
  margin: 65px 0;
  color: white;
  text-align: center;
}

.approveBox {
  margin: 10px auto 10px 70px;
  width: 100%;
  background-color: #e2ebf030;
  border-radius: 10px;
}

.approveText {
  color: #fff;
}

.approveText:hover {
  text-decoration: underline;
}

svg[data-testid='AddTaskIcon'] {
  color: white;
  margin-right: 5px;
}

.approveGrid {
  margin-top: 18px;
  margin-left: 60px;
}

.approveGrid > div {
  margin-bottom: 20px;
}

.myNFTContainer {
  width: 100%;
  color: white;
  margin: 0;
}

.css-12lvs33 {
  margin-left: -20px;
}

.mypage_mysubinfo_contents {
  color: #fff;
}
.mypage_mysubinfo_contents_title {
  font-size: 24px;
  font-weight: 600;
}
.mypage_mysubinfo_contents_contents {
  display: inline-block;
  font-size: 20px;
}

button[role='tab'] {
  color: #fff;
}

button[role='tab']:hover {
  color: #ffbbec;
}

button[disabled] {
  color: #ffbbec;
}

.MyPlayList {
  border-color: transparent;
  margin-right: 10px;
}

.MyPlayTitle {
  margin-right: auto;
  font-weight: bold;
  font-size: 25px;
  padding-right: 300px;
}

.MyPlayListContainer > .MuiDialog-container > .MuiPaper-root {
  background-color: #eeeeee;
}

.streamingContainer {
  color: var(--streaming-font-color);
  margin-top: 120px;
}

.streamingTitle {
  font-size: var(--streaming-font-title-size);
  font-weight: 600;
}

.streamingBox {
  margin: 0 auto;
  width: 1200px;
}

.streamingDivider {
  background: var(--streaming-font-color);
  margin: 25px 0;
}

.cardBox {
  display: inline-block;
  background-color: transparent;
  margin: 0 10px;
}

.styledCard {
  background-color: transparent;
}

.cardImg {
  width: 200px;
  height: 200px;
  border-radius: 10px;
}

.cardText {
  color: var(--streaming-font-color);
}

.cardArtist {
  color: var(--streaming-font-artist-color);
  text-decoration: none;
  cursor: pointer;
}

.cardArtist:hover {
  text-decoration: underline;
}

.latestMusic {
  color: #dada;
  font-size: 18px;
  padding: 15px;
  text-decoration: none;
}

.latestMusic:hover {
  text-decoration: underline;
}

.shadowCard:hover {
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 40px 70px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 20px 38px -18px inset;
}

`;
