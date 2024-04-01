import { Container, Foto, TextoPost, Textos, BotaoRemover, ConteudoPost, AutorPost } from "./Styles"
import FotoPostFeed from "../../assets/photo-base@3x.png";
import Remover from "../../assets/delete@3x.png";

const CardFeed = () => {
    return (
        <Container>
            <BotaoRemover src={Remover} alt="" />
            <ConteudoPost>
                <Foto src={FotoPostFeed} alt="" />
                <Textos>
                    <TextoPost>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.
                    </TextoPost>
                    <span>
                        Enviado por
                    </span>
                    <AutorPost>
                        Manuela Oliveira
                    </AutorPost>
                </Textos>
            </ConteudoPost>
        </Container>
    )
}

export default CardFeed