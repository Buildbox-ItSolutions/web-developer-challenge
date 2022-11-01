import { PropInput } from "./interface";
import { InputContainer } from "./styles";

function Input({ placeholder, name, onChange, value }: PropInput) {
  return (
    <InputContainer
      type="text"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
