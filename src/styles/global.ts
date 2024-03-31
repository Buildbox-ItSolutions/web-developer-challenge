import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
  --warm-grey: #707070;
  --dark-lime-green: #71bb00;
  --warm-grey-two: #7a7a7a;
  --brownish-orange: #d65923;
  --black-four: #232323;
  --greyish-brown-three: #4b4b4b;
  --white: #fff;
  --black: #343434;
  --greyish-brown: #494949;
  --black-two: #313131;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html,
  body {
    height: 100%;
    font-family: "Roboto", Arial, sans-serif;
  }

  body {
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
  }
`;

export default GlobalStyles;
