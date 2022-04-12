import { useEffect } from 'react';
import useSWR from 'swr';

const NETWORKS = {
  1: '이더리움 메인넷',
  3: 'Ropsten 테스트 네트워크',
  4: 'Rinkeby 테스트 네트워크',
  5: 'Goerli 테스트 네트워크',
  42: 'Kovan 테스트 네트워크',
  1337: 'Ganache',
};

const targetNetwork = NETWORKS[process.env.NEXT_PUBLIC_TARGET_CHAIN_ID];

export const handler = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? 'web3/network' : null),
    async () => {
      const chainId = await web3.eth.getChainId();
      return NETWORKS[chainId];
    },
  );

  useEffect(() => {
    provider &&
      provider.on('chainChanged', chainId => {
        mutate(NETWORKS[parseInt(chainId, 16)]);
      });
  }, [web3]);

  return {
    data,
    mutate,
    target: targetNetwork,
    isSupported: data === targetNetwork,
    ...rest,
  };
};
