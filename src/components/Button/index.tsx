import { PropButton } from "./interfaces";
import { BtnContainer } from "./styles";
export default function Button({ text, onClick, typeBtn }: PropButton) {
  return (
    <BtnContainer type="button" onClick={onClick} typeBtn={typeBtn}>
      {text}
    </BtnContainer>
  );
}
