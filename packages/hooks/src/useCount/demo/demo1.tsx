import * as React from 'react';
import { useCount } from '@frontend/dcc-hooks';

export default () => {
  const { current, startCounter, status } = useCount();

  return (
    <div>
      <button
        type="button"
        style={{ width: 100, height: 50 }}
        onClick={() => {
          if(!status){
            startCounter({
              begin: 60,
              end: 0,
              interval: 1000,
            });
          }
        }}>
        {status ? `${current}s` : '获取验证码'}
      </button>
    </div>
  );
};
