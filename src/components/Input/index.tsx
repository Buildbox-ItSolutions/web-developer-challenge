import { InputStyled } from "./styles";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = (props) => {
  const { onChange, ...rest } = props;

  return (
    <InputStyled {...rest} onChange={(event) => onChange(event.target.value)} />
  );
};

export * from "./types";

export default Input;
