import { useState } from 'react';
import { create } from 'ipfs-http-client';
import { Button } from '@mui/material';
import ReactAudioPlayer from 'react-audio-player';

const client = create('https://ipfs.infura.io:5001/api/v0');

const IPFSUpload = () => {
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
      <input type="file" onChange={handleMusicInput} />
      <Button onClick={onChange1}>IPFS 업로드</Button>
      {fileUrl && <ReactAudioPlayer src={fileUrl} controls />}
    </div>
  );
};
export default IPFSUpload;
