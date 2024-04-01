import React, { useState } from 'react';
import { PostFormStyled, ImageContainerStyled } from './PostForm.style';
import uploadIcon from '../../../../assets/uploadIcon.svg'
import trashIcon from '../../../../assets/trash.svg'
import Button from '../../../General/Components/Button/Button';
import UploadedImage from '../UploadedImage/UploadedImage';
import { v4 as uuidv4 } from 'uuid';
import { Post } from '../../interfaces/Post';

interface IPostForm{
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

function PostForm({setPosts}: IPostForm) {
    const [uploadedImage, setUploadedImage] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const buttonShouldBeDisabled = !uploadedImage || !name || !message;

    function addPost(){
        const newPost = {
            id: uuidv4(),
            name: name,
            message: message,
            imageUrl: uploadedImage
        };
        setPosts((currentPosts) => [newPost, ...currentPosts ]);

        discardChanges();
    }

    function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>){
        if (event.target.files) {
            setUploadedImage(URL.createObjectURL(event.target.files[0]));
        }
    }
    
    function removeImage(){
        setUploadedImage("");
    }

    function renderUplodedImage(){
        return(
            <ImageContainerStyled>
                    <UploadedImage src={uploadedImage} alt="Uploaded"/>
                    <img src={trashIcon} alt="delete image" className='deleteIcon' onClick={removeImage}/>       
            </ImageContainerStyled>
        )
    }

    function discardChanges(){
        setMessage("");
        setName("");
        setUploadedImage("");
    }
  return (
    <PostFormStyled>
    
        {uploadedImage ? 
            renderUplodedImage():
        (

            <div className='uploadImageContainer cursorPointer' onClick={() => document.getElementById('fileInput')?.click()} >
                <img src={uploadIcon} alt="" />
                <input id="fileInput" type="file" name="image" onChange={handleImageUpload}  className='invisible'/>
            </div>
        )}

        <input 
            type="text" 
            name="name" 
            placeholder="Digite seu nome"  
            className='textInput'
            value={name}
            onChange={(event) => setName(event.target.value)}
        />
        <textarea 
            name="message" 
            placeholder="Mensagem" 
            className='textInput messageInput'
            value={message}
            onChange={(event) => setMessage(event.target.value)}
        />
        <div className='buttonsArea'>
            <Button className='discardButton' onClick={discardChanges}>Descartar</Button>
            <Button className='postButton' disabled={buttonShouldBeDisabled} onClick={addPost}>Publicar</Button>
        </div>
    </PostFormStyled>
  )
}

export default PostForm