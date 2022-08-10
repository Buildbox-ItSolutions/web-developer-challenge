import styled from "styled-components";

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.bg.grayDark};
  border: solid 1px ${(props) => props.theme.colors.border.grayDark};
  border-radius: 8px;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.text.white};
  font-size: ${(props) => props.theme.font.small};
  font-family: 'Roboto', sans-serif;
  padding: 12px 16px;
  width: 100%;
  outline: 0;
`;
