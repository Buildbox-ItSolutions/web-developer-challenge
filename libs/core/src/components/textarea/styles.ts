import { color } from '@/utils';
import styled from 'styled-components';

import { TextAreaStyledProps } from './model';

export const InputStyled = styled.div<TextAreaStyledProps>`
  width: ${({ block }) => (block ? '100%' : 'fit-content')};

  textarea {
    width: 100%;
    height: ${({ height }) => `${height || 80}`}px;
    padding: 12px 16px;
    font-size: 0.875rem;
    overflow: hidden;
    border-radius: 8px;
    box-sizing: border-box;
    resize: none;
    color: ${({ theme }) => color(theme, theme.fieldColorUp)};
    border: 1px solid ${({ invalid, theme }) => (invalid ? theme.tertiaryColorUp : 'transparent')};
    transition: all 0.3s;
    letter-spacing: 0.03rem;
    background: ${({ theme }) => theme.fieldColorUp};

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
