import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { Box, Checkbox, CircularProgress, Pagination } from '@mui/material';

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
import { StyledMyNFTText } from '../style';

const AuctionUploadPage = () => {
  const auction = useSelector(state => state.auction);
  const [loading, setLoading] = useState(false);
  const [startingBid, onChangeStartingBid] = useInput('');
  const [minimumBid, onChangeMinimumBid] = useInput('');
  const [endAt, onChangeEndAt, setEndAt] = useInput('');
  const [tokenID, setTokenID] = useState('');
  const [myNFT, setMyNFT] = useState();
  const [testPage, setTestPage] = useState(1);

  const { network, account } = useWalletInfo();

  useEffect(() => {
    let date = timeFunction();

    // 형식: 2022-02-02T02:02:02
    setEndAt(date);
  }, [setEndAt]);

  useEffect(() => {
    setLoading(auction.createAuctionLoading);
  }, [auction]);

  useEffect(() => {
    console.log(myNFT);
  }, [myNFT]);

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

      let totalPage = Math.ceil(response.length / 1); // 숫자 1 보고 싶은 페이지로 수정
      setTestPage(totalPage);

      let startView = (response.length / totalPage) * page - 1; // 숫자 1 보고 싶은 페이지로 수정
      let endView = (response.length / totalPage) * page;

      for (let i = startView; i < endView; i++) {
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
      if (tokenID === data) {
        setTokenID('');
      } else {
        setTokenID(data);
      }
    },
    [tokenID],
  );

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getMyMusicTokens();
  }, [page, network.isSupported]);

  return (
    <Box style={{ color: '#dada', marginTop: '130px', textAlign: 'center' }}>
      <h1>경매 등록 하기</h1>

      <AuctionTextField
        text="시작 금액"
        value={startingBid}
        onChange={onChangeStartingBid}
        uint="ETH"
      />

      <AuctionTextField
        text="최저 입찰"
        value={minimumBid}
        onChange={onChangeMinimumBid}
      />

      <AuctionAppointment text="종료 시간" value={endAt} func={onChangeEndAt} />

      {myNFT ? (
        <>
          <StyledMyNFTText id="outlined-weight-helper-text">
            판매 가능 NFT 목록
          </StyledMyNFTText>
          <Box
            style={{
              border: 'solid 3px #dada',
              borderRadius: '7px',
              width: '453px',
              padding: '20px',
              margin: '0 auto',
            }}
          >
            {myNFT.map((v, i) => {
              return (
                <Box
                  key={v.musicTokenId}
                  style={{
                    display: `${v.musicTokenPrice === 0 ? 'none' : 'block'}`,
                    textAlign: 'start',
                  }}
                  onChange={() => onClickHandler(v.musicTokenId)}
                >
                  <Checkbox
                    checked={v.musicTokenId === tokenID && true}
                    inputProps={{
                      'aria-label': 'controlled',
                    }}
                    style={{
                      marginRight: '10px',
                    }}
                  />
                  <Image
                    src={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${v.musicTokenData.properties.S3AlbumCover}`}
                    alt="Album Cover"
                    width="60px"
                    height="60px"
                  />
                  <span style={{ marginLeft: '15px' }}>
                    {v.musicTokenData.properties.dataToSubmit.title}
                  </span>
                </Box>
              );
            })}
            <div
              style={{
                alignItems: 'center',
                margin: '0 auto',
              }}
            >
              <Pagination
                onChange={handleChange}
                count={testPage}
                page={page}
                showLastButton
                showFirstButton
                color="primary"
                variant="outlined"
              />
            </div>
          </Box>
          {loading ? (
            <>
              <CircularProgress color="inherit" />
            </>
          ) : (
            <UploadButton
              endAt={endAt}
              startingBid={startingBid}
              minimumBid={minimumBid}
              tokenID={tokenID}
            />
          )}
        </>
      ) : (
        <CircularProgress color="inherit" />
      )}
      <AuctionButton text="경매 메인으로 가기" link={'nft/auction'} />
    </Box>
  );
};

export default AuctionUploadPage;
