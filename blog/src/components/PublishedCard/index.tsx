import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IconX } from "../../utils/icons/x";
import { Publication } from "../../services/types/Publication";

const Card = styled.div`
    width: 516px;
    height: 225px;
    margin: 40px auto 56px;
    padding: 12px 12px 32px 24px; 
    border-radius: 3px;
    border: solid 1px var(--greyish-brown-two);
    background-color: var(--black-third);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
        display: flex;
        justify-content: flex-end;
        border: none;
        background: transparent;
        cursor: pointer;
    }
`;

const CardInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
`;

const CardImage = styled.img`
    width: 88px;
    height: 88px;
    margin: 24px 32px 16px 0;
    object-fit: contain;
    border-radius: 50%; 
`;

const CardText = styled.p`
    width: 348px;
    height: 80px;
    margin: 24px 12px 24px 32px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: var(--warm-grey-three);
`;

const CardFooter = styled.div`
    display: flex;
    align-items: center;
`;

const SenderInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
`;

const SenderLabel = styled.p`
    width: 66px;
    height: 14px;
    margin: 16px 274px 2px 32px;
    font-family: Roboto;
    font-size: 11px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.29px;
    text-align: left;
    color: var(--brownish-grey);
    align-items: start;
    justify-content: flex-start;
`;

const SenderName = styled.span`
    width: 103px;
    height: 17px;
    margin: 2px 237px 0 32px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: var(--warm-grey-two);
`;

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
