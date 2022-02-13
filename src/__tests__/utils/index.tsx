import { render } from '@testing-library/react';
import { theme } from '@/theme';
import { ThemeProvider } from 'styled-components';

const StyledProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const renderWithProviders = (
  ui: React.ReactElement,
  options?: Parameters<typeof render>[1],
) =>
  render(ui, {
    wrapper: StyledProvider,
    ...options,
  });

export * from '@testing-library/react';
