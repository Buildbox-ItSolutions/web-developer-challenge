import CardPostButtons from "../cardpostbuttons/CardPostButtons"
import { Container, ContainerFoto, Foto, Nome, TextoNome } from "./Styles"
import PhotoUpload from "../../assets/image@3x.png";

const CardPost = () => {
    return (
        <Container>
            <ContainerFoto>
                <Foto src={PhotoUpload} alt="" />
            </ContainerFoto>
            <Nome>
                <TextoNome>
                    Digite seu nome
                </TextoNome>
            </Nome>
            {/* <Mensagem>
                <TextoMensagem>
                    Mensagem
                </TextoMensagem>
            </Mensagem> */}
            <CardPostButtons />
        </Container>
    )
}

export default CardPost