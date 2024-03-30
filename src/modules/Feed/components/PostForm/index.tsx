import * as S from "./styles";
import { InputText, TextArea, Button } from "../../../../components/index";
import { ImagePost } from "../ImagePost";
import { usePost } from "../../hooks/use-post";

export const PostForm = () => {
  const { register, handleSubmit, errors } = usePost();

  return (
    <form onSubmit={handleSubmit}>
      <S.FormGroup>
        <ImagePost />

        <InputText
          placeholder="Digite seu nome"
          {...register("name")}
          hasError={errors?.name?.message}
        />
        <TextArea {...register("messagePost")} hasError={errors?.messagePost?.message} />
        <S.Actions>
          <Button variant="transparent">Descartar</Button>
          <Button variant="primary" type="submit">
            Publicar
          </Button>
        </S.Actions>
      </S.FormGroup>
    </form>
  );
};
