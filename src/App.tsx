import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './app/store';
import { Main } from './pages/Main';

import GlobalStyle from './styles/global';
import theme from './styles/theme';

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </Provider>
  );
};
