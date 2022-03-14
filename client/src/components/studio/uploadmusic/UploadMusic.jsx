import { Box, Button } from '@mui/material';
import React from 'react';
import S3Upload from './s3upload/S3Upload';
import IPFSUpload from './ipfsupload/IPFSUpload';
import InputMusicData from './inputmusicdata/InputMusicData';
import { useSelector } from 'react-redux';
import axios from 'axios';

const UploadMusic = () => {
  const user = useSelector(state => state.user);
  const account = user.loginSucces.userId;

  const onSubmitForm = async e => {
    e.preventDefault();
    let dataToSubmit = {
      a: 'a',
    };
    //TODO: let request =
    await axios
      .post(`/api/uploadmusic`, dataToSubmit)
      .then(res => console.log(res.data));
  };
  return (
    <Box>
      <form onSubmit={onSubmitForm}>
        <Box>
          <S3Upload account={account} />
        </Box>
        <Box>
          <IPFSUpload account={account} />
        </Box>
        <Box>
          <InputMusicData account={account} />
        </Box>
        <Box>
          <Button type="submit" variant="text">
            등록하기
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UploadMusic;
