export type InputProps = {
  label?: string;
  block?: boolean;
  value?: string;
  invalid?: boolean;
  message?: string;
  placeholder?: string;
  maxLength?: number;
  onChange?: (value: string) => void;
};
