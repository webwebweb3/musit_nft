import { Box, Button } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { mintMusicTokenContract } from '../../../contracts';
import { style } from './style';
import StudioBackground from './myStudio/studioBackground/StudioBackground';
import StudioProfile from './myStudio/studioProfile/StudioProfile';
import StudioMyMusics from './myStudio/studioMyMusics/StudioMyMusics';

const Studio = () => {
  const router = useRouter();
  let { artistName } = router.query;

  const { userData } = useSelector(state => state.user);
  console.log(userData);
  if (userData === null) {
    alert('로그인 해주세요');
    Router.push('/');
    return null;
  }
  const account = userData.metamask;

  return (
    <Box sx={style.studioContainer}>
      <Box sx={style.studioBackground}>
        <StudioBackground />
      </Box>
      <Box sx={style.studioProfile}>
        <StudioProfile />
      </Box>
      <Box>
        {artistName === userData.name ? (
          <Button sx={style.studioUploadButton}>
            <Link href={`${artistName}/uploadmusic`}>+ Add Music NFT</Link>
          </Button>
        ) : (
          <div style={{ height: '36.5px' }}></div>
        )}
      </Box>

      <Box sx={style.studioMyMusics}>
        <StudioMyMusics />
      </Box>
    </Box>
  );
};

export default Studio;
