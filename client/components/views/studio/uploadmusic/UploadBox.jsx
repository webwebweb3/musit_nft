import React, { useRef } from 'react';
import { Box } from '@mui/material';
import S3Upload from './s3upload/S3Upload';
import IPFSUpload from './ipfsupload/IPFSUpload';
import { style } from './uploadMusicStyle';

const UploadBox = ({
  account,
  selectedFile,
  setSelectedFile,
  setSelectedIPFSFile,
}) => {
  const S3UploadRef = useRef(null);

  return (
    <Box sx={style.leftSide}>
      <Box sx={style.S3UploadContainer}>
        <S3Upload
          account={account}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          S3UploarRef={S3UploadRef}
        />
      </Box>
      <Box sx={style.IPFSUploadContainer}>
        <IPFSUpload
          account={account}
          setSelectedIPFSFile={setSelectedIPFSFile}
        />
      </Box>
    </Box>
  );
};

export default UploadBox;
