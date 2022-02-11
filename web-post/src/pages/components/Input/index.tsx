import {
  InputHTMLAttributes, // Importando os atributos padroes do Input
  useEffect,
  useRef,
} from "react";
import { useField } from "@unform/core";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  //* HTMLInputElement* parametro de tipagem
  name: string;
}

function Input({ name, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  // fazendo uma referencia na DOM com o input, para fazer uma manipulação direta.

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return <input defaultValue={defaultValue} ref={inputRef} {...rest} />;
}

export default Input;
