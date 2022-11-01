import { PropButton } from "./interfaces";
import { BtnContainer } from "./styles";
export default function Button({ text }: PropButton) {
  return <BtnContainer type="button">{text}</BtnContainer>;
}
