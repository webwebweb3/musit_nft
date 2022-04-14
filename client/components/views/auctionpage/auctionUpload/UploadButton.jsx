import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { timeFunction } from '$util/timefunc';
import AuctionButton from '../auctionMui/AuctionButton';
import { createAuctionAction } from '$reduxsaga/request/auction_request';
import { web3 } from '$contracts';

const UploadButton = ({ endAt, startingBid, minimumBid, tokenID }) => {
  const { userData } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const account = userData.metamask;

  const onClickAuction = useCallback(() => {
    if (startingBid === '') {
      alert('금액을 다시 확인해주세요!');
      return;
    }
    if (minimumBid === '') {
      alert('최저 입찰가를 다시 확인해주세요!');
      return;
    }
    let date = timeFunction();
    if (date >= endAt) {
      alert('시간을 다시 확인해주세요!');
      return;
    }
    let endTimestamp = Math.round(new Date(endAt).getTime() / 1000);

    let auctionData = {
      startingBid: web3.utils.toWei(startingBid, 'ether'),
      endTimestamp,
      tokenID: parseInt(tokenID),
      minimumBid: web3.utils.toWei(minimumBid, 'ether'),
      account,
    };

    console.log(auctionData);
    dispatch(createAuctionAction(auctionData));
  }, [dispatch, startingBid, endAt, tokenID, minimumBid, account]);

  return (
    <>
      <AuctionButton text="경매 등록" func={onClickAuction} />
    </>
  );
};

UploadButton.propTypes = {
  endAt: PropTypes.string.isRequired,
  startingBid: PropTypes.string.isRequired,
  tokenID: PropTypes.string.isRequired,
};

export default UploadButton;
