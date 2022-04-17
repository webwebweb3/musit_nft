import React, { useState } from 'react';
import { Button } from '@mui/material';

const ControlsToggleButton = ({ type, defaultIcon, changeIcon, onClicked }) => {
  const [buttonType, setButton] = useState(false);

  function handleChange() {
    if (type === 'prev' || type === 'next') {
      setButton(true);
      onClicked(type, true);
    } else {
      setButton(!buttonType);
      onClicked(type, !buttonType);
    }
  }

  return (
    <Button style={{ color: '#fff' }} onClick={handleChange}>
      {!buttonType ? defaultIcon : changeIcon}
    </Button>
  );
};

export default ControlsToggleButton;
