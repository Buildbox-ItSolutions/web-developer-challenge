import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { PostProvider } from "@/context/PostContext";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        <PostProvider>
          {children}
        </PostProvider>
      </body>
    </html>
  );
}
