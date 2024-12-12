import { css } from "styled-components";
import { Border } from "../../styles/global";

export const cardFieldBorderCss = css`
  border-radius: ${Border.Radius};
`;

export const cardFieldFormCss = css`
  background-color: ${(props) => props.theme.colors.gray[800]};
  width: 516px;
  @media all and (max-width: 48em) {
    width: calc(100%);
  }
`;
