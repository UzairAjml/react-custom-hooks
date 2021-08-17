import React, { useState } from 'react';

function useStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
    }
  });

  const setValue = (value) => {
    try {
      const valueToStorage =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStorage);

      window.localStorage.setItem(key, JSON.stringify(valueToStorage));
      console.log('hi');
    } catch (error) {
      console.log(error.message, '2323423423');
      return initialValue;
    }
  };

  return [storedValue, setValue];
}
export default useStorage;
