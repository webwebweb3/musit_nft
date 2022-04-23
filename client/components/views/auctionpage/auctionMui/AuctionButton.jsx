import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { StyledButton } from '../style';

const AuctionButton = ({ text, func, link }) => {
  return (
    <>
      {func && (
        <StyledButton onClick={func} variant="contained">
          {text}
        </StyledButton>
      )}
      {link && (
        <Link href={`/${link}`}>
          <StyledButton variant="contained">{text}</StyledButton>
        </Link>
      )}
    </>
  );
};

AuctionButton.propTypes = {
  text: PropTypes.string.isRequired,
  func: PropTypes.func,
  link: PropTypes.string,
};

export default AuctionButton;
