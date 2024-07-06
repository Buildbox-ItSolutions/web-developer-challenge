import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100vw;
    padding-top: 6rem;
    background-color: #343434;
`;

export const Body = styled.article`
    width: 100%;
    max-width: 40rem;
    padding: 3rem 2rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const FeedTitle = styled.h2`
    font-size: 1rem;
    color: #7a7a7a;
    margin-top: 2rem;
`;

export const NullFeed = styled.p`
    color: #7a7a7a;
    text-align: center;
`;
