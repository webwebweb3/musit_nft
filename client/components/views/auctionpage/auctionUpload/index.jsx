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
import LoadingPage from '$components/views/LoadingPage';
import { StyledMyNFTText } from '../style';

const AuctionUploadPage = () => {
  const auction = useSelector(state => state.auction);
  const { createAuctionLoading, createAuctionError } = useSelector(
    state => state.auction,
  );
  const [startingBid, onChangeStartingBid] = useInput('');
  const [minimumBid, onChangeMinimumBid] = useInput('');
  const [endAt, onChangeEndAt, setEndAt] = useInput('');
  const [tokenID, setTokenID] = useState('');
  const [myNFT, setMyNFT] = useState();
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [auctionTokenId, setAuctionTokenId] = useState([]);
  const [page, setPage] = useState(1);

  const { network, account } = useWalletInfo();

  useEffect(() => {
    let date = timeFunction();

    setEndAt(date);
  }, [setEndAt]);

  useEffect(() => {
    if (createAuctionError) {
      alert('경매 등록에 실패했습니다.');
    }
  }, [createAuctionError]);

  useEffect(() => {
    if (createAuctionLoading) {
    }
  }, [createAuctionLoading]);

  const getMyMusicTokens = useCallback(async () => {
    try {
      const tempMusicCardArray = [];

      let totalPage = Math.ceil(auctionTokenId.length / 1);
      setTotalPage(totalPage);

      let startView = (auctionTokenId.length / totalPage) * page - 1;
      let endView = (auctionTokenId.length / totalPage) * page;

      for (let i = startView; i < endView; i++) {
        const ipfsData = await fetch(
          `https://ipfs.infura.io/ipfs/${auctionTokenId[i].musicTokenURI}`,
        );
        const data = await ipfsData.json();
        tempMusicCardArray.push({
          musicTokenId: auctionTokenId[i].musicTokenId,
          musicTokenData: data,
          musicTokenPrice: auctionTokenId[i].musicTokenPrice,
        });
      }

      setMyNFT(tempMusicCardArray);
      setLoading(true);
    } catch (error) {
      console.error(error);
    }
  }, [auctionTokenId]);

  useEffect(() => {
    getMyMusicTokens();
  }, [auctionTokenId]);

  const getMyNFTInfo = useCallback(async () => {
    try {
      setLoading(false);
      const balanceLength = await mintMusicTokenContract.methods
        .balanceOf(account.data)
        .call();

      if (balanceLength === '0') return;

      const myTotalNFT = await mintMusicTokenContract.methods
        .getMusicTokens(account.data)
        .call();

      let token = [];
      for (let i = 0; i < myTotalNFT.length; i++) {
        let myAuctionToken = await mintMusicTokenContract.methods
          .isOnSaleToken(myTotalNFT[i].musicTokenId)
          .call();

        if (!myAuctionToken) {
          token.push(myTotalNFT[i]);
        }
      }

      setAuctionTokenId(token);
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

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getMyNFTInfo();
  }, [page, network.isSupported]);

  return (
    <Box style={{ color: '#dada', marginTop: '130px', textAlign: 'center' }}>
      {!createAuctionLoading ? (
        <>
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

          <AuctionAppointment
            text="종료 시간"
            value={endAt}
            func={onChangeEndAt}
          />

          {!loading ? (
            <CircularProgress color="inherit" />
          ) : myNFT.length !== 0 ? (
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
                        display: `${
                          v.musicTokenPrice === 0 ? 'none' : 'block'
                        }`,
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
                    count={totalPage}
                    page={page}
                    showLastButton
                    showFirstButton
                    color="primary"
                    variant="outlined"
                  />
                </div>
              </Box>
              {auction.createAuctionLoading ? (
                <CircularProgress color="inherit" />
              ) : (
                <UploadButton
                  endAt={endAt}
                  startingBid={startingBid}
                  minimumBid={minimumBid}
                  tokenID={tokenID}
                />
              )}
              <AuctionButton text="경매 메인으로 가기" link={'nft/auction'} />
            </>
          ) : (
            <>현재 판매 가능한 NFT 가 없습니다!</>
          )}
        </>
      ) : (
        <>
          <div style={{ position: 'fixed', top: '140px' }}>
            <div className="auctionBlur">
              <div
                style={{
                  fontSize: '55px',
                  color: '#173142',
                  display: 'flex',
                  margin: 'auto',
                  flexDirection: 'column',
                }}
              >
                <LoadingPage />
              </div>
            </div>
          </div>
        </>
      )}
    </Box>
  );
};

export default AuctionUploadPage;
