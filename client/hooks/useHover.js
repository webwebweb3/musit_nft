import { useState, useCallback } from 'react';

export const useHover = (initValue = false) => {
  const [value, setValue] = useState(initValue);

  const onMouseOverFunc = useCallback(() => {
    setValue(true);
  }, []);

  const onMouseOutFunc = useCallback(() => {
    setValue(false);
  }, []);

  return [value, onMouseOverFunc, onMouseOutFunc];
};
