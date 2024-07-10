import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

// theme.js ou theme.ts
export const theme = {
	colors: {
		primary: "#2B2B2B",
		secondary: "#303130",
		body: "#343535",
		h1: "#71BB00",
		h3: "#707070",
		input: "#484849",
		background: "#F1FAEE",
		border: "#464647",
		text: "#FEFEFF",
		feedText: "#909091",
		button: "#71BB00",
		discardButton: "#545454",
		disabled: "#5F5F5F",
		disabledText: "#434243",
		h6: "#7A7A7A",
	},
	fonts: {
		main: "'Roboto', sans-serif",
	},
	fontSizes: {
		small: "12px",
		medium: "16px",
		large: "20px",
		xl: "24px",
	},
	spacing: {
		small: "8px",
		medium: "16px",
		large: "24px",
	},
};

interface ThemeProps {
	children: ReactNode;
}

export function Theme({ children }: ThemeProps) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
