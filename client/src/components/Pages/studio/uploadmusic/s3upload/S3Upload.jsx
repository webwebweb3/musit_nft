import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Input } from '@mui/material';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client, S3 } from '@aws-sdk/client-s3';
import styled from 'styled-components';

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

const S3Upload = ({ func }) => {
  const hiddenFileInput = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

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
      setSelectedFile(file);
      return;
    } else {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }
  };

  const uploadAlbumCoverBtn = () => {
    hiddenFileInput.current.click();
  };

  useEffect(() => {}, [uploadedImage]);

  const upload = file => {
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
        leavePartsOnError: false, // optional manually handle dropped parts
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
    func(target.Key);
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
            setSelectedFile(null);
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
      {/* <FileUploader /> */}
      <AlbumCoverButton
        type="button"
        onClick={uploadAlbumCoverBtn}
        style={selectedFile ? { display: 'none' } : {}}
      >
        Upload ALBUM COVER
      </AlbumCoverButton>
      {/* <Button onClick={uploadAlbumCoverBtn}>Upload Album Cover</Button> */}
      <Button sx={style.uploadBtn} onClick={() => upload(selectedFile)}>
        Upload
      </Button>
      {uploadedImage && (
        <img
          src={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${uploadedImage}`}
        />
      )}
    </>
  );
};

export default S3Upload;

const style = {
  imgwrapper: {
    position: 'relative',
    height: '250px',
    width: '250px',
    border: 'none',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  wrapper: {
    position: 'relative',
    height: '250px',
    width: '250px',
    border: '2px dashed #c2cdda',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '20px',
    fontWeight: '500',
    color: '#5b5b7b',
  },
  cancelBtn: [
    {
      position: 'absolute',
      fontSize: '20px',
      right: '15px',
      top: '15px',
      color: '#9658fe',
      cursor: 'pointer',
      fontWeight: '600',
      // display: 'none',
    },
    {
      '&:hover': {
        color: 'red',
      },
    },
  ],
  fileName: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    padding: '8px 0',
    fontSize: '18px',
    color: 'black',
    // display: 'none',
  },
  uploadBtn: {
    marginTop: '30px',
    display: 'block',
    width: '100%',
    height: '50px',
    border: 'none',
    outline: 'none',
    borderRadius: '25px',
    color: '#fff',
    fontSize: '18px',
    fontWeight: '500',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    // background: 'linear-gradient(135deg, #3a8ffe 0%, #9658fe 100%)',
  },
};
