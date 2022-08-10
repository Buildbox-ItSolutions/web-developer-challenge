import * as S from "./styles";

type Props = {
  value?: any;
  placeholder?: string;
  onChange?: (e: any) => void;
};

export function InputTextArea({ placeholder, value, onChange }: Props) {
  return (
    <S.TextArea placeholder={placeholder} onChange={onChange} value={value} />
  );
}
