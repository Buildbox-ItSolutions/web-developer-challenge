import * as S from "./styles";
import { InputText, TextArea, Button, ImagePost } from "../../../../components/index";
import { useCreatePost } from "../../hooks/use-post";

import { useRef } from "react";

export const PostForm = () => {
  const { register, handleSubmit, errors, handleReset, imgUrl, setImgUrl } = useCreatePost();
  const inputRef = useRef(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = event => {
        if (event.target?.result) {
          const url = event.target.result.toString();
          setImgUrl(url);
          register("imgUrl", { value: url });
        }
      };

      reader.readAsDataURL(selectedFile);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <S.FormGroup>
        <ImagePost ref={inputRef} onChange={handleFileChange} $url={imgUrl} $isDisabled={false} />

        <InputText
          placeholder="Digite seu nome"
          {...register("author")}
          $hasError={errors?.author?.message}
        />
        <TextArea
          {...register("messagePost")}
          $hasError={errors?.messagePost?.message}
          placeholder="Sua mensagem"
        />
        <S.Footer>
          <S.Errors>
            {errors.author && <span>{errors.author.message}</span>}
            {errors.messagePost && <span>{errors.messagePost.message}</span>}
          </S.Errors>

          <S.Actions>
            <Button variant="transparent" onClick={handleReset} type="button">
              Descartar
            </Button>
            <Button variant="primary" type="submit">
              Publicar
            </Button>
          </S.Actions>
        </S.Footer>
      </S.FormGroup>
    </form>
  );
};
