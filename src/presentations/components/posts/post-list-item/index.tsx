import { formatDistance } from "date-fns";
import { IPostEntity } from "../../../../infra/entities/post";
import { DeleteIconButton } from "../../core/buttons/icons";
import PostImage from "../post-image";

import * as S from "./styles";

type Props = {
  item: IPostEntity;
  onClickDelete: (id: number) => void;
};

export function PostListItem({ item, onClickDelete }: Props) {
  return (
    <S.Container>
      <S.PostButtonDelete>
        <DeleteIconButton
          label="Remover"
          onClick={() => {
            onClickDelete(item.id);
          }}
        />
      </S.PostButtonDelete>

      <S.PostImage>
        <PostImage image={item.image} />
      </S.PostImage>

      <S.PostContent>
        <S.PostMessage>{item.message}</S.PostMessage>
        <S.PostAuthor>
          <span>
            Enviado à{" "}
            {!!item?.createdAt
              ? formatDistance(new Date(item?.createdAt as string), new Date())
              : ""}{" "}
            por
          </span>
          <S.PostName>{item.name}</S.PostName>
        </S.PostAuthor>
      </S.PostContent>
    </S.Container>
  );
}
