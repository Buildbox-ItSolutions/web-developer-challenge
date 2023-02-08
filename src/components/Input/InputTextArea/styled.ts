import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`

const Label = styled.label`
    color: #a3a3a3;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
`

const Textarea = styled.textarea`
    border: 1px solid #323232;
    border-radius: 4px;
    font-size: 16px;
    padding: 8px 3px;
    width: 100%;
    background-color: #5a5a5a;
    color: #fff;

    &:focus {
        border-color: #555;
        outline: none;
    }
`

const ErrorMessage = styled.div`
    color: #9d9d9d;
    font-size: 12px;
    margin-top: 4px;
`
export { Container, ErrorMessage, Label, Textarea }
