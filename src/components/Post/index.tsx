import { Container, Image, Text, Span1, Span2, Icon } from './styles'
import { SyntheticEvent, useContext } from 'react'

import { PostsContext } from '../../contexts/PostsContext'

export const Post = (props: { postID: number, src?: string, message: string, name: string}) => {

    const src = props.src ? props.src : './image.png'
    const size = props.src ? '88px' : '24px'

    const {posts, setPosts} = useContext(PostsContext)

    const deletePost = (e: SyntheticEvent) => {
        const target = e.target as HTMLImageElement
        const tempPosts = posts.filter((v, i) => i.toString() !== target.title)
        if(setPosts) setPosts([...tempPosts])
    }

    return (
        <Container>
            <Image size={size}>
                <img src={src} alt='user' />
            </Image>
            <Text>
                <p>{props.message}</p>
                <Span1>Enviado por</Span1>
                <Span2>{props.name}</Span2>
            </Text>
            <Icon title={props.postID.toString()} onClick={deletePost} src='./delete.png' />
        </Container>
    )
}