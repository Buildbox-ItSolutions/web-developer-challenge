import { Card } from "../components/card";
import { Header } from "../components/header";
import profileBackgroundImage from '../assets/image.svg'
import uuid from 'react-uuid'
import { toast } from 'react-toastify'
import { Container, ListCard, ButtonDeleteData, ButtonPublicData, FormContainer, InputFile, PostFormImage } from "./styles";
import { useState, FormEvent } from 'react'

interface ListPostsProps {
    id: string,
    name: string,
    image: string,
    description: string
}

export function PostPage() {
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [listPosts, setListPosts] = useState<ListPostsProps[]>([])

    function AddNewPost(event: FormEvent) {
        event.preventDefault()

        const postId = uuid()

        const newPost = {
            id: postId,
            name: name,
            image: image,
            description: description
        }

        if (!name || !image || !description) {
            toast.error("Por favor preencha todos os campos!")
        } else {
            setListPosts([...listPosts, newPost])

            setName("")
            setImage("")
            setDescription("")
            
            toast.success("Dados postado com sucesso!")
        }
    }

    function removePost(id: string) {
        const newPostList = listPosts.filter(post => post.id !== id)

        setListPosts(newPostList)
    }

    function resetFormData() {
        setName("")
        setImage("")
        setDescription("")
    }

    const { profileImage } = {
        profileImage: profileBackgroundImage
    }

    const newBackgroundButton = {
        background: "#8bbb27",
        color: "#fff"
    }

    return (
        <Container>
            <Header />

            <section>
                <FormContainer onSubmit={AddNewPost}>
                    <InputFile
                        id="image"
                        type="file"
                        onChange={
                            (event: any) => setImage(URL.createObjectURL(event.target.files[0]))
                        }
                    />
                    <label htmlFor="image">
                        <PostFormImage
                            src={!image ? profileImage : image}
                            alt="Image user"
                        />
                    </label>

                    <input
                        value={name}
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <textarea
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />

                    <div>
                        <ButtonDeleteData
                            type="button"
                            onClick={resetFormData}
                        >
                            Descartar
                        </ButtonDeleteData>

                        <ButtonPublicData
                            type="submit"
                            style={newBackgroundButton}
                        >
                            Publicar
                        </ButtonPublicData>
                    </div>
                </FormContainer>

                <h1>Feed</h1>

                {listPosts.map(post => (
                    <ListCard key={post.id}>
                        <Card
                            name={post.name}
                            image={post.image}
                            postRemoveFuction={() => removePost(post.id)}
                            description={post.description}
                        />
                    </ListCard>
                ))}
            </section>
        </Container>
    )
}