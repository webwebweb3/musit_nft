import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { auctionCancelAction } from '$reduxsaga/request/auction_request';
import { StyledCancelButton } from '../style';

const CancelButton = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);
  const router = useRouter();
  let { product } = router.query;

  const onClickCancelAuction = useCallback(() => {
    let data = {
      metamask: userData.metamask,
      product,
    };

    dispatch(auctionCancelAction(data));
  }, [dispatch, userData, product]);

  return (
    <StyledCancelButton onClick={onClickCancelAuction}>
      경매취소
    </StyledCancelButton>
  );
};

export default CancelButton;
