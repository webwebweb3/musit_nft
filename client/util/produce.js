import { enableES5, produce } from 'immer';

// eslint-disable-next-line import/no-anonymous-default-export
export default (...args) => {
  enableES5();
  return produce(...args);
};
