import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addPost } from '../../store/actionPosts';
import { PublishBoxContainer, ButtonsContainer, ImageContainer, TrashIcon } from './styles';
import Image from '../Image';
import Input from '../Input';
import TextArea from '../TextArea';
import Button from '../Button';
import trashIcon from '../../assets/images/trash-icon.png';

const PublishBox:React.FC = () => {
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [image, setImage] = useState<string | undefined>(undefined);
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

    const dispatch: Dispatch<any> = useDispatch();

    const savePost = React.useCallback(
        (post: IPost) => dispatch(addPost(post)),
        [dispatch]
    );

    const handleName:React.FormEventHandler<HTMLInputElement> = (event) => {
        setName((event.target as HTMLInputElement).value);
    };

    const handleMessage:React.FormEventHandler<HTMLTextAreaElement> = (event) => {
        setMessage((event.target as HTMLTextAreaElement).value);
    };

    const handleClearForm = () => {
        setName('');
        setMessage('');
        setImage(undefined);
    };

    const handleSendPost = () => {
        savePost({name, image, message});
        setName('');
        setMessage('');
        setImage(undefined);
    }

    useEffect(() => {
        if (name.length < 3 || message.length < 5 || !image) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
    },[name, message, image]);

    return (
        <PublishBoxContainer>
            <ImageContainer>
                <Image src={image} setImage={setImage} />
                { image && (
                    <TrashIcon src={trashIcon} onClick={() => setImage(undefined)} />
                ) }
            </ImageContainer>
            <Input onChange={handleName} placeholder={"Digite seu nome"} value={name}/>
            <TextArea placeholder={"Mensagem"} value={message} onChange={handleMessage} />
            <ButtonsContainer>
                <Button className="underlined" onClick={handleClearForm} > Descartar </Button>
                <Button className="primary" disabled={buttonDisabled} onClick={handleSendPost} > Publicar </Button>
            </ButtonsContainer>
        </PublishBoxContainer>
    );
};

export default PublishBox;