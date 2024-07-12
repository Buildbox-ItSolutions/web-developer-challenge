'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
	margin: 0; 
	padding: 0;
	box-sizing: border-box;
}`;
export const theme = {
	colors: {
		green: '#71BB00',
		gray900: '#2B2B2B',
		gray600: '#343434',
		gray500: '#6E6E6E',
		gray200: '#5F5F5F',
		gray100: '#9F9F9F',
		gray999: '#232323',
		red: '#A24C27',
	},
};
