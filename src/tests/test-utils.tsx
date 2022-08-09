import { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

const Providers: FC<{children: React.ReactNode}> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export {customRender as render};
