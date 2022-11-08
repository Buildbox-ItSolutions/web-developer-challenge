import { ThemeProvider } from 'styled-components';

import { Header } from '@components/Header';
import GlobalStyle from '@styles/global';

import AppProvider from './contexts';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppProvider>
        <Header />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
