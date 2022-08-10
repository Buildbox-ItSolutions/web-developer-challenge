import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${(props) => props.theme.colors.text.white};
  height: 41px;
  padding: 12px 24px;
  object-fit: contain;
  background-color: ${(props) => props.theme.colors.bg.green};
  border-radius: 8px;
  border: none;
  font-size: ${(props) => props.theme.font.small};
  font-family: 'Roboto', sans-serif;

  &:disabled {
    color: ${(props) => props.theme.colors.text.blackDark};
    background-color: ${(props) => props.theme.colors.bg.gray};
  }

  &.link {
    background: none;
    color: ${(props) => props.theme.colors.text.gray};
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }

  &.icon {
    background: none;
    cursor: pointer;
    padding: 12px;
  }
`;
