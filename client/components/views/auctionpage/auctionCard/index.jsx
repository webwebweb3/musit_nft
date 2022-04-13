import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const AuctionCard = () => {
  const { allAuctionData } = useSelector(state => state.auction);

  return (
    <>
      {allAuctionData &&
        allAuctionData.map(auction => (
          <div key={auction}>
            <Link href="/nft/auction/[product]" as={`/nft/auction/${auction}`}>
              {auction}
            </Link>
          </div>
        ))}
    </>
  );
};

export default AuctionCard;
