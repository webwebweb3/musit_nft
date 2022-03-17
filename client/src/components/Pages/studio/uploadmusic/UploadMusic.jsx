import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import S3Upload from './s3upload/S3Upload';
import IPFSUpload from './ipfsupload/IPFSUpload';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useInput } from '../../../../hooks/useInput';
import MenuItem from '@mui/material/MenuItem';
import TextFieldInput from './inputmusicdata/TextFieldInput';
import * as Util from './utils';

const currencies = Util.utilCurrencies;

const UploadMusic = () => {
  const user = useSelector(state => state.user);

  const [title, onChangeTitle] = useInput('');
  const [genre, onChangeGenre] = useInput('balad');
  const [stateValues, setStateValues] = useState({});

  console.log('state', stateValues);
  const account = user.loginSucces.userId;

  const onSubmitForm = async e => {
    e.preventDefault();
    let dataToSubmit = stateValues;
    //TODO: let request =
    await axios
      .post(`/api/uploadmusic`, dataToSubmit)
      .then(res => console.log(res.data));
  };
  return (
    <form onSubmit={onSubmitForm}>
      <Box sx={style.uploadMusicContainer}>
        <Box sx={style.leftSide}>
          <Box sx={style.S3UploadContainer}>
            <S3Upload account={account} />
          </Box>
          <Box sx={style.IPFSUploadContainer}>
            <IPFSUpload account={account} />
          </Box>
        </Box>
        <Box sx={style.rightSide}>
          <Box sx={style.inputMusicDataContainer}>
            <TextFieldInput label="타이틀" value={title} func={onChangeTitle} />
            <TextFieldInput
              label="아티스트"
              value={title}
              func={onChangeTitle}
            />
            <TextFieldInput label="앨범명" value={title} func={onChangeTitle} />
            <TextFieldInput
              label="발매년도"
              value={title}
              func={onChangeTitle}
            />
            <TextField
              id="music_genre"
              select
              label="Genre"
              value={genre}
              onChange={onChangeGenre}
              helperText="Please select music genre"
            >
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextFieldInput label="작곡가" value={title} func={onChangeTitle} />
            <TextFieldInput label="작사가" value={title} func={onChangeTitle} />
            {/* <InputMusicData
              account={account}
              stateValues={stateValues}
              onChange={value => setStateValues({ ...stateValues, ...value })}
            /> */}
          </Box>
          <Box sx={style.uploadMusicBtnContainer}>
            <Button type="submit" variant="text">
              등록하기
            </Button>
          </Box>
        </Box>
        <Box sx={{}}></Box>
      </Box>
    </form>
  );
};

export default UploadMusic;

const style = {
  uploadMusicContainer: {
    margin: '100px',
    marginTop: '140px',
    height: '100%',
    width: '960px',
    border: '1px solid black',
    display: 'flex',
  },

  leftSide: { margin: '0', padding: '0', flex: 1 },

  S3UploadContainer: {
    margin: '0',
    padding: '30px 30px 0 30px',
    height: '310px',
  },

  IPFSUploadContainer: { marginTop: '0', padding: '0 30px' },

  rightSide: { margin: '0', padding: '30px 30px 0 0', flex: 2 },

  inputMusicDataContainer: {},

  uploadMusicBtnContainer: { margin: '0', padding: '0' },
};
