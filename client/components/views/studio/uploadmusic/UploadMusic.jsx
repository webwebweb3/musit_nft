import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { mintMusicNFTRequestAction } from '../../../../_request/uploadMusic_request';
import { create } from 'ipfs-http-client';
import styled from 'styled-components';
import { style } from './uploadMusicStyle';
import { Box } from '@mui/material';

import UploadBox from './UploadBox';
import UploadContents from './UploadContents';

const client = create('https://ipfs.infura.io:5001/api/v0');

const UploadMusic = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const artist = router.query.artistName;
  const { userData } = useSelector(state => state.user);
  const [dataToSubmit, setDataToSubmit] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedIPFSFile, setSelectedIPFSFile] = useState(null);
  const account = userData.metamask;

  const ipfsredux = {
    client,
    file: selectedIPFSFile,
  };

  const minting = async e => {
    e.preventDefault();

    const mintToData = {
      dataToSubmit,
      ipfsredux,
      selectedFile,
      selectedIPFSFile,
      account,
    };

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
        <UploadBox
          account={account}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          setSelectedIPFSFile={setSelectedIPFSFile}
        />
        <Box sx={style.rightSide}>
          <UploadContents setData={setDataToSubmit} />

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
