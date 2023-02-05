import { color } from '@/utils';
import styled from 'styled-components';

import { ButtonStyledProps } from './model';

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: flex;
  justify-content: center;
  width: ${({ block }) => (block ? '100%' : 'fit-content')};
  align-items: center;
  gap: 4px;

  border: none;
  padding: 8px 20px;
  height: 40px;
  border-radius: 10px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 0.03rem;
  pointer-events: ${({ disable }) => (disable ? 'none' : 'all')};
  opacity: ${({ disable }) => (disable ? 0.4 : 1)};
  background: ${({ theme }) => theme.primaryColorUp};
  color: ${({ theme }) => color(theme, theme.primaryColorDown)};

  &:hover {
    background: ${({ theme }) => theme.primaryColorDown};
  }

  &.secondary {
    background: ${({ theme }) => theme.secondaryColorUp};

    &:hover {
      background: ${({ theme }) => theme.secondaryColorDown};
    }
  }
`;
