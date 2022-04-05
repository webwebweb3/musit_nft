import React from 'react';
import propTypes from 'prop-types';
import { TextField } from '@mui/material';
import {
  GlobalAppointment,
  StyledFormControl,
  StyledFormHelperText,
} from '../style';

const AuctionAppointment = ({ text, value, func, uint }) => {
  return (
    <>
      <GlobalAppointment />
      <StyledFormControl focused variant="outlined">
        <StyledFormHelperText id="outlined-weight-helper-text">
          {text}
        </StyledFormHelperText>
        <TextField
          id="datetime-local"
          type="datetime-local"
          value={value}
          onChange={func}
          focused
          sx={{ width: '500px', color: 'white' }}
          InputLabelProps={{
            shrink: true,
            sx: { color: 'white' },
          }}
        />
      </StyledFormControl>
    </>
  );
};

AuctionAppointment.propTypes = {
  text: propTypes.string.isRequired,
  value: propTypes.string,
  func: propTypes.func,
  uint: propTypes.string,
};

export default AuctionAppointment;
