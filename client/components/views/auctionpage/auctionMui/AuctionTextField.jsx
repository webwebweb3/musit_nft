import React from 'react';
import propTypes from 'prop-types';
import { StyledTextField } from '../style';

const AuctionTextField = ({ text, value, func }) => {
  return (
    <>
      <StyledTextField
        label={text}
        variant="outlined"
        value={value}
        onChange={func}
        fullWidth
      />
    </>
  );
};

AuctionTextField.propTypes = {
  text: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  func: propTypes.func.isRequired,
};

export default AuctionTextField;
