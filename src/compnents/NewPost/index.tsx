import { Container, Form, ContainerButtons, EnviarImagem, ButtonPublicar, ButtonRemoverImagem } from "./styles"
import { FormEvent, useRef, useState } from 'react';
import { usePost } from '../../hooks/usePost'
import iconeImagem from '../../assets/image.svg'
import iconeTrash from '../../assets/trash.svg'

export default function NewPost() {
    const { addPost } = usePost();

    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [imagem, setImagem] = useState('');
    const imagemRef = useRef<HTMLInputElement | null>(null);

    const resetValues = () => {
        setNome('');
        setMensagem('');
        removerImagem();
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!imagem) {
            alert('Envie uma imagem!');
            return;
        }

        const data = { nome, mensagem, imagem };
        addPost(data);
        resetValues();
    }

    const postIsValid = () => {
        if (imagem && nome && mensagem) return true;

        return false;
    }

    const removerImagem = () => {
        setImagem('');
        if (imagemRef.current)
            imagemRef.current.value = '';
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <input
                    id="imagem-post"
                    ref={imagemRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const target = e.target as HTMLInputElement;
                        const file: File = (target.files as FileList)[0];
                        const newSrc = URL.createObjectURL(file);
                        setImagem(newSrc);
                    }}
                    style={{ display: 'none' }}
                />

                <EnviarImagem>
                    <label htmlFor="imagem-post">
                        <img
                            className={imagem ? 'imagem-post' : ''}
                            src={imagem || iconeImagem}
                            alt="Imagem post"
                        />
                    </label>

                    {imagem &&
                        <ButtonRemoverImagem
                            className="btn"
                            onClick={removerImagem}
                            title='Remover imagem'
                        >
                            <img src={iconeTrash} alt="Icone remover" />
                        </ButtonRemoverImagem>
                    }
                </EnviarImagem>

                <input
                    className='form-control'
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    required
                />
                <textarea
                    className="form-control"
                    placeholder="Mensagem"
                    rows={4}
                    value={mensagem}
                    onChange={e => setMensagem(e.target.value)}
                    required
                />

                <ContainerButtons>
                    <button className="btn-descartar" type="button" onClick={resetValues}>Descartar</button>
                    <ButtonPublicar
                        className="btn btn-primary"
                        type="submit"
                        isValid={postIsValid()}
                    >
                        Publicar
                    </ButtonPublicar>
                </ContainerButtons>
            </Form>
        </Container>
    )
}