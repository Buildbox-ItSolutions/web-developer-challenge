import { createGlobalStyle, css, DefaultTheme, GlobalStyleComponent } from 'styled-components'

type GlobalStyleProps = {}

export const GlobalStyles: GlobalStyleComponent<GlobalStyleProps, DefaultTheme> = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
      font-family: 'Roboto', ${({ theme }) => theme.typography.fonts};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-overflow-scrolling: touch;
      height: 100%;
      overflow: initial;
      color: ${({ theme }) => theme.colors.primary.gray300};
      background-color: ${({ theme }) => theme.colors.primary.gray400};;
  }

  a {
    text-decoration: none;
  }

  button {
    appearance: none;
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    line-height: normal;
  }
`
