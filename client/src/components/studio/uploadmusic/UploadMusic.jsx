import { Box } from '@mui/material';
import React from 'react';
import S3Upload from './s3upload/S3Upload';
import IPFSUpload from './ipfsupload/IPFSUpload';
import InputMusicData from './inputmusicdata/InputMusicData';
import { useSelector } from 'react-redux';

const UploadMusic = () => {
  const user = useSelector(state => state.user);
  const account = user.loginSucces.userId;
  return (
    <Box>
      <Box>
        <S3Upload account={account} />
      </Box>
      <Box>
        <IPFSUpload account={account} />
      </Box>
      <Box>
        <InputMusicData account={account} />
      </Box>
    </Box>
  );
};

export default UploadMusic;
