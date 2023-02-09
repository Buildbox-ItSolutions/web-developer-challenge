import { css, createGlobalStyle } from "styled-components";
import Roboto from './assets/Roboto.woff'
export const tabblet = (data: string) => css`
	@media (min-width: 720px) {
		${data}
	}
`

export const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Roboto';
		src:url(${Roboto}) format('woff');
	}
	body {
		background-color: #343434;
	}
	* {
		font-family: Roboto;
	}
`