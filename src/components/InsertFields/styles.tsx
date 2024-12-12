import styled from 'styled-components'

export const Container = styled('div')<{ src: string, size: string }>`
    width: 516px;
    min-height: 353px;
    margin-top: 40px;
    padding: 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 767px) {
        width: 90%;
        min-width: 320px;
    }

    label {
        width: 88px;
        height: 88px;
        border-radius: 36px;
        border: solid 1px #4b4b4b;
        background: ${props => `url(${props.src})`} no-repeat center;
        background-size: ${props => props.size};
        cursor: pointer;

        &:hover {
            background-color: #3b3b3b;
        }
    }
`

export const Input = styled.input`
    height: 40px;
    padding: 10px;
    border-radius: 8px;
    border: solid 1px #3b3b3b;
    background-color: #494949;
    margin-bottom: 8px;
    margin-top: 16px;
    font-size: 14px;
    align-self: stretch;
    `

export const TextArea = styled.textarea`
    min-height: 80px;
    padding: 10px;
    border-radius: 8px;
    border: solid 1px #3b3b3b;
    background-color: #494949;
    resize: none;
    font-size: 14px;
    margin-bottom: 8px;
    align-self: stretch;
    `

export const ErrorMSG = styled.span`
    align-self: flex-start;
    text-align: left;
    font-size: 12px;
    color: #d35757;
    margin-bottom: 8px;
    margin-left: 5px;
`

export const Buttons = styled.div`
    align-self: flex-end;
    margin-top: 24px;

    @media(max-width: 767px) {
        align-self: stretch;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    span {
        font-size: 14px;
        text-decoration: underline;
        color: #5f5f5f;
        margin-right: 24px;
        cursor: pointer;

        @media(max-width: 767px) {
            font-size: 16px;
        }

        &:hover {
            color: #7f7f7f;;
        }
    }

    button {
        background-color: #5f5f5f;
        color: #313131;
        padding: 12px 24px;
        border-radius: 8px;
        border: solid 1px #3b3b3b;
        cursor: pointer;

        @media(max-width: 767px) {
            font-size: 16px;
            padding: 12px 30px;
        }

        &:hover {
            background-color: #7f7f7f;
        }
    }
`