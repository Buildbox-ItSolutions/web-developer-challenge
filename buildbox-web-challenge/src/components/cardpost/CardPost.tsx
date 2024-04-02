import CardPostButtons from "../cardpostbuttons/CardPostButtons"
import { Campos, Container, ContainerFoto, Foto, Mensagem, Nome } from "./Styles"
import PhotoUpload from "../../assets/image@3x.png";
import { SetStateAction, useState } from "react";

const CardPost = () => {
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleNomeChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setNome(event.target.value);
    };

    const handleMensagemChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setMensagem(event.target.value);
    };

    const handleSubmit = () => {
        const novoPost = {
            id: Math.random(),
            foto: PhotoUpload, 
            texto: mensagem,
            autor: nome
        };

        console.log("Novo post:", novoPost);

        setNome('');
        setMensagem('');
    }

    const handleDiscard = () => {
        setNome('');
        setMensagem('');
    }

    return (
        <Container>
            <ContainerFoto>
                <Foto src={PhotoUpload} alt="" />
            </ContainerFoto>
            <Campos>
                <Nome type="text" value={nome} onChange={handleNomeChange} placeholder="Digite seu nome" />
                <Mensagem value={mensagem} onChange={handleMensagemChange} rows={4} placeholder="Mensagem" />
            </Campos>
            <CardPostButtons onSubmit={handleSubmit} onDiscard={handleDiscard}/>
        </Container>
    )
}

export default CardPost