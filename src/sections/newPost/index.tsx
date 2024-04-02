import { ButtonsContainer, DeleteButton, InputsContainer, NewPostContainer, PostImageContainer, PostInputName, PostTextAreaMessage, PublishButton } from "./styles";
import imageIcon from "../../assets/image-icon.svg"
import { useRef, useState } from "react";
import { usePostContext } from "../../contexts/postContext";

export default function NewPost() {
    const [newPost, setNewPost] = useState({
        name: "",
        message: "",
        postPhoto: ""
    })
    
    const inputRef = useRef<HTMLInputElement>(null)
    
    const { addPost } = usePostContext()

    function handleChangePostImage(e: React.ChangeEvent<HTMLInputElement>) {

        const file = e?.target?.files? e?.target?.files[0] : null

        if(!file) {
            return
        }
       
        setNewPost(prev=> ({ ...prev, postPhoto: URL.createObjectURL(file)}))
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement> |  React.ChangeEvent<HTMLTextAreaElement>) {
        const {name, value} = e.target

        setNewPost(prev=> ({ ...prev, [name]: value}))
    }

    function clearPost() {
        setNewPost({message: "", name: "", postPhoto: ""})
    }


    return <NewPostContainer>
        
        <input ref={inputRef} style={{display: 'none'}} type="file" accept="image/*" onChange={handleChangePostImage} />
        <PostImageContainer onClick={() => inputRef?.current?.click()} imageURL={newPost.postPhoto} >
            {!newPost.postPhoto && <img src={imageIcon} />}
        </PostImageContainer>

        <InputsContainer>
            <PostInputName placeholder="Digite seu nome" name="name" value={newPost.name} onChange={handleChange} />

            <PostTextAreaMessage placeholder="Mensagem" name="message" value={newPost.message} onChange={handleChange}/>
        </InputsContainer>

        <ButtonsContainer>
            <DeleteButton onClick={clearPost}>Descartar</DeleteButton>
            <PublishButton 
                disabled={!newPost.message && !newPost.name && !newPost.postPhoto} 
                onClick={() => addPost(newPost)}
            >
                    Publicar
            </PublishButton>
        </ButtonsContainer>

    </NewPostContainer>
}