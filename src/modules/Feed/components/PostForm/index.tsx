import * as S from "../../styles";
import { InputText } from "../../../../components/Input";
import { TextArea } from "../../../../components/TextArea";
import { Button } from "../../../../components/Button";
import { ImagePost } from "../ImagePost";

export const PostForm = () => {
  return (
    <S.Form>
      <ImagePost />
      <form>
        <InputText placeholder="Digite seu nome" />
        <TextArea />
        <S.Actions>
          <Button variant="transparent">Descartar</Button>
          <Button variant="primary">Publicar</Button>
        </S.Actions>
      </form>
    </S.Form>
  );
};
