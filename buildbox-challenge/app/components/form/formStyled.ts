"use client";
import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

`;

export const FormContainerImage = styled.div`
    position: relative;
`


export const ButtonRemoveImage = styled.button`
    position: absolute;
    top: 50%;
    right: -50px;
    transform: translate(-50%, -50%);
    position: absolute;
`;


export const ContainerButtons = styled.div`
    display: flex;
    gap: 1.5rem;
    align-self: flex-end;
    margin-top: 2rem;
`;
