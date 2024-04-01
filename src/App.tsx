import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import { defaultTheme } from './assets/styles/themes';
import { Home } from './components/layouts/Home';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Home />
    </ThemeProvider>
  );
}
