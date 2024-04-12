import { ChangeEvent, useState } from "react";

export const useImagePreview = () => {
    const [imagePreview, setImagePreview] = useState("");
    const [imagePresent, setImagePresent] = useState(true);
    const [, setSelectedImage] = useState<File | null>(null);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result as string);
                setSelectedImage(file);
                console.log("Valor definido no estado da prévia da imagem:", reader.result);
            };
            reader.readAsDataURL(file);
            console.log("Arquivo selecionado:", file);
        } 
    };

    const handleRemoveImage = () => {
        setImagePreview("");
        setImagePresent(false);
        setSelectedImage(null);
    };

    const handleToDiscard = () => {
        
        const inputName = document.getElementById('input-name') as HTMLInputElement;
        const inputDescription = document.getElementById('input-description') as HTMLInputElement;
        const inputImage = document.getElementById('image-preview') as HTMLInputElement;


        if (inputName && inputDescription && inputImage) {
            inputName.value = '';
            inputDescription.value = '';
            inputImage.src = '';
        }

        handleRemoveImage()
    }

    return { imagePreview, imagePresent, handleImageChange, handleRemoveImage, handleToDiscard }
};