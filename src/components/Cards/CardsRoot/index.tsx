import { CardsProps } from "..";
import { Root } from "./style";

export function CardsRoot({ children }: Readonly<CardsProps>) {
  return (
    <Root>
      {children}
    </Root>
  )
}
