import {
    Container,
    Foto,
    TextoPost,
    Textos,
    BotaoRemover,
    ConteudoPost,
    PostInfos,
} from "./Styles";
import Remover from "../../assets/delete@3x.png";
import ICardFeed from "../../interfaces/ICardFeed";
  
  const CardFeed = ({ id, foto, texto, autor }: ICardFeed) => {
    return (
      <Container>
        <BotaoRemover src={Remover} alt='' />
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