import React, { useState, ChangeEvent, useContext } from 'react';
import { v4 } from 'uuid';
import { ReactComponent as ImagemPadrao } from '../../assets/image.svg';
import useForm from '../../hooks/useForm';
import { CardContext } from '../../CardContext';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import { CaixaBoxForm, Figure, GroupButtons } from './styles';
import { PreviewImage } from '../../models/PreviewImage';


const FormContainer: React.FC = () => {

    const nome = useForm('nome');
    const mensagem = useForm('mensagem');
    const foto = useForm('imagem');

    const { setDadosFormulario } = useContext(CardContext);
    const [imagem, setImagem] = useState<PreviewImage>(new PreviewImage('', {} as File));
    const controls = [nome, mensagem, imagem];

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const algumInputInvalido = notificarErrosDoFormularioSeHouver();
        if (algumInputInvalido)
            return;

        adicionarNovoCard();

        controls.forEach(x => x.clear());

        alert('Cadastrado com sucesso.')
    }

    function adicionarNovoCard() {

        const urlImagem = imagem.preview;

        setDadosFormulario({
            id: v4(),
            nome: nome.value,
            mensagem: mensagem.value,
            url: urlImagem
        });

    }

    function notificarErrosDoFormularioSeHouver(): boolean {

        const erros = controls
            .filter(x => !x.isValid());



        if (erros.length === 0)
            return false;

        const mensagem = erros
            .map(x => x.error)
            .join('\n');


        alert(mensagem)

        return true;

    }

    function onChange({ target }: ChangeEvent<HTMLInputElement>) {

        if (!target.files || target.files.length === 0)
            return;

        const file = target.files[0];
        const newImage = new PreviewImage(URL.createObjectURL(file), file);



        if (!newImage.isValid()) {
            // new PreviewImage('', {} as File)
            alert('Formato da imagem invalido.');
            return;
        }

        setImagem(newImage);
    }

    function handleReset() {
        controls.forEach(x => x.clear());
        setImagem(new PreviewImage('', {} as File));

    }

    return (
        <CaixaBoxForm onSubmit={handleSubmit}>
            <Figure>
                <label htmlFor="img" >
                    {imagem.preview !== ''
                        ? <img src={imagem.preview} alt={nome.value} />
                        : <ImagemPadrao />}
                </label>

                <Input
                    value={foto.value}
                    onBlur={foto.onBlur}
                    onChange={onChange}
                    type="file"
                    name="img"
                    id="img"
                />
            </Figure>

            <Input

                error={nome.error}
                onBlur={nome.onBlur}
                onChange={nome.onChange}
                value={nome.value}
                name="nome"
                type="text"
                placeholder="Digite seu nome"

            />

            <Textarea
                value={mensagem.value}
                error={mensagem.error}
                onBlur={mensagem.onBlur}
                onChange={mensagem.onChange}
                name="message"
                id="msg"
                placeholder="Mensagem"
            ></Textarea>



            <GroupButtons>
                <button type="button" onClick={handleReset}>Descartar</button>
                <button type="submit">Publicar</button>
            </GroupButtons>
        </CaixaBoxForm>
    )
}

export default FormContainer;