import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import usePosts from '../../hooks/usePosts'
import useSnackbar from '../../hooks/useSnackbar'
import { Post as PostType } from '../../types/post'
import { ButtonOutlinedStyled, ButtonTextStyled, CardContainer, Container, InputImage, TextFieldStyled } from './styles'

const Post = () => {
    const { addPost } = usePosts()
    const { showMessage } = useSnackbar()
    
    const [name, setName] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [image, setImage] = useState<any>()
    

    const handleClean = () => {
        setMessage('')
        setName('')
        setImage(undefined)
    }

    const handleAddPost = () => {
        if(!name && !message && !image){
            showMessage('Preencha todos os campos')
            return;
        }
        const post: PostType = {
            nome: name,
            mensagem: message,
            foto: URL.createObjectURL(image),
        }
        addPost(post)
        handleClean()
    }

    const handleName: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (event) => {
        setName(event.target.value)
    }

    const handleMessage: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (event) => {
        setMessage(event.target.value)
    }

    const handleChangeImage = (event: any) => {
        setImage(event.target.files[0])
    }

    return (
    <Container container spacing={2}>
        <Grid item sm={3}></Grid>
        <Grid item sm={6}>
            <CardContainer>
                <InputImage type="file" accept="image/*" onChange={handleChangeImage} />
                <TextFieldStyled value={name} onChange={handleName} fullWidth placeholder="Digite seu nome" label="Digite seu nome" variant="outlined" />
                <TextFieldStyled value={message} onChange={handleMessage} style={{ marginTop: 8 }} rows={3} multiline fullWidth placeholder="Mensagem" label="Mensagem" variant="outlined" />
                <Stack marginTop="32px" justifyContent="flex-end" spacing={2} direction="row">
                    <ButtonTextStyled onClick={handleClean} variant="text">Descartar</ButtonTextStyled>
                    <ButtonOutlinedStyled onClick={handleAddPost} variant="contained">Publicar</ButtonOutlinedStyled>
                </Stack>
            </CardContainer>
        </Grid>
        <Grid item sm={3}></Grid>
    </Container>
    )
}

export default Post