import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import {
  mintMusicTokenContract,
  saleMusicTokenAddress,
} from '../../../../contracts';
import { Box, Button, Grid } from '@mui/material';
import MyNFTCards from '../../cards/MyNFTCards';
import { style } from './style';

const MyNFT = () => {
  const [myNFT, setMyNFT] = useState();
  const [saleStatus, setSaleStatus] = useState(false);

  const { userData } = useSelector(state => state.user);
  if (userData === null) {
    alert('로그인 해주세요');
    Router.push('/');
  }
  const account = userData.metamask;

  const getMyMusicTokens = async () => {
    try {
      if (!account) return;
      const balanceLength = await mintMusicTokenContract.methods
        .balanceOf(account)
        .call();

      if (balanceLength === '0') return;

      const tempMusicCardArray = [];

      const response = await mintMusicTokenContract.methods
        .getMusicTokens(account)
        .call();
      console.log('res', response);
      for (let i = 0; i < response.length; i++) {
        const ipfsData = await fetch(
          `https://ipfs.infura.io/ipfs/${response[i].musicTokenURI}`,
        );
        console.log('ipfs', ipfsData);
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
  };

  const getIsApprovedForAll = async () => {
    try {
      const response = await mintMusicTokenContract.methods
        .isApprovedForAll(account, saleMusicTokenAddress)
        .call();
      if (response) {
        setSaleStatus(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClickSalesApproval = async () => {
    try {
      if (!account) return;
      if (saleStatus) {
        alert('이미 판매에 동의 하셨습니다.');
        return;
      }
      const response = await mintMusicTokenContract.methods
        .setApprovalForAll(saleMusicTokenAddress, true)
        .send({ from: account });
      if (response.status) {
        setSaleStatus(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!account) return;
    if (!myNFT) {
      getMyMusicTokens();
    }
    getIsApprovedForAll();
  }, [myNFT, saleStatus]);

  return (
    <Box style={style.myNFTContainer}>
      <Box style={style.myNFTSaleApprovalButton}>
        <Button onClick={onClickSalesApproval}>
          {!saleStatus && '판매동의'}
        </Button>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 3, sm: 8, md: 12 }}
      >
        {myNFT &&
          myNFT.map((v, i) => {
            return (
              <Grid item xs={2} sm={3} md={3} key={i}>
                <MyNFTCards
                  account={account}
                  musicTokenIds={v.musicTokenId}
                  musicTokenDatas={v.musicTokenData}
                  musicTokenPrices={v.musicTokenPrice}
                  saleStatus={saleStatus}
                />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default MyNFT;
