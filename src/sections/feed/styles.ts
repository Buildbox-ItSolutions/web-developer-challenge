import styled from "styled-components";

const FeedContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;

    flex-grow: 1;
`

const FeedSpan = styled.span`
    color: #7a7a7a;
    font-weight: 500;
`

export {
    FeedContainer,
    FeedSpan
}