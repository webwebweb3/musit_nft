import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import LeftSideBar from './leftSideBar/LeftSideBar';

import {
  AuctionLeftSideBar,
  AuctionWrapper,
  AuctionMainContentsContainer,
} from '$components/views/auctionpage/style';
import { Box, Button } from '@mui/material';

const MarketLayout = ({ children, value }) => {
  const { userData } = useSelector(state => state.user);

  return (
    <Box className="auctionAllContainer">
      <Box className="auctionMainContainer">
        {/* Header */}
        <Box className="auctionHeader">
          <h1>{value}</h1>
          {userData && userData.role === 1 && (
            <>
              {value === 'Auction' ? (
                <Link href={`/nft/auction/upload`}>
                  <Button
                    className="styledNewAuctionButton"
                    variant="contained"
                  >
                    새 경매 등록하기
                  </Button>
                </Link>
              ) : (
                <Link href={`/mypage/mynft`}>
                  <Button
                    className="styledNewAuctionButton"
                    variant="contained"
                  >
                    새 판매 등록하기
                  </Button>
                </Link>
              )}
            </>
          )}
        </Box>

        {/* Body */}
        <AuctionMainContentsContainer>
          {/* Menu */}
          <AuctionLeftSideBar>
            <LeftSideBar />
          </AuctionLeftSideBar>

          {/* Contents */}
          <AuctionWrapper>{children}</AuctionWrapper>
        </AuctionMainContentsContainer>
      </Box>
    </Box>
  );
};

export default MarketLayout;
