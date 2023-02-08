import styled from 'styled-components'

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

const Thumbnail = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
    margin-top: 10px;
`

const RemoveButton = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
    background-color: transparent;
    color: red;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border-radius: 100%;
    margin: 20px 0;
`

const InputFile = styled.input`
    opacity: 0;
    top: 0;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
`

const ErrorMessage = styled.div`
    color: #9d9d9d;
    font-size: 12px;
    margin-top: 4px;
`
const ThumbnailContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`

export { ImageContainer, InputContainer, InputFile, RemoveButton, Thumbnail, ErrorMessage, ThumbnailContainer }
