export type TextareaProps = {
  onChange: (value: string) => void;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange">;
