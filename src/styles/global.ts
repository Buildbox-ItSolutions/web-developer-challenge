import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.gray_scale_3};
    color: ${props => props.theme.colors.white};
    font: 400 16px Roboto, sans-serif;
  }

  a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }
`;
