import React from 'react'
import { useContext } from 'react'
import { ProviderContext } from '../../context/app-provider/provider'
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import { FeedItemProps } from './types'
import { CancelIcon, Card, Container, MessageContainer, NameContainer, SendByContainer } from './styles'

const FeedItem = ({ post }: FeedItemProps) => {
    const { removePost } = useContext(ProviderContext)
    const handleRemovePost = () => {
        removePost(post)
    }

    return (
    <Container container spacing={2}>
        <Grid item sm={3}></Grid>
        <Grid item sm={6}>
            <Card>
                <Grid container>
                    <Grid item sm={3}>
                        <Avatar src={post.foto} style={{  marginTop: 32 }} sx={{ width: 88, height: 88 }} />
                    </Grid>
                    <Grid item sm={8}>
                        <MessageContainer>{post.mensagem}</MessageContainer>
                        <SendByContainer>Enviado por</SendByContainer>
                        <NameContainer>{post.nome}</NameContainer>
                    </Grid>
                    <Grid textAlign={'right'} item sm={1}>
                        <CancelIcon onClick={handleRemovePost} />
                    </Grid>
                </Grid>
            </Card>
        </Grid>
        <Grid item sm={3}></Grid>
    </Container>
    )
}

export default FeedItem