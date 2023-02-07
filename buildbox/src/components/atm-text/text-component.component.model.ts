import { HTMLAttributes } from "react";
import { StandardSizeTypes } from "../../styles/global";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: StandardSizeTypes;
}
