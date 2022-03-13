import Axios from 'axios';
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from './types';

export const registerUser = async dataToSubmit => {
  let request = await Axios.post(`/api/register`, dataToSubmit).then(
    response => response.data,
  );

  return {
    type: REGISTER_USER,
    request,
  };
};

export const loginUser = async dataToSubmit => {
  let data = {
    metamask: dataToSubmit,
    password: '1', // 임시 - 수정 예정
  };

  let request = await Axios.post(`/api/login`, data).then(
    response => response.data,
  );

  return {
    type: LOGIN_USER,
    request,
  };
};

export const auth = async () => {
  let request = await Axios.get(`/api/auth`).then(response => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
};

export const logoutUser = async () => {
  let request = await Axios.get(`/api/logout`).then(response => response.data);

  return {
    type: LOGOUT_USER,
    request,
  };
};
