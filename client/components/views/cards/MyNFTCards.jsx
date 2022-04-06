import { Box, Button, Input } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useState } from 'react';
import { saleMusicTokenContract, web3 } from '../../../contracts';
import Modal from 'react-modal';
import MarketPlaceNFTCard from './MarketPlaceNFTCard';
import Router from 'next/router';

const SaleButton = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#274eff',
  '&:hover': {
    backgroundColor: '#1b36b2',
  },
}));

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '50%',
    borderRadius: '20px',
    background: '#0d0f1a',
  },
};

const NFTCards = ({
  account,
  musicTokenIds,
  musicTokenDatas,
  musicTokenPrices,
  saleStatus,
}) => {
  const musicTokenData = musicTokenDatas.properties;
  const [sellPrice, setSellPrice] = useState('');
  const [myNFTPrice, setMyNFTPrice] = useState(musicTokenPrices);
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState();

  const openModal = () => {
    setIsOpen(true);
  };

  const goToEdition = () => {
    Router.replace(`/nft/marketplace/edition/${musicTokenIds}`);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const onChangeSellPrice = e => {
    setSellPrice(e.target.value);
  };

  const onClickSell = async () => {
    try {
      if (!account) {
        alert('계정을 다시한번 살펴봐 주세요');
        return;
      }
      if (!saleStatus) {
        alert('NFT 판매에 동의를 먼재 해주세요.');
        return;
      }

      const response = await saleMusicTokenContract.methods
        .setForSaleMusicToken(
          musicTokenIds,
          web3.utils.toWei(sellPrice, 'ether'),
        )
        .send({ from: account });
      if (response.status) {
        setMyNFTPrice(web3.utils.toWei(sellPrice, 'ether'));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box style={{ color: 'white' }}>
      {musicTokenData.dataToSubmit.title}
      <Box style={{ position: 'relative' }}>
        <img
          src={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${musicTokenData.S3AlbumCover}`}
          alt="Album Cover"
          width={'250px'}
          height={'250px'}
          onMouseOver={handleMouseIn}
          onMouseOut={handleMouseOut}
          style={hover ? { opacity: '0.5' } : { opacity: '1' }}
        />
        <Button
          onMouseOver={handleMouseIn}
          onMouseOut={handleMouseOut}
          style={{
            position: 'absolute',
            top: '107px',
            left: '63px',
            fontWeight: 600,
            fontSize: '20px',
          }}
          onClick={myNFTPrice === '0' ? openModal : goToEdition}
        >
          {hover && '판매'}
        </Button>
        <Button
          onMouseOver={handleMouseIn}
          onMouseOut={handleMouseOut}
          style={{
            position: 'absolute',
            top: '107px',
            left: '123px',
            fontWeight: 600,
            fontSize: '20px',
          }}
        >
          {hover && '경매'}
        </Button>
      </Box>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Button
          style={{ float: 'right', fontSize: '40px', color: 'white' }}
          onClick={closeModal}
        >
          X
        </Button>
        <Box sx={{ marginTop: '100px', padding: '0 100px' }}>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ flex: 45 }}>
              <MarketPlaceNFTCard
                musicTokenIds={musicTokenIds}
                musicTokenPrices={musicTokenPrices}
                musicTokenDatas={musicTokenDatas}
              />
            </Box>
            <Box sx={{ flex: 55, paddingLeft: '20px' }}>
              <Input
                type="number"
                value={sellPrice}
                onChange={onChangeSellPrice}
                style={{ color: 'white' }}
              />
              <SaleButton onClick={onClickSell}>판매</SaleButton>
              {web3.utils.fromWei(myNFTPrice)}
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default NFTCards;
