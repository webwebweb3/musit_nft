import React, { useEffect } from 'react';
import { auth } from '../_actions/user_actions';
import { useSelector, useDispatch } from 'react-redux';

const Auth = ComposedClass => {
  const AuthenticationCheck = props => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then(async response => {
        if (await !response.payload.isAuth) {
          props.history.push('/');
        } else {
          props.history.push('/');
        }
      });
    }, [dispatch, props.history]);

    return <ComposedClass {...props} user={user} />;
  };
  return AuthenticationCheck;
};

export default Auth;
