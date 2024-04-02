import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #313131;
  color: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  & > svg {
    margin-right: 5px;
  }
`;
