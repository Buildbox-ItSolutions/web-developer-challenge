export type TextAttributes = Required<
  Pick<React.HtmlHTMLAttributes<HTMLParagraphElement>, "children">
>;

export type TextProps = {
  size?: string;
  color?: string;
  weight?: "regular" | "medium";
  align?: React.CSSProperties["textAlign"];
} & TextAttributes;

export type TextStyledProps = Required<Pick<TextProps, "size" | "color">>;
