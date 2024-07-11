import 'styled-components';
import { theme } from '@/app/glotalstyle';
type ThemeType = typeof theme;

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}
