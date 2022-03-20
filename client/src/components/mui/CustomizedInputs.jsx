import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import propTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  .MuiInputBase-input {
    width: 80% !important;
  }
`;

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const CustomizedInputs = ({ label, read, value, func }) => {
  return (
    <>
      <Global />
      <Box
        component="form"
        noValidate
        sx={{
          display: 'inline-block',
          width: '450px',
          marginBottom: '20px',
        }}
      >
        <FormControl sx={{ margin: 0 }} variant="standard">
          <InputLabel
            sx={{ color: '#fff', fontWeight: 'bold', fontSize: '20px' }}
            shrink
            htmlFor="bootstrap-input"
          >
            {label}
          </InputLabel>
          {read ? (
            <BootstrapInput
              defaultValue={value}
              sx={{ fontSize: '20px', width: '480px' }}
              readOnly
              id="bootstrap-input"
            />
          ) : (
            <BootstrapInput
              placeholder={value}
              sx={{ fontSize: '20px', width: '480px' }}
              onChange={func}
              id="bootstrap-input"
            />
          )}
        </FormControl>
      </Box>
    </>
  );
};

CustomizedInputs.prototype = {
  label: propTypes.string.isRequired,
  read: propTypes.bool.isRequired,
  value: propTypes.func.isRequired,
};

export default CustomizedInputs;
