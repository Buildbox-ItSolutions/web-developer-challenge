'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
	margin: 0; 
	padding: 0;
	box-sizing: border-box;
	::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: transparent; 
}

::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 3px;
}


::-webkit-scrollbar-button {
  display: none;
}
}`;
export const theme = {
	colors: {
		green: '#71BB00',
		gray900: '#2B2B2B',
		gray600: '#313131',
		gray500: '#6E6E6E',
		gray200: '#5F5F5F',
		gray300: '#494949',
		gray100: '#9F9F9F',
		gray999: '#232323',
		gray700: '#343434',
		gray750: '#3B3B3B',
		red: '#D86F00',
	},
};
