import Router from 'next/router';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const StudioProfile = () => {
  const studioOwner = Router.query.artistName;
  const { userData } = useSelector(state => state.user);

  return (
    <>
      {userData.img ? (
        <img src={userData.img} alt={'Avatar'} width={'100%'} />
      ) : (
        <img
          src={`https://avatars.dicebear.com/api/gridy/${userData.metamask}.svg`}
        />
      )}
    </>
  );
};

export default StudioProfile;
