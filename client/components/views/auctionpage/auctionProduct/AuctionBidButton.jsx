import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Box, CircularProgress } from '@mui/material';

import { AuctionStyledButton } from '../style';
import { useInput } from '$hooks/useInput';
import AuctionTextField from '../auctionMui/AuctionTextField';
import { auctionBidAction } from '$reduxsaga/request/auction_request';

const AuctionBidButton = ({ auctionMinimumBid }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  let { product } = router.query;

  const { userData } = useSelector(state => state.user);
  const { bidAuctionLoading, myBidData } = useSelector(state => state.auction);
  const [bid, onChangeBid] = useInput('');
  const [myBid, setMyBid] = useState();

  useEffect(() => {
    let bidInput = parseFloat(
      (parseFloat(myBidData) + parseFloat(bid)).toFixed(10),
    );
    setMyBid(bidInput);
    console.log();
  }, [bid]);

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
      {bidAuctionLoading ? (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress style={{ margin: '30px auto' }} color="inherit" />
        </div>
      ) : (
        <>
          <AuctionTextField value={bid} onChange={onChangeBid} uint={'ETH'} />

          {!isNaN(myBid) && (
            <>
              <Box
                style={{
                  display: 'inline',
                  color: '#dada',
                  marginRight: '10px',
                }}
              >
                입찰 예정가 : {myBid} ETH
              </Box>
              {myBid < auctionMinimumBid && (
                <Box style={{ display: 'inline', color: '#ffd5009f' }}>
                  - 낙찰 가능 금액보다 낮습니다.
                </Box>
              )}
            </>
          )}
          <AuctionStyledButton onClick={onClickAuction}>
            {myBidData === 0 ? <>입찰하기</> : <>추가 입찰하기</>}
          </AuctionStyledButton>
        </>
      )}
    </>
  );
};

export default AuctionBidButton;
