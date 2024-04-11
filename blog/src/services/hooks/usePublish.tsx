import { ChangeEvent, useEffect, useState } from "react";
import { Publication } from "../types/Publication";

export const usePublications = () => {
    const [publications, setPublications] = useState<Publication[]>([]);

    useEffect(() => {
        const storedPublications: Publication[] = JSON.parse(localStorage.getItem('publications') || '[]');
        setPublications(storedPublications)
    }, [])

    const updatePublications = (newPublications: Publication[]) => {
        setPublications(newPublications)
    }

    const handlePublish = () => {
        const name = (document.getElementById('input-name') as HTMLInputElement).value;
        const description = (document.getElementById('input-description') as HTMLInputElement).value;
        const inputImage = document.getElementById('image-upload') as HTMLInputElement;

        if (inputImage.files && inputImage.files[0]) {
            const reader = new FileReader();

            reader.onload = function(event) {
                const imagePath = event.target?.result as string;

                if (name && description && imagePath) {
                    const publication = { name, description, imagePath };

                    let publications = JSON.parse(localStorage.getItem('publications') || '[]');
                    publications.push(publication);
                    localStorage.setItem('publications', JSON.stringify(publications));

                    updatePublications(publications);

                    (document.getElementById('input-name') as HTMLInputElement).value = '';
                    (document.getElementById('input-description') as HTMLInputElement).value = '';
                    (document.getElementById('image-upload') as HTMLInputElement).value = '';
                    (document.getElementById('image-preview') as HTMLInputElement).src = '';
                } else {
                    alert('Preencha todos os campos!');
                }
            };

            reader.readAsDataURL(inputImage.files[0]);
        } else {
            alert('Selecione uma imagem!');
        }
    };

    return { publications, handlePublish };
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