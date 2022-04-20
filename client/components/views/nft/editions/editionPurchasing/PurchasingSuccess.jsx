import LoadingIcons from '$components/views/loadingicons/LoadingIcons';
import { ListItemIcon } from '@mui/material';
import { LibraryMusic } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';

const PurchasingSuccess = () => {
  return (
    <div>
      <div>
        <div className="uploadBlur">
          <div
            style={{
              fontSize: '50px',
              color: '#fff',
              display: 'flex',
              margin: '0 auto',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                height: '500px',
                margin: '150px auto 0',
                textAlign: 'center',
              }}
            >
              <div>
                <Image
                  src="/completemint.png"
                  alt="Complete Minting"
                  width="360px"
                  height="360px"
                />
              </div>
              <div style={{ fontSize: '30px' }}>구매 완료!</div>
              <ListItemIcon>
                <LibraryMusic fontSize="small" />
              </ListItemIcon>
              My NFT
            </div>
            <LoadingIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasingSuccess;
