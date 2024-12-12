import { ReactNode } from "react";
import { Container } from "./styles";

interface BoxContainerProps {
  children: ReactNode
}

export function BoxContainer({children}: BoxContainerProps) {
  return(
    <Container>
      {children}
    </Container>
  )
}