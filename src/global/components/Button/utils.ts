import { IParamsFunctionForVariants } from './types';

export const getVariantAndModifyStyles = ({
  variant,
  theme,
}: IParamsFunctionForVariants) => {
  if (variant === 'contained') {
    return {
      color: theme.colors.gray['600'],
      background: theme.colors.gray['400'],
    };
  } else {
    return {
      color: theme.colors.gray['400'],
      background: 'transparent',
    };
  }
};
