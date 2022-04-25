import { Box } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { web3 } from '$contracts';
import { marketPlaceGetOwnerAction } from '$reduxsaga/request/marketPlace_request';
import EditionPurchase from '../editionPurchase/EditionPurchase';

const EditionDescription = ({ owner, musicData, musicPrice }) => {
  const router = useRouter();
  const data = musicData.properties.dataToSubmit;
  const marketplace = useSelector(state => state.market);
  const artistName = musicData.properties.dataToSubmit.artist;
  const albumName = musicData.properties.dataToSubmit.albumName;

  const dispatch = useDispatch();
  const [ownerName, setOwnerName] = useState();
  const [loading, setLoading] = useState(false);

  const getOwnerName = async () => {
    dispatch(marketPlaceGetOwnerAction(owner));
  };

  useEffect(() => {
    getOwnerName();
  }, []);

  useEffect(() => {
    if (marketplace.getOwnerDone) {
      setOwnerName(marketplace.userData);
    }
  }, [marketplace.getOwnerDone, ownerName]);
  return (
    <Box sx={{ marginTop: '30px' }}>
      <Link href="/studio/[artistName]" as={`/studio/${artistName}`}>
        <Box
          sx={{
            fontSize: '25px',
            fontWeight: 500,
            cursor: 'pointer',
            color: '#2b95e9',
            display: 'inline-block',
            margin: '20px 0',
          }}
        >
          {artistName}
        </Box>
      </Link>
      <Box
        sx={{
          display: 'inline-block',
        }}
      >
        <img
          src="/verify.png"
          width={'23px'}
          height={'23px'}
          style={{ marginLeft: '4px' }}
        />
      </Box>

      <Box sx={{ fontSize: '70px', fontWeight: 500, margin: '20px 0 0 ' }}>
        {data.title}
      </Box>
      <Box
        sx={{
          fontSize: '20px',
          color: '#768fb5',
          fontWeight: 600,
        }}
      >
        <Box
          sx={{
            display: 'inline-block',
            paddingRight: '10px',
            margin: '0 0 20px ',
          }}
        >
          Owned by
        </Box>
        <Box sx={{ display: 'inline-block' }}>{ownerName && ownerName}</Box>
      </Box>
      <Box sx={{ fontSize: '40px', fontWeight: 500, marginTop: '30px' }}>
        {web3.utils.fromWei(musicPrice)} ETH
        <EditionPurchase
          musicPrice={musicPrice}
          tokenId={router.query.editionIPFSUrl}
        />
      </Box>
      <Box
        sx={{
          fontSize: '11px',
          fontWeight: 200,
          color: '#aaa',
          marginBottom: '30px',
        }}
      >
        수수료 : {web3.utils.fromWei(musicPrice) / 101} (수수료는 최초
        발행자에게 지급됩니다.)
      </Box>
    </Box>
  );
};

export default EditionDescription;
