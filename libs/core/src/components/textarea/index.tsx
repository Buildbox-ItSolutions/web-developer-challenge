import { FC } from 'react';

import { TextAreaProps } from './model';
import { InputStyled } from './styles';

export const BixTextArea: FC<TextAreaProps> = ({ label, onChange, message, ...props }) => (
  <InputStyled {...props}>
    {label && <label>{label}</label>}

    <textarea {...props} onChange={e => onChange!(e.target.value)} />

    <span>{message}</span>
  </InputStyled>
);
