import * as S from './styles';

export interface InputProps {
  name: string;
  value: string | undefined;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  cy: string;
}

const Input = ({ placeholder, name, onChange, value, cy }: InputProps) => {
  return (
    <S.Input
      type="text"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      data-cy={cy}
    />
  );
};

export default Input;
