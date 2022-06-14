import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    display: flex;
    justify-content: center;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    display: none;
  }
  `;
