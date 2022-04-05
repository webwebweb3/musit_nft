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
  StyledNewAuctionButton,
} from '../style';

const AuctionMainPage = () => {
  const { userData } = useSelector(state => state.user);

  return (
    <AuctionAllContainer>
      {/* Header */}
      <AuctionHeader>
        <h1 style={{ margin: '0 0 0 40px' }}>AUCTION</h1>
        {userData.role === 1 && (
          <div style={{ marginLeft: '1000px' }}>
            <Link href={`/auction/upload`}>
              <StyledNewAuctionButton variant="contained">
                새 경매 등록하기
              </StyledNewAuctionButton>
            </Link>
          </div>
        )}
      </AuctionHeader>

      {/* Body */}
      <AuctionContainer>
        {/* Menu */}
        <AuctionLeftSideBar>
          <LeftSideBar />
        </AuctionLeftSideBar>

        {/* Contents */}
        <AuctionWrapper>
          <AuctionCard />
        </AuctionWrapper>
      </AuctionContainer>
    </AuctionAllContainer>
  );
};

export default AuctionMainPage;
