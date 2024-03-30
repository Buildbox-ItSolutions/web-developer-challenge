"use client"
import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #313131;
    padding: 24px;
    width: 516px;
    height: 353px;
    border: solid 1px #3b3b3b;
    border-radius: 3px;
    gap: 10px;

    @media (max-width: 729px) {
        width: 416px;
        margin-right: 50px;
    }

    @media (max-width: 496px) {
        width: 316px;
        margin-right: 50px;
    }
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    margin-top: 20px;
    margin-bottom: -90px;
`

export const PicContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
