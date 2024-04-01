import { TextareaStyled } from "./styles";
import { TextareaProps } from "./types";

const Textarea: React.FC<TextareaProps> = (props) => {
  const { onChange, ...rest } = props;

  return (
    <TextareaStyled
      {...rest}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export * from "./types";

export default Textarea;
