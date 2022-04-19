import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import LoadingIcons from '$components/views/loadingicons/LoadingIcons';

const UploadingMusic = () => {
  const s3 = useSelector(state => state.s3);
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
            {s3.S3UploadDone ? (
              <>
                {s3.IPFSUploadDone ? (
                  <>
                    <div>
                      <Image
                        src="/nft.gif"
                        alt="Album Cover"
                        width="400px"
                        height="400px"
                      />
                    </div>
                    <div style={{ fontSize: '30px' }}>
                      블록에 내 음악 올리는 중..
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Image
                        src="/ipfsuploading.gif"
                        alt="Album Cover"
                        width="400px"
                        height="400px"
                      />
                    </div>
                    <div style={{ fontSize: '20px' }}>음악 올리는 중..</div>
                  </>
                )}
              </>
            ) : (
              <>
                <div>
                  <Image
                    src="/imageuploading.gif"
                    alt="Album Cover"
                    width="400px"
                    height="400px"
                  />
                </div>
                <div style={{ fontSize: '20px' }}>앨범 카버 올리는 중..</div>
              </>
            )}
          </div>
          <LoadingIcons />
        </div>
      </div>
    </div>
  );
};

export default UploadingMusic;
