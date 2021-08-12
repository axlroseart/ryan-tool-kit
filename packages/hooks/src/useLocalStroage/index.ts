import type { Dispatch, SetStateAction } from 'react';
import { useState, useEffect, useCallback, useRef } from 'react';

function getValueFromLocalStorage(key:string) {
  if (typeof localStorage === 'undefined') {
    return null;
  }
  const storedValue = localStorage.getItem(key) || 'null';
  try {
    return JSON.parse(storedValue);
  } catch (error) {
    console.error(error);
  }

  return storedValue;
}

function initialize(key:string) {
  return getValueFromLocalStorage(key);
}

const useLocalStroage = <S>(
  key:string,
):{
    value:S | null;
    setValue:Dispatch<SetStateAction<S>>;
    remove:() => void;
} => {
  const [value, __setValue] = useState(() => initialize(key));

  const listen = (e:StorageEvent) => {
    if (e.storageArea === localStorage && e.key === key) {
      try {
        const newValue = JSON.parse(e.newValue || 'null');
        if (value !== newValue) {
          __setValue(newValue);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('storage', listen, false);

    return () => {
      window.removeEventListener('storage', listen, false);
    };
  }, []);

  const setValue = useCallback((newValue:S) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    __setValue(newValue);
  }, []);

  const remove = useCallback(() => {
    localStorage.removeItem(key);
    __setValue(null);
  }, []);

  return { value, setValue, remove };
};

export default useLocalStroage;
