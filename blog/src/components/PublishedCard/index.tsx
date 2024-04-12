import React, { useEffect, useState } from "react";
import { IconX } from "../../utils/icons/x";
import { Publication } from "../../services/types/Publication";
import { Card, CardFooter, CardImage, CardInfo, CardText, SenderInfo, SenderLabel, SenderName } from "./style";


export default function PublishedCard() {
    const [publications, setPublications] = useState<Publication[]>([]);

    useEffect(() => {
        const storedPublications: Publication[] = JSON.parse(localStorage.getItem('publications') || '[]');
        setPublications(storedPublications);
    }, [publications]);

    const handleRemovePublication = (index: number) => {
        const updatedPublications = [...publications];
        updatedPublications.splice(index, 1);
        setPublications(updatedPublications);
        localStorage.setItem('publications', JSON.stringify(updatedPublications));
    };
    
    return (
        <>
        {publications.slice().reverse().map((publication, index) => (
            <Card key={index}>
                <button onClick={() => handleRemovePublication(index)}>
                    x
                </button>
                <CardInfo>
                    <CardImage 
                        src={publication.imagePath} 
                        alt="Imagem de perfil" 
                    />
                    <CardText>{publication.description}</CardText>
                </CardInfo>
                <CardFooter>
                    <SenderInfo>
                        <SenderLabel>Enviado por</SenderLabel>
                        <SenderName>{publication.name}</SenderName>
                    </SenderInfo>
                </CardFooter>
            </Card>
        ))}
        </>
    );
}
