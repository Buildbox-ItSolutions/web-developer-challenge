import { colors } from './../themes/colors';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

/* roboto-regular - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/roboto-v29-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v29-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v29-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v29-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v29-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v29-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
}
 * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body {
    height: 100%;
  }
  #root {
    font-family: Roboto, Georgia, 'Times New Roman', Times, serif;
    font-size: 16px;
    min-height: 100vh;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body {
    background: ${colors.background};
  }
`;
