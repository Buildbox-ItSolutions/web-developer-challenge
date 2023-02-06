import styled from "styled-components";
import { Border, Color, LineHeight, Spacing } from "../../styles/global";
import { ButtonKind, ButtonProps } from "./button.component.model";

export const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${(props) =>props.disabled ?
    props.theme.colors.gray[400] :
    props.buttonKind === ButtonKind.Secondary
      ? "transparent"
      : props.theme.colors.green[500]};
  width: 98px;
  height: 40px;
  text-decoration: ${(props) =>
    props.buttonKind === ButtonKind.Secondary ? "underline" : "none"};
  border-radius: ${Border.Radius};
  line-height: ${LineHeight.Thick};
  color: ${(props) =>props.disabled ?
    props.theme.colors.gray[800] :
    props.buttonKind === ButtonKind.Secondary
      ? props.theme.colors.gray[300]
      : Color.White};
  padding: ${Spacing.Small} ${Spacing.Large};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.disabled ?
      props.theme.colors.gray[400] :
      props.buttonKind === ButtonKind.Secondary
        ? "transparent"
        : props.theme.colors.green[400]};
    color: ${Color.White};
  }
`;
