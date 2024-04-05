import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.text[700]} transparent;
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 20px;
    border: 3px solid transparent;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text[500]};
    font-size: 1.6rem;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  /* @media (max-width: 640px) {
    html {
      font-size: 50%;
    }
  } */
`;
