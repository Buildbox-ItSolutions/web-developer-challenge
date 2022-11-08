import { ThemeProvider } from 'styled-components';

import { Header } from '@components/Header';
import Main from '@pages/Main';
import GlobalStyle from '@styles/global';

import AppProvider from './contexts';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
