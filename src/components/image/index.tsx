import React, { useRef } from 'react';
import { Container, CustomDeleteIcon, FileInput, ImageContainer, ImageIcon, StyledImage } from './style';

export default function ImageInput({ onDeleteImage, imageUrl, setNewPost }: {onDeleteImage:any, imageUrl:string, setNewPost: any}){
    const inputRef = useRef(null);

    const handleFileChange = (event: any) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageBase64 = reader.result as string;
                setNewPost((prevPost: any) => ({
                    ...prevPost,
                    image: imageBase64
                }));
            };
            reader.readAsDataURL(file); 
        }
    };

    return (
        <Container>
        <ImageContainer>
            {imageUrl ? (
                <StyledImage src={imageUrl} alt="Imagem" />
            ) : (
                <ImageIcon />
            )}
            <FileInput
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={inputRef}
            />
        </ImageContainer>
        {
            imageUrl && <CustomDeleteIcon onClick={onDeleteImage} />
        }
    </Container>
    );
};
