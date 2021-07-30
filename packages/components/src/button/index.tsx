import * as React from 'react';
import classnames from 'classnames';
import { ButtonPropsType } from './PropsType';
import './style';

const Button:React.FC<ButtonPropsType> = ({ children, className, onPress }) => (
  <button
    className={classnames(className, 'button')}
    onClick={onPress}>{children}
  </button>
);

export default Button;
