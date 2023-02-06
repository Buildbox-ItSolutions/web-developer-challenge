import { css } from "styled-components";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  LineHeight,
  Spacing,
} from "../../styles/global";

export const formFieldBorderCss = css`
  outline: none;
  border-radius: ${Border.Radius};
  border: solid ${Border.Width} ${(props) => props.theme.colors.gray[600]};
`;

export const formFieldTextCss = css`
  color: ${Color.White};
  font-size: ${FontSize.Medium};
  line-height: ${LineHeight.Thick};
  font-family: ${FontFamily.Primary};
  ::placeholder {
    color: ${(props) => props.theme.colors.gray[200]};
    line-height: normal;
  }
`;

export const formFieldFormCss = css`
  background-color: ${(props) => props.theme.colors.gray[500]};
  width: 100%;
  padding: ${Spacing.Medium};
`;
