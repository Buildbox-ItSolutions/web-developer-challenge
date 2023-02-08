import styled from "styled-components";

const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Feed = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const FeedBox = styled.div`
    width: 100%;
    max-width: 516px;
`;

const FeedSpan = styled.span`
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #7a7a7a;
`;

export {Content, Feed, FeedBox, FeedSpan}