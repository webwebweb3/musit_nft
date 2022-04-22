import React, { useEffect, useState } from 'react';
import { FaBoxOpen, FaUserAstronaut, FaUserFriends } from 'react-icons/fa';
import { Global } from './SubscriptionBuyStyle';
import { IconContext } from 'react-icons/lib';
import SubscriptionLayout from './subscriptionLayout/SubscriptionLayout';
import { paymentContract } from '$contracts';
import { utils } from 'web3';
import { allDatas } from './datas';
import { Button } from '../homepage/Button';
import { useSelector } from 'react-redux';

const SubscriptionBuy = () => {
  const [plans, setPlans] = useState();
  const [oneUSDtoEther, setOneUSDtoEther] = useState();

  console.log('올데이타', allDatas);

  const getAllPlans = async () => {
    const allPlans = await paymentContract.methods.getAllPlans().call();
    const emptyArray = [];
    for (let i = 0; i < allPlans.length; i++) {
      emptyArray.push(allPlans[i]);
      emptyArray[i] = {
        ...emptyArray[i],
        Icons: allDatas[i].Icons,
        subIconTitle: allDatas[i].subIconTitle,
      };
    }
    setPlans(emptyArray);
  };
  const { userData } = useSelector(state => state.user);
  useEffect(() => {
    if (!plans) getAllPlans();
    console.log('플랜들', plans);
  }, [plans]);

  const etherToUSD = async () => {
    const URL =
      'https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';
    const res = await fetch(URL);
    const json = await res.json();
    const oneEtherUSD = json.market_data.current_price.usd;

    const divEther = parseFloat(1 / oneEtherUSD);

    setOneUSDtoEther(divEther.toFixed(10));
  };

  useEffect(() => {
    if (!oneUSDtoEther) etherToUSD();
  }, [oneUSDtoEther]);

  const onClickSub = async (month, amount) => {
    await paymentContract.methods
      .subscribes(month, amount)
      .send({ from: userData.metamask, value: month * amount });
  };

  return (
    <>
      <Global />
      <IconContext.Provider value={{ size: 35 }}>
        <div className="buySection">
          <div>
            <div
              style={{
                color: 'white',
                float: 'left',
                margin: '0 0 100px 150px',
                fontSize: '45px',
                fontWeight: 600,
              }}
            >
              구독권 판매
            </div>
          </div>

          {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ테스트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
          <div
            style={{ color: 'white', fontSize: '40px', margin: '40px 0 20px' }}
          >
            <FaBoxOpen color="#fff" style={{ marginRight: '10px' }} />
            테스트
          </div>
          <div
            className="buyContainer-card"
            style={{
              display: 'flex',
              flexDirection: 'row',
              minWidth: '1200px',
              maxWidth: '1200px',
              height: '300px',
              margin: '0 auto',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <div>테스트</div>
            <Button onClick={() => onClickSub(3, utils.toWei('0.1', 'ether'))}>
              asdf
            </Button>
          </div>
          {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ테스트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
          <div
            style={{ color: 'white', fontSize: '40px', margin: '40px 0 20px' }}
          >
            <FaBoxOpen color="#fff" style={{ marginRight: '10px' }} />
            Event
          </div>
          {/* <div
            className="buyContainer-card"
            style={{
              display: 'flex',
              flexDirection: 'row',
              minWidth: '1200px',
              maxWidth: '1200px',
              height: '300px',
              margin: '0 auto',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            {allDatas &&
              allDatas.map((v, i) => {
                return (
                  <>
                    {i <= 1 && (
                      <div style={{ height: '240.56px' }}>
                        <SubscriptionLayout
                          Icons={v.Icons}
                          subIconTitle={v.subIconTitle}
                          months={v.months}
                          subPrice={utils.fromWei(v.amount)}
                          // subTarget={v.target}
                          // frequency={v.frequency}
                          // planId={v.planId}
                        />
                      </div>
                    )}
                  </>
                );
              })}
          </div> */}
          {/* <div
            style={{ color: 'white', fontSize: '40px', margin: '40px 0 20px' }}
          >
            <FaBoxOpen color="#fff" style={{ marginRight: '10px' }} />
            Artist
          </div>
          <div
            className="buyContainer-card"
            style={{
              display: 'flex',
              flexDirection: 'row',
              minWidth: '1200px',
              maxWidth: '1200px',
              height: '300px',
              margin: '0 auto',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            {plans &&
              plans.map((v, i) => {
                return (
                  <>
                    {i > 1 && i <= 5 && (
                      <div>
                        <SubscriptionLayout
                          Icons={v.Icons}
                          subIconTitle={v.subIconTitle}
                          subPrice={utils.fromWei(v.amount)}
                          subTarget={v.target}
                          frequency={v.frequency}
                          planId={v.planId}
                        />
                      </div>
                    )}
                  </>
                );
              })}
          </div>

          <div
            style={{ color: 'white', fontSize: '40px', margin: '40px 0 20px' }}
          >
            <FaUserFriends color="#fff" style={{ marginRight: '10px' }} />
            User
          </div>
          <div
            className="buyContainer-card"
            style={{
              display: 'flex',
              flexDirection: 'row',
              minWidth: '1200px',
              maxWidth: '1200px',
              height: '300px',
              margin: '0 auto',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            {plans &&
              plans.map((v, i) => {
                return (
                  <>
                    {i > 5 && (
                      <div>
                        <SubscriptionLayout
                          Icons={v.Icons}
                          subIconTitle={v.subIconTitle}
                          subPrice={utils.fromWei(v.amount)}
                          subTarget={v.target}
                          frequency={v.frequency}
                          planId={v.planId}
                        />
                      </div>
                    )}
                  </>
                );
              })}
          </div> */}

          <div className="buyFooter">
            <h3>
              서비스를 이용하려면 유저는 구독을 해야한다. <br />
              이용권을 구매한 유저에 한해 음원 청취기능을 제공하며 매달 결제를
              진행해야 한다.
            </h3>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default SubscriptionBuy;
