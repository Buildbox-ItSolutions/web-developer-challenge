import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: #494949;
  border: 0;
  color: #fff;
  box-sizing: border-box;
  padding: 12px 16px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px #9f9f9f;
  }
`;
