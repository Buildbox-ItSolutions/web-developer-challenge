import styled from "styled-components";
import { Spacing, StandardSizeTypes } from "../../styles/global";
import { SeparatorProps } from "./separator.component.model";

export const SeparatorStyle = styled.div<SeparatorProps>`
  padding-bottom: ${(props) => getSeparatorSize(props.size)};
`;

export const HSeparatorStyle = styled.div<SeparatorProps>`
  padding-left: ${(props) => getSeparatorSize(props.size)};
`;

const getSeparatorSize = (size?: StandardSizeTypes) => {
  switch (size) {
    case "sm":
      return Spacing.Medium;
    case "lg":
      return Spacing.XXLarge;
    case "md":
    default:
      return Spacing.Small;
  }
};
