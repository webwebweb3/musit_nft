import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auctionMyBidAction } from '../../../../_request/auction_request';

const MyBidBox = ({ product }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);
  const { myBidData } = useSelector(state => state.auction);

  useEffect(() => {
    let data = {
      product,
      metamask: userData.metamask,
    };
    dispatch(auctionMyBidAction(data));
  }, [dispatch, product, userData]);

  return (
    <div>
      <div>나의 총 입찰가 - {myBidData} ETH</div>
    </div>
  );
};

export default MyBidBox;
