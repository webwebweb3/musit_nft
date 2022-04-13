import { handler as createUseAccount } from './useAccount';
import { handler as createUseNetwork } from './useNetwork';

export const setupWeb3Hooks = (...deps) => {
  return {
    useAccount: createUseAccount(...deps),
    useNetwork: createUseNetwork(...deps),
  };
};
