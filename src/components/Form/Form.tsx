
import { FormEvent, useState } from 'react';
import SelectImg from '../../assets/images/icons/Select-img.svg';
import { Form as StyleForm } from './Form-style';
import { IPost } from '../../Interfaces/IPost';

interface FormProps {
    onSend: (post: IPost) => void;
}

export default function Form({ onSend }: FormProps) {

    const [imgSrc, setImgSrc] = useState<string>(SelectImg);
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const savePost = (event: FormEvent) => {
        // stop form of reloading
        event.preventDefault();        

        onSend({ imgSrc, name, message });
        cleanForm();
    }


    const updateImg = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const file = event.target.files?.[0];

        if (file) {
            const imgUrl = URL.createObjectURL(file);
            setImgSrc(imgUrl);
        }

    }

    const cleanForm = () => {
        setImgSrc(SelectImg);
        setName('');
        setMessage('');
    }

    return (
        <div>
            <StyleForm onSubmit={ (event) => savePost(event)}>
                <label htmlFor="imgUpload" id="imgWrapper">
                    <img id="previewImg" src={imgSrc} alt="Selecionar imagem"/>
                </label>
                
                <input id="imgUpload" type="file" accept="image/*" onChange={(e) => updateImg(e)} hidden />
                
                <input type="text" onChange={ ({ target }) => setName(target.value)} value={name} placeholder="Digite seu nome" />
                <textarea onChange={ ({ target }) => setMessage(target.value)} value={message} placeholder="Mensagem" ></textarea>

                <div className="buttons-wrapper">
                    <a href="#" onClick={() => cleanForm()}>Descartar</a>
                    <button type="submit" disabled={!name || !message}>Publicar</button>
                </div>
            </StyleForm>
        </div>
    );
}