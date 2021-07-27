import * as React from 'react';
import { useLoading } from 'your-hooks';

export default () => {
  const { isLoading, setLoading } = useLoading();
  return (
    <button
      onClick={() => {
        setLoading(!isLoading);
      }}
    >
      按钮{isLoading ? 'loading' : ''}
    </button>
  );
};
