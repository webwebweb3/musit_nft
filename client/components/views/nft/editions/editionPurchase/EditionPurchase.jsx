import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  marketPlaceCancelAction,
  marketPlacePurchaseAction,
} from '$reduxsaga/request/marketPlace_request';
import { web3 } from '$contracts';

const PurchaseButton = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#274eff',
  '&:hover': {
    backgroundColor: '#1b36b2',
  },
}));

const CancelButton = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#f00946',
  '&:hover': {
    backgroundColor: '#a3062f',
  },
}));

const EditionPurchase = ({ tokenId, musicPrice }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);
  const tokenOwner = useSelector(state => state.market);
  const account = userData?.metamask;

  const onClickPurchase = async () => {
    dispatch(marketPlacePurchaseAction({ tokenId, account, musicPrice }));
  };
  const onClickCancel = async () => {
    dispatch(marketPlaceCancelAction({ tokenId, account }));
  };

  return (
    <Box sx={{ display: 'inline-block', marginLeft: '20px' }}>
      {tokenOwner.userData !== userData?.name ? (
        <PurchaseButton onClick={onClickPurchase} sx={{ fontSize: '18px' }}>
          Purchase
        </PurchaseButton>
      ) : (
        <CancelButton onClick={onClickCancel} sx={{ fontSize: '18px' }}>
          Cancel the Sale
        </CancelButton>
      )}
    </Box>
  );
};

export default EditionPurchase;
