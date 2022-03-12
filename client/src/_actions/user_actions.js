import Axios from 'axios';
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from './types';

export const registerUser = dataToSubmit => {
  let request = Axios.post(`/api/register`, dataToSubmit).then(
    response => response.data,
  );

  return {
    type: REGISTER_USER,
    payload: request,
  };
};

export const loginUser = dataToSubmit => {
  let data = {
    metamask: dataToSubmit,
    password: '1', // 임시 - 수정 예정
  };

  let request = Axios.post(`/api/login`, data).then(response => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
};

export const auth = () => {
  let request = Axios.get(`/api/auth`).then(response => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
};