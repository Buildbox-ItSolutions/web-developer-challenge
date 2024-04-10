import styled from "styled-components";
import { useImagePreview } from "../../services/hooks/usePublish";

const Button = styled.span`
    width: 60px;
    height: 17px;
    margin: 12px 24px 12px 0;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: var(--brownish-grey);

    cursor: pointer;
    text-decoration: underline;
`;

export default function ButtonTrash() {
    const { handleToDiscard } = useImagePreview();

    return (
        <Button onClick={handleToDiscard}>Descartar</Button>
    );
}