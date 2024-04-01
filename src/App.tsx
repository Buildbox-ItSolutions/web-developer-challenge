import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import { defaultTheme } from './assets/styles/themes';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>App</h1>
    </ThemeProvider>
  );
}
