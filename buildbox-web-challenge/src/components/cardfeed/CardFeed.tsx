import {
  Container,
  Foto,
  TextoPost,
  Textos,
  BotaoRemover,
  ConteudoPost,
  PostInfos
} from "./Styles";
import Remover from "../../assets/delete@3x.png";
import ICardFeed from "../../interfaces/ICardFeed";

interface Props extends ICardFeed {
  onRemove: () => void;
}

const CardFeed: React.FC<Props> = ({ id, foto, texto, autor, onRemove }) => {
  return (
    <Container>
      <BotaoRemover onClick={onRemove}>
        <img src={Remover} alt="" />
      </BotaoRemover>
      <ConteudoPost key={id}>
        <Foto src={foto} alt='' />
        <Textos>
          <TextoPost>
            {texto}
          </TextoPost>
          <PostInfos>
            Enviado por <span>{autor}</span>
          </PostInfos>
        </Textos>
      </ConteudoPost>
    </Container>
  );
};

export default CardFeed;