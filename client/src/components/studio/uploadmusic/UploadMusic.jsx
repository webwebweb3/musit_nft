import { Box } from '@mui/material';
import React from 'react';
import S3Upload from './s3upload/S3Upload';
import IPFSUpload from './ipfsupload/IPFSUpload';

const UploadMusic = () => {
  return (
    <Box>
      <Box>
        <IPFSUpload />
      </Box>
      <Box>
        <S3Upload />
      </Box>
    </Box>
  );
};

export default UploadMusic;
