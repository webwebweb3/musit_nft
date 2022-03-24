import React, { useMemo } from 'react';
import { Button } from '@mui/material';

const RegisterButton = () => {
  const style = useMemo(
    () => ({
      color: '#808080',
      marginTop: '8px',
    }),
    [],
  );
  return (
    <>
      <Button style={style} type="submit" variant="text">
        가입하기
      </Button>
    </>
  );
};

export default RegisterButton;
