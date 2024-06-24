import React, { ChangeEvent, useState } from "react";


export const useImagePreview = () => {
    const [imagePreview, setImagePreview] = useState<string>("");
    const [imagePresent, setImagePresent] = useState<boolean>(true);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [showWarning, setShowWarning] = useState<boolean>(false);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];

            if (file.size > 1 * 1024 * 1024) {
                setShowWarning(true);
                return;
            }

            setShowWarning(false);

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
        const inputName = document.getElementById("input-name") as HTMLInputElement;
        const inputDescription = document.getElementById("input-description") as HTMLInputElement;
        const inputImage = document.getElementById("image-preview") as HTMLInputElement;

        if (inputName && inputDescription && inputImage) {
            inputName.value = "";
            inputDescription.value = "";
            inputImage.src = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png";
        }

        handleRemoveImage();
    };

    return { imagePreview, imagePresent,showWarning, handleImageChange, handleRemoveImage, handleToDiscard };
};
