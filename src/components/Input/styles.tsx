import styled, { css } from "styled-components";

type InputTextStyleProps = {
  hasError: string | undefined;
};

export const InputTextStyle = styled.input<InputTextStyleProps>`
  width: 100%;
  height: 40px;
  padding: 12px;
  border-radius: 8px;
  background-color: #494949;
  color: #9f9f9f;
  border: none;
  outline: none;
  line-height: 1.29;
  font-size: 14px;
  margin-bottom: 0;
  + span {
    color: red;
    display: block;
    font-size: 12px;
    margin-top: -15px;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      height: calc(40px + 16px); /* Ajusta a altura do input */
      margin-bottom: 12px;
      border: 1px solid red; /* Adiciona espaço extra abaixo do input */
    `}
`;
