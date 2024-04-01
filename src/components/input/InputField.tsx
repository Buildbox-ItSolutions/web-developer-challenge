import { InputStyled, TextAreaStyled } from "./styles";

interface InputFieldType {
  type: "text" | "textarea";
  name: string;
  placeholder: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}: InputFieldType) => {
  return type === "text" ? (
    <InputStyled
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  ) : (
    <TextAreaStyled
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputField;
