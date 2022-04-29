import React from 'react';

const StudioProfile = ({ profile }) => {
  return (
    <>
      {profile === 'defaultProfile' ? (
        <img
          src="/defaultProfile.png"
          width={'150px'}
          height={'150px'}
          style={{ borderRadius: '100%' }}
        />
      ) : (
        <img
          src={profile}
          width={'150px'}
          height={'150px'}
          style={{ borderRadius: '100%' }}
        />
      )}
    </>
  );
};

export default StudioProfile;
