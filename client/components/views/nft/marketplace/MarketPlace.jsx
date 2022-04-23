import React from 'react';
import MarketPlaceContents from './contents/MarketPlaceContents';
import MarketLayout from '$components/layout/Market';

const MarketPlace = () => {
  return (
    <MarketLayout value={'Marketplace'}>
      <MarketPlaceContents />
    </MarketLayout>
  );
};

export default MarketPlace;
