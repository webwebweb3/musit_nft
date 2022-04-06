import { Box, Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  marketPlaceCancelAction,
  marketPlacePurchaseAction,
} from '../../../../../_request/marketPlace_request';

const EditionPurchase = ({ tokenId, musicPrice }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);
  const tokenOwner = useSelector(state => state.market);
  const account = userData.metamask;

  const onClickPurchase = async () => {
    dispatch(marketPlacePurchaseAction({ tokenId, account, musicPrice }));
  };
  const onClickCancel = async () => {
    dispatch(marketPlaceCancelAction({ tokenId, account }));
  };
  return (
    <Box>
      {tokenOwner.userData !== userData.name ? (
        <Button onClick={onClickPurchase}>EditionPurchase</Button>
      ) : (
        <Button onClick={onClickCancel}>Cancel the Sale</Button>
      )}
    </Box>
  );
};

export default EditionPurchase;
