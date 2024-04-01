export type ButtonAttributes = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "variant"
>;

export type ButtonProps = {
  width?: number;
  color?: string;
  variant?: "contained" | "ghost";
} & ButtonAttributes;

export type ButtonStyledProps = Required<Pick<ButtonProps, "color">>;
