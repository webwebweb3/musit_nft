import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import LeftSideBar from './leftSideBar/LeftSideBar';

import {
  AuctionAllContainer,
  AuctionHeader,
  AuctionLeftSideBar,
  AuctionWrapper,
  AuctionMainContainer,
  StyledNewAuctionButton,
  AuctionMainContentsContainer,
} from '$components/views/auctionpage/style';

const MarketLayout = ({ children, value }) => {
  const { userData } = useSelector(state => state.user);

  return (
    <AuctionAllContainer>
      <AuctionMainContainer>
        {/* Header */}
        <AuctionHeader>
          <h1>{value}</h1>
          {userData && userData.role === 1 && (
            <>
              {value === 'Auction' ? (
                <Link href={`/nft/auction/upload`}>
                  <StyledNewAuctionButton variant="contained">
                    새 경매 등록하기
                  </StyledNewAuctionButton>
                </Link>
              ) : (
                <Link href={`/`}>
                  <StyledNewAuctionButton variant="contained">
                    새 판매 등록하기
                  </StyledNewAuctionButton>
                </Link>
              )}
            </>
          )}
        </AuctionHeader>

        {/* Body */}
        <AuctionMainContentsContainer>
          {/* Menu */}
          <AuctionLeftSideBar>
            <LeftSideBar />
          </AuctionLeftSideBar>

          {/* Contents */}
          <AuctionWrapper>{children}</AuctionWrapper>
        </AuctionMainContentsContainer>
      </AuctionMainContainer>
    </AuctionAllContainer>
  );
};

export default MarketLayout;
