import { SyntheticEvent, useContext, useState } from 'react'
import { PostsContext } from '../../contexts/PostsContext'
import { Container, Input, TextArea, Buttons, ErrorMSG } from './styles'

export const InsertFields = () => {
    //Referente ao valor dos inputs
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [photo, setPhoto] = useState('')

    //Referente às mensagens de erro
    const [nameShow, setNameShow] = useState(false)
    const [msgShow, setMsgShow] = useState(false)

    //Contexto global dos posts
    const {posts, setPosts} = useContext(PostsContext)

    const addPost = () => {
        if(name && message) {
            if(setPosts) setPosts([{name: name, message: message, photo: photo}, ...posts])

            setName('')
            setMessage('')
            setPhoto('')
            setNameShow(false)
            setMsgShow(false)
        } else if(message) {
            setNameShow(true)
            setMsgShow(false)
        } else if(name){
            setNameShow(false)
            setMsgShow(true)
        } else {
            setNameShow(true)
            setMsgShow(true)
        }
    }

    const discard = () => {
        setName('')
        setMessage('')
        setPhoto('')
        setNameShow(false)
        setMsgShow(false)
    }

    const selectIMG = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement
        if(target.files && target.files[0]){
            const img = target.files[0]
            setPhoto(p => URL.createObjectURL(img))
        }
    }

    const src = photo ? photo : './image.png'
    const size = photo ? 'cover' : 'auto'

    return (
        <Container size={size} src={src}>
            <label htmlFor="file"></label>
            <input onChange={selectIMG} hidden type="file" id="file" />
            <Input value={name} onChange={e => {setName(e.target.value)}}
                placeholder='Digite seu nome' />
            {nameShow && <ErrorMSG>Informe seu nome!</ErrorMSG>}
            <TextArea value={message} onChange={e => {setMessage(e.target.value)}}
                placeholder='Mensagem' />
            {msgShow && <ErrorMSG>Informe sua mensagem!</ErrorMSG>}
            <Buttons>
                <span onClick={discard}>Descartar</span>
                <button onClick={addPost}>Publicar</button>
            </Buttons>
        </Container>
    )
}