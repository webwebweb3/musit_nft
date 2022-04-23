import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Fade from 'react-reveal/Fade';

import {
  Gavel,
  Headset,
  Storefront,
  Token,
  Home,
  LibraryMusic,
} from '@mui/icons-material';
import { Box, Tab } from '@mui/material';

const NavbarLink = () => {
  const router = useRouter();
  let { pathname } = router;
  const [linkDisabled, setLinkDisabled] = useState('');
  const [nftShow, setNftShow] = useState(false);
  const [streamingShow, setStreamingShow] = useState(false);

  useEffect(() => {
    let pathArray = `${pathname}`.split('/');
    setLinkDisabled(pathArray[pathArray.length - 1]);
    setNftShow(false);
    setStreamingShow(false);
  }, [pathname]);

  const handleNFTEnter = () => {
    setNftShow(true);
  };
  const handleNFTLeave = () => {
    setNftShow(false);
  };
  const handleStreamingEnter = () => {
    setStreamingShow(true);
  };
  const handleStreamingLeave = () => {
    setStreamingShow(false);
  };

  return (
    <>
      {pathname.includes('/streaming') ? (
        <>
          <Tab
            icon={<Headset />}
            iconPosition="start"
            label="STREAMING"
            sx={{ fontSize: '18px', marginRight: '10px' }}
          />
          <Link href="/streaming/home">
            <Tab
              disabled={linkDisabled.includes('home')}
              icon={<Home />}
              iconPosition="start"
              label="HOME"
              sx={{
                fontSize: '18px',
                marginLeft: '-20px',
                marginRight: '10px',
              }}
            />
          </Link>
          <Link href="/streaming/latestMusic">
            <Tab
              disabled={linkDisabled.includes('latestMusic')}
              icon={<LibraryMusic />}
              iconPosition="start"
              label="LATESTMUSIC"
              sx={{
                fontSize: '18px',
                marginLeft: '-20px',
                marginRight: '10px',
              }}
            />
          </Link>
          <div
            style={{
              height: '28px',
              width: '2px',
              marginTop: '24px',
              backgroundColor: '#dada',
            }}
          ></div>
          <Tab
            className="nftNavbar"
            icon={<Token />}
            iconPosition="start"
            label="NFT"
            onMouseEnter={handleNFTEnter}
            onMouseLeave={handleNFTLeave}
            sx={{ fontSize: '18px', color: '#fff' }}
          />
          <span
            className="navSpan"
            style={nftShow ? { display: 'inline' } : { display: 'none' }}
            onMouseEnter={handleNFTEnter}
            onMouseLeave={handleNFTLeave}
          >
            <Fade left when={nftShow}>
              <Link href="/nft/marketplace">
                <Tab
                  className="marketPlaceNavbar nftNavbar"
                  disabled={linkDisabled.includes('marketplace')}
                  icon={<Storefront />}
                  iconPosition="start"
                  label="MarketPlace"
                  sx={{ fontSize: '18px' }}
                />
              </Link>
              <Link href="/nft/auction">
                <Tab
                  className="auctionNavbar nftNavbar"
                  disabled={linkDisabled.includes('auction')}
                  icon={<Gavel />}
                  iconPosition="start"
                  label="Auction"
                  sx={{ fontSize: '18px' }}
                />
              </Link>
            </Fade>
          </span>
        </>
      ) : pathname.includes('/nft') ? (
        <>
          <Tab
            icon={<Headset />}
            iconPosition="start"
            onMouseEnter={handleStreamingEnter}
            onMouseLeave={handleStreamingLeave}
            label="STREAMING"
            sx={{ fontSize: '18px', marginRight: '10px' }}
          />
          <span
            className="navSpan"
            style={streamingShow ? { display: 'inline' } : { display: 'none' }}
            onMouseEnter={handleStreamingEnter}
            onMouseLeave={handleStreamingLeave}
          >
            <Fade left when={streamingShow}>
              <Link href="/streaming/home">
                <Tab
                  disabled={linkDisabled.includes('home')}
                  icon={<Home />}
                  iconPosition="start"
                  label="HOME"
                  sx={{
                    fontSize: '18px',
                    marginLeft: '-20px',
                    marginRight: '10px',
                  }}
                />
              </Link>
              <Link href="/streaming/latestMusic">
                <Tab
                  disabled={linkDisabled.includes('latestMusic')}
                  icon={<LibraryMusic />}
                  iconPosition="start"
                  label="LATESTMUSIC"
                  sx={{
                    fontSize: '18px',
                    marginLeft: '-20px',
                    marginRight: '10px',
                  }}
                />
              </Link>
            </Fade>
          </span>

          <div
            style={{
              height: '28px',
              width: '2px',
              marginTop: '23px',
              backgroundColor: '#dada',
            }}
          ></div>
          <Link href="/nft/marketplace">
            <Tab
              className="nftNavbar"
              icon={<Token />}
              iconPosition="start"
              label="NFT"
              sx={{ fontSize: '18px', color: '#fff' }}
            />
          </Link>
          <Link href="/nft/marketplace">
            <Tab
              className="marketPlaceNavbar nftNavbar"
              disabled={linkDisabled.includes('marketplace')}
              icon={<Storefront />}
              iconPosition="start"
              label="MarketPlace"
              sx={{ fontSize: '18px' }}
            />
          </Link>
          <Link href="/nft/auction">
            <Tab
              className="auctionNavbar nftNavbar"
              disabled={linkDisabled.includes('auction')}
              icon={<Gavel />}
              iconPosition="start"
              label="Auction"
              sx={{ fontSize: '18px' }}
            />
          </Link>
        </>
      ) : (
        <>
          <Tab
            icon={<Headset />}
            iconPosition="start"
            onMouseEnter={handleStreamingEnter}
            onMouseLeave={handleStreamingLeave}
            label="STREAMING"
            sx={{ fontSize: '18px', marginRight: '10px' }}
          />
          <span
            className="navSpan"
            style={streamingShow ? { display: 'inline' } : { display: 'none' }}
            onMouseEnter={handleStreamingEnter}
            onMouseLeave={handleStreamingLeave}
          >
            <Fade left when={streamingShow}>
              <Link href="/streaming/home">
                <Tab
                  disabled={linkDisabled.includes('home')}
                  icon={<Home />}
                  iconPosition="start"
                  label="HOME"
                  sx={{
                    fontSize: '18px',
                    marginLeft: '-20px',
                    marginRight: '10px',
                  }}
                />
              </Link>
              <Link href="/streaming/latestMusic">
                <Tab
                  disabled={linkDisabled.includes('latestMusic')}
                  icon={<LibraryMusic />}
                  iconPosition="start"
                  label="LATESTMUSIC"
                  sx={{
                    fontSize: '18px',
                    marginLeft: '-20px',
                    marginRight: '10px',
                  }}
                />
              </Link>
            </Fade>
          </span>

          <div
            style={{
              height: '28px',
              width: '2px',
              marginTop: '23px',
              backgroundColor: '#dada',
            }}
          ></div>
          <Tab
            className="nftNavbar"
            icon={<Token />}
            iconPosition="start"
            label="NFT"
            onMouseEnter={handleNFTEnter}
            onMouseLeave={handleNFTLeave}
            sx={{ fontSize: '18px', color: '#fff' }}
          />
          <span
            className="navSpan"
            style={nftShow ? { display: 'inline' } : { display: 'none' }}
            onMouseEnter={handleNFTEnter}
            onMouseLeave={handleNFTLeave}
          >
            <Fade left when={nftShow}>
              <Link href="/nft/marketplace">
                <Tab
                  className="marketPlaceNavbar nftNavbar"
                  disabled={linkDisabled.includes('marketplace')}
                  icon={<Storefront />}
                  iconPosition="start"
                  label="MarketPlace"
                  sx={{ fontSize: '18px' }}
                />
              </Link>
              <Link href="/nft/auction">
                <Tab
                  className="auctionNavbar nftNavbar"
                  disabled={linkDisabled.includes('auction')}
                  icon={<Gavel />}
                  iconPosition="start"
                  label="Auction"
                  sx={{ fontSize: '18px' }}
                />
              </Link>
            </Fade>
          </span>
        </>
      )}
    </>
  );
};

export default NavbarLink;
