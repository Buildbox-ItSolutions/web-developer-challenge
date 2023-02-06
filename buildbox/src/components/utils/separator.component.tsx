import { SeparatorProps } from "./separator.component.model";
import { HSeparatorStyle, SeparatorStyle } from "./separator.component.style";

export const Separator: React.FunctionComponent<SeparatorProps> = (props) => {
  return <SeparatorStyle {...props} />;
};

export const HSeparator: React.FunctionComponent<SeparatorProps> = (props) => {
  return <HSeparatorStyle {...props} />;
};