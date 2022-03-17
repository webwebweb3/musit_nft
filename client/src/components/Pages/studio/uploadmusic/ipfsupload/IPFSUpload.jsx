import { useRef, useState } from 'react';
import { create } from 'ipfs-http-client';
import { Button } from '@mui/material';
import ReactAudioPlayer from 'react-audio-player';
import styled from 'styled-components';

const IPFSUploadButton = styled.button`
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

const client = create('https://ipfs.infura.io:5001/api/v0');

const IPFSUpload = () => {
  const hiddenIPSFileInput = useRef(null);
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [fileUrl, updateFileUrl] = useState(``);

  const handleMusicInput = e => {
    const file = e.target.files[0];
    const fileExt = file.name.split('.').pop();
    console.log(file);
    if (
      file.type === 'audio/mpeg' ||
      fileExt === 'mp3' ||
      file.type === 'audio/mp4' ||
      fileExt === 'mp4' ||
      file.type === 'audio/wav' ||
      fileExt === 'wav' ||
      file.type === 'audio/flac' ||
      fileExt === 'flac'
    ) {
      setSelectedMusic(file);
      return;
    } else {
      alert('음악 파일만 업로드 가능합니다.');
      return;
    }
  };

  const onChange = () => {
    hiddenIPSFileInput.current.click();
  };
  const onChange1 = async () => {
    console.log('1');
    try {
      console.log(selectedMusic);
      const added = await client.add(selectedMusic);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
      console.log(fileUrl);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  };

  return (
    <div className="App">
      <input
        ref={hiddenIPSFileInput}
        type="file"
        onChange={handleMusicInput}
        style={{ display: 'none' }}
      />
      <IPFSUploadButton onClick={onChange}>MUSIC UPLOAD</IPFSUploadButton>
      <Button
        sx={{
          backgroundColor: '#aaa',
          borderRadius: '20px',
          color: '#fff',
          margin: '10px auto',
          float: 'right',
        }}
        onClick={onChange1}
      >
        Upload to IPFS
      </Button>
      {fileUrl && <ReactAudioPlayer src={fileUrl} controls />}
    </div>
  );
};
export default IPFSUpload;
