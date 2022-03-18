import { METAMASK_LOGIN_REQUEST, METAMASK_REQUEST } from './types';

export const metaMaskRequestAction = () => ({
  type: METAMASK_REQUEST,
});

export const metaMaskLoginRequestAction = () => ({
  type: METAMASK_LOGIN_REQUEST,
});
