import { TextProps } from "./text-component.component.model";
import { TextStyled } from "./text-component.style";

export const CustomText: React.FunctionComponent<TextProps> = (props) => {
  return (
    <TextStyled {...props} size={props.size}>
      {" "}
      {props.children}
    </TextStyled>
  );
};
