import { auctionAbi, web3 } from '$contracts';
import { Box, Grid } from '@mui/material';
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
    let time = await auctionContract.methods.endAt().call();
    let highestBindingBidWei = await auctionContract.methods
      .highestBindingBid()
      .call();
    let highestBidder = await auctionContract.methods.highestBidder().call();
    let owner = await auctionContract.methods.owner().call();
    let auctionState = await auctionContract.methods.auctionState().call();
    let tokenID = await auctionContract.methods.tokenID().call();
    let highestBindingBid = highestBindingBidWei / 1000000000000000000;

    let infoData = {
      time,
      highestBindingBid,
      highestBidder,
      owner,
      auctionState,
      tokenID,
    };

    setAuctionData(infoData);
  }, [auction]);

  useEffect(() => {
    contents();
  }, []);

  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 3, sm: 8, md: 12 }}
        style={{ width: '1050px' }}
      >
        <Grid item xs={2} sm={4} md={4}>
          {auctionData && (
            <AuctionCard
              highestBindingBid={auctionData.highestBindingBid}
              auctionState={auctionData.auctionState}
              tokenID={auctionData.tokenID}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuctionContents;
