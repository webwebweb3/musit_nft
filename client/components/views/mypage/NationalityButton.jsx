import { Button } from '@mui/material';
import propTypes from 'prop-types';
import React from 'react';

const NationalityButton = ({ value, func }) => {
  return (
    <>
      {value ? (
        <Button
          style={{ marginLeft: '30px', color: '#808080' }}
          onClick={func}
          variant="text"
        >
          수정완료
        </Button>
      ) : (
        <Button
          style={{ marginLeft: '30px', color: '#808080' }}
          onClick={func}
          variant="text"
        >
          수정하기
        </Button>
      )}
    </>
  );
};

NationalityButton.prototype = {
  value: propTypes.bool.isRequired,
  func: propTypes.func.isRequired,
};

export default NationalityButton;
