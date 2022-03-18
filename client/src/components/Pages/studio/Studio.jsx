import { Box, Button } from '@mui/material';
import React from 'react';
import { mintMusicTokenContract } from '../../../contracts';
import { useSelector } from 'react-redux';
// import S3Upload from './uploadmusic/s3upload/S3Upload';
import { useLocation, useNavigate } from 'react-router-dom';

const Studio = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const artist = location.pathname.split('/')[2];

  const { userData } = useSelector(state => state.login);

  const account = userData.metamask;

  const onClickMint = async () => {
    try {
      if (!account) {
        window.alert('Please connect account');
        return;
      }
      const response = await mintMusicTokenContract.methods
        .mintMusicToken('abc')
        .send({ from: account });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box
      sx={{
        marginTop: '10px',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ width: '100%', height: '150px', backgroundColor: 'red' }}>
        profile background
      </Box>
      <Box
        sx={{
          width: '150px',
          height: '150px',
          backgroundColor: 'blue',
          color: 'white',
          margin: '0 auto',
          position: 'relative',
          top: '-60px',
        }}
      >
        profile Image
      </Box>
      <Box>
        {artist === userData.name ? (
          <Button
            sx={{
              position: 'relative',
              top: '-150px',
              float: 'right',
            }}
            onClick={() => navigate(`uploadmusic`)}
          >
            + Add Music NFT
          </Button>
        ) : (
          <div style={{ height: '36.5px' }}></div>
        )}
      </Box>
      {/* TODO: height 값 100%  */}
      <Box
        sx={{
          width: '100%',
          height: '1000px',
          backgroundColor: 'green',
          position: 'relative',
          top: '-60px',
          color: 'white',
        }}
      >
        Artist's Musics
        {/* {location.state.user} */}
      </Box>
    </Box>
  );
};

export default Studio;

// {
//   /* <FileUpload setUrl={setFileUrl} />
// FileUrl :{' '}
// <a href={fileUrl} target="_blank" rel="noopener noreferrer">
//   {fileUrl}
// </a>
// <Button onClick={onClickMint}>Mint</Button>
// <S3Upload account={account} /> */
// }
