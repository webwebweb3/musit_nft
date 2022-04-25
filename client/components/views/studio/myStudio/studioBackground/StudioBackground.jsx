import { Box } from '@mui/material';
import Router, { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { studioUploadBackground } from '$reduxsaga/request/studio_request';

const StudioBackground = ({ background }) => {
  const router = useRouter();
  let { artistName } = router.query;
  const dispatch = useDispatch();
  const hiddenFileInput = useRef(null);
  const studioOwner = Router.query.artistName;
  const { userData } = useSelector(state => state.user);
  const studio = useSelector(state => state.studio);

  const [backgroundImg, setBackgroundImg] = useState(background);
  const [isSelected, setIsSelected] = useState(false);

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
      setIsSelected(true);
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
        metamask: userData.metamask,
      }),
    );
  };

  useEffect(() => {
    if (isSelected) {
      uploadStudioBackground();
    }
    if (studio.uploadBackgroundDone) {
      Router.push(`/studio/${artistName}`);
    }
  }, [isSelected, backgroundImg]);

  const uploadStudioCoverBtn = () => {
    hiddenFileInput.current.click();
  };
  return (
    <Box>
      {background === 'defaultBackground' || background === undefined ? (
        <img
          src="/defaultBackground.jpg"
          alt="default Background"
          width={'100%'}
        />
      ) : (
        <>
          <img
            src={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/background/${artistName}_${background}`}
            width={'100%'}
          />
          {console.log('mmmmmmmmmmmm', artistName)}
        </>
      )}

      <input
        id="uploadBtn"
        type="file"
        onChange={handleFileInput}
        ref={hiddenFileInput}
        style={{ display: 'none' }}
      />
      {userData?.name === studioOwner && (
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
  &:hover {
    background-color: '#1b36b2',
  },
`;
