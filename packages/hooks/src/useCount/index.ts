import { useState, useEffect, useRef, useCallback } from 'react';

/** 开始计时参数 */
export interface StartCounterOptions{
    /** 开始值 */
    begin:number;
    /** 结束值 */
    end?:number;
    /** 计数间隔 */
    interval:number;
}

export type UseCountIn = () => {
  /** 剩余时间 */
  current:number;
  /** 设置倒计时结束时间，并开始计时 */
  startCounter:(options:StartCounterOptions) => void;
  /** 是否在计时 */
  status:boolean;
};

/** 倒计时 */
const useCount:UseCountIn = () => {
  const [count, setCount] = useState<number>(0);
  const [status, setStatus] = useState<boolean>(false);
  const countRef = useRef<number>(0);
  const timerRef = useRef<any>();

  const startCounter = useCallback(({ begin = 60, end = 0, interval = 1000 }):void => {
    clearInterval(timerRef.current);
    countRef.current = begin;
    setCount(begin);
    setStatus(true);
    timerRef.current = setInterval(() => {
      if (countRef.current === end) {
        clearInterval(timerRef.current);
        setStatus(false);
      }else{
        countRef.current = countRef.current - 1;
        setCount(countRef.current);
      }
    }, interval);
  }, []);

  useEffect(() => () => {
    setStatus(false);
    clearInterval(timerRef.current);
  }, []);

  return { current: count, startCounter, status };
};

export default useCount;
