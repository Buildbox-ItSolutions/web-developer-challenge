import styled, { css } from "styled-components";

type InputTextStyleProps = {
  $hasError?: string;
};

export const InputTextStyle = styled.input<InputTextStyleProps>`
  width: 100%;
  height: 40px;
  padding: 12px;
  border-radius: 8px;
  background-color: #494949;
  color: #ffffff;
  border: none;
  outline: none;
  line-height: 1.29;
  font-size: 0.875rem;
  margin-bottom: 0;

  ${({ $hasError }) =>
    $hasError &&
    css`
      border: 1px solid #e17978;
    `}
`;
