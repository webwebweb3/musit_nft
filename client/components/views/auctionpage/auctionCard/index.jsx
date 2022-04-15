import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import AuctionContents from './AuctionContents';

const AuctionCard = () => {
  const { allAuctionData } = useSelector(state => state.auction);

  return (
    <>
      {allAuctionData &&
        allAuctionData.map(auction => (
          <div key={auction}>
            <Link href="/nft/auction/[product]" as={`/nft/auction/${auction}`}>
              <a>
                <AuctionContents auction={auction} />
              </a>
            </Link>
          </div>
        ))}
    </>
  );
};

export default AuctionCard;
