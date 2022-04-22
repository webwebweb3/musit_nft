import { Button } from '../../homepage/Button';
import React, { useState } from 'react';
import { Global } from '../SubscriptionBuyStyle';
import { IconContext } from 'react-icons/lib';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { paymentContract } from '$contracts';
import { utils } from 'web3';

<Global />;
const SubscriptionLayout = ({
  Icons,
  subIconTitle,
  subPrice,
  subTarget,
  frequency,
  planId,
}) => {
  const { userData } = useSelector(state => state.user);
  const dateNow = parseInt(Math.round(new Date().getTime() / 1000));

  const nextPlanFrequency = dateNow + parseInt(frequency);

  const onClickSubscribe = async () => {
    console.log('가격', subPrice);
    console.log('플랜아이디', planId);
    await paymentContract.methods
      .subscribe(parseInt(planId))
      .send({
        from: userData.metamask,
        value: utils.toWei(subPrice, 'ether'),
      })
      .then(
        axios.put('/subscribe', {
          data: nextPlanFrequency,
          metamask: userData.metamask,
        }),
      );
  };

  const onClickExistSubscribe = () => {
    const date = new Date(userData.subscription * 1000);
    alert(
      `이미 ${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}까지 구독중입니다.`,
    );
  };

  return (
    <>
      <IconContext.Provider value={{ size: 60 }}>
        <div className="buyIcon">
          {userData.subscription < dateNow ? (
            <div>
              <Button
                buttonSize="btn--large"
                buttonColor="primary"
                onClickExistSubscribe
                onClick={onClickSubscribe}
              >
                <Icons />
                <>
                  <br />
                  {subIconTitle}
                </>
                <div style={{ fontSize: '15px', marginTop: '15px' }}>
                  {subPrice < 0.000001 ? 0 : <div>{subPrice}</div>} ETH
                </div>
              </Button>
            </div>
          ) : (
            <div>
              <Button
                buttonSize="btn--large"
                buttonColor="primary"
                onClick={onClickExistSubscribe}
              >
                <Icons />
                <>
                  <br />
                  {subIconTitle}
                </>
                <div style={{ fontSize: '15px', marginTop: '15px' }}>
                  {subPrice < 0.000001 ? 0 : <div>{subPrice}</div>} ETH
                </div>
              </Button>
            </div>
          )}
        </div>
      </IconContext.Provider>
    </>
  );
};

export default SubscriptionLayout;
