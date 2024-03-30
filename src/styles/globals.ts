import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-size: calc(100vw / 390 * 16);
  }

  @media screen and (min-width: 640px) {
    html {
      font-size: calc(100vw / 1366 * 16);
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background-color: ${(props) => props.theme.colors.gray[700]};
  }
  *,
  *::before,
  *::after {
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul,
  ol, li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  h1,h2,h3,h4,h5, span {
    cursor: default;
  }


  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }

  .animate-ping	{
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
`
