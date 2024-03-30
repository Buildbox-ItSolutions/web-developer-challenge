import * as S from "../styles";
import { InputText } from "../../../components/Input";
import { TextArea } from "../../../components/TextArea";

export const PostForm = () => {
  return (
    <S.Form>
      <S.CardImagePost>
        <S.ImagePost src="./image.svg" />
      </S.CardImagePost>

      <form>
        <InputText />
        <TextArea />
      </form>
    </S.Form>
  );
};
