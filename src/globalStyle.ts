import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const AppInput = styled.input`
  width: 90%;
  height: 40px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  border-radius: 8px;
  padding-left: 10px;
  background-color: #494949;
`;

export const AppTextArea = styled.textarea`
  width: 90%;
  height: 95px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  border-radius: 8px;
  background-color: #494949;
  padding-left: 10px;
  padding-top: 10px;
  resize: none;
`;

export const AppButon = styled.button`
  width: 98px;
  height: 41px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #71bb00;
  color: #ffffff;
  font-weight: 600;
  border: none;

  ::disabled {
    background-color: #5f5f5f;
    color: #313131;
  }
  ::valid {
    background-color: #71bb00;
  }
  :active {
    background-color: #71bb00;
    color: #ffffff;
  }
  :hover {
    transition: background-color 0.2s ease;
    background-color: #494949;
    color: #ffffff;
  }
`;

export const AppButtonUnderline = styled(AppButon)`
  background-color: #313131;
  color: #5f5f5f;
  text-decoration: underline;

  :hover {
    transition: background-color 0.2s ease;
    background-color: #313131;
    color: red;
    border: 1px solid red;
  }
`;

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  background: #343434;
  font: 14px Roboto, Arial, helvetica, sans-serif;
  -webkit-font-smoothing: antialiased !important;
}

`;

export default GlobalStyle;
