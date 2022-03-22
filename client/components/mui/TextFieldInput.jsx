import { TextField } from '@mui/material';
import propTypes from 'prop-types';
import React from 'react';

const TextFieldInput = ({ label, value, func }) => {
  return (
    <>
      <TextField
        label={label}
        variant="outlined"
        value={value}
        onChange={func}
        fullWidth
        sx={{ display: 'block', margin: '1px', width: '320px' }}
      />
    </>
  );
};

TextFieldInput.prototype = {
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  func: propTypes.func.isRequired,
};

export default TextFieldInput;
