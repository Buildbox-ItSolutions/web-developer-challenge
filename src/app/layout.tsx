import type { Metadata } from "next";
import StoreProvider from "../providers/StoreProvider";
import ThemeProvider from "../providers/ThemProvider";
import "@styles/global.css";

export const metadata: Metadata = {
  title: "Buildbox - Web Challenge",
  description: "Desafio técnico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
