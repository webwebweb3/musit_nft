import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';

import { AuctionStyledButton } from '../style';
import { useInput } from '$hooks/useInput';
import AuctionTextField from '../auctionMui/AuctionTextField';
import { auctionBidAction } from '$reduxsaga/request/auction_request';
import { web3, auctionAbi } from '$contracts';
// import { withToast } from '$util/toast';

const AuctionBidButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  let { product } = router.query;

  const { userData } = useSelector(state => state.user);
  const { bidAuctionLoading, myBidData } = useSelector(state => state.auction);
  const [loading, setLoading] = useState(false);
  const [bid, onChangeBid] = useInput('');

  useEffect(() => {
    setLoading(bidAuctionLoading);
  }, [bidAuctionLoading]);

  // const test = async data => {
  //   let auctionContract = await new web3.eth.Contract(auctionAbi, data.product);

  //   let txData = await auctionContract.methods.placeBid().send({
  //     from: data.metamask,
  //     value: web3.utils.toWei(`${data.bid}`, 'ether'),
  //   });

  //   return txData;
  // };

  const onClickAuction = useCallback(async () => {
    let data = {
      product,
      metamask: userData.metamask,
      bid,
    };

    // withToast(test(data));
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
          <AuctionTextField value={bid} onChange={onChangeBid} uint={'ETH'} />
          <AuctionStyledButton onClick={onClickAuction}>
            {myBidData === 0 ? <>입찰하기</> : <>추가 입찰하기</>}
          </AuctionStyledButton>
        </>
      )}
    </>
  );
};

export default AuctionBidButton;
