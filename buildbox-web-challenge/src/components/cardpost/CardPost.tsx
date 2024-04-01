import CardPostButtons from "../cardpostbuttons/CardPostButtons"
import { Campos, Container, ContainerFoto, Foto, Mensagem, Nome, TextoMensagem, TextoNome } from "./Styles"
import PhotoUpload from "../../assets/image@3x.png";

const CardPost = () => {
    return (
        <Container>
            <ContainerFoto>
                <Foto src={PhotoUpload} alt="" />
            </ContainerFoto>
            <Campos>
                <Nome>
                    <TextoNome>
                        Digite seu nome
                    </TextoNome>
                </Nome>
                <Mensagem>
                    <TextoMensagem>
                        Mensagem
                    </TextoMensagem>
                </Mensagem>
            </Campos>
            <CardPostButtons />
        </Container>
    )
}

export default CardPost