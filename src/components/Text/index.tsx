import { TextStyled } from "./styles";
import { TextProps } from "./types";

const Text: React.FC<TextProps> = (props) => {
  const {
    size = "md",
    align = "left",
    weight = "regular",
    color = "font",
    ...rest
  } = props;

  return (
    <TextStyled
      {...rest}
      size={size}
      color={color}
      className={`${align} ${weight}`}
    />
  );
};

export * from "./types";

export default Text;
