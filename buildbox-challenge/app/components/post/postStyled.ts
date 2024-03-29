"use client";
import styled from "styled-components";
import { CardContainer } from "../card/cardStyled";
import css from "styled-jsx/css";
export const PostContent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    & > div > p:first-child {
        color: #5f5f5f;
        font-size: 0.75rem;
        font-weight: 500;
    }

    & > div > p:nth-child(2) {
        color: #7a7a7a;
        font-size: 0.875rem;
        font-weight: 500;
    }
`;
export const PostContainer = styled(CardContainer)`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 3.5rem 1.5rem 2rem 1.5rem;
`;

export const ButtonClose = styled.button`
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
`;
export const PostMessage = styled.p`
    color: #9f9f9f;
`;
