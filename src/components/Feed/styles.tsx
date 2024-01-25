import styled from "styled-components";

export const FeedContainer = styled.div`
    width: calc(33.33% + 24px);
    min-height: 353px;
    margin: 40px auto;
    @media (max-width: 1200px) {
        width: calc(66.66% + 42px);
        margin: 20px auto;
    }
    @media (max-width: 800px) {
        width: 93%;
        margin: 10px 0;
        padding: 8px;
    }
`;

export const H2 = styled.h1`
    color: var(--warm-grey-two);
    text-align: left;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    padding-left: 0;
    margin-left: 0;
    width: 100%;
    margin-left: -12px;
    @media (max-width: 800px) {
        width: 95%;
        margin: 10px auto;
        padding: 8px;
        margin-left: -8px;
    }
`;