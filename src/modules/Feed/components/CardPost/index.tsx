import { ImagePost } from "../ImagePost";
import * as S from "./styles";

export const CardPost = () => {
  return (
    <S.CardPostContainer>
      <ImagePost />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officiis quos optio a cum
        iure? Nemo accusamus non accusantium illo officiis fuga numquam eaque perspiciatis! Hic
        veniam quidem non reiciendis.
      </p>

      <span>Enviado por:</span>
      <span>Joaquim da Silva</span>
    </S.CardPostContainer>
  );
};
