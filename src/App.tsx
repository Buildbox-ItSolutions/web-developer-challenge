import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme/default';

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <RecoilRoot>
                <Home />
            </RecoilRoot>
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
