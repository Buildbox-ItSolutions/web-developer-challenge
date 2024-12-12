import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: 16px;
`

export const PicWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 88px;
    height: 88px;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
`

export const Photo = styled.img`        
    width: 88px;
    height: 88px;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
`

export const TrashWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 16px;

    img {
        &hover {
            cursor: pointer;
        }
    }
`