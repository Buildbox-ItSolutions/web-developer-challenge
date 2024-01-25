import React from 'react';
import { ImageContainer, ImageIcon, SendFile, ShowImage } from './styles';
import imageIcon from '../../assets/images/image-icon.png';

type Props = {
    src?: string | undefined,
    setImage?: (file: string | undefined) => void
};

const Image:React.FC<Props>= ({src, setImage}) => {
    const handleChangeImage = (event:React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList;
        if(setImage){
            const reader = new FileReader();
            reader.readAsDataURL(selectedFiles[0]);
            reader.onload = () => {
                if(typeof(reader.result) === 'string'){
                    setImage(reader.result);
                }
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };    
        }
    };

    return (
        <ImageContainer>
            {src ? (
                <ShowImage src={src} />
            ) : (
                <>
                    <SendFile 
                        type="file" 
                        id="changeImage" 
                        onChange={handleChangeImage}
                        accept="image/png, image/gif, image/jpeg"
                    />
                    <label htmlFor={"changeImage"}><ImageIcon src={imageIcon} /></label>
                </>
            )}
        </ImageContainer>
    );
}

export default Image;