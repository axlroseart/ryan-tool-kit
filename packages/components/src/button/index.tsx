import * as React from 'react';
import classnames from 'classnames';
import './style';


export interface ButtonProps {
    className?:string;
    onPress?:(e?:React.SyntheticEvent) => void;
  }


const Button:React.FC<ButtonProps> = ({ children, className, onPress }) => (
  <button
    className={classnames(className, 'button')}
    onClick={onPress}>{children}
  </button>
);

export default Button;
