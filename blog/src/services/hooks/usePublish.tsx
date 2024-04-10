import { ChangeEvent, useState } from "react";

export const handlePublish = () => {
    const name = (document.getElementById('input-name') as HTMLInputElement).value;
    const description = (document.getElementById('input-description') as HTMLInputElement).value;
    const inputImage = document.getElementById('image-upload') as HTMLInputElement;
    
    
    if (inputImage.files && inputImage.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const imagePath = event.target?.result as string;

            if (name && description && imagePath) {
                localStorage.setItem('cardName', name);
                localStorage.setItem('cardDescription', description);
                localStorage.setItem('cardImagePath', imagePath);
            } else {
                alert('Preencha todos os campos!');
            }
        };

        
        reader.readAsDataURL(inputImage.files[0]);
    } else {
        alert('Selecione uma imagem!');
    }
};

export const useImagePreview = () => {
    const [imagePreview, setImagePreview] = useState("");
    const [imagePresent, setImagePresent] = useState(true);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

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