export interface PropInput {
  placeholder: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
}
