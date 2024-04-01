import { ImageProps } from "next/image";

type AvatarDefault = {
  allowSelection?: false;
  onSelectFile?: (value: string) => void;
};

type AvatarAllowSelected = {
  allowSelection: true;
  onSelectFile: (value: string) => void;
};

export type AvatarProps = {
  size: number;
  allowSelection?: boolean;
  radius?: React.CSSProperties["borderRadius"];
} & Partial<Pick<ImageProps, "alt" | "src">> &
  (AvatarDefault | AvatarAllowSelected);

export type AvatarStyledProps = Pick<AvatarProps, "size" | "radius">;
