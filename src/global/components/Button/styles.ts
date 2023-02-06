import styled from 'styled-components';
import { TVariantsComponent } from './types';
import { getVariantAndModifyStyles } from './utils';

export const Button = styled.button<TVariantsComponent>`
  border-radius: 1rem;
  padding: 1.6rem 2rem;
  border: none;
  font-size: 1.8rem;
  background: ${({ theme, variant }) =>
    getVariantAndModifyStyles({ theme, variant }).background};
  color: ${({ theme, variant }) =>
    getVariantAndModifyStyles({ theme, variant }).color};
  text-decoration: ${({ variant }) =>
    variant === 'outline' ? 'underline' : 'none'};
`;
