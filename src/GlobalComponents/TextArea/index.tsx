import React from "react";

import { Container } from "./styles";
type TextAreaType = {
  placeholder: string;
  onChange: Function;
  height?: string;
  value: string;
};

const TextArea: React.FC<TextAreaType> = ({
  onChange,
  placeholder,
  height = "80px",
  value,
}) => {
  return (
    <Container height={height}>
      <textarea
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </Container>
  );
};

export { TextArea };
