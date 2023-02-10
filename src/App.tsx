import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyles';
import BaseLayout from './layouts/BaseLayout';
import Notes from './pages/Posts';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BaseLayout>
        <Notes />
      </BaseLayout>
    </ThemeProvider>
  );
}

export default App;
