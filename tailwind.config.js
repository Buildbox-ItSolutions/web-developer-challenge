/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				black: '#343434',
				'black-two': '#2b2b2b',
				'brownish-grey': '#5f5f5f',
				'brownish-orange': '#d65923',
				'greyish-brown': '#494949',
				'greyish-brown-two': '#3b3b3b',
				'greyish-brown-three': '#4b4b4b',
				primary: '#82b937',
				'warm-grey-two': '#7a7a7a',
				'warm-grey-three': '#9f9f9f'
			},
		},
	},
	plugins: [],
}
