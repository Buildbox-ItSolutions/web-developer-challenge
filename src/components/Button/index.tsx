import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isValid?: boolean;
}

export const Button: React.FC<Props> = ({
  title,
  isValid = false,
  ...rest
}) => {
  return (
    <Container {...rest} isValid={isValid}>
      {title}
    </Container>
  );
};
