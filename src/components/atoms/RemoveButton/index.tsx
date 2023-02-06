import deletesvg from "_assets/delete.svg";
import { RemoveImage } from "./styles";

interface RemoveButtonProps {
  onClick: () => any;
}

export const RemoveButton = ({ onClick }: RemoveButtonProps) => {
  return <RemoveImage src={deletesvg} onClick={onClick} />;
};
