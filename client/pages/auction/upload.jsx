import React, { useEffect } from 'react';
import { END } from 'redux-saga';
import axios from 'axios';
import { Button, Grid, TextField } from '@mui/material';

import wrapper from '../../_store/configureStore';
import NFTLayout from '../../components/nftLayout/NFTLayout';
import { myInfoRequestAction } from '../../_actions/user_actions';
import { auctionAbi, auctionCreatorContract, web3 } from '../../contracts';
import { useInput } from '../../hooks/useInput';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

const AuctionHome = () => {
  const { userData } = useSelector(state => state.user);
  const account = userData.metamask;

  const [startingBid, onChangeStartingBid] = useInput('');
  const [endAt, onChangeEndAt] = useInput('');
  const [tokenID, onChangeTokenID] = useInput('');

  const createAuctionFunction = useCallback(async () => {
    await auctionCreatorContract.methods
      .createAuction(startingBid, endAt, tokenID)
      .send({ from: account });
  }, [startingBid, endAt, tokenID, account]);

  const onClickAuction = useCallback(() => {
    console.log(auctionCreatorContract.methods);
    createAuctionFunction();
  }, [createAuctionFunction]);

  useEffect(() => {
    console.log(auctionCreatorContract.methods);

    const te = async () => {
      // auctionCreatorContract.methods.createAuction(bidcrement, start, end, ipgs)
      const test = await auctionCreatorContract.methods.allAuctions().call();
      console.log(test);
      let auctionAddress = test[0];
      let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
      console.log(auctionContract);
    };

    te();
  }, []);

  return (
    <NFTLayout>
      <Grid container spacing={2}>
        <Grid item xs={6} md={12} sx={{ color: '#fff' }}>
          <TextField
            label="startingBid"
            variant="outlined"
            value={startingBid}
            onChange={onChangeStartingBid}
            fullWidth
            sx={{
              bgcolor: 'gray',
              margin: '1px',
              width: '320px',
            }}
          />
          <TextField
            label="endAt"
            variant="outlined"
            value={endAt}
            onChange={onChangeEndAt}
            fullWidth
            sx={{
              bgcolor: 'gray',
              margin: '1px',
              width: '320px',
            }}
          />
          {/* 임시 tokenID */}
          <TextField
            label="tokenID"
            variant="outlined"
            value={tokenID}
            onChange={onChangeTokenID}
            fullWidth
            sx={{
              bgcolor: 'gray',
              margin: '1px',
              width: '320px',
            }}
          />
          <Button
            variant="contained"
            sx={{ bgcolor: 'gray' }}
            onClick={onClickAuction}
          >
            경매 등록하기
          </Button>
        </Grid>
      </Grid>
    </NFTLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({ req }) => {
      const cookie = req ? req.headers.cookie : '';
      axios.defaults.headers.Cookie = '';
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
      }
      store.dispatch(myInfoRequestAction());

      store.dispatch(END);
      await store.sagaTask.toPromise();
    },
);

export default AuctionHome;
