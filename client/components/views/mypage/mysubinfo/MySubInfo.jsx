import { allDatas } from '$components/views/subscription/datas';
import { paymentContract } from '$contracts';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MySubInfo = () => {
  const { userData } = useSelector(state => state.user);
  const [mySubscribe, setMySubscribe] = useState();
  const getMySubInfo = async () => {
    const mySubHistory = await paymentContract.getPastEvents('PaymentSent', {
      filter: { from: userData?.metamask },
      fromBlock: 0,
    });

    const mySub = mySubHistory.slice(mySubHistory.length - 1).reverse();
    setMySubscribe(mySub);
  };
  let dateNow = parseInt(Math.round(new Date().getTime() / 1000));
  useEffect(() => {
    if (!mySubscribe) getMySubInfo();

    // console.log('지금!', dateNow);
    console.log('정보', mySubscribe);
  }, [mySubscribe]);

  let FirstIcon;
  let date;

  return (
    <Box>
      <Box>
        <h1 style={{ marginTop: '-1px', color: '#fff' }}>내 구독 정보</h1>
      </Box>
      <Box className="mypage_mysubinfo_contents">
        {mySubscribe === undefined ? (
          <>
            <Box>구독 정보가 없습니다.</Box>
            <Link href="/subscriptionbuy">
              <Button>구매하러가기</Button>
            </Link>
          </>
        ) : (
          <>
            {mySubscribe.length === 0 ? (
              <>
                <Box>구독 정보가 없습니다.</Box>
                <Link href="/subscriptionbuy">
                  <Button>구매하러가기</Button>
                </Link>
              </>
            ) : (
              <>
                <Box className="mypage_mysubinfo_contents_first">
                  {
                    (FirstIcon =
                      allDatas[mySubscribe[0].returnValues.planId].Icons)
                  }
                  <Box className="mypage_mysubinfo_contents_title">
                    이전 구독 정보
                  </Box>
                  <Box
                    style={{
                      display: 'inline-block',
                      fontSize: '20px',
                      marginRight: '40px',
                    }}
                  >
                    {new Date(
                      mySubscribe[0].returnValues.date * 1000,
                    ).getFullYear() +
                      '-' +
                      (new Date(
                        mySubscribe[0].returnValues.date * 1000,
                      ).getMonth() +
                        1) +
                      '-' +
                      new Date(
                        mySubscribe[0].returnValues.date * 1000,
                      ).getDate()}
                  </Box>
                  <FirstIcon />
                  <Box className="mypage_mysubinfo_contents_contents">
                    <Box
                      style={{
                        display: 'inline-block',
                        marginLeft: '10px',
                        marginRight: '10px',
                      }}
                    >
                      {
                        allDatas[mySubscribe[0].returnValues.planId]
                          .subIconTitle
                      }
                    </Box>
                    <Box style={{ display: 'inline-block' }}>
                      {allDatas[mySubscribe[0].returnValues.planId].months}달
                    </Box>
                  </Box>
                </Box>
                <Box style={{ marginTop: '20px' }}>
                  {userData?.subscription * 1000 <= Date.now() && (
                    <>
                      <span>이용권 기간이 끝났습니다</span>
                      <Link href="/subscriptionbuy">
                        <Button>이용권 구입하러 가기</Button>
                      </Link>
                    </>
                  )}
                </Box>
              </>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default MySubInfo;
