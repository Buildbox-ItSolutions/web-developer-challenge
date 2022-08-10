import TrashImage from "../../../../../assets/images/trash.png";
import DeleteImage from "../../../../../assets/images/delete.png";

import * as S from "./styles";

type Props = {
  image?: string;
  label?: string;
  onClick?: () => void;
};

export function IconButton({ onClick, image, label }: Props) {
  return (
    <S.IconButton>
      <img src={image} alt={label} onClick={onClick} />
    </S.IconButton>
  );
}

export const TrashIconButton = (props: Props) => {
  return <IconButton {...props} image={TrashImage} />;
};

export function DeleteIconButton(props: Props) {
  return <IconButton {...props} image={DeleteImage} />;
}
