"use client";

import styled from "styled-components";

export const TextAreaContainer = styled.textarea`
    width: 100%;
    height: 80px;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    background-color: #494949;
    color: #ffffff;
    font-family: Roboto-Regular, sans-serif;
    border: none;
    resize: none;

    &::placeholder {
        color: #9f9f9f;
    }
`;
