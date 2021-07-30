import { useMemo, useState } from 'react';

export interface Actions {
  setTrue:() => void;
  setFalse:() => void;
}

export default function useBoolean(defaultValue = false):[boolean, Actions] {
  const [state, setBol] = useState(defaultValue);

  const actions:Actions = useMemo(() => {
    const setTrue = () => setBol(true);
    const setFalse = () => setBol(false);
    return { setTrue, setFalse };
  }, []);

  return [state, actions];
}
