import styled, { css } from "styled-components";

const inputStyles = css`
  height: 40px;
  border-radius: 8px;
  background-color: #494949;
  outline: none;
  border: none;
  color: white;
  line-height: 18px;
  font-size: 14px;
  padding-inline: 12px;

  ::placeholder {
    color: #9f9f9f;
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const TextArea = styled.textarea`
  ${inputStyles}
  padding-block: 12px;
  resize: vertical;
  min-height: 48px;
`;
