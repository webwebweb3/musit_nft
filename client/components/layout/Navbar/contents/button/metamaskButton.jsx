import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { useWalletInfo } from '$hooks/web3';
import { loginRequestAction } from '$reduxsaga/request/user_request';
import NavButton from './NavButton';

const MetamaskButton = ({ metaopenfunc }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { account } = useWalletInfo();

  useEffect(() => {
    if (user.logInUserError) {
      alert(user.logInUserError);
    }
  }, [user]);

  const onClickLogin = useCallback(() => {
    try {
      dispatch(loginRequestAction(account.data));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, account]);

  return (
    <>
      <div style={{ marginLeft: 'auto' }}>
        <NavButton value="Login" func={onClickLogin} />
      </div>
      <NavButton value="Register" func={metaopenfunc} />
    </>
  );
};

MetamaskButton.prototype = {
  metaopenfunc: PropTypes.func.isRequired,
};

export default MetamaskButton;
