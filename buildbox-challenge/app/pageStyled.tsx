"use client"
import styled from "styled-components";

export const Container = styled.div`
    background-color: #343434;
    padding-bottom: 2rem;
    
`

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.5rem;

`



export const ContentForm = styled.div`
    width: 90%;

    @media (min-width: 768px) {
        width: 60%
    }
    @media (min-width: 1024px) {
        width: 40%;
    }
`
