import { useState } from 'react';
import { create } from 'ipfs-http-client';
import { Button } from '@mui/material';
const client = create('https://ipfs.infura.io:5001/api/v0');

const IPFSUpload = () => {
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [fileUrl, updateFileUrl] = useState(``);

  const handleMusicInput = e => {
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
      setSelectedMusic(file);
      return;
    } else {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }
  };

  const onChange = async e => {
    const file = e.target.files[0];
    try {
      console.log(file);
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
      console.log(fileUrl);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  };

  return (
    <div className="App">
      <h1>IPFS Example</h1>
      <input type="file" onChange={handleMusicInput} />
      <Button onClick={() => onChange}>IPFS 업로드</Button>
      {fileUrl && <img src={fileUrl} width="600px" />}
    </div>
  );
};
export default IPFSUpload;
