import { HTMLAttributes } from 'react';
import { BixChildren } from '@/types';

export type ButtonProps = {
  color?: 'primary' | 'secondary';
  variant?: 'solid' | 'outline';
  block?: boolean;
  disable?: boolean;
  className?: string;
} & BixChildren &
  HTMLAttributes<HTMLButtonElement>;
