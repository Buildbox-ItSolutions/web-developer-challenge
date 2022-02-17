import styled from "styled-components";

export const FeedSection = styled.h1`
    max-width: 516px;    
    width: 100%;
    height: 17px;
    margin: 56px 0 8px 0;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #7a7a7a;

    @media(max-width: 566px) {
        max-width: 468px;
        padding: 0 15px;
    }
`;

export const FeedArea = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .transition-appear {
        opacity: 0.01;
        transform: translate(0, -10px);
    }

    .transition-appear-active {
        opacity: 1;
        transform: translate(0, 0);
        transition: all 300ms ease-in;
    }

    .transition-exit {
        opacity: 1;
        transform: translate(0, 0);
    }

    .transition-exit-active {
        opacity: 0.01;
        transform: translate(0, 10px);
        transition: all 300ms ease-in;
    }
`;

