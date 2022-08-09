import TrashImage from "../../../../assets/images/trash.png";
import { CustomIconButton } from "./styles";

type Props = {
  src?: string;
  alt?: string;
  onClick?: () => void;
};

export function IconButton({ src, alt, onClick }: Props) {
  return (
    <CustomIconButton>
      <img src={src} alt={alt} onClick={onClick} />
    </CustomIconButton>
  );
}

export function TrashButton(props: Props) {
  return <IconButton {...props} src={TrashImage} />;
}
