import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 225px;
    padding: 12px 12px 32px 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
`

export const DeleteButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
`

export const MainContentContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding-top: 25px;
    gap: 25px;
`


export const PhotoContainer = styled.div`
    width: 100px;
    margin-right: 16px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
`