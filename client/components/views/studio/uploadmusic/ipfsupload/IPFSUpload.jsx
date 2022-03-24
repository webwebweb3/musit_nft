import { useRef } from 'react';

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

const IPFSUpload = ({ setSelectedIPFSFile }) => {
  const hiddenIPSFileInput = useRef(null);

  const handleMusicInput = e => {
    const file = e.target.files[0];
    const fileExt = file.name.split('.').pop();
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
      setSelectedIPFSFile(file);
      return;
    } else {
      alert('음악 파일만 업로드 가능합니다.');
      return;
    }
  };

  const onChange = () => {
    hiddenIPSFileInput.current.click();
  };

  return (
    <div className="App">
      <input
        ref={hiddenIPSFileInput}
        type="file"
        onChange={handleMusicInput}
        style={{ display: 'none' }}
      />
      <IPFSUploadButton type="button" onClick={onChange}>
        MUSIC UPLOAD
      </IPFSUploadButton>
    </div>
  );
};
export default IPFSUpload;
