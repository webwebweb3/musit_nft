import React, { useEffect, useState } from 'react';
import { FaBoxOpen, FaUserAstronaut, FaUserFriends } from 'react-icons/fa';
import { Global } from './SubscriptionBuyStyle';
import { IconContext } from 'react-icons/lib';
import SubscriptionLayout from './subscriptionLayout/SubscriptionLayout';
import { paymentContract } from '$contracts';
import { utils } from 'web3';
import { allDatas } from './datas';

const SubscriptionBuy = () => {
  const [plans, setPlans] = useState();

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

  useEffect(() => {
    if (!plans) getAllPlans();
    console.log('플랜들', plans);
  }, [plans]);

  return (
    <>
      <Global />
      <IconContext.Provider value={{ size: 60 }}>
        <div className="buySection">
          <div>
            <div style={{ color: 'white' }}>구독권 판매</div>
          </div>
          <FaBoxOpen color="#fff" />
          <div style={{ color: 'white' }}>이벤트</div>

          {plans &&
            plans.map((v, i) => {
              return (
                <>
                  {i <= 1 && (
                    <div>
                      <SubscriptionLayout
                        Icons={v.Icons}
                        subIconTitle={v.subIconTitle}
                        subPrice={utils.fromWei(v.amount)}
                        subTarget={v.target}
                      />
                    </div>
                  )}
                </>
              );
            })}
          <FaUserAstronaut color="#fff" />
          <div style={{ color: 'white' }}>아티스트</div>
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
                      />
                    </div>
                  )}
                </>
              );
            })}
          <FaUserFriends color="#fff" />
          <div style={{ color: 'white' }}>유저</div>
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
                      />
                    </div>
                  )}
                </>
              );
            })}

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
