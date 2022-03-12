import { METAMASK_USER } from './types';

export const metaMaskUser = async () => {
  let request = await window.ethereum.request({
    method: 'eth_requestAccounts',
  });

  return {
    type: METAMASK_USER,
    payload: request[0],
  };
};
