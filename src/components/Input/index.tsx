import React, { InputHTMLAttributes } from 'react';

import { Content } from './styles';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <Content {...props} />;
};

export default Input;
