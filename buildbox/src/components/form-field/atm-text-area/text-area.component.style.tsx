import styled from "styled-components";
import {
    formFieldBorderCss,
    formFieldFormCss,
    formFieldTextCss,
} from "../index.style";

export const InputTextAreaStyled = styled.textarea`
  ${formFieldBorderCss};
  ${formFieldTextCss};
  ${formFieldFormCss};
  height: 80px;
  resize: none;
`;
