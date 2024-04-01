import React, { useState } from 'react';
import { PostFormStyled, ImageContainerStyled } from './PostForm.style';
import uploadIcon from '../../../../assets/uploadIcon.svg'
import trashIcon from '../../../../assets/trash.svg'
import Button from '../../../General/Components/Button/Button';

function PostForm() {
    const [uploadedImage, setUploadedImage] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const buttonShouldBeDisabled = !uploadedImage || !name || !message;

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
                    <img src={uploadedImage} alt="Uploaded" className='imageUplodedArea' />
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

            <div className='uploadImageContainer' onClick={() => document.getElementById('fileInput')?.click()} style={{cursor: 'pointer'}}>
                <img src={uploadIcon} alt="" />
                <input id="fileInput" type="file" name="image" onChange={handleImageUpload} style={{display: 'none'}} />
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
            <Button className='postButton' disabled={buttonShouldBeDisabled}>Publicar</Button>
        </div>
    </PostFormStyled>
  )
}

export default PostForm