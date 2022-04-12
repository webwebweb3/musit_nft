import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, CircularProgress } from '@mui/material';

import { useInput } from '../../../../hooks/useInput';
import AuctionTextField from '../auctionMui/AuctionTextField';
import AuctionAppointment from '../auctionMui/AuctionAppointment';
import { timeFunction } from '../../../../util/timefunc';
import UploadButton from './UploadButton';
import AuctionButton from '../auctionMui/AuctionButton';
import MyNFT from 'components/views/mypage/mynft/MyNFT';

const AuctionUploadPage = () => {
  const auction = useSelector(state => state.auction);
  const [loading, setLoading] = useState(false);
  const [startingBid, onChangeStartingBid] = useInput('');
  const [endAt, onChangeEndAt, setEndAt] = useInput('');
  const [tokenID, onChangeTokenID] = useInput('tokenID 임시');

  useEffect(() => {
    let date = timeFunction();

    // 형식: 2022-02-02T02:02:02
    setEndAt(date);
  }, [setEndAt]);

  useEffect(() => {
    setLoading(auction.createAuctionLoading);
  }, [auction]);

  return (
    <Box style={{ color: '#dada', marginTop: '130px', textAlign: 'center' }}>
      <h1>경매 등록 하기</h1>

      <AuctionTextField
        text="시작 금액"
        value={startingBid}
        func={onChangeStartingBid}
        uint="ETH"
      />

      <AuctionAppointment text="종료 시간" value={endAt} func={onChangeEndAt} />
      <MyNFT />
      {/* 임시 tokenID */}
      <AuctionTextField value={tokenID} func={onChangeTokenID} text="tokenID" />

      {loading ? (
        <>
          <CircularProgress color="inherit" />
        </>
      ) : (
        <UploadButton
          endAt={endAt}
          startingBid={startingBid}
          tokenID={tokenID}
        />
      )}
      <AuctionButton text="경매 메인으로 가기" link={'auction'} />
    </Box>
  );
};

export default AuctionUploadPage;
