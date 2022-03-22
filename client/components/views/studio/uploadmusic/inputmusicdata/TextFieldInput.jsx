import { TextField } from '@mui/material';
import { withStyles } from '@mui/styles';
import propTypes from 'prop-types';
import React from 'react';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

const TextFieldInput = ({ label, value, func, required, inputprops }) => {
  return (
    <>
      <CssTextField
        label={label}
        variant="standard"
        value={value}
        onChange={func}
        fullWidth
        sx={{
          display: 'block',
          margin: '1px',
          width: '420px',
          height: '80px',
          marginBottom: '10px',
          input: { color: 'white' },
          fontSize: '40px',
        }}
        color="secondary"
        required={required}
        inputProps={{ inputprops, style: { fontSize: 30 } }}
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
