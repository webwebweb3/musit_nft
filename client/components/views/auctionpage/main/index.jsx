import React from 'react';
import AuctionCard from '../auctionCard';
import MarketLayout from '$components/layout/Market/index.jsx';

const AuctionMainPage = () => {
  return (
    <MarketLayout value={'Auction'}>
      <AuctionCard />
    </MarketLayout>
  );
};

export default AuctionMainPage;
