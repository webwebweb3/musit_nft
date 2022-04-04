import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  auctionFinalizeAction,
  auctionMyBidAction,
} from '../../../../_request/auction_request';
import { AuctionDivider, AuctionStyledButton } from '../style';

const MyBidBox = ({ product, gapTime }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);
  const { myBidData } = useSelector(state => state.auction);

  useEffect(() => {
    let data = {
      product,
      metamask: userData.metamask,
    };
    dispatch(auctionMyBidAction(data));
  }, [dispatch, product, userData]);

  const onClickAuction = useCallback(async () => {
    let data = {
      product,
      metamask: userData.metamask,
    };

    dispatch(auctionFinalizeAction(data));
  }, [dispatch, product, userData]);

  return (
    <>
      {myBidData !== 0 && (
        <>
          <>나의 총 입찰가 - {myBidData} ETH</>
          <AuctionDivider />
        </>
      )}
      {gapTime && (
        <>
          <AuctionStyledButton onClick={onClickAuction}>
            반환받기
          </AuctionStyledButton>
        </>
      )}
    </>
  );
};

export default MyBidBox;
