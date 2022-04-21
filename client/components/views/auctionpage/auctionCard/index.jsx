import PageList from '$components/layout/page';
import React from 'react';
import { useSelector } from 'react-redux';

const AuctionCard = () => {
  const { allAuctionData } = useSelector(state => state.auction);

  return (
    <>
      <PageList items={allAuctionData} type="auction" />
    </>
  );
};

export default AuctionCard;
