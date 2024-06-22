import { CardsProps } from "..";
import { Footer } from "./style";

export function CardsFooter({ children }: Readonly<CardsProps>) {
  return <Footer>{children}</Footer>;
}
