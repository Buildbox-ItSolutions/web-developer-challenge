import { useEffect, useState } from "react";
import { Publication } from "../../types/Publication";

export const usePublications = () => {
    const [publications, setPublications] = useState<Publication[]>([]);

    useEffect(() => {
        const storedPublications: Publication[] = JSON.parse(localStorage.getItem('publications') || '[]');
        setPublications(storedPublications)
    }, [publications])

    const handlePublish = () => {
        const name = (document.getElementById('input-name') as HTMLInputElement).value;
        const description = (document.getElementById('input-description') as HTMLInputElement).value;
        const inputImage = document.getElementById('image-upload') as HTMLInputElement;

        if (name && description) {
            if (inputImage.files && inputImage.files[0]) {
                const reader = new FileReader();

                reader.onload = function(event) {
                    const imagePath = event.target?.result as string;

                    if (imagePath) {
                        const publication = { name, description, imagePath };

                        const updatedPublications = [...publications, publication];
                        localStorage.setItem('publications', JSON.stringify(updatedPublications));

                        setPublications(updatedPublications);

                        (document.getElementById('input-name') as HTMLInputElement).value = '';
                        (document.getElementById('input-description') as HTMLInputElement).value = '';
                        (document.getElementById('image-upload') as HTMLInputElement).value = '';
                        (document.getElementById('image-preview') as HTMLInputElement).src = 'https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png';
                    } else {
                        alert('Erro ao processar a imagem!');
                    }
                };

                reader.readAsDataURL(inputImage.files[0]);
            } else {
                alert('Selecione uma imagem!');
            }
        } else {
            alert('Preencha todos os campos!');
        }
    };

    return { publications, handlePublish };
};
