import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Gavel, Headset, Storefront, Token } from '@mui/icons-material';
import { Tab } from '@mui/material';

const NavbarLink = ({ value }) => {
  const router = useRouter();
  let { pathname } = router;

  return (
    <>
      {pathname.includes('/nft') ? (
        <Link href="/streaming">
          <Tab
            icon={<Headset />}
            iconPosition="start"
            label=""
            sx={{ fontSize: '0', marginRight: '-20px' }}
          />
        </Link>
      ) : (
        <Link href="/streaming">
          <Tab
            icon={<Headset />}
            iconPosition="start"
            label="STREAMING"
            sx={{ fontSize: '18px', marginRight: '10px' }}
          />
        </Link>
      )}
      <Link href="/nft">
        <Tab
          icon={<Token />}
          iconPosition="start"
          label="NFT"
          sx={{ fontSize: '18px' }}
        />
      </Link>
      {pathname.includes('/nft') && (
        <>
          <Link href="/nft/marketplace">
            <Tab
              icon={<Storefront />}
              iconPosition="start"
              label="MarketPlace"
              sx={{ fontSize: '18px' }}
            />
          </Link>
          <Link href="/auction">
            <Tab
              icon={<Gavel />}
              iconPosition="start"
              label="Auction"
              sx={{ fontSize: '18px' }}
            />
          </Link>
        </>
      )}
    </>
  );
};

export default NavbarLink;
