import { useHooks } from '../../providers/hooks';

const enhanceHook = swrRes => {
  return {
    ...swrRes,
    hasInitialResponse: swrRes.data || swrRes.error,
  };
};

export const useNetwork = () => {
  const swrRes = enhanceHook(useHooks(hooks => hooks.useNetwork)());
  return {
    network: swrRes,
  };
};

export const useAccount = () => {
  const swrRes = enhanceHook(useHooks(hooks => hooks.useAccount)());
  return {
    account: swrRes,
  };
};

export const useWalletInfo = () => {
  const { account } = useAccount();
  const { network } = useNetwork();

  return {
    account,
    network,
    canPurchase: !!(account.data && network.isSupported),
  };
};
