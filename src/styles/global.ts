import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 400 16px Roboto, sans-serif;
  }
  body {
    background-color: ${props => props.theme.colors.page};
    color: ${props => props.theme.colors.font};
    overflow-x: hidden;
  }
`;