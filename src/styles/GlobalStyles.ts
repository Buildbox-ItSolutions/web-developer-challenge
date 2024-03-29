import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: "Roboto", sans-serif;
    background-color: #343434;

    --warm-grey: #707070;
    --dark-lime-green: #71bb00;
    --warm-grey-two: #7a7a7a;
    --brownish-orange: #d65923;
    --black-four: #232323;
    --greyish-brown-three: #4b4b4b;
    --white: #fff;
    --greyish-brown-three-0: rgba(75, 75, 75, 0);
    --black: #343434;
    --warm-grey-three: #9f9f9f;
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem; 
  }
`;

export default GlobalStyles;