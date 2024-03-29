import React, { forwardRef, ForwardedRef } from "react";
import { TextareaContainer } from "./styles";

interface InputProps {
  placeholder?: string;
  name: string;
}

// Define a functional component that accepts props and ref
const TextareaComponent: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  InputProps
> = ({ placeholder, name }, ref: ForwardedRef<HTMLTextAreaElement>) => {
  return (
    <TextareaContainer htmlFor="name">
      <textarea ref={ref} placeholder={placeholder} id={name} name={name} />
    </TextareaContainer>
  );
};

// Forward the ref to the child component
export const Textarea = forwardRef(TextareaComponent);
