import { ReactNode } from "react";
import { BackgroundContainerStyled } from "./background.component.style";

interface BackgroundProps {
  children: ReactNode;
}

export const Background: React.FunctionComponent<BackgroundProps> = ({
  children,
}) => {
  return <BackgroundContainerStyled>{children}</BackgroundContainerStyled>;
};
