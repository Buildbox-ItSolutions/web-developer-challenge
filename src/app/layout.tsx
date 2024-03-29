import type { Metadata } from 'next'
import StyledComponentsRegistry from './registry'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
	title: 'Buildbox - web developer challenge',
	description: 'Desafio da Buildbox',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning={true}>
			<body className={roboto.className} suppressHydrationWarning={true}>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	)
}
