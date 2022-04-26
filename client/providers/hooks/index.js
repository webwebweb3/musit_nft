import { createContext, useContext, useMemo, useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import { setupWeb3Hooks } from './web3/setupHooks';

const Web3Context = createContext(null);

export default function Web3provider({ children }) {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
    isLoading: true,
    hooks: setupWeb3Hooks(),
  });

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();

      if (provider) {
        const web3 = new Web3(provider);
        setWeb3Api({
          provider,
          web3,
          contract: null,
          isLoading: false,
          hooks: setupWeb3Hooks(web3, provider),
        });
      } else {
        setWeb3Api(api => ({ ...web3Api, isLoading: false }));
        console.error('Please, install Metamask');
      }
    };

    loadProvider();
  }, []);

  const _web3Api = useMemo(() => {
    const { web3, provider, isLoading } = web3Api;

    return {
      ...web3Api,
      requireInstall: !isLoading && !web3,
      connect: provider
        ? async () => {
            try {
              await provider.request({ method: 'eth_requestAccounts' });
            } catch {
              window.location.reload();
            }
          }
        : () => console.error('Cannot connect to Metamask'),
    };
  }, [web3Api]);
  // _web3Api.connect();

  // if (_web3Api.isLoading) {
  //   console.log('로그', _web3Api.connect());
  // }

  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
}

const useWeb3 = () => {
  return useContext(Web3Context);
};

const useHooks = cb => {
  const { hooks } = useWeb3();
  return cb(hooks);
};

export { useWeb3, useHooks };
