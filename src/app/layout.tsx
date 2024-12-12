import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { StoreProvider } from "@/store/StoreProvider";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="pt-br" className="scroll-smooth">
        <head>
          <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        </head>

        <Body>
          <Header />

          <Layout>
            {children}
          </Layout>
        </Body>
      </html>
    </StoreProvider>
  );
}
