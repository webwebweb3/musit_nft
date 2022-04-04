import React from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import { timeFunction } from '../../../../util/timefunc';
import AuctionButton from '../auctionMui/AuctionButton';
import { createAuctionAction } from '../../../../_request/auction_request';

const UploadButton = ({ endAt, startingBid, tokenID }) => {
  const { userData } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const account = userData.metamask;

  const onClickAuction = useCallback(() => {
    if (startingBid === '') {
      alert('금액을 다시 확인해주세요!');
      return;
    }

    let date = timeFunction();
    if (date >= endAt) {
      alert('시간을 다시 확인해주세요!');
      return;
    }
    let endTimestamp = Math.round(new Date(endAt).getTime() / 1000);

    let auctionData = {
      startingBid: startingBid * 1000000000000000000,
      endTimestamp,
      tokenID,
      account,
    };

    dispatch(createAuctionAction(auctionData));
  }, [dispatch, startingBid, endAt, tokenID, account]);

  return (
    <>
      <AuctionButton text={'경매 등록'} func={onClickAuction} />
    </>
  );
};

UploadButton.propTypes = {
  endAt: propTypes.string.isRequired,
  startingBid: propTypes.string.isRequired,
  tokenID: propTypes.string.isRequired,
};

export default UploadButton;
