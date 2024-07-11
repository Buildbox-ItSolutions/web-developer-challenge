import React, { useRef } from 'react';
import styled from 'styled-components';
import { BsImage } from 'react-icons/bs'; 
import { PiTrashSimple } from "react-icons/pi";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    border: 0.5px solid #3B3B3B;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const StyledImage = styled.img`
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 40px;
`;

const ImageIcon = styled(BsImage)`
    font-size: 25px;
    color: #B5B5B5;
`;

const FileInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
`;

const CustomDeleteIcon = styled(PiTrashSimple)`
    color: #A54D27;
    cursor: pointer;
    font-size: 2opx;
     background-color: transparent;
`;

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
