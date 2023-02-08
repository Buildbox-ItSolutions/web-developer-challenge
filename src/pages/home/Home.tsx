import CardPost from "../../components/card/CardPost";
import Header from "./Header";
import { Button, Container, ContainerButton, Form, ImgPlaceholder, Input, TextArea, UploadFile, UploadFileConteiner } from "./Styles";
import Image from "../../assets/image-placeholder.svg"
import { useState } from "react";

interface CardPostProps {
    name?: string
    image?: string
    message?: string
}

export default function Home() {
    const [image, setImage] = useState(undefined);
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    

    const handleFileChange = (event: any ) => {
        console.log(event)
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (event: any ) => {
          setImage(event.target.result);
        };
    
        reader.readAsDataURL(file);
    };

    const [postList, setPostList] = useState<Array<CardPostProps>>([]);
    const resetPostPreview = () => {
        setImage(undefined)
        setName("")
        setMessage("")
    }

    const handleAddPost = (name: string, image: string | undefined, message: string) => {
        setPostList([...postList, { name, image, message }]);
        resetPostPreview()
    };

    const handleDeletePost = (index: number) => {
        setPostList(postList.filter((_, idx) => idx !== index));
    };

  

    return(
        <>
            <Header/>

            <Container>
                <Form>
                    
                    { image === undefined ?
                        <UploadFileConteiner>
                            <label  style={{cursor: "pointer"}}>
                                <img src={Image}/>
                                <UploadFile type="file" onChange={handleFileChange}/>
                            </label>
                        </UploadFileConteiner>
                    :
                        <ImgPlaceholder src={image} alt="Uploaded Image"/>
                    }

                    <Input placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)}/>
                    <TextArea placeholder="Mensagem" value={message} onChange={(e) => setMessage(e.target.value)}/>
                    
                    <ContainerButton>
                        <Button 
                            set="link" 
                            onClick={() => resetPostPreview()}
                        >
                            Descartar
                        </Button>
                        <Button onClick={() => handleAddPost(name, image, message)}>Publicar</Button>
                    </ContainerButton>
                </Form>

                { postList.length > 0 && postList.map((post, index) => {
                return(
                    <CardPost name={post.name} image={post?.image} message={post.message} index={index} deletePost={handleDeletePost}/>
                )
            })

            }
            </Container>

           

            
        </>
    )
}