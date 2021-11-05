import * as React from 'react';
import { useLocalStroage } from '@ryan-drx/hooks';

interface TestLocalStroageValue {
    hello:string;
}

export default () => {
  const { value, setValue, remove } = useLocalStroage<TestLocalStroageValue>('test');

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
