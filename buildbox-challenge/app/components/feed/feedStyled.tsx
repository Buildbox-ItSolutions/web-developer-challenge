import styled from "styled-components";

export const FeedContainer = styled.div`
    margin-top: 3.5rem;
    width: 90%;

    > h3 {
        color: #7a7a7a;
        font-weight: 500;
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
    }

    > p {
        text-align: center;
        font-size: 0.75rem;
    }


    @media (min-width: 768px) {
        width: 60%
    }
    @media (min-width: 1024px) {
        width: 40%;
    }
`

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`