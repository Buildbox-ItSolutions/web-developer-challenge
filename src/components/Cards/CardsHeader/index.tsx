import { CardsProps } from "..";
import { Header } from "./style";

export function CardsHeader({ children }: Readonly<CardsProps>) {
  return <Header>{children}</Header>;
}
