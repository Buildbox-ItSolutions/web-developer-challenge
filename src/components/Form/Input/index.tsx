import { InputHTMLAttributes, useState, FocusEvent } from "react";
import { Field, ErrorMessage, FieldProps } from "formik";
import { Container, Content, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input = ({ name, type, ...rest }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFilled(!!e.target.value);
    setIsFocused(false);
  };

  return (
    <Container>
      <Content
        isFocused={isFocused}
        isFilled={isFilled}
        textarea={type === "textarea"}
      >
        <Field
          id={name}
          name={name}
          as={type === "textarea" ? "textarea" : "input"}
          {...rest}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </Content>

      <ErrorMessage name={name}>{(msg) => <Error>{msg}</Error>}</ErrorMessage>
    </Container>
  );
};
