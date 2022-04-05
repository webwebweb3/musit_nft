import React from 'react';
import PropTypes from 'prop-types';
import { InputAdornment } from '@mui/material';
import {
  GlobalTextField,
  StyledFormControl,
  StyledFormHelperText,
  StyledOutlinedInput,
} from '../style';

const AuctionTextField = ({ text, value, func, uint }) => {
  return (
    <>
      <GlobalTextField />
      <StyledFormControl focused variant="outlined">
        <StyledFormHelperText id="outlined-weight-helper-text">
          {text}
        </StyledFormHelperText>
        <StyledOutlinedInput
          id="outlined-adornment-weight"
          value={value}
          onChange={func}
          endAdornment={
            <InputAdornment position="end">
              <span style={{ color: '#dada' }}>{uint}</span>
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
            style: { color: '#dada' },
          }}
        />
      </StyledFormControl>
    </>
  );
};

AuctionTextField.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  uint: PropTypes.string,
};

export default AuctionTextField;
