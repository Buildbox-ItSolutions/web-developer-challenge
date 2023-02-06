import styled from "styled-components";


export const Button = styled.button`
  width: 98px;
  height: 41px;
  margin: 0 0 0 24px;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${({ disabled }) => (!disabled ? "#71bb00" : "#5f5f5f")};
  border: 0;
  color: ${({ disabled }) => (!disabled ? "#fff" : "#313131")};
  cursor: ${({ disabled }) => (!disabled ? "pointer" : "auto")};
`;
