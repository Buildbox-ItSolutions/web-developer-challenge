import { ImageProps } from "next/image";

export type IconNames = "trash" | "delete";

export type IconProps = {
  size?: number;
  name: IconNames;
} & Pick<ImageProps, "className" | "onClick">;
