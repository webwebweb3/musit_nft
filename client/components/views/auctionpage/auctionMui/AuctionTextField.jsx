import React from 'react';
import PropTypes from 'prop-types';
import { InputAdornment } from '@mui/material';
import {
  GlobalTextField,
  StyledFormControl,
  StyledFormHelperText,
  StyledOutlinedInput,
} from '../style';

const AuctionTextField = ({ text, uint, ...rest }) => {
  return (
    <>
      <GlobalTextField />
      <StyledFormControl focused variant="outlined">
        <StyledFormHelperText id="outlined-weight-helper-text">
          {text}
        </StyledFormHelperText>
        <StyledOutlinedInput
          id="outlined-adornment-weight"
          {...rest}
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
  uint: PropTypes.string,
};

export default AuctionTextField;
