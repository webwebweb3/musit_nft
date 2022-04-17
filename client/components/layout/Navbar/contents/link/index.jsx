import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Gavel, Headset, Storefront, Token } from '@mui/icons-material';
import { Tab } from '@mui/material';

const NavbarLink = () => {
  const router = useRouter();
  let { pathname } = router;
  const [linkDisabled, setLinkDisabled] = useState('');

  useEffect(() => {
    let pathArray = `${pathname}`.split('/');
    setLinkDisabled(pathArray[pathArray.length - 1]);
  }, [pathname]);

  return (
    <>
      {pathname.includes('/nft') ? (
        <Link href="/streaming">
          <Tab
            disabled={linkDisabled.includes('streaming')}
            icon={<Headset />}
            iconPosition="start"
            label=""
            sx={{ fontSize: '0', marginRight: '-20px' }}
          />
        </Link>
      ) : (
        <Link href="/streaming">
          <Tab
            disabled={linkDisabled.includes('streaming')}
            icon={<Headset />}
            iconPosition="start"
            label="STREAMING"
            sx={{ fontSize: '18px', marginRight: '10px' }}
          />
        </Link>
      )}
      <Link href="/nft">
        <Tab
          disabled={linkDisabled.includes('nft')}
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
              disabled={linkDisabled.includes('marketplace')}
              icon={<Storefront />}
              iconPosition="start"
              label="MarketPlace"
              sx={{ fontSize: '18px' }}
            />
          </Link>
          <Link href="/nft/auction">
            <Tab
              disabled={linkDisabled.includes('auction')}
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
