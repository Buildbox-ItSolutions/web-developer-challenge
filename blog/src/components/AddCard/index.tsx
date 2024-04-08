import styled from "styled-components";
import { DeleteIcon } from "../../utils/icons/delete";
import InputName from "../InputName";
import InputDescription from "../InputDescription";
import ButtonTrash from "../Buttons/buttonTrash";
import ButtonPublish from "../Buttons/buttonPublish";
import PublishedCard from "../PublishedCard";

const Card = styled.div`
    width: 516px;
    height: 353px;
    margin: 40px auto 56px;
    padding: 24px;
    border-radius: 3px;
    border: solid 1px var(--greyish-brown-two);
    background-color: var(--black-third);
`;

const ItensContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    

    img {
        width: 88px;
        height: 88px;
        margin-right: 16px;
        object-fit: contain;
        border-radius: 50%; 
        cursor: pointer;
        background-image: url("base.png");
    }

    span {
        padding-top: 10px;
        padding-left: 15px;
        align-items: center;
        cursor: pointer;
    }
`;

const ItensInputs = styled.div`
    padding: 10px;    
`;

const ItensButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    height: 24px;
`;

export default function AddCard() {
    return (
        <>
        <Card>
            <ItensContent>
                <img src="mar.jpg" alt="Imagem"/>
                <span>
                    <DeleteIcon />
                </span>
            </ItensContent>
            <ItensInputs>
                <InputName />
                <InputDescription />
            </ItensInputs>
            <ItensButtons>
                <ButtonTrash />
                <ButtonPublish />
            </ItensButtons>
        </Card>
        <PublishedCard />
        </>
    );
}

