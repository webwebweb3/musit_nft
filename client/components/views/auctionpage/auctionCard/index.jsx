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
            <Link href="/auction/[product]" as={`/auction/${auction}`}>
              {auction}
            </Link>
          </div>
        ))}
    </>
  );
};

export default AuctionCard;
