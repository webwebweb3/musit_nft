import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  AuctionBox,
  AuctionGray,
  AuctionStyledButton,
  EthereumImg,
} from '../style';

const BidBox = () => {
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

  const onClickAuction = useCallback(() => {
    console.log(1111);
  }, []);

  return (
    <>
      <AuctionGray>현재 경매가</AuctionGray>
      <AuctionBox>
        <EthereumImg src="/ethereum-1.svg" alt="ethereum" />
        {highestBid}
      </AuctionBox>
      {highestBidder && (
        <AuctionGray>현재 최고 낙찰자 - {highestBidder}</AuctionGray>
      )}
      <AuctionStyledButton onClick={onClickAuction}>
        입찰하기
      </AuctionStyledButton>
    </>
  );
};

export default BidBox;
