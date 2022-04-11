import { METAMASK_LOGIN_REQUEST, METAMASK_REQUEST } from './types';

export const metaMaskRequestAction = ({ text }) => ({
  type: METAMASK_REQUEST,
  text,
});

export const metaMaskLoginRequestAction = () => ({
  type: METAMASK_LOGIN_REQUEST,
});
