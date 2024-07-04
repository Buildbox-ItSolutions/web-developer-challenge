import styled from "styled-components";

export const CustomInput = styled.input`
  height: 40px;
  background-color: ${(props) => props.theme.colors.inputBackground};
  border-radius: 8px;
`;

export const CustomTextArea = styled.textarea`
  background-color: ${(props) => props.theme.colors.inputBackground};
  border-radius: 8px;
`;

export const CustomImageInput = styled.input`
  display: none;
`;

export const CustomImageLabel = styled.label`
  display: flex;
  width: 88px;
  height: 88px;
  border-radius: 20px;
  background: none;
  border: 1px solid ${(props) => props.theme.colors.gray.lighter};
`;
