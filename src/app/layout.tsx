import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/header";
import GlobalStyles from "@/styles/global-styles";
import { FeedProvider } from "@/context/feed";

export const metadata: Metadata = {
  title: "BuildBox",
  description: "Blogpost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <FeedProvider>
            <GlobalStyles />
            <Header />
            {children}
          </FeedProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
