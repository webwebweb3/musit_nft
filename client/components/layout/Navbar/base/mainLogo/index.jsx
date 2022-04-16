import Image from 'next/image';
import React from 'react';

const MainLogo = () => {
  return (
    <span style={{ marginRight: '30px', cursor: 'pointer' }}>
      <Image
        width="80px"
        height="80px"
        src="/logoW.png"
        alt="logo"
        layout="fixed"
      />
    </span>
  );
};

export default MainLogo;
