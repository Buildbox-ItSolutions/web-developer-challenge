import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import { defaultTheme } from './assets/styles/themes';
import { Home } from './components/layouts/Home';
import { queryClient } from './libs/queryClient';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <ReactQueryDevtools client={queryClient} />
        <Toaster richColors />

        <Home />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
