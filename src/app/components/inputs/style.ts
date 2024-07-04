import styled from "styled-components";

export const CustomInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.colors.inputBackground};
  border-radius: 8px;
  margin-bottom: 8px;
  border: none;
  padding: 0 16px;

  color: #fff;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray.lightest};
  }

  &:focus {
    outline: none;
  }
`;

export const CustomTextArea = styled.textarea`
  width: 100%;
  background-color: ${(props) => props.theme.colors.inputBackground};
  border-radius: 8px;
  height: 80px;
  max-height: 80px;
  resize: none;
  padding: 16px;
  border: none;

  color: #fff;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray.lightest};
  }

  &:focus {
    outline: none;
  }
`;

export const CustomImageInput = styled.input`
  display: none;
`;

export const CustomImageLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 88px;
  border-radius: 36px;
  background: none;
  border: 1px solid ${(props) => props.theme.colors.gray.lighter};
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.gray.lightest};
  }

  & svg {
    color: #fff;
    font-size: 24px;
  }
`;
