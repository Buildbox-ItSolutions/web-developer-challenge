import { FC } from 'react';

import { TextAreaProps } from './model';
import { InputStyled } from './styles';

export const BixTextArea: FC<TextAreaProps> = ({
  label,
  onChange,
  defaultValue,
  message,
  ...props
}) => (
  <InputStyled {...props}>
    {label && <label>{label}</label>}

    <textarea
      {...props}
      defaultValue={defaultValue ??  ''}
      onChange={e => onChange!(e.target.value)}
    />

    <span>{message}</span>
  </InputStyled>
);
