import { ImagePost } from "../ImagePost";
import * as S from "./styles";

export const CardPost = () => {
  return (
    <S.Container>
      <S.CardPostInner>
        <ImagePost />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officiis quos optio a
            cum iure? Nemo accusamus non accusantium illo officiis fuga numquam eaque perspiciatis!
          </p>

          <S.Authorship>
            <span>Enviado por:</span>
            <span>Joaquim da Silva</span>
          </S.Authorship>
        </div>
      </S.CardPostInner>
    </S.Container>
  );
};
