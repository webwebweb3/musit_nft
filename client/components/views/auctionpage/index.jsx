import React from 'react';
import { Button, Grid } from '@mui/material';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const AuctionMainPage = () => {
  const { allAuctionData } = useSelector(state => state.auction);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={6} sx={{ color: '#fff' }}>
        <Link href="/auction/upload">
          <Button variant="contained" sx={{ bgcolor: 'gray' }}>
            새 경매 등록하기
          </Button>
        </Link>
      </Grid>
      <Grid item xs={6} md={6} sx={{ color: '#fff' }}>
        {allAuctionData &&
          allAuctionData.map(auction => (
            <div key={auction}>
              <Link href={`/auction/${auction}`}>{auction}</Link>
            </div>
          ))}
      </Grid>
    </Grid>
  );
};

export default AuctionMainPage;
