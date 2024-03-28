import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/pages/Header/page";
import Feed from "@/pages/Feed/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "painel-buildbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Feed />
      </body>
    </html>
  );
}
