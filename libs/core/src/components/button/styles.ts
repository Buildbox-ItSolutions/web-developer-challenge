import styled from 'styled-components';

import { ButtonProps } from './model';

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  width: fit-content;
  align-items: center;
  gap: 4px;

  border: none;
  padding: 12px 24px;
  height: 40px;
  border-radius: 10px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 0.03rem;
  pointer-events: all;
  opacity: 1;
  background: ${({ theme }) => theme.primaryColorUp};
  color: ${({ theme }) => theme.lightColorPure};

  &:hover {
    background: ${({ theme }) => theme.primaryColorDown};
  }

  &.secondary {
    background: ${({ theme }) => theme.secondaryColorUp};

    &:hover {
      background: ${({ theme }) => theme.secondaryColorDown};
    }
  }

  &.block {
    width: 100%;
  }

  &.disable {
    opacity: 0.5;
    pointer-events: none;
  }
`;
