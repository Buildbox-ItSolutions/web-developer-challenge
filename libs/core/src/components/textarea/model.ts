export type TextAreaProps = {
  label?: string;
  block?: boolean;
  invalid?: boolean;
  height?: boolean;
  message?: string;
  cols?: number;
  value?: string;
  rols?: number;
  maxLength?: number;
  placeholder?: string;
  onChange?: (value: string) => void;
};
