import { Container, Form, ContainerButtons } from "./styles"
import { FormEvent, useState } from 'react';

export default function NewPost() {
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [imagem, setImagem] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert('teste')
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <input className='form-control' placeholder="Digite seu nome" required />
                <textarea className="form-control" placeholder="Mensagem" rows={4} required />

                <ContainerButtons>
                    <button className="btn-descartar" type="button">Descartar</button>
                    <button className="btn btn-primary" type="submit">Publicar</button>
                </ContainerButtons>
            </Form>
        </Container>
    )
}