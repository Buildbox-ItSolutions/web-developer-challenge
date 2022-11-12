import React, { useEffect, useState } from "react";

import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styled-components";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: "disabled" | "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  typeButton = "disabled",
  ...props
}) => {
  const [disableButton, setDisableButton] = useState<boolean>(false);

  useEffect(() => {
    if (typeButton === "disabled") {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [typeButton]);

  return (
    <StyledButton className={typeButton} disabled={disableButton} {...props} />
  );
};

export default Button;
