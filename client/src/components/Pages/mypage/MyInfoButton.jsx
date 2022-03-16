import { Button } from '@mui/material';
import propTypes from 'prop-types';
import React from 'react';

const MyInfoButton = ({ value, func }) => {
  return (
    <>
      {value ? (
        <Button style={{ color: '#808080' }} onClick={func} variant="text">
          수정완료
        </Button>
      ) : (
        <Button style={{ color: '#808080' }} onClick={func} variant="text">
          수정하기
        </Button>
      )}
    </>
  );
};

MyInfoButton.prototype = {
  value: propTypes.bool.isRequired,
  func: propTypes.func.isRequired,
};

export default MyInfoButton;
