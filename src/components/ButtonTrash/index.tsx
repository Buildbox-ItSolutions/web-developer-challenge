import { IconTrash } from "../Icons";
import * as S from "./styles";

type ButtonTrashProps = React.ComponentPropsWithoutRef<"button">;

export const ButtonTrash = ({ ...props }: ButtonTrashProps) => {
  return (
    <S.Button {...props}>
      <IconTrash />
    </S.Button>
  );
};
