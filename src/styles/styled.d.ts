import "styled-components";
import { theme } from "./theme.ts";

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
