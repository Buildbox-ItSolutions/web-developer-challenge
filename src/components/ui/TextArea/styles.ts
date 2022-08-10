import styled from "styled-components";

export const Text = styled.textarea`
  background-color: ${(props) => props.theme.colors.bg.grayDark};
  border: solid 1px ${(props) => props.theme.colors.border.grayDark};
  border-radius: 8px;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.text.white};
  font-family: Roboto, sans-serif;
  font-size: ${(props) => props.theme.font.small};
  min-height: 80px;
  outline: 0;
  padding: 12px 16px;
  resize: vertical;
  width: 100%;
`;
