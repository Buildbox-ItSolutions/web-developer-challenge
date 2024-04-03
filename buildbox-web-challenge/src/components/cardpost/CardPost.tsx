import CardPostButtons from "../cardpostbuttons/CardPostButtons"
import { Campos, Container, ContainerFoto, Foto, Mensagem, Nome } from "./Styles"
import PhotoUpload from "../../assets/image@3x.png";
import fotoExemplo from "../../assets/photo-base@3x.png"
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

    const handleSubmit = async () => {
        const novoId = Math.floor(Math.random() * 1000000).toString();
        const novoPost = {
            id: novoId,
            foto: fotoExemplo,
            texto: mensagem,
            autor: nome
        };
        try {
            const response = await fetch('http://localhost:4000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoPost),
            });
            if (!response.ok) {
                throw new Error('Erro ao enviar post');
            }
        
            setNome('');
            setMensagem('');
            alert('Post enviado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar novo post:', error);
            alert('Erro ao enviar o post. Por favor, tente novamente.');
        }
    };

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
            <CardPostButtons onSubmit={handleSubmit} onDiscard={handleDiscard} />
        </Container>
    )
}

export default CardPost