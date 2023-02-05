import { FC } from 'react';

import { InputProps } from './model';
import { InputStyled } from './styles';

export const BixInput: FC<InputProps> = ({ label, onChange, message, ...props }) => (
  <InputStyled {...props}>
    {label && <label>{label}</label>}

    <input {...props} onChange={e => onChange!(e.target.value)} />

    <span>{message}</span>
  </InputStyled>
);
