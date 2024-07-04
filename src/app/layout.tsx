import { ReactQueryRegistry, StyledComponentsRegistry } from '@/lib';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './global.css';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'buildbox',
  description: 'Web challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <ReactQueryRegistry>{children}</ReactQueryRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
