import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { style } from './style';
import StudioBackground from './myStudio/studioBackground/StudioBackground';
import StudioProfile from './myStudio/studioProfile/StudioProfile';
import StudioMyMusics from './myStudio/studioMyMusics/StudioMyMusics';
import { studioGetUserImages } from '$reduxsaga/request/studio_request';

const Studio = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  let { artistName } = router.query;
  const studio = useSelector(state => state.studio);

  const [backgroundImg, setBackgroundImg] = useState();
  const [profileImg, setProfileImg] = useState();

  const { userData } = useSelector(state => state.user);

  if (userData === null) {
    alert('로그인 해주세요');
    Router.push('/');
    return null;
  }

  const setImages = () => {
    if (studio.studioUserImages) {
      if (studio.studioUserImages.userProfile) {
        setProfileImg(studio.studioUserImages.userProfile);
      }
      if (studio.studioUserImages.userBackground) {
        setBackgroundImg(studio.studioUserImages.userBackground);
      }
    }
  };

  const getUserImages = async () => {
    dispatch(studioGetUserImages(artistName));
  };

  // useEffect(() => {
  //   getUserImages();
  // }, []);

  // useEffect(() => {
  //   if (studio.getUserImagesDone) {
  //     if (studio.studioUserImages.userProfile === null) {
  //       setProfileImg('defaultProfile');
  //     } else {
  //       setProfileImg(studio.studioUserImages.userProfile);
  //     }
  //     if (studio.studioUserImages.userBackground === null) {
  //       setBackgroundImg('defaultBackground');
  //     } else {
  //       setBackgroundImg(studio.studioUserImages.userBackground);
  //     }
  //   }
  //   console.log(backgroundImg, profileImg);
  // }, [studio.getUserImagesDone, profileImg]);

  return (
    <Box sx={style.studioContainer}>
      <Box sx={style.studioBackground}>
        {backgroundImg && <StudioBackground background={backgroundImg} />}
      </Box>
      <Box sx={style.studioProfile}>
        {profileImg && <StudioProfile profile={profileImg} />}
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
