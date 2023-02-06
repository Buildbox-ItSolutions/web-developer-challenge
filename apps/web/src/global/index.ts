import { createGlobalStyle } from 'styled-components';

import { parseCssTheme } from '@bix/themes';

export default createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    user-select: none;
    letter-spacing: 0.02rem;
    user-zoom: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    font-size: 100%;
    font-family: ${({ theme }) => theme.primaryFontFamily}, sans-serif;
  }

  :root {
    ${({ theme }) => parseCssTheme(theme)}
  }
`;
