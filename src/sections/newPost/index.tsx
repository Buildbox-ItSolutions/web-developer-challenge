import { ButtonsContainer, DeleteButton, InputsContainer, NewPostContainer, PostImageContainer, PostInputName, PostTextAreaMessage, PublishButton } from "./styles";
import imageIcon from "../../assets/image-icon.svg"
import { useRef, useState } from "react";

export default function NewPost() {
    const [postImageURL, setPostImageURL] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)

    function handleChangePostImage(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e)

        const file = e?.target?.files? e?.target?.files[0] : null

        if(!file) {
            return
        }
       
        setPostImageURL(URL.createObjectURL(file))

    }

    return <NewPostContainer>
        
        <input ref={inputRef} style={{display: 'none'}} type="file" accept="image/*" onChange={handleChangePostImage} />
        <PostImageContainer onClick={() => inputRef?.current?.click()} imageURL={postImageURL} >
            {!postImageURL && <img src={imageIcon} />}
        </PostImageContainer>

        <InputsContainer>
            <PostInputName placeholder="Digite seu nome" />

            <PostTextAreaMessage placeholder="Mensagem" />
        </InputsContainer>

        <ButtonsContainer>
            <DeleteButton>Descartar</DeleteButton>
            <PublishButton disabled>Publicar</PublishButton>
        </ButtonsContainer>

    </NewPostContainer>
}