import { HTMLAttributes } from 'react';

export type InputStyledProps = {
  label?: string;
  block?: boolean;
  invalid?: boolean;
  message?: string;
  onChange?: (value: string) => void;
};

export type InputProps = InputStyledProps & HTMLAttributes<HTMLInputElement>;
