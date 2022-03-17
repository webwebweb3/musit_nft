import React from 'react';
import NavButton from './NavButton';

const MetamaskButton = ({ metamaskLogin, loginfunc, metaopenfunc }) => {
  const onClickHandler = () => {
    window.location.reload();
  };

  return (
    <>
      {metamaskLogin ? (
        <div style={{ marginLeft: 'auto' }}>
          <NavButton
            value="메타마스크를 먼저 로그인해주세요!"
            func={onClickHandler}
          />
        </div>
      ) : (
        <>
          <div style={{ marginLeft: 'auto' }}>
            <NavButton value="Login" func={loginfunc} />
          </div>
          <NavButton value="Register" func={metaopenfunc} />
        </>
      )}
    </>
  );
};

export default MetamaskButton;
