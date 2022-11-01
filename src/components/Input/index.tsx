import { PropInput } from "./interface";
import { InputContainer } from "./styles";

function Input({ placeholder, name, onChange }: PropInput) {
  return (
    <InputContainer
      type="text"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
}

export default Input;
