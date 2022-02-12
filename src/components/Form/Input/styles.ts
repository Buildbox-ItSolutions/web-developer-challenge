import styled, { css } from "styled-components";

interface ContentProps {
  isFocused: boolean;
  isFilled?: boolean;
  textarea?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const Content = styled.div<ContentProps>`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  border: 0;
  padding: 0.25rem 1rem;
  height: 40px;

  ${({ textarea }) =>
    textarea &&
    css`
      height: 80px;
    `};

  ${({ isFocused }) =>
    isFocused &&
    css`
      filter: brightness(85%);
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      border-color: rgba(1, 1, 1, 0.2);
    `}

  input, textarea {
    height: 100%;
    width: 100%;
    border: 0;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;
