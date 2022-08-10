import * as S from "./styles";

type Props = {
  value?: any;
  placeholder?: string;
  onChange?: (e: any) => void;
};

export function InputText({ placeholder, value, onChange }: Props) {
  return (
    <S.InputText placeholder={placeholder} value={value} onChange={onChange} />
  );
}
