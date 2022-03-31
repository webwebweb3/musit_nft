import React, { useEffect } from 'react';
import { END } from 'redux-saga';
import axios from 'axios';
import { Grid, TextField } from '@mui/material';

import wrapper from '../../_store/configureStore';
import NFTLayout from '../../components/nftLayout/NFTLayout';
import { myInfoRequestAction } from '../../_actions/user_actions';
import { auctionAbi, auctionCreatorContract, web3 } from '../../contracts';
import { useInput } from '../../hooks/useInput';

const AuctionHome = () => {
  const [bidIncrement, onChangeBidIncrement] = useInput('');
  const [startBlock, onChangeStartBlock] = useInput('');
  const [endBlock, onChangeEndBlock] = useInput('');

  useEffect(() => {
    const te = async () => {
      // auctionCreatorContract.methods.createAuction(bidcrement, start, end, ipgs)
      const test = await auctionCreatorContract.methods.allAuctions().call();
      console.log(test[0]);
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
            label="bidIncrement"
            variant="outlined"
            value={bidIncrement}
            onChange={onChangeBidIncrement}
            fullWidth
            sx={{
              bgcolor: 'gray',
              margin: '1px',
              width: '320px',
            }}
          />
          <TextField
            label="startBlock"
            variant="outlined"
            value={startBlock}
            onChange={onChangeStartBlock}
            fullWidth
            sx={{
              bgcolor: 'gray',
              margin: '1px',
              width: '320px',
            }}
          />
          <TextField
            label="endBlock"
            variant="outlined"
            value={endBlock}
            onChange={onChangeEndBlock}
            fullWidth
            sx={{
              bgcolor: 'gray',
              margin: '1px',
              width: '320px',
            }}
          />
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
