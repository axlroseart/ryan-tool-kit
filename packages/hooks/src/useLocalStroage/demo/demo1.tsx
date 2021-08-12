import * as React from 'react';
import { useLocalStroage } from '@frontend/dcc-hooks';

interface TestLocalStroageValue {
    hello:string;
}

export default () => {
  const { value, setValue, remove } = useLocalStroage<TestLocalStroageValue>('test');

  React.useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('test', JSON.stringify({
        hello: 'setTimeout',
      }));
    }, 1000);
  }, []);
  return (
    <div>
      <button
        type="button"
        style={{ height: 50 }}
        onClick={() => {
          setValue({
            hello: 'other',
          });
        }}>
            当前值：{JSON.stringify(value)}
      </button>
      <button
        type="button"
        style={{ height: 50, margin: '0 10px' }}
        onClick={() => {
          setValue({
            hello: 'other',
          });
        }}>
            设置值：{
          JSON.stringify({
            hello: 'other',
          })
        }
      </button>
      <button
        type="button"
        onClick={() => {
          remove();
        }}
        style={{ height: 50 }}
      >
            删除
      </button>
    </div>
  );
};
