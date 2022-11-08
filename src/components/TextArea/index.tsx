import * as S from './styles';

export interface TextAreaProps {
  name: string;
  value: string | undefined;
  placeholder: string;
  rows: number;
  onChange: (value: any) => void;
}

const TextArea = ({
  name,
  value,
  placeholder,
  rows,
  onChange,
}: TextAreaProps) => {
  return (
    <S.TextArea
      rows={rows}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      data-cy="input-textarea"
    />
  );
};

export default TextArea;
