import { Box, Button } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { mintMusicTokenContract } from '../../../contracts';
// import S3Upload from './uploadmusic/s3upload/S3Upload';

const Studio = () => {
  // const location = useLocation();
  const router = useRouter();
  let { artistName } = router.query;

  const { userData } = useSelector(state => state.user);
  console.log(userData);
  if (userData === null) {
    alert('로그인 해주세요');
    Router.push('/');
    return null;
  }
  const account = userData.metamask;

  const onClickMint = async () => {
    try {
      if (!account) {
        alert('Please connect account');
        return;
      }
      const response = await mintMusicTokenContract.methods
        .mintMusicToken('abc')
        .send({ from: account });
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {}, []);

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
        {artistName === userData.name ? (
          <Button
            sx={{
              position: 'relative',
              top: '-150px',
              float: 'right',
            }}
          >
            <Link href={`${artistName}/uploadmusic`}>+ Add Music NFT</Link>
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
