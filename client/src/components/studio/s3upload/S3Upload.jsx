import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client, S3 } from '@aws-sdk/client-s3';

const S3Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

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

  const upload = file => {
    const myFile = file;

    const target = {
      Bucket: 'webwebweb3',
      Key: 'upload/' + myFile.name,
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
        setTimeout(() => {
          setSelectedFile(null);
        }, 2000);
      });

      parallelUploads3.done();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <input type="file" onChange={handleFileInput} />
      <Button onClick={() => upload(selectedFile)}>Upload</Button>
    </>
  );
};

export default S3Upload;
