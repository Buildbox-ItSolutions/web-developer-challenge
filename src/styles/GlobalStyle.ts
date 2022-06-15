import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

@keyframes appear {
	0% {
		transform: scale(0.5);
	}
	100% {
		transform: scale(1);
	}
}

:root {

	--post-background-color: #313131;
	--post-border-color: #3b3b3b;
	--input-color: #494949;
	--text-color: #9f9f9f;
	--button-color: #5f5f5f;
	--button-color-2: #71bb00;
	--header-border-color: #232323;
	--name-color: #7a7a7a;
	--error-color: #D65923;
	
	--scale: scale(1.2);
	--animation--appear: appear 0.5s ease-out both;

	--toastify-color-success: #71bb00;
	--toastify-color-error: #D65923;
	--toastify-toast-background: black;
	--toastify-font-family: Roboto;
}

.Toastify__toast {
	background: #dfdfdf;
	color: #232323;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, input, textarea, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
	background-color: #343434;
	padding: 0 0 305px;
	font-family: Roboto;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}
`