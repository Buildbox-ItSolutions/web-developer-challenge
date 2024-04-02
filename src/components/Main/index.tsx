import React from "react";
import { StyledMain } from "./style";

interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <StyledMain>{children}</StyledMain>;
};
