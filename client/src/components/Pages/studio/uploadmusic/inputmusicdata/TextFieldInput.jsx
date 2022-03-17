import { TextField } from '@mui/material';
import propTypes from 'prop-types';
import React from 'react';

const TextFieldInput = ({ label, value, func, required, inputProps }) => {
  return (
    <>
      <TextField
        label={label}
        variant="standard"
        value={value}
        onChange={func}
        fullWidth
        sx={{
          display: 'block',
          margin: '1px',
          width: '520px',
          marginBottom: '10px',
        }}
        required={required}
        inputProps={inputProps}
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
