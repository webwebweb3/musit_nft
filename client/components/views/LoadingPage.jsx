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
import Image from 'next/image';

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
        <div style={{ marginBottom: '10px' }}>
          <Image
            src="/eth.gif"
            alt="Album Cover"
            width="150px"
            height="300px"
          />
        </div>
        <div style={{ fontSize: '30px' }}>블록에 내 음악 올리는 중..</div>
        <div style={{ marginTop: '15px' }} className="LoadingBtn">
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
            <Link href="/streaming/latestMusic">
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
            <Link href="/nft/marketplace">
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
