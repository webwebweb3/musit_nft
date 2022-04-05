import { Box, Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { marketPlacePurchaseAction } from '../../../../../_request/marketPlace_request';

const EditionPurchase = ({ tokenId, musicPrice }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);
  const account = userData.metamask;

  const onClickPurchase = async () => {
    dispatch(marketPlacePurchaseAction({ tokenId, account, musicPrice }));
  };
  return (
    <Box>
      <Button onClick={onClickPurchase}>EditionPurchase</Button>
    </Box>
  );
};

export default EditionPurchase;
