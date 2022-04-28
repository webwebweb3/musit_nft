import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { mintMusicTokenContract, saleMusicTokenAddress } from '$contracts';
import { Box, Button } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useWalletInfo } from '$hooks/web3';
import PageList from '$components/layout/page';
import { useTranslation } from 'react-i18next';

const MyNFT = () => {
  const { t } = useTranslation();
  const { userData } = useSelector(state => state.user);
  const [myNFT, setMyNFT] = useState();
  const [saleStatus, setSaleStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const { network } = useWalletInfo();

  if (userData === null) {
    Router.push('/');
  }
  const account = userData?.metamask;

  const getMyMusicTokens = async () => {
    try {
      setLoading(true);

      if (!account) return;
      const balanceLength = await mintMusicTokenContract.methods
        .balanceOf(account)
        .call();

      if (balanceLength === '0') return;

      const tempMusicCardArray = [];

      const myNFTArray = await mintMusicTokenContract.methods
        .getMusicTokens(account)
        .call();

      for (let i = 0; i < myNFTArray.length; i++) {
        const ipfsData = await fetch(
          `https://ipfs.infura.io/ipfs/${myNFTArray[i].musicTokenURI}`,
        );
        const data = await ipfsData.json();
        tempMusicCardArray.push({
          musicTokenId: myNFTArray[i].musicTokenId,
          musicTokenData: data,
          musicTokenPrice: myNFTArray[i].musicTokenPrice,
        });
      }
      setMyNFT(tempMusicCardArray.reverse());

      setLoading(true);
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
        alert(`${t('AgreeAlready')}`);
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
    getMyMusicTokens();
    if (!saleStatus) {
      getIsApprovedForAll();
    }
  }, [network.isSupported]);

  return (
    <>
      {loading && (
        <Box className="myNFTContainer">
          {!saleStatus && (
            <Box className="approveBox">
              <Button onClick={onClickSalesApproval}>
                <AddTaskIcon className="approveTextIcon" />
                <span className="approveText">{t('SaleAgree')}</span>
              </Button>
            </Box>
          )}

          <PageList items={myNFT} saleStatus={saleStatus} type="myNFT" />
        </Box>
      )}
    </>
  );
};

export default MyNFT;
