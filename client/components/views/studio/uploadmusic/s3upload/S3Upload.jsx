import React, { useRef } from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import { style } from './style';

const AlbumCoverButton = styled.button`
  margin-top: 10px;
  display: block;
  width: 100%;
  height: 40px;
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

const S3Upload = props => {
  const hiddenFileInput = useRef(null);
  const selectedFile = props.selectedFile;

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
      props.setSelectedFile(file);
      return;
    } else {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }
  };

  const uploadAlbumCoverBtn = () => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <Box sx={selectedFile ? style.imgwrapper : style.wrapper}>
        <Box sx={style.image}>
          {selectedFile && (
            <img
              src={URL.createObjectURL(selectedFile)}
              style={{ objectFit: 'cover', width: '250px', height: '250px' }}
            />
          )}
        </Box>
        <Box sx={style.content}>
          <Box sx={style.text}>No file chosen, yet!</Box>
        </Box>
        <Box
          sx={style.cancelBtn}
          onClick={() => {
            props.setSelectedFile(null);
          }}
        >
          X
        </Box>
      </Box>
      <input
        id="uploadBtn"
        type="file"
        onChange={handleFileInput}
        ref={hiddenFileInput}
        style={{ display: 'none' }}
      />
      <AlbumCoverButton
        type="button"
        onClick={uploadAlbumCoverBtn}
        style={selectedFile ? { display: 'none' } : {}}
      >
        Upload ALBUM COVER
      </AlbumCoverButton>
    </>
  );
};

export default S3Upload;
