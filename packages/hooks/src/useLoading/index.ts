import * as React from 'react';

const useLoading = () => {
  const [isLoading, setLoading] = React.useState(false);
  return {
    isLoading,
    setLoading,
  };
};
export default useLoading;
