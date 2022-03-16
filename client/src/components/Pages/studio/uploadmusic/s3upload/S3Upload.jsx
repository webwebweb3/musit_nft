import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Input } from '@mui/material';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client, S3 } from '@aws-sdk/client-s3';

const S3Upload = ({ account }) => {
  const inputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileInput = e => {
    const file = e.target.files[0];
    console.log(file);
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
  const reset = () => {
    console.log('1', inputRef.current.value);
    console.log('2', inputRef.current.focus());
    console.log('3', inputRef.current.value);
    console.log('4', inputRef.current.value);
    inputRef.current.value = '';
    console.log(selectedFile);
  };

  useEffect(() => {
    setTimeout(() => {}, 3000);
  }, [uploadedImage]);

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
      console.log(e);
    }
  };
  return (
    <>
      <Box sx={style.wrapper}>
        <Box sx={style.image}>
          {selectedFile && (
            <img
              src={URL.createObjectURL(selectedFile)}
              style={{ objectFit: 'cover' }}
            />
          )}
        </Box>
        <Box sx={style.content}>
          <Box sx={style.text}>No file chosen, yet!</Box>
        </Box>
        <Box
          sx={style.cancelBtn}
          onClick={() => {
            reset();
            setSelectedFile(null);
          }}
        >
          X
        </Box>
        <Box sx={style.fileName}>File name here</Box>
      </Box>
      <Input
        id="uploadBtn"
        type="file"
        onChange={handleFileInput}
        ref={inputRef}
      />
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
  wrapper: {
    position: 'relative',
    height: '260px',
    width: '100%',
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
