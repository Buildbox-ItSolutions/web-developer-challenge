import styled from "styled-components";
import { handlePublish } from "../../services/hooks/usePublish";

const Button = styled.button`
    width: 98px;
    height: 41px;
    margin: 0 0 0 24px;
    padding: 12px 24px;
    border-radius: 8px;
    background-color: var(--dark-lime-green);
    cursor: pointer;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: white;
    border: none;
`;

export default function ButtonPublish() {
    return (
        <Button onClick={handlePublish}>Publicar</Button>
    );
}
