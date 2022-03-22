import { useState, useCallback } from 'react';

export const useInput = (initValue = null) => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback(
    e => {
      setValue(e.target.value);
    },
    [setValue],
  );
  return [value, handler, setValue];
};

export const useGenreInput = (initValue = null) => {
  const [value, setValue] = useState(initValue);
  const handler = event => {
    const {
      target: { value },
    } = event;
    setValue(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return [value, handler, setValue];
};
