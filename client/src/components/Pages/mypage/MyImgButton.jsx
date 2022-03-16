import { Button } from '@mui/material';
import React, { useCallback, useRef } from 'react';

const MyImgButton = () => {
  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, []);

  const onChangeImages = useCallback(e => {
    const imgData = e.target.files;
    console.log(imgData[0]);
  }, []);

  return (
    <>
      <input
        type="file"
        name="image"
        hidden
        ref={imageInput}
        onChange={onChangeImages}
      />
      <Button
        style={{ color: '#808080' }}
        onClick={onClickImageUpload}
        variant="text"
      >
        프로필 수정하기
      </Button>
    </>
  );
};

export default MyImgButton;
