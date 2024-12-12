import { useRef, useEffect, TextareaHTMLAttributes } from "react";
import { useField } from "@unform/core";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

export default function Textarea({ name, ...rest }: TextareaProps) {
  const txtArea = useRef<HTMLTextAreaElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: txtArea.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <textarea
      ref={txtArea}
      id={fieldName}
      defaultValue={defaultValue}
      {...rest}
    />
  );
}
