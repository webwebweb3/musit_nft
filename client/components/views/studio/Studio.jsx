import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { style } from './style';
import StudioBackground from './myStudio/studioBackground/StudioBackground';
import StudioProfile from './myStudio/studioProfile/StudioProfile';
import StudioMyMusics from './myStudio/studioMyMusics/StudioMyMusics';
import { studioGetUserImages } from '../../../_request/studio_request';

const Studio = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  let { artistName } = router.query;
  const studio = useSelector(state => state.studio);

  // const [backgroundImg, setBackgroundImg] = useState('defaultBackground');
  // const [profileImg, setProfileImg] = useState('defaultProfile');

  const { userData } = useSelector(state => state.user);

  if (userData === null) {
    alert('로그인 해주세요');
    Router.push('/');
    return null;
  }

  // const setImages = () => {
  //   if (studio.studioUserImages) {
  //     if (studio.studioUserImages.userProfile) {
  //       setProfileImg(studio.studioUserImages.userProfile);
  //     }
  //     if (studio.studioUserImages.userBackground) {
  //       setProfileImg(studio.studioUserImages.userBackground);
  //     }
  //   }
  // };

  const getUserImages = async () => {
    dispatch(studioGetUserImages(artistName));
  };

  // useEffect(() => {
  //   console.log('1');
  //   if (!studio.getMyMusicsLoading) {
  //     console.log('2');
  //     getUserImages();
  //   }

  //   if (studio.getUserImagesError) {
  //     alert(studio.getUserImagesError);
  //     Router.push('/');
  //   }
  //   setImages();
  //   console.log('3', backgroundImg, profileImg);
  // }, [studio.getMyMusicsLoading, backgroundImg, profileImg]);

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
