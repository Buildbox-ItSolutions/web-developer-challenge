import { useEffect, useState } from "react";
import { Publication } from "../../types/Publication";

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

