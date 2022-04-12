import React from 'react';
import PropTypes from 'prop-types';

const MyNotice = ({ NoticeArray }) => {
  return (
    <>
      {NoticeArray.map(notice => (
        <>{notice}</>
      ))}
    </>
  );
};

MyNotice.prototype = {
  NoticeArray: PropTypes.array.isRequired,
};

export default MyNotice;
