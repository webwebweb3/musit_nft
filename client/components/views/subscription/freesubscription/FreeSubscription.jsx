import { Button } from '../../homepage/Button';
import { FaFire } from 'react-icons/fa';
import React from 'react';
import { Global } from '../SubscriptionBuyStyle';
import { IconContext } from 'react-icons/lib';

<Global />;
const FreeSubscription = () => {
  return (
    <>
      <IconContext.Provider value={{ size: 60 }}>
        <div className="buyWrapper">
          <div className="buyContainer">
            <div className="buyContainer-card buyContainer-cardInfo">
              <div className="buyIcon">
                <Button buttonSize="btn--large" buttonColor="primary">
                  <FaFire />
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
      </IconContext.Provider>
    </>
  );
};

export default FreeSubscription;
