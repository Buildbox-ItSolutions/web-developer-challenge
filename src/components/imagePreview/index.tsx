import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { FaFileImage } from 'react-icons/fa'
import { ErrorMessage, ImageContainer, InputContainer, InputFile, RemoveButton, Thumbnail, ThumbnailContainer } from './styled'

interface ImagePreviewProps {
    selectedImage: Blob | MediaSource | undefined
    setSelectedImage: React.Dispatch<React.SetStateAction<File | undefined>>
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ selectedImage, setSelectedImage }) => {
    const imageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedImage(event.target.files[0])
        }
    }

    const removeSelectedImage = () => {
        setSelectedImage(undefined)
    }

    return (
        <ImageContainer>
            {selectedImage ? (
                <>
                    <ThumbnailContainer>
                        <Thumbnail src={URL.createObjectURL(selectedImage)} alt="Thumb" />
                        <RemoveButton onClick={removeSelectedImage}>
                            <BsTrash size={30} />
                        </RemoveButton>
                    </ThumbnailContainer>
                </>
            ) : (
                <InputContainer>
                    <InputFile accept="image/*" type="file" onChange={imageChange} />
                    <FaFileImage size={50} />
                </InputContainer>
            )}
            {!selectedImage && <ErrorMessage>Imagem é obrigatória</ErrorMessage>}
        </ImageContainer>
    )
}

export default ImagePreview
