import React from 'react';
import AuctionButton from '../auctionMui/AuctionButton';
import LeftSideBar from './leftSideBar/LeftSideBar';
import AuctionCard from '../auctionCard';
import {
  AuctionAllContainer,
  AuctionContainer,
  AuctionHeader,
  AuctionLeftSideBar,
  AuctionWrapper,
} from '../style';
import { useSelector } from 'react-redux';

const AuctionMainPage = () => {
  const { userData } = useSelector(state => state.user);

  return (
    <AuctionAllContainer>
      {/* Header */}
      <AuctionHeader>
        <h1 style={{ margin: '0 0 0 40px' }}>AUCTION</h1>
        {userData.role === 1 && (
          <div style={{ marginLeft: '1000px' }}>
            <AuctionButton text={'새 경매 등록하기'} link={'upload'} />
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
