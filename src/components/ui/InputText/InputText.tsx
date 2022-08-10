import { Input } from "./styles";

interface InputTextProps {
  value: string;
  placeholder: string;
  name: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputText: React.FC<InputTextProps> = ({
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
};

export default InputText;
