export interface TextAreaProps {
  id: string;
  placeholder: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
