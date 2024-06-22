import { useContext } from "react";
import { SelectedThemeContext } from "../../globals/contexts/theme.context";
import { IconButton } from "../IconButton";
import { Moon, Sun } from "lucide-react";

export function ToggleTheme() {
  const { toggleTheme, selectedTheme } = useContext(SelectedThemeContext);

  return (
    <IconButton onClick={toggleTheme}>
      {selectedTheme === "DARK_THEME" ? (
        <Sun color="#FFD700" />
      ) : (
        <Moon color="#443bbd" />
      )}
    </IconButton>
  );
}
