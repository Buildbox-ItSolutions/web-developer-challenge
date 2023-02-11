import { css } from "styled-components";

export const unstyledButton = css`
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background: none;
  cursor: pointer;

  :disabled {
    cursor: default;
  }
`;
