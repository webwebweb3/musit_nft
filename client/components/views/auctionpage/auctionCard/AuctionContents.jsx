import { auctionAbi, web3 } from '$contracts';
import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import AuctionCard from './AuctionCard';

const AuctionContents = ({ auction }) => {
  const [auctionData, setAuctionData] = useState({
    time: null,
    highestBindingBid: null,
    highestBidder: null,
    owner: null,
    auctionState: null,
    tokenID: null,
  });

  const contents = useCallback(async () => {
    let auctionContract = await new web3.eth.Contract(auctionAbi, auction);
    let highestBindingBidWei = await auctionContract.methods
      .highestBindingBid()
      .call();
    let auctionState = await auctionContract.methods.auctionState().call();
    let tokenID = await auctionContract.methods.tokenID().call();
    let highestBindingBid = highestBindingBidWei / 1000000000000000000;

    let infoData = {
      highestBindingBid,
      auctionState,
      tokenID,
    };

    setAuctionData(infoData);
  }, [auction]);

  useEffect(() => {
    contents();
  }, []);

  return (
    <Box sx={{ margin: '0 10px' }}>
      {auctionData && (
        <AuctionCard
          highestBindingBid={auctionData.highestBindingBid}
          tokenID={auctionData.tokenID}
        />
      )}
    </Box>
  );
};

export default AuctionContents;
