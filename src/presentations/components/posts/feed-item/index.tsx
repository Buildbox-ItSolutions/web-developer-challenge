import { IPostEntity } from "../../../../infra/entities/post";
import { DeleteIconButton } from "../../core/buttons/icons";
import { CustomGrid } from "../../core/grids/custom";
import ImagePost from "../image";

import * as S from "./styles";

type Props = {
  item: IPostEntity;
  onClickDelete: (id: number) => Promise<void>;
};

export function FeedItemPost({ item, onClickDelete }: Props) {
  return (
    <S.Container>
      <S.ButtonDeletePost>
        <DeleteIconButton
          label="Remover"
          onClick={() => {
            onClickDelete(item.id);
          }}
        />
      </S.ButtonDeletePost>

      <S.ImagePost>
        <ImagePost image={item.image} />
      </S.ImagePost>
      
      <S.PostContent>
        <S.PostMessage>{item.message}</S.PostMessage>
        <S.PostAuthor>
          <span>Enviado por</span>
          <S.PostName>{item.name}</S.PostName>
        </S.PostAuthor>
      </S.PostContent>
    </S.Container>
  );
}
