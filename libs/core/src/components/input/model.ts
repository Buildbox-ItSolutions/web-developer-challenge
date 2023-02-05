import { HTMLAttributes } from 'react';

export type InputStyledProps = {
  label?: string;
  block?: boolean;
  invalid?: boolean;
  message?: string;
};

export type InputProps = InputStyledProps & HTMLAttributes<HTMLInputElement>;
