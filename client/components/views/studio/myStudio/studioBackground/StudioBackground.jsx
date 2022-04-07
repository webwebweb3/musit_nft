import { Box } from '@mui/material';
import Router from 'next/router';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { studioUploadBackground } from '../../../../../_request/studio_request';

const StudioBackground = () => {
  const dispatch = useDispatch();
  const hiddenFileInput = useRef(null);
  const studioOwner = Router.query.artistName;
  const { userData } = useSelector(state => state.user);
  const [backgroundImg, setBackgroundImg] = useState('default');

  const handleFileInput = e => {
    const file = e.target.files[0];
    const fileExt = file.name.split('.').pop();
    if (
      file.type === 'image/jpeg' ||
      fileExt === 'jpg' ||
      file.type === 'image/gif' ||
      fileExt === 'gif' ||
      file.type === 'image/png' ||
      fileExt === 'png'
    ) {
      setBackgroundImg(file);
      return;
    } else {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }
  };
  const uploadStudioBackground = async () => {
    dispatch(
      studioUploadBackground({
        selectedFile: backgroundImg,
        artistName: userData.name,
      }),
    );
  };

  useEffect(() => {
    if (backgroundImg !== 'default') {
      uploadStudioBackground();
      console.log('???');
    }
    console.log('?');
    console.log('bg?', backgroundImg);
  }, [backgroundImg]);

  const uploadStudioCoverBtn = () => {
    hiddenFileInput.current.click();
  };
  return (
    <Box>
      {/* <img
        src={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${studioOwner}`}
      ></img> */}
      <input
        id="uploadBtn"
        type="file"
        onChange={handleFileInput}
        ref={hiddenFileInput}
        style={{ display: 'none' }}
      />
      {userData.name === studioOwner && (
        <StudioCoverButton type="button" onClick={uploadStudioCoverBtn}>
          Upload Cover
        </StudioCoverButton>
      )}
    </Box>
  );
};

export default StudioBackground;

const StudioCoverButton = styled.button`
  margin-top: 10px;
  display: block;
  width: 150px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 15px;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  background: #274eff;
  position: absolute;
  right: 10px;
  top: 0px;
`;
