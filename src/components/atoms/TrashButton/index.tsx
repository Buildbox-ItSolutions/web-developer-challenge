import { StyledImage } from "./styles";
import trash from "_assets/trash.svg";

interface PostUploadImageInputProps {
  onClick: () => any;
}

export const TrashButton = ({
  onClick,
}: PostUploadImageInputProps) => {
  return <StyledImage src={trash} onClick={onClick} />;
};
