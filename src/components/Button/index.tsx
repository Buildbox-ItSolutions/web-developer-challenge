import { PropButton } from "./interfaces";
import { BtnContainer } from "./styles";
export default function Button({ text, onClick }: PropButton) {
  return (
    <BtnContainer type="button" onClick={onClick}>
      {text}
    </BtnContainer>
  );
}
