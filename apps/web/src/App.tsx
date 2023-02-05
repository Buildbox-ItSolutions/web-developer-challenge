import { themes } from '@bix/themes';
import { BixThemeProvider } from '@bix/core';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { router } from '@/routes';
import { AppState } from '@/store';

import GlobalStyle, { Fonts } from '@/global';

const App = () => {
  const state = useSelector((state: AppState) => state);
  const theme = themes[state.theme];

  return (
    <BixThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <Fonts />
        <GlobalStyle />
      </ThemeProvider>
    </BixThemeProvider>
  );
};

export default App;
