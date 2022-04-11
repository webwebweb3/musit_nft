import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import PropTypes from 'prop-types';

import { metaMaskLoginRequestAction } from '../../../../../_request/metamask_request';
import NavButton from './NavButton';

const MetamaskButton = ({ metamaskLogin, setMetamaskLogin, metaopenfunc }) => {
  const dispatch = useDispatch();
  const metamask = useSelector(state => state.metamask);
  const user = useSelector(state => state.user);

  const onClickHandler = () => {
    Router.reload();
  };

  useEffect(() => {
    // 메타마스크 로그인 상태
    if (metamask.metamaskLoginLoading && metamask.metamaskData == null) {
      setMetamaskLogin(true);
    }

    // 메타마스크 비로그인 상태
    if (metamask.metamaskData !== null && metamask.metamaskLoginDone) {
      setMetamaskLogin(false);
    }
  }, [metamask, setMetamaskLogin]);

  useEffect(() => {
    if (user.logInUserError) {
      alert(user.logInUserError);
    }
  }, [user]);

  const onClickLogin = useCallback(() => {
    try {
      dispatch(metaMaskLoginRequestAction());
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

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
            <NavButton value="Login" func={onClickLogin} />
          </div>
          <NavButton value="Register" func={metaopenfunc} />
        </>
      )}
    </>
  );
};

MetamaskButton.prototype = {
  metamaskLogin: PropTypes.bool.isRequired,
  setMetamaskLogin: PropTypes.func.isRequired,
  metaopenfunc: PropTypes.func.isRequired,
};

export default MetamaskButton;
