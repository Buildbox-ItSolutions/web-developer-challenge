import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyles';
import Posts from './pages/Posts';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Posts />
    </ThemeProvider>
  );
}

export default App;
