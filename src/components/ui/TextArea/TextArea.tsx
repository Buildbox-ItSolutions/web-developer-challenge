import { Text } from "./styles";

interface TextAreaProps {
  value: string;
  placeholder: string;
  name: string;
  onChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<TextAreaProps> = ({
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <Text
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

export default TextArea;
