import React from 'react';
import { BsXDiamondFill } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';
import { GiCrystalize } from 'react-icons/gi';
import { Global } from './SubscriptionBuyStyle';
import { Button } from '../homepage/Button';
import { IconContext } from 'react-icons/lib';
import FreeSubscription from './freesubscription/FreeSubscription';
import SubscriptionLayout from './subscriptionLayout/SubscriptionLayout';

const SubscriptionBuy = () => {
  return (
    <>
      <Global />
      <IconContext.Provider value={{ size: 60 }}>
        <div className="buySection">
          <div>
            <h1 className="buyHeading">구독권 구매</h1>
          </div>
          <SubscriptionLayout />
          <FreeSubscription />
          <div className="buyWrapper">
            <div className="buyContainer">
              <div className="buyContainer-card buyContainer-cardInfo">
                <div className="buyIcon">
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
                <div className="buyIcon">
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
          <div className="buyFooter">
            {' '}
            <h3>
              각 서비스 비용은 한달 단위이며 서비스를 이용하려면 유저는 한 달
              단위의 subscription 을 해야함 <br />
              이용권을 구매한 유저에 한해 음원 청취기능을 제공하며 해지하지
              않으면 subscription 은 자동으로 갱신된다.
            </h3>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default SubscriptionBuy;
