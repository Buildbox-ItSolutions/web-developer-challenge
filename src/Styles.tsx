import { css, createGlobalStyle } from "styled-components";
import Roboto from './assets/Roboto.woff'
export const tabblet = (...values:any) => css`
	@media (min-width: 720px) {
		${values}
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