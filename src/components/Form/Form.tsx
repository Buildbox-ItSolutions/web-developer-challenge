
import { FormEvent, useState } from 'react';
import SelectImg from '../../assets/images/icons/Select-img.svg';
import { Form as StyleForm } from './Form-style';
import { addPost } from '../../services/posts/postServices.ts';

export default function Form() {

    const [img, setImg] = useState(SelectImg);
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const addNewPost = (event: FormEvent) => {
        event.preventDefault();        

        addPost({ imgSrc: img, name, message });
    }

    return (
        <div>
            <StyleForm onSubmit={ (event) => addNewPost(event)}>
                <label htmlFor="imgUpload" id="imgWrapper">
                    <img id="test" src={img} alt="Selecionar imagem"/>
                </label>
                
                <input id="imgUpload" type="file" accept="image/*" hidden />
                
                <input type="text" onChange={ ({ target }) => setName(target.value)} placeholder="Digite seu nome" />
                <textarea placeholder="Mensagem" onChange={ ({ target }) => setMessage(target.value)}></textarea>

                <div className="buttons-wrapper">
                    <a href="#">Descartar</a>
                    <button type="submit" disabled={!name || !message}>Publicar</button>
                </div>
            </StyleForm>
        </div>
    );
}