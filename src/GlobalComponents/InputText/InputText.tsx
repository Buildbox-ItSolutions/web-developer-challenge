import React from "react";

import { Container } from "./styles";

type InputTextType = {
  placeholder: string;
  onChange: Function;
  height?: string;
  value: string;
};

/**
 * @param placeholder Insert text in input
 * @param onChange Return string value
 */
const InputText: React.FC<InputTextType> = ({
  placeholder,
  onChange,
  height = "40px",
  value,
}) => {
  return (
    <Container height={height}>
      <input
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </Container>
  );
};

export { InputText };
