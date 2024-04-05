import { ComponentProps, forwardRef } from 'react';

import * as S from './styles';

export type InputProps = ComponentProps<'input'> & {
  errorFeedback?: string;
  as?: 'textarea';
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorFeedback, ...props }, ref) => (
    <div className="input">
      <S.InputStyled ref={ref} {...props} />

      {errorFeedback && (
        <S.ErrorFeedbackSpan>{errorFeedback}</S.ErrorFeedbackSpan>
      )}
    </div>
  ),
);

Input.displayName = 'Input';
