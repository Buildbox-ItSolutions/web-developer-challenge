import styled, { css } from "styled-components";

export type ButtonVariant = "underlined" | "icon";

const Button = styled.button<{ variant?: ButtonVariant }>`
  outline: none;
  border: none;
  line-height: 18px;
  font-size: 14px;
  cursor: pointer;

  ${(props) => {
    switch (props.variant) {
      case "underlined":
        return css`
          background-color: transparent;
          color: #5f5f5f;
          &:hover {
            text-decoration: underline;
          }
        `;

      case "icon":
        return css`
          background-color: transparent;
          height: 24px;
          width: 24px;
          color: #cd2e2e;
          display: grid;
          place-content: center;
        `;

      default:
        return css`
          padding: 12px 24px;
          background-color: #71bb00;
          color: white;
          border-radius: 8px;

          &:disabled {
            background-color: #5f5f5f;
            color: #313131;
            cursor: not-allowed;
          }

          &:not(:disabled):hover {
            background-color: #68a809;
          }
        `;
    }
  }}
`;

export default Button;
