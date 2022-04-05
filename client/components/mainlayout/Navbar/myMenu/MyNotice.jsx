import React from 'react';

const MyNotice = ({ Notice }) => {
  return (
    <>
      {Notice.map(test => (
        <>{test}</>
      ))}
    </>
  );
};

export default MyNotice;
