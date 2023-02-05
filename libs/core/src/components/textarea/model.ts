import { HTMLAttributes } from 'react';

export type TextAreaStyledProps = {
  label?: string;
  block?: boolean;
  invalid?: boolean;
  height?: boolean;
  message?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

export type TextAreaProps = TextAreaStyledProps & HTMLAttributes<HTMLElement>;
