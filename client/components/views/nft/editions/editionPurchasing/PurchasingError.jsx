import LoadingIcons from '$components/views/loadingicons/LoadingIcons';
import { Button } from '@mui/material';
import Image from 'next/image';
import Router from 'next/router';
import React from 'react';

const PurchasingError = () => {
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
                  src="/minterror.png"
                  alt="Complete Minting"
                  width="460px"
                  height="460px"
                />
              </div>
              <div style={{ fontSize: '30px' }}>
                에러 발생.. 다시 시도해주세요..
              </div>
              <div>
                <Button sx={{ color: 'white' }} onClick={() => Router.reload()}>
                  새로고침
                </Button>
              </div>
              <LoadingIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasingError;
