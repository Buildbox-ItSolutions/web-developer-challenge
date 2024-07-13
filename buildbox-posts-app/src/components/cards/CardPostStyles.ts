import styled from 'styled-components';
import { TiDeleteOutline } from "react-icons/ti";


export const Card = styled.section`
    background-color: var(--bg-secondary);
    border: 1px solid var(--border-primary);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 2rem;
    width: 90vw;

    @media (min-width: 640px) {
        width: 80vw;
    }

    @media (min-width: 1024px) {
        width: 60vw;
    }

    @media (min-width: 1536px) {
        width: 40vw;
    }
`;

export const CardWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 768px) {
        align-items: start;
        flex-direction: row;
        gap: 3rem;
    }
`;

export const RemoveIcon = styled(TiDeleteOutline)`
    align-self: end;
    color: var(--alert);
    cursor: pointer;
    display: flex;
    height: 3rem;
    width: 3rem;
`

export const CardContent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

export const CardUser = styled.span`
    color: var(--text-foreground);
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    font-weight: 400;
    text-align: left;

    > span + span {
        font-size: 1.6rem;
        font-weight: 500;
    }
`;

export const Message = styled.p`
    color: var(--text-secondary);
    text-align: left;
`;