"use client";

import { dark } from "@styles/theme/dark";
import { ThemeProvider as Provider } from "styled-components";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <Provider theme={dark}>{children}</Provider>;
};

export default ThemeProvider;
