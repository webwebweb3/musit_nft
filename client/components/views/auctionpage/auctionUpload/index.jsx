import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { Box, Checkbox, CircularProgress } from '@mui/material';

import { useInput } from '$hooks/useInput';
import {
  AuctionTextField,
  AuctionAppointment,
  AuctionButton,
} from '../auctionMui';
import { timeFunction } from '$util/timefunc';
import UploadButton from './UploadButton';
import { useWalletInfo } from '$hooks/web3';
import { mintMusicTokenContract } from '$contracts';

const AuctionUploadPage = () => {
  const auction = useSelector(state => state.auction);
  const [loading, setLoading] = useState(false);
  const [startingBid, onChangeStartingBid] = useInput('');
  const [endAt, onChangeEndAt, setEndAt] = useInput('');
  const [tokenID, setTokenID] = useState();
  const [myNFT, setMyNFT] = useState();
  const [checked, setChecked] = useState(false);

  const { network, account } = useWalletInfo();

  useEffect(() => {
    let date = timeFunction();

    // 형식: 2022-02-02T02:02:02
    setEndAt(date);
  }, [setEndAt]);

  useEffect(() => {
    setLoading(auction.createAuctionLoading);
  }, [auction]);

  const getMyMusicTokens = useCallback(async () => {
    try {
      const balanceLength = await mintMusicTokenContract.methods
        .balanceOf(account.data)
        .call();

      if (balanceLength === '0') return;

      const tempMusicCardArray = [];

      const response = await mintMusicTokenContract.methods
        .getMusicTokens(account.data)
        .call();

      for (let i = 0; i < response.length; i++) {
        const ipfsData = await fetch(
          `https://ipfs.infura.io/ipfs/${response[i].musicTokenURI}`,
        );
        const data = await ipfsData.json();
        tempMusicCardArray.push({
          musicTokenId: response[i].musicTokenId,
          musicTokenData: data,
          musicTokenPrice: response[i].musicTokenPrice,
        });
      }
      setMyNFT(tempMusicCardArray);
    } catch (error) {
      console.error(error);
    }
  }, [account]);

  const onClickHandler = useCallback(
    data => {
      setTokenID(data);
      setChecked(prev => !prev);
    },
    [tokenID],
  );

  useEffect(() => {
    if (!myNFT) {
      getMyMusicTokens();
    }
  }, [network.isSupported]);

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

      {myNFT ? (
        <>
          {myNFT.map((v, i) => {
            return (
              <div
                key={v.musicTokenId}
                style={{
                  display: `${v.musicTokenPrice === 0 ? 'none' : 'block'}`,
                }}
              >
                <Checkbox
                  checked={checked}
                  onChange={() => onClickHandler(v.musicTokenId)}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <Image
                  src={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${v.musicTokenData.properties.S3AlbumCover}`}
                  alt="Album Cover"
                  width={'250px'}
                  height={'250px'}
                />
              </div>
            );
          })}
        </>
      ) : (
        <CircularProgress color="inherit" />
      )}

      {/* 임시 tokenID */}

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
