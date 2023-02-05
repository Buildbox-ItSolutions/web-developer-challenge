import { FC } from 'react';

import { InputProps } from './model';
import { InputStyled } from './styles';

export const BixInput: FC<InputProps> = ({ label, message, ...props }) => (
  <InputStyled {...props}>
    {label && <label>{label}</label>}

    <input {...props} />

    <span>{message}</span>
  </InputStyled>
);
