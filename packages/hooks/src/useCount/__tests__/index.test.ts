import { renderHook, act } from '@testing-library/react-hooks';
import { useEffect } from 'react';
import useCount from '../index';

const setUp = () => renderHook(() => useCount());

describe('useCount', () => {

  it('test useCount init', async() => {
    const { result } = setUp();
    expect(result.current.current).toBe(0);
    expect(result.current.status).toBe(false);
  });

  it('test useCount startCount', async() => {
    const { result, waitForNextUpdate, unmount } = setUp();
    act(() => {
      result.current.startCounter({
        begin: 6,
        end: 0,
        interval: 1000,
      });
    });
    expect(result.current.current).toEqual(6);
    for(let i = 0;i < 7;i++){
      await waitForNextUpdate();
    }
    expect(result.current.current).toEqual(0);
    unmount();
  });
});
