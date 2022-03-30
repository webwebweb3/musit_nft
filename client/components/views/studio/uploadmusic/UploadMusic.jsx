import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import S3Upload from './s3upload/S3Upload';
import IPFSUpload from './ipfsupload/IPFSUpload';
import { mintMusicNFTRequestAction } from '../../../../_actions/uploadMusic_actions';
import { useInput } from '../../../../hooks/useInput';
import TextFieldInput from './inputmusicdata/TextFieldInput';
import { create } from 'ipfs-http-client';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { style } from './uploadMusicStyle';
import { Box, TextField } from '@mui/material';
import { withStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';
import * as Util from './utils';

const client = create('https://ipfs.infura.io:5001/api/v0');

const UploadMusic = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const artist = router.query.artistName;
  const S3UploadRef = useRef(null);

  const { userData } = useSelector(state => state.user);

  const [title, onChangeTitle] = useInput('');
  const [albumName, onChangeAlbumName] = useInput('');
  const [genre, onChangeGenre] = useInput('balad');
  const [release, onChangeRelease] = useInput('');
  const [songwriter, onChangeSongwriter] = useInput('');
  const [lyricist, onChangeLyricist] = useInput('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedIPFSFile, setSelectedIPFSFile] = useState(null);

  const account = userData.metamask;

  const ipfsredux = {
    client,
    file: selectedIPFSFile,
  };

  const dataToSubmit = {
    userName: userData.name,
    title,
    artist,
    albumName,
    genre,
    release,
    songwriter,
    lyricist,
    account,
    createdAt: Date.now(),
  };

  const mintToData = {
    dataToSubmit,
    ipfsredux,
    selectedFile,
    selectedIPFSFile,
    account,
  };

  const minting = async e => {
    e.preventDefault();
    dispatch(mintMusicNFTRequestAction(mintToData));
    if (userData.name !== artist) {
      alert('This user is not that artist');
      return;
    }
  };
  useEffect(() => {}, []);

  return (
    <form onSubmit={minting}>
      <Box sx={style.uploadMusicContainer}>
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
        <Box sx={style.rightSide}>
          <Box sx={style.inputMusicDataContainer}>
            <TextFieldInput
              label="타이틀"
              value={title}
              func={onChangeTitle}
              required={true}
            />
            <TextFieldInput
              label="아티스트"
              value={artist}
              required={true}
              inputprops={{ readOnly: true }}
            />
            <TextFieldInput
              label="앨범명"
              value={albumName}
              func={onChangeAlbumName}
            />
            <CssTextField
              variant="standard"
              id="music_genre"
              select
              label="장르"
              value={genre}
              onChange={onChangeGenre}
              sx={{
                width: '200px',
                margin: '10px 0',
                color: 'white',
                fontSize: '40px',
              }}
            >
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </CssTextField>
            <TextFieldInput
              label="발매년도"
              value={release}
              func={onChangeRelease}
            />
            <TextFieldInput
              label="작곡가"
              value={songwriter}
              func={onChangeSongwriter}
            />
            <TextFieldInput
              label="작사가"
              value={lyricist}
              func={onChangeLyricist}
            />
          </Box>
          <Box sx={style.uploadMusicBtnContainer}>
            <UploadButton type="submit" variant="text">
              등록하기
            </UploadButton>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default UploadMusic;

/*********************** 
 
// style

***********************/

const UploadButton = styled.button`
  margin-top: 10px;
  display: block;
  width: 200px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  background: linear-gradient(135deg, #3a8ffe 0%, #9658fe 100%);
`;

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
    '& .MuiInput-root': {
      color: 'white',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);
const currencies = Util.utilCurrencies;
