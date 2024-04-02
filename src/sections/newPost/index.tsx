import { ButtonsContainer, DeleteButton, InputsContainer, NewPostContainer, PostImageContainer, PostInputName, PostTextAreaMessage, PublishButton, TrashImage } from "./styles";
import imageIcon from "../../assets/image-icon.svg"
import { useRef, useState } from "react";
import { IPost, usePostContext } from "../../contexts/postContext";
import { v4 as uuidv4 } from 'uuid';
import trashIcon from "../../assets/trash.svg"

export default function NewPost() {
    const [newPost, setNewPost] = useState<IPost>({
        authorName: "",
        message: "",
        postPhoto: "",
        id: uuidv4()
    })
    
    const inputRef = useRef<HTMLInputElement>(null)
    
    const { addPost } = usePostContext()

    function handleChangePostImage(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e)

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
        setNewPost({message: "", authorName: "", postPhoto: "", id: uuidv4()})
        if(inputRef.current) {
            inputRef.current.value = ""
        }
    }

    return <NewPostContainer>
        
        <input ref={inputRef} style={{display: 'none'}} type="file" accept="image/*" onChange={handleChangePostImage} />
        
        <div style={{ display: 'flex', gap: '1rem'}}>
            <PostImageContainer onClick={() => inputRef?.current?.click()} imageURL={newPost.postPhoto} >
                {!newPost.postPhoto && <img src={imageIcon} />}
            </PostImageContainer>
            {newPost.postPhoto && <TrashImage onClick={() => {
                setNewPost(prev => ({...prev, postPhoto: ""}))
                if(inputRef.current) {
                    inputRef.current.value = ""
                }
            }} src={trashIcon} />}
        </div>

        <InputsContainer>
            <PostInputName placeholder="Digite seu nome" name="authorName" value={newPost.authorName} onChange={handleChange} />

            <PostTextAreaMessage placeholder="Mensagem" name="message" value={newPost.message} onChange={handleChange}/>
        </InputsContainer>

        <ButtonsContainer>
            <DeleteButton onClick={clearPost}>Descartar</DeleteButton>
            <PublishButton 
                disabled={!newPost.message || !newPost.authorName || !newPost.postPhoto} 
                onClick={() => {
                    addPost(newPost)
                    clearPost()
                }}
            >
                    Publicar
            </PublishButton>
        </ButtonsContainer>

    </NewPostContainer>
}