import React from 'react';
import PropTypes from 'prop-types';
import { AuctionBox, AuctionGray, EthereumImg } from '../style';

const BidBox = ({ gapTime, highestBidder, auctionMinimumBid, highestBid }) => {
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
          <AuctionGray>
            현재 최소 낙찰 가능 금액 - {auctionMinimumBid} ETH
          </AuctionGray>
          {highestBidder && (
            <AuctionGray>현재 최고 낙찰자 - {highestBidder}</AuctionGray>
          )}
        </>
      )}
    </>
  );
};

BidBox.propTypes = {
  gapTime: PropTypes.bool.isRequired,
};

export default BidBox;
