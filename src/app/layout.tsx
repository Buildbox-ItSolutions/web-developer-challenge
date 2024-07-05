import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "buildbox - WEB CHALLANGE",
  description: "O candidato ideal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </Providers>
      </body>
    </html>
  );
}
