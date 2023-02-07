import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer
          autoClose={3000}
          className="react-toastfy-container"
          toastClassName="react-toastfy-content"
          position="top-center"
          icon={false}
        />
      </ThemeProvider>
    </Provider>
  );
};
