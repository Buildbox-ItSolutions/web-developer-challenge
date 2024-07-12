import styled from 'styled-components';

export const CardPostContainer = styled.section`
    align-items: center;
    background-color: var(--bg-primary);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
    padding-bottom: 4rem;
`;

export const Feed = styled.span`
    color: var(--text-foreground);
    font-weight: 600;
    text-align: left;
    width: 90vw;

    @media (min-width: 640px) {
        width: 80vw;
    }

    @media (min-width: 640px) {
        width: 60vw;
    }

    @media (min-width: 1536px) {
        width: 40vw;
    }
`;