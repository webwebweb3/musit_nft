import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { saleMusicTokenContract, web3 } from '$contracts';
import Modal from 'react-modal';
import MarketPlaceNFTCard from './MarketPlaceNFTCard';
import Image from 'next/image';
import Router from 'next/router';
import { withStyles } from '@mui/styles';
import { CircularProgress } from '@mui/material';

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
    width: '80%',
    height: '70%',
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
  console.log(musicTokenDatas);

  const musicTokenData = musicTokenDatas.properties;
  const [sellPrice, setSellPrice] = useState('');
  const [myNFTPrice, setMyNFTPrice] = useState(musicTokenPrices);
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const goToEdition = () => {
    Router.push(`/nft/marketplace/edition/${musicTokenIds}`);
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
      setIsLoading(true);
      const response = await saleMusicTokenContract.methods
        .setForSaleMusicToken(
          musicTokenIds,
          web3.utils.toWei(sellPrice, 'ether'),
        )
        .send({ from: account });
      if (response.status) {
        setMyNFTPrice(web3.utils.toWei(sellPrice, 'ether'));
        setIsLoading(false);
        Router.push(`/nft/marketplace/edition/${musicTokenIds}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box style={{ color: 'white' }}>
      <Box
        sx={{
          display: 'block',
          fontSize: '15px',
          color: `${myNFTPrice === '0' ? '#cc0000' : '#1976ae'}`,
          fontWeight: 600,
          marginLeft: '10px',
        }}
      >
        {myNFTPrice === '0' ? '미판매중' : '판매중'}
      </Box>
      <Box
        sx={{
          width: '65%',
          fontSize: '30px',
          textOverflow: 'ellipsis',
          display: 'inline-block',
          marginLeft: '10px',
        }}
      >
        {musicTokenData.dataToSubmit.title}
      </Box>

      <Box
        style={{
          position: 'relative',
          borderRadius: '100px',
          margin: '10px',
        }}
      >
        <Box style={{ borderRadius: '10px', overflow: 'hidden' }}>
          <Image
            src={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${musicTokenData.S3AlbumCover}`}
            alt="Album Cover"
            width="220px"
            height="220px"
            borderRadius="100px"
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
            style={hover ? { opacity: '0.5' } : { opacity: '1' }}
          />
        </Box>
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
            <Box
              sx={{
                flex: 55,
                paddingLeft: '20px',
                justifyContent: 'center',
                position: 'absolute',
                left: '50%',
                top: '45%',
                color: 'white',
                fontSize: '20px',
                fontWeight: 600,
              }}
            >
              <CssTextField
                variant="standard"
                label="판매 가격"
                value={sellPrice}
                onChange={onChangeSellPrice}
                sx={{
                  color: 'white',
                }}
              />
              <Box
                sx={{
                  display: 'inline-block',
                  marginTop: '40px',
                  marginLeft: '15px',
                }}
              >
                ETH
              </Box>

              {/* {web3.utils.fromWei(myNFTPrice)} */}
            </Box>
          </Box>
          <Box sx={{ marginTop: '20px', textAlign: 'center', color: 'white' }}>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <SaleButton onClick={onClickSell}>판매</SaleButton>
            )}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default NFTCards;

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
    '& .MuiInput-root': {
      color: 'white',
      width: '250px',
      height: '55px',
      fontSize: '30px',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);
