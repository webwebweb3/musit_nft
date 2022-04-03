import React from 'react';
import { Grid, TextField } from '@mui/material';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useInput } from '../../../../hooks/useInput';
import { createAuctionAction } from '../../../../_request/auction_request';
import AuctionButton from '../auctionMui/AuctionButton';
import AuctionTextField from '../auctionMui/AuctionTextField';

const AuctionUploadPage = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);
  const account = userData.metamask;

  const [startingBid, onChangeStartingBid] = useInput('');
  const [endAt, onChangeEndAt] = useInput('');
  const [tokenID, onChangeTokenID] = useInput('');

  const onClickAuction = useCallback(() => {
    let data = {
      startingBid,
      endAt,
      tokenID,
      account,
    };
    dispatch(createAuctionAction(data));
  }, [dispatch, startingBid, endAt, tokenID, account]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={12} sx={{ color: '#fff' }}>
        <AuctionTextField
          text={'시작 금액'}
          value={startingBid}
          func={onChangeStartingBid}
        />
        <AuctionTextField
          text={'종료 시간'}
          value={endAt}
          func={onChangeEndAt}
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

        <AuctionButton text={'경매 등록하기'} func={onClickAuction} />
      </Grid>
    </Grid>
  );
};

export default AuctionUploadPage;
