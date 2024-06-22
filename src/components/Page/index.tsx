import { ReactNode } from "react";
import { Header } from "../Header";
import { PageContainer } from "./style";

interface Props {
  children: ReactNode;
}

export function Page({ children }: Readonly<Props>) {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Header />
      <PageContainer>{children}</PageContainer>
    </main>
  );
}
