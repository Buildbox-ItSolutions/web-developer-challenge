import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from 'store';

import { Main } from 'components/pages';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
