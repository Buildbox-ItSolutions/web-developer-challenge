import styled from "styled-components";

const NewPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 400px;
    width: 100%;

    padding: 3rem;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
`

const PostImageContainer = styled.div<{imageURL: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    /* width: 88px; */
    width: 3%.5rem;
    height: 3%.5rem;
    /* height: 88px; */
    padding: 32px;
    object-fit: contain;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    background-color: rgba(75, 75, 75, 0);

    background-image: ${props => props.imageURL? `url(${props.imageURL})` : ''};
    background-repeat: no-repeat;
    background-size: cover;
`

const PostInputName = styled.input`
    flex-grow: 1;
    padding: 1rem;
    border-radius: 8px;
    background-color: #494949;
    outline: none;
    appearance: none;
    border: none;

    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #9f9f9f;
`

const PostTextAreaMessage = styled.textarea`
    padding: 1rem;
    flex-grow: 1;
    border-radius: 8px;
    background-color: #494949;
    outline: none;
    appearance: none;
    border: none;

    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #9f9f9f;
`

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 400px;
`

const ButtonsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    align-self: end;
`

const DeleteButton = styled.button`

    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    border: none;
    background-color: transparent;
    text-decoration: underline;
    color: #5f5f5f;
    cursor: pointer;
`

const PublishButton = styled.button<{disabled?: boolean}>`

    padding: 0.8rem 1.6rem;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    border-radius: 8px;
    cursor: pointer;
    background-color: ${props => props.disabled? "#5f5f5f" : '#71bb00'};
    color: ${props => props.disabled? "#313131" : 'white'};;
    border: none;
`

export {
    PostImageContainer,
    PostInputName,
    PostTextAreaMessage,
    NewPostContainer,
    InputsContainer,
    DeleteButton,
    PublishButton,
    ButtonsContainer
}