import { ButtonHTMLAttributes } from 'react';
import { DefaultTheme } from 'styled-components';

export type TVariants = 'contained' | 'outline';

export interface IComponentParams
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant: TVariants;
  loading?: boolean;
}

export type TVariantsComponent = Pick<IComponentParams, 'variant'>;

export interface IParamsFunctionForVariants {
  variant: TVariants;
  theme: DefaultTheme;
}
