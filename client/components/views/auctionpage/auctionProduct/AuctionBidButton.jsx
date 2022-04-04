import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuctionStyledButton } from '../style';
import { useInput } from '../../../../hooks/useInput';
import AuctionTextField from '../auctionMui/AuctionTextField';
import { auctionBidAction } from '../../../../_request/auction_request';
import { CircularProgress } from '@mui/material';

const AuctionBidButton = ({ product }) => {
  const dispatch = useDispatch();

  const { userData } = useSelector(state => state.user);
  const { bidAuctionLoading } = useSelector(state => state.auction);
  const [loading, setLoading] = useState(false);
  const [bid, onChangeBid] = useInput('');

  useEffect(() => {
    setLoading(bidAuctionLoading);
  }, [bidAuctionLoading]);

  const onClickAuction = useCallback(async () => {
    let data = {
      product,
      metamask: userData.metamask,
      bid,
    };

    dispatch(auctionBidAction(data));
  }, [dispatch, product, userData, bid]);

  return (
    <>
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress style={{ margin: '30px auto' }} color="inherit" />
        </div>
      ) : (
        <>
          <AuctionTextField value={bid} func={onChangeBid} uint={'ETH'} />
          <AuctionStyledButton onClick={onClickAuction}>
            추가 입찰하기
          </AuctionStyledButton>
        </>
      )}
    </>
  );
};

export default AuctionBidButton;
