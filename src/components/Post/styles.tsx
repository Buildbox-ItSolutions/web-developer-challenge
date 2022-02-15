import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 205px;
    padding: 12px 12px 32px 24px;
    margin-bottom: 16px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
    display: grid;
    grid-template-columns: 88px 1fr 20px;
    grid-template-rows: 44px 1fr auto auto;
    grid-template-areas: 
        ". . delete"
        "img text ."
        ". sent ."
        ". name .";

    @media(max-width: 767px) {
        grid-template-areas:
            ". . delete"
            "img . ."
            "text text ."
            "sent name ."
    }
`

export const Icon = styled('img')<{ title: string }>`
    width: 20px;
    height: 20px;
    cursor: pointer;
    grid-area: delete;
    
    &:hover {
        transform: scale(1.1)
    }
`

export const Image = styled('div')<{ size: string}>`
    width: 88px;
    height: 88px;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    grid-area: img;
    
    img {
        width: ${props => props.size};
        height: ${props => props.size};
        object-fit: cover;
    }
`

export const Text = styled.p`
    text-align: left;
    font-size: 16px;
    margin-left: 32px;
    margin-right: 24px;
    margin-bottom: 24px;

    grid-area: text;

    @media(max-width: 767px) {
        margin-left: 0;
        margin-right: 0;
        margin-top: 24px;
    }
`

export const Span1 = styled.div`
    text-align: left;
    font-size: 12px;
    color: #5f5f5f;
    margin-left: 32px;

    grid-area: sent;

    @media(max-width: 767px) {
        margin-left: 0;
    }
`

export const Span2 = styled.div`
    text-align: left;
    font-size: 14px;
    color: #7a7a7a;
    margin-left: 32px;

    grid-area: name;

    @media(max-width: 767px) {
        margin-left: 0;
    }
`