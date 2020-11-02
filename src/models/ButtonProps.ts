import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: 'disabled' | 'primary' | 'secondary';
}
