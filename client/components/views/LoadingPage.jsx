import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Global } from './LoadingPageStyle';
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import HeadsetIcon from '@mui/icons-material/Headset';
import TokenIcon from '@mui/icons-material/Token';
import GavelIcon from '@mui/icons-material/Gavel';

const styles = {
  '&.MuiButton-text': {
    color: 'white',
  },
};

const LoadingPage = () => {
  const loadingcontainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: loadingcontainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./loadingBlocks.json'),
    });
  }, []);

  return (
    <>
      <Global />
      <div className="LoadingContainer">
        <h2 className="LoadingTypo"> sdsadasd </h2>
        <div className="LoadingWrapper" ref={loadingcontainer}></div>
        <div className="LoadingBtn">
          <ButtonGroup
            variant="text"
            style={{ color: '#fff' }}
            aria-label="outlined button group"
          >
            <Link href="/">
              <Button
                sx={{
                  '&.MuiButton-text': { color: '#fff' },
                }}
                startIcon={<HomeIcon />}
              >
                Home
              </Button>
            </Link>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="text button group">
            <Link href="/streaming">
              <Button
                sx={{
                  '&.MuiButton-text': { color: '#fff' },
                }}
                startIcon={<HeadsetIcon />}
              >
                STREAMING
              </Button>
            </Link>
          </ButtonGroup>
        </div>
        <div className="LoadingBtn">
          <ButtonGroup variant="text" aria-label="text button group">
            <Link href="/nft">
              <Button
                sx={{
                  '&.MuiButton-text': { color: '#fff' },
                }}
                startIcon={<TokenIcon />}
              >
                NFT
              </Button>
            </Link>
          </ButtonGroup>
          <ButtonGroup
            color="primary"
            variant="text"
            aria-label="text button group"
          >
            <Link href="/nft/auction">
              <Button
                sx={{
                  '&.MuiButton-text': { color: '#fff' },
                }}
                startIcon={<GavelIcon />}
              >
                AUCTION
              </Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};
export default LoadingPage;
