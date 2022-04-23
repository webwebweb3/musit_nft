import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import {
  auctionFinalizeAction,
  auctionMyBidAction,
} from '$reduxsaga/request/auction_request';
import { AuctionDivider, AuctionStyledButton } from '../style';

const MyBidBox = ({ gapTime }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  let { product } = router.query;

  const { userData } = useSelector(state => state.user);
  const { myBidData } = useSelector(state => state.auction);

  useEffect(() => {
    let data = {
      product,
      metamask: userData?.metamask,
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

MyBidBox.prototype = {
  gapTime: PropTypes.bool.isRequired,
};

export default MyBidBox;
