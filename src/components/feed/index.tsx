import React from "react";
import styled from "styled-components";

import CardPubli from "../cardPubli/index.tsx";

const StyledContent = styled.div`
    margin: auto;
    width: 516px;
    height: 100%;
    margin-top: 56px;
`;

const StyledP = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #7A7A7A;
`;

export default function Feed() {
    return (
        <StyledContent>
            <StyledP>Feed</StyledP>
            <section style={{width: '100%'}}>
                <CardPubli />
            </section>
        </StyledContent>
    );
}