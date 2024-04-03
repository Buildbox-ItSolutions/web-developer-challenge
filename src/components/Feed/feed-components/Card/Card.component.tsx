import { DataProps } from "../../Content/Content";
import * as S from "./Card.styled";
import Image from "../../../Image/Image.component";
import DeleteCard from "../../../../../public/delete/delete.svg?react";

const Card = ({
  onDelete,
  props,
}: {
  onDelete: React.MouseEventHandler<HTMLDivElement>;
  props: DataProps;
}) => {
  const { id, name, description, picture } = props;

  if (picture) {
    return (
      <S.CardStyle>
        <S.ImageBox>
          <Image src={picture} alt={name} />
        </S.ImageBox>

        <S.DescriptionBox>
          <p>{description}</p>

          <S.NameBox>
            <span>Enviado por</span>
            <h2>{name}</h2>
          </S.NameBox>
        </S.DescriptionBox>

        <S.DeleteBox onClick={onDelete} id={id}>
          <DeleteCard />
        </S.DeleteBox>
      </S.CardStyle>
    );
  }
};

export default Card;
