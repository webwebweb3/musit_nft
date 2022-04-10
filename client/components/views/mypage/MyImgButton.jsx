import { Button } from '@mui/material';
import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { userImgRequestAction } from '$reduxsaga/request/user_request';

const MyImgButton = () => {
  const dispatch = useDispatch();
  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, []);

  const onChangeImages = useCallback(
    e => {
      const imgData = e.target.files;
      console.log(imgData[0]);
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, f => {
        imageFormData.append('image', f);
      });
      dispatch(userImgRequestAction(imageFormData));
    },
    [dispatch],
  );

  return (
    <>
      <input
        type="file"
        name="image"
        hidden
        ref={imageInput}
        onChange={onChangeImages}
        style={{ width: '500px', height: '500px' }}
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
