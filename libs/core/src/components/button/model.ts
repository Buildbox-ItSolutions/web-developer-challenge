import { HTMLAttributes } from 'react';
import { BixChildren } from '@/types';

export type ButtonStyledProps = {
  color?: 'primary' | 'secondary';
  variant?: 'solid' | 'outline';
  block?: boolean;
  disable?: boolean;
};

export type ButtonProps = BixChildren & ButtonStyledProps & HTMLAttributes<HTMLButtonElement>;
