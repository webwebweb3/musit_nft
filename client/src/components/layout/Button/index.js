import React, { useMemo } from 'react';
import { Button } from '@mui/material';
import { useHover } from '../../../hooks/useHover';

const RegisterButton = ({ value, func }) => {
  const [isHovering, onMouseOverFunc, onMouseOutFunc] = useHover(false);

  const colorWhite = useMemo(
    () => ({
      color: '#FFFFFF',
    }),
    [],
  );

  const colorGreen = useMemo(
    () => ({
      color: '#808080',
    }),
    [],
  );

  return (
    <>
      <Button
        onMouseOver={onMouseOverFunc}
        onMouseOut={onMouseOutFunc}
        style={isHovering ? colorGreen : colorWhite}
        variant="text"
        onClick={func}
      >
        {value}
      </Button>
    </>
  );
};

export default RegisterButton;
