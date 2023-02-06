import { InputHTMLAttributes } from 'react';

export interface IComponentParams
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  message?: string;
}
