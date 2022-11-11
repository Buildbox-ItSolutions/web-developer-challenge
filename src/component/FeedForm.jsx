import { ActionsButtons, ButtonDelete, LabelDescartar, FeedFormStyled, Input, PhotoUpload, TextArea, ButtonPublicar } from '../styles';
import image from '../assets/img/image.svg'
import trash from '../assets/img/trash.svg'
import { useEffect, useState } from 'react';

export const FeedForm = ({ addFeed }) => {

    const [nome, setNome] = useState('');
    const [message, setMessage] = useState('');
    const [init, setInit] = useState(true);
    const [isActive, setIsActive] = useState(false);


    const onHandlePublicar = () => {
        const feed = {
            urlPhoto: '',
            name: nome,
            message: message
        }

        addFeed(feed)
        onReset()
    }

    const onReset = () => {
        setNome('')
        setMessage('')

        setInit(true)
        setIsActive(false)
    }

    const onHandleEnable = () => {
        if (init) {
            setIsActive(true)
        }
        setInit(false)
    }

    useEffect(() => {
        setInit(true)
        setIsActive(false)
    }, []);

    return (

        <FeedFormStyled>
            <PhotoUpload onClick={onHandleEnable}>
                <img src={image} alt=''/>
            </PhotoUpload>

            <ButtonDelete visibililty={isActive}>
                <img src={trash} alt=''/>
            </ButtonDelete>

            <Input
                type="text"
                isActive={isActive}
                value={nome}
                placeholder='Digite seu nome...'
                disabled={!isActive}
                onChange={(e) => setNome(e.target.value)}
            />
            <TextArea
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={message}
                disabled={!isActive}
                isActive={isActive}
                placeholder='Mensagem'
                onChange={(e) => setMessage(e.target.value)}
            />
            <ActionsButtons>
                <LabelDescartar isActive={isActive} onClick={onReset}>
                    Descartar
                </LabelDescartar>
                <ButtonPublicar isActive={isActive} onClick={onHandlePublicar}>
                    <span>Publicar</span>
                </ButtonPublicar>
            </ActionsButtons>

        </FeedFormStyled>
    )
}
