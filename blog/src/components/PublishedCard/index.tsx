import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { IconX } from "../../utils/icons/x";
import { Publication } from "../../services/types/Publication";
import { Card, CardFooter, CardImage, CardInfo, CardText, SenderInfo, SenderLabel, SenderName } from "./style"; // Remova o import do TransitionStyles

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
        <h1>FEED</h1>
        <TransitionGroup>
            {publications.slice().reverse().map((publication, index) => (
                <CSSTransition key={index} classNames="card" timeout={300}>
                    <Card>
                        <button onClick={() => handleRemovePublication(index)}>
                            <IconX />
                        </button>
                        <CardInfo>
                            <CardImage 
                                src={publication.imagePath}
                                alt="imagem"
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
                </CSSTransition>
            ))}
        </TransitionGroup>
        </>
    );
}
