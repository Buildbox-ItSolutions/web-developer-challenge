import styled from "styled-components";

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    background-color: #313131;

    padding: 1rem;
    padding-top: 0.8rem;

    flex-grow: 1;
`

const PostContentContainer = styled.div`
    display: flex;
    gap: 1rem;
`

const PostImage = styled.img`
    width: 5rem;
    height: 5rem;

    object-fit: contain;
    border-radius: 36px;
`

const DeleteIcon = styled.img`
    width: 1.25rem;
    height: 1.25rem;
    align-self: end;
    cursor: pointer;
`

const PostMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    padding-right: 0.8rem;
`

const PostMessage = styled.p`
    color: #9f9f9f;
    margin: 0;
`

const PostAuthorContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const SendBySmall = styled.small`
    font-size: 12px;
    font-weight: 500;
    color: #5f5f5f
`

const SendBy = styled.span`
    font-size: 14px;
    color: #7a7a7a;
`

export {
    PostContainer,
    DeleteIcon,
    PostContentContainer,
    PostImage,
    PostMessage,
    PostMessageContainer,
    PostAuthorContainer,
    SendBySmall,
    SendBy
}