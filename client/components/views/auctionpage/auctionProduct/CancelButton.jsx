import { Button } from '@mui/material';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auctionCancelAction } from '../../../../_request/auction_request';

const CancelButton = ({ product }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);

  const onClickCancelAuction = useCallback(() => {
    let data = {
      metamask: userData.metamask,
      product,
    };

    dispatch(auctionCancelAction(data));
  }, [dispatch, userData, product]);

  return (
    <Button
      sx={{ color: '#dada', marginLeft: '220px' }}
      onClick={onClickCancelAuction}
    >
      경매취소
    </Button>
  );
};

export default CancelButton;
