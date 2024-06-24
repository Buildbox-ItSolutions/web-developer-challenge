import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { IconX } from "../../utils/icons/x";
import { Publication } from "../../services/types/Publication";
import {  Card, CardFooter, CardImage, CardInfo, CardText, Feed, SenderInfo, SenderLabel, SenderName } from "./style";

export default function PublishedCard() {
    const [publications, setPublications] = useState<Publication[]>([]);

    useEffect(() => {
        const storedPublications: Publication[] = JSON.parse(localStorage.getItem('publications') || '[]');
        setPublications(storedPublications);
    }, [publications]);

    const handleRemovePublication = (index: number) => {
        const originalIndex = publications.length - 1 - index;
        const updatedPublications = [...publications];
        updatedPublications.splice(originalIndex, 1);
        setPublications(updatedPublications);
        localStorage.setItem('publications', JSON.stringify(updatedPublications));
    };
    
    return (
        <>
        {publications.length > 0 && <Feed>FEED</Feed>}
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
                            <div>
                                    <CardText>{publication.description}</CardText>
                                    <CardFooter>
                                        <SenderInfo>
                                            <SenderLabel>Enviado por</SenderLabel>
                                            <SenderName>{publication.name}</SenderName>
                                        </SenderInfo>
                                    </CardFooter>
                            </div>
                            </CardInfo>
                        </Card>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </>
    );
}
