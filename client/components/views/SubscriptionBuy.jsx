import React from 'react';
import { BsXDiamondFill } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';
import { GiCrystalize } from 'react-icons/gi';
import { Global } from './SubscriptionBuyStyle';
import { Button } from './homepage/Button';
import { IconContext } from 'react-icons/lib';

const SubscriptionBuy = () => {
  return (
    <>
      <Global />
      <IconContext.Provider value={{ size: 60 }}>
        <div className="buySection">
          <h1 className="buyHeading">구독권 구매</h1>
          <div className="buyWrapper">
            <div className="buyContainer">
              <div className="buyContainer-card buyContainer-cardInfo">
                <div className="icon">
                  <Button buttonSize="btn--large" buttonColor="primary">
                    <FaFire />{' '}
                    <>
                      <br />
                    </>
                    Event Plan
                  </Button>
                </div>
                <div className="buyInfoContainer">
                  <h1>0$</h1>
                </div>
                <div className="buyInfoText">
                  <h2>
                    런칭 후 3개월 이내 가입한 회원에 한하여 제공하는 가입비와 월
                    구독료를 무료로 이용 가능 합니다.
                  </h2>
                  <h2>유저 + 아티스트 혜택</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="buyWrapper">
            <div className="buyContainer">
              <div className="buyContainer-card buyContainer-cardInfo">
                <div className="icon">
                  <Button buttonSize="btn--large" buttonColor="primary">
                    <BsXDiamondFill />{' '}
                    <>
                      <br />
                    </>
                    User Plan
                  </Button>
                </div>
                <div className="buyInfoContainer">
                  <h1> 29.99$</h1>
                </div>
                <div className="buyInfoText">
                  <h2>전세계 스트리밍 동시 청취 가능</h2>
                  <h2>유저 혜택</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="buyWrapper">
            <div className="buyContainer">
              <div className="buyContainer-card buyContainer-cardInfo">
                <div className="icon">
                  <Button buttonSize="btn--large" buttonColor="primary">
                    <GiCrystalize fontSize="large" />{' '}
                    <>
                      <br />
                    </>
                    Artist Plan
                  </Button>
                </div>
                <div className="buyInfoContainer">
                  <h1> 99.99$</h1>
                </div>
                <div className="buyInfoText">
                  <h2>개인 음원 NFT 구매 및 판매 그리고 등록하여 경매까지 </h2>
                  <h2>아티스트 혜택</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default SubscriptionBuy;
