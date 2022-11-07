import { PropInput } from "./interface";
import { InputContainer } from "./styles";

function Input({ placeholder, name, onChange, value, cy }: PropInput) {
  return (
    <InputContainer
      type="text"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      data-cy={cy}
    />
  );
}

export default Input;
