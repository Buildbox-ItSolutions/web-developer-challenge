import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import  Header  from "../components/Header/Header"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const roboto_init = Roboto({
  subsets: ['latin'], 
  weight: "300",
  variable: "--font-roboto"
})

export const metadata: Metadata = {
  title: "Web Challenge",
  description: "Build Box",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_init.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
