import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import LeftSideBar from './leftSideBar/LeftSideBar';
import AuctionCard from '../auctionCard';
import {
  AuctionAllContainer,
  AuctionContainer,
  AuctionHeader,
  AuctionLeftSideBar,
  AuctionWrapper,
  AuctionMainContainer,
  StyledNewAuctionButton,
  AuctionMainContentsContainer,
} from '../style';

const AuctionMainPage = () => {
  const { userData } = useSelector(state => state.user);

  return (
    <AuctionAllContainer>
      <AuctionMainContainer>
        {/* Header */}
        <AuctionHeader>
          <h1 style={{ margin: '0 0 0 40px' }}>AUCTION</h1>
          {userData.role === 1 && (
            <Link href={`/auction/upload`}>
              <StyledNewAuctionButton variant="contained">
                새 경매 등록하기
              </StyledNewAuctionButton>
            </Link>
          )}
        </AuctionHeader>

        {/* Body */}
        <AuctionMainContentsContainer>
          {/* Menu */}
          <AuctionLeftSideBar>
            <LeftSideBar />
          </AuctionLeftSideBar>

          {/* Contents */}
          <AuctionWrapper>
            <AuctionCard />
          </AuctionWrapper>
        </AuctionMainContentsContainer>
      </AuctionMainContainer>
    </AuctionAllContainer>
  );
};

export default AuctionMainPage;
