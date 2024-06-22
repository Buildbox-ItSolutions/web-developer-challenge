import { ReactNode } from "react";
import { CardsRoot } from "./CardsRoot";
import { CardsHeader } from "./CardsHeader";
import { CardsBody } from "./CardsBody";
import { CardsFooter } from "./CardsFooter";

export interface CardsProps {
  children: ReactNode;
}

export const Cards = {
  Root: CardsRoot,
  Header: CardsHeader,
  Body: CardsBody,
  Footer: CardsFooter,
};
