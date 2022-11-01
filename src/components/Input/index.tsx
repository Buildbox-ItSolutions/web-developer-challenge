import { PropInput } from "./interface";
import { InputContainer } from "./styles";

function Input({ placeholder }: PropInput) {
  return <InputContainer type="text" placeholder={placeholder} />;
}

export default Input;
