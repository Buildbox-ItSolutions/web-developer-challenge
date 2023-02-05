import styled from 'styled-components';

import { InputStyledProps } from './model';

export const InputStyled = styled.div<InputStyledProps>`
  width: ${({ block }) => (block ? '100%' : 'fit-content')};
  height: 40px;

  border: 1px solid transparent;

  input {
    width: 100%;
    height: 100%;
    padding: 8px 10px;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.textColorDown};
    border: 1px solid ${({ invalid, theme }) => (invalid ? theme.tertiaryColorUp : 'transparent')};
    transition: all 0.3s;
    letter-spacing: 0.03rem;
    background: ${({ theme }) => theme.fieldColorUp};
    border-radius: 5px;

    &:focus {
      border-color: ${({ theme, invalid }) => (invalid ? theme.tertiaryColorUp : theme.primaryColorUp)};
    }
  }

  label {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.textColorDown};
    display: block;
    letter-spacing: 0.03rem;

    margin-bottom: 4px;
  }

  span {
    font-size: 0.74rem;
    letter-spacing: 0.03rem;
    display: ${({ invalid }) => (invalid ? 'block' : 'none')};
    margin-top: 4px;
    color: ${({ theme }) => theme.tertiaryColorUp};
  }
`;
