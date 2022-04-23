import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import {
  GlobalAppointment,
  StyledFormControl,
  StyledFormHelperText,
} from '../style';

const AuctionAppointment = ({ text, value, func }) => {
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
  text: PropTypes.string.isRequired,
  value: PropTypes.string,
  func: PropTypes.func,
};

export default AuctionAppointment;
