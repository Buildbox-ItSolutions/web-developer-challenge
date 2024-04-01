import styled, { css } from "styled-components";

export const InputStyled = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 1.29;
  padding: 12px 16px;
  border-radius: 8px;

  ${(props) => css`
    color: ${props.theme.colors.font};
    font-family: ${props.theme.font.family};
    background-color: ${props.theme.colors.greyish_brown};
  `}

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
`;
