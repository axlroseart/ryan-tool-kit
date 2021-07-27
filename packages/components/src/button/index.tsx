import * as React from 'react';
import './style';

export interface IHelloProps {
  /**
   * @description       也可以显式加上描述名
   * @default           支持定义默认值
   */
  className?:string; // 支持识别 TypeScript 可选类型为非必选属性
}

const Button:React.FC<IHelloProps> = ({ children }) => (
  <button className="button">{children}</button>
);

export default Button;
