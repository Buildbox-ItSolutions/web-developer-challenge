import * as S from "./styles";

type Props = S.ButtonProps & {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export function Button({ onClick, children, ...props }: Props) {
  return (
    <S.Button onClick={onClick} {...props}>
      {children}
    </S.Button>
  );
}

type PrimaryButtonProps = Omit<Props, "backgroundColor" & "color">;

export const PrimaryButton = (props: PrimaryButtonProps) => {
  return <Button backgroundColor="#71bb00" color="#fff" {...props} />;
};

type DisabledButtonProps = Omit<
  Props,
  "backgroundColor" & "color" & "padding" & "width"
>;

export const DisabledButton = (props: DisabledButtonProps) => {
  return (
    <Button
      backgroundColor="transparent"
      color="#5f5f5f"
      padding="12px 0 24px 0"
      width="auto"
      {...props}
    />
  );
};
