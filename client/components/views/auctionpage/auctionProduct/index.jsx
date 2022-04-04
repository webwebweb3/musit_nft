import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { auctionAction } from '../../../../_request/auction_request';
import {
  AuctionAllContainer,
  AuctionContentImg,
  AuctionContents,
  AuctionContentsContainer,
  AuctionDivider,
} from '../style';
import TimeBox from './TimeBox';
import BidBox from './BidBox';
import TitleBox from './TitleBox';
import MyBidBox from './MyBidBox';
import AuctionBidButton from './AuctionBidButton';

const AuctionProductPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  let { product } = router.query;

  useEffect(() => {
    dispatch(auctionAction(product));
  }, [dispatch, product]);

  return (
    <AuctionAllContainer>
      <AuctionContentsContainer>
        <AuctionContentImg>
          <img src="/bgimg.jpg" alt="img" width={'550px'} height={'550px'} />
        </AuctionContentImg>
        <AuctionContents>
          {/* 상품 이름 */}
          <TitleBox />
          <AuctionDivider />

          {/* 경매 시간 */}
          <TimeBox product={product} />
          <AuctionDivider />

          {/* 경매가 */}
          <BidBox product={product} />
          <AuctionDivider />

          {/* 나의 경매 금액 */}
          <MyBidBox product={product} />
          <AuctionDivider />

          {/* 입찰하기 */}
          <AuctionBidButton product={product} />
          <AuctionDivider />
        </AuctionContents>
      </AuctionContentsContainer>

      {/* 고민 중 */}
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
