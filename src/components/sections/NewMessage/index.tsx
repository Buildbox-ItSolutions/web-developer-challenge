import { useState, FormEvent } from 'react';

import { 
    StyledNewMessageSection, 
    StyledBox, 
    StyledProfile,
    StyledImgContainer,
    StyledTrash,
    StyledButtonContainer
} from './styles';

import { useMessages } from '../../../hooks/useMessages'

import BoxImage from '../../../images/image.svg'
import Trash from '../../../images/trash.svg'

const NewMessageBox = () => {

    const coolImages = require('cool-images')

    const { createMessage } = useMessages()

    const [image, setImage] = useState(BoxImage)
    const [name, setName] = useState('')
    const [text, setText] = useState('')

    const img = image !== BoxImage


    async function handleCreateNewMessage(event: FormEvent){
        event.preventDefault()

        await createMessage({
            image,
            name,
            text
        })

        removeInputs()
    }

    function removeInputs(){
        setImage(BoxImage)
        setName('')
        setText('')
    }

    
    return(
        <StyledNewMessageSection>
            <div className="inner">
                <StyledBox onSubmit={handleCreateNewMessage}>

                    {image === BoxImage ? (
                        <StyledProfile
                            onClick={() => setImage(coolImages.one(88, 88))}
                        >                    
                            <img 
                                alt="" 
                                src={image} 
                            />
                        </StyledProfile>
                    ) : (
                        <StyledImgContainer>
                            <StyledProfile>
                                <img 
                                    className="ProfileImage"
                                    alt="" 
                                    src={image} 
                                />
                                
                            </StyledProfile>
                                <StyledTrash
                                alt="trash" 
                                src={Trash}
                                onClick={() => setImage(BoxImage)}
                            />
                          </StyledImgContainer>  
                    )}
                    
                    <input 
                        placeholder='Digite o seu nome'
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />

                    <textarea 
                        placeholder='Mensagem'
                        value={text}
                        onChange={event => setText(event.target.value)}
                    />
                    

                    <StyledButtonContainer>
                        <button
                            type="button"
                            onClick={removeInputs}
                        >
                            Descartar
                        </button>

                        <button 
                            type="submit"
                            disabled= {!name || !text || !img === true}
                        >
                            Publicar
                        </button>
                    </StyledButtonContainer>
                </StyledBox>
            </div>         
        </StyledNewMessageSection>
    )
}

export default NewMessageBox;