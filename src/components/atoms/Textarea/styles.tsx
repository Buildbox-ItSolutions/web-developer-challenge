import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 80px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: #494949;
  border: 0;
  color: #fff;
  box-sizing: border-box;
  padding: 12px 16px;
  resize: none;
  margin: 0;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px #9f9f9f;
  }
`;
