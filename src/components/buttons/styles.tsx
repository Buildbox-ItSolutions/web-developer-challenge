import styled from 'styled-components';
import { colors } from "../../theme";


export const ButtonPublishStyle = styled.button`
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  background-color: ${colors.buttonPublish};
  border: none;
  width: 6.125rem;
  height: 2.563.rem;
  font-family: Roboto;
  color:${colors.colorInside};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color:${colors.inputFocus};
  }

  &:active {
    transform: translateY(0.063rem);
  }
`;

export const ButtonDiscardStyle = styled.button`
  padding: 0;
  font-size: 0.875rem;
  background-color: transparent;
  font-family: Roboto;
  color: ${colors.buttonDiscard};
  border: none;
  cursor: pointer;
  text-decoration: underline;
  transition: opacity 0.3s;

  &:hover {
    color: ${colors.inputFocus};
  }

  &:active {
    transform: translateY(0.063rem);
  }
`;

export const ButtonWrapper = styled.button`
border: none;
background: none;
padding: 0;
margin: 0;
cursor: pointer;
font-family: inherit;
font-size: inherit;
color: inherit;
appearance: none;
`;