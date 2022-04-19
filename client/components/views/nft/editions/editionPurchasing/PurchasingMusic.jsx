import React from 'react';
import Image from 'next/image';
import LoadingIcons from '$components/views/loadingicons/LoadingIcons';

const PurchasingMusic = () => {
  return (
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
            <>
              <div>
                <Image
                  src="/purchasing.gif"
                  alt="Album Cover"
                  width="400px"
                  height="400px"
                />
              </div>
              <div style={{ fontSize: '30px' }}>NFT 구매 중..</div>
            </>
          </div>
          <LoadingIcons />
        </div>
      </div>
    </div>
  );
};

export default PurchasingMusic;
