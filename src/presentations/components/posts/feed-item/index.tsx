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
      <S.ButtonFeedItemDelete>
        <DeleteIconButton
          label="Remover"
          onClick={() => {
            onClickDelete(item.id);
          }}
        />
      </S.ButtonFeedItemDelete>

      <>
        <ImagePost image={item.image} />
      </>
      <>
        <>{item.message}</>
        <>
          Enviado por
          {item.name}
        </>
      </>
    </S.Container>
  );
}
