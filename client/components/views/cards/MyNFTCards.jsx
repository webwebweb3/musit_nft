import { Box, Button, Input } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { saleMusicTokenContract, web3 } from '../../../contracts';

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
  const [hover, setHover] = useState();

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
      console.log(web3.utils.toWei(sellPrice, 'ether'));

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
  console.log(sellPrice);

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
          style={{ position: 'absolute', top: '107px', left: '63px' }}
        >
          {hover && '판매'}
        </Button>
        <Button
          onMouseOver={handleMouseIn}
          onMouseOut={handleMouseOut}
          style={{ position: 'absolute', top: '107px', left: '123px' }}
        >
          {hover && '경매'}
        </Button>
      </Box>

      <Box>
        <Input
          type="number"
          value={sellPrice}
          onChange={onChangeSellPrice}
          style={{ color: 'white' }}
        />
        <Button onClick={onClickSell}>판매</Button>
        {web3.utils.fromWei(myNFTPrice)}
      </Box>
    </Box>
  );
};

export default NFTCards;
