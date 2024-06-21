import {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import { ITheme } from "../../_config/themes/theme.interface";
import { LIGHT_THEME } from "../../_config/themes/light.theme";
import { DARK_THEME } from "../../_config/themes/dark.theme";

interface IThemeContext {
  theme: ITheme;
  toggleTheme: () => void;
}

interface Props {
  children: ReactNode;
}

export const SelectedThemeContext = createContext<IThemeContext>({
  theme: DARK_THEME,
  toggleTheme: () => {
    console.log("DEFAULT TOGGLE");
  },
});

export function SelectedThemeContextProvider({ children }: Readonly<Props>) {
  const [selectedTheme, setSelectedTheme] = useState<
    "LIGHT_THEME" | "DARK_THEME"
  >("DARK_THEME");

  const themes = useMemo(
    () => ({
      LIGHT_THEME: LIGHT_THEME,
      DARK_THEME: DARK_THEME,
    }),
    []
  );

  const toggleTheme = useCallback(() => {
    console.log("TOGGLE THEME BRO");

    setSelectedTheme(
      selectedTheme === "LIGHT_THEME" ? "DARK_THEME" : "LIGHT_THEME"
    );
  }, [selectedTheme]);

  const contextValues = useMemo(
    () => ({
      theme: themes[selectedTheme],
      toggleTheme,
    }),
    [selectedTheme, themes, toggleTheme]
  );

  return (
    <SelectedThemeContext.Provider value={contextValues}>
      {children}
    </SelectedThemeContext.Provider>
  );
}
