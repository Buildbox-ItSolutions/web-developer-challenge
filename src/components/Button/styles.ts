import styled from "styled-components";

export const BtnContainer = styled.button<{ typeBtn: string }>`
  background-color: ${({ theme, typeBtn }) =>
    typeBtn === "submit" ? theme.grey100 : theme.red300};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin: 0 0 0 24px;
  padding: 12px 24px;
`;
