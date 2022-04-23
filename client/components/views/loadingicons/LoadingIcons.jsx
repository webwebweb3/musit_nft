import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import Link from 'next/link';
import { Gavel, Headset, Home, Token } from '@mui/icons-material';

const LoadingIcons = () => {
  return (
    <div style={{ margin: '0 auto ' }}>
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
              startIcon={<Home />}
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
              startIcon={<Headset />}
            >
              STREAMING
            </Button>
          </Link>
        </ButtonGroup>

        <ButtonGroup variant="text" aria-label="text button group">
          <Link href="/nft/marketplace">
            <Button
              sx={{
                '&.MuiButton-text': { color: '#fff' },
              }}
              startIcon={<Token />}
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
              startIcon={<Gavel />}
            >
              AUCTION
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default LoadingIcons;
