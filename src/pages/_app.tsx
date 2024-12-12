import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';

import { GlobalStyles } from '../styles/global-styles';

import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
