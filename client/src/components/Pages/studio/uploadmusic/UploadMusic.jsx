import { Box, Button, TextField } from '@mui/material';
import { withStyles } from '@mui/styles';
import React, { useRef, useState } from 'react';
import S3Upload from './s3upload/S3Upload';
import IPFSUpload from './ipfsupload/IPFSUpload';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useInput } from '../../../../hooks/useInput';
import MenuItem from '@mui/material/MenuItem';
import TextFieldInput from './inputmusicdata/TextFieldInput';
import { useLocation } from 'react-router-dom';
import * as Util from './utils';
import { mintMusicTokenContract } from '../../../../contracts';
import styled from 'styled-components';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client, S3 } from '@aws-sdk/client-s3';

const UploadMusic = () => {
  const location = useLocation();
  const artist = location.pathname.split('/')[2];
  const S3UploadRef = useRef(null);

  const { userData } = useSelector(state => state.user);

  const [title, onChangeTitle] = useInput('');
  const [albumName, onChangeAlbumName] = useInput('');
  const [genre, onChangeGenre] = useInput('balad');
  const [release, onChangeRelease] = useInput('');
  const [songwriter, onChangeSongwriter] = useInput('');
  const [lyricist, onChangeLyricist] = useInput('');
  const [IPFSUrl, setIPFSUrl] = useState('');
  const [S3AlbumCover, setS3AlbumCover] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const account = userData.metamask;

  const uploadToS3 = file => {
    console.log('1', file);
    const myFile = file;
    const fileName = `${Date.now()}_${myFile.name}`;

    const target = {
      Bucket: 'webwebweb3',
      Key: `upload/${fileName}`,
      Body: myFile,
    };
    const creds = {
      accessKeyId: process.env.REACT_APP_AWS_S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_S3_SECRET_ACCESS_KEY,
    };

    try {
      const parallelUploads3 = new Upload({
        client:
          new S3({ region: 'ap-northeast-2', credentials: creds }) ||
          new S3Client({}),
        partSize: 10485760,
        leavePartsOnError: false,
        params: target,
      });

      parallelUploads3.on('httpUploadProgress', progress => {
        console.log(progress);
      });
      parallelUploads3.done();
      // setUploadedImage(fileName);
    } catch (e) {
      console.error(e);
    }
    setS3AlbumCover(target.Key);
  };

  const minting = async e => {
    e.preventDefault();
    uploadToS3(selectedFile);
    if (userData.name !== artist) {
      alert('This user is not that artist');
      return;
    }
    try {
      const dataToSubmit = {
        userName: userData.name,
        title,
        artist,
        albumName,
        genre,
        release,
        songwriter,
        lyricist,
      };

      let jsonData = {
        title: 'musit NFT',
        description: 'This data is for minting a NFT.',
        type: 'object',
        properties: {
          dataToSubmit,
          IPFSUrl: IPFSUrl,
          S3AlbumCover: S3AlbumCover,
        },
      };

      const mintingData = JSON.stringify(jsonData);

      const response = await mintMusicTokenContract.methods
        .mintMusicToken(mintingData)
        .send({ from: account });

      if (response.status) {
        const uploadToServer = async e => {
          try {
            await axios.post(`/uploadmusic`, dataToSubmit).then(res => {
              if (res.data.uploadSuccess === 'true') {
                console.log('good');
              } else if (res.data.uploadSuccess !== 'empty') {
                alert(res.data.message);
              } else if (res.data.uploadSuccess !== 'emptyIPFS') {
                alert(res.data.message);
              } else if (res.data.uploadSuccess !== 'emptyS3AlbumCover') {
                alert(res.data.message);
              } else {
                alert(res.data.message);
              }
            });
          } catch (error) {
            console.error(error);
          }
        };
        uploadToServer();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={minting}>
      <Box sx={style.uploadMusicContainer}>
        <Box sx={style.leftSide}>
          <Box sx={style.S3UploadContainer}>
            <S3Upload
              account={account}
              selectedFile={selectedFile}
              setS3AlbumCover={setS3AlbumCover}
              setSelectedFile={setSelectedFile}
              S3UploarRef={S3UploadRef}
            />
          </Box>
          <Box sx={style.IPFSUploadContainer}>
            <IPFSUpload account={account} func={setIPFSUrl} />
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
        <Box sx={{}}></Box>
      </Box>
    </form>
  );
};

export default UploadMusic;

/*********************** 
 
// style

***********************/
const style = {
  uploadMusicContainer: {
    margin: '100px',
    marginTop: '140px',
    height: '100%',
    width: '960px',

    display: 'flex',
  },

  leftSide: { margin: '0', padding: '0', flex: 1 },

  S3UploadContainer: {
    margin: '0',
    padding: '30px 30px 0 30px',
    height: '304px',
  },

  IPFSUploadContainer: { marginTop: '0', padding: '0 30px' },

  rightSide: { margin: '0', padding: '10px 0 0 40px', flex: 2 },

  inputMusicDataContainer: {},

  uploadMusicBtnContainer: { margin: '0', padding: '0' },
};

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
