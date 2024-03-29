import React, { forwardRef, ForwardedRef } from "react";
import { TextareaContainer } from "./styles";

interface TextareaProps extends React.HTMLProps<HTMLLabelElement> {
  placeholder?: string;
  name: string;
}

// Define a functional component that accepts props and ref
const TextareaComponent: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ placeholder, name, ...props }, ref: ForwardedRef<HTMLTextAreaElement>) => {
  return (
    <TextareaContainer htmlFor="name" {...props}>
      <textarea ref={ref} placeholder={placeholder} id={name} name={name} />
    </TextareaContainer>
  );
};

// Forward the ref to the child component
export const Textarea = forwardRef(TextareaComponent);
