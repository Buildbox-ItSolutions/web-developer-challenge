import styled from "styled-components";

export const IconButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: opacity .2s;

  &:active {
    opacity: .5;
  }
`;
