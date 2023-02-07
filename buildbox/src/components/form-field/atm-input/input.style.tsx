import styled from "styled-components";
import { Spacing } from "../../../styles/global";
import {
  formFieldBorderCss,
  formFieldFormCss,
  formFieldTextCss,
} from "../index.style";

export const InputStyled = styled.input`
  ${formFieldBorderCss};
  ${formFieldTextCss};
  ${formFieldFormCss};
  height: ${Spacing.XXLarge};
`;
