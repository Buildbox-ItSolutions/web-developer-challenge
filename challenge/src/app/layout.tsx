'use client';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';
import { GlobalStyle, theme } from './glotalstyle';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/header';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<ThemeProvider theme={theme}>
						<Header />
						{children}
						<GlobalStyle />
					</ThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
