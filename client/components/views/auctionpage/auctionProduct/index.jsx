import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { auctionAction } from '$reduxsaga/request/auction_request';
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
  const { userData } = useSelector(state => state.user);
  const router = useRouter();
  let { product } = router.query;
  const [gapTime, setGapTime] = useState(false);
  const [owner, setOwner] = useState('');

  useEffect(() => {
    dispatch(auctionAction(product));
  }, [dispatch, product]);

  return (
    <AuctionAllContainer>
      <AuctionContentsContainer>
        {/* 상품 이미지 */}
        <AuctionContentImg>
          <img src="/bgimg.jpg" alt="img" width={'550px'} height={'550px'} />
        </AuctionContentImg>
        <AuctionContents>
          {/* 상품 이름 */}
          <TitleBox />
          <AuctionDivider />

          {/* 경매 시간 */}
          <TimeBox
            product={product}
            gapTime={gapTime}
            gapTimeFunc={setGapTime}
            owner={owner}
            ownerFunc={setOwner}
          />
          <AuctionDivider />

          {/* 경매가 */}
          <BidBox gapTime={gapTime} />
          <AuctionDivider />

          {/* 나의 경매 금액 */}
          <MyBidBox product={product} gapTime={gapTime} />
          {!gapTime && owner.toLowerCase() !== userData.metamask.toLowerCase() && (
            <>
              {/* 입찰하기 */}
              <AuctionBidButton product={product} />
            </>
          )}
        </AuctionContents>
      </AuctionContentsContainer>
    </AuctionAllContainer>
  );
};

export default AuctionProductPage;
