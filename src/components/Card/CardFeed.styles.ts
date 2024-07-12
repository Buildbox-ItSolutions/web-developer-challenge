import styled from "styled-components";

export const Card = styled.div`
    background-color: #313131;
    display: flex;
    width: 600px;
    height: 250px;
    flex-direction: column;
    padding: 10px;
`
export const CloseCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: red;
    border: 1px solid red;
    border-radius: 15px;
    width: 25px;
    height: 25px;
`
export const CardContent = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
export const CardHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`
export const CardText = styled.p`
    font-size: 15px;
    font-weight: 500;
    margin: 0;
    color: #959595;
    line-break: anywhere;
`
