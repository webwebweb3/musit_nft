import React from 'react';
import Link from 'next/link';
import propTypes from 'prop-types';
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
        <Link href={`/auction/${link}`}>
          <StyledButton variant="contained">{text}</StyledButton>
        </Link>
      )}
    </>
  );
};

AuctionButton.propTypes = {
  text: propTypes.string.isRequired,
  func: propTypes.func,
  link: propTypes.string,
};

export default AuctionButton;
