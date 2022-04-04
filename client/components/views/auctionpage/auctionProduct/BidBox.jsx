import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AuctionBox, AuctionGray, EthereumImg } from '../style';

const BidBox = ({ gapTime }) => {
  const { auctionData } = useSelector(state => state.auction);
  const [highestBid, setHighestBid] = useState('');
  const [highestBidder, setHighestBidder] = useState('');

  useEffect(() => {
    if (auctionData) {
      setHighestBid(auctionData.highestBindingBid);
      if (
        auctionData.highestBidder !==
        '0x0000000000000000000000000000000000000000'
      ) {
        setHighestBidder(auctionData.highestBidder);
      }
    }
  }, [auctionData]);

  return (
    <>
      {gapTime ? (
        <>
          <AuctionGray>최종 낙찰가</AuctionGray>
          <AuctionBox>
            <EthereumImg src="/ethereum-1.svg" alt="ethereum" />
            {highestBid}
          </AuctionBox>
          {highestBidder && <AuctionGray>낙찰자 - {highestBidder}</AuctionGray>}
        </>
      ) : (
        <>
          <AuctionGray>현재 경매가</AuctionGray>
          <AuctionBox>
            <EthereumImg src="/ethereum-1.svg" alt="ethereum" />
            {highestBid}
          </AuctionBox>
          {highestBidder && (
            <AuctionGray>현재 최고 낙찰자 - {highestBidder}</AuctionGray>
          )}
        </>
      )}
    </>
  );
};

export default BidBox;
