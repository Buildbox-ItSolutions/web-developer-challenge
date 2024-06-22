import { CardsProps } from "..";
import { Body } from "./style";

export function CardsBody({ children }: Readonly<CardsProps>) {
  return <Body>{children}</Body>;
}
