import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { style } from './style';
import StudioBackground from './myStudio/studioBackground/StudioBackground';
import StudioProfile from './myStudio/studioProfile/StudioProfile';
import StudioMyMusics from './myStudio/studioMyMusics/StudioMyMusics';
import {
  studioGetUserImages,
  studioIsSubscribing,
} from '$reduxsaga/request/studio_request';
import { studioGetMyMusics } from '$reduxsaga/request/studio_request';
import Image from 'next/image';
import StudioSubscribe from './myStudio/studioSubscribe/StudioSubscribe';

const Studio = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  let { artistName } = router.query;
  const studio = useSelector(state => state.studio);

  const [backgroundImg, setBackgroundImg] = useState('defaultBackground');
  const [profileImg, setProfileImg] = useState();
  const [isSubscribe, setIsSubscribe] = useState(false);

  const { userData } = useSelector(state => state.user);

  if (userData === null) {
    Router.push('/');
  }

  const getMyMusics = () => {
    dispatch(studioGetMyMusics(artistName));
  };

  const getUserImages = () => {
    dispatch(studioGetUserImages(artistName));
  };
  const getIsSubscribing = () => {
    dispatch(studioIsSubscribing({ artistName, metamask: userData.metamask }));
  };

  useEffect(() => {
    getUserImages();
    getMyMusics();
    getIsSubscribing();
  }, []);

  useEffect(() => {
    if (studio) {
      if (studio.getUserImagesDone) {
        if (studio.studioUserImages.userProfile === null) {
          setProfileImg('defaultProfile');
        } else {
          setProfileImg(studio.studioUserImages.userProfile);
        }
        if (studio.studioUserImages.userBackground === null) {
          setBackgroundImg('defaultBackground');
        } else {
          setBackgroundImg(studio.studioUserImages.userBackground);
        }
      }
    }
  }, [studio.getUserImagesDone, profileImg, backgroundImg]);

  useEffect(() => {}, [studio && studio.isSubscribingArtist]);

  return (
    <Box sx={style.studioContainer}>
      <Box sx={style.studioBackground}>
        <StudioBackground background={backgroundImg} />
      </Box>
      <Box sx={style.studioProfile}>
        {profileImg && <StudioProfile profile={profileImg} />}
      </Box>
      <Box sx={style.studioDescription}>
        <Box sx={style.studioDescriptionTitle}>
          {artistName}
          <Image
            src="/verify.png"
            alt="verify image"
            layout="fixed"
            width="25px"
            height="25px"
          />
        </Box>
        <Box sx={style.studioDescriptionGraph}>
          <Box sx={style.studioDescriptionGraphContentLeft}>
            <Box sx={style.studioDescriptionGraphContentTitle}>items</Box>
            <Box sx={style.studioDescriptionGraphContentContent}>
              {studio.studioMyMusics ? studio.studioMyMusics.length : 0}
            </Box>
          </Box>
          <Box sx={style.studioDescriptionGraphContentRight}>
            <Box sx={style.studioDescriptionGraphContentTitle}>followers</Box>
            <Box sx={style.studioDescriptionGraphContentContent}>
              {studio.cntFollowers ? studio.cntFollowers : 0}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        {artistName === userData?.name ? (
          <Button sx={style.studioUploadButton}>
            <Link
              href="[artistName]/uploadmusic"
              as={`${artistName}/uploadmusic`}
            >
              <AddMusicButton>+ Add Music NFT</AddMusicButton>
            </Link>
          </Button>
        ) : (
          <Box sx={style.studioUploadButton}>
            <StudioSubscribe
              artist={artistName}
              sub={isSubscribe}
              func={setIsSubscribe}
              myMetamask={userData?.metamask}
            />
          </Box>
        )}
      </Box>

      <Box sx={style.studioMyMusics}>
        {studio.studioMyMusics ? (
          <StudioMyMusics myMusics={studio.studioMyMusics} />
        ) : (
          <Box></Box>
        )}
      </Box>
    </Box>
  );
};

export default Studio;

const AddMusicButton = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#2c3352',
  '&:hover': {
    backgroundColor: '#3d4463',
  },
}));
