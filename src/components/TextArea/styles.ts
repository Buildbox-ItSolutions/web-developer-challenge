import styled, { css } from "styled-components";

type TextAreaStyleType = {
  $hasError: string | undefined;
};
export const TextAreaStyle = styled.textarea<TextAreaStyleType>`
  width: 100%;
  min-height: 80px;
  padding: 12px;
  border-radius: 8px;
  background-color: #494949;
  color: #ffffff;

  border: none;
  outline: none;
  line-height: 1.29;
  font-size: 0.875rem;
  resize: none;
  &::placeholder {
    color: #9f9f9f;
  }
  + span {
    color: #e17978;
    display: block;
    font-size: 12px;
  }

  ${({ $hasError }) =>
    $hasError &&
    css`
      border: 1px solid #e17978;
    `}
`;
