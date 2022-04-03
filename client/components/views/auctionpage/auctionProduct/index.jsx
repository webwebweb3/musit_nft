import React from 'react';
import Clock from 'react-live-clock';

import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auctionAction } from '../../../../_request/auction_request';
import {
  AuctionAllContainer,
  AuctionBox,
  AuctionContentImg,
  AuctionContents,
  AuctionContentsContainer,
  AuctionDivider,
  AuctionGray,
  AuctionStyledButton,
  AuctionTime,
  EthereumImg,
} from '../style';
import { useCallback } from 'react';

const AuctionProductPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  let { product } = router.query;
  const { auctionData } = useSelector(state => state.auction);

  const [test, setTest] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [Time, setTime] = useState('');
  const [gaptest, setGaptest] = useState(false);

  let onFlag = e => {
    setTime(e);
  };

  let t1 = new Date(test * 1000);
  let t2 = new Date();
  let gap = t1.getTime() - t2.getTime();

  useEffect(() => {
    if (!gaptest && gap < 0) {
      setGaptest(true);
    } else {
      setGaptest(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gap && gap < 0]);

  let day = Math.floor(gap / (1000 * 60 * 60 * 24));
  let hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((gap % (1000 * 60)) / 1000);

  useEffect(() => {
    dispatch(auctionAction(product));
  }, [dispatch, product]);

  useEffect(() => {
    console.log(auctionData);
    if (auctionData) {
      setTest(auctionData.time);
    }
  }, [auctionData]);

  const onClickAuction = useCallback(() => {
    console.log(1111);
  }, []);

  return (
    <AuctionAllContainer>
      <Clock
        style={{ display: 'none' }}
        onChange={onFlag}
        ticking={true}
        timezone={'US/Pacific'}
      />
      <AuctionContentsContainer>
        <AuctionContentImg>
          <img src="/bgimg.jpg" alt="img" width={'550px'} height={'550px'} />
        </AuctionContentImg>
        <AuctionContents>
          <Box
            sx={{
              display: 'inline-block',
              width: '100%',
              fontSize: '40px',
              fontWeight: 'bold',
            }}
          >
            Title
          </Box>
          <AuctionDivider />
          <AuctionGray>
            {test && new Date(test * 1000).toLocaleString()} 마감
          </AuctionGray>
          <AuctionTime>
            {gaptest ? (
              <>종료된 경매입니다.</>
            ) : (
              <>
                {day} 일 {hour} 시 {min} 분 {sec} 초
              </>
            )}
          </AuctionTime>
          <AuctionDivider />
          <AuctionGray>현재 경매가</AuctionGray>
          <AuctionBox>
            <EthereumImg src="/ethereum-1.svg" alt="ethereum" />
            0.35
          </AuctionBox>
          <AuctionStyledButton onClick={onClickAuction}>
            입찰하기
          </AuctionStyledButton>
        </AuctionContents>
      </AuctionContentsContainer>
      <Box
        sx={{
          color: '#fff',
          display: 'inline-block',
          marginTop: '45px',
          width: '100%',
          fontSize: '25px',
        }}
      >
        Price History? Description? About Artist? Like? + Ratings and Reviews?
      </Box>
    </AuctionAllContainer>
  );
};

export default AuctionProductPage;
