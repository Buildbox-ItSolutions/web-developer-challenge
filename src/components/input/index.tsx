import React, { forwardRef, ForwardedRef } from "react";
import { InputContainer } from "./styles";

interface InputProps extends React.HTMLProps<HTMLLabelElement> {
  placeholder?: string;
  name: string;
}

// Define a functional component that accepts props and ref
const InputComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ placeholder, name, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <InputContainer htmlFor="name" {...props}>
      <input ref={ref} placeholder={placeholder} id={name} name={name} />
    </InputContainer>
  );
};

// Forward the ref to the child component
export const Input = forwardRef(InputComponent);
