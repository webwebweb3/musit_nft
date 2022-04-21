import LoadingIcons from '$components/views/loadingicons/LoadingIcons';
import Image from 'next/image';
import React from 'react';

const UploadEnd = () => {
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
              <div style={{ fontSize: '30px' }}>NFT 생성 완료!</div>
            </div>
            <LoadingIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadEnd;
