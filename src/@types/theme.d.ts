import { ITheme } from "../_config/themes/theme.interface";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
