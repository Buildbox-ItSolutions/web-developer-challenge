import { InputHTMLAttributes } from 'react';

import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return (
    <StyledInput {...props} />
  );
};
