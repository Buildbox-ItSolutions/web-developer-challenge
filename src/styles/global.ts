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
    ${({ theme }) => css`
      font-family: 'Roboto' ${theme.typography.fonts};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-scrolling: touch;
      height: 100%;
      overflow: initial;
      color: ${theme.colors.primary.gray300};
    `}
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
