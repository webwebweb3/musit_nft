import { Button } from '../../homepage/Button';
import { FaFire } from 'react-icons/fa';
import React from 'react';
import { Global } from '../SubscriptionBuyStyle';
import { IconContext } from 'react-icons/lib';

<Global />;
const SubscriptionLayout = ({
  Icons,
  subIconTitle,
  subPrice,
  subText,
  subTarget,
}) => {
  return (
    <>
      <IconContext.Provider value={{ size: 60 }}>
        <div className="buyWrapper">
          <div className="buyContainer">
            <div className="buyContainer-card buyContainer-cardInfo">
              <div className="buyIcon">
                <Button buttonSize="btn--large" buttonColor="primary">
                  <Icons />
                  <>
                    <br />
                    {subIconTitle}
                  </>
                </Button>
              </div>
              <div className="buyInfoContainer">
                <h1>{subPrice < 0.0001 ? 0 : subPrice} ETH</h1>
              </div>
              <div className="buyInfoText"></div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default SubscriptionLayout;
